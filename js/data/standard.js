// ─── Standard / SI Weight Units ───
// factor = grams per 1 unit

export const standardUnits = [
  { id: "microgram",  name: "Microgram (µg)",    factor: 0.000001, category: "standard", description: "0.000001 g. Satuan terkecil untuk mikronutrien. / Smallest unit for micronutrients." },
  { id: "milligram",  name: "Milligram (mg)",    factor: 0.001,    category: "standard", description: "0.001 g. Untuk obat & suplemen. / Used for medicine & supplements." },
  { id: "centigram",  name: "Centigram (cg)",    factor: 0.01,     category: "standard", description: "0.01 g. Jarang dipakai, mostly di lab. / Rarely used, mostly in labs." },
  { id: "decigram",   name: "Decigram (dg)",     factor: 0.1,      category: "standard", description: "0.1 g. 1/10 gram. / One tenth of a gram." },
  { id: "gram",       name: "Gram (g)",          factor: 1,        category: "standard", description: "1 g. Satuan dasar SI untuk massa. / Base SI unit of mass." },
  { id: "decagram",   name: "Decagram (dag)",    factor: 10,       category: "standard", description: "10 g. Kadang dipakai di resep Eropa. / Sometimes used in European recipes." },
  { id: "hectogram",  name: "Hectogram (hg)",    factor: 100,      category: "standard", description: "100 g. Populer di pasar Italia & Eropa. / Popular in Italian & European markets." },
  { id: "kilogram",   name: "Kilogram (kg)",     factor: 1000,     category: "standard", description: "1000 g. Satuan standar sehari-hari. / Everyday standard unit." },
  { id: "tonne",      name: "Metric Ton (t)",    factor: 1000000,  category: "standard", description: "1 juta g (1000 kg). Untuk industri & kargo. / For industry & cargo." },
  { id: "grain",      name: "Grain (gr)",        factor: 0.06479891, category: "standard", description: "≈0.065 g. Berat satu biji gandum, dasar avoirdupois. / Barley grain weight, avoirdupois base." },
  { id: "dram",       name: "Dram (dr)",         factor: 1.7718452,  category: "standard", description: "≈1.77 g. 1/16 ounce, avoirdupois. / Avoirdupois dram, 1/16 ounce." },
  { id: "ounce",      name: "Ounce (oz)",        factor: 28.349523125, category: "standard", description: "≈28.35 g. Avoirdupois ounce, umum di AS & UK. / Avoirdupois ounce, common in US & UK." },
  { id: "pound",      name: "Pound (lb)",        factor: 453.59237,  category: "standard", description: "≈453.6 g. 16 ounce, satuan berat utama AS. / 16 ounces, primary US weight unit." },
  { id: "stone",      name: "Stone (st)",        factor: 6350.29318, category: "standard", description: "≈6.35 kg. 14 pound, dipakai di UK untuk berat badan. / 14 pounds, used in UK for body weight." },
  { id: "quarter",    name: "Quarter (qr)",      factor: 11339.80925, category: "standard", description: "≈11.34 kg. 1/4 hundredweight. / Quarter of a hundredweight." },
  { id: "short_hundredweight", name: "Short Hundredweight (cwt)", factor: 45359.237, category: "standard", description: "≈45.36 kg. US hundredweight (100 lb). / American hundredweight (100 pounds)." },
  { id: "long_hundredweight",  name: "Long Hundredweight (cwt)",  factor: 50802.34544, category: "standard", description: "≈50.8 kg. Imperial hundredweight (112 lb). / British hundredweight (112 pounds)." },
  { id: "short_ton",  name: "Short Ton (US)",    factor: 907184.74,  category: "standard", description: "≈907.2 kg. US ton (2000 lb). / American short ton (2000 pounds)." },
  { id: "long_ton",   name: "Long Ton (Imperial)", factor: 1016046.9088, category: "standard", description: "≈1016 kg. Imperial ton (2240 lb). / British long ton (2240 pounds)." },
  { id: "troy_ounce", name: "Troy Ounce (ozt)",  factor: 31.1034768, category: "standard", description: "≈31.1 g. Standar internasional emas & perak. / International gold & silver standard." },
  { id: "troy_pound", name: "Troy Pound (lbt)",  factor: 373.2417216, category: "standard", description: "≈373.2 g. 12 troy ounce. / 12 troy ounces." },
  { id: "carat",      name: "Carat (ct)",        factor: 0.2,        category: "standard", description: "0.2 g. Standar internasional berat batu permata. / International gemstone weight standard." },
  { id: "dalton",     name: "Dalton (Da)",       factor: 1.66054e-24, category: "standard", description: "≈1.66×10⁻²⁴ g. Satuan massa atom. / Atomic mass unit." },
  { id: "slug",       name: "Slug",              factor: 14593.903,  category: "standard", description: "≈14.6 kg. Satuan massa imperial, jarang dipakai. / Imperial mass unit, rarely used." },
];
