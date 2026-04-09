// ─── ui.js — DOM helpers & event wiring ───

import { convert, formatResult } from "./converter.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── State ───
let allUnits = {};
let currentFilter = "all";
let precision = 4;

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
  populateSelect(els.toUnit, els.searchTo, toKey);
}

// ─── Conversion ───
function doConvert() {
  const val = parseFloat(els.inputValue.value);
  const fromKey = els.fromUnit.value;
  const toKey = els.toUnit.value;

  if (isNaN(val) || !fromKey || !toKey || !allUnits[fromKey] || !allUnits[toKey]) {
    els.output.textContent = "--";
    els.output.classList.remove("result-flash");
    return;
  }

  const result = convert(val, allUnits[fromKey].factor, allUnits[toKey].factor);
  const formatted = formatResult(result, precision);
  const newText = `${formatted} ${allUnits[toKey].name}`;

  if (els.output.textContent !== newText) {
    els.output.textContent = newText;
    // Micro-animation
    els.output.classList.remove("result-flash");
    void els.output.offsetWidth; // reflow trigger
    els.output.classList.add("result-flash");
  }

  // Update info
  updateInfo(els.fromInfo, allUnits[fromKey]);
  updateInfo(els.toInfo, allUnits[toKey]);
}

function updateInfo(el, unit) {
  if (el && unit?.description) {
    el.textContent = unit.description;
  } else if (el) {
    el.textContent = "";
  }
}

// ─── Swap ───
function swap() {
  const from = els.fromUnit.value;
  const to = els.toUnit.value;
  if (from && to) {
    els.fromUnit.value = to;
    els.toUnit.value = from;
    // Swap search fields too
    const tmp = els.searchFrom.value;
    els.searchFrom.value = els.searchTo.value;
    els.searchTo.value = tmp;
    populateAll();
    doConvert();
    // Animate button
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
  // Clear fields
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
export function initUI(units, addCustomCallback) {
  allUnits = units;
  cacheDom();
  initTheme();

  // Populate
  populateAll();

  // Input events
  els.inputValue.addEventListener("input", doConvert);
  els.fromUnit.addEventListener("change", doConvert);
  els.toUnit.addEventListener("change", doConvert);
  els.precision.addEventListener("input", () => {
    precision = parseInt(els.precision.value) || 4;
    doConvert();
  });

  // Search live filter
  els.searchFrom.addEventListener("input", () => populateAll());
  els.searchTo.addEventListener("input", () => populateAll());

  // Swap
  els.swapBtn.addEventListener("click", swap);

  // Filters
  els.filters.addEventListener("click", handleFilter);

  // Theme
  els.themeToggle?.addEventListener("click", toggleTheme);

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
  if (!els.fromUnit.value) els.fromUnit.value = "gram";
  if (!els.toUnit.value) els.toUnit.value = "kilogram";
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
