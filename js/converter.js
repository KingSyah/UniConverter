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
 * @param {number} num
 * @param {number} decimals
 * @returns {string}
 */
export function formatResult(num, decimals) {
  const d = Math.min(Math.max(parseInt(decimals) || 0, 0), 10);
  return num.toFixed(d);
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
