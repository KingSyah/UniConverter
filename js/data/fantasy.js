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

  { id: "ether_dust",        name: "Ether Dust",            factor: 1,       category: "fantasy", description: "1 g. Partikel eter halus, satuan dasar massa arcane.", description_en: "Finely ground ether particles, base arcane mass unit." },
  { id: "fairy_dust",        name: "Fairy Dust",            factor: 0.5,     category: "fantasy", description: "0.5 g. Serbuk peri, setengah ether dust.", description_en: "Weightless pixie powder, half an ether dust." },
  { id: "void_dust",         name: "Void Dust",             factor: 0.25,    category: "fantasy", description: "0.25 g. Sisa dark matter, hampir tanpa bobot.", description_en: "Near-weightless dark matter remnants." },
  { id: "stardust",          name: "Stardust",              factor: 2,       category: "fantasy", description: "2 g. Partikel bintang jatuh yang dikumpulkan saat fajar.", description_en: "Fallen star particles gathered at dawn." },
  { id: "ember_spark",       name: "Ember Spark",           factor: 1.5,     category: "fantasy", description: "1.5 g. Serpihan bara abadi yang terus menyala.", description_en: "Tiny perpetually burning coal fragment." },
  { id: "frost_mote",        name: "Frost Mote",            factor: 1.2,     category: "fantasy", description: "1.2 g. Kristal es mikroskopis yang tak pernah mencair.", description_en: "Microscopic ice crystal that never melts." },
  { id: "shadow_dust",       name: "Shadow Dust",           factor: 0.8,     category: "fantasy", description: "0.8 g. Serbuk shadow weave, menyerap cahaya.", description_en: "Crushed shadow weave, absorbs light." },
  { id: "luminous_dust",     name: "Luminous Dust",         factor: 1.1,     category: "fantasy", description: "1.1 g. Bubuk fosforesen yang bercahaya gelap.", description_en: "Glowing phosphorescent powder." },
  { id: "blood_sand",        name: "Blood Sand",            factor: 2.5,     category: "fantasy", description: "2.5 g. Pasir merah dari medan perang terenchant.", description_en: "Red sand from enchanted battlefields." },
  { id: "dream_powder",      name: "Dream Powder",          factor: 0.3,     category: "fantasy", description: "0.3 g. Dipanen dari pikiran tidur, hampir tak bermassa.", description_en: "Harvested from sleeping minds, almost weightless." },

  // ═══════════════════════════════════════════
  //  TIER 2 — SHARDS & FRAGMENTS (~12g)
  // ═══════════════════════════════════════════

  { id: "mana_shard",        name: "Mana Shard",            factor: 12,      category: "fantasy", description: "12 g. Kristal mana kecil, = 12 ether dust.", description_en: "Small crystallized mana fragment, 12 ether dust." },
  { id: "ether_shard",       name: "Ether Shard",           factor: 10,      category: "fantasy", description: "10 g. Pecahan eter murni.", description_en: "Fractured piece of pure ether." },
  { id: "rune_fragment",     name: "Rune Fragment",         factor: 15,      category: "fantasy", description: "15 g. Pecahan prasasti rune aktif.", description_en: "Broken runic inscription piece." },
  { id: "dragon_scale",      name: "Dragon Scale",          factor: 8,       category: "fantasy", description: "8 g. Sisik naga dewasa yang ganti kulit.", description_en: "Shed scale from an adult dragon." },
  { id: "wyvern_scale",      name: "Wyvern Scale",          factor: 6,       category: "fantasy", description: "6 g. Sisik wyvern, lebih ringan dari naga.", description_en: "Lighter scale from a lesser wyvern." },
  { id: "basilisk_scale",    name: "Basilisk Scale",        factor: 14,      category: "fantasy", description: "14 g. Sisik membatu, pakai sarung!", description_en: "Petrifying scale, handle with gloves!" },
  { id: "phoenix_feather",   name: "Phoenix Feather",       factor: 2,       category: "fantasy", description: "2 g. Satu bulu bercahaya dari phoenix terlahir kembali.", description_en: "Single radiant plume from a reborn phoenix." },
  { id: "chimera_hair",      name: "Chimera Mane Hair",     factor: 0.5,     category: "fantasy", description: "0.5 g. Helai tri-warna dari surai chimera.", description_en: "Tri-colored strand from a chimera's mane." },
  { id: "enchant_gem",       name: "Enchanted Gem",         factor: 15,      category: "fantasy", description: "15 g. Permata berenchant ringan.", description_en: "Gemstone imbued with minor magic." },
  { id: "luminous_pearl",    name: "Luminous Pearl",        factor: 12,      category: "fantasy", description: "12 g. Mutiara yang bersinar di cahaya bulan.", description_en: "Pearl that glows in moonlight." },
  { id: "soul_shard",        name: "Soul Shard",            factor: 5,       category: "fantasy", description: "5 g. Pecahan berisi secercah energi jiwa.", description_en: "Fragment containing a sliver of soul energy." },
  { id: "amulet",            name: "Amulet",                factor: 25,      category: "fantasy", description: "25 g. Liontin pelindung.", description_en: "Protective charm pendant." },
  { id: "ring",              name: "Binding Ring",          factor: 8,       category: "fantasy", description: "8 g. Cincin terenchant dengan permata.", description_en: "Enchanted ring with embedded gem." },
  { id: "wand",              name: "Wizard's Wand",         factor: 50,      category: "fantasy", description: "50 g. Tongkat fokus arcane terukir.", description_en: "Carved magical focus rod." },
  { id: "flame_ember",       name: "Flame Ember",           factor: 5,       category: "fantasy", description: "5 g. Bara ajaib yang terus menyala.", description_en: "Ever-burning magical coal." },
  { id: "ice_crystal",       name: "Ice Crystal",           factor: 20,      category: "fantasy", description: "20 g. Kristal beku permanen bermagis.", description_en: "Permanently frozen magical crystal." },
  { id: "thunderstone_shard", name: "Thunderstone Shard",   factor: 18,      category: "fantasy", description: "18 g. Fragmen mineral bermuatan listrik.", description_en: "Electrically charged mineral fragment." },
  { id: "moonstone_shard",   name: "Moonstone Shard",       factor: 12,      category: "fantasy", description: "12 g. Batu diberkati bulan purnama.", description_en: "Stone blessed by full moon." },
  { id: "sunstone_shard",    name: "Sunstone Shard",        factor: 14,      category: "fantasy", description: "14 g. Kristal surya bercahaya.", description_en: "Radiant solar crystal fragment." },
  { id: "dream_silk",        name: "Dream Silk Swatch",     factor: 0.4,     category: "fantasy", description: "0.4 g. Kain terenchant, hampir tanpa bobot.", description_en: "Near-weightless enchanted fabric piece." },
  { id: "shadow_weave",      name: "Shadow Weave",          factor: 1.5,     category: "fantasy", description: "1.5 g. Kain dark magic-infused.", description_en: "Dark magic-infused cloth strip." },
  { id: "living_metal_ingot", name: "Living Metal Ingot",   factor: 10,      category: "fantasy", description: "10 g. Batang metal semi-sadar.", description_en: "Small bar of semi-sentient metal." },

  // ═══════════════════════════════════════════
  //  TIER 3 — STONES & CORES (~144g)
  // ═══════════════════════════════════════════

  { id: "mana_stone",        name: "Mana Stone",            factor: 144,     category: "fantasy", description: "144 g. Kristal mana polesan, = 12 shard terkondensasi.", description_en: "Polished mana crystal, 12 shards condensed." },
  { id: "arcane_fragment",   name: "Arcane Fragment",       factor: 120,     category: "fantasy", description: "120 g. Pecahan perangkat arcane kuno.", description_en: "Broken piece of an ancient arcane device." },
  { id: "rune_stone",        name: "Rune Stone",            factor: 150,     category: "fantasy", description: "150 g. Tablet rune terukir dengan enchant aktif.", description_en: "Carved runic tablet with active enchantment." },
  { id: "unicorn_horn",      name: "Unicorn Horn Shard",    factor: 160,     category: "fantasy", description: "160 g. Pecahan tanduk unicorn murni.", description_en: "Fragment of a pure unicorn horn." },
  { id: "griffin_claw",      name: "Griffin Claw",          factor: 45,      category: "fantasy", description: "45 g. Cakar tajam griffin.", description_en: "Sharp talon from a griffin." },
  { id: "hydra_fang",        name: "Hydra Fang",            factor: 90,      category: "fantasy", description: "90 g. Taring berbisa dari kepala hydra.", description_en: "Venomous fang from a hydra head." },
  { id: "orb_of_binding",    name: "Orb of Binding",        factor: 200,     category: "fantasy", description: "200 g. Bola penjebak energi terikat.", description_en: "Sphere that contains bound energy." },
  { id: "potion_vial",       name: "Potion Vial (full)",    factor: 150,     category: "fantasy", description: "150 g. Ramuan healing dalam botol kaca standar.", description_en: "Standard healing potion in glass flask." },
  { id: "spell_scroll",      name: "Spell Scroll",          factor: 30,      category: "fantasy", description: "30 g. Perkamen dengan formula spell terinskripsi.", description_en: "Parchment with inscribed spell formula." },
  { id: "soul_gem",          name: "Soul Gem",              factor: 120,     category: "fantasy", description: "120 g. Permata penangkap & penyimpan jiwa.", description_en: "Gem that captures and stores souls." },
  { id: "obsidian_core",     name: "Obsidian Core",         factor: 180,     category: "fantasy", description: "180 g. Inti magis vulkanik padat.", description_en: "Dense volcanic magic core." },
  { id: "ether_core",        name: "Ether Core",            factor: 130,     category: "fantasy", description: "130 g. Bola eter yang memadat.", description_en: "Solidified ether sphere." },
  { id: "troll_blood_vial",  name: "Troll Blood Vial",      factor: 140,     category: "fantasy", description: "140 g. Darah troll kental regeneratif.", description_en: "Thick regenerative troll ichor." },
  { id: "kraken_ink_pot",    name: "Kraken Ink Pot",        factor: 200,     category: "fantasy", description: "200 g. Tinta gurita raksasa dalam pot tertutup.", description_en: "Giant squid ink in sealed pot." },
  { id: "tome",              name: "Ancient Tome",          factor: 1500,    category: "fantasy", description: "1500 g. Buku spell kulit berpengait.", description_en: "Leather-bound spellbook with clasp." },
  { id: "crystal_ball",      name: "Crystal Ball",          factor: 2000,    category: "fantasy", description: "2000 g. Bola kristal scrying.", description_en: "Scrying crystal sphere." },

  { id: "dagger",            name: "Arcane Dagger",         factor: 350,     category: "fantasy", description: "350 g. Pedang pendek terenchant.", description_en: "Enchanted short blade." },
  { id: "sword",             name: "Standard Sword",        factor: 1200,    category: "fantasy", description: "1200 g. Longsword seimbang, andalan petualang.", description_en: "Balanced longsword, adventurer's staple." },
  { id: "arrows_quiver",     name: "Arrow Quiver (20)",     factor: 1200,    category: "fantasy", description: "1200 g. Ikat 20 anak panah.", description_en: "Bundle of twenty arrows." },
  { id: "helmet_iron",       name: "Iron Helmet",           factor: 2500,    category: "fantasy", description: "2500 g. Helm besi open-face standar.", description_en: "Standard open-face iron helmet." },

  // ═══════════════════════════════════════════
  //  TIER 4 — CORES & RELICS (~1728g / kg)
  // ═══════════════════════════════════════════

  { id: "arcane_core",       name: "Arcane Core",           factor: 1728,    category: "fantasy", description: "1728 g. Bola mana pekat, = 12 stone menyatu.", description_en: "Concentrated mana sphere, 12 stones fused." },
  { id: "mithril_ingot",     name: "Mithril Ingot",         factor: 2100,    category: "fantasy", description: "2100 g. Batang mithril murni, lebih ringan dari baja.", description_en: "Pure mithril bar, lighter than steel." },
  { id: "greatsword",        name: "Greatsword",            factor: 3500,    category: "fantasy", description: "3500 g. Blade dua tangan masif.", description_en: "Massive two-handed blade." },
  { id: "war_hammer",        name: "War Hammer",            factor: 4500,    category: "fantasy", description: "4500 g. Palu perang penghancur.", description_en: "Crushing war hammer." },
  { id: "shield_wooden",     name: "Wooden Shield",         factor: 4000,    category: "fantasy", description: "4000 g. Perisai kayu bundar dasar.", description_en: "Basic round wooden shield." },
  { id: "shield_steel",      name: "Steel Shield",          factor: 8000,    category: "fantasy", description: "8000 g. Perisai baja berat ksatria.", description_en: "Heavy knight's tower shield." },
  { id: "chainmail",         name: "Chainmail Hauberk",     factor: 12000,   category: "fantasy", description: "12 kg. Baju zirah rantai penuh.", description_en: "Full chainmail armor." },
  { id: "plate_armor",       name: "Plate Armor Set",       factor: 22000,   category: "fantasy", description: "22 kg. Set armor plate, perlindungan maksimal.", description_en: "Full plate armor, maximum protection." },
  { id: "staff",             name: "Staff of Channeling",   factor: 3000,    category: "fantasy", description: "3000 g. Tongkat fokus arcane tinggi.", description_en: "Tall arcane focus staff." },
  { id: "dragon_bone",       name: "Dragon Bone",           factor: 1400,    category: "fantasy", description: "1400 g. Fragmen kerangka naga padat.", description_en: "Dense dragon skeleton fragment." },
  { id: "behemoth_horn",     name: "Behemoth Horn",         factor: 5000,    category: "fantasy", description: "5000 g. Tanduk beast masif.", description_en: "Massive beast horn." },
  { id: "aurora_shard",      name: "Aurora Shard",          factor: 1800,    category: "fantasy", description: "1800 g. Aurora borealis yang memadat.", description_en: "Crystallized northern lights." },
  { id: "void_core",         name: "Void Core",             factor: 500,     category: "fantasy", description: "500 g. Bola kegelapan terkompresi.", description_en: "Dense sphere of compressed darkness." },
  { id: "flame_heart",       name: "Flame Heart",           factor: 800,     category: "fantasy", description: "800 g. Jantung elemental api yang membatu.", description_en: "Solidified heart of a fire elemental." },
  { id: "frost_heart",       name: "Frost Heart",           factor: 750,     category: "fantasy", description: "750 g. Inti beku elemental es.", description_en: "Frozen core of an ice elemental." },
  { id: "earth_heart",       name: "Earth Heart",           factor: 2200,    category: "fantasy", description: "2200 g. Inti mineral padat golem.", description_en: "Dense mineral heart of a golem." },
  { id: "storm_heart",       name: "Storm Heart",           factor: 600,     category: "fantasy", description: "600 g. Inti bergejolak penuh petir.", description_en: "Volatile core crackling with lightning." },
  { id: "healing_stone",     name: "Greater Healing Stone", factor: 1500,    category: "fantasy", description: "1500 g. Batu yang memancar energi restoratif.", description_en: "Stone that radiates restorative energy." },
  { id: "teleport_stone",    name: "Teleportation Stone",   factor: 400,     category: "fantasy", description: "400 g. Batu teleportasi jarak pendek.", description_en: "Attuned stone for short-range teleport." },
  { id: "relic_fragment",    name: "Relic Fragment",        factor: 1728,    category: "fantasy", description: "1728 g. Pecahan relik kuno, = 1 core.", description_en: "Broken piece of an ancient relic, equals 1 core." },

  // ═══════════════════════════════════════════
  //  TIER 5 — LEGENDARY (10 kg+)
  // ═══════════════════════════════════════════

  { id: "hero_mass",         name: "Hero Mass",             factor: 70000,   category: "fantasy", description: "≈70 kg. Berat pahlawan legendaris, dipakai sebagai satuan.", description_en: "Weight of a legendary hero, used as measurement." },
  { id: "titan_fragment",    name: "Titan Fragment",        factor: 50000,   category: "fantasy", description: "≈50 kg. Bongkahan tubuh titan yang jatuh.", description_en: "Chunk of a fallen titan's body." },
  { id: "celestial_mass",    name: "Celestial Mass",        factor: 17280,   category: "fantasy", description: "≈17.3 kg. 10 core menyatu, berat makhluk surgawi kecil.", description_en: "10 cores fused, weight of a minor celestial being." },
  { id: "world_shard",       name: "World Shard",           factor: 172800,  category: "fantasy", description: "≈172.8 kg. Pecahan dunia yang hancur, = 100 core.", description_en: "Fragment of a shattered world, 100 cores." },
  { id: "star_core",         name: "Star Core",             factor: 1728000, category: "fantasy", description: "≈1.7 ton. Massa bintang runtuh, 1000 core, level legendaris.", description_en: "Collapsed stellar mass, 1000 cores, legendary." },

  // ═══════════════════════════════════════════
  //  CURRENCY (berat-based)
  // ═══════════════════════════════════════════

  { id: "copper_coin",       name: "Copper Coin (CP)",      factor: 3,       category: "fantasy", description: "3 g. Keping tembaga standar, mata uang umum.", description_en: "Standard copper piece, common currency." },
  { id: "silver_coin",       name: "Silver Coin (SP)",      factor: 6,       category: "fantasy", description: "6 g. Keping perak, 2 CP, andalan pedagang.", description_en: "Silver piece, 2 copper, merchant's staple." },
  { id: "gold_coin",         name: "Gold Coin (GP)",        factor: 12,      category: "fantasy", description: "12 g. Keping emas, 2 SP, bayaran petualang.", description_en: "Gold piece, 2 silver, adventurer's pay." },
  { id: "platinum_coin",     name: "Platinum Coin (PP)",    factor: 12,      category: "fantasy", description: "12 g. Keping platina langka, 10 GP, level bangsawan.", description_en: "Rare platinum piece, 10 gold, nobility." },
  { id: "mithril_coin",      name: "Mithril Crown",         factor: 4,       category: "fantasy", description: "4 g. Mata uang mithril ultra-langka, 50 GP.", description_en: "Ultra-rare mithril currency, 50 gold." },

  // ═══════════════════════════════════════════
  //  INGREDIENTS & REAGENTS
  // ═══════════════════════════════════════════

  { id: "alchemist_dust",    name: "Alchemist's Dust",      factor: 1,       category: "fantasy", description: "1 g. Bubuk reagen ajaib, = 1 ether dust.", description_en: "Finely ground magical reagent, 1 ether dust." },
  { id: "herb_bundle",       name: "Herb Bundle",           factor: 50,      category: "fantasy", description: "50 g. Ikatan herbal obat.", description_en: "Tied bundle of medicinal herbs." },
  { id: "venom_sac",         name: "Venom Sac",             factor: 30,      category: "fantasy", description: "30 g. Kelenjar racun dari beast.", description_en: "Harvested poison gland from a beast." },
  { id: "mana_petal",        name: "Mana Petal",            factor: 0.8,     category: "fantasy", description: "0.8 g. Kelopak bunga bermuatan mana.", description_en: "Petal from a mana-infused flower." },
  { id: "ghost_moss",        name: "Ghost Moss",            factor: 3,       category: "fantasy", description: "3 g. Lumut bercahaya dari gua berhantu.", description_en: "Luminescent moss from haunted caves." },
  { id: "wyrm_ash",          name: "Wyrm Ash",              factor: 2,       category: "fantasy", description: "2 g. Abu sisa napas naga.", description_en: "Ash residue from a dragon's breath." },
  { id: "crystal_shard",     name: "Elemental Crystal",     factor: 25,      category: "fantasy", description: "25 g. Pecahan kristal elemental tak beraliansi.", description_en: "Unaligned elemental crystal piece." },

  // ═══════════════════════════════════════════
  //  EASTERN FANTASY / ISEKAI / CULTIVATION
  // ═══════════════════════════════════════════

  { id: "spirit_stone",      name: "Spirit Stone (Low Grade)",   factor: 10,      category: "fantasy", description: "10 g. Batu roh rendah berisi qi/mana, populer di cultivation manhwa.", description_en: "Low-grade spirit stone with qi/mana, popular in cultivation manhwa." },
  { id: "beast_core",        name: "Beast Core",                 factor: 8,       category: "fantasy", description: "8 g. Inti monster, untuk cultivasi atau crafting pill.", description_en: "Monster core for cultivation or pill crafting." },
  { id: "demon_core",        name: "Demon Core",                 factor: 15,      category: "fantasy", description: "15 g. Inti iblis berenergi tinggi.", description_en: "High-energy demon core." },
  { id: "qi_bead",           name: "Qi Bead",                    factor: 5,       category: "fantasy", description: "5 g. Manik qi murni untuk meditasi & breakthrough.", description_en: "Pure qi bead for meditation & breakthrough." },
  { id: "heavenly_crystal",  name: "Heavenly Crystal Shard",     factor: 12,      category: "fantasy", description: "12 g. Bahan utama artifact di cultivation story.", description_en: "Main artifact ingredient in cultivation stories." },

  { id: "mana_crystal",      name: "Mana Crystal (Medium)",      factor: 160,     category: "fantasy", description: "160 g. Kristal mana sedang, sumber energi isekai RPG.", description_en: "Medium mana crystal, main energy source in isekai RPG." },
  { id: "spirit_pill",       name: "Spirit Pill (High Grade)",   factor: 2,       category: "fantasy", description: "2 g. Pil kultivasi tinggi, ringan tapi sangat berharga.", description_en: "High-grade cultivation pill, light but very valuable." },
  { id: "nascent_soul_frag", name: "Nascent Soul Fragment",      factor: 100,     category: "fantasy", description: "100 g. Fragmen jiwa bayi (Nascent Soul), langka di xianxia.", description_en: "Nascent Soul fragment, rare in xianxia." },
  { id: "dragon_vein_stone", name: "Dragon Vein Stone",          factor: 180,     category: "fantasy", description: "180 g. Batu urat naga, sumber qi alam super murni.", description_en: "Dragon vein stone, ultra-pure natural qi source." },

  { id: "divine_artifact",   name: "Divine Artifact",            factor: 2500,    category: "fantasy", description: "2500 g. Senjata/benda suci tingkat dewa.", description_en: "Divine-level sacred weapon or artifact." },
  { id: "spatial_ring",      name: "Spatial Ring",               factor: 15,      category: "fantasy", description: "15 g. Cincin dimensi, ringan tapi kapasitas besar.", description_en: "Dimensional ring, light weight but huge capacity." },
  { id: "immortal_pill",     name: "Immortal Pill",              factor: 5,       category: "fantasy", description: "5 g. Pil keabadian, super ringan efek luar biasa.", description_en: "Immortality pill, super light with extraordinary effect." },
  { id: "phoenix_blood",     name: "Phoenix Blood Essence",      factor: 1200,    category: "fantasy", description: "1200 g. Esensi darah phoenix untuk rebirth/power up.", description_en: "Phoenix blood essence for rebirth or power up." },

  { id: "monster_core",      name: "Monster Core",               factor: 25,      category: "fantasy", description: "25 g. Inti monster biasa, bahan dasar crafting.", description_en: "Common monster core, basic crafting ingredient." },
  { id: "heavenly_herb",     name: "Heavenly Spirit Herb",       factor: 10,      category: "fantasy", description: "10 g. Tanaman roh surgawi, bahan utama pill.", description_en: "Heavenly spirit herb, main pill ingredient." },
  { id: "dragon_blood",      name: "Dragon Blood Vial",          factor: 200,     category: "fantasy", description: "200 g. Darah naga murni dalam botol.", description_en: "Pure dragon blood in a vial." },
  { id: "yin_yang_fruit",    name: "Yin-Yang Fruit",             factor: 80,      category: "fantasy", description: "80 g. Buah keseimbangan yin-yang, langka.", description_en: "Yin-yang balance fruit, very rare." },
  { id: "soul_essence",      name: "Soul Essence Crystal",       factor: 40,      category: "fantasy", description: "40 g. Kristal esensi jiwa untuk soul weapon.", description_en: "Soul essence crystal for soul weapons." },

  { id: "world_tree_leaf",   name: "World Tree Leaf",            factor: 50,      category: "fantasy", description: "50 g. Daun Pohon Dunia, pembawa kebijaksanaan.", description_en: "World Tree leaf, bearer of wisdom and longevity." },
  { id: "god_core",          name: "God Core",                   factor: 5000,    category: "fantasy", description: "5000 g. Inti kekuatan dewa, ultimate power di xianxia.", description_en: "God's power core, ultimate power in xianxia." },
  { id: "primordial_chaos",  name: "Primordial Chaos Fragment",  factor: 10000,   category: "fantasy", description: "10 kg. Pecahan Kekacauan Primordial, bahan penciptaan dunia.", description_en: "Primordial Chaos fragment, material of world creation." },

  { id: "spirit_coin",       name: "Spirit Coin",                factor: 5,       category: "fantasy", description: "5 g. Mata uang cultivation dunia dari spirit stone.", description_en: "Cultivation world currency made from spirit stone." },
  { id: "contribution_pt",   name: "Contribution Point Token",   factor: 1,       category: "fantasy", description: "1 g. Token kontribusi sekte untuk tukar resource langka.", description_en: "Sect contribution token for exchanging rare resources." },
];
