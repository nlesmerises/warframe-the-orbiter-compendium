// Raw Weapon Database
// Backward-compatible weapon codex dataset for Warframe_Meta_Weapons_Codex.html

const RawWeaponDatabase = [
    {
        id: "torid-incarnon",
        name: "Torid Incarnon",
        lore: "An Infested launcher that transforms into a chaining beam weapon in its Incarnon form. The Torid fires toxic projectiles that leave a lingering gas cloud, but its true power lies in its Incarnon evolution, chaining devastating beams between enemies.",
        acquisition: "The base Torid is researched in the Dojo's Bio Lab. The Incarnon Genesis adapter is acquired from the Steel Path Circuit (Rotation A) and installed at Cavalero in the Chrysalith.",
        type: "Primary",
        slot: "Primary",
        class: "Beam",
        category: "Beam",
        variant: "Incarnon",
        crit: "34%",
        status: "24%",
        damage: "Base Toxin",
        owned: true,
        summary: "Incarnon beam that chains through rooms and scales into a premier Steel Path clearer.",
        stats: { baseDamage: 120, critChance: 34, critMultiplier: 2.6, statusChance: 24, fireRate: 12, magazine: 60, reload: 1.8 },
        mods: ["Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
        builds: [
            {
                name: "Default Beam Melt",
                mods: ["Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
                notes: "Incarnon beam setup tuned for viral slash pressure and room clearing."
            },
            {
                name: "Sustained Crit",
                mods: ["Galvanized Chamber", "Serration", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Heavy Caliber"],
                notes: "Higher raw damage profile when you want simpler scaling."
            }
        ],
        synergies: ["Primary Merciless", "Evolution II: Final Fusillade", "Evolution III: Extended Volley", "Evolution IV: Survivor's Edge"],
        tags: ["meta", "incarnon", "beam", "viral", "slash"],
        notes: "Evolutions: 2-Damage, 3-Reload, 4-Crit Chance. The ultimate room-clearing beam weapon."
    },
    {
        id: "glaive-prime",
        name: "Glaive Prime",
        lore: "The Prime variant of the original Tenno thrown weapon. It possesses a uniquely powerful forced Slash proc on its heavy attack explosion, making it one of the most lethal melee weapons in the Origin System against armored targets.",
        acquisition: "Acquired from opening Lith, Meso, Neo, and Axi Void Relics containing its parts. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Glaive",
        variant: "Prime",
        crit: "22%",
        status: "30%",
        damage: "Forced Slash",
        owned: true,
        summary: "Heavy-attack glaive that detonates into forced slash bursts and deletes clustered targets.",
        stats: { baseDamage: 328, critChance: 22, critMultiplier: 2.2, statusChance: 30, fireRate: 1.08, magazine: 0, reload: 0 },
        mods: ["Volatile Quick Return", "Killing Blow", "Amalgam Organ Shatter", "Sacrificial Steel", "Corrupt Charge", "Power Throw", "Primed Pressure Point", "Gladiator Might"],
        builds: [
            {
                name: "Heavy Slash",
                mods: ["Volatile Quick Return", "Killing Blow", "Amalgam Organ Shatter", "Sacrificial Steel", "Corrupt Charge", "Power Throw", "Primed Pressure Point", "Gladiator Might"],
                notes: "Heavy attack detonation build for forced slash explosions."
            },
            {
                name: "Combo Hybrid",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Volatile Quick Return", "Primed Fury", "Primed Pressure Point", "Gladiator Might"],
                notes: "Hybrid setup for longer missions with combo support."
            }
        ],
        synergies: ["Melee Crescendo", "Volatile Rebound alternatives", "Primer secondaries"],
        tags: ["meta", "melee", "glaive", "heavy-attack", "slash"],
        notes: "Heavy attack build. Throw it, detonate mid-air, everything bleeds to death instantly."
    },
    {
        id: "laetum",
        name: "Laetum",
        lore: "An ancient Zariman ceremonial sidearm. Through the power of the Void, it transforms from a semi-automatic pistol into a devastating fully-automatic radiation cannon with massive non-critical damage multipliers.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Pistol",
        variant: "Incarnon",
        crit: "22%",
        status: "22%",
        damage: "Radiation",
        owned: true,
        summary: "Incarnon sidearm with absurd attrition scaling and one of the safest all-purpose bossing profiles.",
        lore: "An ancient Zariman ceremonial sidearm. Through the power of the Void, it transforms from a semi-automatic pistol into a devastating fully-automatic radiation cannon with massive non-critical damage multipliers.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        stats: { baseDamage: 160, critChance: 22, critMultiplier: 2.2, statusChance: 22, fireRate: 6.67, magazine: 12, reload: 1.6 },
        mods: ["Hornet Strike", "Galvanized Diffusion", "Lethal Torrent", "Creeping Bullseye", "Target Cracker", "Pistol Pestilence", "Frostbite", "Hemorrhage"],
        builds: [
            {
                name: "Attrition Default",
                mods: ["Hornet Strike", "Galvanized Diffusion", "Lethal Torrent", "Creeping Bullseye", "Target Cracker", "Pistol Pestilence", "Frostbite", "Hemorrhage"],
                notes: "Balanced incarnon setup with viral and slash conversion."
            },
            {
                name: "Raw Radiation",
                mods: ["Hornet Strike", "Galvanized Diffusion", "Lethal Torrent", "Galvanized Shot", "Scorch", "Jolt", "Target Cracker", "Pistol Gambit"],
                notes: "Leans into direct damage and status layering."
            }
        ],
        synergies: ["Secondary Deadhead", "Evolution V: Devouring Attrition", "Headshot charge management"],
        tags: ["meta", "secondary", "incarnon", "bossing"],
        notes: "Evolutions: 2-Damage, 3-Accuracy, 4-Headshot Charge, 5-Devouring Attrition. Non-crit build melts Archons."
    },
    {
        id: "lex-prime-incarnon",
        name: "Lex Prime Incarnon",
        lore: "A highly accurate Orokin-era hand cannon. Its Incarnon form widens the projectile into a massive wave of plasma that features infinite punch-through against bodies, capable of annihilating entire hallways of enemies.",
        acquisition: "Base Lex Prime is acquired from Void Relics. The Incarnon Genesis adapter is earned from the Steel Path Circuit (Rotation C).",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Pistol",
        variant: "Prime Incarnon",
        crit: "34%",
        status: "24%",
        damage: "Puncture/Slash",
        owned: true,
        summary: "Transforms into a hand-cannon shotgun blast that rewards crit scaling and slash conversion.",
        stats: { baseDamage: 150, critChance: 34, critMultiplier: 2.8, statusChance: 24, fireRate: 2.67, magazine: 8, reload: 2.3 },
        mods: ["Hornet Strike", "Galvanized Crosshairs", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Hemorrhage", "Pistol Pestilence", "Frostbite"],
        builds: [
            {
                name: "Incarnon Burst",
                mods: ["Hornet Strike", "Galvanized Crosshairs", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Hemorrhage", "Pistol Pestilence", "Frostbite"],
                notes: "Crit-heavy incarnon burst setup."
            }
        ],
        synergies: ["Secondary Merciless", "Headshot chaining", "Hemorrhage slash conversion"],
        tags: ["secondary", "incarnon", "crit", "burst"],
        notes: "Turns into a massive plasma shotgun blast that forces slash procs with Hemorrhage."
    },
    {
        id: "kuva-nukor",
        name: "Kuva Nukor",
        lore: "A Grineer microwave beam pistol heavily modified by a Kuva Lich. It chains to multiple targets and boasts the highest critical multiplier in the game, making it an unparalleled status primer and damage dealer.",
        acquisition: "Obtained by vanquishing a Kuva Lich generated by a Kuva Larvling wielding the weapon. Element is determined by the progenitor Warframe.",
        type: "Secondary",
        slot: "Secondary",
        class: "Beam",
        category: "Beam",
        variant: "Kuva",
        crit: "7%",
        status: "50%",
        damage: "Microwave",
        owned: false,
        summary: "Premier chaining status primer that floods enemies with stacked elements for downstream scaling.",
        stats: { baseDamage: 49, critChance: 7, critMultiplier: 1.5, statusChance: 50, fireRate: 10, magazine: 77, reload: 2.0 },
        mods: ["Hornet Strike", "Galvanized Shot", "Lethal Torrent", "Pistol Pestilence", "Frostbite", "Scorch", "Jolt", "Barrel Diffusion"],
        builds: [
            {
                name: "Primer Beam",
                mods: ["Hornet Strike", "Galvanized Shot", "Lethal Torrent", "Pistol Pestilence", "Frostbite", "Scorch", "Jolt", "Barrel Diffusion"],
                notes: "Status-first primer setup for Condition Overload and Galvanized scaling."
            }
        ],
        synergies: ["Secondary Encumber", "Condition Overload melee", "Magnetic progenitor"],
        tags: ["secondary", "beam", "primer", "status"],
        notes: "The ultimate status primer. Chains to multiple enemies and applies 5+ status effects instantly."
    },
    {
        id: "braton-prime-incarnon",
        name: "Braton Prime Incarnon",
        lore: "The classic Tenno assault rifle, restored to its Orokin glory. Its Incarnon form drastically alters its firing mechanism, shooting explosive rounds that cover a wide area with heat damage.",
        acquisition: "Base Braton Prime is acquired from Void Relics. The Incarnon Genesis adapter is earned from the Steel Path Circuit (Rotation A).",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Prime Incarnon",
        crit: "24%",
        status: "26%",
        damage: "Slash",
        owned: false,
        summary: "Flexible rifle with incarnon ricochet mode and reliable slash-oriented scaling.",
        stats: { baseDamage: 36, critChance: 24, critMultiplier: 2.2, statusChance: 26, fireRate: 9.58, magazine: 75, reload: 2.0 },
        mods: ["Serration", "Galvanized Aptitude", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds"],
        builds: [
            {
                name: "Slash Incarnon",
                mods: ["Serration", "Galvanized Aptitude", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds"],
                notes: "Slash-focused rifle setup with incarnon ricochet support."
            }
        ],
        synergies: ["Primary Merciless", "Incarnon ricochet rooms", "Armor strip support"],
        tags: ["primary", "rifle", "incarnon", "slash"],
        notes: "High slash weighting. Incarnon mode creates bouncing explosive rounds."
    },
    {
        id: "phenmor",
        name: "Phenmor",
        lore: "A ceremonial Zariman rifle. Upon fulfilling its Incarnon condition, it sheds its semi-automatic constraints to become a relentless, heavy-hitting minigun that shreds enemies with non-critical damage multipliers.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Incarnon",
        crit: "20%",
        status: "20%",
        damage: "Slash/Radiation",
        owned: true,
        summary: "Attrition rifle that prefers non-crits and converts sustained fire into absurd direct damage.",
        lore: "A ceremonial Zariman rifle. Upon fulfilling its Incarnon condition, it sheds its semi-automatic constraints to become a relentless, heavy-hitting minigun that shreds enemies with non-critical damage multipliers.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        stats: { baseDamage: 43, critChance: 20, critMultiplier: 2.0, statusChance: 20, fireRate: 12, magazine: 120, reload: 2.0 },
        mods: ["Galvanized Chamber", "Galvanized Aptitude", "Serration", "Malignant Force", "Rime Rounds", "Vile Acceleration", "Heavy Caliber", "Shred"],
        builds: [
            {
                name: "Attrition Hose",
                mods: ["Galvanized Chamber", "Galvanized Aptitude", "Serration", "Malignant Force", "Rime Rounds", "Vile Acceleration", "Heavy Caliber", "Shred"],
                notes: "Non-crit attrition setup for bosses and endurance."
            },
            {
                name: "Faction Burst",
                mods: ["Galvanized Chamber", "Galvanized Aptitude", "Serration", "Malignant Force", "Rime Rounds", "Vile Acceleration", "Speed Trigger", "Hunter Munitions"],
                notes: "Faster handling profile with slash support."
            }
        ],
        synergies: ["Primary Deadhead", "Evolution V: Devouring Attrition", "Armor strip frames"],
        tags: ["primary", "rifle", "incarnon", "attrition"],
        notes: "Non-crit Devouring Attrition build. Insane raw damage multiplier on non-critical hits."
    },
    {
        id: "felarx",
        name: "Felarx",
        lore: "A Zariman shotgun originally used for ceremonial guard duties. In its Incarnon state, it transforms into a dual-wielded sidearm that fires devastating ricocheting blasts.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        type: "Primary",
        slot: "Primary",
        class: "Shotgun",
        category: "Shotgun",
        variant: "Incarnon",
        crit: "20%",
        status: "20%",
        damage: "Impact/Radiation",
        owned: false,
        summary: "Shotgun attrition monster that excels at deleting priority targets with direct pellet damage.",
        lore: "A Zariman shotgun originally used for ceremonial guard duties. In its Incarnon state, it transforms into a dual-wielded sidearm that fires devastating ricocheting blasts.",
        acquisition: "Purchased from Cavalero in the Chrysalith (Zariman Ten Zero) for Void Plumes after reaching the required Holdfasts standing.",
        stats: { baseDamage: 760, critChance: 20, critMultiplier: 2.0, statusChance: 20, fireRate: 3.33, magazine: 6, reload: 1.2 },
        mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Scattering Inferno", "Toxic Barrage", "Shell Shock", "Shotgun Barrage", "Blaze"],
        builds: [
            {
                name: "Attrition Shotgun",
                mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Scattering Inferno", "Toxic Barrage", "Shell Shock", "Shotgun Barrage", "Blaze"],
                notes: "Direct damage attrition setup with elemental layering."
            }
        ],
        synergies: ["Primary Deadhead", "Evolution V: Devouring Attrition", "Demolisher deletion"],
        tags: ["primary", "shotgun", "incarnon", "attrition"],
        notes: "Another Devouring Attrition monster. Destroys Demolishers and Acolytes effortlessly."
    },
    {
        id: "kronen-prime",
        name: "Kronen Prime",
        lore: "Elegant Orokin tonfas that strike with lethal grace. Known for their incredibly fast attack speed and high Slash weighting, making them a staple in the Sovereign Outcast stance combo builds.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Tonfa",
        variant: "Prime",
        crit: "22%",
        status: "34%",
        damage: "Slash",
        owned: true,
        summary: "Fast tonfa platform with excellent slash weighting and combo scaling for sustained melee pressure.",
        stats: { baseDamage: 198, critChance: 22, critMultiplier: 2.2, statusChance: 34, fireRate: 1.17, magazine: 0, reload: 0 },
        mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
        builds: [
            {
                name: "Combo Slash",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
                notes: "Classic combo melee setup with viral support."
            }
        ],
        synergies: ["Sovereign Outcast", "Primer secondaries", "Melee Exposure"],
        tags: ["melee", "tonfa", "slash", "combo"],
        notes: "Sovereign Outcast stance. High attack speed and forced slash procs on neutral combo."
    },
    {
        id: "nikana-prime",
        name: "Nikana Prime",
        lore: "An ancient blade dating back to the fall of the Orokin Empire. Forged with lost techniques, it is sharper and more deadly than the standard Nikana, relying heavily on Slash damage.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Nikana",
        variant: "Prime",
        crit: "28%",
        status: "28%",
        damage: "Slash",
        owned: false,
        summary: "Fluid nikana with strong slash bias and excellent crit/status balance for hybrid melee builds.",
        stats: { baseDamage: 198, critChance: 28, critMultiplier: 2.4, statusChance: 28, fireRate: 1.08, magazine: 0, reload: 0 },
        mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
        builds: [
            {
                name: "Hybrid Nikana",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
                notes: "Hybrid viral slash melee setup."
            }
        ],
        synergies: ["Blind Justice", "Primer secondaries", "Melee Influence alternatives"],
        tags: ["melee", "nikana", "slash", "hybrid"],
        notes: "Extremely high slash weighting and incredibly fluid stance animations."
    },
    {
        id: "epitaph",
        name: "Epitaph",
        lore: "Sevagoth's signature wrist-mounted sidearm. Its uncharged shots fire explosive slabs that inflict forced Cold procs in an AoE, while its fully charged shots unleash a devastating high-critical blast with infinite punch-through.",
        acquisition: "Blueprints and parts are rewarded from Void Storm missions (Railjack) in the Earth, Venus, and Saturn Proxima regions.",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Pistol",
        variant: "Signature",
        crit: "8%",
        status: "50%",
        damage: "Cold",
        owned: true,
        summary: "AoE primer sidearm that blankets groups in status and enables melee or gun CO scaling.",
        lore: "Sevagoth's signature wrist-mounted sidearm. Its uncharged shots fire explosive slabs that inflict forced Cold procs in an AoE, while its fully charged shots unleash a devastating high-critical blast with infinite punch-through.",
        acquisition: "Blueprints and parts are rewarded from Void Storm missions (Railjack) in the Earth, Venus, and Saturn Proxima regions.",
        stats: { baseDamage: 80, critChance: 8, critMultiplier: 1.8, statusChance: 50, fireRate: 1.5, magazine: 60, reload: 2.6 },
        mods: ["Hornet Strike", "Galvanized Shot", "Lethal Torrent", "Pistol Pestilence", "Frostbite", "Scorch", "Jolt", "Barrel Diffusion"],
        builds: [
            {
                name: "Primer Spread",
                mods: ["Hornet Strike", "Galvanized Shot", "Lethal Torrent", "Pistol Pestilence", "Frostbite", "Scorch", "Jolt", "Barrel Diffusion"],
                notes: "Status-first primer setup for wide utility."
            }
        ],
        synergies: ["Condition Overload", "Melee Crescendo", "Cold crowd control"],
        tags: ["secondary", "primer", "status", "aoe"],
        notes: "Used primarily as an AoE status primer for Condition Overload melee weapons."
    },
    {
        id: "nataruk",
        name: "Nataruk",
        lore: "A sentient bow gifted by Hunhow to the Drifter. It requires no ammo and features a 'perfect charge' mechanic, unleashing a massive projectile with infinite body punch-through that annihilates sentients and armored foes alike.",
        acquisition: "Awarded automatically upon completing 'The New War' cinematic quest.",
        type: "Primary",
        slot: "Primary",
        class: "Bow",
        category: "Bow",
        variant: "Signature",
        crit: "50%",
        status: "20%",
        damage: "Puncture/Slash",
        owned: true,
        summary: "Perfect-shot bow with huge crit scaling and infinite body punch-through for line clears.",
        lore: "A sentient bow gifted by Hunhow to the Drifter. It requires no ammo and features a 'perfect charge' mechanic, unleashing a massive projectile with infinite body punch-through that annihilates sentients and armored foes alike.",
        acquisition: "Awarded automatically upon completing 'The New War' cinematic quest.",
        stats: { baseDamage: 180, critChance: 50, critMultiplier: 2.4, statusChance: 20, fireRate: 1.0, magazine: 1, reload: 0.6 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
        builds: [
            {
                name: "Perfect Shot",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
                notes: "Perfect-shot crit setup with viral slash."
            }
        ],
        synergies: ["Primary Merciless", "Perfect shot timing", "Punch-through lanes"],
        tags: ["primary", "bow", "crit", "slash"],
        notes: "Perfect shot mechanic grants massive critical chance and infinite body punch-through."
    },
    {
        id: "tenet-arca-plasmor",
        name: "Tenet Arca Plasmor",
        lore: "A Corpus Sister variant of the Arca Plasmor. It fires massive waves of plasma that bounce off surfaces, gaining damage and range over the original model.",
        acquisition: "Obtained by vanquishing a Sister of Parvos generated in the Granum Void. Element is determined by the progenitor Warframe.",
        type: "Primary",
        slot: "Primary",
        class: "Shotgun",
        category: "Shotgun",
        variant: "Tenet",
        crit: "22%",
        status: "34%",
        damage: "Radiation",
        owned: false,
        summary: "Ricocheting plasma wave shotgun that dominates corridors and scales well with crit/status hybridization.",
        stats: { baseDamage: 760, critChance: 22, critMultiplier: 2.2, statusChance: 34, fireRate: 1.1, magazine: 10, reload: 2.6 },
        mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Critical Deceleration", "Ravage", "Toxic Barrage", "Frigid Blast", "Shotgun Barrage"],
        builds: [
            {
                name: "Hallway Plasma",
                mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Critical Deceleration", "Ravage", "Toxic Barrage", "Frigid Blast", "Shotgun Barrage"],
                notes: "Hybrid crit/status plasmor setup."
            }
        ],
        synergies: ["Primary Merciless", "Magnetic progenitor", "Ricochet hallways"],
        tags: ["primary", "shotgun", "tenet", "hybrid"],
        notes: "Shoots massive walls of radiation plasma that bounce off surfaces."
    },
    {
        id: "cedo",
        name: "Cedo",
        lore: "Lavos's signature shotgun. Its primary fire features built-in Condition Overload, dealing bonus damage per unique status effect on the target. Its alt-fire launches a rebounding glaive that rapidly primes enemies with elemental statuses.",
        acquisition: "Parts are purchased from Father in the Necralisk on Deimos using Entrati standing.",
        type: "Primary",
        slot: "Primary",
        class: "Shotgun",
        category: "Shotgun",
        variant: "Signature",
        crit: "20%",
        status: "20%",
        damage: "Slash",
        owned: false,
        summary: "Shotgun with built-in Condition Overload scaling and an alt-fire glaive that primes entire rooms.",
        lore: "Lavos's signature shotgun. Its primary fire features built-in Condition Overload, dealing bonus damage per unique status effect on the target. Its alt-fire launches a rebounding glaive that rapidly primes enemies with elemental statuses.",
        acquisition: "Parts are purchased from Father in the Necralisk on Deimos using Entrati standing.",
        stats: { baseDamage: 280, critChance: 20, critMultiplier: 2.0, statusChance: 20, fireRate: 3.67, magazine: 40, reload: 1.8 },
        mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Critical Deceleration", "Ravage", "Hunter Munitions", "Toxic Barrage", "Chilling Reload"],
        builds: [
            {
                name: "Primer Shotgun",
                mods: ["Primed Point Blank", "Galvanized Hell", "Galvanized Savvy", "Critical Deceleration", "Ravage", "Hunter Munitions", "Toxic Barrage", "Chilling Reload"],
                notes: "Hybrid setup that leverages alt-fire priming."
            }
        ],
        synergies: ["Primary Merciless", "Alt-fire primer", "Lavos synergy"],
        tags: ["primary", "shotgun", "primer", "hybrid"],
        notes: "Alt-fire throws a homing glaive that primes statuses. Primary fire has built-in Condition Overload."
    },
    {
        id: "ignis-wraith",
        name: "Ignis Wraith",
        lore: "A heavily modified Grineer flamethrower. Emitting a massive cone of fire, it excels at clearing large groups of weak enemies and breaking containers through walls.",
        acquisition: "Researched in the Chem Lab of a Clan Dojo (if the clan participated in The Pacifism Defect event) or purchased from Baro Ki'Teer.",
        type: "Primary",
        slot: "Primary",
        class: "Beam",
        category: "Beam",
        variant: "Wraith",
        crit: "17%",
        status: "29%",
        damage: "Heat",
        owned: false,
        summary: "Comfort beam weapon for farming and low-friction clears with forgiving aim and wall penetration.",
        stats: { baseDamage: 35, critChance: 17, critMultiplier: 2.0, statusChance: 29, fireRate: 8, magazine: 200, reload: 2.0 },
        mods: ["Serration", "Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense", "Vile Acceleration", "Malignant Force", "Rime Rounds"],
        builds: [
            {
                name: "Lazy Beam",
                mods: ["Serration", "Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense", "Vile Acceleration", "Malignant Force", "Rime Rounds"],
                notes: "Comfort viral heat beam setup."
            }
        ],
        synergies: ["Primary Merciless", "Wall punch farming", "Heat inherit support"],
        tags: ["primary", "beam", "farming", "comfort"],
        notes: "The ultimate lazy farming weapon. Spray and pray through walls."
    },
    {
        id: "tenet-cycron",
        name: "Tenet Cycron",
        lore: "A Corpus Sister variant of the Cycron. This battery-powered pistol fires a continuous beam of energy that refracts to hit multiple nearby enemies, never requiring ammo pickups.",
        acquisition: "Obtained by vanquishing a Sister of Parvos generated in the Granum Void. Element is determined by the progenitor Warframe.",
        type: "Secondary",
        slot: "Secondary",
        class: "Beam",
        category: "Beam",
        variant: "Tenet",
        crit: "20%",
        status: "40%",
        damage: "Heat",
        owned: false,
        summary: "Battery beam secondary with chaining utility and strong hybrid scaling for sustained missions.",
        stats: { baseDamage: 80, critChance: 20, critMultiplier: 2.0, statusChance: 40, fireRate: 12, magazine: 80, reload: 1.8 },
        mods: ["Hornet Strike", "Galvanized Shot", "Galvanized Crosshairs", "Lethal Torrent", "Target Cracker", "Pistol Pestilence", "Frostbite", "Scorch"],
        builds: [
            {
                name: "Battery Beam",
                mods: ["Hornet Strike", "Galvanized Shot", "Galvanized Crosshairs", "Lethal Torrent", "Target Cracker", "Pistol Pestilence", "Frostbite", "Scorch"],
                notes: "Hybrid crit/status beam setup."
            }
        ],
        synergies: ["Secondary Merciless", "Infinite ammo comfort", "Beam chaining"],
        tags: ["secondary", "beam", "tenet", "hybrid"],
        notes: "Battery-powered chaining beam. Like the Nukor but with infinite ammo."
    },
    {
        id: "stropha",
        name: "Stropha",
        lore: "A Corpus gunblade that fires a massive, short-range shockwave instead of pellets. It hits with the force of an explosive blast, guaranteeing immense damage in a wide frontal cone.",
        acquisition: "Blueprint drops from the Jackal (Fossa, Venus). Parts drop from Granum Void (Extended rotation).",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Gunblade",
        variant: "Standard",
        crit: "30%",
        status: "14%",
        damage: "Impact",
        owned: true,
        summary: "Heavy-attack gunblade that fires wide shockwaves and excels at bossing or burst melee play.",
        lore: "A Corpus gunblade that fires a massive, short-range shockwave instead of pellets. It hits with the force of an explosive blast, guaranteeing immense damage in a wide frontal cone.",
        acquisition: "Blueprint drops from the Jackal (Fossa, Venus). Parts drop from Granum Void (Extended rotation).",
        stats: { baseDamage: 360, critChance: 30, critMultiplier: 2.4, statusChance: 14, fireRate: 0.83, magazine: 0, reload: 0 },
        mods: ["Primed Pressure Point", "Sacrificial Steel", "Amalgam Organ Shatter", "Killing Blow", "Corrupt Charge", "Gladiator Might", "Voltaic Strike", "Volcanic Edge"],
        builds: [
            {
                name: "Heavy Gunblade",
                mods: ["Primed Pressure Point", "Sacrificial Steel", "Amalgam Organ Shatter", "Killing Blow", "Corrupt Charge", "Gladiator Might", "Voltaic Strike", "Volcanic Edge"],
                notes: "Heavy attack shockwave setup."
            }
        ],
        synergies: ["Melee Crescendo", "Heavy attack spam", "Boss burst"],
        tags: ["melee", "gunblade", "heavy-attack", "burst"],
        notes: "Heavy attack gunblade. Shoots massive wide shockwaves that decimate bosses."
    },
    {
        id: "dual-kamas-prime",
        name: "Dual Kamas Prime",
        lore: "Golden Orokin sickles designed for reaping. They deliver rapid, sweeping strikes with a high Slash weighting.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Dual Swords",
        variant: "Prime",
        crit: "15%",
        status: "20%",
        damage: "Slash",
        owned: false,
        summary: "Fast dual swords with comfortable slash output and straightforward combo scaling.",
        stats: { baseDamage: 140, critChance: 15, critMultiplier: 2.0, statusChance: 20, fireRate: 1.33, magazine: 0, reload: 0 },
        mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
        builds: [
            {
                name: "Fast Slash",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
                notes: "Simple combo melee setup."
            }
        ],
        synergies: ["Primer secondaries", "Melee Exposure", "Fast combo generation"],
        tags: ["melee", "dual-swords", "slash"],
        notes: "Fast slashing dual swords."
    },
    {
        id: "spira-prime",
        name: "Spira Prime",
        lore: "Orokin throwing daggers that travel in a distinct spiraling pattern. They boast extremely high critical stats for a thrown secondary.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Thrown",
        variant: "Prime",
        crit: "30%",
        status: "15%",
        damage: "Puncture",
        owned: false,
        summary: "Thrown secondary with strong crit scaling and niche burst utility.",
        stats: { baseDamage: 80, critChance: 30, critMultiplier: 3.0, statusChance: 15, fireRate: 3.0, magazine: 12, reload: 1.2 },
        mods: ["Hornet Strike", "Galvanized Diffusion", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Barrel Diffusion", "Pistol Pestilence", "Frostbite"],
        builds: [
            {
                name: "Crit Daggers",
                mods: ["Hornet Strike", "Galvanized Diffusion", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Barrel Diffusion", "Pistol Pestilence", "Frostbite"],
                notes: "Crit-focused thrown sidearm setup."
            }
        ],
        synergies: ["Secondary Merciless", "Thrown burst", "Headshot play"],
        tags: ["secondary", "thrown", "crit"],
        notes: "High crit throwing daggers."
    },
    {
        id: "soma-prime",
        name: "Soma Prime",
        lore: "The hallmark assault rifle of the Tenno. Boasting a massive magazine and high critical stats, the Soma Prime is a bullet hose that shines when utilizing critical delay and hunter munitions.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Prime",
        crit: "30%",
        status: "10%",
        damage: "Slash",
        owned: false,
        summary: "Classic bullet hose that still rewards crit investment and slash conversion.",
        stats: { baseDamage: 12, critChance: 30, critMultiplier: 3.0, statusChance: 10, fireRate: 15, magazine: 200, reload: 3.0 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Speed Trigger"],
        builds: [
            {
                name: "Bullet Hose",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Speed Trigger"],
                notes: "Crit hose setup with viral slash."
            }
        ],
        synergies: ["Primary Merciless", "Incarnon upgrade path", "Sustained crit"],
        tags: ["primary", "rifle", "crit", "classic"],
        notes: "Classic bullet hose with Incarnon upgrade available."
    },
    {
        id: "tigris-prime",
        name: "Tigris Prime",
        lore: "An Orokin double-barreled shotgun. Features a unique duplex-auto trigger mechanism, firing one barrel on trigger pull and the other on release. Deals massive amounts of Slash damage.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Primary",
        slot: "Primary",
        class: "Shotgun",
        category: "Shotgun",
        variant: "Prime",
        crit: "10%",
        status: "30%",
        damage: "Slash",
        owned: false,
        summary: "Duplex-trigger shotgun that still excels at status-heavy slash bursts.",
        stats: { baseDamage: 1560, critChance: 10, critMultiplier: 2.0, statusChance: 30, fireRate: 2.0, magazine: 2, reload: 1.8 },
        mods: ["Primed Point Blank", "Galvanized Hell", "Sweeping Serration", "Toxic Barrage", "Shell Shock", "Scattering Inferno", "Shotgun Barrage", "Blaze"],
        builds: [
            {
                name: "Slash Duplex",
                mods: ["Primed Point Blank", "Galvanized Hell", "Sweeping Serration", "Toxic Barrage", "Shell Shock", "Scattering Inferno", "Shotgun Barrage", "Blaze"],
                notes: "Status-heavy duplex trigger setup."
            }
        ],
        synergies: ["Primary Merciless", "Armor strip support", "Close-range burst"],
        tags: ["primary", "shotgun", "status", "slash"],
        notes: "Duplex trigger slash monster."
    },
    {
        id: "vectis-prime",
        name: "Vectis Prime",
        lore: "A classic Tenno sniper rifle from the Orokin era. Traditionally holding only two rounds per magazine, it excels when paired with mods that reward fast reloading and single-shot damage.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Primary",
        slot: "Primary",
        class: "Sniper",
        category: "Sniper",
        variant: "Prime",
        crit: "30%",
        status: "30%",
        damage: "Puncture",
        owned: false,
        summary: "Precision sniper with strong crit/status balance and reload-loop burst potential.",
        stats: { baseDamage: 350, critChance: 30, critMultiplier: 2.0, statusChance: 30, fireRate: 2.67, magazine: 2, reload: 0.85 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Malignant Force", "Rime Rounds", "Depleted Reload", "Speed Trigger"],
        builds: [
            {
                name: "Reload Loop",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Malignant Force", "Rime Rounds", "Depleted Reload", "Speed Trigger"],
                notes: "Classic Vectis reload-loop setup."
            }
        ],
        synergies: ["Primary Deadhead", "Sniper combo", "Boss precision"],
        tags: ["primary", "sniper", "precision"],
        notes: "Classic sniper rifle."
    },
    {
        id: "rubico-prime",
        name: "Rubico Prime",
        lore: "An Orokin sniper rifle highly favored for Eidolon hunting. Its rapid fire rate for a sniper and high critical multiplier make it exceptionally good at bursting down large boss weakpoints.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Primary",
        slot: "Primary",
        class: "Sniper",
        category: "Sniper",
        variant: "Prime",
        crit: "38%",
        status: "16%",
        damage: "Impact",
        owned: true,
        summary: "The benchmark Eidolon sniper with elite crit scaling and reliable burst windows.",
        stats: { baseDamage: 187, critChance: 38, critMultiplier: 3.0, statusChance: 16, fireRate: 3.67, magazine: 5, reload: 2.4 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Heavy Caliber", "Speed Trigger", "Malignant Force", "Rime Rounds"],
        builds: [
            {
                name: "Eidolon Standard",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Heavy Caliber", "Speed Trigger", "Malignant Force", "Rime Rounds"],
                notes: "Crit sniper setup for Eidolon and bossing."
            }
        ],
        synergies: ["Primary Deadhead", "Volt shields", "Eidolon hunts"],
        tags: ["primary", "sniper", "eidolon", "crit"],
        notes: "The Eidolon hunting standard."
    },
    {
        id: "orthos-prime",
        name: "Orthos Prime",
        lore: "A bladed staff weapon from the Orokin era. Known for its massive reach and fluid sweeping stances, it excels at clearing crowds of enemies rapidly.",
        acquisition: "Acquired from opening Void Relics. It is an evergreen Prime weapon that does not enter the Prime Vault.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Polearm",
        variant: "Prime",
        crit: "24%",
        status: "36%",
        damage: "Slash",
        owned: false,
        summary: "Long-range polearm with excellent status and slash coverage for sweeping melee clears.",
        stats: { baseDamage: 204, critChance: 24, critMultiplier: 2.2, statusChance: 36, fireRate: 1.17, magazine: 0, reload: 0 },
        mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
        builds: [
            {
                name: "Range Polearm",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
                notes: "Range-friendly combo melee setup."
            }
        ],
        synergies: ["Primer secondaries", "Melee Exposure", "Wide sweeps"],
        tags: ["melee", "polearm", "range", "status"],
        notes: "Massive range polearm."
    },
    {
        id: "reaper-prime",
        name: "Reaper Prime",
        lore: "An elegant Orokin scythe. Despite its slow appearance, it boasts tremendous critical stats and forced Slash procs on heavy attacks, making it devastatingly lethal.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Scythe",
        variant: "Prime",
        crit: "35%",
        status: "25%",
        damage: "Slash",
        owned: false,
        summary: "Scythe with lethal crit scaling and strong slash output for stylish heavy melee play.",
        stats: { baseDamage: 240, critChance: 35, critMultiplier: 2.5, statusChance: 25, fireRate: 1.0, magazine: 0, reload: 0 },
        mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
        builds: [
            {
                name: "Scythe Hybrid",
                mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Fury", "Primed Pressure Point", "Voltaic Strike", "Vicious Frost"],
                notes: "Hybrid crit/status scythe setup."
            }
        ],
        synergies: ["Primer secondaries", "Heavy slash finishers", "Melee Influence alternatives"],
        tags: ["melee", "scythe", "crit", "slash"],
        notes: "Extremely lethal scythe."
    },
    {
        id: "pyrana-prime",
        name: "Pyrana Prime",
        lore: "A deadly Orokin hand-shotgun. Upon scoring three rapid kills, an ethereal second Pyrana Prime appears in the off-hand, doubling fire rate and magazine capacity temporarily.",
        acquisition: "Acquired from opening Void Relics. Frequently vaulted and unvaulted via Prime Resurgence.",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Pistol",
        variant: "Prime",
        crit: "24%",
        status: "10%",
        damage: "Slash",
        owned: true,
        summary: "Automatic shotgun pistol with strong crit scaling and a kill-triggered dual-wield burst mode.",
        stats: { baseDamage: 36, critChance: 24, critMultiplier: 2.8, statusChance: 10, fireRate: 4.17, magazine: 12, reload: 1.1 },
        mods: ["Hornet Strike", "Galvanized Diffusion", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Barrel Diffusion", "Pistol Pestilence", "Frostbite"],
        builds: [
            {
                name: "Dual Burst",
                mods: ["Hornet Strike", "Galvanized Diffusion", "Pistol Gambit", "Target Cracker", "Lethal Torrent", "Barrel Diffusion", "Pistol Pestilence", "Frostbite"],
                notes: "Crit-focused shotgun pistol setup."
            }
        ],
        synergies: ["Secondary Merciless", "Ghost pistol proc", "Close-range burst"],
        tags: ["secondary", "pistol", "crit", "burst"],
        notes: "Automatic shotgun pistol that spawns a second ethereal pistol on kills."
    },
    {
        id: "trumna",
        name: "Trumna",
        lore: "An ancient Entrati assault rifle. Its primary fire is slow and clunky, but kills charge an alternate fire that unleashes a devastating explosive bouncing round capable of wiping out entire rooms.",
        acquisition: "Parts are purchased from Father in the Necralisk on Deimos using Entrati standing.",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Entrati",
        crit: "24%",
        status: "30%",
        damage: "Heat",
        owned: false,
        summary: "Heavy machine gun with a devastating alt-fire grenade and excellent hybrid scaling.",
        lore: "An ancient Entrati assault rifle. Its primary fire is slow and clunky, but kills charge an alternate fire that unleashes a devastating explosive bouncing round capable of wiping out entire rooms.",
        acquisition: "Parts are purchased from Father in the Necralisk on Deimos using Entrati standing.",
        stats: { baseDamage: 58, critChance: 24, critMultiplier: 2.2, statusChance: 30, fireRate: 4.67, magazine: 200, reload: 5.0 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
        builds: [
            {
                name: "Heavy Rifle",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
                notes: "Hybrid rifle setup with alt-fire payoff."
            }
        ],
        synergies: ["Primary Merciless", "Alt-fire room delete", "Armor strip support"],
        tags: ["primary", "rifle", "hybrid", "alt-fire"],
        notes: "Heavy machine gun. Alt-fire deletes entire rooms."
    },
    {
        id: "xoris",
        name: "Xoris",
        lore: "A Corpus glaive designed by Parvos Granum. It possesses infinite combo duration, making it a reliable tool for heavy attack builds without the need to constantly refresh combo.",
        acquisition: "Awarded during the 'The Deadlock Protocol' quest.",
        type: "Melee",
        slot: "Melee",
        class: "Melee",
        category: "Glaive",
        variant: "Quest",
        crit: "20%",
        status: "20%",
        damage: "Electricity",
        owned: false,
        summary: "Infinite-combo glaive that remains a top utility pick for Granum and heavy-attack detonations.",
        lore: "A Corpus glaive designed by Parvos Granum. It possesses infinite combo duration, making it a reliable tool for heavy attack builds without the need to constantly refresh combo.",
        acquisition: "Awarded during the 'The Deadlock Protocol' quest.",
        stats: { baseDamage: 240, critChance: 20, critMultiplier: 2.0, statusChance: 20, fireRate: 1.17, magazine: 0, reload: 0 },
        mods: ["Volatile Quick Return", "Killing Blow", "Amalgam Organ Shatter", "Sacrificial Steel", "Corrupt Charge", "Power Throw", "Primed Pressure Point", "Gladiator Might"],
        builds: [
            {
                name: "Granum Utility",
                mods: ["Volatile Quick Return", "Killing Blow", "Amalgam Organ Shatter", "Sacrificial Steel", "Corrupt Charge", "Power Throw", "Primed Pressure Point", "Gladiator Might"],
                notes: "Heavy detonation utility setup."
            }
        ],
        synergies: ["Granum Void", "Infinite combo duration", "Heavy attack detonations"],
        tags: ["melee", "glaive", "utility", "heavy-attack"],
        notes: "Infinite combo duration glaive. Perfect for Granum Voids."
    },
    {
        id: "acceltra-prime",
        name: "Acceltra Prime",
        lore: "Gauss's signature primary weapon in its prime form. A rapid-fire micro-missile launcher that arms its projectiles after traveling a safe distance to prevent self-stagger.",
        acquisition: "Acquired from opening Void Relics.",
        type: "Primary",
        slot: "Primary",
        class: "Launcher",
        category: "Launcher",
        variant: "Prime",
        crit: "34%",
        status: "18%",
        damage: "Puncture",
        owned: false,
        summary: "Rapid-fire micro-missile launcher that rewards crit investment and aggressive movement.",
        stats: { baseDamage: 41, critChance: 34, critMultiplier: 2.8, statusChance: 18, fireRate: 12, magazine: 48, reload: 1.4 },
        mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
        builds: [
            {
                name: "Micro Missile",
                mods: ["Serration", "Galvanized Chamber", "Critical Delay", "Vital Sense", "Hunter Munitions", "Malignant Force", "Rime Rounds", "Vile Acceleration"],
                notes: "Crit launcher setup with viral slash."
            }
        ],
        synergies: ["Primary Merciless", "Aerial play", "Fast room clears"],
        tags: ["primary", "launcher", "crit", "aoe"],
        notes: "Rapid-fire micro-missile launcher."
    },
    {
        id: "gaze-kitgun",
        name: "Gaze (Kitgun)",
        lore: "A modular weapon assembled in Fortuna. When built with a Gaze chamber, it fires a continuous cutting beam of energy. Often customized with maximum critical chance parts for optimal scaling.",
        acquisition: "Chamber, Grip, and Loader parts are purchased from Rude Zuud in Fortuna using Solaris United standing.",
        type: "Secondary",
        slot: "Secondary",
        class: "Beam",
        category: "Beam",
        variant: "Kitgun",
        crit: "25%",
        status: "25%",
        damage: "Radiation",
        owned: false,
        summary: "Custom beam kitgun that can be tuned into a comfortable hybrid secondary platform.",
        stats: { baseDamage: 60, critChance: 25, critMultiplier: 2.3, statusChance: 25, fireRate: 10, magazine: 45, reload: 1.7 },
        mods: ["Hornet Strike", "Galvanized Shot", "Galvanized Crosshairs", "Lethal Torrent", "Target Cracker", "Pistol Pestilence", "Frostbite", "Scorch"],
        builds: [
            {
                name: "Hybrid Kitgun",
                mods: ["Hornet Strike", "Galvanized Shot", "Galvanized Crosshairs", "Lethal Torrent", "Target Cracker", "Pistol Pestilence", "Frostbite", "Scorch"],
                notes: "Hybrid beam kitgun setup."
            }
        ],
        synergies: ["Secondary Merciless", "Kitgun arcanes", "Beam comfort"],
        tags: ["secondary", "beam", "kitgun", "hybrid"],
        notes: "Custom built beam secondary."
    },
    {
        id: "braton",
        name: "Braton",
        lore: "The Braton is a Corpus-manufactured assault rifle, patterned after Orokin designs. It is one of the foundational weapons available to newly awakened Tenno, offering a balanced mix of impact, puncture, and slash damage in a reliable fully-automatic package.",
        acquisition: "The blueprint can be purchased from the Market for Credits and manufactured in the Foundry. It can also be purchased fully built for Platinum.",
        type: "Primary",
        slot: "Primary",
        class: "Assault Rifle",
        category: "Assault Rifle",
        variant: "Standard",
        crit: "12%",
        status: "12%",
        damage: "Base",
        owned: false,
        summary: "A reliable, balanced starter assault rifle.",
        stats: { baseDamage: 24, critChance: 12, critMultiplier: 1.6, statusChance: 12, fireRate: 8.8, magazine: 45, reload: 2.0 },
        mods: ["Serration", "Split Chamber", "Point Strike", "Vital Sense"],
        builds: [
            {
                name: "Starter Build",
                mods: ["Serration", "Split Chamber", "Point Strike", "Vital Sense", "Speed Trigger", "Infected Clip", "Stormbringer", "Fast Hands"],
                notes: "Basic raw damage and Corrosive build for early Star Chart progression."
            }
        ],
        synergies: ["Early game frames", "Gunplay practice"],
        tags: ["primary", "rifle", "starter", "automatic"],
        notes: "Excellent for learning the game's mechanics."
    },
    {
        id: "lato",
        name: "Lato",
        lore: "A traditional Tenno sidearm, the Lato is a semi-automatic pistol noted for its accuracy and balanced handling. Often the first secondary weapon a Tenno wields, its simple mechanism rarely jams, making it a reliable backup.",
        acquisition: "The blueprint is available in the Market for Credits. Can also be chosen as a starter weapon during the Vor's Prize quest.",
        type: "Secondary",
        slot: "Secondary",
        class: "Pistol",
        category: "Pistol",
        variant: "Standard",
        crit: "10%",
        status: "5%",
        damage: "Base",
        owned: false,
        summary: "A crisp and accurate starting semi-automatic pistol.",
        stats: { baseDamage: 30, critChance: 10, critMultiplier: 1.8, statusChance: 5, fireRate: 6.7, magazine: 15, reload: 1.0 },
        mods: ["Hornet Strike", "Barrel Diffusion", "Pistol Gambit", "Target Cracker"],
        builds: [
            {
                name: "Starter Pistol",
                mods: ["Hornet Strike", "Barrel Diffusion", "Pistol Gambit", "Target Cracker", "Pathogen Rounds", "Convulsion", "Quickdraw", "Slip Magazine"],
                notes: "Basic secondary build focusing on pure damage and Corrosive element."
            }
        ],
        synergies: ["Quick swapping", "Headshot practice"],
        tags: ["secondary", "pistol", "starter", "semi-auto"],
        notes: "Good fallback when primary is out of ammo."
    },
    {
        id: "skana",
        name: "Skana",
        lore: "The Skana is a traditional Tenno longsword. Simple, elegant, and deadly, its mastery is a rite of passage for all newly awakened Tenno. Its balanced blade is equally adept at rapid slashes and heavy plunging attacks.",
        acquisition: "The blueprint is available in the Market for Credits. Can also be chosen as a starter melee weapon during the Vor's Prize quest.",
        type: "Melee",
        slot: "Melee",
        class: "Sword",
        category: "Sword",
        variant: "Standard",
        crit: "10%",
        status: "16%",
        damage: "Slash",
        owned: false,
        summary: "A balanced starter longsword with decent slash weighting.",
        stats: { baseDamage: 120, critChance: 10, critMultiplier: 1.5, statusChance: 16, fireRate: 0.8, magazine: 0, reload: 0 },
        mods: ["Pressure Point", "True Steel", "Organ Shatter", "Fury"],
        builds: [
            {
                name: "Starter Blade",
                mods: ["Pressure Point", "True Steel", "Organ Shatter", "Fury", "Fever Strike", "Shocking Touch", "Reach", "Molten Impact"],
                notes: "Basic melee build focusing on attack speed and elemental damage."
            }
        ],
        synergies: ["Excalibur", "Melee combos"],
        tags: ["melee", "sword", "starter", "slash"],
        notes: "Solid early game melee weapon."
    },
    {
        id: "burston",
        name: "Burston",
        lore: "The Burston fires 3-round bursts, providing a balance between the lethality of automatic rifles and the accuracy of semi-automatic rifles. Reliable status platform for elemental damage stacking.",
        acquisition: "Crafted in the Foundry. Blueprint purchasable from the Market. Components dropped by Jackal (Fossa, Venus).",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Standard",
        crit: "6%",
        status: "18%",
        damage: "30",
        owned: false,
        summary: "A reliable burst-fire rifle with solid status chance. Best used as an elemental status platform to apply procs for faction mods and condition synergies.",
        stats: {
            baseDamage: 30,
            critChance: 6,
            critMultiplier: 1.8,
            statusChance: 18,
            fireRate: 7.83,
            magazine: 45,
            reload: 2
        },
        mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Vigilante Armaments", "Malignant Force", "High Voltage", "Rime Rounds", "Speed Trigger"],
        builds: [
            {
                name: "Status Elemental",
                mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Vigilante Armaments", "Malignant Force", "High Voltage", "Rime Rounds", "Speed Trigger"],
                notes: "Viral+Electric status stacker. Malignant Force + High Voltage = Electric, adds Toxin for Viral via Galvanized Chamber. High status output for proc application."
            },
            {
                name: "Corrosive Slash",
                mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Hunter Munitions", "Malignant Force", "High Voltage", "Thermite Rounds", "Speed Trigger"],
                notes: "Corrosive + Slash bleed build. Hunter Munitions converts crit hits to Slash procs. Good for armored targets and Steel Path."
            }
        ],
        synergies: ["Carrier Prime", "Rifle Amp", "Vigilante mods"],
        tags: ["primary", "rifle", "burst", "status", "standard"],
        notes: "Solid status rifle. Not a meta pick but effective for status proc farming and elemental damage stacking."
    },
    {
        id: "api_dera",
        name: "Dera",
        lore: "The Dera is a Corpus repeater that fires super-heated plasma bolts at high velocity. Its strong status chance makes it effective for elemental damage stacking.",
        acquisition: "Crafted in the Foundry. Blueprint purchasable from the Market.",
        type: "Primary",
        slot: "Primary",
        class: "Rifle",
        category: "Rifle",
        variant: "Standard",
        crit: "8%",
        status: "22%",
        damage: "30",
        owned: false,
        summary: "A Corpus plasma repeater with solid status chance and high fire rate. Best used as a status platform for elemental combination builds.",
        stats: {
            baseDamage: 30,
            critChance: 8,
            critMultiplier: 1.6,
            statusChance: 22,
            fireRate: 11.25,
            magazine: 60,
            reload: 2
        },
        mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Vigilante Armaments", "Malignant Force", "High Voltage", "Rime Rounds", "Vigilante Supplies"],
        builds: [
            {
                name: "Viral Status",
                mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Vigilante Armaments", "Malignant Force", "High Voltage", "Rime Rounds", "Vigilante Supplies"],
                notes: "Viral + Electric status build. High fire rate procs statuses quickly. Malignant Force + High Voltage = Electric; Cold + Toxin elsewhere = Viral."
            },
            {
                name: "Corrosive Rapid Fire",
                mods: ["Galvanized Chamber", "Serration", "Split Chamber", "Hunter Munitions", "Malignant Force", "High Voltage", "Thermite Rounds", "Vigilante Armaments"],
                notes: "Corrosive damage for armor strip. Hunter Munitions adds Slash procs on crit. High fire rate strips armor rapidly in Steel Path."
            }
        ],
        synergies: ["Carrier Prime", "Rifle Amp", "Vigilante set bonus"],
        tags: ["primary", "rifle", "status", "corpus", "standard"],
        notes: "Corpus-themed rifle with great status chance and fire rate. Excellent status proc platform."
    }
];
