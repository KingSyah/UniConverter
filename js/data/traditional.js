// ─── Traditional & Historical Weight Units ───
// factor = grams per 1 unit
// Sources: trade records, colonial-era standards, regional market usage

export const traditionalUnits = [

  // ═══════════════════════════════════════════
  //  INDONESIA / NUSANTARA
  //  Gold trade, pasar tradisional, colonial era
  // ═══════════════════════════════════════════

  // ── Sistem Emas & Perhiasan ──
  { id: "mayam",         name: "Mayam",              factor: 3.22,    category: "traditional", description: "Nusantara gold weight unit, used for jewelry and trade (~3.22g)", isPreciousMetal: true, metalType: "gold" },
  { id: "kupang",        name: "Kupang",             factor: 0.64,    category: "traditional", description: "Small Nusantara unit, 1/5 mayam, used for tiny gold items (~0.64g)", isPreciousMetal: true, metalType: "gold" },
  { id: "saga",          name: "Saga",               factor: 0.0645,  category: "traditional", description: "Minuscule Nusantara unit, 1/10 kupang (~0.0645g)", isPreciousMetal: true, metalType: "gold" },
  { id: "biji_merah",    name: "Biji Merah",         factor: 0.125,   category: "traditional", description: "Red seed weight used in Malay gold trade (~0.125g)", isPreciousMetal: true, metalType: "gold" },
  { id: "tahil",         name: "Tahil",              factor: 37.8,    category: "traditional", description: "Malay/Chinese tael, standard in Nusantara trade (~37.8g)" },
  { id: "sookai",        name: "Sookai",             factor: 5.95,    category: "traditional", description: "Gold measure in Malay Peninsula (~5.95g)", isPreciousMetal: true, metalType: "gold" },
  { id: "real",          name: "Real",               factor: 3.22,    category: "traditional", description: "Gold weight in Malay kingdoms (~3.22g)", isPreciousMetal: true, metalType: "gold" },

  // ── Sistem Emas Aceh ──
  // Mayam adalah satuan emas paling aktif digunakan di Aceh untuk mahar (jeulamee) dan perhiasan hingga sekarang.
  { id: "mayam_aceh",    name: "Mayam Aceh",         factor: 3.33,    category: "traditional", description: "Satuan emas utama di Aceh untuk mahar pernikahan dan perhiasan. 1 Mayam ≈ 3.33 gram emas murni (24K). Harga emas sering dikutip per mayam.", isPreciousMetal: true, metalType: "gold", region: "Aceh" },
  { id: "ci_aceh",       name: "Ci (Aceh)",          factor: 0.333,   category: "traditional", description: "Satuan kecil emas Aceh. 10 Ci = 1 Mayam (≈ 0.333 gram).", isPreciousMetal: true, metalType: "gold", region: "Aceh" },

  // ── Sistem Berat Pasar ──
  { id: "kati",          name: "Kati",               factor: 604.8,   category: "traditional", description: "Malay catty, standard market weight (~604.8g), 16 tahil" },
  { id: "pikul",         name: "Pikul",              factor: 60480,   category: "traditional", description: "Malay picul, 100 kati, carried by one person (~60.48kg)" },
  { id: "bahar",         name: "Bahar",              factor: 181440,  category: "traditional", description: "Nusantara maritime weight, 3 pikul (~181.4kg), used in VOC spice trade" },
  { id: "koyan",         name: "Koyan",              factor: 2419200, category: "traditional", description: "Nusantara bulk weight, 40 pikul (~2.4 tonnes), for rice & commodities" },
  { id: "bungkal",       name: "Bungkal",            factor: 1.61,    category: "traditional", description: "Small Malay weight unit (~1.61g)" },
  { id: "bungkai",       name: "Bungkai",            factor: 3.22,    category: "traditional", description: "Acehnese gold weight, used specifically for measuring gold (~3.22g)", isPreciousMetal: true, metalType: "gold" },

  // ── Sistem Takaran Aceh (Volume & Beras) ──
  // Traditional Acehnese grain/volume measurements, still widely used in households, markets, cooking, and zakat fitrah.
  // Hierarchy: Siblakai → Kai → Cupak → Mok → Are → Sigantang → Sinalèh → Sigunca
  // Note: Factor dalam gram untuk beras mentah (bervariasi ±5-10% tergantung jenis beras, kepadatan, dan cara meratakan).
  // - 1 Are (Bambu) = 6 Mok ≈ 1.5 kg
  // - 1 Mok ≈ 250 gram (kaleng susu kental manis bekas, diratakan)
  // - Untuk zakat fitrah di Aceh biasanya: 1.5 Are + beberapa sejumput/segenggam agar mencapai 2.7–2.8 kg per jiwa (sesuai Kemenag setempat)
  // - Semua factor adalah perkiraan rata-rata. Lebih akurat ditimbang langsung.

  // Satuan Kecil (untuk bumbu, penyesuaian, atau zakat)
  { id: "sihah",         name: "Sihah",              factor: 15,      category: "traditional", description: "Satuan sangat kecil dari ujung jari kelingking hingga jari manis (~10–20 gram beras)" },
  { id: "sejumput",      name: "Sejumput",           factor: 20,      category: "traditional", description: "Jumlah beras yang dicubit dengan 3 jari (ibu jari, telunjuk, tengah). Rata-rata ≈ 20 gram. Sering dipakai untuk tambahan zakat fitrah." },
  { id: "segenggam",     name: "Segenggam",          factor: 35,      category: "traditional", description: "Satu genggaman kecil dengan telapak tangan (~30–40 gram beras)" },
  { id: "sideupa",       name: "Sideupa",            factor: 80,      category: "traditional", description: "Takaran menggunakan lebar telapak tangan (dari ujung kelingking ke ujung telunjuk) ≈ 70–90 gram" },

  // Satuan Standar
  { id: "siblakai",      name: "Siblakai",           factor: 175,     category: "traditional", description: "Satuan kecil Aceh (~¼ liter ≈ 175 gram beras)" },
  { id: "kai_aceh",      name: "Kai (Sikai)",        factor: 350,     category: "traditional", description: "Satuan kecil dari batok kelapa atau kayu (~0.5 liter ≈ 350 gram beras)" },
  { id: "cupak_aceh",    name: "Cupak (Sicupak)",    factor: 700,     category: "traditional", description: "Mangkuk kayu, 2 Kai (~1 liter ≈ 700 gram beras)" },
  { id: "mok",           name: "Mok (Mug / Muk)",    factor: 250,     category: "traditional", description: "Satuan paling ikonik di Aceh: kaleng susu kental manis bekas (~250 gram beras). Digunakan sehari-hari untuk memasak nasi, kanji, dll." },

  // Satuan Sedang & Besar
  { id: "are_aceh",      name: "Are (Aree / Bambu)", factor: 1500,    category: "traditional", description: "Alat takar bambu atau besi, 6 Mok (~1.5 kg beras). Sangat umum di pasar tradisional dan acara." },
  { id: "siaree",        name: "Siaree (Siare)",     factor: 1400,    category: "traditional", description: "Satuan sedang (~2 liter ≈ 1.4 kg beras)" },
  { id: "sigantang",     name: "Sigantang (Gantang)",factor: 3000,    category: "traditional", description: "2 Are (~4 liter ≈ 3 kg beras)" },
  { id: "sinaleh",       name: "Sinalèh (Nalèh)",    factor: 24000,   category: "traditional", description: "16 Are (~24 kg beras) – satuan besar, jarang digunakan sehari-hari" },
  { id: "sigunca",       name: "Sigunca",            factor: 240000,  category: "traditional", description: "10 Nalèh (~240 kg) – satuan terbesar untuk perdagangan bulk atau upacara adat" },
  
  { id: "catty_id",      name: "Kati (Indonesia)",   factor: 617,     category: "traditional", description: "Indonesian catty used in Javanese markets (~617g)" },

  // ═══════════════════════════════════════════
  //  CHINA
  //  Sistem jīn-liǎng (斤两), used in trade since Tang dynasty
  // ═══════════════════════════════════════════

  // ── Modern Chinese (市制 shìzhì) ──
  { id: "jin",           name: "Jin (斤)",           factor: 500,     category: "traditional", description: "Chinese catty, modern standard — exactly 500g" },
  { id: "liang",         name: "Liang (两)",          factor: 50,      category: "traditional", description: "Chinese tael, 1/10 jin — 50g, used for gold and silver", isPreciousMetal: true, metalType: "gold" },
  { id: "qian",          name: "Qian (钱)",           factor: 5,       category: "traditional", description: "Chinese mace, 1/10 liang — 5g", isPreciousMetal: true, metalType: "gold" },
  { id: "fen_cn",        name: "Fen (分)",            factor: 0.5,     category: "traditional", description: "Chinese candareen, 1/10 qian — 0.5g" },
  { id: "li_cn",         name: "Li (厘)",             factor: 0.05,    category: "traditional", description: "Chinese li, 1/10 fen — 0.05g" },
  { id: "dan",           name: "Dan (担)",            factor: 50000,   category: "traditional", description: "Chinese picul, 100 jin — 50kg, for bulk grain and trade" },
  { id: "jun",           name: "Jun (钧)",            factor: 7500,    category: "traditional", description: "Ancient Chinese unit, 30 jin — 7.5kg" },

  // ── Historical Chinese (used before 1929 reform) ──
  { id: "jin_old",       name: "Jin (旧斤)",          factor: 596.8,   category: "traditional", description: "Pre-reform Chinese catty (~596.8g), used in Qing dynasty trade" },
  { id: "liang_old",     name: "Liang (旧两)",         factor: 37.3,    category: "traditional", description: "Pre-reform tael (~37.3g), used for gold and silver trade", isPreciousMetal: true, metalType: "gold" },

  // ═══════════════════════════════════════════
  //  INDIA / SOUTH ASIA
  //  Tola-ratti system, used for gold to this day
  // ═══════════════════════════════════════════

  // ── Gold & Precious Metals ──
  { id: "tola",          name: "Tola",               factor: 11.6638, category: "traditional", description: "Indian gold weight, still used in South Asian bullion trade (~11.66g)", isPreciousMetal: true, metalType: "gold" },
  { id: "masha",         name: "Masha",              factor: 0.97,    category: "traditional", description: "1/12 tola, used in Indian jewelry making (~0.97g)", isPreciousMetal: true, metalType: "gold" },
  { id: "ratti",         name: "Ratti",              factor: 0.1215,  category: "traditional", description: "Indian seed weight, 1/8 masha, basis for carat (~0.1215g)", isPreciousMetal: true, metalType: "gold" },
  { id: "gunja",         name: "Gunja",              factor: 0.1215,  category: "traditional", description: "Abrus precatorius seed, original ratti standard (~0.1215g)" },

  // ── Market & Bulk ──
  { id: "ser",           name: "Ser (Seer)",         factor: 933.1,   category: "traditional", description: "Indian market weight, ~80 tola (~933.1g)" },
  { id: "maund",         name: "Maund",              factor: 37324.2, category: "traditional", description: "Indian bulk weight, 40 ser (~37.32kg), used for grain" },
  { id: "chatak",        name: "Chatak",             factor: 58.32,   category: "traditional", description: "Indian weight, 1/16 ser (~58.3g)" },
  { id: "pala",          name: "Pala",               factor: 46.66,   category: "traditional", description: "Ancient Indian weight, 4 tola (~46.66g)" },
  { id: "dharana",       name: "Dharana",            factor: 3.48,    category: "traditional", description: "Ancient Indian silver weight (~3.48g)", isPreciousMetal: true, metalType: "silver" },
  { id: "karsha",        name: "Karsha",             factor: 11.66,   category: "traditional", description: "Ayurvedic measurement, equal to 1 tola (~11.66g)" },

  // ═══════════════════════════════════════════
  //  ISLAMIC / MIDDLE EASTERN
  //  Mithqal-dirham system, Islamic jurisprudence
  // ═══════════════════════════════════════════

  { id: "mithqal",       name: "Mithqal",            factor: 4.25,    category: "traditional", description: "Islamic gold weight, used in zakat calculation (~4.25g)", isPreciousMetal: true, metalType: "gold" },
  { id: "dinar",         name: "Dinar (دينار)",       factor: 4.25,    category: "traditional", description: "Islamic gold coin, equal to 1 mithqal (~4.25g), used for mahr & zakat", isPreciousMetal: true, metalType: "gold" },
  { id: "dirham_wt",     name: "Dirham (weight)",    factor: 2.975,   category: "traditional", description: "Islamic silver weight, 7/10 mithqal (~2.975g)", isPreciousMetal: true, metalType: "silver" },
  { id: "rotl",          name: "Rotl (Ratl)",        factor: 447.2,   category: "traditional", description: "Medieval Islamic pound (~447.2g), used in bazaar trade" },
  { id: "okka",          name: "Okka",               factor: 1282.6,  category: "traditional", description: "Ottoman market weight (~1.28kg), equal to 400 dirham" },
  { id: "batman",        name: "Batman",             factor: 7695.6,  category: "traditional", description: "Ottoman bulk weight, 6 okka (~7.7kg)" },
  { id: "chequi",        name: "Cheki",              factor: 507.5,   category: "traditional", description: "Ottoman market weight (~507.5g)" },
  { id: "wakkiyyah",     name: "Wakkiyyah",          factor: 32.07,   category: "traditional", description: "Islamic ounce, 1/40 rotl (~32.07g)" },

  // ═══════════════════════════════════════════
  //  THAILAND
  //  Baht-Tamleung system, still used for gold
  // ═══════════════════════════════════════════

  { id: "baht_th",       name: "Baht (บาท)",          factor: 15.244,  category: "traditional", description: "Thai gold weight, standard in Thai gold shops (~15.24g)", isPreciousMetal: true, metalType: "gold" },
  { id: "tamleung",      name: "Tamleung (ตำลึง)",     factor: 60.976,  category: "traditional", description: "Thai tael, 4 baht (~60.98g)", isPreciousMetal: true, metalType: "gold" },
  { id: "chang_th",      name: "Chang (ชั่ง)",        factor: 1219.52, category: "traditional", description: "Thai chang, 20 tamleung (~1.22kg)" },
  { id: "salung",        name: "Salung (สลึง)",       factor: 3.811,   category: "traditional", description: "Thai quarter-baht, 1/4 baht (~3.81g)", isPreciousMetal: true, metalType: "gold" },
  { id: "fuang",         name: "Fuang (เฟื้อง)",       factor: 1.906,   category: "traditional", description: "Thai half-salung (~1.91g)", isPreciousMetal: true, metalType: "gold" },
  { id: "pai",           name: "Pai (ไพ)",            factor: 0.953,   category: "traditional", description: "Thai smallest weight, half-fuang (~0.95g)", isPreciousMetal: true, metalType: "gold" },

  // ═══════════════════════════════════════════
  //  JAPAN
  //  Monme-Kan system, Edo period standard
  // ═══════════════════════════════════════════

  { id: "kan",           name: "Kan (貫)",            factor: 3750,    category: "traditional", description: "Japanese kan, 1000 monme (~3.75kg), measured by coins" },
  { id: "monme_jp",      name: "Monme (匁)",          factor: 3.75,    category: "traditional", description: "Japanese weight, used for silver trade (~3.75g)", isPreciousMetal: true, metalType: "silver" },
  { id: "kin_jp",        name: "Kin (斤)",            factor: 600,     category: "traditional", description: "Japanese catty, 160 monme — 600g" },
  { id: "ryou",          name: "Ryō (両)",            factor: 15,      category: "traditional", description: "Japanese gold coin weight, 4 monme — 15g", isPreciousMetal: true, metalType: "gold" },
  { id: "momme",         name: "Momme",              factor: 3.75,    category: "traditional", description: "International spelling of monme, standard for pearls (~3.75g)" },
  { id: "hyakume",       name: "Hyakume (百目)",       factor: 375,     category: "traditional", description: "Japanese 100 monme (~375g), common market weight" },

  // ═══════════════════════════════════════════
  //  KOREA
  //  Geun-Nyang system
  // ═══════════════════════════════════════════

  { id: "geun_kr",       name: "Geun (근)",           factor: 600,     category: "traditional", description: "Korean catty, 16 nyang — 600g" },
  { id: "nyang_kr",      name: "Nyang (냥)",          factor: 37.5,    category: "traditional", description: "Korean tael, used for gold — 37.5g", isPreciousMetal: true, metalType: "gold" },
  { id: "don_kr",        name: "Don (돈)",            factor: 3.75,    category: "traditional", description: "Korean small weight, 1/10 nyang — 3.75g", isPreciousMetal: true, metalType: "gold" },
  { id: "hop_kr",        name: "Hop (홉)",            factor: 0.375,   category: "traditional", description: "Korean minuscule weight, 1/10 don — 0.375g" },

  // ═══════════════════════════════════════════
  //  MYANMAR / BURMA
  // ═══════════════════════════════════════════

  { id: "viss",          name: "Viss",               factor: 1632.93, category: "traditional", description: "Burmese market weight (~1.63kg), 100 kyat" },
  { id: "kyat_mm",       name: "Kyat",               factor: 16.33,   category: "traditional", description: "Burmese weight, used in daily trade (~16.33g)" },
  { id: "petha",         name: "Petha",              factor: 1.63,    category: "traditional", description: "Burmese small weight, 1/10 kyat (~1.63g)" },
  { id: "moo",           name: "Moo",                factor: 0.204,   category: "traditional", description: "Burmese tiny weight, 1/8 petha (~0.204g)" },

  // ═══════════════════════════════════════════
  //  VIETNAM
  // ═══════════════════════════════════════════

  { id: "can_vn",        name: "Cân (Vietnam)",       factor: 604.8,   category: "traditional", description: "Vietnamese catty (~604.8g), used in market trade" },
  { id: "luong_vn",      name: "Lượng",              factor: 37.8,    category: "traditional", description: "Vietnamese tael, 1/16 cân (~37.8g)", isPreciousMetal: true, metalType: "gold" },
  { id: "chi_vn",        name: "Chỉ",                factor: 3.78,    category: "traditional", description: "Vietnamese small weight, 1/10 lượng (~3.78g)", isPreciousMetal: true, metalType: "gold" },
  { id: "phan_vn",       name: "Phân",               factor: 0.378,   category: "traditional", description: "Vietnamese tiny weight, 1/10 chỉ (~0.378g)" },
  { id: "tac_vn",        name: "Tắc",                factor: 0.0378,  category: "traditional", description: "Vietnamese minuscule weight, 1/10 phân (~0.0378g)" },

  // ═══════════════════════════════════════════
  //  EUROPEAN HISTORICAL
  // ═══════════════════════════════════════════

  // ── Roman / Greek ──
  { id: "libra",         name: "Libra (Roman)",      factor: 328.9,   category: "traditional", description: "Roman pound (~328.9g), origin of 'lb'" },
  { id: "uncia",         name: "Uncia (Roman)",      factor: 27.4,    category: "traditional", description: "Roman ounce, 1/12 libra (~27.4g), origin of 'oz'" },
  { id: "mina",          name: "Mina (Greek)",       factor: 436,     category: "traditional", description: "Greek mina (~436g), 100 drachma" },
  { id: "talent",        name: "Talent (Greek)",     factor: 26160,   category: "traditional", description: "Greek talent (~26.16kg), 60 mina — largest ancient unit" },
  { id: "drachma",       name: "Drachma (Greek)",    factor: 4.36,    category: "traditional", description: "Greek weight (~4.36g), origin of currency" },
  { id: "obol",          name: "Obol (Greek)",       factor: 0.727,   category: "traditional", description: "Greek small weight (~0.73g), 1/6 drachma" },

  // ── French ──
  { id: "livre",         name: "Livre (French)",     factor: 489.5,   category: "traditional", description: "French pound (~489.5g), used before metric system" },
  { id: "once_fr",       name: "Once (French)",      factor: 30.59,   category: "traditional", description: "French ounce, 1/16 livre (~30.59g)" },
  { id: "marc",          name: "Marc (French)",      factor: 244.75,  category: "traditional", description: "French half-livre (~244.75g), used for silver", isPreciousMetal: true, metalType: "silver" },
  { id: "gros_fr",       name: "Gros (French)",      factor: 3.82,    category: "traditional", description: "French gros, 1/8 once (~3.82g)" },

  // ── German ──
  { id: "pfund",         name: "Pfund (German)",     factor: 500,     category: "traditional", description: "German pound — exactly 500g (metric reform)" },
  { id: "zentner",       name: "Zentner (German)",   factor: 50000,   category: "traditional", description: "German hundredweight, 100 pfund — 50kg" },
  { id: "loth",          name: "Loth (German)",      factor: 15.625,  category: "traditional", description: "German small weight, 1/32 pfund (~15.625g)" },

  // ── Dutch ──
  { id: "pond_nl",       name: "Pond (Dutch)",       factor: 494,     category: "traditional", description: "Dutch pound (~494g), used in VOC trade" },
  { id: "ons_nl",        name: "Ons (Dutch)",        factor: 100,     category: "traditional", description: "Dutch ons, modern standard — 100g" },

  // ── British ──
  { id: "grain_uk",      name: "Grain",              factor: 0.0648,  category: "traditional", description: "Oldest English weight, based on barley grain (~0.0648g)" },

  // ═══════════════════════════════════════════
  //  REGIONAL VARIANTS (same system, different locale)
  // ═══════════════════════════════════════════

  { id: "tael_hk",       name: "Tael (Hong Kong)",   factor: 37.429,  category: "traditional", description: "Hong Kong tael (~37.43g), used in Cantonese gold trade", isPreciousMetal: true, metalType: "gold" },
  { id: "tael_sg",       name: "Tael (Singapore)",   factor: 37.799,  category: "traditional", description: "Singapore tael (~37.8g), used in local gold shops", isPreciousMetal: true, metalType: "gold" },
  { id: "catty_sg",      name: "Catty (Singapore)",  factor: 604.8,   category: "traditional", description: "Singapore catty (~604.8g), 16 tael" },
];
