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

/**
 * Format IDR currency string.
 * @param {number} amount
 * @returns {string}
 */
export function formatIDR(amount) {
  return "Rp " + Math.round(amount).toLocaleString("id-ID");
}
