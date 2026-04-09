// ─── ui.js — DOM helpers & event wiring ───

import { convert, formatResult, calculateMetalValue, formatIDR, validateMetalUnit, getCrossCategoryNotice } from "./converter.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── State ───
let allUnits = {};
let currentFilter = "all";
let precision = 4;
let mode = "convert";       // "convert" | "gold"
let goldConfig = null;
let silverConfig = null;
let liveGoldConfig = null;  // stores the live/auto config separately
const CUSTOM_PRICE_KEY = "arcane-custom-gold-price";

// ─── Selectors cache ───
const els = {};
function cacheDom() {
  els.inputValue   = $("#inputValue");
  els.fromUnit     = $("#fromUnit");
  els.toUnit       = $("#toUnit");
  els.output       = $("#output");
  els.filters      = $("#filters");
  els.swapBtn      = $("#swapBtn");
  els.addCustomBtn = $("#addCustomBtn");
  els.modal        = $("#customModal");
  els.precision    = $("#precision");
  els.fromInfo     = $("#fromInfo");
  els.toInfo       = $("#toInfo");
  els.searchFrom   = $("#searchFrom");
  els.searchTo     = $("#searchTo");
  els.themeToggle  = $("#themeToggle");
  els.modeToggle   = $("#modeToggle");
  els.toGroup      = $(".to-group") || els.toUnit?.closest(".input-group");
  els.goldInfo     = $("#goldInfo");
  els.goldWarning  = $("#goldWarning");
  els.swapWrap     = els.swapBtn?.closest(".swap");
  els.priceStatus  = $("#priceStatus");
  els.customPrice      = $("#customPrice");
  els.customPriceInput = $("#customPriceInput");
  els.customPriceBtn   = $("#customPriceBtn");
  els.customPriceReset = $("#customPriceReset");
  els.crossNotice    = $("#crossCategoryNotice");
}

// ─── Theme ───
function initTheme() {
  const saved = localStorage.getItem("arcane-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("arcane-theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = els.themeToggle;
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ─── Mode Toggle ───
function setMode(newMode) {
  mode = newMode;
  $$(".mode-btn").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));

  // Show/hide elements based on mode
  const isGold = mode === "gold";
  if (els.toGroup) els.toGroup.style.display = isGold ? "none" : "";
  if (els.swapWrap) els.swapWrap.style.display = isGold ? "none" : "";
  if (els.precision) els.precision.closest(".precision-control").style.display = isGold ? "none" : "";
  if (els.goldInfo) els.goldInfo.style.display = isGold ? "block" : "none";
  if (els.goldWarning) els.goldWarning.style.display = "none";

  // Change input label
  const inputLabel = els.inputValue?.closest(".input-group")?.querySelector("label");
  if (inputLabel) inputLabel.textContent = isGold ? "Quantity" : "Value";

  doConvert();
}

// ─── Populate selects ───
function getFilteredUnits() {
  if (currentFilter === "all") return allUnits;
  const filtered = {};
  for (const [k, v] of Object.entries(allUnits)) {
    if (v.category === currentFilter) filtered[k] = v;
  }
  return filtered;
}

function populateSelect(selectEl, searchEl, preselect) {
  const filtered = getFilteredUnits();
  const searchTerm = (searchEl?.value || "").toLowerCase();
  const oldVal = selectEl.value;

  selectEl.innerHTML = "";

  const groups = {};
  for (const [key, unit] of Object.entries(filtered)) {
    if (searchTerm && !unit.name.toLowerCase().includes(searchTerm)) continue;
    const cat = unit.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push({ key, unit });
  }

  const order = ["standard", "traditional", "fantasy", "custom"];
  for (const cat of order) {
    if (!groups[cat]?.length) continue;
    groups[cat].sort((a, b) => a.unit.name.localeCompare(b.unit.name));

    const optgroup = document.createElement("optgroup");
    optgroup.label = cat.charAt(0).toUpperCase() + cat.slice(1);

    for (const { key, unit } of groups[cat]) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = unit.name;
      if (unit.description) opt.title = unit.description;
      optgroup.appendChild(opt);
    }
    selectEl.appendChild(optgroup);
  }

  // Restore selection
  if (preselect && selectEl.querySelector(`option[value="${preselect}"]`)) {
    selectEl.value = preselect;
  } else if (oldVal && selectEl.querySelector(`option[value="${oldVal}"]`)) {
    selectEl.value = oldVal;
  }
}

function populateAll() {
  const fromKey = els.fromUnit.value;
  const toKey = els.toUnit.value;
  populateSelect(els.fromUnit, els.searchFrom, fromKey);
  if (els.toUnit) populateSelect(els.toUnit, els.searchTo, toKey);
}

// ─── Conversion ───
function doConvert() {
  if (mode === "gold") {
    doGoldConvert();
    return;
  }

  // Normal unit conversion
  const val = parseFloat(els.inputValue.value);
  const fromKey = els.fromUnit.value;
  const toKey = els.toUnit.value;

  if (isNaN(val) || !fromKey || !toKey || !allUnits[fromKey] || !allUnits[toKey]) {
    setOutput("--");
    return;
  }

  const result = convert(val, allUnits[fromKey].factor, allUnits[toKey].factor);
  const formatted = formatResult(result, precision);
  setOutput(`${formatted} ${allUnits[toKey].name}`);

  updateInfo(els.fromInfo, allUnits[fromKey]);
  updateInfo(els.toInfo, allUnits[toKey]);
  hideGoldWarning();

  // Cross-category notice
  const notice = getCrossCategoryNotice(allUnits[fromKey], allUnits[toKey]);
  if (notice) {
    showCrossNotice(notice);
  } else {
    hideCrossNotice();
  }
}

function doGoldConvert() {
  const val = parseFloat(els.inputValue.value);
  const fromKey = els.fromUnit.value;

  if (isNaN(val) || !fromKey || !allUnits[fromKey]) {
    setOutput("--");
    hideGoldWarning();
    hideGoldInfo();
    return;
  }

  const unit = allUnits[fromKey];
  const result = calculateMetalValue(val, unit, goldConfig, silverConfig);

  if (result.error) {
    // Strict validation — show warning, no fallback
    setOutput("—");
    showGoldWarning(result.error);
    hideGoldInfo();
    return;
  }

  hideGoldWarning();
  setOutput(formatIDR(result.value));
  showGoldInfo(result, unit);
  updateInfo(els.fromInfo, unit);
}

function setOutput(text) {
  if (els.output.textContent !== text) {
    els.output.textContent = text;
    els.output.classList.remove("result-flash");
    void els.output.offsetWidth;
    els.output.classList.add("result-flash");
  }
}

function updateInfo(el, unit) {
  if (el && unit?.description) {
    el.textContent = unit.description;
  } else if (el) {
    el.textContent = "";
  }
}

// ─── Gold Info & Warning ───
function showGoldInfo(result, unit) {
  if (!els.goldInfo) return;
  const metalLabel = result.metalType === "silver" ? "Silver" : "Gold";
  const priceLabel = formatIDR(result.pricePerGram);
  els.goldInfo.innerHTML =
    `<span class="gold-info-detail">${result.grams.toFixed(4)}g ${metalLabel.toLowerCase()}</span>` +
    `<span class="gold-info-detail">${metalLabel}: ${priceLabel}/g</span>` +
    `<span class="gold-info-detail">Updated: ${result.lastUpdated}</span>`;
  els.goldInfo.style.display = "flex";
}

function hideGoldInfo() {
  if (els.goldInfo) {
    els.goldInfo.style.display = "none";
    els.goldInfo.innerHTML = "";
  }
}

function showGoldWarning(msg) {
  if (!els.goldWarning) return;
  els.goldWarning.textContent = "⚠ " + msg;
  els.goldWarning.style.display = "block";
}

function hideGoldWarning() {
  if (els.goldWarning) {
    els.goldWarning.style.display = "none";
    els.goldWarning.textContent = "";
  }
}

// ─── Cross-Category Notice ───
function showCrossNotice(notice) {
  if (!els.crossNotice) return;
  els.crossNotice.textContent = `${notice.emoji} ${notice.message}`;
  els.crossNotice.className = `cross-notice cross-notice-${notice.severity}`;
  els.crossNotice.style.display = "block";
}

function hideCrossNotice() {
  if (els.crossNotice) {
    els.crossNotice.style.display = "none";
    els.crossNotice.textContent = "";
  }
}

// ─── Swap ───
function swap() {
  const from = els.fromUnit.value;
  const to = els.toUnit.value;
  if (from && to) {
    els.fromUnit.value = to;
    els.toUnit.value = from;
    const tmp = els.searchFrom.value;
    els.searchFrom.value = els.searchTo.value;
    els.searchTo.value = tmp;
    populateAll();
    doConvert();
    els.swapBtn.classList.add("swap-spin");
    setTimeout(() => els.swapBtn.classList.remove("swap-spin"), 400);
  }
}

// ─── Modal ───
function openModal() {
  els.modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#customName")?.focus(), 100);
}

function closeModal() {
  els.modal.classList.remove("open");
  document.body.style.overflow = "";
  $("#customName").value = "";
  $("#customGrams").value = "";
  $("#customDesc").value = "";
  $("#customCategory").value = "fantasy";
}

// ─── Custom Unit ───
function addCustomUnit(onAdd) {
  const name = $("#customName").value.trim();
  const gramsStr = $("#customGrams").value.trim();
  const category = $("#customCategory").value;
  const description = $("#customDesc").value.trim();

  if (!name) { shakeField("#customName"); return; }
  const grams = parseFloat(gramsStr);
  if (isNaN(grams) || grams <= 0) { shakeField("#customGrams"); return; }

  onAdd({ name, grams, category, description });
  closeModal();
  populateAll();
  doConvert();
}

function shakeField(sel) {
  const el = $(sel);
  el.classList.add("shake");
  el.focus();
  setTimeout(() => el.classList.remove("shake"), 500);
}

// ─── Filter buttons ───
function handleFilter(e) {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  $$(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  populateAll();
  doConvert();
}

// ─── Event binding ───
export function initUI(units, addCustomCallback, config) {
  allUnits = units;
  goldConfig = config?.gold;
  silverConfig = config?.silver;
  cacheDom();
  initTheme();

  // Populate
  populateAll();

  // Mode toggle
  els.modeToggle?.addEventListener("click", (e) => {
    const btn = e.target.closest(".mode-btn");
    if (btn && btn.dataset.mode) setMode(btn.dataset.mode);
  });

  // Input events
  els.inputValue.addEventListener("input", doConvert);
  els.fromUnit.addEventListener("change", doConvert);
  if (els.toUnit) els.toUnit.addEventListener("change", doConvert);
  els.precision?.addEventListener("input", () => {
    precision = parseInt(els.precision.value) || 4;
    doConvert();
  });

  // Search live filter
  els.searchFrom.addEventListener("input", () => populateAll());
  if (els.searchTo) els.searchTo.addEventListener("input", () => populateAll());

  // Swap
  els.swapBtn.addEventListener("click", swap);

  // Filters
  els.filters.addEventListener("click", handleFilter);

  // Theme
  els.themeToggle?.addEventListener("click", toggleTheme);

  // Custom price
  els.customPriceBtn?.addEventListener("click", applyCustomPrice);
  els.customPriceReset?.addEventListener("click", resetCustomPrice);
  els.customPriceInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyCustomPrice();
  });

  // Load saved custom price
  const savedPrice = loadCustomPrice();
  if (savedPrice && els.customPriceInput) {
    els.customPriceInput.value = Math.round(savedPrice);
    els.customPrice?.classList.add("active");
  }

  // Modal
  els.addCustomBtn.addEventListener("click", openModal);
  els.modal.addEventListener("click", (e) => {
    if (e.target === els.modal) closeModal();
  });
  $("#cancelCustom").addEventListener("click", closeModal);
  $("#confirmAdd").addEventListener("click", () => addCustomUnit(addCustomCallback));

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!els.modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Enter" && document.activeElement.tagName !== "TEXTAREA") {
      addCustomUnit(addCustomCallback);
    }
  });

  // Default values
  if (!els.fromUnit.value) els.fromUnit.value = "mayam";
  if (els.toUnit && !els.toUnit.value) els.toUnit.value = "kilogram";
  if (!els.inputValue.value) els.inputValue.value = "1";
  doConvert();
}

/**
 * Call after external data mutation (e.g. custom unit added).
 */
export function refreshUI() {
  populateAll();
  doConvert();
}

export function setUnits(units) {
  allUnits = units;
}

// ─── Live Gold Price Integration ───

/**
 * Load custom price from localStorage.
 */
function loadCustomPrice() {
  try {
    const raw = localStorage.getItem(CUSTOM_PRICE_KEY);
    if (!raw) return null;
    const val = parseFloat(raw);
    return (val > 0) ? val : null;
  } catch { return null; }
}

/**
 * Save custom price to localStorage.
 */
function saveCustomPrice(price) {
  try {
    if (price && price > 0) {
      localStorage.setItem(CUSTOM_PRICE_KEY, String(price));
    } else {
      localStorage.removeItem(CUSTOM_PRICE_KEY);
    }
  } catch { /* ignore */ }
}

/**
 * Apply custom price from input.
 */
function applyCustomPrice() {
  const val = parseFloat(els.customPriceInput?.value);
  if (isNaN(val) || val <= 0) {
    shakeField("#customPriceInput");
    return;
  }
  saveCustomPrice(val);
  goldConfig = { ...goldConfig, pricePerGram: val };
  els.customPrice?.classList.add("active");
  if (mode === "gold") doConvert();
  setPriceStatus("custom", { pricePerGram: val });
}

/**
 * Reset to auto/live price.
 */
function resetCustomPrice() {
  saveCustomPrice(null);
  if (liveGoldConfig) {
    goldConfig = { ...liveGoldConfig };
  }
  els.customPriceInput.value = "";
  els.customPrice?.classList.remove("active");
  if (mode === "gold") doConvert();
}

/**
 * Update gold config after live fetch.
 */
export function updateGoldPriceConfig(config) {
  liveGoldConfig = { ...config };
  // Don't override if user has custom price
  const custom = loadCustomPrice();
  if (custom) {
    goldConfig = { ...config, pricePerGram: custom };
  } else {
    goldConfig = config;
  }
  if (mode === "gold") doConvert();
}

/**
 * Set price status indicator in UI.
 * @param {"loading"|"live"|"cached"|"offline"|"custom"} status
 * @param {object} data - optional price data for display
 */
export function setPriceStatus(status, data = {}) {
  if (!els.priceStatus) return;
  const el = els.priceStatus;

  const priceStr = `Rp ${Math.round(data.pricePerGram || goldConfig?.pricePerGram || 0).toLocaleString("id-ID")}/g`;

  const labels = {
    loading: "⏳ Fetching price…",
    live:    `🟢 Live · ${priceStr}`,
    cached:  `🟡 Cached · ${priceStr}`,
    offline: `🔴 Offline · ${priceStr}`,
    custom:  `✏️ Custom · ${priceStr}`
  };

  el.textContent = labels[status] || labels.offline;
  el.className = `price-status price-${status}`;
  el.style.display = "block";

  // Sync custom input if custom status
  if (status === "custom" && els.customPriceInput) {
    els.customPriceInput.value = Math.round(data.pricePerGram || goldConfig?.pricePerGram || 0);
  }
}
