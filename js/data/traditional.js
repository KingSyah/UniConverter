// ─── Traditional & Historical Weight Units ───
// factor = grams per 1 unit

export const traditionalUnits = [

  // ═══════════════════════════════════════════
  //  INDONESIA / NUSANTARA
  // ═══════════════════════════════════════════

  // ── Sistem Emas Nusantara ──
  { id: "mayam",         name: "Mayam",              factor: 3.22,    category: "traditional", description: "≈3.22 g. Satuan emas Nusantara untuk perhiasan & mahar. / Nusantara gold weight for jewelry & dowry.", isPreciousMetal: true, metalType: "gold" },
  { id: "kupang",        name: "Kupang",             factor: 0.64,    category: "traditional", description: "≈0.64 g. 1/5 mayam, untuk perhiasan kecil. / 1/5 mayam, used for small gold items.", isPreciousMetal: true, metalType: "gold" },
  { id: "saga",          name: "Saga",               factor: 0.0645,  category: "traditional", description: "≈0.065 g. Satuan emas terkecil, 1/10 kupang. / Smallest Nusantara gold unit, 1/10 kupang.", isPreciousMetal: true, metalType: "gold" },
  { id: "biji_merah",    name: "Biji Merah",         factor: 0.125,   category: "traditional", description: "≈0.125 g. Berat biji merah untuk perdagangan emas Melayu. / Red seed weight used in Malay gold trade.", isPreciousMetal: true, metalType: "gold" },
  { id: "tahil",         name: "Tahil",              factor: 37.8,    category: "traditional", description: "≈37.8 g. Tael Melayu/Tionghoa, 16 tahil = 1 kati. / Malay/Chinese tael, standard in Nusantara trade." },
  { id: "sookai",        name: "Sookai",             factor: 5.95,    category: "traditional", description: "≈5.95 g. Satuan emas Semenanjung Melayu. / Gold measure in Malay Peninsula.", isPreciousMetal: true, metalType: "gold" },
  { id: "real",          name: "Real",               factor: 3.22,    category: "traditional", description: "≈3.22 g. Satuan emas kerajaan Melayu. / Gold weight in Malay kingdoms.", isPreciousMetal: true, metalType: "gold" },

  // ── Sistem Emas Aceh ──
  { id: "mayam_aceh",    name: "Mayam Aceh",         factor: 3.33,    category: "traditional", description: "≈3.33 g. Satuan emas utama Aceh untuk mahar (jeulamee) & perhiasan. / Primary gold unit in Aceh for wedding dowry & jewelry.", isPreciousMetal: true, metalType: "gold", region: "Aceh" },
  { id: "ci_aceh",       name: "Ci (Aceh)",          factor: 0.333,   category: "traditional", description: "≈0.333 g. 10 Ci = 1 Mayam Aceh. / Small Acehnese gold unit, 10 Ci = 1 Mayam.", isPreciousMetal: true, metalType: "gold", region: "Aceh" },

  // ── Sistem Berat Pasar Nusantara ──
  { id: "kati",          name: "Kati",               factor: 604.8,   category: "traditional", description: "≈604.8 g. Kati Melayu, 16 tahil, standar pasar. / Malay catty, 16 tahil, standard market weight." },
  { id: "pikul",         name: "Pikul",              factor: 60480,   category: "traditional", description: "≈60.48 kg. 100 kati, sebeban satu orang. / 100 kati, load carried by one person." },
  { id: "bahar",         name: "Bahar",              factor: 181440,  category: "traditional", description: "≈181.4 kg. 3 pikul, berat maritim Nusantara (era VOC). / 3 pikul, Nusantara maritime weight (VOC spice trade era)." },
  { id: "koyan",         name: "Koyan",              factor: 2419200, category: "traditional", description: "≈2.4 ton. 40 pikul, untuk beras & komoditas curah. / 40 pikul, bulk weight for rice & commodities." },
  { id: "bungkal",       name: "Bungkal",            factor: 1.61,    category: "traditional", description: "≈1.61 g. Satuan kecil Melayu. / Small Malay weight unit." },
  { id: "bungkai",       name: "Bungkai",            factor: 3.22,    category: "traditional", description: "≈3.22 g. Satuan emas Aceh. / Acehnese gold weight unit.", isPreciousMetal: true, metalType: "gold" },

  // ── Takaran Aceh (Beras & Volume) ──
  // Hierarchy: Siblakai → Kai → Cupak → Mok → Are → Sigantang → Sinalèh → Sigunca
  // Factor = gram beras mentah (bervariasi ±5-10% tergantung jenis beras)

  // Satuan kecil (bumbu & penyesuaian)
  { id: "sihah",         name: "Sihah",              factor: 15,      category: "traditional", description: "≈10–20 g beras. Dari ujung kelingking ke jari manis. / From pinky tip to ring finger width of rice." },
  { id: "sejumput_beras", name: "Sejumput (Beras)",  factor: 20, category: "traditional", description: "≈15–25 g beras. Dicubit dengan 3 jari. / Pinched with 3 fingers." },
  { id: "sejumput_garam", name: "Sejumput (Garam/Bumbu)", factor: 0.5, category: "traditional", description: "≈0.4–0.6 g. Untuk garam/bumbu halus — jangan samakan dengan sejumput beras! / For salt/fine spices — not the same as a pinch of rice!" },
  { id: "segenggam",     name: "Segenggam",          factor: 35,      category: "traditional", description: "≈30–40 g beras. Satu genggaman telapak tangan. / One palmful of rice." },
  { id: "sideupa",       name: "Sideupa",            factor: 80,      category: "traditional", description: "≈70–90 g. Lebar telapak tangan (kelingking ke telunjuk). / Palm width (pinky to index finger spread)." },

  // Satuan standar
  { id: "siblakai",      name: "Siblakai",           factor: 175,     category: "traditional", description: "≈175 g beras. ¼ liter, satuan kecil. / ¼ liter, small rice measure." },
  { id: "kai_aceh",      name: "Kai (Sikai)",        factor: 350,     category: "traditional", description: "≈350 g beras. Dari batok kelapa, ½ liter. / Coconut shell measure, ½ liter." },
  { id: "cupak_aceh",    name: "Cupak (Sicupak)",    factor: 700,     category: "traditional", description: "≈700 g beras. Mangkuk kayu, 2 Kai, ~1 liter. / Wooden bowl, 2 Kai, ~1 liter." },
  { id: "mok",           name: "Mok (Mug / Muk)",    factor: 250,     category: "traditional", description: "≈250 g beras. Kaleng susu kental manis bekas, satuan ikonik Aceh. / Evaporated milk tin, iconic Acehnese measure." },

  // Satuan sedang & besar
  { id: "are_aceh",      name: "Are (Aree / Bambu)", factor: 1500,    category: "traditional", description: "≈1.5 kg beras. Takaran bambu, 6 Mok, sangat umum di pasar. / Bamboo measure, 6 Mok, very common at markets." },
  { id: "siaree",        name: "Siaree (Siare)",     factor: 1400,    category: "traditional", description: "≈1.4 kg beras, ~2 liter. / ~1.4 kg rice, ~2 liters." },
  { id: "sigantang",     name: "Sigantang (Gantang)",factor: 3000,    category: "traditional", description: "≈3 kg beras. 2 Are, ~4 liter. / 2 Are, ~4 liters." },
  { id: "sinaleh",       name: "Sinalèh (Nalèh)",    factor: 24000,   category: "traditional", description: "≈24 kg beras. 16 Are, satuan besar. / 16 Are, large unit." },
  { id: "sigunca",       name: "Sigunca",            factor: 240000,  category: "traditional", description: "≈240 kg. 10 Nalèh, satuan terbesar untuk perdagangan. / 10 Nalèh, largest unit for bulk trade." },

  // ── Zakat Fitrah Aceh ──
  { id: "sha_aceh",      name: "Sha' (Zakat Fitrah)", factor: 2800,   category: "traditional", description: "≈2.8 kg beras. Standar zakat fitrah Aceh per jiwa (Mazhab Syafi'i). / Aceh zakat fitrah standard per person (Shafi'i school)." },
  { id: "sha_tradisional", name: "Sha' Tradisional",  factor: 2750,   category: "traditional", description: "≈2.75 kg. 1.5 Are + segenggam, atau 10–11 Mok + sejumput. / Traditional measure: 1.5 Are + a handful, or 10–11 Mok + a pinch." },

  // ── "Secukupnya" (bumbu masak) ──
  { id: "secukupnya_garam", name: "Secukupnya (Garam)", factor: 5, category: "traditional", description: "≈2–5 g. Takaran awal garam untuk 4–5 porsi, cicipi dulu! / Initial salt for 4–5 servings, taste first!" },
  { id: "secukupnya_gula",  name: "Secukupnya (Gula)",  factor: 5, category: "traditional", description: "≈2–5 g. Takaran awal gula masakan gurih, sesuaikan selera. / Initial sugar for savory dishes, adjust to taste." },

  // ── Satuan Sendok (Teh & Makan) untuk Bumbu Masak ──
  // Standar takaran di Indonesia (sendok datar / level).
  { id: "sendok_teh_garam",    name: "Sendok Teh Garam",      factor: 5.5,  category: "traditional", description: "≈5.5 g. Sendok teh garam datar (rentang 5–6 g). / Teaspoon of salt, level (range 5–6 g)." },
  { id: "sendok_makan_garam",  name: "Sendok Makan Garam",    factor: 15,   category: "traditional", description: "≈15 g. Sendok makan garam datar (rentang 10–18 g). / Tablespoon of salt, level (range 10–18 g)." },
  { id: "sendok_teh_gula",     name: "Sendok Teh Gula Pasir", factor: 4,    category: "traditional", description: "≈4 g. Sendok teh gula pasir datar. / Teaspoon of granulated sugar, level." },
  { id: "sendok_makan_gula",   name: "Sendok Makan Gula Pasir", factor: 12, category: "traditional", description: "≈12 g. Sendok makan gula pasir datar. / Tablespoon of granulated sugar, level." },

  { id: "catty_id",      name: "Kati (Indonesia)",   factor: 617,     category: "traditional", description: "≈617 g. Kati Jawa, dipakai di pasar tradisional. / Javanese catty used in traditional markets." },

  // ═══════════════════════════════════════════
  //  CHINA — Sistem Jīn-Liǎng (斤两)
  // ═══════════════════════════════════════════

  // Modern Chinese (市制)
  { id: "jin",           name: "Jin (斤)",           factor: 500,     category: "traditional", description: "500 g. Kati Tiongkok modern, tepat ½ kg. / Modern Chinese catty, exactly ½ kg." },
  { id: "liang",         name: "Liang (两)",          factor: 50,      category: "traditional", description: "50 g. 1/10 jin, dipakai untuk emas & perak. / 1/10 jin, used for gold and silver.", isPreciousMetal: true, metalType: "gold" },
  { id: "qian",          name: "Qian (钱)",           factor: 5,       category: "traditional", description: "5 g. 1/10 liang. / Chinese mace, 1/10 liang.", isPreciousMetal: true, metalType: "gold" },
  { id: "fen_cn",        name: "Fen (分)",            factor: 0.5,     category: "traditional", description: "0.5 g. 1/10 qian. / Chinese candareen, 1/10 qian." },
  { id: "li_cn",         name: "Li (厘)",             factor: 0.05,    category: "traditional", description: "0.05 g. 1/10 fen. / Chinese li, 1/10 fen." },
  { id: "dan",           name: "Dan (担)",            factor: 50000,   category: "traditional", description: "50 kg. 100 jin, untuk beras & komoditas. / Chinese picul, 100 jin, for grain & bulk." },
  { id: "jun",           name: "Jun (钧)",            factor: 7500,    category: "traditional", description: "7.5 kg. 30 jin, satuan kuno Tiongkok. / 30 jin, ancient Chinese unit." },

  // Historical Chinese (pra-1929)
  { id: "jin_old",       name: "Jin (旧斤)",          factor: 596.8,   category: "traditional", description: "≈597 g. Kati lama era Qing. / Pre-reform Chinese catty, Qing dynasty." },
  { id: "liang_old",     name: "Liang (旧两)",         factor: 37.3,    category: "traditional", description: "≈37.3 g. Tael lama untuk perdagangan emas. / Pre-reform tael for gold & silver trade.", isPreciousMetal: true, metalType: "gold" },

  // ═══════════════════════════════════════════
  //  INDIA / SOUTH ASIA — Tola-Ratti
  // ═══════════════════════════════════════════

  { id: "tola",          name: "Tola",               factor: 11.6638, category: "traditional", description: "≈11.66 g. Standar emas India, masih dipakai di bullion Asia Selatan. / Indian gold standard, still used in South Asian bullion trade.", isPreciousMetal: true, metalType: "gold" },
  { id: "masha",         name: "Masha",              factor: 0.97,    category: "traditional", description: "≈0.97 g. 1/12 tola, untuk perhiasan India. / 1/12 tola, used in Indian jewelry making.", isPreciousMetal: true, metalType: "gold" },
  { id: "ratti",         name: "Ratti",              factor: 0.1215,  category: "traditional", description: "≈0.12 g. Biji Abrus, 1/8 masha, asal mula carat. / Abrus seed, 1/8 masha, origin of the carat.", isPreciousMetal: true, metalType: "gold" },
  { id: "gunja",         name: "Gunja",              factor: 0.1215,  category: "traditional", description: "≈0.12 g. Biji saga (Abrus precatorius), standar asli ratti. / Abrus precatorius seed, original ratti standard." },

  { id: "ser",           name: "Ser (Seer)",         factor: 933.1,   category: "traditional", description: "≈933 g. 80 tola, satuan pasar India. / 80 tola, Indian market weight." },
  { id: "maund",         name: "Maund",              factor: 37324.2, category: "traditional", description: "≈37.3 kg. 40 ser, untuk beras & komoditas. / 40 ser, used for grain & bulk." },
  { id: "chatak",        name: "Chatak",             factor: 58.32,   category: "traditional", description: "≈58.3 g. 1/16 ser. / Indian weight, 1/16 ser." },
  { id: "pala",          name: "Pala",               factor: 46.66,   category: "traditional", description: "≈46.7 g. 4 tola, satuan kuno India. / 4 tola, ancient Indian weight." },
  { id: "dharana",       name: "Dharana",            factor: 3.48,    category: "traditional", description: "≈3.48 g. Satuan perak kuno India. / Ancient Indian silver weight.", isPreciousMetal: true, metalType: "silver" },
  { id: "karsha",        name: "Karsha",             factor: 11.66,   category: "traditional", description: "≈11.66 g. Takaran Ayurveda, sama dengan 1 tola. / Ayurvedic measurement, equal to 1 tola." },

  // ═══════════════════════════════════════════
  //  ISLAMIC / MIDDLE EASTERN
  // ═══════════════════════════════════════════

  { id: "mithqal",       name: "Mithqal",            factor: 4.25,    category: "traditional", description: "≈4.25 g. Satuan emas Islam untuk zakat & mahr. / Islamic gold weight for zakat & dowry.", isPreciousMetal: true, metalType: "gold" },
  { id: "dinar",         name: "Dinar (دينار)",       factor: 4.25,    category: "traditional", description: "≈4.25 g. Koin emas Islam, = 1 mithqal. / Islamic gold coin, equal to 1 mithqal.", isPreciousMetal: true, metalType: "gold" },
  { id: "dirham_wt",     name: "Dirham (weight)",    factor: 2.975,   category: "traditional", description: "≈2.98 g. 7/10 mithqal, satuan perak Islam. / 7/10 mithqal, Islamic silver weight.", isPreciousMetal: true, metalType: "silver" },
  { id: "rotl",          name: "Rotl (Ratl)",        factor: 447.2,   category: "traditional", description: "≈447 g. Pon Islam abad pertengahan. / Medieval Islamic pound." },
  { id: "okka",          name: "Okka",               factor: 1282.6,  category: "traditional", description: "≈1.28 kg. 400 dirham, berat pasar Ottoman. / 400 dirham, Ottoman market weight." },
  { id: "batman",        name: "Batman",             factor: 7695.6,  category: "traditional", description: "≈7.7 kg. 6 okka, berat curah Ottoman. / 6 okka, Ottoman bulk weight." },
  { id: "chequi",        name: "Cheki",              factor: 507.5,   category: "traditional", description: "≈507.5 g. Berat pasar Ottoman. / Ottoman market weight." },
  { id: "wakkiyyah",     name: "Wakkiyyah",          factor: 32.07,   category: "traditional", description: "≈32 g. 1/40 rotl, 'ons' Islam. / 1/40 rotl, Islamic ounce." },

  // ═══════════════════════════════════════════
  //  THAILAND — Baht-Tamleung
  // ═══════════════════════════════════════════

  { id: "baht_th",       name: "Baht (บาท)",          factor: 15.244,  category: "traditional", description: "≈15.24 g. Standar emas Thailand, masih aktif di toko emas. / Thai gold standard, still used in gold shops.", isPreciousMetal: true, metalType: "gold" },
  { id: "tamleung",      name: "Tamleung (ตำลึง)",     factor: 60.976,  category: "traditional", description: "≈60.98 g. 4 baht, tael Thailand. / 4 baht, Thai tael.", isPreciousMetal: true, metalType: "gold" },
  { id: "chang_th",      name: "Chang (ชั่ง)",        factor: 1219.52, category: "traditional", description: "≈1.22 kg. 20 tamleung. / Thai chang, 20 tamleung." },
  { id: "salung",        name: "Salung (สลึง)",       factor: 3.811,   category: "traditional", description: "≈3.81 g. 1/4 baht. / Thai quarter-baht.", isPreciousMetal: true, metalType: "gold" },
  { id: "fuang",         name: "Fuang (เฟื้อง)",       factor: 1.906,   category: "traditional", description: "≈1.91 g. 1/2 salung. / Thai half-salung.", isPreciousMetal: true, metalType: "gold" },
  { id: "pai",           name: "Pai (ไพ)",            factor: 0.953,   category: "traditional", description: "≈0.95 g. 1/2 fuang, terkecil di sistem Thailand. / Half-fuang, smallest Thai weight.", isPreciousMetal: true, metalType: "gold" },

  // ═══════════════════════════════════════════
  //  JAPAN — Monme-Kan (Edo period)
  // ═══════════════════════════════════════════

  { id: "kan",           name: "Kan (貫)",            factor: 3750,    category: "traditional", description: "≈3.75 kg. 1000 monme, diukur dari koin. / 1000 monme, measured by coins." },
  { id: "monme_jp",      name: "Monme (匁)",          factor: 3.75,    category: "traditional", description: "≈3.75 g. Untuk perdagangan perak & mutiara. / Used for silver trade & pearls.", isPreciousMetal: true, metalType: "silver" },
  { id: "kin_jp",        name: "Kin (斤)",            factor: 600,     category: "traditional", description: "600 g. 160 monme, kati Jepang. / 160 monme, Japanese catty." },
  { id: "ryou",          name: "Ryō (両)",            factor: 15,      category: "traditional", description: "15 g. 4 monme, berat koin emas Jepang. / 4 monme, Japanese gold coin weight.", isPreciousMetal: true, metalType: "gold" },
  { id: "momme",         name: "Momme",              factor: 3.75,    category: "traditional", description: "≈3.75 g. Ejaan internasional monme, standar mutiara. / International spelling of monme, pearl standard." },
  { id: "hyakume",       name: "Hyakume (百目)",       factor: 375,     category: "traditional", description: "≈375 g. 100 monme, berat pasar umum. / 100 monme, common market weight." },

  // ═══════════════════════════════════════════
  //  KOREA — Geun-Nyang
  // ═══════════════════════════════════════════

  { id: "geun_kr",       name: "Geun (근)",           factor: 600,     category: "traditional", description: "600 g. 16 nyang, kati Korea. / 16 nyang, Korean catty." },
  { id: "nyang_kr",      name: "Nyang (냥)",          factor: 37.5,    category: "traditional", description: "37.5 g. Tael Korea untuk emas. / Korean tael for gold.", isPreciousMetal: true, metalType: "gold" },
  { id: "don_kr",        name: "Don (돈)",            factor: 3.75,    category: "traditional", description: "3.75 g. 1/10 nyang. / Korean small weight, 1/10 nyang.", isPreciousMetal: true, metalType: "gold" },
  { id: "hop_kr",        name: "Hop (홉)",            factor: 0.375,   category: "traditional", description: "0.375 g. 1/10 don. / Korean minuscule weight, 1/10 don." },

  // ═══════════════════════════════════════════
  //  MYANMAR / BURMA
  // ═══════════════════════════════════════════

  { id: "viss",          name: "Viss",               factor: 1632.93, category: "traditional", description: "≈1.63 kg. 100 kyat, berat pasar Myanmar. / 100 kyat, Burmese market weight." },
  { id: "kyat_mm",       name: "Kyat",               factor: 16.33,   category: "traditional", description: "≈16.3 g. Berat sehari-hari Myanmar. / Burmese daily trade weight." },
  { id: "petha",         name: "Petha",              factor: 1.63,    category: "traditional", description: "≈1.63 g. 1/10 kyat. / Burmese small weight, 1/10 kyat." },
  { id: "moo",           name: "Moo",                factor: 0.204,   category: "traditional", description: "≈0.2 g. 1/8 petha, sangat kecil. / 1/8 petha, very small." },

  // ═══════════════════════════════════════════
  //  VIETNAM
  // ═══════════════════════════════════════════

  { id: "can_vn",        name: "Cân (Vietnam)",       factor: 604.8,   category: "traditional", description: "≈605 g. Kati Vietnam. / Vietnamese catty." },
  { id: "luong_vn",      name: "Lượng",              factor: 37.8,    category: "traditional", description: "≈37.8 g. 1/16 cân, tael Vietnam. / 1/16 cân, Vietnamese tael.", isPreciousMetal: true, metalType: "gold" },
  { id: "chi_vn",        name: "Chỉ",                factor: 3.78,    category: "traditional", description: "≈3.78 g. 1/10 lượng. / Vietnamese small weight, 1/10 lượng.", isPreciousMetal: true, metalType: "gold" },
  { id: "phan_vn",       name: "Phân",               factor: 0.378,   category: "traditional", description: "≈0.38 g. 1/10 chỉ. / Vietnamese tiny weight, 1/10 chỉ." },
  { id: "tac_vn",        name: "Tắc",                factor: 0.0378,  category: "traditional", description: "≈0.038 g. 1/10 phân, sangat kecil. / 1/10 phân, extremely small." },

  // ═══════════════════════════════════════════
  //  EUROPEAN HISTORICAL
  // ═══════════════════════════════════════════

  // Roman / Greek
  { id: "libra",         name: "Libra (Roman)",      factor: 328.9,   category: "traditional", description: "≈329 g. Pon Romawi, asal kata 'lb'. / Roman pound, origin of 'lb'." },
  { id: "uncia",         name: "Uncia (Roman)",      factor: 27.4,    category: "traditional", description: "≈27.4 g. 1/12 libra, asal kata 'oz'. / 1/12 libra, origin of 'oz'." },
  { id: "mina",          name: "Mina (Greek)",       factor: 436,     category: "traditional", description: "≈436 g. 100 drachma. / Greek mina, 100 drachma." },
  { id: "talent",        name: "Talent (Greek)",     factor: 26160,   category: "traditional", description: "≈26.2 kg. 60 mina, satuan terbesar Yunani kuno. / 60 mina, largest ancient Greek unit." },
  { id: "drachma",       name: "Drachma (Greek)",    factor: 4.36,    category: "traditional", description: "≈4.36 g. Asal mula nama mata uang. / Greek weight, origin of currency name." },
  { id: "obol",          name: "Obol (Greek)",       factor: 0.727,   category: "traditional", description: "≈0.73 g. 1/6 drachma. / Greek small weight, 1/6 drachma." },

  // French
  { id: "livre",         name: "Livre (French)",     factor: 489.5,   category: "traditional", description: "≈489.5 g. Pon Prancis sebelum sistem metrik. / French pound before metric system." },
  { id: "once_fr",       name: "Once (French)",      factor: 30.59,   category: "traditional", description: "≈30.6 g. 1/16 livre. / French ounce, 1/16 livre." },
  { id: "marc",          name: "Marc (French)",      factor: 244.75,  category: "traditional", description: "≈245 g. 1/2 livre, untuk perak. / French half-livre, used for silver.", isPreciousMetal: true, metalType: "silver" },
  { id: "gros_fr",       name: "Gros (French)",      factor: 3.82,    category: "traditional", description: "≈3.82 g. 1/8 once. / French gros, 1/8 once." },

  // German
  { id: "pfund",         name: "Pfund (German)",     factor: 500,     category: "traditional", description: "500 g. Pon Jerman (reform metrik). / German pound (metric reform)." },
  { id: "zentner",       name: "Zentner (German)",   factor: 50000,   category: "traditional", description: "50 kg. 100 pfund. / German hundredweight, 100 pfund." },
  { id: "loth",          name: "Loth (German)",      factor: 15.625,  category: "traditional", description: "≈15.6 g. 1/32 pfund. / German small weight, 1/32 pfund." },

  // Dutch
  { id: "pond_nl",       name: "Pond (Dutch)",       factor: 494,     category: "traditional", description: "≈494 g. Pon Belanda, era perdagangan VOC. / Dutch pound, VOC trade era." },
  { id: "ons_nl",        name: "Ons (Dutch)",        factor: 100,     category: "traditional", description: "100 g. Ons Belanda modern. / Modern Dutch ons." },

  // British
  { id: "grain_uk",      name: "Grain",              factor: 0.0648,  category: "traditional", description: "≈0.065 g. Berat terbutir gandum, satuan Inggris tertua. / Barley grain weight, oldest English unit." },

  // ═══════════════════════════════════════════
  //  REGIONAL VARIANTS
  // ═══════════════════════════════════════════

  { id: "tael_hk",       name: "Tael (Hong Kong)",   factor: 37.429,  category: "traditional", description: "≈37.4 g. Tael emas Hong Kong, perdagangan Kanton. / Hong Kong gold tael, Cantonese trade.", isPreciousMetal: true, metalType: "gold" },
  { id: "tael_sg",       name: "Tael (Singapore)",   factor: 37.799,  category: "traditional", description: "≈37.8 g. Tael emas Singapura. / Singapore gold tael.", isPreciousMetal: true, metalType: "gold" },
  { id: "catty_sg",      name: "Catty (Singapore)",  factor: 604.8,   category: "traditional", description: "≈605 g. Kati Singapura, 16 tael. / Singapore catty, 16 tael." },
];
