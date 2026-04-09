// ─── Standard / SI Weight Units ───
// factor = grams per 1 unit

export const standardUnits = [
  { id: "microgram",  name: "Microgram (µg)",    factor: 0.000001, category: "standard", description: "One millionth of a gram" },
  { id: "milligram",  name: "Milligram (mg)",    factor: 0.001,    category: "standard", description: "One thousandth of a gram" },
  { id: "centigram",  name: "Centigram (cg)",    factor: 0.01,     category: "standard", description: "One hundredth of a gram" },
  { id: "decigram",   name: "Decigram (dg)",     factor: 0.1,      category: "standard", description: "One tenth of a gram" },
  { id: "gram",       name: "Gram (g)",          factor: 1,        category: "standard", description: "Base SI unit of mass" },
  { id: "decagram",   name: "Decagram (dag)",    factor: 10,       category: "standard", description: "Ten grams" },
  { id: "hectogram",  name: "Hectogram (hg)",    factor: 100,      category: "standard", description: "One hundred grams" },
  { id: "kilogram",   name: "Kilogram (kg)",     factor: 1000,     category: "standard", description: "One thousand grams" },
  { id: "tonne",      name: "Metric Ton (t)",    factor: 1000000,  category: "standard", description: "One million grams" },
  { id: "grain",      name: "Grain (gr)",        factor: 0.06479891, category: "standard", description: "Traditional grain unit" },
  { id: "dram",       name: "Dram (dr)",         factor: 1.7718452,  category: "standard", description: "Avoirdupois dram" },
  { id: "ounce",      name: "Ounce (oz)",        factor: 28.349523125, category: "standard", description: "Avoirdupois ounce" },
  { id: "pound",      name: "Pound (lb)",        factor: 453.59237,  category: "standard", description: "Avoirdupois pound" },
  { id: "stone",      name: "Stone (st)",        factor: 6350.29318, category: "standard", description: "British stone (14 lbs)" },
  { id: "quarter",    name: "Quarter (qr)",      factor: 11339.80925, category: "standard", description: "Quarter of a hundredweight" },
  { id: "short_hundredweight", name: "Short Hundredweight (cwt)", factor: 45359.237, category: "standard", description: "US hundredweight (100 lbs)" },
  { id: "long_hundredweight",  name: "Long Hundredweight (cwt)",  factor: 50802.34544, category: "standard", description: "Imperial hundredweight (112 lbs)" },
  { id: "short_ton",  name: "Short Ton (US)",    factor: 907184.74,  category: "standard", description: "US ton (2000 lbs)" },
  { id: "long_ton",   name: "Long Ton (Imperial)", factor: 1016046.9088, category: "standard", description: "Imperial ton (2240 lbs)" },
  { id: "troy_ounce", name: "Troy Ounce (ozt)",  factor: 31.1034768, category: "standard", description: "Troy ounce (precious metals)" },
  { id: "troy_pound", name: "Troy Pound (lbt)",  factor: 373.2417216, category: "standard", description: "Troy pound (12 troy oz)" },
  { id: "carat",      name: "Carat (ct)",        factor: 0.2,        category: "standard", description: "Gemstone carat" },
  { id: "dalton",     name: "Dalton (Da)",       factor: 1.66054e-24, category: "standard", description: "Atomic mass unit" },
  { id: "slug",       name: "Slug",              factor: 14593.903,  category: "standard", description: "Imperial mass unit" },
];
