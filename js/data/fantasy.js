// ─── Fantasy Weight Units — Tiered Arcane System ───
// factor = grams per 1 unit
// Base ratio: x12 per tier (duodecimal)
//
// Tier 1 (Dust):     ~1g      base particle
// Tier 2 (Shard):    ~12g     small fragment
// Tier 3 (Stone):    ~144g    medium piece
// Tier 4 (Core):     ~1728g   large artifact
// 1 Core = 12 Stone = 144 Shard = 1728 Dust

export const fantasyUnits = [

  // ═══════════════════════════════════════════
  //  TIER 1 — DUST & PARTICLES (~1g)
  // ═══════════════════════════════════════════

  { id: "ether_dust",        name: "Ether Dust",            factor: 1,       category: "fantasy", description: "1 g — partikel eter halus, satuan dasar massa arcane" },
  { id: "fairy_dust",        name: "Fairy Dust",            factor: 0.5,     category: "fantasy", description: "0.5 g — serbuk peri, setengah ether dust" },
  { id: "void_dust",         name: "Void Dust",             factor: 0.25,    category: "fantasy", description: "0.25 g — sisa dark matter, hampir tanpa bobot" },
  { id: "stardust",          name: "Stardust",              factor: 2,       category: "fantasy", description: "2 g — partikel bintang jatuh yang dikumpulkan saat fajar" },
  { id: "ember_spark",       name: "Ember Spark",           factor: 1.5,     category: "fantasy", description: "1.5 g — serpihan bara abadi yang terus menyala" },
  { id: "frost_mote",        name: "Frost Mote",            factor: 1.2,     category: "fantasy", description: "1.2 g — kristal es mikroskopis yang tak pernah mencair" },
  { id: "shadow_dust",       name: "Shadow Dust",           factor: 0.8,     category: "fantasy", description: "0.8 g — serbuk shadow weave, menyerap cahaya" },
  { id: "luminous_dust",     name: "Luminous Dust",         factor: 1.1,     category: "fantasy", description: "1.1 g — bubuk fosforesen yang bercahaya gelap" },
  { id: "blood_sand",        name: "Blood Sand",            factor: 2.5,     category: "fantasy", description: "2.5 g — pasir merah dari medan perang terenchant" },
  { id: "dream_powder",      name: "Dream Powder",          factor: 0.3,     category: "fantasy", description: "0.3 g — dipanen dari pikiran tidur, hampir tak bermassa" },

  // ═══════════════════════════════════════════
  //  TIER 2 — SHARDS & FRAGMENTS (~12g)
  // ═══════════════════════════════════════════

  { id: "mana_shard",        name: "Mana Shard",            factor: 12,      category: "fantasy", description: "12 g — kristal mana kecil, = 12 ether dust" },
  { id: "ether_shard",       name: "Ether Shard",           factor: 10,      category: "fantasy", description: "10 g — pecahan eter murni" },
  { id: "rune_fragment",     name: "Rune Fragment",         factor: 15,      category: "fantasy", description: "15 g — pecahan prasasti rune aktif" },
  { id: "dragon_scale",      name: "Dragon Scale",          factor: 8,       category: "fantasy", description: "8 g — sisik naga dewasa yang ganti kulit" },
  { id: "wyvern_scale",      name: "Wyvern Scale",          factor: 6,       category: "fantasy", description: "6 g — sisik wyvern, lebih ringan dari naga" },
  { id: "basilisk_scale",    name: "Basilisk Scale",        factor: 14,      category: "fantasy", description: "14 g — sisik membatu, pakai sarung!" },
  { id: "phoenix_feather",   name: "Phoenix Feather",       factor: 2,       category: "fantasy", description: "2 g — satu bulu bercahaya dari phoenix terlahir kembali" },
  { id: "chimera_hair",      name: "Chimera Mane Hair",     factor: 0.5,     category: "fantasy", description: "0.5 g — helai tri-warna dari surai chimera" },
  { id: "enchant_gem",       name: "Enchanted Gem",         factor: 15,      category: "fantasy", description: "15 g — permata berenchant ringan" },
  { id: "luminous_pearl",    name: "Luminous Pearl",        factor: 12,      category: "fantasy", description: "12 g — mutiara yang bersinar di cahaya bulan" },
  { id: "soul_shard",        name: "Soul Shard",            factor: 5,       category: "fantasy", description: "5 g — pecahan berisi secercah energi jiwa" },
  { id: "amulet",            name: "Amulet",                factor: 25,      category: "fantasy", description: "25 g — liontin pelindung" },
  { id: "ring",              name: "Binding Ring",          factor: 8,       category: "fantasy", description: "8 g — cincin terenchant dengan permata" },
  { id: "wand",              name: "Wizard's Wand",         factor: 50,      category: "fantasy", description: "50 g — tongkat fokus arcane terukir" },
  { id: "flame_ember",       name: "Flame Ember",           factor: 5,       category: "fantasy", description: "5 g — bara ajaib yang terus menyala" },
  { id: "ice_crystal",       name: "Ice Crystal",           factor: 20,      category: "fantasy", description: "20 g — kristal beku permanen bermagis" },
  { id: "thunderstone_shard", name: "Thunderstone Shard",   factor: 18,      category: "fantasy", description: "18 g — fragmen mineral bermuatan listrik" },
  { id: "moonstone_shard",   name: "Moonstone Shard",       factor: 12,      category: "fantasy", description: "12 g — batu diberkati bulan purnama" },
  { id: "sunstone_shard",    name: "Sunstone Shard",        factor: 14,      category: "fantasy", description: "14 g — kristal surya bercahaya" },
  { id: "dream_silk",        name: "Dream Silk Swatch",     factor: 0.4,     category: "fantasy", description: "0.4 g — kain terenchant, hampir tanpa bobot" },
  { id: "shadow_weave",      name: "Shadow Weave",          factor: 1.5,     category: "fantasy", description: "1.5 g — kain dark magic-infused" },
  { id: "living_metal_ingot", name: "Living Metal Ingot",   factor: 10,      category: "fantasy", description: "10 g — batang metal semi-sadar" },

  // ═══════════════════════════════════════════
  //  TIER 3 — STONES & CORES (~144g)
  // ═══════════════════════════════════════════

  { id: "mana_stone",        name: "Mana Stone",            factor: 144,     category: "fantasy", description: "144 g — kristal mana polesan, = 12 shard terkondensasi" },
  { id: "arcane_fragment",   name: "Arcane Fragment",       factor: 120,     category: "fantasy", description: "120 g — pecahan perangkat arcane kuno" },
  { id: "rune_stone",        name: "Rune Stone",            factor: 150,     category: "fantasy", description: "150 g — tablet rune terukir dengan enchant aktif" },
  { id: "unicorn_horn",      name: "Unicorn Horn Shard",    factor: 160,     category: "fantasy", description: "160 g — pecahan tanduk unicorn murni" },
  { id: "griffin_claw",      name: "Griffin Claw",          factor: 45,      category: "fantasy", description: "45 g — cakar tajam griffin" },
  { id: "hydra_fang",        name: "Hydra Fang",            factor: 90,      category: "fantasy", description: "90 g — taring berbisa dari kepala hydra" },
  { id: "orb_of_binding",    name: "Orb of Binding",        factor: 200,     category: "fantasy", description: "200 g — bola penjebak energi terikat" },
  { id: "potion_vial",       name: "Potion Vial (full)",    factor: 150,     category: "fantasy", description: "150 g — ramuan healing dalam botol kaca standar" },
  { id: "spell_scroll",      name: "Spell Scroll",          factor: 30,      category: "fantasy", description: "30 g — perkamen dengan formula spell terinskripsi" },
  { id: "soul_gem",          name: "Soul Gem",              factor: 120,     category: "fantasy", description: "120 g — permata penangkap & penyimpan jiwa" },
  { id: "obsidian_core",     name: "Obsidian Core",         factor: 180,     category: "fantasy", description: "180 g — inti magis vulkanik padat" },
  { id: "ether_core",        name: "Ether Core",            factor: 130,     category: "fantasy", description: "130 g — bola eter yang memadat" },
  { id: "troll_blood_vial",  name: "Troll Blood Vial",      factor: 140,     category: "fantasy", description: "140 g — darah troll kental regeneratif" },
  { id: "kraken_ink_pot",    name: "Kraken Ink Pot",        factor: 200,     category: "fantasy", description: "200 g — tinta gurita raksasa dalam pot tertutup" },
  { id: "tome",              name: "Ancient Tome",          factor: 1500,    category: "fantasy", description: "1500 g — buku spell kulit berpengait" },
  { id: "crystal_ball",      name: "Crystal Ball",          factor: 2000,    category: "fantasy", description: "2000 g — bola kristal scrying" },

  // Tier 3 — Weapons & Armor
  { id: "dagger",            name: "Arcane Dagger",         factor: 350,     category: "fantasy", description: "350 g — pedang pendek terenchant" },
  { id: "sword",             name: "Standard Sword",        factor: 1200,    category: "fantasy", description: "1200 g — longsword seimbang, andalan petualang" },
  { id: "arrows_quiver",     name: "Arrow Quiver (20)",     factor: 1200,    category: "fantasy", description: "1200 g — ikat 20 anak panah" },
  { id: "helmet_iron",       name: "Iron Helmet",           factor: 2500,    category: "fantasy", description: "2500 g — helm besi open-face standar" },

  // ═══════════════════════════════════════════
  //  TIER 4 — CORES & RELICS (~1728g / kg)
  // ═══════════════════════════════════════════

  { id: "arcane_core",       name: "Arcane Core",           factor: 1728,    category: "fantasy", description: "1728 g — bola mana pekat, = 12 stone menyatu, dasar Tier 4" },
  { id: "mithril_ingot",     name: "Mithril Ingot",         factor: 2100,    category: "fantasy", description: "2100 g — batang mithril murni, lebih ringan dari baja" },
  { id: "greatsword",        name: "Greatsword",            factor: 3500,    category: "fantasy", description: "3500 g — blade dua tangan masif" },
  { id: "war_hammer",        name: "War Hammer",            factor: 4500,    category: "fantasy", description: "4500 g — palu perang penghancur" },
  { id: "shield_wooden",     name: "Wooden Shield",         factor: 4000,    category: "fantasy", description: "4000 g — perisai kayu bundar dasar" },
  { id: "shield_steel",      name: "Steel Shield",          factor: 8000,    category: "fantasy", description: "8000 g — perisai baja berat ksatria" },
  { id: "chainmail",         name: "Chainmail Hauberk",     factor: 12000,   category: "fantasy", description: "12 kg — baju zirah rantai penuh" },
  { id: "plate_armor",       name: "Plate Armor Set",       factor: 22000,   category: "fantasy", description: "22 kg — set armor plate, perlindungan maksimal" },
  { id: "staff",             name: "Staff of Channeling",   factor: 3000,    category: "fantasy", description: "3000 g — tongkat fokus arcane tinggi" },
  { id: "dragon_bone",       name: "Dragon Bone",           factor: 1400,    category: "fantasy", description: "1400 g — fragmen kerangka naga padat" },
  { id: "behemoth_horn",     name: "Behemoth Horn",         factor: 5000,    category: "fantasy", description: "5000 g — tanduk beast masif" },
  { id: "aurora_shard",      name: "Aurora Shard",          factor: 1800,    category: "fantasy", description: "1800 g — aurora borealis yang memadat" },
  { id: "void_core",         name: "Void Core",             factor: 500,     category: "fantasy", description: "500 g — bola kegelapan terkompresi" },
  { id: "flame_heart",       name: "Flame Heart",           factor: 800,     category: "fantasy", description: "800 g — jantung elemental api yang membatu" },
  { id: "frost_heart",       name: "Frost Heart",           factor: 750,     category: "fantasy", description: "750 g — inti beku elemental es" },
  { id: "earth_heart",       name: "Earth Heart",           factor: 2200,    category: "fantasy", description: "2200 g — inti mineral padat golem" },
  { id: "storm_heart",       name: "Storm Heart",           factor: 600,     category: "fantasy", description: "600 g — inti bergejolak penuh petir" },
  { id: "healing_stone",     name: "Greater Healing Stone", factor: 1500,    category: "fantasy", description: "1500 g — batu yang memancar energi restoratif" },
  { id: "teleport_stone",    name: "Teleportation Stone",   factor: 400,     category: "fantasy", description: "400 g — batu teleportasi jarak pendek" },
  { id: "relic_fragment",    name: "Relic Fragment",        factor: 1728,    category: "fantasy", description: "1728 g — pecahan relik kuno, = 1 core" },

  // ═══════════════════════════════════════════
  //  TIER 5 — LEGENDARY (10 kg+)
  // ═══════════════════════════════════════════

  { id: "hero_mass",         name: "Hero Mass",             factor: 70000,   category: "fantasy", description: "≈70 kg — berat pahlawan legendaris, dipakai sebagai satuan" },
  { id: "titan_fragment",    name: "Titan Fragment",        factor: 50000,   category: "fantasy", description: "≈50 kg — bongkahan tubuh titan yang jatuh" },
  { id: "celestial_mass",    name: "Celestial Mass",        factor: 17280,   category: "fantasy", description: "≈17.3 kg — 10 core menyatu, berat makhluk surgawi kecil" },
  { id: "world_shard",       name: "World Shard",           factor: 172800,  category: "fantasy", description: "≈172.8 kg — pecahan dunia yang hancur, = 100 core" },
  { id: "star_core",         name: "Star Core",             factor: 1728000, category: "fantasy", description: "≈1.7 ton — massa bintang runtuh, 1000 core, level legendaris" },

  // ═══════════════════════════════════════════
  //  CURRENCY (berat-based)
  // ═══════════════════════════════════════════

  { id: "copper_coin",       name: "Copper Coin (CP)",      factor: 3,       category: "fantasy", description: "3 g — keping tembaga standar, mata uang umum" },
  { id: "silver_coin",       name: "Silver Coin (SP)",      factor: 6,       category: "fantasy", description: "6 g — keping perak, 2 CP, andalan pedagang" },
  { id: "gold_coin",         name: "Gold Coin (GP)",        factor: 12,      category: "fantasy", description: "12 g — keping emas, 2 SP, bayaran petualang" },
  { id: "platinum_coin",     name: "Platinum Coin (PP)",    factor: 12,      category: "fantasy", description: "12 g — keping platina langka, 10 GP, level bangsawan" },
  { id: "mithril_coin",      name: "Mithril Crown",         factor: 4,       category: "fantasy", description: "4 g — mata uang mithril ultra-langka, 50 GP" },

  // ═══════════════════════════════════════════
  //  INGREDIENTS & REAGENTS
  // ═══════════════════════════════════════════

  { id: "alchemist_dust",    name: "Alchemist's Dust",      factor: 1,       category: "fantasy", description: "1 g — bubuk reagen ajaib, = 1 ether dust" },
  { id: "herb_bundle",       name: "Herb Bundle",           factor: 50,      category: "fantasy", description: "50 g — ikatan herbal obat" },
  { id: "venom_sac",         name: "Venom Sac",             factor: 30,      category: "fantasy", description: "30 g — kelenjar racun dari beast" },
  { id: "mana_petal",        name: "Mana Petal",            factor: 0.8,     category: "fantasy", description: "0.8 g — kelopak bunga bermuatan mana" },
  { id: "ghost_moss",        name: "Ghost Moss",            factor: 3,       category: "fantasy", description: "3 g — lumut bercahaya dari gua berhantu" },
  { id: "wyrm_ash",          name: "Wyrm Ash",              factor: 2,       category: "fantasy", description: "2 g — abu sisa napas naga" },
  { id: "crystal_shard",     name: "Elemental Crystal",     factor: 25,      category: "fantasy", description: "25 g — pecahan kristal elemental tak beraliansi" },

  // ═══════════════════════════════════════════
  //  EASTERN FANTASY / ISEKAI / CULTIVATION
  //  Inspirasi: Solo Leveling, Overlord, Nano Machine,
  //  Battle Through the Heavens, dll.
  // ═══════════════════════════════════════════

  // Shards & Fragments (Tier 2 area)
  { id: "spirit_stone",      name: "Spirit Stone (Low Grade)",   factor: 10,      category: "fantasy", description: "10 g — batu roh rendah berisi qi/mana, populer di cultivation manhwa" },
  { id: "beast_core",        name: "Beast Core",                 factor: 8,       category: "fantasy", description: "8 g — inti monster, untuk cultivasi atau crafting pill" },
  { id: "demon_core",        name: "Demon Core",                 factor: 15,      category: "fantasy", description: "15 g — inti iblis berenergi tinggi" },
  { id: "qi_bead",           name: "Qi Bead",                    factor: 5,       category: "fantasy", description: "5 g — manik qi murni untuk meditasi & breakthrough" },
  { id: "heavenly_crystal",  name: "Heavenly Crystal Shard",     factor: 12,      category: "fantasy", description: "12 g — bahan utama artifact di cultivation story" },

  // Stones & Cores (Tier 3 area)
  { id: "mana_crystal",      name: "Mana Crystal (Medium)",      factor: 160,     category: "fantasy", description: "160 g — kristal mana sedang, sumber energi isekai RPG" },
  { id: "spirit_pill",       name: "Spirit Pill (High Grade)",   factor: 2,       category: "fantasy", description: "2 g — pil kultivasi tinggi, ringan tapi sangat berharga" },
  { id: "nascent_soul_frag", name: "Nascent Soul Fragment",      factor: 100,     category: "fantasy", description: "100 g — fragmen jiwa bayi (Nascent Soul), langka di xianxia" },
  { id: "dragon_vein_stone", name: "Dragon Vein Stone",          factor: 180,     category: "fantasy", description: "180 g — batu urat naga, sumber qi alam super murni" },

  // Major Artifacts (Tier 4 area)
  { id: "divine_artifact",   name: "Divine Artifact",            factor: 2500,    category: "fantasy", description: "2500 g — senjata/benda suci tingkat dewa" },
  { id: "spatial_ring",      name: "Spatial Ring",               factor: 15,      category: "fantasy", description: "15 g — cincin dimensi, ringan tapi kapasitas besar" },
  { id: "immortal_pill",     name: "Immortal Pill",              factor: 5,       category: "fantasy", description: "5 g — pil keabadian, super ringan efek luar biasa" },
  { id: "phoenix_blood",     name: "Phoenix Blood Essence",      factor: 1200,    category: "fantasy", description: "1200 g — esensi darah phoenix untuk rebirth/power up" },

  // Ingredients (Eastern Style)
  { id: "monster_core",      name: "Monster Core",               factor: 25,      category: "fantasy", description: "25 g — inti monster biasa, bahan dasar crafting" },
  { id: "heavenly_herb",     name: "Heavenly Spirit Herb",       factor: 10,      category: "fantasy", description: "10 g — tanaman roh surgawi, bahan utama pill" },
  { id: "dragon_blood",      name: "Dragon Blood Vial",          factor: 200,     category: "fantasy", description: "200 g — darah naga murni dalam botol" },
  { id: "yin_yang_fruit",    name: "Yin-Yang Fruit",             factor: 80,      category: "fantasy", description: "80 g — buah keseimbangan yin-yang, langka" },
  { id: "soul_essence",      name: "Soul Essence Crystal",       factor: 40,      category: "fantasy", description: "40 g — kristal esensi jiwa untuk soul weapon" },

  // Tier 5+ — Legendary Eastern
  { id: "world_tree_leaf",   name: "World Tree Leaf",            factor: 50,      category: "fantasy", description: "50 g — daun Pohon Dunia, pembawa kebijaksanaan" },
  { id: "god_core",          name: "God Core",                   factor: 5000,    category: "fantasy", description: "5000 g — inti kekuatan dewa, ultimate power di xianxia" },
  { id: "primordial_chaos",  name: "Primordial Chaos Fragment",  factor: 10000,   category: "fantasy", description: "10 kg — pecahan Kekacauan Primordial, bahan penciptaan dunia" },

  // Currency (Eastern Style)
  { id: "spirit_coin",       name: "Spirit Coin",                factor: 5,       category: "fantasy", description: "5 g — mata uang cultivation dunia dari spirit stone" },
  { id: "contribution_pt",   name: "Contribution Point Token",   factor: 1,       category: "fantasy", description: "1 g — token kontribusi sekte untuk tukar resource langka" },
];
