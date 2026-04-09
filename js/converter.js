// ─── converter.js — Pure conversion logic ───

/**
 * Convert a value from one unit to another.
 * @param {number} value
 * @param {number} fromFactor - grams per unit (source)
 * @param {number} toFactor   - grams per unit (target)
 * @returns {number}
 */
export function convert(value, fromFactor, toFactor) {
  return value * (fromFactor / toFactor);
}

/**
 * Format a number with given decimal places, clamped 0–10.
 * Removes unnecessary trailing zeros for cleaner output.
 * Examples: 2.5000 → "2.5", 100.0000 → "100", 0.1250 → "0.125"
 * @param {number} num
 * @param {number} decimals
 * @returns {string}
 */
export function formatResult(num, decimals) {
  const d = Math.min(Math.max(parseInt(decimals) || 0, 0), 10);
  return parseFloat(num.toFixed(d)).toString();
}

/**
 * Generate a safe unique id from a name.
 * @param {string} name
 * @returns {string}
 */
export function generateId(name) {
  const base = name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
  return base || `custom_${Date.now().toString(36)}`;
}

// ═══════════════════════════════════════════
//  Gold / Silver Value Conversion
// ═══════════════════════════════════════════

/**
 * Check if a unit is eligible for precious metal value conversion.
 * @param {object} unit
 * @returns {{ valid: boolean, metalType: string|null, error: string|null }}
 */
export function validateMetalUnit(unit) {
  if (!unit) return { valid: false, metalType: null, error: "No unit selected" };
  if (!unit.isPreciousMetal) {
    return {
      valid: false,
      metalType: null,
      error: `${unit.name} is not a precious metal unit. Only gold/silver weight units can be converted to value.`
    };
  }
  return { valid: true, metalType: unit.metalType || "gold", error: null };
}

/**
 * Calculate IDR value from a unit value.
 * @param {number} value - quantity in the unit
 * @param {object} unit - unit definition with factor
 * @param {object} goldConfig - { pricePerGram }
 * @param {object} silverConfig - { pricePerGram }
 * @returns {{ value: number, currency: string, metalType: string, grams: number } | { error: string }}
 */
export function calculateMetalValue(value, unit, goldConfig, silverConfig) {
  const check = validateMetalUnit(unit);
  if (!check.valid) return { error: check.error };

  const grams = value * unit.factor;
  const config = check.metalType === "silver" ? silverConfig : goldConfig;
  const idr = grams * config.pricePerGram;

  return {
    value: idr,
    currency: "IDR",
    metalType: check.metalType,
    grams,
    pricePerGram: config.pricePerGram,
    lastUpdated: config.lastUpdated
  };
}

/**
 * Generate a warning notice for cross-category conversion.
 * Returns null if same category, otherwise returns a notice object.
 * @param {object} fromUnit
 * @param {object} toUnit
 * @returns {{ message: string, emoji: string, severity: "info"|"warning" } | null}
 */
export function getCrossCategoryNotice(fromUnit, toUnit) {
  if (!fromUnit || !toUnit) return null;
  const a = fromUnit.category;
  const b = toUnit.category;
  if (a === b) return null;

  const labels = { standard: "Standard / SI", traditional: "Traditional / Historical", fantasy: "Fantasy / Arcane", custom: "Custom" };

  if (a === "standard" && b === "standard") return null;

  // Same-system cross (e.g. both Asian traditional) is less weird
  const isCrossRealm = (a === "fantasy" || b === "fantasy");
  const isCrossRealWorld = (a === "standard" && b === "traditional") || (a === "traditional" && b === "standard");

  const fromLabel = labels[a] || a;
  const toLabel = labels[b] || b;

  if (isCrossRealm) {
    return {
      message: `Converting ${fromLabel} → ${toLabel}: hasil akurat secara matematis, tapi ${b === "fantasy" ? toUnit.name : fromUnit.name} adalah satuan fiksi. Jangan dipakai beli emas ya 😄`,
      emoji: "⚡",
      severity: "info"
    };
  }

  if (isCrossRealWorld) {
    return {
      message: `${fromLabel} → ${toLabel}: konversi akurat (keduanya satuan nyata), tapi perhatikan konteks penggunaan.`,
      emoji: "📐",
      severity: "info"
    };
  }

  return {
    message: `Cross-category: ${fromLabel} → ${toLabel}. Konversi matematis valid, tapi satuan dari sistem yang berbeda.`,
    emoji: "🔀",
    severity: "info"
  };
}

// ─── Rice / Grain Detection ───

// Rice price reference (Rp per kg, medium quality Indonesia 2026)
const RICE_PRICE_PER_KG = 16_000;

// Rice/grain-related keywords for detection
const RICE_KEYWORDS = [
  "beras", "nasi", "rice", "grain", "takaran", "zakat", "mok", "mug",
  "siblakai", "kai", "cupak", "are", "bambu", "siaree", "sigantang",
  "gantang", "sinaleh", "sigunca", "sihah", "sejumput", "segenggam",
  "sideupa", "sha'", "sha_tradisional", "pikul", "koyan", "dan",
  "maund", "chatak"
];

/**
 * Check if a unit is a rice/grain measurement.
 * @param {object} unit
 * @returns {boolean}
 */
export function isRiceUnit(unit) {
  if (!unit) return false;
  const haystack = `${unit.id} ${unit.name} ${unit.description}`.toLowerCase();
  return RICE_KEYWORDS.some(kw => haystack.includes(kw));
}

/**
 * Generate a fun "absurd conversion" notice for metal ↔ rice.
 * Returns null if not applicable.
 * @param {object} fromUnit
 * @param {object} toUnit
 * @param {object} goldConfig - { pricePerGram }
 * @param {object} silverConfig - { pricePerGram }
 * @param {number} value - the input value
 * @param {number} convertedValue - the output value
 * @returns {{ message: string, emoji: string, severity: "info" } | null}
 */
export function getAbsurdConversionNotice(fromUnit, toUnit, goldConfig, silverConfig, value, convertedValue) {
  if (!fromUnit || !toUnit) return null;

  const fromIsMetal = fromUnit.isPreciousMetal;
  const toIsMetal = toUnit.isPreciousMetal;
  const fromIsRice = isRiceUnit(fromUnit);
  const toIsRice = isRiceUnit(toUnit);

  // Only trigger for metal ↔ rice
  if (!((fromIsMetal && toIsRice) || (fromIsRice && toIsMetal))) return null;

  const metalUnit = fromIsMetal ? fromUnit : toUnit;
  const riceUnit = fromIsRice ? fromUnit : toUnit;
  const metalConfig = (metalUnit.metalType === "silver") ? silverConfig : goldConfig;
  const metalLabel = metalUnit.metalType === "silver" ? "perak" : "emas";

  // Calculate grams of metal
  const metalValue = fromIsMetal ? value : convertedValue;
  const metalGrams = metalValue * metalUnit.factor;
  const metalIDR = metalGrams * metalConfig.pricePerGram;

  // How many kg of rice can you buy?
  const riceKg = metalIDR / RICE_PRICE_PER_KG;

  // How many of the rice unit?
  const riceValue = fromIsRice ? value : convertedValue;
  const riceGrams = riceValue * riceUnit.factor;
  const riceKgDirect = riceGrams / 1000;
  const riceIDR = riceKgDirect * RICE_PRICE_PER_KG;

  const metalAmountStr = metalGrams >= 1000
    ? `${(metalGrams / 1000).toFixed(2)} kg`
    : `${metalGrams.toFixed(4)} g`;

  // Fun comparisons
  const lines = [];

  if (fromIsMetal) {
    // Gold → Rice: "X mayam emas bisa beli Y kg beras!"
    lines.push(`${metalValue} ${metalUnit.name} (${metalAmountStr} ${metalLabel}) = Rp ${Math.round(metalIDR).toLocaleString("id-ID")}`);
    lines.push(`💰 Bisa beli ~${riceKg >= 1000 ? (riceKg / 1000).toFixed(1) + " ton" : riceKg.toFixed(1) + " kg"} beras (Rp ${RICE_PRICE_PER_KG.toLocaleString("id-ID")}/kg)`);

    if (riceKg > 100) {
      lines.push(`🍚 Cukup buat makan ${Math.floor(riceKg / 0.2 / 30)} orang selama sebulan!`); // 200g/meal, 3 meals/day
    }
  } else {
    // Rice → Gold: "X kg beras cuma setara Y gram emas"
    lines.push(`${riceValue} ${riceUnit.name} (${riceKgDirect >= 1 ? riceKgDirect.toFixed(2) + " kg" : riceGrams.toFixed(1) + " g"} beras) = Rp ${Math.round(riceIDR).toLocaleString("id-ID")}`);
    const equivGoldGrams = riceIDR / metalConfig.pricePerGram;
    if (equivGoldGrams < 0.01) {
      lines.push(`🪙 Setara ${(equivGoldGrams * 1000).toFixed(3)} mg ${metalLabel} — kurang dari sebutir saga!`);
    } else if (equivGoldGrams < 1) {
      lines.push(`🪙 Setara ${(equivGoldGrams).toFixed(4)} g ${metalLabel} — masih kurang dari 1 kupang`);
    } else {
      lines.push(`🪙 Setara ${equivGoldGrams.toFixed(3)} g ${metalLabel}`);
    }
  }

  return {
    message: lines.join("\n"),
    emoji: "🌾",
    severity: "info"
  };
}

/**
 * Format IDR currency string.
 * @param {number} amount
 * @returns {string}
 */
export function formatIDR(amount) {
  return "Rp " + Math.round(amount).toLocaleString("id-ID");
}
