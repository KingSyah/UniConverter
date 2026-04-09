// ─── goldPriceService.js — Auto gold price with caching & fallback ───
// GoldAPI.io (primary) + free APIs (fallback) + static (last resort)
// Frontend-only, no backend, graceful degradation

const CACHE_KEY = "arcane-gold-price-cache";
const CACHE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours in ms

// ─── GoldAPI.io (primary — 100 req/month free) ───
const GOLDAPI_TOKEN = "goldapi-1seotsmnqynvux-io";
const GOLDAPI_BASE = "https://www.goldapi.io/api";

// ─── Free API Sources (fallback, no key needed) ───
const SOURCES = {
  exchangeRate: [
    {
      name: "open-er-api",
      url: "https://open.er-api.com/v6/latest/USD",
      parse: (data) => data?.rates?.IDR
    },
    {
      name: "cdnjs-currency",
      url: "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
      parse: (data) => data?.usd?.idr
    }
  ],
  goldPrice: [
    {
      name: "fawaz-gold",
      url: "https://cdn.jsdelivr.net/npm/@fawazahmed0/gold-api@latest/v1/usd/ounce.json",
      parse: (data) => {
        const price = data?.price ?? data?.usd?.ounce;
        return typeof price === "number" ? price : null;
      }
    },
    {
      name: "fawaz-gold-alt",
      url: "https://cdn.jsdelivr.net/npm/@fawazahmed0/gold-api@latest/v1/usd.json",
      parse: (data) => {
        const price = data?.usd?.ounce ?? data?.ounce;
        return typeof price === "number" ? price : null;
      }
    }
  ]
};

const GRAMS_PER_OUNCE = 31.1035;

// ─── Cache ───
function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cache = JSON.parse(raw);
    if (!cache.timestamp || !cache.data) return null;
    return cache;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data
    }));
  } catch { /* storage full or blocked */ }
}

function isCacheFresh(cache) {
  return cache && (Date.now() - cache.timestamp) < CACHE_MAX_AGE;
}

// ─── Fetch with timeout ───
async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    clearTimeout(timer);
    return null;
  }
}

// ─── Try free fallback sources ───
async function trySources(sources) {
  for (const src of sources) {
    try {
      const data = await fetchWithTimeout(src.url);
      if (!data) continue;
      const value = src.parse(data);
      if (value != null && typeof value === "number" && value > 0) {
        return { value, source: src.name };
      }
    } catch { /* try next */ }
  }
  return null;
}

// ─── Fetch from GoldAPI.io (primary) ───
// Returns { pricePerOunce, pricePerGram24k, source } or null
async function fetchFromGoldAPI() {
  try {
    const data = await fetchWithTimeout(
      `${GOLDAPI_BASE}/XAU/USD`,
      {
        headers: {
          "x-access-token": GOLDAPI_TOKEN,
          "Content-Type": "application/json"
        }
      },
      8000 // slightly longer timeout for primary
    );
    if (!data) return null;

    const priceOz = data.price || data.ask || data.close_price;
    if (!priceOz || priceOz <= 0) return null;

    // GoldAPI returns price_gram_24k directly — more accurate
    const priceGram24kUsd = data.price_gram_24k || (priceOz / GRAMS_PER_OUNCE);

    console.log(`[GoldAPI.io] $${priceOz}/oz, $${priceGram24kUsd}/g (24k)`);
    return {
      pricePerOunce: priceOz,
      pricePerGram24k: priceGram24kUsd,
      source: "goldapi.io"
    };
  } catch (e) {
    console.warn("[GoldAPI.io] Failed:", e.message);
    return null;
  }
}

// ═══════════════════════════════════════════
//  Public API
// ═══════════════════════════════════════════

/**
 * @typedef {Object} GoldPriceResult
 * @property {number}  pricePerGram  - IDR per gram
 * @property {number}  pricePerOunce - USD per ounce (raw)
 * @property {number}  exchangeRate  - USD to IDR
 * @property {string}  currency
 * @property {string}  symbol
 * @property {string}  lastUpdated
 * @property {string}  status - "live" | "cached" | "offline"
 * @property {string}  source - api source name or "static"
 */

/**
 * Fetch live gold price, with cache and fallback.
 * @param {object} fallbackConfig - static goldPriceConfig
 * @returns {Promise<GoldPriceResult>}
 */
export async function fetchGoldPrice(fallbackConfig) {
  // 1. Check fresh cache
  const cache = loadCache();
  if (isCacheFresh(cache)) {
    return {
      ...cache.data,
      status: "cached",
      _cachedAt: cache.timestamp
    };
  }

  // 2. Try live fetch: GoldAPI.io (gold) + free API (exchange rate)
  try {
    const [goldAPIResult, exchangeResult] = await Promise.all([
      fetchFromGoldAPI(),
      trySources(SOURCES.exchangeRate)
    ]);

    let goldPrice = null;
    let exchangeRate = null;
    let sourceLabel = "";

    // ── Gold price: try GoldAPI first, then free fallbacks ──
    if (goldAPIResult) {
      goldPrice = goldAPIResult.pricePerGram24k * GRAMS_PER_OUNCE; // convert back to oz for consistency
      sourceLabel = `gold:${goldAPIResult.source}`;
    } else {
      // Fallback to free gold APIs (no key needed)
      const freeGold = await trySources(SOURCES.goldPrice);
      if (freeGold) {
        goldPrice = freeGold.value;
        sourceLabel = `gold:${freeGold.source}`;
      }
    }

    // ── Exchange rate ──
    if (exchangeResult) {
      exchangeRate = exchangeResult.value;
      sourceLabel += ` rate:${exchangeResult.source}`;
    }

    // ── Build result if both values found ──
    if (goldPrice && exchangeRate) {
      // Use price_gram_24k directly if from GoldAPI, otherwise calculate
      const pricePerGramUsd = goldAPIResult
        ? goldAPIResult.pricePerGram24k
        : (goldPrice / GRAMS_PER_OUNCE);

      const pricePerGram = Math.round(pricePerGramUsd * exchangeRate);
      const result = {
        pricePerGram,
        pricePerOunce: goldPrice,
        exchangeRate,
        currency: "IDR",
        symbol: "Rp",
        lastUpdated: new Date().toISOString().split("T")[0],
        status: "live",
        source: sourceLabel
      };

      saveCache(result);
      return result;
    }
  } catch (e) {
    console.warn("[GoldPrice] Live fetch error:", e.message);
  }

  // 3. Fallback: use cache if exists (even stale)
  if (cache?.data) {
    return {
      ...cache.data,
      status: "cached",
      _note: "stale cache (API failed)"
    };
  }

  // 4. Ultimate fallback: static config
  return {
    pricePerGram: fallbackConfig.pricePerGram,
    pricePerOunce: Math.round(fallbackConfig.pricePerGram * GRAMS_PER_OUNCE),
    exchangeRate: null,
    currency: fallbackConfig.currency || "IDR",
    symbol: fallbackConfig.symbol || "Rp",
    lastUpdated: fallbackConfig.lastUpdated,
    status: "offline",
    source: "static"
  };
}

/**
 * Force refresh (bypass cache). Uses sparingly — counts against GoldAPI limit!
 * @param {object} fallbackConfig
 * @returns {Promise<GoldPriceResult>}
 */
export async function forceRefresh(fallbackConfig) {
  console.warn("[GoldPrice] Force refresh — this uses 1 GoldAPI request");
  localStorage.removeItem(CACHE_KEY);
  return fetchGoldPrice(fallbackConfig);
}

/**
 * Get current cache info for display.
 */
export function getCacheInfo() {
  const cache = loadCache();
  if (!cache) return null;
  return {
    timestamp: cache.timestamp,
    age: Date.now() - cache.timestamp,
    fresh: isCacheFresh(cache),
    data: cache.data
  };
}
