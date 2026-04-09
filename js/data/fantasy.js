// ─── Fantasy & Fictional Weight Units ───
// factor = grams per 1 unit

export const fantasyUnits = [
  // ── Classic Fantasy / RPG ──
  { id: "mana_stone",      name: "Mana Stone",           factor: 150,     category: "fantasy", description: "Crystal infused with raw mana energy (≈150 g)" },
  { id: "dragon_scale",    name: "Dragon Scale",         factor: 8,       category: "fantasy", description: "Shed scale from an ancient dragon (≈8 g)" },
  { id: "hero_weight",     name: "Hero Weight Unit",     factor: 70000,   category: "fantasy", description: "Weight of a legendary hero (70 kg)" },
  { id: "mithril_ingot",   name: "Mithril Ingot",        factor: 2100,    category: "fantasy", description: "Pure mithril bar, lighter than steel (≈2.1 kg)" },
  { id: "gold_coin",       name: "Gold Coin (GP)",       factor: 11.34,   category: "fantasy", description: "Standard adventurer gold piece (≈11.34 g)" },
  { id: "silver_coin",     name: "Silver Coin (SP)",     factor: 5.67,    category: "fantasy", description: "Standard silver piece (≈5.67 g)" },
  { id: "copper_coin",     name: "Copper Coin (CP)",     factor: 2.84,    category: "fantasy", description: "Humble copper piece (≈2.84 g)" },
  { id: "platinum_coin",   name: "Platinum Coin (PP)",   factor: 11.34,   category: "fantasy", description: "Rare platinum piece (≈11.34 g)" },
  { id: "mithril_coin",    name: "Mithril Coin",         factor: 3.2,     category: "fantasy", description: "Extremely rare mithril currency (≈3.2 g)" },

  // ── Alchemy & Ingredients ──
  { id: "alchemist_dust",  name: "Alchemist's Dust",     factor: 0.5,     category: "fantasy", description: "Finely ground magical reagent (≈0.5 g)" },
  { id: "phoenix_feather", name: "Phoenix Feather",      factor: 2,       category: "fantasy", description: "A single radiant phoenix plume (≈2 g)" },
  { id: "dragon_bone",     name: "Dragon Bone Fragment", factor: 1200,    category: "fantasy", description: "Chunk of dragon skeleton (≈1.2 kg)" },
  { id: "fairy_dust",      name: "Fairy Dust",           factor: 0.05,    category: "fantasy", description: "Enchanted pixie powder (≈0.05 g)" },
  { id: "wyvern_scale",    name: "Wyvern Scale",         factor: 5,       category: "fantasy", description: "Scale from a lesser wyvern (≈5 g)" },
  { id: "unicorn_horn",    name: "Unicorn Horn Shard",   factor: 150,     category: "fantasy", description: "Fragment of a pure unicorn horn (≈150 g)" },
  { id: "griffin_claw",    name: "Griffin Claw",         factor: 45,      category: "fantasy", description: "Sharp talon from a griffin (≈45 g)" },
  { id: "troll_blood",     name: "Vial of Troll Blood",  factor: 120,     category: "fantasy", description: "Thick regenerative troll ichor (≈120 g)" },
  { id: "star_fragment",   name: "Star Fragment",        factor: 25,      category: "fantasy", description: "Crystallized stardust chunk (≈25 g)" },
  { id: "void_essence",    name: "Void Essence",         factor: 0.1,     category: "fantasy", description: "Nearly weightless dark matter (≈0.1 g)" },

  // ── Weapons & Armor ──
  { id: "sword_standard",  name: "Standard Sword",       factor: 1200,    category: "fantasy", description: "Weight of a balanced longsword (≈1.2 kg)" },
  { id: "greatsword",      name: "Greatsword",           factor: 3500,    category: "fantasy", description: "Massive two-handed blade (≈3.5 kg)" },
  { id: "shield_wooden",   name: "Wooden Shield",        factor: 4000,    category: "fantasy", description: "Basic round wooden shield (≈4 kg)" },
  { id: "shield_steel",    name: "Steel Shield",         factor: 8000,    category: "fantasy", description: "Heavy knight's tower shield (≈8 kg)" },
  { id: "helmet_iron",     name: "Iron Helmet",          factor: 2500,    category: "fantasy", description: "Standard iron helmet (≈2.5 kg)" },
  { id: "armor_chainmail", name: "Chainmail",            factor: 12000,   category: "fantasy", description: "Full chainmail hauberk (≈12 kg)" },
  { id: "armor_plate",     name: "Plate Armor",          factor: 22000,   category: "fantasy", description: "Full plate armor set (≈22 kg)" },
  { id: "arrow_bundle",    name: "Arrow Bundle (20)",    factor: 1200,    category: "fantasy", description: "Bundle of twenty arrows (≈1.2 kg)" },
  { id: "war_hammer",      name: "War Hammer",           factor: 4500,    category: "fantasy", description: "Crushing war hammer (≈4.5 kg)" },

  // ── Magical Items ──
  { id: "spell_scroll",    name: "Spell Scroll",         factor: 30,      category: "fantasy", description: "Parchment with inscribed spell (≈30 g)" },
  { id: "enchanted_gem",   name: "Enchanted Gem",        factor: 15,      category: "fantasy", description: "Gemstone imbued with magic (≈15 g)" },
  { id: "potion_vial",     name: "Potion Vial",          factor: 120,     category: "fantasy", description: "Standard healing potion flask (≈120 g)" },
  { id: "orb_of_power",    name: "Orb of Power",         factor: 500,     category: "fantasy", description: "Concentrated magical orb (≈500 g)" },
  { id: "crystal_ball",    name: "Crystal Ball",         factor: 2000,    category: "fantasy", description: "Scrying crystal sphere (≈2 kg)" },
  { id: "rune_stone",      name: "Rune Stone",           factor: 80,      category: "fantasy", description: "Carved runic stone tablet (≈80 g)" },
  { id: "soul_gem",        name: "Soul Gem",             factor: 45,      category: "fantasy", description: "Gem that captures souls (≈45 g)" },
  { id: "luminous_pearl",  name: "Luminous Pearl",       factor: 12,      category: "fantasy", description: "Magically glowing pearl (≈12 g)" },
  { id: "tome",            name: "Ancient Tome",         factor: 2500,    category: "fantasy", description: "Leather-bound spellbook (≈2.5 kg)" },
  { id: "amulet",          name: "Enchanted Amulet",     factor: 25,      category: "fantasy", description: "Protective charm necklace (≈25 g)" },
  { id: "wand",            name: "Wizard's Wand",        factor: 50,      category: "fantasy", description: "Carved magical focus wand (≈50 g)" },
  { id: "staff",           name: "Staff of Power",       factor: 3000,    category: "fantasy", description: "Tall arcane staff (≈3 kg)" },
  { id: "ring",            name: "Ring of Binding",      factor: 8,       category: "fantasy", description: "Magical ring with gem (≈8 g)" },

  // ── Creatures & Materials ──
  { id: "basilisk_scale",  name: "Basilisk Scale",       factor: 12,      category: "fantasy", description: "Petrifying basilisk's scale (≈12 g)" },
  { id: "hydra_fang",      name: "Hydra Fang",           factor: 90,      category: "fantasy", description: "Venomous fang from a hydra (≈90 g)" },
  { id: "chimera_hair",    name: "Chimera Mane Hair",    factor: 0.3,     category: "fantasy", description: "Tri-colored mane strand (≈0.3 g)" },
  { id: "kraken_ink",      name: "Kraken Ink",           factor: 200,     category: "fantasy", description: "Potent giant squid ink (≈200 g)" },
  { id: "behemoth_horn",   name: "Behemoth Horn",        factor: 5000,    category: "fantasy", description: "Massive beast horn (≈5 kg)" },
  { id: "ether_shard",     name: "Ether Shard",          factor: 1.5,     category: "fantasy", description: "Fragment of pure ether (≈1.5 g)" },
  { id: "obsidian_core",   name: "Obsidian Core",        factor: 800,     category: "fantasy", description: "Dense volcanic magic core (≈800 g)" },
  { id: "moonstone",       name: "Moonstone",            factor: 35,      category: "fantasy", description: "Stone blessed by moonlight (≈35 g)" },
  { id: "sunstone",        name: "Sunstone",             factor: 40,      category: "fantasy", description: "Radiant solar crystal (≈40 g)" },
  { id: "thunderstone",    name: "Thunderstone",         factor: 60,      category: "fantasy", description: "Electrically charged mineral (≈60 g)" },
  { id: "ice_crystal",     name: "Ice Crystal",          factor: 20,      category: "fantasy", description: "Permanently frozen crystal (≈20 g)" },
  { id: "flame_ember",     name: "Flame Ember",          factor: 5,       category: "fantasy", description: "Ever-burning magical coal (≈5 g)" },
  { id: "living_metal",    name: "Living Metal",         factor: 700,     category: "fantasy", description: "Semi-sentient metallic substance (≈700 g)" },
  { id: "dream_silk",      name: "Dream Silk",           factor: 0.2,     category: "fantasy", description: "Near-weightless enchanted fabric (≈0.2 g)" },
  { id: "shadow_weave",    name: "Shadow Weave",         factor: 0.8,     category: "fantasy", description: "Dark magic-infused cloth (≈0.8 g)" },
];
