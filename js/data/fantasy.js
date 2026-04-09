// ─── Fantasy Weight Units — Tiered Arcane System ───
// factor = grams per 1 unit
// Base ratio: x12 per tier (duodecimal — 12 is the Arcane Number)
//
// ┌─────────────────────────────────────────────┐
// │  ARCANE SYSTEM OF MASS                      │
// │                                             │
// │  Tier 1 (Dust):    ~1g      base particle   │
// │  Tier 2 (Shard):   ~12g     small fragment  │
// │  Tier 3 (Fragment):~144g    medium piece    │
// │  Tier 4 (Core):    ~1728g   large artifact  │
// │                                             │
// │  1 Core = 12 Fragment = 144 Shard = 1728    │
// │  Dust                                       │
// └─────────────────────────────────────────────┘

export const fantasyUnits = [

  // ═══════════════════════════════════════════
  //  TIER 1 — DUST & PARTICLES (~1g range)
  //  Fine magical materials, raw essence
  // ═══════════════════════════════════════════

  { id: "ether_dust",        name: "Ether Dust",            factor: 1,       category: "fantasy", description: "Finely ground ether particles — base unit of arcane mass" },
  { id: "fairy_dust",        name: "Fairy Dust",            factor: 0.5,     category: "fantasy", description: "Weightless pixie powder, half an ether dust" },
  { id: "void_dust",         name: "Void Dust",             factor: 0.25,    category: "fantasy", description: "Near-weightless dark matter remnants" },
  { id: "stardust",          name: "Stardust",              factor: 2,       category: "fantasy", description: "Fallen star particles gathered at dawn" },
  { id: "ember_spark",       name: "Ember Spark",           factor: 1.5,     category: "fantasy", description: "Tiny perpetually burning coal fragment" },
  { id: "frost_mote",        name: "Frost Mote",            factor: 1.2,     category: "fantasy", description: "Microscopic ice crystal that never melts" },
  { id: "shadow_dust",       name: "Shadow Dust",           factor: 0.8,     category: "fantasy", description: "Crushed shadow weave, absorbs light" },
  { id: "luminous_dust",     name: "Luminous Dust",         factor: 1.1,     category: "fantasy", description: "Glowing phosphorescent powder" },
  { id: "blood_sand",        name: "Blood Sand",            factor: 2.5,     category: "fantasy", description: "Red sand from enchanted battlefields" },
  { id: "dream_powder",      name: "Dream Powder",          factor: 0.3,     category: "fantasy", description: "Harvested from sleeping minds, almost weightless" },

  // ═══════════════════════════════════════════
  //  TIER 2 — SHARDS & FRAGMENTS (~12g range)
  //  Small magical components, jewelry-grade
  // ═══════════════════════════════════════════

  { id: "mana_shard",        name: "Mana Shard",            factor: 12,      category: "fantasy", description: "Small crystallized mana fragment — 12 ether dust" },
  { id: "ether_shard",       name: "Ether Shard",           factor: 10,      category: "fantasy", description: "Fractured piece of pure ether" },
  { id: "rune_fragment",     name: "Rune Fragment",         factor: 15,      category: "fantasy", description: "Broken runic inscription piece" },
  { id: "dragon_scale",      name: "Dragon Scale",          factor: 8,       category: "fantasy", description: "Shed scale from an adult dragon" },
  { id: "wyvern_scale",      name: "Wyvern Scale",          factor: 6,       category: "fantasy", description: "Lighter scale from a lesser wyvern" },
  { id: "basilisk_scale",    name: "Basilisk Scale",        factor: 14,      category: "fantasy", description: "Petrifying scale, handle with gloves" },
  { id: "phoenix_feather",   name: "Phoenix Feather",       factor: 2,       category: "fantasy", description: "Single radiant plume from a reborn phoenix" },
  { id: "chimera_hair",      name: "Chimera Mane Hair",     factor: 0.5,     category: "fantasy", description: "Tri-colored strand from a chimera's mane" },
  { id: "enchant_gem",       name: "Enchanted Gem",         factor: 15,      category: "fantasy", description: "Gemstone imbued with minor magic" },
  { id: "luminous_pearl",    name: "Luminous Pearl",        factor: 12,      category: "fantasy", description: "Pearl that glows in moonlight" },
  { id: "soul_shard",        name: "Soul Shard",            factor: 5,       category: "fantasy", description: "Fragment containing a sliver of soul energy" },
  { id: "amulet",            name: "Amulet",                factor: 25,      category: "fantasy", description: "Protective charm pendant" },
  { id: "ring",              name: "Binding Ring",          factor: 8,       category: "fantasy", description: "Enchanted ring with embedded gem" },
  { id: "wand",              name: "Wizard's Wand",         factor: 50,      category: "fantasy", description: "Carved magical focus rod" },
  { id: "flame_ember",       name: "Flame Ember",           factor: 5,       category: "fantasy", description: "Ever-burning magical coal" },
  { id: "ice_crystal",       name: "Ice Crystal",           factor: 20,      category: "fantasy", description: "Permanently frozen magical crystal" },
  { id: "thunderstone_shard", name: "Thunderstone Shard",   factor: 18,      category: "fantasy", description: "Electrically charged mineral fragment" },
  { id: "moonstone_shard",   name: "Moonstone Shard",       factor: 12,      category: "fantasy", description: "Stone blessed by full moon" },
  { id: "sunstone_shard",    name: "Sunstone Shard",        factor: 14,      category: "fantasy", description: "Radiant solar crystal fragment" },
  { id: "dream_silk",        name: "Dream Silk Swatch",     factor: 0.4,     category: "fantasy", description: "Near-weightless enchanted fabric piece" },
  { id: "shadow_weave",      name: "Shadow Weave",          factor: 1.5,     category: "fantasy", description: "Dark magic-infused cloth strip" },
  { id: "living_metal_ingot", name: "Living Metal Ingot",   factor: 10,      category: "fantasy", description: "Small bar of semi-sentient metal" },

  // ═══════════════════════════════════════════
  //  TIER 3 — STONES & CORES (~144g range)
  //  Powerful magical components, dungeon loot
  // ═══════════════════════════════════════════

  { id: "mana_stone",        name: "Mana Stone",            factor: 144,     category: "fantasy", description: "Polished mana crystal — 12 shards condensed" },
  { id: "arcane_fragment",   name: "Arcane Fragment",       factor: 120,     category: "fantasy", description: "Broken piece of an ancient arcane device" },
  { id: "rune_stone",        name: "Rune Stone",            factor: 150,     category: "fantasy", description: "Carved runic tablet with active enchantment" },
  { id: "unicorn_horn",      name: "Unicorn Horn Shard",    factor: 160,     category: "fantasy", description: "Fragment of a pure unicorn horn" },
  { id: "griffin_claw",      name: "Griffin Claw",          factor: 45,      category: "fantasy", description: "Sharp talon from a griffin" },
  { id: "hydra_fang",        name: "Hydra Fang",            factor: 90,      category: "fantasy", description: "Venomous fang from a hydra head" },
  { id: "orb_of_binding",    name: "Orb of Binding",        factor: 200,     category: "fantasy", description: "Sphere that contains bound energy" },
  { id: "potion_vial",       name: "Potion Vial (full)",    factor: 150,     category: "fantasy", description: "Standard healing potion in glass flask" },
  { id: "spell_scroll",      name: "Spell Scroll",          factor: 30,      category: "fantasy", description: "Parchment with inscribed spell formula" },
  { id: "soul_gem",          name: "Soul Gem",              factor: 120,     category: "fantasy", description: "Gem that captures and stores souls" },
  { id: "obsidian_core",     name: "Obsidian Core",         factor: 180,     category: "fantasy", description: "Dense volcanic magic core" },
  { id: "ether_core",        name: "Ether Core",            factor: 130,     category: "fantasy", description: "Solidified ether sphere" },
  { id: "troll_blood_vial",  name: "Troll Blood Vial",      factor: 140,     category: "fantasy", description: "Thick regenerative troll ichor" },
  { id: "kraken_ink_pot",    name: "Kraken Ink Pot",        factor: 200,     category: "fantasy", description: "Potent giant squid ink in sealed pot" },
  { id: "tome",              name: "Ancient Tome",          factor: 1500,    category: "fantasy", description: "Leather-bound spellbook with clasp" },
  { id: "crystal_ball",      name: "Crystal Ball",          factor: 2000,    category: "fantasy", description: "Scrying crystal sphere" },

  // ── Tier 3 Weapons & Armor ──
  { id: "dagger",            name: "Arcane Dagger",         factor: 350,     category: "fantasy", description: "Enchanted short blade" },
  { id: "sword",             name: "Standard Sword",        factor: 1200,    category: "fantasy", description: "Balanced longsword, adventurer's staple" },
  { id: "arrows_quiver",     name: "Arrow Quiver (20)",     factor: 1200,    category: "fantasy", description: "Bundle of twenty arrows" },
  { id: "helmet_iron",       name: "Iron Helmet",           factor: 2500,    category: "fantasy", description: "Standard open-face iron helmet" },

  // ═══════════════════════════════════════════
  //  TIER 4 — CORES & RELICS (~1728g / kg range)
  //  Major artifacts, boss drops, legendary items
  // ═══════════════════════════════════════════

  { id: "arcane_core",       name: "Arcane Core",           factor: 1728,    category: "fantasy", description: "Concentrated mana sphere — 12 stones fused, base of Tier 4" },
  { id: "mithril_ingot",     name: "Mithril Ingot",         factor: 2100,    category: "fantasy", description: "Pure mithril bar, lighter than steel" },
  { id: "greatsword",        name: "Greatsword",            factor: 3500,    category: "fantasy", description: "Massive two-handed blade" },
  { id: "war_hammer",        name: "War Hammer",            factor: 4500,    category: "fantasy", description: "Crushing war hammer" },
  { id: "shield_wooden",     name: "Wooden Shield",         factor: 4000,    category: "fantasy", description: "Basic round wooden shield" },
  { id: "shield_steel",      name: "Steel Shield",          factor: 8000,    category: "fantasy", description: "Heavy knight's tower shield" },
  { id: "chainmail",         name: "Chainmail Hauberk",     factor: 12000,   category: "fantasy", description: "Full chainmail armor" },
  { id: "plate_armor",       name: "Plate Armor Set",       factor: 22000,   category: "fantasy", description: "Full plate armor, maximum protection" },
  { id: "staff",             name: "Staff of Channeling",   factor: 3000,    category: "fantasy", description: "Tall arcane focus staff" },
  { id: "dragon_bone",       name: "Dragon Bone",           factor: 1400,    category: "fantasy", description: "Dense dragon skeleton fragment" },
  { id: "behemoth_horn",     name: "Behemoth Horn",         factor: 5000,    category: "fantasy", description: "Massive beast horn" },
  { id: "aurora_shard",      name: "Aurora Shard",          factor: 1800,    category: "fantasy", description: "Crystallized northern lights" },
  { id: "void_core",         name: "Void Core",             factor: 500,     category: "fantasy", description: "Dense sphere of compressed darkness" },
  { id: "flame_heart",       name: "Flame Heart",           factor: 800,     category: "fantasy", description: "Solidified heart of a fire elemental" },
  { id: "frost_heart",       name: "Frost Heart",           factor: 750,     category: "fantasy", description: "Frozen core of an ice elemental" },
  { id: "earth_heart",       name: "Earth Heart",           factor: 2200,    category: "fantasy", description: "Dense mineral heart of a golem" },
  { id: "storm_heart",       name: "Storm Heart",           factor: 600,     category: "fantasy", description: "Volatile core crackling with lightning" },
  { id: "healing_stone",     name: "Greater Healing Stone", factor: 1500,    category: "fantasy", description: "Stone that radiates restorative energy" },
  { id: "teleport_stone",    name: "Teleportation Stone",   factor: 400,     category: "fantasy", description: "Attuned stone for short-range teleport" },
  { id: "relic_fragment",    name: "Relic Fragment",        factor: 1728,    category: "fantasy", description: "Broken piece of an ancient relic — equals 1 core" },

  // ═══════════════════════════════════════════
  //  TIER 5 — LEGENDARY (10 kg+ range)
  //  Mythic artifacts, world-shaping items
  // ═══════════════════════════════════════════

  { id: "hero_mass",         name: "Hero Mass",             factor: 70000,   category: "fantasy", description: "Weight of a legendary hero (~70kg), used as measurement" },
  { id: "titan_fragment",    name: "Titan Fragment",        factor: 50000,   category: "fantasy", description: "Chunk of a fallen titan's body (~50kg)" },
  { id: "celestial_mass",    name: "Celestial Mass",        factor: 17280,   category: "fantasy", description: "10 cores fused — weight of a minor celestial being (~17.28kg)" },
  { id: "world_shard",       name: "World Shard",           factor: 172800,  category: "fantasy", description: "Fragment of a shattered world — 100 cores (~172.8kg)" },
  { id: "star_core",         name: "Star Core",             factor: 1728000, category: "fantasy", description: "Collapsed stellar mass — 1000 cores, legendary beyond measure (~1.7t)" },

  // ═══════════════════════════════════════════
  //  CURRENCY (weight-based, for immersion)
  // ═══════════════════════════════════════════

  { id: "copper_coin",       name: "Copper Coin (CP)",      factor: 3,       category: "fantasy", description: "Standard copper piece, common currency" },
  { id: "silver_coin",       name: "Silver Coin (SP)",      factor: 6,       category: "fantasy", description: "Silver piece, 2 copper — merchant's staple" },
  { id: "gold_coin",         name: "Gold Coin (GP)",        factor: 12,      category: "fantasy", description: "Gold piece, 2 silver — adventurer's pay" },
  { id: "platinum_coin",     name: "Platinum Coin (PP)",    factor: 12,      category: "fantasy", description: "Rare platinum piece, 10 gold — nobility" },
  { id: "mithril_coin",      name: "Mithril Crown",         factor: 4,       category: "fantasy", description: "Ultra-rare mithril currency, 50 gold" },

  // ═══════════════════════════════════════════
  //  INGREDIENTS & REAGENTS
  // ═══════════════════════════════════════════

  { id: "alchemist_dust",    name: "Alchemist's Dust",      factor: 1,       category: "fantasy", description: "Finely ground magical reagent — 1 ether dust" },
  { id: "herb_bundle",       name: "Herb Bundle",           factor: 50,      category: "fantasy", description: "Tied bundle of medicinal herbs" },
  { id: "venom_sac",         name: "Venom Sac",             factor: 30,      category: "fantasy", description: "Harvested poison gland from a beast" },
  { id: "mana_petal",        name: "Mana Petal",            factor: 0.8,     category: "fantasy", description: "Petal from a mana-infused flower" },
  { id: "ghost_moss",        name: "Ghost Moss",            factor: 3,       category: "fantasy", description: "Luminescent moss from haunted caves" },
  { id: "wyrm_ash",          name: "Wyrm Ash",              factor: 2,       category: "fantasy", description: "Ash residue from a dragon's breath" },
  { id: "crystal_shard",     name: "Elemental Crystal",     factor: 25,      category: "fantasy", description: "Unaligned elemental crystal piece" },

  // ═══════════════════════════════════════════
  //  EASTERN FANTASY / ISEKAI / CULTIVATION
  //  Inspired by Anime, Manga, Manhwa, Manhua
  //  (Solo Leveling, Overlord, Nano Machine, Battle Through the Heavens, etc.)
  //  Heavy on Mana/Spirit/Qi crystals, Pills, Beast Cores, Divine Artifacts
  // ═══════════════════════════════════════════

  // ── Shards & Fragments (Tier 2 area) ──
  { id: "spirit_stone",      name: "Spirit Stone (Low Grade)",   factor: 10,      category: "fantasy", description: "Batu roh tingkat rendah yang mengandung qi/mana, populer di cultivation manhwa" },
  { id: "beast_core",        name: "Beast Core",                 factor: 8,       category: "fantasy", description: "Inti monster binatang buas, digunakan untuk cultivasi atau crafting pill" },
  { id: "demon_core",        name: "Demon Core",                 factor: 15,      category: "fantasy", description: "Inti iblis berenergi tinggi, sering muncul di dark fantasy manhwa" },
  { id: "qi_bead",           name: "Qi Bead",                    factor: 5,       category: "fantasy", description: "Manik qi murni, digunakan untuk meditasi dan breakthrough" },
  { id: "heavenly_crystal",  name: "Heavenly Crystal Shard",     factor: 12,      category: "fantasy", description: "Kristal surgawi, bahan utama artifact di cultivation story" },

  // ── Stones & Cores (Tier 3 area) ──
  { id: "mana_crystal",      name: "Mana Crystal (Medium)",      factor: 160,     category: "fantasy", description: "Kristal mana ukuran sedang, sumber energi utama di isekai RPG" },
  { id: "spirit_pill",       name: "Spirit Pill (High Grade)",   factor: 2,       category: "fantasy", description: "Pil kultivasi berenergi tinggi, berat ringan tapi sangat berharga" },
  { id: "nascent_soul_frag", name: "Nascent Soul Fragment",      factor: 100,     category: "fantasy", description: "Fragmen jiwa bayi, bahan langka di xianxia-style manhwa" },
  { id: "dragon_vein_stone", name: "Dragon Vein Stone",          factor: 180,     category: "fantasy", description: "Batu urat naga, sumber qi alam yang sangat murni" },

  // ── Major Artifacts (Tier 4 area) ──
  { id: "divine_artifact",   name: "Divine Artifact",            factor: 2500,    category: "fantasy", description: "Senjata atau benda suci tingkat dewa, sering muncul di manhwa OP MC" },
  { id: "spatial_ring",      name: "Spatial Ring",               factor: 15,      category: "fantasy", description: "Cincin ruang dimensi, berat ringan tapi kapasitas besar (ikonik di cultivation story)" },
  { id: "immortal_pill",     name: "Immortal Pill",              factor: 5,       category: "fantasy", description: "Pil keabadian, sangat ringan tapi efek luar biasa" },
  { id: "phoenix_blood",     name: "Phoenix Blood Essence",      factor: 1200,    category: "fantasy", description: "Esensi darah phoenix, bahan untuk rebirth atau power up" },

  // ── Ingredients & Reagents (Eastern Style) ──
  { id: "monster_core",      name: "Monster Core",               factor: 25,      category: "fantasy", description: "Inti monster biasa, bahan dasar crafting dan alchemy" },
  { id: "heavenly_herb",     name: "Heavenly Spirit Herb",       factor: 10,      category: "fantasy", description: "Tanaman roh surgawi, bahan utama pill kultivasi" },
  { id: "dragon_blood",      name: "Dragon Blood Vial",          factor: 200,     category: "fantasy", description: "Darah naga murni dalam botol" },
  { id: "yin_yang_fruit",    name: "Yin-Yang Fruit",             factor: 80,      category: "fantasy", description: "Buah keseimbangan yin-yang, langka di dunia cultivation" },
  { id: "soul_essence",      name: "Soul Essence Crystal",       factor: 40,      category: "fantasy", description: "Kristal esensi jiwa, digunakan untuk soul weapon atau reincarnation" },

  // ── Tier 5+ — Legendary Eastern ──
  { id: "world_tree_leaf",   name: "World Tree Leaf",            factor: 50,      category: "fantasy", description: "Daun Pohon Dunia, membawa kebijaksanaan dan usia panjang" },
  { id: "god_core",          name: "God Core",                   factor: 5000,    category: "fantasy", description: "Inti kekuatan dewa, sumber ultimate power di xianxia" },
  { id: "primordial_chaos",  name: "Primordial Chaos Fragment",  factor: 10000,   category: "fantasy", description: "Pecahan Kekacauan Primordial, bahan penciptaan dunia" },

  // ── Currency (Eastern Style) ──
  { id: "spirit_coin",       name: "Spirit Coin",                factor: 5,       category: "fantasy", description: "Mata uang cultivation dunia, terbuat dari spirit stone" },
  { id: "contribution_pt",   name: "Contribution Point Token",   factor: 1,       category: "fantasy", description: "Token kontribusi sekte, ditukar dengan resource langka" },
];
