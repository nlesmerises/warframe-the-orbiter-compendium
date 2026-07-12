/**
 * Warframe Fishing & Bio-Lab Codex
 * Core application data models and dynamic rendering logic.
 */

// Comprehensive data model for all 39 fish across Earth, Venus, and Deimos.
const FISH_DATA = [
  // --- EARTH (Plains of Eidolon) ---
  {
    id: "mawfish",
    name: "Mawfish",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Lake",
    cycle: ["Day"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Mawfish Bones",
    description: "An aggressive, predatory fish found near the lake's surface during the day."
  },
  {
    id: "charc_eel",
    name: "Charc Eel",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Lake",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Charc Electroplax",
    description: "A highly resilient eel that generates electricity to stun its prey in the lake."
  },
  {
    id: "norg",
    name: "Norg",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Lake",
    cycle: ["Night"],
    spear: ["Peram"],
    bait: "Norg Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Norg Brain",
    description: "A stout, nocturnal fish highly prized for its large, chemically active brain. Requires bait at lake hotspots."
  },
  {
    id: "khut_khut",
    name: "Khut-Khut",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Pond",
    cycle: ["Day"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Khut-Khut Venom Sac",
    description: "A bloated, toxic pond fish that puffs up when threatened. Active only during the day."
  },
  {
    id: "yogwun",
    name: "Yogwun",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Pond",
    cycle: ["Day"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Yogwun Stomach",
    description: "A large, slow-moving filter feeder that dwells in ponds during daylight hours."
  },
  {
    id: "mortus_lungfish",
    name: "Mortus Lungfish",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Pond",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Uncommon",
    uniqueDrop: "Mortus Horn",
    description: "A slow-moving, amphibious fish that crawls along pond beds by day or night."
  },
  {
    id: "cuthol",
    name: "Cuthol",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Pond",
    cycle: ["Night"],
    spear: ["Lanzo"],
    bait: "Cuthol Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Cuthol Tendrils",
    description: "A multi-tentacled predator lurking in deep pond hotspots at night. Requires specialized bait."
  },
  {
    id: "goopolla",
    name: "Goopolla",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Goopolla Spleen",
    description: "A common, fast-swimming coastal fish found at all times along the shore."
  },
  {
    id: "tralok",
    name: "Tralok",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Day"],
    spear: ["Tulok"],
    bait: "None",
    hotspot: false,
    rarity: "Uncommon",
    uniqueDrop: "Tralok Eyes",
    description: "An armored marine hunter with powerful eyesight that patrols the ocean coasts by day."
  },
  {
    id: "sharrac",
    name: "Sharrac",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "Twilight Bait",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Sharrac Teeth",
    description: "A dangerous, carnivorous coastal fish with razor-sharp teeth. Attracted to Twilight Bait."
  },
  {
    id: "karkina",
    name: "Karkina",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "Twilight Bait",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Karkina Antenna",
    description: "A crab-like marine scavenger that hides in ocean deeps. Attracted to Twilight Bait in hotspots."
  },
  {
    id: "murkray",
    name: "Murkray",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Day", "Night"],
    spear: ["Lanzo"],
    bait: "Murkray Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Murkray Liver",
    description: "A stealthy, bioluminescent ray that glides through ocean hotspots. Highly sought after for its liver."
  },
  {
    id: "glappid",
    name: "Glappid",
    planet: "Earth",
    location: "Plains of Eidolon",
    biome: "Ocean",
    cycle: ["Night"],
    spear: ["Peram"],
    bait: "Glappid Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Seram Beetle Shell",
    description: "The rarest and most prized ocean fish on Earth, active only at night in hotspots. Requires Glappid Bait."
  },

  // --- VENUS (Orb Vallis) ---
  {
    id: "tink",
    name: "Tink",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Pond",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Dissipator Coil",
    description: "A common mechanical unit designed to monitor pond filtration systems."
  },
  {
    id: "recaster",
    name: "Recaster",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Pond",
    cycle: ["Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Uncommon",
    uniqueDrop: "Neural Relay",
    description: "A stream-lined coolant monitor active in ponds during Venusian freeze cycles."
  },
  {
    id: "sapcaddy",
    name: "Sapcaddy",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Pond",
    cycle: ["Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Venedo Case",
    description: "A bulkier Servofish that aggregates minerals in ponds. Easiest to find in cold weather."
  },
  {
    id: "tromyzon",
    name: "Tromyzon",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Pond",
    cycle: ["Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "Tromyzon Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Entroplasma",
    description: "An Orokin-era custodial unit that cleans pond coolant beds. Active only in freeze cycles using bait."
  },
  {
    id: "brickie",
    name: "Brickie",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "River",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Muon Battery",
    description: "A boxy maintenance unit found repairing coolant piping in rivers."
  },
  {
    id: "echowinder",
    name: "Echowinder",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "River",
    cycle: ["Warm"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Anoscopic Sensor",
    description: "A sleek, sensor-rich drone active along rivers during Venusian warm cycles."
  },
  {
    id: "kriller",
    name: "Kriller",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "River",
    cycle: ["Warm"],
    spear: ["Shockprod", "Stunna"],
    bait: "Kriller Bait",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Thermal Laser",
    description: "An abrasive cleaning unit that uses lasers to clear debris. Attracted to bait in river hotspots."
  },
  {
    id: "longwinder",
    name: "Longwinder",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Lake",
    cycle: ["Warm"],
    spear: ["Shockprod", "Stunna"],
    bait: "Longwinder Bait",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Lathe Coagulant",
    description: "A serpent-like custodial unit found in deep lake hotspots during warm weather."
  },
  {
    id: "mirewinder",
    name: "Mirewinder",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Lake",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "Mirewinder Bait",
    hotspot: true,
    rarity: "Common",
    uniqueDrop: "Parallel Biode",
    description: "A common lake explorer that monitors chemical imbalances. High spawn rates with bait in hotspots."
  },
  {
    id: "eye_eye",
    name: "Eye-Eye",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Cave",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Uncommon",
    uniqueDrop: "Rotoblade",
    description: "A mechanical scavenger with multi-optic sensors that lives deep in cave pools."
  },
  {
    id: "scrubber",
    name: "Scrubber",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Cave",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Exa Brain",
    description: "A basic custodial drone that filters organic matter out of cave waters."
  },
  {
    id: "charamote",
    name: "Charamote",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Cave",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "Charamote Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Sagan Module",
    description: "A delicate, high-value custodial drone that regulates cave thermal cycles. Requires bait at hotspots."
  },
  {
    id: "synathid",
    name: "Synathid",
    planet: "Venus",
    location: "Orb Vallis",
    biome: "Cave",
    cycle: ["Warm", "Cold"],
    spear: ["Shockprod", "Stunna"],
    bait: "Synathid Bait",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Ecosynth Analyzer",
    description: "The rarest Servofish on Venus, designed for advanced ecological mapping. Attracted to bait in cave hotspots."
  },

  // --- DEIMOS (Cambion Drift) ---
  {
    id: "kymaeros",
    name: "Kymaeros",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Saturated Muscle Mass",
    description: "An infested swimmer that uses muscled cilia to move through the exocrine."
  },
  {
    id: "cryptosuctus",
    name: "Cryptosuctus",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Fass"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Pustulent Cognitive Nodule",
    description: "A frantic infested scavenger active on the exocrine surface when Fass dominates."
  },
  {
    id: "glutinox",
    name: "Glutinox",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "Fass Residue",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Sporulate Sac",
    description: "A bloated, passive bio-capsule that rises to the surface during Vome. Attracted to Fass Residue."
  },
  {
    id: "ostimyr",
    name: "Ostimyr",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Fass"],
    spear: ["Spari", "Ebisu"],
    bait: "Vome Residue",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Saturated Muscle Mass",
    secondaryDrop: "Tubercular Gill System",
    description: "A rare, aggressive hunter that surfaces during Fass in hotspots. Requires Vome Residue."
  },
  {
    id: "aquapulmo",
    name: "Aquapulmo",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "Processed Vome Residue",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Biotic Filter",
    secondaryDrop: "Pustulent Cognitive Nodule",
    description: "A delicate, floating filter feeder that emerges in hotspots during Vome. Requires Processed Vome Residue."
  },
  {
    id: "barbisteo",
    name: "Barbisteo",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Dendrite Blastoma",
    description: "A territorial cave eel that anchors itself to calcified roots."
  },
  {
    id: "amniophysi",
    name: "Amniophysi",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Waxen Sebum Deposit",
    description: "A common, translucent cave dweller that collects fatty exocrine secretions."
  },
  {
    id: "vitreospina",
    name: "Vitreospina",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Uncommon",
    uniqueDrop: "Spinal Core Section",
    secondaryDrop: "Dendrite Blastoma",
    description: "A glassy, skeletal fish whose fragile spine is visible through its skin."
  },
  {
    id: "duroid",
    name: "Duroid",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "Vome Residue",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Biotic Filter",
    description: "An armored custodial fish that roots in cave bed hotspots. Attracted to Vome Residue."
  },
  {
    id: "chondricord",
    name: "Chondricord",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "Fass Residue",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Spinal Core Section",
    description: "A multi-segmented cave swimmer that seeks electrical energy. Attracted to Fass Residue in hotspots."
  },
  {
    id: "myxostomata",
    name: "Myxostomata",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Cave",
    cycle: ["Fass"],
    spear: ["Spari", "Ebisu"],
    bait: "Processed Fass Residue",
    hotspot: true,
    rarity: "Rare",
    uniqueDrop: "Cranial Foremount",
    description: "The rarest cave predator in Deimos. Active during Fass cycles, requiring Processed Fass Residue at hotspots."
  },
  {
    id: "lobotriscid",
    name: "Lobotriscid",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "None",
    hotspot: false,
    rarity: "Common",
    uniqueDrop: "Parasitic Tethermaw",
    description: "A flat, segmented infested organism that glides along the exocrine surface during Vome cycles."
  },
  {
    id: "flagellocanth",
    name: "Flagellocanth",
    planet: "Deimos",
    location: "Cambion Drift",
    biome: "Surface",
    cycle: ["Fass", "Vome"],
    spear: ["Spari", "Ebisu"],
    bait: "Processed Fass Residue",
    hotspot: true,
    rarity: "Uncommon",
    uniqueDrop: "Ocular Stem-Root",
    description: "A multi-eyed surface swimmer that clusters around heat vents in hotspots. Requires Processed Fass Residue."
  }
];

// Mutagen Recipes & Stats (Vulpaphyla and Predasite)
const MUTAGEN_DATA = {
  vulpaphyla: [
    {
      name: "Adra Mutagen",
      rank: "Stranger (Rank 1)",
      standingCost: "1,250",
      resistance: "Proto Shield (+50% Puncture, +50% Heat, +50% Corrosive)",
      effect: "Grants a sleek, standard bio-shell appearance to the tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        fermentBladder: 20,
        sporulateSac: 12
      }
    },
    {
      name: "Elsa Mutagen",
      rank: "Acquaintance (Rank 2)",
      standingCost: "2,500",
      resistance: "Alloy Armor (+50% Slash, +50% Electricity, +50% Magnetic)",
      effect: "Grows a protective chitinous shell layer over the tail bone.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        fermentBladder: 20,
        bioticFilter: 12
      }
    },
    {
      name: "Zarim Mutagen",
      rank: "Associate (Rank 3)",
      standingCost: "4,000",
      resistance: "Cloned Flesh (+25% Impact, +50% Gas, +50% Void)",
      effect: "Transforms the tail tip into a writhing mass of sensory tentacles.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        tubercularGillSystem: 20,
        spinalCoreSection: 8
      }
    },
    {
      name: "Phijar Mutagen",
      rank: "Friend (Rank 4)",
      standingCost: "6,000",
      resistance: "Robotic (+25% Slash, +25% Toxin)",
      effect: "Adds an arced bio-appendage with dangling glowing bulbs to the tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        tubercularGillSystem: 20,
        cranialForemount: 4
      }
    }
  ],
  predasite: [
    {
      name: "Leptosam Mutagen",
      rank: "Stranger (Rank 1)",
      standingCost: "1,250",
      resistance: "Proto Shield (+50% Puncture, +50% Heat, +50% Corrosive)",
      effect: "Provides a smooth, plated armor pattern on the tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        fermentBladder: 20,
        sporulateSac: 12
      }
    },
    {
      name: "Chiten Mutagen",
      rank: "Acquaintance (Rank 2)",
      standingCost: "2,500",
      resistance: "Alloy Armor (+50% Slash, +50% Electricity, +50% Magnetic)",
      effect: "Forms an overlapping spiky shell layer along the spine and tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        fermentBladder: 20,
        bioticFilter: 12
      }
    },
    {
      name: "Arioli Mutagen",
      rank: "Associate (Rank 3)",
      standingCost: "4,000",
      resistance: "Cloned Flesh (+25% Impact, +50% Gas, +50% Void)",
      effect: "Sprouts multiple small fleshy whiskers and cilia along the tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        tubercularGillSystem: 20,
        spinalCoreSection: 8
      }
    },
    {
      name: "Monachod Mutagen",
      rank: "Friend (Rank 4)",
      standingCost: "6,000",
      resistance: "Robotic (+25% Slash, +25% Toxin)",
      effect: "Grows a large, segmented hook-like appendage at the end of the tail.",
      ingredients: {
        credits: 1000,
        vomeResidue: 6,
        pustulite: 15,
        tubercularGillSystem: 20,
        cranialForemount: 4
      }
    }
  ]
};

// Antigen Recipes, Polarities, & Appearance (Vulpaphyla and Predasite)
const ANTIGEN_DATA = {
  vulpaphyla: [
    {
      name: "Desus Antigen",
      rank: "Stranger (Rank 1)",
      standingCost: "1,250",
      polarity: "Vazarin (D)",
      effect: "Grows symmetrical horn-like protrusions backward from the collar.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        dendriteBlastoma: 15
      }
    },
    {
      name: "Plagen Antigen",
      rank: "Acquaintance (Rank 2)",
      standingCost: "2,500",
      polarity: "Naramon (Dash)",
      effect: "Forms a singular sleek blade crest rising from the forehead.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        saturatedMuscleMass: 15
      }
    },
    {
      name: "Virox Antigen",
      rank: "Associate (Rank 3)",
      standingCost: "4,000",
      polarity: "Madurai (V)",
      effect: "Sprouts flared wing-like flaps extending out from the cheeks.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        pustulentCognitiveNodule: 15
      }
    },
    {
      name: "Poxi Antigen",
      rank: "Friend (Rank 4)",
      standingCost: "6,000",
      polarity: "Penjaga (Y)",
      effect: "Grows clusters of glowing sensory spores around the neck and throat.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        waxenSebumDeposit: 15
      }
    }
  ],
  predasite: [
    {
      name: "Iranon Antigen",
      rank: "Stranger (Rank 1)",
      standingCost: "1,250",
      polarity: "Vazarin (D)",
      effect: "Grows a double-crested ridge of bone plating down the neck.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        dendriteBlastoma: 15
      }
    },
    {
      name: "Ibexan Antigen",
      rank: "Acquaintance (Rank 2)",
      standingCost: "2,500",
      polarity: "Naramon (Dash)",
      effect: "Sprouts two sweeping horns curved back over the shoulders.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        saturatedMuscleMass: 15
      }
    },
    {
      name: "Elasmun Antigen",
      rank: "Associate (Rank 3)",
      standingCost: "4,000",
      polarity: "Madurai (V)",
      effect: "Forms jagged bony spikes surrounding the jawline.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        pustulentCognitiveNodule: 15
      }
    },
    {
      name: "Tethron Antigen",
      rank: "Friend (Rank 4)",
      standingCost: "6,000",
      polarity: "Penjaga (Y)",
      effect: "Causes large bioluminescent infestation bulbs to rise along the upper spine.",
      ingredients: {
        credits: 1000,
        fassResidue: 6,
        ganglion: 15,
        benignInfestedTumor: 30,
        waxenSebumDeposit: 15
      }
    }
  ]
};

// Global App State Variables
let currentPlanetTab = "Earth";
let filters = {
  searchQuery: "",
  cycle: "All",
  biome: "All",
  rarity: "All",
  bait: "All"
};

// Bio-Lab Selections
let labState = {
  companionType: "vulpaphyla",
  mutagenIndex: 0,
  antigenIndex: 0,
  breedIndex: 0
};

const BREED_DATA = {
  vulpaphyla: [
    { id: "panzer", name: "Panzer Vulpaphyla", desc: "Spreads Viral spores automatically via Viral Quills and has self-revive Panzer Devolution." },
    { id: "sly", name: "Sly Vulpaphyla", desc: "Increases Warframe evasion via Survival Instinct and has Sly Devolution." },
    { id: "crescent", name: "Crescent Vulpaphyla", desc: "Lifts and charges enemies via Crescent Charge and has Crescent Devolution." }
  ],
  predasite: [
    { id: "pharaoh", name: "Pharaoh Predasite", desc: "Spreads acidic spores and buffs melee damage via Anabolic Pollination." },
    { id: "medjay", name: "Medjay Predasite", desc: "Inflicts bleed status and stuns targets via Infectious Bite." },
    { id: "vizier", name: "Vizier Predasite", desc: "Heals nearby allies and spits corrosive spit via Acidic Spittle." }
  ]
};

let labCraftInterval = null;

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  if (!history.state) {
    history.replaceState({ tab: 'Earth' }, '', '#Earth');
  }

  window.addEventListener('popstate', (e) => {
    const state = e.state || { tab: 'Earth' };
    if (state.tab) {
      switchTab(state.tab, false);
    }
  });

  renderTabs();
  renderFilters();
  renderFishCatalog();
  renderBioLab();
  setupListeners();
}

function switchTab(target, pushHistory = true) {
  currentPlanetTab = target;
  
  // Reset planet filters on tab change
  filters.cycle = "All";
  filters.biome = "All";
  filters.rarity = "All";
  filters.bait = "All";
  
  renderTabs();
  renderFilters();
  
  const catalogSection = document.getElementById("catalog-section");
  const bioLabSection = document.getElementById("biolab-section");
  
  if (currentPlanetTab === "BioLab") {
    catalogSection.classList.add("hidden");
    bioLabSection.classList.remove("hidden");
    renderBioLab();
  } else {
    catalogSection.classList.remove("hidden");
    bioLabSection.classList.add("hidden");
    renderFishCatalog();
  }

  if (pushHistory) {
    history.pushState({ tab: currentPlanetTab }, '', '#' + currentPlanetTab);
  }
}

// Render Planet Navigation Tabs
function renderTabs() {
  const tabsContainer = document.getElementById("planet-tabs");
  if (!tabsContainer) return;

  tabsContainer.style.display = "flex";
  tabsContainer.style.gap = "15px";
  tabsContainer.style.justifyContent = "center";
  tabsContainer.style.padding = "10px 0";
  tabsContainer.style.flexWrap = "wrap";

  const tabs = [
    { name: "Earth", key: "Earth", icon: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 2a10 10 0 0 1 10 10M12 22a10 10 0 0 1-10-10M2 12h20"/></svg>` },
    { name: "Venus", key: "Venus", icon: `<svg viewBox="0 0 24 24"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></svg>` },
    { name: "Deimos", key: "Deimos", icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>` },
    { name: "Bio-Lab", key: "BioLab", icon: `<svg viewBox="0 0 24 24"><path d="M9 3v4.25c0 .35-.11.7-.32.98L4.31 14.15C3.48 15.26 4.27 17 5.66 17h12.68c1.39 0 2.18-1.74 1.35-2.85l-4.37-5.92a1.5 1.5 0 0 1-.32-.98V3"/></svg>` }
  ];

  tabsContainer.innerHTML = tabs.map(tab => `
    <button class="tab-icon-btn ${currentPlanetTab === tab.key ? 'active' : ''}" data-tab="${tab.key}">
      ${tab.icon}
      <span class="tab-label">${tab.name}</span>
    </button>
  `).join('');

  // Attach tab triggers
  document.querySelectorAll(".tab-icon-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-tab");
      switchTab(target);
    });
  });
}

// Generate region-specific filter dropdowns dynamically
function renderFilters() {
  const filterForm = document.getElementById("dynamic-filters");
  if (!filterForm || currentPlanetTab === "BioLab") {
    if (filterForm) filterForm.innerHTML = "";
    return;
  }

  // Determine cycles and biomes depending on the selected planet
  let cycleOptions = ["All"];
  let biomeOptions = ["All"];
  let baitOptions = ["All"];

  if (currentPlanetTab === "Earth") {
    cycleOptions.push("Day", "Night");
    biomeOptions.push("Lake", "Pond", "Ocean");
    baitOptions.push("None", "Norg Bait", "Twilight Bait", "Murkray Bait", "Glappid Bait", "Cuthol Bait");
  } else if (currentPlanetTab === "Venus") {
    cycleOptions.push("Warm", "Cold");
    biomeOptions.push("Lake", "Pond", "River", "Cave");
    baitOptions.push("None", "Tromyzon Bait", "Charamote Bait", "Synathid Bait", "Kriller Bait", "Longwinder Bait", "Mirewinder Bait");
  } else if (currentPlanetTab === "Deimos") {
    cycleOptions.push("Fass", "Vome");
    biomeOptions.push("Surface", "Cave");
    baitOptions.push("None", "Fass Residue", "Vome Residue", "Processed Fass Residue", "Processed Vome Residue");
  }

  const rarityOptions = ["All", "Common", "Uncommon", "Rare"];

  filterForm.innerHTML = `
    <div class="filter-group">
      <label for="filter-cycle">Cycle Phase</label>
      <select id="filter-cycle">
        ${cycleOptions.map(c => `<option value="${c}" ${filters.cycle === c ? 'selected' : ''}>${c}</option>`).join('')}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-biome">Biome / Location</label>
      <select id="filter-biome">
        ${biomeOptions.map(b => `<option value="${b}" ${filters.biome === b ? 'selected' : ''}>${b}</option>`).join('')}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-rarity">Rarity</label>
      <select id="filter-rarity">
        ${rarityOptions.map(r => `<option value="${r}" ${filters.rarity === r ? 'selected' : ''}>${r}</option>`).join('')}
      </select>
    </div>

    <div class="filter-group">
      <label for="filter-bait">Bait Attracted</label>
      <select id="filter-bait">
        ${baitOptions.map(bt => `<option value="${bt}" ${filters.bait === bt ? 'selected' : ''}>${bt}</option>`).join('')}
      </select>
    </div>
  `;

  // Attach filter triggers
  document.getElementById("filter-cycle").addEventListener("change", (e) => {
    filters.cycle = e.target.value;
    renderFishCatalog();
  });
  document.getElementById("filter-biome").addEventListener("change", (e) => {
    filters.biome = e.target.value;
    renderFishCatalog();
  });
  document.getElementById("filter-rarity").addEventListener("change", (e) => {
    filters.rarity = e.target.value;
    renderFishCatalog();
  });
  document.getElementById("filter-bait").addEventListener("change", (e) => {
    filters.bait = e.target.value;
    renderFishCatalog();
  });
}

// Render Fish Cards in a responsive grid
function renderFishCatalog() {
  const grid = document.getElementById("fish-grid");
  if (!grid) return;

  // Filter the full dataset
  const filteredFish = FISH_DATA.filter(fish => {
    if (fish.planet !== currentPlanetTab) return false;
    
    // Search query check (matches name or unique drops)
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = fish.name.toLowerCase().includes(q);
      const matchDrop = fish.uniqueDrop.toLowerCase().includes(q);
      const matchSecondary = fish.secondaryDrop && fish.secondaryDrop.toLowerCase().includes(q);
      if (!matchName && !matchDrop && !matchSecondary) return false;
    }

    // Filter selects
    if (filters.cycle !== "All" && !fish.cycle.includes(filters.cycle)) return false;
    if (filters.biome !== "All" && fish.biome !== filters.biome) return false;
    if (filters.rarity !== "All" && fish.rarity !== filters.rarity) return false;
    if (filters.bait !== "All" && fish.bait !== filters.bait) return false;

    return true;
  });

  if (filteredFish.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No specimens found matching the scanning parameters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredFish.map(fish => {
    // Check if the unique drop is used in Mutagen or Antigen crafting
    const usedInMutagen = isUsedInMutagen(fish.uniqueDrop) || (fish.secondaryDrop && isUsedInMutagen(fish.secondaryDrop));
    const usedInAntigen = isUsedInAntigen(fish.uniqueDrop) || (fish.secondaryDrop && isUsedInAntigen(fish.secondaryDrop));
    
    let usageBadges = "";
    if (usedInMutagen) {
      usageBadges += `<span class="badge badge-mutagen cursor-pointer" onclick="jumpToBioLab('${fish.planet}')">🧬 Mutagen Ingredient</span>`;
    }
    if (usedInAntigen) {
      usageBadges += `<span class="badge badge-antigen cursor-pointer" onclick="jumpToBioLab('${fish.planet}')">🧪 Antigen Ingredient</span>`;
    }

    const rarityClass = fish.rarity.toLowerCase();
    const cycleBadges = fish.cycle.map(c => `<span class="cycle-tag cycle-${c.toLowerCase()}">${c}</span>`).join('');
    const spearList = fish.spear.map(s => `<span class="spear-tag">${s}</span>`).join(', ');

    return `
      <div class="fish-card" id="card-${fish.id}">
        <div class="card-glow-${rarityClass}"></div>
        <div class="fish-card-header">
          <div class="fish-name-group">
            <h3 class="fish-title">${fish.name}</h3>
            <span class="rarity-badge rarity-${rarityClass}">${fish.rarity}</span>
          </div>
          <div class="cycle-badges">
            ${cycleBadges}
          </div>
        </div>

        <div class="fish-avatar">
          <div class="fish-svg-wrapper">
             ${getFishSVG(fish.id)}
          </div>
        </div>

        <div class="fish-details">
          <p class="fish-desc">${fish.description}</p>
          
          <div class="details-grid">
            <div class="detail-row">
              <span class="label">Location:</span>
              <span class="value">${fish.biome} (${fish.location})</span>
            </div>
            <div class="detail-row">
              <span class="label">Primary Spear:</span>
              <span class="value">${spearList}</span>
            </div>
            <div class="detail-row">
              <span class="label">Bait Needed:</span>
              <span class="value">${fish.bait === "None" ? "No Bait Required" : `<strong>${fish.bait}</strong>`} ${fish.hotspot ? " (Hotspots)" : ""}</span>
            </div>
          </div>

          <div class="resource-block">
            <div class="resource-header">Dismantle / Cut Yields</div>
            <div class="resource-yields">
              <div class="yield-item">
                <span class="yield-icon">💎</span>
                <div class="yield-desc">
                  <span class="yield-name">${fish.uniqueDrop}</span>
                  <span class="yield-qty">1 per specimen</span>
                </div>
              </div>
              ${fish.secondaryDrop ? `
              <div class="yield-item">
                <span class="yield-icon">🧬</span>
                <div class="yield-desc">
                  <span class="yield-name">${fish.secondaryDrop}</span>
                  <span class="yield-qty">Rare drop</span>
                </div>
              </div>
              ` : ""}
              <div class="yield-item">
                <span class="yield-icon">⚙️</span>
                <div class="yield-desc">
                  <span class="yield-name">${fish.planet === "Venus" ? "Scrap" : "Fish Meat / Scales / Oil"}</span>
                  <span class="yield-qty">Scale with size</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="badges-row">
            ${usageBadges}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Function to check if a resource name is used in any Mutagen recipes
function isUsedInMutagen(dropName) {
  const allMutagens = [...MUTAGEN_DATA.vulpaphyla, ...MUTAGEN_DATA.predasite];
  
  for (const mutagen of allMutagens) {
    for (const [key, qty] of Object.entries(mutagen.ingredients)) {
      const normalizedKey = key.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
      if (normalizedKey === dropName.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
}

// Function to check if a resource name is used in any Antigen recipes
function isUsedInAntigen(dropName) {
  const allAntigens = [...ANTIGEN_DATA.vulpaphyla, ...ANTIGEN_DATA.predasite];
  
  for (const antigen of allAntigens) {
    for (const [key, qty] of Object.entries(antigen.ingredients)) {
      const normalizedKey = key.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
      if (normalizedKey === dropName.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
}

// Quick jump to Bio-Lab from a fish card
window.jumpToBioLab = function(planet) {
  switchTab("BioLab");
};

// Render the Interactive Necralisk Bio-Lab screen
function renderBioLab() {
  const compSelector = document.getElementById("comp-type-select");
  if (compSelector) {
    compSelector.value = labState.companionType;
  }

  // Populate Breed dropdown
  const breedSelector = document.getElementById("comp-breed-select");
  if (breedSelector) {
    const breeds = BREED_DATA[labState.companionType];
    breedSelector.innerHTML = breeds.map((br, idx) => `
      <option value="${idx}" ${labState.breedIndex === idx ? 'selected' : ''}>${br.name}</option>
    `).join('');
  }

  // Get current list of options
  const mutagens = MUTAGEN_DATA[labState.companionType];
  const antigens = ANTIGEN_DATA[labState.companionType];

  // Render Mutagen options grid
  const mutGrid = document.getElementById("mutagen-selector-grid");
  if (mutGrid) {
    mutGrid.innerHTML = mutagens.map((mut, idx) => `
      <div class="lab-card ${labState.mutagenIndex === idx ? 'selected' : ''}" data-idx="${idx}" data-type="mutagen">
        <div class="lab-card-header">
          <span class="lab-card-title">${mut.name}</span>
          <span class="lab-rank">${mut.rank}</span>
        </div>
        <div class="lab-card-body">
          <p class="lab-spec"><strong>Resistance:</strong> ${mut.resistance}</p>
          <p class="lab-desc">${mut.effect}</p>
          <div class="lab-cost">Standing: ${mut.standingCost}</div>
        </div>
      </div>
    `).join('');
  }

  // Render Antigen options grid
  const antGrid = document.getElementById("antigen-selector-grid");
  if (antGrid) {
    antGrid.innerHTML = antigens.map((ant, idx) => `
      <div class="lab-card ${labState.antigenIndex === idx ? 'selected' : ''}" data-idx="${idx}" data-type="antigen">
        <div class="lab-card-header">
          <span class="lab-card-title">${ant.name}</span>
          <span class="lab-rank">${ant.rank}</span>
        </div>
        <div class="lab-card-body">
          <p class="lab-spec"><strong>Initial Polarity:</strong> <span class="polarity-tag">${ant.polarity}</span></p>
          <p class="lab-desc">${ant.effect}</p>
          <div class="lab-cost">Standing: ${ant.standingCost}</div>
        </div>
      </div>
    `).join('');
  }

  // Set card triggers
  document.querySelectorAll(".lab-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (labCraftInterval) return; // Disable selection during craft
      const type = e.currentTarget.getAttribute("data-type");
      const idx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
      
      if (type === "mutagen") {
        labState.mutagenIndex = idx;
      } else {
        labState.antigenIndex = idx;
      }
      renderBioLab();
    });
  });

  calculateShoppingList();
}

// Shopping list compilation & rendering
function calculateShoppingList() {
  const shoppingListDiv = document.getElementById("shopping-list-results");
  if (!shoppingListDiv) return;

  const selectedMutagen = MUTAGEN_DATA[labState.companionType][labState.mutagenIndex];
  const selectedAntigen = ANTIGEN_DATA[labState.companionType][labState.antigenIndex];
  const selectedBreed = BREED_DATA[labState.companionType][labState.breedIndex];

  // Compile list of ingredients
  const ingredients = {};

  // Helper to accumulate ingredients
  function addIngredients(recipe) {
    for (const [key, qty] of Object.entries(recipe)) {
      if (!ingredients[key]) {
        ingredients[key] = 0;
      }
      ingredients[key] += qty;
    }
  }

  addIngredients(selectedMutagen.ingredients);
  addIngredients(selectedAntigen.ingredients);

  // Convert keys into friendly display names and find source fish
  const displayItems = Object.entries(ingredients).map(([key, qty]) => {
    const displayName = key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase());
    
    // Find Deimos fish that produce this unique resource
    let sourceFishList = [];
    if (key !== "credits" && key !== "vomeResidue" && key !== "fassResidue" && key !== "pustulite" && key !== "ganglion") {
      FISH_DATA.forEach(fish => {
        if (fish.planet === "Deimos" && (fish.uniqueDrop === displayName || fish.secondaryDrop === displayName)) {
          sourceFishList.push(fish);
        }
      });
    }

    return {
      key,
      displayName,
      qty,
      sourceFishList
    };
  });

  // Check if already owned in local storage
  const storageKey = `biolab_owned_${labState.companionType}_${selectedBreed.id}`;
  const isOwned = safeStorage.getItem(storageKey) === 'true';

  let craftActionHtml = "";
  if (isOwned) {
    craftActionHtml = `
      <div class="completed-overlay-banner" style="background: rgba(46, 204, 113, 0.1); border: 1px solid #2ecc71; padding: 12px; border-radius: 8px; color: #2ecc71; text-align: center; font-weight: bold; font-size: 0.9rem;">
        🏆 Matrix Attuned & Custom Breed Acquired!
      </div>
    `;
  } else {
    craftActionHtml = `
      <button class="btn-forge-companion" id="btn-forge-companion" onclick="startLabCraftSequence()" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #d35400 0%, #f39c12 100%); color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(211, 84, 0, 0.35); text-transform: uppercase; letter-spacing: 1px;">
        🔨 Attune & Incubate Breed
      </button>
      <div id="lab-progress-container" style="display: none; margin-top: 15px; background: rgba(0,0,0,0.3); border: 1px solid rgba(211, 84, 0, 0.2); padding: 12px; border-radius: 6px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
          <span style="color: #f39c12; font-weight: bold;">⚙️ Incubating Matrix...</span>
          <span id="lab-timer-display" style="color: #cbd5e0;">30s remaining</span>
        </div>
        <div style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
          <div id="lab-progress-bar-fill" style="height: 100%; width: 0%; background: linear-gradient(90deg, #d35400, #f39c12); border-radius: 3px; transition: width 0.1s linear;"></div>
        </div>
      </div>
    `;
  }

  // Render shopping list HTML
  shoppingListDiv.innerHTML = `
    <div class="shopping-summary-card">
      <div class="comp-preview-header">
        <div>
          <h4 class="preview-title" style="color: #f39c12;">Breed: ${selectedBreed.name}</h4>
          <p class="preview-subtitle">Genus: ${labState.companionType.toUpperCase()} | Matrix: ${selectedMutagen.name} + ${selectedAntigen.name}</p>
        </div>
        <div class="preview-badge-group">
          <span class="polarity-tag">${selectedAntigen.polarity} Polarity</span>
          <span class="resistance-tag" style="background: rgba(46, 204, 113, 0.15); color: #2ecc71;">Resistances: Active</span>
        </div>
      </div>
      
      <div class="ingredients-split-view">
        <div class="materials-list">
          <h5>Required Crafting Materials</h5>
          <ul class="materials-ul">
            ${displayItems.map(item => {
              let sourceText = "";
              if (item.sourceFishList.length > 0) {
                const fishNames = item.sourceFishList.map(f => `<span class="source-fish-tag" onclick="focusFishCard('${f.id}')" style="color: #ffab00; font-weight: bold; cursor: pointer; text-decoration: underline;">${f.name}</span>`).join(", ");
                sourceText = `<div class="material-sources" style="font-size: 0.72rem; color: #a0aec0;">Acquired by cutting: ${fishNames}</div>`;
              } else {
                if (item.key === "vomeResidue") sourceText = `<div class="material-sources text-blue" style="font-size: 0.72rem; color: #3498db;">Collected on Cambion Drift surface during Vome cycles</div>`;
                if (item.key === "fassResidue") sourceText = `<div class="material-sources text-orange" style="font-size: 0.72rem; color: #e67e22;">Collected on Cambion Drift surface during Fass cycles</div>`;
                if (item.key === "pustulite") sourceText = `<div class="material-sources" style="font-size: 0.72rem; color: #a0aec0;">Harvested from glowing Amber Cysts throughout the Drift</div>`;
                if (item.key === "ganglion") sourceText = `<div class="material-sources" style="font-size: 0.72rem; color: #a0aec0;">Harvested from glowing white Haptic Spores throughout the Drift</div>`;
                if (item.key === "credits") sourceText = `<div class="material-sources" style="font-size: 0.72rem; color: #a0aec0;">Standard credits from missions</div>`;
              }

              return `
                <li class="material-li">
                  <div class="material-main-row">
                    <span class="material-name">${item.displayName}</span>
                    <span class="material-qty">x${item.qty.toLocaleString()}</span>
                  </div>
                  ${sourceText}
                </li>
              `;
            }).join('')}
          </ul>
        </div>
        
        <div class="companion-appearance-panel">
          <h5>Attuned Visual Mutations & Abilities</h5>
          <div class="mutation-box" style="margin-bottom: 20px;">
            <div class="mutation-item">
              <span class="mutation-label">Base Subspecies:</span>
              <p class="mutation-desc" style="color: #fff; font-size: 0.82rem; margin-top: 4px;">${selectedBreed.desc}</p>
            </div>
            <div class="mutation-item" style="margin-top: 10px;">
              <span class="mutation-label">Tail (Mutagen):</span>
              <p class="mutation-desc" style="color: #cbd5e0; font-size: 0.82rem; margin-top: 4px;">${selectedMutagen.effect}</p>
            </div>
            <div class="mutation-item" style="margin-top: 10px;">
              <span class="mutation-label">Head/Spine (Antigen):</span>
              <p class="mutation-desc" style="color: #cbd5e0; font-size: 0.82rem; margin-top: 4px;">${selectedAntigen.effect}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px;">
            ${craftActionHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Simulated bio lab crafting sequence
window.startLabCraftSequence = function() {
  const btnForge = document.getElementById("btn-forge-companion");
  const progressBox = document.getElementById("lab-progress-container");
  const progressFill = document.getElementById("lab-progress-bar-fill");
  const timerDisplay = document.getElementById("lab-timer-display");

  if (!btnForge) return;

  btnForge.style.display = 'none';
  progressBox.style.display = 'block';

  let duration = 30; // 30 seconds timer
  let elapsed = 0;

  progressFill.style.width = '0%';
  timerDisplay.textContent = `${duration}s remaining`;

  clearInterval(labCraftInterval);
  labCraftInterval = setInterval(() => {
    elapsed += 0.25;
    const percent = (elapsed / duration) * 100;
    progressFill.style.width = `${percent}%`;

    const remaining = Math.max(0, Math.ceil(duration - elapsed));
    timerDisplay.textContent = `${remaining}s remaining`;

    if (elapsed >= duration) {
      clearInterval(labCraftInterval);
      labCraftInterval = null;
      progressBox.style.display = 'none';

      // Complete and store
      const breed = BREED_DATA[labState.companionType][labState.breedIndex];
      const storageKey = `biolab_owned_${labState.companionType}_${breed.id}`;
      safeStorage.setItem(storageKey, 'true');

      // Sync companionship card checkmark inside Z: directory companion codex
      safeStorage.setItem(`tracker_companions_${breed.id}`, 'true');

      renderBioLab();
    }
  }, 250);
};

// Redirect and focus on specific fish in catalog
window.focusFishCard = function(fishId) {
  switchTab("Deimos");
  
  // Toggle sections
  document.getElementById("biolab-section").classList.add("hidden");
  document.getElementById("catalog-section").classList.remove("hidden");
  
  renderFishCatalog();
  
  // Highlight card
  setTimeout(() => {
    const cardElement = document.getElementById(`card-${fishId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardElement.classList.add("highlight-pulse");
      setTimeout(() => {
        cardElement.classList.remove("highlight-pulse");
      }, 3000);
    }
  }, 100);
};

// General input listener setups
function setupListeners() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filters.searchQuery = e.target.value;
      if (currentPlanetTab !== "BioLab") {
        renderFishCatalog();
      }
    });
  }

  // Bio-Lab Companion selector
  const compSelector = document.getElementById("comp-type-select");
  if (compSelector) {
    compSelector.addEventListener("change", (e) => {
      if (labCraftInterval) return;
      labState.companionType = e.target.value;
      labState.mutagenIndex = 0; // Reset index when switching types
      labState.antigenIndex = 0;
      labState.breedIndex = 0;
      renderBioLab();
    });
  }

  // Bio-Lab Breed Selector
  const breedSelector = document.getElementById("comp-breed-select");
  if (breedSelector) {
    breedSelector.addEventListener("change", (e) => {
      if (labCraftInterval) return;
      labState.breedIndex = parseInt(e.target.value, 10);
      renderBioLab();
    });
  }
}

// Generate simple stylistic SVG icons for the fish catalog
function getFishSVG(fishId) {
  switch (fishId) {
    // Earth Fish (Aqua/Ocean tones)
    case "mawfish":
    case "charc_eel":
    case "norg":
    case "khut_khut":
    case "yogwun":
    case "mortus_lungfish":
    case "cuthol":
    case "goopolla":
    case "tralok":
    case "sharrac":
    case "karkina":
    case "murkray":
    case "glappid":
      return `
        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 C 20 20, 50 15, 80 25 C 85 27, 90 29, 95 30 C 90 31, 85 33, 80 35 C 50 45, 20 40, 10 30 Z" fill="#00e5ff" fill-opacity="0.15" stroke="#00e5ff" stroke-width="2"/>
          <path d="M15 30 Q 30 18, 55 24 M15 30 Q 30 42, 55 36" stroke="#00e5ff" stroke-dasharray="2 2"/>
          <path d="M70 23 L 80 10 L 72 23 Z" fill="#00e5ff" fill-opacity="0.3" stroke="#00e5ff"/>
          <path d="M60 36 L 68 48 L 62 36 Z" fill="#00e5ff" fill-opacity="0.3" stroke="#00e5ff"/>
          <circle cx="83" cy="27" r="2" fill="#00e5ff"/>
        </svg>
      `;
    // Venus Servofish (Corpus Mechanical blue/yellow)
    case "tink":
    case "recaster":
    case "sapcaddy":
    case "tromyzon":
    case "brickie":
    case "echowinder":
    case "kriller":
    case "longwinder":
    case "mirewinder":
    case "eye_eye":
    case "scrubber":
    case "charamote":
    case "synathid":
      return `
        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="20" width="60" height="20" rx="4" fill="#ffea00" fill-opacity="0.1" stroke="#ffea00" stroke-width="2"/>
          <path d="M75 25 L 90 15 L 90 45 L 75 35 Z" fill="#ffea00" fill-opacity="0.2" stroke="#ffea00" stroke-width="2"/>
          <circle cx="65" cy="30" r="4" fill="#00e5ff" stroke="#ffea00" stroke-width="1.5"/>
          <line x1="30" y1="20" x2="30" y2="40" stroke="#ffea00" stroke-dasharray="3 3"/>
          <line x1="45" y1="20" x2="45" y2="40" stroke="#ffea00" stroke-dasharray="3 3"/>
        </svg>
      `;
    // Deimos Infested Fish (Flesh/Infested red/purple)
    default:
      return `
        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 30 C 20 10, 60 5, 85 22 C 90 25, 95 30, 92 32 C 85 36, 75 42, 60 48 C 35 55, 12 45, 8 30 Z" fill="#e040fb" fill-opacity="0.15" stroke="#e040fb" stroke-width="2"/>
          <path d="M12 30 C 25 35, 45 35, 75 25" stroke="#ff1744" stroke-width="1.5"/>
          <path d="M50 12 C 55 5, 62 10, 65 14" stroke="#e040fb" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M35 44 C 40 52, 48 50, 52 42" stroke="#ff1744" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="80" cy="22" r="3" fill="#ff1744" stroke="#e040fb" stroke-width="1"/>
        </svg>
      `;
  }
}

