// ─── goldPriceService.js — Auto gold price with caching & fallback ───
// Frontend-only, no backend, graceful degradation

const CACHE_KEY = "arcane-gold-price-cache";
const CACHE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours in ms

// ─── API Sources (free, no key) ───
const SOURCES = {
  // Exchange rate USD → IDR
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
  // Gold price USD per troy ounce
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
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    clearTimeout(timer);
    return null;
  }
}

// ─── Try multiple sources ───
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

  // 2. Try live fetch
  try {
    const [goldResult, exchangeResult] = await Promise.all([
      trySources(SOURCES.goldPrice),
      trySources(SOURCES.exchangeRate)
    ]);

    if (goldResult && exchangeResult) {
      const pricePerGram = (goldResult.value / GRAMS_PER_OUNCE) * exchangeResult.value;
      const result = {
        pricePerGram: Math.round(pricePerGram),
        pricePerOunce: goldResult.value,
        exchangeRate: exchangeResult.value,
        currency: "IDR",
        symbol: "Rp",
        lastUpdated: new Date().toISOString().split("T")[0],
        status: "live",
        source: `gold:${goldResult.value_source || goldResult.source} rate:${exchangeResult.source || "open-er-api"}`
      };

      // Strip internal fields before cache
      const { _cachedAt, ...clean } = result;
      saveCache(clean);
      return result;
    }
  } catch { /* fall through */ }

  // 3. Fallback: use cache if exists (even stale), else static config
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
 * Force refresh (bypass cache).
 * @param {object} fallbackConfig
 * @returns {Promise<GoldPriceResult>}
 */
export async function forceRefresh(fallbackConfig) {
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
