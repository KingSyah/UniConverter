// ─── goldPrice.js — Manual gold/silver price config ───
// Update periodically — no API, static only

export const goldPriceConfig = {
  pricePerGram: 1_600_000,   // Rp per gram (update manually)
  currency: "IDR",
  symbol: "Rp",
  lastUpdated: "2026-04-09",
  source: "Manual input — Antam / Pegadaian reference"
};

export const silverPriceConfig = {
  pricePerGram: 18_000,      // Rp per gram (update manually)
  currency: "IDR",
  symbol: "Rp",
  lastUpdated: "2026-04-09",
  source: "Manual input"
};
