const helminthUnlockGuide = {
    prerequisites: [
        "Reach Mastery Rank 8.",
        "Complete Heart of Deimos and unlock the Necralisk.",
        "Reach Entrati Rank 3: Associate.",
        "Buy the Helminth Segment blueprint from Son, build it in the Foundry, and install it in the Orbiter's Helminth room."
    ],
    steps: [
        "Farm and build a standard, non-Prime copy of the source Warframe.",
        "Sit in the Helminth chair and choose Subsume Warframe.",
        "Confirm the sacrifice. The source Warframe is permanently consumed.",
        "Wait for subsuming to finish, then choose Infuse Ability on the target Warframe.",
        "Select the loadout and ability slot to replace, pay the listed Helminth resources, and confirm."
    ],
    warning: "Prime, Umbra, and other special variants cannot be subsumed. Do not sacrifice your only built or invested copy; farm a spare standard Warframe."
};

const helminthAbilitySources = {
    "Hildryn": {
        where: "Exploiter Orb in Orb Vallis; Little Duck in Fortuna.",
        how: "Earn the component blueprints from the Exploiter Orb. Obtain the main Hildryn blueprint from Little Duck through Vox Solaris progression.",
        needs: "Access to Fortuna/Orb Vallis, Thermia Fracture progress for Diluted Thermia, and Vox Solaris standing."
    },
    "Grendel": {
        where: "Special Grendel missions on Europa.",
        how: "Complete Arbitrations, buy the three Grendel Locators from the Arbitration Honors vendor with Vitus Essence, then complete the locator missions for his component blueprints. Buy the main blueprint from the Market.",
        needs: "The full Star Chart completed to unlock Arbitrations, Vitus Essence, and a loadout capable of the special no-mod mission conditions."
    },
    "Rhino": {
        where: "Jackal assassination at Fossa, Venus.",
        how: "Repeat the Jackal fight for Rhino's Neuroptics, Chassis, and Systems blueprints. Buy the main blueprint from the Market.",
        needs: "Venus unlocked and the normal crafting resources for Rhino."
    },
    "Sevagoth": {
        where: "Call of the Tempestarii quest and Void Storm missions.",
        how: "Complete Call of the Tempestarii for the main blueprint. Farm Sevagoth's components from Void Storm missions in Neptune, Pluto, and Veil Proxima.",
        needs: "A Railjack and access to the required Proxima regions and Void Storms."
    },
    "Nekros": {
        where: "Lephantis assassination at Magnacidium, Deimos.",
        how: "Repeat the Lephantis fight for Nekros's component blueprints. Buy the main blueprint from the Market.",
        needs: "Deimos unlocked and the resources required to craft the Lephantis assassination key when applicable."
    },
    "Voruna": {
        where: "Conjunction Survival on Lua; Archimedean Yonta in the Chrysalith.",
        how: "Farm Voruna and her components from Yuvarium or Circulus, or exchange Lua Thrax Plasm with Yonta for missing blueprints.",
        needs: "The Lua and Zariman progression needed to access Conjunction Survival and Yonta."
    },
    "Gara": {
        where: "Saya's Vigil and Cetus bounties on the Plains of Eidolon.",
        how: "Complete Saya's Vigil for Gara's main blueprint. Run Cetus bounties for her component blueprints.",
        needs: "Cetus and the Plains of Eidolon unlocked, plus Ostron materials for crafting."
    },
    "Wisp": {
        where: "Ropalolyst assassination on Jupiter.",
        how: "Repeat the Ropalolyst fight for Wisp's main and component blueprints.",
        needs: "Completion of The Sacrifice and Chimera Prologue, plus access to the Ropalolyst node."
    },
    "Gauss": {
        where: "Disruption at Kappa, Sedna.",
        how: "Farm Rotation C of Kappa Disruption for Gauss's component blueprints. Buy the main blueprint from the Market.",
        needs: "Sedna unlocked and a squad/loadout capable of consistently reaching Rotation C."
    },
    "Kullervo": {
        where: "Kullervo's Hold in Duviri and Acrithis.",
        how: "Defeat Kullervo during an eligible Duviri Spiral to earn Kullervo's Bane, then exchange the Bane with Acrithis for his main and component blueprints.",
        needs: "Access to Duviri, the appropriate Spiral when Kullervo's Hold is available, and enough Kullervo's Bane for all blueprints."
    }
};

const helminthDatabase = {
    "Mesa": {
        role: "DPS / Peacemaker Turret",
        subsumes: [
            {
                ability: "Pillage",
                source: "Hildryn",
                replaced: "Ability 1 (Ballistic Battery)",
                reason: "Mesa's Peacemakers struggle against high-level Grineer armor. Pillage completely strips enemy armor and shields in a massive radius, while simultaneously granting Mesa Overshields to trigger the Arcane Aegis survival synergy."
            },
            {
                ability: "Nourish",
                source: "Grendel",
                replaced: "Ability 1 (Ballistic Battery)",
                reason: "Provides a massive Energy Multiplier, completely solving Mesa's energy economy. It also adds Viral damage to her Peacemakers, freeing up mod slots on her Regulators."
            }
        ]
    },
    "Saryn": {
        role: "Map Nuke / Weapon Platform",
        subsumes: [
            {
                ability: "Roar",
                source: "Rhino",
                replaced: "Ability 4 (Miasma) or Ability 2 (Molt)",
                reason: "Roar acts as a universal faction damage multiplier. Because Saryn relies heavily on Toxic Lash and Spores (which deal DoT status effects), Roar mathematically double-dips on these damage types, resulting in exponential damage increases."
            },
            {
                ability: "Gloom",
                source: "Sevagoth",
                replaced: "Ability 4 (Miasma)",
                reason: "Saryn is extremely squishy in the Steel Path. Gloom slows enemies by up to 95% and provides life steal. Because Saryn's Spores are constantly ticking damage across the entire map, you will be instantly healed to full health the millisecond you take damage."
            }
        ]
    },
    "Volt": {
        role: "Eidolons / ESO Nuke / Speed",
        subsumes: [
            {
                ability: "Terrify",
                source: "Nekros",
                replaced: "Ability 1 (Shock)",
                reason: "Volt's Discharge (Ability 4) does massive electrical damage but is completely mitigated by Grineer Armor. Terrify instantly removes armor from all enemies in range, allowing Discharge to instantly vaporize Steel Path rooms."
            },
            {
                ability: "Roar",
                source: "Rhino",
                replaced: "Ability 1 (Shock) or Ability 4 (Discharge)",
                reason: "For Eidolon Hunting. Roar double-dips on sniper rifle damage and buffs your entire squad's damage output, ensuring you one-shot Eidolon synovia."
            }
        ]
    },
    "Khora": {
        role: "Loot Farmer / Whipclaw DPS",
        subsumes: [
            {
                ability: "Lycath's Hunt",
                source: "Voruna",
                replaced: "Ability 3 (Venari) or Ability 2 (Ensnare)",
                reason: "Khora spams her Whipclaw (Melee damage). Lycath's Hunt causes melee kills to drop Health Orbs. This allows you to infinitely fuel the 'Equilibrium' mod for unlimited energy, and stack 'Arcane Blessing' for massive max health."
            },
            {
                ability: "Spectrorage",
                source: "Gara",
                replaced: "Ability 3 (Venari)",
                reason: "When combined with the 'Spectrosiphon' augment, enemies killed inside the mirrors have a 50% chance to drop Energy Orbs. Drop this inside your Strangledome for infinite energy."
            }
        ]
    },
    "Wisp": {
        role: "Support / Weapon Platform",
        subsumes: [
            {
                ability: "Roar",
                source: "Rhino",
                replaced: "Ability 4 (Sol Gate)",
                reason: "Wisp's Sol Gate is mathematically terrible in the Steel Path. Replacing it with Roar turns Wisp into the ultimate weapon platform, as you now have massive fire rate, health, speed, and double-dipping damage multipliers."
            },
            {
                ability: "Nourish",
                source: "Grendel",
                replaced: "Ability 4 (Sol Gate)",
                reason: "Wisp uses a lot of energy to cast Breach Surge. Nourish solves her energy economy, provides retaliatory Viral procs to stun enemies, and adds Viral damage to her weapons."
            }
        ]
    },
    "Revenant": {
        role: "Immortal Weapons Platform",
        subsumes: [
            {
                ability: "Roar",
                source: "Rhino",
                replaced: "Ability 4 (Danse Macabre)",
                reason: "Revenant cannot die thanks to Mesmer Skin. His Ability 4 falls off hard in the Steel Path. Roar simply amplifies his weapon damage, making him an unstoppable, unkillable turret."
            },
            {
                ability: "Nourish",
                source: "Grendel",
                replaced: "Ability 4 (Danse Macabre)",
                reason: "Solves energy issues and adds Viral damage to weapons. When enemies shoot your Mesmer Skin, Nourish will unleash a burst of Viral damage, stunning them further."
            }
        ]
    },
    "Mag": {
        role: "Armor Strip / Projectile Catcher",
        subsumes: [
            {
                ability: "Breach Surge",
                source: "Wisp",
                replaced: "Ability 1 (Pull) or Ability 3 (Polarize)",
                reason: "When enemies are trapped inside Mag's Magnetize bubble, casting Breach Surge causes devastating damage sparks to spawn. These sparks get trapped inside the bubble, continuously bouncing between enemies and multiplying damage to the damage cap."
            }
        ]
    },
    "Nekros": {
        role: "Loot Farmer / Tank",
        subsumes: [
            {
                ability: "Gloom",
                source: "Sevagoth",
                replaced: "Ability 1 (Soul Punch) or Ability 4 (Shadows)",
                reason: "Nekros uses Despoil (consumes health instead of energy for looting) and Shield of Shadows to survive. Gloom constantly heals the health lost from Despoil, while massively slowing enemies to keep Nekros safe."
            }
        ]
    },
    "Mirage": {
        role: "Nuke / Weapon Platform",
        subsumes: [
            {
                ability: "Terrify",
                source: "Nekros",
                replaced: "Ability 2 (Sleight of Hand)",
                reason: "Mirage's Explosive Legerdemain augment falls off against Grineer armor. Terrify removes the armor, allowing the disco ball and trap explosions to instantly kill Steel Path enemies."
            }
        ]
    },
    "Titania": {
        role: "Speedrun / Dex Pixia DPS",
        subsumes: [
            {
                ability: "Thermal Sunder",
                source: "Gauss",
                replaced: "Ability 3 (Lantern)",
                reason: "For Relic Cracking and Speedruns. You fly around in Razorwing and spam Thermal Sunder, instantly freezing and exploding low-level enemies through walls without ever firing a bullet."
            },
            {
                ability: "Nourish",
                source: "Grendel",
                replaced: "Ability 3 (Lantern)",
                reason: "Titania's Razorwing drains energy constantly. Nourish acts as an energy multiplier for orbs, keeping you in Razorwing forever, while adding Viral damage to your Dex Pixia."
            }
        ]
    },
    "Garuda": {
        role: "Infinite Energy Nuke",
        subsumes: [
            {
                ability: "Gloom",
                source: "Sevagoth",
                replaced: "Ability 2 (Blood Altar)",
                reason: "The ultimate infinite loop. Garuda's Ability 3 sacrifices health for energy. Gloom gives her massive lifesteal. Therefore, you cast Gloom, sacrifice health for energy, instantly heal back to full from Gloom's lifesteal, and cast her Ability 4 nuke infinitely."
            }
        ]
    },
    "Excalibur": {
        role: "Melee DPS",
        subsumes: [
            {
                ability: "Wrathful Advance",
                source: "Kullervo",
                replaced: "Ability 3 (Radial Javelin)",
                reason: "Wrathful Advance grants a massive flat Critical Chance bonus to melee weapons. This completely transforms Exalted Blade, pushing it deep into Red Crit territory and letting Excalibur teleport strike across the room."
            }
        ]
    }
};
