// ─── Traditional & Historical Weight Units ───
// factor = grams per 1 unit

export const traditionalUnits = [
  // ── Chinese ──
  { id: "jin",         name: "Jin (斤)",          factor: 500,     category: "traditional", description: "Chinese catty — 0.5 kg" },
  { id: "liang",       name: "Liang (两)",         factor: 50,      category: "traditional", description: "Chinese tael — 50 g" },
  { id: "qian",        name: "Qian (钱)",          factor: 5,       category: "traditional", description: "Chinese mace — 5 g" },
  { id: "fen",         name: "Fen (分)",           factor: 0.5,     category: "traditional", description: "Chinese candareen — 0.5 g" },
  { id: "li_cn",       name: "Li (厘)",            factor: 0.05,    category: "traditional", description: "Chinese li — 0.05 g" },
  { id: "dan",         name: "Dan (担)",           factor: 50000,   category: "traditional", description: "Chinese picul — 50 kg" },
  { id: "jun",         name: "Jun (钧)",           factor: 7500,    category: "traditional", description: "Ancient Chinese unit — 7.5 kg" },
  { id: "shi",         name: "Shi (石)",           factor: 50000,   category: "traditional", description: "Stone-weight in Chinese — 50 kg" },

  // ── Malay / Southeast Asian ──
  { id: "tahil",       name: "Tahil",             factor: 37.8,    category: "traditional", description: "Malay/Chinese tael ≈ 37.8 g" },
  { id: "kati",        name: "Kati",              factor: 604.8,   category: "traditional", description: "Malay catty ≈ 604.8 g" },
  { id: "pikul",       name: "Pikul",             factor: 60480,   category: "traditional", description: "Malay pikul ≈ 60.48 kg" },
  { id: "kupang",      name: "Kupang",            factor: 0.64,    category: "traditional", description: "Small Malay unit ≈ 0.64 g" },
  { id: "mayam",       name: "Mayam",             factor: 3.33,    category: "traditional", description: "Traditional Malay ≈ 3.33 g" },
  { id: "bungkal",     name: "Bungkal",           factor: 1.6,     category: "traditional", description: "Malay bungkal ≈ 1.6 g" },
  { id: "sookai",      name: "Sookai",            factor: 6.05,    category: "traditional", description: "Malay sookai ≈ 6.05 g" },
  { id: "real",        name: "Real",              factor: 3.33,    category: "traditional", description: "Malay real ≈ 3.33 g" },

  // ── Japanese ──
  { id: "kan",         name: "Kan (貫)",           factor: 3750,    category: "traditional", description: "Japanese kan — 3.75 kg" },
  { id: "monme_jp",    name: "Monme (匁)",         factor: 3.75,    category: "traditional", description: "Japanese monme — 3.75 g" },
  { id: "kin_jp",      name: "Kin (斤)",           factor: 600,     category: "traditional", description: "Japanese kin — 600 g" },
  { id: "ryou",        name: "Ryō (両)",           factor: 15,      category: "traditional", description: "Japanese ryō — 15 g" },
  { id: "momme",       name: "Momme",             factor: 3.75,    category: "traditional", description: "Japanese pearl weight — 3.75 g" },

  // ── Indian ──
  { id: "ser",         name: "Ser (Seer)",        factor: 933.1,   category: "traditional", description: "Indian seer ≈ 933.1 g" },
  { id: "maund",       name: "Maund",             factor: 37324.2, category: "traditional", description: "Indian maund ≈ 37.32 kg" },
  { id: "tola",        name: "Tola",              factor: 11.6638, category: "traditional", description: "Indian tola ≈ 11.66 g" },
  { id: "ratti",       name: "Ratti",             factor: 0.1215,  category: "traditional", description: "Indian ratti ≈ 0.1215 g" },
  { id: "masha",       name: "Masha",             factor: 0.972,   category: "traditional", description: "Indian masha ≈ 0.972 g" },
  { id: "gunja",       name: "Gunja",             factor: 0.1215,  category: "traditional", description: "Indian gunja (Abrus seed) ≈ 0.1215 g" },
  { id: "pal",         name: "Pal",               factor: 3.75,    category: "traditional", description: "South Indian pal ≈ 3.75 g" },

  // ── Middle Eastern / Islamic ──
  { id: "mithqal",     name: "Mithqal",           factor: 4.25,    category: "traditional", description: "Islamic mithqal ≈ 4.25 g" },
  { id: "dirham_wt",   name: "Dirham (weight)",   factor: 2.975,   category: "traditional", description: "Islamic dirham ≈ 2.975 g" },
  { id: "rotl",        name: "Rotl (Ratl)",       factor: 447.2,   category: "traditional", description: "Medieval Islamic rotl ≈ 447.2 g" },
  { id: "okka",        name: "Okka",              factor: 1282.6,  category: "traditional", description: "Ottoman okka ≈ 1282.6 g" },
  { id: "batman",      name: "Batman",            factor: 7695.6,  category: "traditional", description: "Ottoman batman ≈ 7.7 kg" },
  { id: "chequi",      name: "Cheki",             factor: 507.5,   category: "traditional", description: "Ottoman cheki ≈ 507.5 g" },

  // ── European Historical ──
  { id: "livre",       name: "Livre (French)",     factor: 489.5,   category: "traditional", description: "French livre ≈ 489.5 g" },
  { id: "marc",        name: "Marc",              factor: 244.75,  category: "traditional", description: "French marc ≈ 244.75 g" },
  { id: "once_fr",     name: "Once (French)",     factor: 30.59,   category: "traditional", description: "French once ≈ 30.59 g" },
  { id: "pfund",       name: "Pfund (German)",    factor: 500,     category: "traditional", description: "German pfund — 500 g" },
  { id: "zentner",     name: "Zentner (German)",  factor: 50000,   category: "traditional", description: "German zentner — 50 kg" },
  { id: "libra",       name: "Libra (Roman)",     factor: 328.9,   category: "traditional", description: "Roman libra ≈ 328.9 g" },
  { id: "uncia",       name: "Uncia (Roman)",     factor: 27.4,    category: "traditional", description: "Roman uncia ≈ 27.4 g" },
  { id: "mina",        name: "Mina (Greek)",      factor: 436,     category: "traditional", description: "Greek mina ≈ 436 g" },
  { id: "talent",      name: "Talent (Greek)",    factor: 26160,   category: "traditional", description: "Greek talent ≈ 26.16 kg" },
  { id: "obol",        name: "Obol (Greek)",      factor: 0.72,    category: "traditional", description: "Greek obol ≈ 0.72 g" },
  { id: "drachma",     name: "Drachma (Greek)",   factor: 4.36,    category: "traditional", description: "Greek drachma ≈ 4.36 g" },
  { id: "pond_nl",     name: "Pond (Dutch)",      factor: 494,     category: "traditional", description: "Dutch pond ≈ 494 g" },

  // ── African ──
  { id: "kantar",      name: "Kantar",            factor: 44928,   category: "traditional", description: "North African kantar ≈ 44.93 kg" },
  { id: "oke",         name: "Oke",               factor: 1282.6,  category: "traditional", description: "North African oke ≈ 1282.6 g" },
  { id: "manzadi",     name: "Manzadi",           factor: 70,      category: "traditional", description: "Swahili manzadi ≈ 70 g" },
  { id: "frasila",     name: "Frasila",           factor: 17460,   category: "traditional", description: "East African frasila ≈ 17.46 kg" },

  // ── Korean ──
  { id: "geun_kr",     name: "Geun (근)",          factor: 600,     category: "traditional", description: "Korean geun — 600 g" },
  { id: "nyang_kr",    name: "Nyang (냥)",         factor: 37.5,    category: "traditional", description: "Korean nyang ≈ 37.5 g" },
  { id: "don_kr",      name: "Don (돈)",           factor: 3.75,    category: "traditional", description: "Korean don ≈ 3.75 g" },

  // ── Thai ──
  { id: "chang",       name: "Chang",             factor: 1600,    category: "traditional", description: "Thai chang ≈ 1.6 kg" },
  { id: "tamleung",    name: "Tamleung",          factor: 60,      category: "traditional", description: "Thai tamleung ≈ 60 g" },
  { id: "baht_th",     name: "Baht (Thai)",       factor: 15,      category: "traditional", description: "Thai baht (gold weight) ≈ 15 g" },
  { id: "salung",      name: "Salung",            factor: 3.75,    category: "traditional", description: "Thai salung ≈ 3.75 g" },
  { id: "fuang",       name: "Fuang",             factor: 1.875,   category: "traditional", description: "Thai fuang ≈ 1.875 g" },

  // ── Myanmar ──
  { id: "viss",        name: "Viss",              factor: 1632.93, category: "traditional", description: "Burmese viss ≈ 1.633 kg" },
  { id: "kyat_mm",     name: "Kyat",              factor: 16.3293, category: "traditional", description: "Burmese kyat ≈ 16.33 g" },
  { id: "petha",       name: "Petha",             factor: 1.6329,  category: "traditional", description: "Burmese petha ≈ 1.633 g" },
  { id: "moo",         name: "Moo",               factor: 0.204,   category: "traditional", description: "Burmese moo ≈ 0.204 g" },

  // ── Miscellaneous ──
  { id: "jin_tw",      name: "Jin (Taiwan)",      factor: 600,     category: "traditional", description: "Taiwanese jin — 600 g" },
  { id: "catty_sg",    name: "Catty (Singapore)", factor: 604.8,   category: "traditional", description: "Singapore catty ≈ 604.8 g" },
  { id: "tael_hk",     name: "Tael (Hong Kong)",  factor: 37.429,  category: "traditional", description: "Hong Kong tael ≈ 37.43 g" },
  { id: "jin_vn",      name: "Cân (Vietnam)",     factor: 604.8,   category: "traditional", description: "Vietnamese cân ≈ 604.8 g" },
  { id: "chi_vn",      name: "Chỉ (Vietnam)",     factor: 3.78,    category: "traditional", description: "Vietnamese chỉ ≈ 3.78 g" },
  { id: "luong_vn",    name: "Lượng (Vietnam)",   factor: 37.8,    category: "traditional", description: "Vietnamese lượng ≈ 37.8 g" },
  { id: "yin",         name: "Yin (斤, old)",     factor: 596.8,   category: "traditional", description: "Historical Chinese yin ≈ 596.8 g" },
];
