// ─── app.js — Entry point & data management ───

import { standardUnits } from "./data/standard.js";
import { traditionalUnits } from "./data/traditional.js";
import { fantasyUnits } from "./data/fantasy.js";
import { goldPriceConfig, silverPriceConfig } from "./data/goldPrice.js";
import { generateId } from "./converter.js";
import { initUI, setUnits } from "./ui.js";

const STORAGE_KEY = "arcane-custom-units";

// ─── Merge all unit sources into one map ───
function buildUnitMap() {
  const map = {};

  const sources = [standardUnits, traditionalUnits, fantasyUnits];
  for (const list of sources) {
    for (const u of list) {
      map[u.id] = { ...u };
    }
  }

  // Merge custom units from localStorage
  const custom = loadCustomUnits();
  for (const u of custom) {
    map[u.id] = { ...u };
  }

  return map;
}

// ─── Custom units persistence ───
function loadCustomUnits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomUnits(units) {
  const customs = Object.values(units).filter((u) => u.category === "custom");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customs));
}

// ─── Bootstrap ───
function main() {
  // Copyright year auto-update
  const el = document.getElementById("copyright-text");
  if (el) el.textContent = `© ${new Date().getFullYear()} KingSyah`;

  const units = buildUnitMap();

  const handleAddCustom = ({ name, grams, category, description }) => {
    const id = generateId(name);
    if (units[id]) return;
    units[id] = {
      id,
      name,
      factor: grams,
      category: category || "custom",
      description: description || `Custom unit: ${name}`,
    };
    setUnits(units);
    saveCustomUnits(units);
  };

  initUI(units, handleAddCustom, {
    gold: goldPriceConfig,
    silver: silverPriceConfig
  });
}

// Go
document.addEventListener("DOMContentLoaded", main);
