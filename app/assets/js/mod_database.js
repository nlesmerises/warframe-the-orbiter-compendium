const modDatabase = {
    "Bulkhead": {
        "type": "Railjack Mod",
        "effect": "+120% Railjack Hull (Max Health)",
        "farm": "Railjack Grineer Fighters / Saturn Proxima",
        "value": "Standard"
    },
    "Hull Weave": {
        "type": "Railjack Mod",
        "effect": "+120% Railjack Armor",
        "farm": "Railjack Grineer Fighters / Earth Proxima",
        "value": "Standard"
    },
    "Blind Rage":  {
                       "type":  "Corrupted Mod",
                       "effect":  "+99% Ability Strength, -55% Ability Efficiency",
                       "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). High yield farm.",
                       "value":  "15 - 20 Platinum"
                   },
    "Transient Fortitude":  {
                                "type":  "Corrupted Mod",
                                "effect":  "+55% Ability Strength, -27.5% Ability Duration",
                                "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel).",
                                "value":  "15 - 20 Platinum"
                            },
    "Narrow Minded":  {
                          "type":  "Corrupted Mod",
                          "effect":  "+99% Ability Duration, -66% Ability Range",
                          "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). High demand.",
                          "value":  "15 - 20 Platinum"
                      },
    "Fleeting Expertise":  {
                               "type":  "Corrupted Mod",
                               "effect":  "+60% Ability Efficiency, -60% Ability Duration",
                               "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel).",
                               "value":  "15 - 20 Platinum"
                           },
    "Overextended":  {
                         "type":  "Corrupted Mod",
                         "effect":  "+90% Ability Range, -60% Ability Strength",
                         "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). Essential for Nuking.",
                         "value":  "15 - 20 Platinum"
                     },
    "Critical Delay":  {
                           "type":  "Corrupted Mod",
                           "effect":  "+200% Critical Chance, -20% Fire Rate (Rifle)",
                           "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). Meta for primary crit scaling.",
                           "value":  "10 - 15 Platinum"
                       },
    "Creeping Bullseye":  {
                              "type":  "Corrupted Mod",
                              "effect":  "+200% Critical Chance, -20% Fire Rate (Pistol)",
                              "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel).",
                              "value":  "10 - 15 Platinum"
                          },
    "Vile Acceleration":  {
                              "type":  "Corrupted Mod",
                              "effect":  "+90% Fire Rate, -15% Damage (Rifle)",
                              "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). Great for bows/slow rifles.",
                              "value":  "10 - 15 Platinum"
                          },
    "Heavy Caliber":  {
                          "type":  "Corrupted Mod",
                          "effect":  "+165% Damage, -55% Accuracy (Rifle)",
                          "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). Good raw damage scaling.",
                          "value":  "10 - 15 Platinum"
                      },
    "Spoiled Strike":  {
                           "type":  "Corrupted Mod",
                           "effect":  "+100% Melee Damage, -20% Attack Speed",
                           "farm":  "Deimos Orokin Vaults (Requires Dragon Keys in Gear Wheel). Excellent for Stat Sticks.",
                           "value":  "5 - 10 Platinum"
                       },
    "Galvanized Chamber":  {
                               "type":  "Galvanized Mod",
                               "effect":  "+80% Multishot, +30% Multishot on Kill (Stacks up to 5x)",
                               "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                               "value":  "20 Platinum"
                           },
    "Galvanized Aptitude":  {
                                "type":  "Galvanized Mod",
                                "effect":  "+80% Status Chance, +40% Direct Damage per Status Type affecting the target on Kill (Stacks up to 2x)",
                                "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                                "value":  "20 Platinum"
                            },
    "Galvanized Scope":  {
                             "type":  "Galvanized Mod",
                             "effect":  "+120% Critical Chance on Headshot, +40% Crit Chance on Headshot Kill (Stacks up to 5x)",
                             "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                             "value":  "20 Platinum"
                         },
    "Galvanized Hell":  {
                            "type":  "Galvanized Mod",
                            "effect":  "+110% Multishot, +30% Multishot on Kill (Stacks up to 4x) (Shotgun)",
                            "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                            "value":  "20 Platinum"
                        },
    "Galvanized Savvy":  {
                             "type":  "Galvanized Mod",
                             "effect":  "+80% Status Chance, +40% Damage per Status Type affecting the target on Kill (Stacks up to 2x) (Shotgun)",
                             "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                             "value":  "20 Platinum"
                         },
    "Galvanized Diffusion":  {
                                 "type":  "Galvanized Mod",
                                 "effect":  "+110% Multishot, +30% Multishot on Kill (Stacks up to 4x) (Pistol)",
                                 "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                                 "value":  "20 Platinum"
                             },
    "Galvanized Shot":  {
                            "type":  "Galvanized Mod",
                            "effect":  "+80% Status Chance, +40% Damage per Status Type affecting the target on Kill (Stacks up to 3x) (Pistol)",
                            "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                            "value":  "20 Platinum"
                        },
    "Galvanized Crosshairs":  {
                                  "type":  "Galvanized Mod",
                                  "effect":  "+120% Critical Chance on Headshot while Aiming, +40% Crit Chance on Aimed Headshot Kill (Stacks up to 5x)",
                                  "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence).",
                                  "value":  "20 Platinum"
                              },
    "Rolling Guard":  {
                          "type":  "Arbitration Mod",
                          "effect":  "On Dodge: Become invulnerable for 3s and clear all status effects. 7s cooldown.",
                          "farm":  "Arbitration Honors Vendor in any Relay (Costs 20 Vitus Essence). Essential for Steel Path survivability.",
                          "value":  "15 - 20 Platinum"
                      },
    "Adaptation":  {
                       "type":  "Arbitration Mod",
                       "effect":  "When Damaged: Gain +10% resistance to that damage type for 20s. Stacks up to 90%.",
                       "farm":  "Arbitration Mission Rewards (Rotations A, B, C) or Arbitration Honors Vendor (20 Vitus Essence).",
                       "value":  "15 - 20 Platinum"
                   },
    "High Voltage":  {
                         "type":  "60/60 Elemental Mod",
                         "effect":  "+60% Electricity Damage, +60% Status Chance (Rifle)",
                         "farm":  "Baro Ki\u0027Teer (150 Ducats + 100,000 Credits) or Naeglar Hive Caches (Uranus, Rotation C - ultra low 0.5% rate).",
                         "value":  "30 - 40 Platinum"
                     },
    "Shell Shock":  {
                        "type":  "60/60 Elemental Mod",
                        "effect":  "+60% Electricity Damage, +60% Status Chance (Shotgun)",
                        "farm":  "Baro Ki\u0027Teer (150 Ducats + 100,000 Credits) or Naeglar Hive Caches (Uranus, Rotation C - 0.5% rate).",
                        "value":  "30 - 40 Platinum"
                    },
    "Jolt":  {
                 "type":  "60/60 Elemental Mod",
                 "effect":  "+60% Electricity Damage, +60% Status Chance (Pistol)",
                 "farm":  "Exclusively sold by Baro Ki\u0027Teer during random visits (150 Ducats + 100,000 Credits).",
                 "value":  "35 - 50 Platinum"
             },
    "Voltaic Strike":  {
                           "type":  "60/60 Elemental Mod",
                           "effect":  "+60% Electricity Damage, +60% Status Chance (Melee)",
                           "farm":  "Exclusively sold by Baro Ki\u0027Teer during random visits (150 Ducats + 100,000 Credits).",
                           "value":  "35 - 50 Platinum"
                       },
    "Rime Rounds":  {
                        "type":  "60/60 Elemental Mod",
                        "effect":  "+60% Cold Damage, +60% Status Chance (Rifle)",
                        "farm":  "Tier 2 \u0026 Tier 3 Spy Vaults (Successful hacking of all 3 vaults). Highly accessible in Ceres/Jupiter/Uranus/Pluto.",
                        "value":  "10 - 15 Platinum"
                    },
    "Frigid Blast":  {
                         "type":  "60/60 Elemental Mod",
                         "effect":  "+60% Cold Damage, +60% Status Chance (Shotgun)",
                         "farm":  "Tier 3 Spy Vaults (Successful hacking of all 3 vaults on Uranus, Neptune, Pluto, or Kuva Fortress).",
                         "value":  "10 - 15 Platinum"
                     },
    "Frostbite":  {
                      "type":  "60/60 Elemental Mod",
                      "effect":  "+60% Cold Damage, +60% Status Chance (Pistol)",
                      "farm":  "Tier 3 Spy Vaults (Successful hacking of all 3 vaults on Uranus, Neptune, Pluto, or Kuva Fortress).",
                      "value":  "10 - 15 Platinum"
                  },
    "Vicious Frost":  {
                          "type":  "60/60 Elemental Mod",
                          "effect":  "+60% Cold Damage, +60% Status Chance (Melee)",
                          "farm":  "Tier 2 Spy Vaults (Successful hacking of all 3 vaults on Ceres, Jupiter, Saturn, Lua, or Void).",
                          "value":  "10 - 15 Platinum"
                      },
    "Thermite Rounds":  {
                            "type":  "60/60 Elemental Mod",
                            "effect":  "+60% Heat Damage, +60% Status Chance (Rifle)",
                            "farm":  "Tier 3 Spy Vaults (Successful hacking of all 3 vaults on Uranus, Neptune, Pluto, or Kuva Fortress).",
                            "value":  "10 - 15 Platinum"
                        },
    "Scattering Inferno":  {
                               "type":  "60/60 Elemental Mod",
                               "effect":  "+60% Heat Damage, +60% Status Chance (Shotgun)",
                               "farm":  "Tier 3 Spy Vaults (Successful hacking of all 3 vaults on Uranus, Neptune, Pluto, or Kuva Fortress).",
                               "value":  "10 - 15 Platinum"
                           },
    "Scorch":  {
                   "type":  "60/60 Elemental Mod",
                   "effect":  "+60% Heat Damage, +60% Status Chance (Pistol)",
                   "farm":  "Tier 2 Spy Vaults (Successful hacking of all 3 vaults on Ceres, Jupiter, Saturn, Lua, or Void).",
                   "value":  "10 - 15 Platinum"
               },
    "Volcanic Edge":  {
                          "type":  "60/60 Elemental Mod",
                          "effect":  "+60% Heat Damage, +60% Status Chance (Melee)",
                          "farm":  "Tier 2 Spy Vaults (Successful hacking of all 3 vaults on Ceres, Jupiter, Saturn, Lua, or Void).",
                          "value":  "10 - 15 Platinum"
                      },
    "Malignant Force":  {
                            "type":  "60/60 Elemental Mod",
                            "effect":  "+60% Toxin Damage, +60% Status Chance (Rifle)",
                            "farm":  "Corrupted Vor (Spawns randomly in high-level Void missions: Mot, Aten, Marduk, Mithra). Guaranteed drop group.",
                            "value":  "5 - 8 Platinum"
                        },
    "Toxic Barrage":  {
                          "type":  "60/60 Elemental Mod",
                          "effect":  "+60% Toxin Damage, +60% Status Chance (Shotgun)",
                          "farm":  "Corrupted Vor (Spawns randomly in high-level Void missions: Mot, Aten, Marduk, Mithra). Guaranteed drop group.",
                          "value":  "5 - 8 Platinum"
                      },
    "Pistol Pestilence":  {
                              "type":  "60/60 Elemental Mod",
                              "effect":  "+60% Toxin Damage, +60% Status Chance (Pistol)",
                              "farm":  "Corrupted Vor (Spawns randomly in high-level Void missions: Mot, Aten, Marduk, Mithra). Guaranteed drop group.",
                              "value":  "5 - 8 Platinum"
                          },
    "Virulent Scourge":  {
                             "type":  "60/60 Elemental Mod",
                             "effect":  "+60% Toxin Damage, +60% Status Chance (Melee)",
                             "farm":  "Corrupted Vor (Spawns randomly in high-level Void missions: Mot, Aten, Marduk, Mithra). Guaranteed drop group.",
                             "value":  "5 - 8 Platinum"
                         },
    "Condition Overload":  {
                               "type":  "Ultra Rare Drop",
                               "effect":  "+80% Melee Damage for every status effect currently affecting the target",
                               "farm":  "Deimos Jugulus (Common in Cambion Drift) or Uranus Survival (Ophelia) enemies. Essential for melee.",
                               "value":  "10 - 15 Platinum"
                           },
    "Fatal Teleport": {
        "type": "Fatal Teleport (Ash)",
        "effect": "Teleport Augment: Teleport will perform a Finisher on the target, dealing 200% extra Damage. 50% Energy cost is refunded on a kill.",
        "farm": "Red Veil, Arbiters of Hexis",
        "value": "Essential"
    },
    "Repelling Bastille": {
        "type": "Repelling Bastille (Vauban)",
        "effect": "Bastille Augment: Enemies repelled within the Bastille have a 100% chance to be repelled every 4s. Vortex's duration is increased by 100% of its maximum duration for each additional Bastille thrown into it.",
        "farm": "Cephalon Suda, Perrin Sequence",
        "value": "Essential"
    },
    "Bite": {
                 "type":  "Ultra Rare Companion Mod",
                 "effect":  "+330% Critical Chance, +220% Critical Damage (Companion)",
                 "farm":  "Feral Kubrows (Earth - 0.05% drop rate) or Sabotage Caches. Extremely rare and valuable.",
                 "value":  "30 - 40 Platinum"
             },
    "Berserker Fury":  {
                           "type":  "Rare Melee Mod",
                           "effect":  "On Melee Kill: +35% Attack Speed for 10s (Stacks up to 2x)",
                           "farm":  "Corrupted Ancients (Void / Fissure missions). Top-tier melee attack speed boost.",
                           "value":  "10 - 15 Platinum"
                       },
    "Quick Thinking":  {
                           "type":  "Rare Warframe Mod",
                           "effect":  "Drains Remaining Energy to avoid death. +240% Efficiency.",
                           "farm":  "Corrupted Ancients (Void / Fissure missions). Used for high-efficiency caster setups.",
                           "value":  "10 - 15 Platinum"
                       },
    "Blood Rush":  {
                       "type":  "Bounty Mod",
                       "effect":  "+40% Critical Chance per Combo Multiplier (Melee)",
                       "farm":  "Cambion Drift (Deimos) Bounty Tier 2/3 rewards or Lua Spy Vaults. Absolute core melee scaling.",
                       "value":  "10 - 15 Platinum"
                   },
    "Weeping Wounds":  {
                           "type":  "Bounty Mod",
                           "effect":  "+40% Status Chance per Combo Multiplier (Melee)",
                           "farm":  "Cambion Drift (Deimos) Bounty Tier 2/3 rewards. Critical for hybrid combo builds.",
                           "value":  "10 - 15 Platinum"
                       },
    "Lethal Torrent":  {
                           "type":  "Nightmare Mod",
                           "effect":  "+60% Fire Rate, +60% Multishot (Pistol)",
                           "farm":  "Nightmare Mode missions (Alerts or node completion after clearing a planet). Very common in Tier 1/2.",
                           "value":  "5 - 8 Platinum"
                       },
    "Blaze":  {
                  "type":  "Nightmare Mod",
                  "effect":  "+60% Damage, +60% Heat Damage (Shotgun)",
                  "farm":  "Nightmare Mode missions (Tier 1 nodes on Earth/Venus/Mercury/Mars - extremely low 1% drop rate).",
                  "value":  "25 - 35 Platinum"
              },
    "Hunter Munitions":  {
                             "type":  "Bounty Mod",
                             "effect":  "+30% Chance to apply Slash status on Critical Hits (Rifle)",
                             "farm":  "Ghoul Purge Bounties on Cetus (Earth - common during event active). Fundamental for rifle slash meta.",
                             "value":  "10 - 15 Platinum"
                         },
    "Augur Secrets":  {
                          "type":  "Bounty Mod",
                          "effect":  "+24% Ability Strength, converts 120% of Energy spent into Shields",
                          "farm":  "Cetus (Earth) Bounty Tier 3/4 rewards or drops from Thumpers in Plains of Eidolon.",
                          "value":  "30 - 40 Platinum"
                      },
    "Gladiator Vice":  {
                           "type":  "Bounty Mod",
                           "effect":  "+30% Melee Attack Speed, +10% Crit Chance per Combo Multiplier",
                           "farm":  "Cetus (Earth) Bounty Tier 2/3 rewards or Plains of Eidolon Thumpers.",
                           "value":  "15 - 20 Platinum"
                       },
    "Brief Respite":  {
                          "type":  "Silver Grove Aura",
                          "effect":  "Converts 150% of Energy spent into Shields while shields are active",
                          "farm":  "Silver Grove Shrine (Earth). Requires Nightfall Apothic. Defeat the Knave Specter.",
                          "value":  "20 - 30 Platinum"
                      },
    "Growing Power":  {
                          "type":  "Silver Grove Aura",
                          "effect":  "Applying a Status Effect increases Ability Strength by +25% for 6s",
                          "farm":  "Silver Grove Shrine (Earth). Requires Nightfall Apothic. Defeat the Knave Specter. Highly requested aura.",
                          "value":  "20 - 30 Platinum"
                      },
    "Stand United":  {
                         "type":  "Silver Grove Aura",
                         "effect":  "+25.5% Armor for the whole squad",
                         "farm":  "Silver Grove Shrine (Earth). Requires Nightfall Apothic. Defeat the Knave Specter.",
                         "value":  "10 - 15 Platinum"
                     },
    "Pistol Amp":  {
                       "type":  "Silver Grove Aura",
                       "effect":  "+27% Pistol Damage for the whole squad",
                       "farm":  "Silver Grove Shrine (Earth). Requires Sunrise Apothic. Defeat the Feyarch Specter.",
                       "value":  "10 - 15 Platinum"
                   },
    "Primed Continuity":  {
                              "type":  "Primed Mod",
                              "effect":  "+55% Ability Duration",
                              "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 350 Ducats + 100,000 Credits. Max ranking costs ~40,000 Endo.",
                              "value":  "50 - 100 Platinum (Unranked)"
                          },
    "Primed Flow":  {
                        "type":  "Primed Mod",
                        "effect":  "+150% Max Energy",
                        "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 350 Ducats + 110,000 Credits. Critical for caster frames.",
                        "value":  "50 - 100 Platinum (Unranked)"
                    },
    "Primed Ravage":  {
                          "type":  "Primed Mod",
                          "effect":  "+110% Critical Damage (Shotgun)",
                          "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 280 Ducats + 100,000 Credits.",
                          "value":  "50 - 80 Platinum (Unranked)"
                      },
    "Primed Pistol Gambit":  {
                                 "type":  "Primed Mod",
                                 "effect":  "+187% Critical Chance (Pistol)",
                                 "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 280 Ducats + 220,000 Credits.",
                                 "value":  "50 - 90 Platinum (Unranked)"
                             },
    "Primed Target Cracker":  {
                                  "type":  "Primed Mod",
                                  "effect":  "+110% Critical Damage (Pistol)",
                                  "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 290 Ducats + 150,000 Credits.",
                                  "value":  "50 - 95 Platinum (Unranked)"
                              },
    "Primed Point Blank":  {
                               "type":  "Primed Mod",
                               "effect":  "+165% Damage (Shotgun)",
                               "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 110 Ducats + 100,000 Credits.",
                               "value":  "40 - 75 Platinum (Unranked)"
                           },
    "Primed Pressure Point":  {
                                  "type":  "Primed Mod",
                                  "effect":  "+165% Melee Damage",
                                  "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 385 Ducats + 300,000 Credits.",
                                  "value":  "50 - 100 Platinum (Unranked)"
                              },
    "Primed Animal Instinct":  {
                                   "type":  "Primed Mod",
                                   "effect":  "+55m Loot Radar, +33m Enemy Radar (Companion)",
                                   "farm":  "Baro Ki\u0027Teer (Void Trader). Costs 300 Ducats + 200,000 Credits. Incredible quality of life.",
                                   "value":  "50 - 100 Platinum (Unranked)"
                               },
    "Primed Sure Footed":  {
                               "type":  "Primed Mod (Untradeable)",
                               "effect":  "+100% Knockdown Resistance",
                               "farm":  "Exclusively awarded as a Daily Login milestone reward (Choice on Day 400, 600, 900). Cannot be traded.",
                               "value":  "Untradeable Milestone Reward"
                           },
    "Umbral Intensify":  {
                             "type":  "Umbral Mod (Untradeable)",
                             "effect":  "+44% Ability Strength (Scales up to +77% when slotted with other Umbral mods)",
                             "farm":  "Guaranteed award upon completing \u0027The Sacrifice\u0027 quest. Cannot be traded.",
                             "value":  "Quest Bound (Untradeable)"
                         },
    "Umbral Vitality":  {
                            "type":  "Umbral Mod (Untradeable)",
                            "effect":  "+770% Health (Scales up to +1330% when slotted with other Umbral mods)",
                            "farm":  "Guaranteed award upon completing \u0027The Sacrifice\u0027 quest. Cannot be traded.",
                            "value":  "Quest Bound (Untradeable)"
                        },
    "Umbral Fiber":  {
                         "type":  "Umbral Mod (Untradeable)",
                         "effect":  "+110% Armor (Scales up to +192.5% when slotted with other Umbral mods)",
                         "farm":  "Guaranteed award upon completing \u0027The Sacrifice\u0027 quest. Cannot be traded.",
                         "value":  "Quest Bound (Untradeable)"
                     },
    "Sacrificial Steel":  {
                              "type":  "Sacrificial Mod (Melee)",
                              "effect":  "+220% Critical Chance (Melee) (+440% on Heavy Attacks)",
                              "farm":  "Guaranteed award upon completing \u0027The Sacrifice\u0027 quest. Cannot be traded.",
                              "value":  "Quest Bound (Untradeable)"
                          },
    "Intensify":  {
                      "type":  "Essential Mod",
                      "effect":  "+30% Ability Strength",
                      "farm":  "Captain Vor boss drop, Tier 1/2 Survival, or Cetus/Fortuna low-tier Bounties. Highly common.",
                      "value":  "2 - 5 Platinum"
                  },
    "Stretch":  {
                    "type":  "Essential Mod",
                    "effect":  "+45% Ability Range",
                    "farm":  "Tier 1/2 Defense, Survival nodes, or generic Infested/Grineer drops.",
                    "value":  "2 - 5 Platinum"
                },
    "Flow":  {
                 "type":  "Essential Mod",
                 "effect":  "+150% Max Energy",
                 "farm":  "Tier 2/3 Survival nodes, or drops from standard Grineer Butcher enemies.",
                 "value":  "2 - 5 Platinum"
             },
    "Streamline":  {
                       "type":  "Essential Mod",
                       "effect":  "+30% Ability Efficiency",
                       "farm":  "Tier 2 Survival nodes, Void Containers, or Grineer Commanders.",
                       "value":  "2 - 5 Platinum"
                   },
    "Continuity":  {
                       "type":  "Essential Mod",
                       "effect":  "+30% Ability Duration",
                       "farm":  "General Sargas Ruk (Saturn Boss), Tier 1/2 Defense, or Orokin Void containers.",
                       "value":  "2 - 5 Platinum"
                   },
    "Vitality":  {
                     "type":  "Essential Mod",
                     "effect":  "+440% Health",
                     "farm":  "Extremely common drop from virtually any enemy in the solar system.",
                     "value":  "1 - 2 Platinum"
                 },
    "Steel Fiber":  {
                        "type":  "Essential Mod",
                        "effect":  "+110% Armor",
                        "farm":  "Extremely common drop from virtually any standard enemy.",
                        "value":  "1 - 2 Platinum"
                    },
    "Redirection":  {
                        "type":  "Essential Mod",
                        "effect":  "+440% Shields",
                        "farm":  "Extremely common drop from virtually any standard enemy.",
                        "value":  "1 - 2 Platinum"
                    },
    "Hornet Strike":  {
                          "type":  "Essential Mod (Pistol)",
                          "effect":  "+220% Damage (Pistol)",
                          "farm":  "Standard Grineer drops, Tier 1 Survival, or low-tier Bounties.",
                          "value":  "2 - 5 Platinum"
                      },
    "Serration":  {
                      "type":  "Essential Mod (Rifle)",
                      "effect":  "+165% Damage (Rifle)",
                      "farm":  "Standard Grineer/Corpus drops, Tier 1 Survival, or basic Bounties.",
                      "value":  "2 - 5 Platinum"
                  },
    "Barrel Diffusion":  {
                             "type":  "Essential Mod (Pistol)",
                             "effect":  "+120% Multishot (Pistol)",
                             "farm":  "Grineer Seekers, Tier 3 Defense, or Void Containers.",
                             "value":  "5 - 8 Platinum"
                         },
    "Split Chamber":  {
                          "type":  "Essential Mod (Rifle)",
                          "effect":  "+90% Multishot (Rifle)",
                          "farm":  "Tier 3 Survival, Void Containers, or general high-level drops.",
                          "value":  "5 - 8 Platinum"
                      },
    "Steel Charge":  {
                         "type":  "Aura Mod",
                         "effect":  "+60% Melee Damage, +18 Mod Capacity",
                         "farm":  "Nightwave Cred Offerings store (costs 20 Nightwave Creds). High capacity boost.",
                         "value":  "10 - 15 Platinum"
                     },
    "Corrosive Projection":  {
                                 "type":  "Aura Mod",
                                 "effect":  "-18% Enemy Armor for the whole squad",
                                 "farm":  "Nightwave Cred Offerings store (costs 20 Nightwave Creds). Essential armor strip.",
                                 "value":  "10 - 15 Platinum"
                             },
    "Rejuvenation":  {
                         "type":  "Aura Mod",
                         "effect":  "+3 Health Regen/s for the whole squad",
                         "farm":  "Nightwave Cred Offerings store (costs 20 Nightwave Creds).",
                         "value":  "5 - 10 Platinum"
                     },
    "Energy Siphon":  {
                          "type":  "Aura Mod",
                          "effect":  "+0.6 Energy Regen/s for the whole squad",
                          "farm":  "Nightwave Cred Offerings store (costs 20 Nightwave Creds). Great for casters.",
                          "value":  "10 - 15 Platinum"
                      },
    "Cunning Drift":  {
                          "type":  "Lua Drift Mod",
                          "effect":  "+15% Ability Range, +12% Slide, -30% Friction",
                          "farm":  "Lua - Hall of Ascension (Cunning Test). Puzzle room completion.",
                          "value":  "10 - 15 Platinum"
                      },
    "Power Drift":  {
                        "type":  "Lua Drift Mod",
                        "effect":  "+15% Ability Strength, +30% Knockdown Resistance",
                        "farm":  "Lua - Hall of Ascension (Power Test). Puzzle room completion.",
                        "value":  "10 - 15 Platinum"
                    },
    "Coaction Drift":  {
                           "type":  "Lua Drift Mod",
                           "effect":  "+15% Aura Strength, +15% Aura Effectiveness",
                           "farm":  "Lua - Hall of Ascension (Cooperation Test). Puzzle room completion.",
                           "value":  "10 - 15 Platinum"
                       },
    "Abating Link":  {
                         "type":  "Warframe Mod",
                         "effect":  "Link Augment: Reduces Armor Rating by 60% on enemies targeted by Link.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Abundant Mutation":  {
                              "type":  "Warframe Mod",
                              "effect":  "Passive Augment: Nidus gains an additional 200 max stacks of Mutation. Undying has a 30s cooldown.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Accelerated Blast":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+60% Fire Rate, +60% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Accelerated Deflection":  {
                                   "type":  "Companion Mod",
                                   "effect":  "+90% Shield Recharge, -45% Shield Recharge Delay",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Accelerated Isotope":  {
                                "type":  "Secondary Mod",
                                "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +40% Fire Rate",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Accumulating Whipclaw":  {
                                  "type":  "Warframe Mod",
                                  "effect":  "Whipclaw Augment: Hitting 3 enemies will grant a 35% stacking Damage Bonus to subsequent Whipclaws. Bonus will decay after 10s.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Acid Shells":  {
                        "type":  "Shotgun Mod",
                        "effect":  "Enemies explode on death, dealing 450 \u003cDT_CORROSIVE_COLOR\u003eCorrosive Damage (+45% Enemy Max Health) in a 15m radius.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Acidic Spittle":  {
                           "type":  "Companion Mod",
                           "effect":  "Every \u003cLOWER_IS_BETTER\u003e5s spit acidic tar at an enemy within 30m, blinding them for 12s and dealing 120 \u003cDT_CORROSIVE_COLOR\u003eCorrosive Damage.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Adept Surge":  {
                        "type":  "Warframe Mod",
                        "effect":  "+10% Mobility, -25 Health",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Adhesive Blast":  {
                           "type":  "Primary Mod",
                           "effect":  "Grenades have 100% chance to stick to surfaces.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Adrenaline Boost":  {
                             "type":  "Warframe Mod",
                             "effect":  "+50% Energy, -20% Health",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Aegis Gale":  {
                       "type":  "Warframe Mod",
                       "effect":  "Aegis Storm Augment: Balefire has an Alternate Fire during Aegis Storm. The blast deals 15% of Hildryn\u0027s Max Shield as additional damage.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Aerial Ace":  {
                       "type":  "Primary Mod",
                       "effect":  "On Kill:\\nRefresh Double Jump up to 6x while Airborne.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Aerial Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "Airborne kills decrease Companion Recovery Time by 3s and 9s for headshot kills. Companion creates a field of cold that increases up to 35% and 10m radius while Warframe is airborne, lasting for 3s after returning to ground.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Aerial Prospectus":  {
                              "type":  "Companion Mod",
                              "effect":  "Launches a beacon at an enemy within 27m that calls down an Orbital Strike dealing 1200 \u003cDT_EXPLOSION_COLOR\u003eBlast Damage in a 7m radius.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Aero Agility":  {
                         "type":  "Primary Mod",
                         "effect":  "100% Reload Speed while Aim Gliding",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Aero Periphery":  {
                           "type":  "Primary Mod",
                           "effect":  "-50% Zoom while Aim Gliding",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Aero Vantage":  {
                         "type":  "Warframe Mod",
                         "effect":  "-100% Gravity while Aim Gliding",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Aerodynamic":  {
                        "type":  "Warframe Mod",
                        "effect":  "Squad takes 24% reduced damage while airborne, gains +6s Aim Glide and +12s Wall Latch",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Affinity Spike":  {
                           "type":  "Focus Way",
                           "effect":  "Kills from Melee Attacks grant 45% more Melee Affinity.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Afterburn":  {
                      "type":  "Warframe Mod",
                      "effect":  "Spectral Scream Augment: Upon deactivation, Chroma will launch an elemental projectile dealing 100 Damage for each second the ability was active, to a maximum of 500 Damage.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Afterburner":  {
                        "type":  "Archwing Mod",
                        "effect":  "Core Vent Augment: \u003cDT_EXPLOSION_COLOR\u003eBlast Damage ignites exhaust fumes for 12s. Enemies passing through the flames take 500 \u003cDT_FIRE_COLOR\u003eHeat Damage.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Agile Aim":  {
                      "type":  "Primary Mod",
                      "effect":  "+20% Movement Speed when Aiming",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Agility Drift":  {
                          "type":  "Warframe Mod",
                          "effect":  "Reduced damage by 12% while airborne, \u003cLOWER_IS_BETTER\u003e-6% Enemy Accuracy when targeting Warframe",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Air Martial":  {
                        "type":  "Melee Mod",
                        "effect":  "With Melee equipped, lock onto targets within +5m while Airborne, -100% Channeling Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Air Recon":  {
                      "type":  "Secondary Mod",
                      "effect":  "-60% Zoom while Aim Gliding",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Air Thrusters":  {
                          "type":  "Warframe Mod",
                          "effect":  "+100% Slide Boost when Airborne, -20% Mobility",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Air Time":  {
                     "type":  "K-Drive Mod",
                     "effect":  "-20% Gravity while Falling Down",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Airburst Rounds":  {
                            "type":  "Warframe Mod",
                            "effect":  "Airburst Augment: Each enemy hit by Airburst increases secondary damage by 40% for 14s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Amalgam Argonak Metal Auger":  {
                                        "type":  "Primary Mod",
                                        "effect":  "+3 Punch Through, Damage from Daggers reduces Armor by 6.\\n\u003cLINE_SEPARATOR\u003e\\nEnemies are revealed by Punch Through.",
                                        "farm":  "Various Sources (Check Codex Database)",
                                        "value":  "Standard"
                                    },
    "Amalgam Barrel Diffusion":  {
                                     "type":  "Secondary Mod",
                                     "effect":  "+110% Multishot, +60% Dodge Speed",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Amalgam Daikyu Target Acquired":  {
                                           "type":  "Primary Mod",
                                           "effect":  "+75% to Headshot Multiplier, +3% Life Steal on Nikanas, \u003cLINE_SEPARATOR\u003e\\n60% chance to pickup used arrows.",
                                           "farm":  "Various Sources (Check Codex Database)",
                                           "value":  "Standard"
                                       },
    "Amalgam Furax Body Count":  {
                                     "type":  "Melee Mod",
                                     "effect":  "+15s Combo Duration\\n+45% Fire Rate for Secondary Weapons\\n\u003cLINE_SEPARATOR\u003e\\nMelee kills \u003cDT_EXPLOSION_COLOR\u003eBlast and stagger enemies in 15m",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Amalgam Javlok Magazine Warp":  {
                                         "type":  "Primary Mod",
                                         "effect":  "+45% Magazine Capacity, +100% Combo Count Chance while Blocking with a Shield",
                                         "farm":  "Various Sources (Check Codex Database)",
                                         "value":  "Standard"
                                     },
    "Amalgam Organ Shatter":  {
                                  "type":  "Melee Mod",
                                  "effect":  "+85% Critical Damage, +60% Heavy Attack Wind Up Speed",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Amalgam Ripkas True Steel":  {
                                      "type":  "Melee Mod",
                                      "effect":  "+187% Critical Chance (x2 for Heavy Attacks), +20% Reload Speed on Shotguns, \u003cLINE_SEPARATOR\u003e\\n+100% Gore Chance",
                                      "farm":  "Various Sources (Check Codex Database)",
                                      "value":  "Standard"
                                  },
    "Amalgam Serration":  {
                              "type":  "Primary Mod",
                              "effect":  "+155% Damage, +25% Sprint Speed",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Amalgam Shotgun Barrage":  {
                                    "type":  "Shotgun Mod",
                                    "effect":  "+85% Fire Rate, +45% Revive Speed",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Amanata Pressure":  {
                             "type":  "Melee Mod",
                             "effect":  "When Combo Multiplier reaches 8x, Heavy attacks apply a random Status Effect to enemies hit.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Amar\u0027s Anguish":  {
                                "type":  "Warframe Mod",
                                "effect":  "+15% to Parkour Velocity, +15% Sprint Speed",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Amar\u0027s Contempt":  {
                                 "type":  "Melee Mod",
                                 "effect":  "+90% Melee Damage, +30% \u003cDT_SLASH_COLOR\u003eSlash",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Amar\u0027s Hatred":  {
                               "type":  "Warframe Mod",
                               "effect":  "+25% Armor, +15% Ability Strength",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Amarsetmod":  {
                       "type":  "Mod Set Mod",
                       "effect":  "Unknown effect",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Ambush":  {
                   "type":  "Warframe Mod",
                   "effect":  "When Ghost invisibility is broken, Shade\u0027s owner is granted +240% Weapon Damage for 3s.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Ambush Optics":  {
                          "type":  "Primary Mod",
                          "effect":  "-50% Zoom",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Ammo Case":  {
                      "type":  "Companion Mod",
                      "effect":  "Increases Ammo Capacity by 25% and converts Ammo Pickups into ammo for equipped weapons after 2s.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Ammo Chain":  {
                       "type":  "Arch-Gun Mod",
                       "effect":  "+100% Ammo Maximum",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Ammo Drum":  {
                      "type":  "Primary Mod",
                      "effect":  "+10% Ammo Maximum",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Ammo Stock":  {
                       "type":  "Shotgun Mod",
                       "effect":  "+20% Magazine Capacity",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Amp Spike":  {
                      "type":  "Focus Way",
                      "effect":  "Transfer to Operator with 8x Combo Multiplier to increase AMP damage by 100% for 40s.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Anabolic Pollination":  {
                                 "type":  "Companion Mod",
                                 "effect":  "Release a cloud of spores that persists for 10s increasing \u003cDT_POISON_COLOR\u003eToxin Damage by +100% for 15s.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Anchored Glide":  {
                           "type":  "Warframe Mod",
                           "effect":  "Disable Zephyr\u0027s reduced airborne gravity. Increase Ability Strength by 15%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Anemic Agility":  {
                           "type":  "Secondary Mod",
                           "effect":  "+90% Fire Rate, -15% Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Animal Instinct":  {
                            "type":  "Companion Mod",
                            "effect":  "+30m Loot Radar, +18m Enemy Radar",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Anti-Flak Plating":  {
                              "type":  "Warframe Mod",
                              "effect":  "+20 \u003cDT_EXPLOSION_COLOR\u003eBlast Resistance, -10% Mobility",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Anti-Grav Array":  {
                            "type":  "Companion Mod",
                            "effect":  "Increase height of owner\u0027s jumps by +40%.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Anti-Grav Grenade":  {
                              "type":  "Companion Mod",
                              "effect":  "A grenade that levitates enemies in a 6m. After 6s afflicted enemies come crashing down, causing  \u003cDT_IMPACT_COLOR\u003eImpact Damage equal to 80% of the damage taken while floating.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Anti-V":  {
                   "type":  "Parazon Mod",
                   "effect":  "Digital extremists stand no chance when you have Anti-V on your side",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Anticipation":  {
                         "type":  "Warframe Mod",
                         "effect":  "Immune to Knockdown for an additional +4s after being knocked down., Immune to Stagger for an additional +4s after being Staggered.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Antimatter Absorb":  {
                              "type":  "Warframe Mod",
                              "effect":  "Antimatter Drop Augment: Absorbs enemy bullets within 5m, increasing the power of the explosion from Nova’s particle of antimatter.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Antimatter Mine":  {
                            "type":  "Warframe Mod",
                            "effect":  "Antimatter Drop Augment: Creates a fully charged stationary orb that explodes after 6s or within enemy proximity.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Antitoxin":  {
                      "type":  "Warframe Mod",
                      "effect":  "+45% \u003cDT_POISON_COLOR\u003eToxin Resistance",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Apex Predator":  {
                          "type":  "Primary Mod",
                          "effect":  "On Hit:",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Arc Coil":  {
                     "type":  "Companion Mod",
                     "effect":  "Sentinel will zap up to 7 enemies within 10m, dealing 100 \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage with a 10% Status Chance.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Archgun Ace":  {
                        "type":  "Arch-Gun Mod",
                        "effect":  "On Headshot Kill:\\n+50% Fire/Charge Rate\\n+100% Reload Speed for 9s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Archgun Riven Mod":  {
                              "type":  "Arch-Gun Riven Mod",
                              "effect":  "Unknown effect",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Archon Continuity":  {
                              "type":  "Warframe Mod",
                              "effect":  "+55% Ability Duration, Abilities that inflict a \u003cDT_POISON_COLOR\u003eToxin status effect will also apply a \u003cDT_CORROSIVE_COLOR\u003eCorrosive status effect.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Archon Flow":  {
                        "type":  "Warframe Mod",
                        "effect":  "+185% Energy Max, Enemies killed by \u003cDT_FREEZE_COLOR\u003eCold Abilities have 10% chance to drop an Energy Orb. Cooldown: 10s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Archon Intensify":  {
                             "type":  "Warframe Mod",
                             "effect":  "+30% Ability Strength, Restoring health with abilities grants +30% Ability Strength for 10s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Archon Stretch":  {
                           "type":  "Warframe Mod",
                           "effect":  "+45% Ability Range, Abilities that deal \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage restore +2 Energy/s over 5s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Archon Vitality":  {
                            "type":  "Warframe Mod",
                            "effect":  "+100% Health, Status Effects from abilities that deal \u003cDT_FIRE_COLOR\u003eHeat Damage will be applied twice.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Argent Scourge":  {
                           "type":  "Stance Mod",
                           "effect":  "Fighting form devised for Conclave.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Argon Plating":  {
                          "type":  "Archwing Mod",
                          "effect":  "+100% Armor",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Argon Scope":  {
                        "type":  "Primary Mod",
                        "effect":  "On Headshot:\\n+135% Critical Chance when Aiming for 9s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Armored Acrobatics":  {
                               "type":  "Warframe Mod",
                               "effect":  "+20% Damage Resistance during Bullet Jump, -10% Mobility",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Armored Agility":  {
                            "type":  "Warframe Mod",
                            "effect":  "+15% Sprint Speed, +40% Armor",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Armored Evade":  {
                          "type":  "Warframe Mod",
                          "effect":  "+40% Damage Resistance while Dodging, -10% Mobility",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Armored Recovery":  {
                             "type":  "Warframe Mod",
                             "effect":  "+50% Damage Resistance when knocked down, -20% Slide",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Arrow Mutation":  {
                           "type":  "Primary Mod",
                           "effect":  "Converts Secondary ammo pickups to 92% of Ammo Pick Up.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Artillery Cheap Shot":  {
                                 "type":  "Plexus Mod",
                                 "effect":  "Forward Artillery has a +90% chance to not consume Dome Charges",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Ashensetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Assassin Posture":  {
                             "type":  "Posture Mod",
                             "effect":  "The companion will prioritize Eximus and other high-ranking enemies. +300% Overguard Damage",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Assault Mode":  {
                         "type":  "Companion Mod",
                         "effect":  "Sentinel will attack the first visible enemy within 30m.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Assimilate":  {
                       "type":  "Warframe Mod",
                       "effect":  "Absorb Augment: Nyx can use weapons during Absorb and its duration is infinite, but it consumes \u003cLOWER_IS_BETTER\u003e6.5 \u003cENERGY\u003e Energy/s and its area of effect is halved.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Astral Autopsy":  {
                           "type":  "Arch-Melee Mod",
                           "effect":  "Fatal strikes against an enemy also perform a Codex Scan. Scans require an equipped Codex Scanner and an available charge.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Astral Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "Damage dealt by Operator or Drifter grants 60% damage and 30% \u003cDT_RADIANT_COLOR\u003eVoid Damage to your Companion\u0027s attacks for 10s. Companion Void Damage adds +30% Amp and Energy Efficiency to Operator or Drifter for 5s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Astral Cut":  {
                       "type":  "Focus Way",
                       "effect":  "Tauron Strike slash size is increased by 80%.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Astral Slash":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+90% \u003cDT_SLASH_COLOR\u003eSlash",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Astral Twilight":  {
                            "type":  "Stance Mod",
                            "effect":  "Orbiting slashes and lashing strikes.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Atlantis Vulcan":  {
                            "type":  "Stance Mod",
                            "effect":  "Rapid strikes, deceptive movements.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Atomic Fallout":  {
                           "type":  "Shotgun Mod",
                           "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +40% Magazine Capacity",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Auger Strike":  {
                         "type":  "Melee Mod",
                         "effect":  "+120% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Augmented Sonar":  {
                            "type":  "Warframe Mod",
                            "effect":  "Sonar Augment: Affected enemies also become visible through walls for 10s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Augur Accord":  {
                         "type":  "Warframe Mod",
                         "effect":  "+70% Shield Capacity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Augur Message":  {
                          "type":  "Warframe Mod",
                          "effect":  "+24% Ability Duration",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Augur Pact":  {
                       "type":  "Secondary Mod",
                       "effect":  "+90% Damage",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Augur Reach":  {
                        "type":  "Warframe Mod",
                        "effect":  "+30% Ability Range",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Augur Seeker":  {
                         "type":  "Secondary Mod",
                         "effect":  "+90% Status Duration",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Augursetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Auto Breach":  {
                        "type":  "Parazon Mod",
                        "effect":  "+30% chance to auto complete Hacking",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Auto Omni":  {
                      "type":  "Companion Mod",
                      "effect":  "Nautilus has 100% chance to repair nearby Railjack hull damages and extinguishes fires on Railjack. Cooldown: 20s.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Automatic Trigger":  {
                              "type":  "Arch-Gun Mod",
                              "effect":  "+60% Fire Rate",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Auxiliary Power":  {
                            "type":  "Archwing Mod",
                            "effect":  "+100% Energy Max",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Avenging Truth":  {
                           "type":  "Melee Mod",
                           "effect":  "Blocking absorbs 50% of incoming damage, stored as Extra Damage for the next charge attack., +1 \u0027Truth\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Aviator":  {
                    "type":  "Warframe Mod",
                    "effect":  "Reduced damage by 40% while airborne",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Axios Javelineers":  {
                              "type":  "Warframe Mod",
                              "effect":  "Axios Javelin Augment: A pair of Styanax Specters spawn to throw javelins, creating vortexes on impact. Impale an enemy to increase vortex duration by 5s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Balanced Posture":  {
                             "type":  "Posture Mod",
                             "effect":  "The companion acts freely as they see fit. Staggers enemies within 2m while moving.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Balefire Surge":  {
                           "type":  "Warframe Mod",
                           "effect":  "Balefire Augment: Fully charged direct hits restore 250 Shield to Hildryn. Impact with Nullifier Shields will destroy them and restore 750 Shield.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Ballista Measure":  {
                             "type":  "Arch-Gun Mod",
                             "effect":  "+20% Range",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Ballistic Bullseye":  {
                               "type":  "Warframe Mod",
                               "effect":  "Ballistic Battery Augment: The shot gains a +50% Final Critical Chance bonus, based on the amount charged.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Bane Of Corpus":  {
                           "type":  "Primary Mod",
                           "effect":  "x1.1 Damage to Corpus",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Bane Of Grineer":  {
                            "type":  "Primary Mod",
                            "effect":  "x1.1 Damage to Grineer",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Bane Of Infested":  {
                             "type":  "Primary Mod",
                             "effect":  "x1.1 Damage to Infested",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Bane Of Orokin":  {
                           "type":  "Primary Mod",
                           "effect":  "x1.3 Damage to Orokin",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Bane Of The Murmur":  {
                               "type":  "Primary Mod",
                               "effect":  "x1.3 Damage to Murmur",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Basilisk Gaze":  {
                          "type":  "Focus Way",
                          "effect":  "Increases Void Blast radius by 60%.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Basilisk Scales":  {
                            "type":  "Focus Way",
                            "effect":  "Increases Operator Armor by 200%.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Battering Maneuver":  {
                               "type":  "Warframe Mod",
                               "effect":  "+18% to Parkour Velocity, +18% Aim Glide/Wall Latch Duration, +60% \u003cDT_IMPACT_COLOR\u003eImpact on Bullet Jump",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Battle Forge":  {
                         "type":  "Plexus Mod",
                         "effect":  "Reduce Forge Cooldown by 120s\\nCooldown: 480s",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Battle Stations":  {
                            "type":  "Plexus Mod",
                            "effect":  "Boost Turret Damage by 75% for 30s\\nCooldown: 240s",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Beguiling Lantern":  {
                              "type":  "Warframe Mod",
                              "effect":  "Lantern Augment: Attracted enemies take 100% more Weapon Damage.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Bell Ringer":  {
                        "type":  "Companion Mod",
                        "effect":  "Melee attacks knock down enemies and apply +4 \u003cDT_IMPACT_COLOR\u003eImpact Status Effects",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Bhisaj-Bal":  {
                       "type":  "Primary Mod",
                       "effect":  "Restore 300 Health for every 3 Status effects., +90% Status Chance",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Biotic Rounds":  {
                          "type":  "Primary Mod",
                          "effect":  "On Weak Point Kill:\\n+150% \u003cDT_VIRAL_COLOR\u003eViral and \u003cDT_MAGNETIC_COLOR\u003eMagnetic Damage and Status Chance for 15s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Biting Frost":  {
                         "type":  "Warframe Mod",
                         "effect":  "Frost gains +|CHANCE|% Critical Chance and +|DAMAGE|% Critical Damage against frozen enemies.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Biting Piranha":  {
                           "type":  "Stance Mod",
                           "effect":  "Fighting form devised for Conclave.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Blackout Pulse":  {
                           "type":  "Plexus Mod",
                           "effect":  "Electro-Magnetic Pulse that damages enemies and disables them temporarily.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Blade Of Truth":  {
                           "type":  "Melee Mod",
                           "effect":  "+100% Melee Damage, +1 \u0027Truth\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Bladed Rounds":  {
                          "type":  "Primary Mod",
                          "effect":  "On Kill:\\n+120% Critical Damage when Aiming for 9s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Blast Shield":  {
                         "type":  "Companion Mod",
                         "effect":  "Overshields increased by +3000. Leap at an enemy within 10m dealing 30 \u003cDT_IMPACT_COLOR\u003eImpact Damage and knocking down other enemies within 5m and resets Overshields.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Blazing Dash":  {
                         "type":  "Focus Way",
                         "effect":  "Void Sling leaves a trail of fire that deals 1000 Damage/s over 14s. Void Sling will now stun enemies instead of displacing them.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Blazing Pillage":  {
                            "type":  "Warframe Mod",
                            "effect":  "Pillage Augment: Enemies affected by Haven will be set ablaze for 200 \u003cDT_FIRE_COLOR\u003eHeat Damage and restore 50 additional \u003cSHIELD\u003eShields to Hildryn.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Blazing Steel":  {
                          "type":  "Arch-Melee Mod",
                          "effect":  "+120% \u003cDT_FIRE_COLOR\u003eHeat",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Bleeding Edge":  {
                          "type":  "Arch-Melee Mod",
                          "effect":  "+110% Critical Damage",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Bleeding Willow":  {
                            "type":  "Stance Mod",
                            "effect":  "A blend of strong and rapid strikes with leaping combos.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Blending Talons":  {
                            "type":  "Warframe Mod",
                            "effect":  "Seeking Talons Augment: Tap to perform a 9m AoE around Garuda. Garuda\u0027s Talons gain 100% additional Combo Count Chance when hitting targets affected by \u003cDT_SLASH_COLOR\u003eSlash Status.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Blind Justice":  {
                          "type":  "Stance Mod",
                          "effect":  "Reverse grip style emphasizing slashing and impaling strikes.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Blind Shot":  {
                       "type":  "Secondary Mod",
                       "effect":  "+40% Projectile Speed, -4% Accuracy",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Blinding Reave":  {
                           "type":  "Warframe Mod",
                           "effect":  "Reave Augment: Reave gains +40% range and enemies are blinded by its fog for 10s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Blood For Ammo":  {
                           "type":  "Parazon Mod",
                           "effect":  "Mercy Kill refills Primary and Secondary Magazine by 100%",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Blood For Energy":  {
                             "type":  "Parazon Mod",
                             "effect":  "50% chance to drop an Energy Orb on Mercy",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Blood For Life":  {
                           "type":  "Parazon Mod",
                           "effect":  "100% chance to drop a Health Orb on Mercy",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Blood Forge":  {
                        "type":  "Warframe Mod",
                        "effect":  "Bloodletting Augment: Garuda\u0027s equipped weapon is reloaded up to 100%.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Bloodthirst":  {
                        "type":  "Companion Mod",
                        "effect":  "100 health stolen each hit per stack of \u003cDT_SLASH_COLOR\u003eSlash.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Blunderbuss":  {
                        "type":  "Shotgun Mod",
                        "effect":  "+40% Critical Chance",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Body Count":  {
                       "type":  "Melee Mod",
                       "effect":  "+12s Combo Duration",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Bomb The Landin\u0027":  {
                                  "type":  "K-Drive Mod",
                                  "effect":  "Tap and hold Grind in the air to execute a 20m radius Slam Shockwave that deals 300 damage.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Bonebladesetmod":  {
                            "type":  "Mod Set Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Bore":  {
                 "type":  "Secondary Mod",
                 "effect":  "+120% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Boreal\u0027s Anguish":  {
                                  "type":  "Warframe Mod",
                                  "effect":  "-75% Gravity while Aim Gliding, +60% Aim Glide/Wall Latch Duration",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Boreal\u0027s Contempt":  {
                                   "type":  "Melee Mod",
                                   "effect":  "+90% Melee Damage, +60% Status Damage",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Boreal\u0027s Hatred":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "+65% Shield Capacity, +15% Ability Efficiency",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Borealsetmod":  {
                         "type":  "Mod Set Mod",
                         "effect":  "Unknown effect",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Botanist":  {
                     "type":  "Companion Mod",
                     "effect":  "Oxylus Sentinel will automatically pick any plants within 50m over \u003cLOWER_IS_BETTER\u003e2.0s.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Boundless Energy":  {
                             "type":  "Focus Way",
                             "effect":  "Ability strength, duration, and cast speed granted by spectral pages increased by 40%.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Bounty Hunter":  {
                          "type":  "Shotgun Mod",
                          "effect":  "On Hit:",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Brain Storm":  {
                        "type":  "Primary Mod",
                        "effect":  "On Headshot:\\n+100% Ammo Efficiency for 0.5s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Breach Loader":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+120% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Breach Quanta":  {
                          "type":  "Plexus Mod",
                          "effect":  "Temporarily stall Hull Breach for 55s\\nCooldown: 300s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Bright Purity":  {
                          "type":  "Melee Mod",
                          "effect":  "+100% Melee Damage, +1 \u0027Purity\u0027",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Brilliant Insight":  {
                              "type":  "Focus Way",
                              "effect":  "Spectral pages also fire off beams that blind enemies within 16m.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Broad Eye":  {
                      "type":  "Shotgun Mod",
                      "effect":  "-60% Zoom while Aim Gliding",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Brutal Tide":  {
                        "type":  "Stance Mod",
                        "effect":  "Round-house attacks and leaping fists.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Brute Conditioning":  {
                               "type":  "Companion Mod",
                               "effect":  "+385% Melee Damage, Convert all base Physical Damage to \u003cDT_IMPACT_COLOR\u003eImpact Damage",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Bullet Dance":  {
                         "type":  "Stance Mod",
                         "effect":  "Sharpened blades dance with gunfire.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Burdened Magazine":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+60% Magazine Capacity, -18% Reload Speed",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Burning Claws":  {
                          "type":  "Companion Mod",
                          "effect":  "+330% \u003cDT_FIRE_COLOR\u003eHeat, +330% Status Chance, Converts all elemental damage from these claws to \u003cDT_FIRE_COLOR\u003eHeat damage",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Burning Hate":  {
                         "type":  "Melee Mod",
                         "effect":  "When Hate damages enemies inflicted with \u003cDT_FIRE_COLOR\u003eHeat Status, they become vulnerable to 120% more Status Damage.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Burning Wasp":  {
                         "type":  "Stance Mod",
                         "effect":  "Chaining combos.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Bursting Mass":  {
                          "type":  "Primary Mod",
                          "effect":  "The infested mass accumulates 200% of the damage that goes through it and deals it in 15m radius when it expires. Secondary fire will manually detonate an existing mass.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Butcher\u0027s Revelry":  {
                                   "type":  "Stance Mod",
                                   "effect":  "Rip and rend with this Assault Saw stance.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Buzz Kill":  {
                      "type":  "Melee Mod",
                      "effect":  "+120% \u003cDT_SLASH_COLOR\u003eSlash",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Byteryte":  {
                     "type":  "Parazon Mod",
                     "effect":  "Keeps your bytes tight and your bits fit",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Calculated Redirection":  {
                                   "type":  "Companion Mod",
                                   "effect":  "+250% Shield Capacity",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Calculated Shot":  {
                            "type":  "Companion Mod",
                            "effect":  "Sentinel charges a powerful shot and fires at the first enemy within 70m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Calculated Spring":  {
                              "type":  "Warframe Mod",
                              "effect":  "-10% Mobility, +25% Health",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Calculated Victory":  {
                               "type":  "Secondary Mod",
                               "effect":  "On Kill:\\n-100% Shield Recharge Delay for 10s, -25% from Health Orbs",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Calm \u0026 Frenzy":  {
                               "type":  "Warframe Mod",
                               "effect":  "Rest \u0026 Rage Augment: Killing an affected enemy causes the effect to spread to enemies within 5m for 100% of the remaining duration.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Cannonade":  {
                      "type":  "Secondary Mod",
                      "effect":  "+30% Chance to Explode (Use with Caution)",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Capacitance":  {
                        "type":  "Warframe Mod",
                        "effect":  "Discharge Augment: Converts 3% of Damage dealt into Shields split between Volt and Squadmates.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Carnis Carapace":  {
                            "type":  "Warframe Mod",
                            "effect":  "+55% Armor, +20% Health",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Carnis Mandible":  {
                            "type":  "Melee Mod",
                            "effect":  "+90% \u003cDT_SLASH_COLOR\u003eSlash, +60% Status Chance",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Carnis Stinger":  {
                           "type":  "Secondary Mod",
                           "effect":  "+90% \u003cDT_SLASH_COLOR\u003eSlash, +60% Status Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Carving Mantis":  {
                           "type":  "Stance Mod",
                           "effect":  "Strong slashes and quick stabs that keeps momentum forward.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cat\u0027s Eye":  {
                           "type":  "Companion Mod",
                           "effect":  "Adarza Kavat grants 60% increased critical chance for 10s to allies within 25m every \u003cLOWER_IS_BETTER\u003e20s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cataclysmic Continuum":  {
                                  "type":  "Warframe Mod",
                                  "effect":  "Cataclysm Augment: Duration increased by 1s for each enemy killed.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Cataclysmic Gate":  {
                             "type":  "Warframe Mod",
                             "effect":  "Sol Gate Augment : Wisp and 2 spectral images cast a single blast of Sol Gate, leaving an area with 500 \u003cDT_FIRE_COLOR\u003eHeat Damage / Second with guaranteed Heat and Radiation Status Effects for 10s. ",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Catalyzer Link":  {
                           "type":  "Primary Mod",
                           "effect":  "On Ability Cast:\\n+60% Status Chance when Aiming for 9s",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Catalyzing Shields":  {
                               "type":  "Warframe Mod",
                               "effect":  "x0.20 Max Shield Capacity, 1.33s Full Shield Gate immunity duration",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Catapult":  {
                     "type":  "Warframe Mod",
                     "effect":  "Pulverize Augment: \u003cSECONDARY_FIRE\u003e to launch Grendel in your aim direction. Costs \u003cLOWER_IS_BETTER\u003e5\u003cENERGY\u003e. Crouch to slow down.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Cathode Current":  {
                            "type":  "Warframe Mod",
                            "effect":  "Cathode Grace Augment: Eliminating an enemy while Cathode Grace is active will release an additional discharge from Rotorswell with 200% Damage and extend its duration by the same amount.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Caustic Strike":  {
                           "type":  "Focus Way",
                           "effect":  "Second Ability launches an energy bomb that explodes with a 8m radius, stripping 100% of enemy armor. Tap \u003cACTIVATE_ABILITY_1\u003e again to detonate in-flight.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cautious Shot":  {
                          "type":  "Primary Mod",
                          "effect":  "+100% chance to reduce the Stagger effect from self-imposed Radial Attacks",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Celestial Nightfall":  {
                                "type":  "Stance Mod",
                                "effect":  "Fighting form devised for Conclave.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Celestial Stomp":  {
                            "type":  "Warframe Mod",
                            "effect":  "Celestial Twin Augment: Hold to command the twin to perform a slam attack suspending enemies in the air within 20m for 25 Energy.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Chained Sling":  {
                          "type":  "Focus Way",
                          "effect":  "50% Energy Efficiency on Consecutive Void Slings.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Champion\u0027s Blessing":  {
                                     "type":  "Warframe Mod",
                                     "effect":  "Blessing Augment: Gain Primary and Secondary Critical Chance for 30s for each percent you heal on allies up to 350%.",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Chaos Sphere":  {
                         "type":  "Warframe Mod",
                         "effect":  "Chaos Augment: Enemies entering the Effect Range will be inflicted with Chaos. Effect Range lasts for 50% of the ability duration and shrinks over time.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Charged Bullets":  {
                            "type":  "Arch-Gun Mod",
                            "effect":  "+60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity, +60% Status Chance",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Charged Chamber":  {
                            "type":  "Primary Mod",
                            "effect":  "+60% Damage on first shot in Magazine",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Charged Shell":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+40% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Charm":  {
                  "type":  "Companion Mod",
                  "effect":  "Smeeta Kavat has a 40% chance every \u003cLOWER_IS_BETTER\u003e27s to bestow its owner with good fortune.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Chilling Claws":  {
                           "type":  "Companion Mod",
                           "effect":  "+330% \u003cDT_FREEZE_COLOR\u003eCold, +330% Status Chance, Converts all elemental damage from these claws to \u003cDT_FREEZE_COLOR\u003eCold damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Chilling Globe":  {
                           "type":  "Warframe Mod",
                           "effect":  "Snow Globe Augment: Enemies that enter have a 50% chance to become frozen solid for 10s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Chilling Grasp":  {
                           "type":  "Shotgun Mod",
                           "effect":  "+40% \u003cDT_FREEZE_COLOR\u003eCold",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Chilling Reload":  {
                            "type":  "Shotgun Mod",
                            "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold, +40% Reload Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Chromatic Blade":  {
                            "type":  "Warframe Mod",
                            "effect":  "Exalted Blade Augment: Exalted Blade\u0027s Damage Type changes depending on Excalibur\u0027s Emissive Color, and Status Chance is increased by 300%.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Clashing Forest":  {
                            "type":  "Stance Mod",
                            "effect":  "Arcing strikes and focused combos.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Cleanse Corpus":  {
                           "type":  "Shotgun Mod",
                           "effect":  "x1.12 Damage to Corpus",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cleanse Grineer":  {
                            "type":  "Shotgun Mod",
                            "effect":  "x1.12 Damage to Grineer",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Cleanse Infested":  {
                             "type":  "Shotgun Mod",
                             "effect":  "x1.12 Damage to Infested",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Cleanse Orokin":  {
                           "type":  "Shotgun Mod",
                           "effect":  "x1.3 Damage to Orokin",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cleanse The Murmur":  {
                               "type":  "Shotgun Mod",
                               "effect":  "x1.3 Damage to Murmur",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Cleaving Whirlwind":  {
                               "type":  "Stance Mod",
                               "effect":  "Arcing cuts with spinning finish.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Clip Delegation":  {
                            "type":  "Primary Mod",
                            "effect":  "On Reload: Next Magazine has Status Chance and Multishot increased by 15% per shot landed with current Magazine. Max 15 stacks.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Cogron Tauron Strike":  {
                                 "type":  "Focus Way",
                                 "effect":  "Summon forth Cogron from the Void and brandish the mighty hammer, slamming it into the ground to create a cataclysmic shockwave that ripples 4 times.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Coil Recharge":  {
                          "type":  "Warframe Mod",
                          "effect":  "Coil Horizon Augment: Gyratory Sphere can be recalled. Enemies in its radius suffer 500 \u003cDT_ELECTRICITY_COLOR\u003e Electricity Damage and chain other enemies. Enemies pulled into detonation suffer additional discharges.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Coiling Viper":  {
                          "type":  "Stance Mod",
                          "effect":  "Powerful arcing strikes with energetic flips.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Cold Arrival":  {
                         "type":  "K-Drive Mod",
                         "effect":  "Dismounting deals 400 \u003cDT_FREEZE_COLOR\u003eCold Damage to enemies within 4m.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Cold Snap":  {
                      "type":  "Archwing Mod",
                      "effect":  "Cosmic Crush Augment: The black hole saps the area of heat, freezing enemies in range. Enemies near the black hole are completely frozen for |val|s.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Collision Force":  {
                            "type":  "Melee Mod",
                            "effect":  "+120% \u003cDT_IMPACT_COLOR\u003eImpact",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Combat Discipline":  {
                              "type":  "Warframe Mod",
                              "effect":  "You lose \u003cLOWER_IS_BETTER\u003e10 Health on kill\\nSquadmates gain 20 Health on kill",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Combat Reload":  {
                          "type":  "Primary Mod",
                          "effect":  "If 5 pellets are headshots, increase reload speed by +120% for 3s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Combo Fury":  {
                       "type":  "Melee Mod",
                       "effect":  "On Melee Kill:\\n+100% Reload Speed\\n+100% Magazine Capacity for 12s on Secondary Weapon",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Combo Killer":  {
                         "type":  "Melee Mod",
                         "effect":  "+5s Combo Duration, On Kill with Secondary Weapon:\\nReset Melee Combo Timer",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Combustion Beam":  {
                            "type":  "Primary Mod",
                            "effect":  "Enemies killed explode, dealing 600 Damage shortly after death.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Combustion Rounds":  {
                              "type":  "Arch-Gun Mod",
                              "effect":  "+120% \u003cDT_FIRE_COLOR\u003eHeat",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Comet Blast":  {
                        "type":  "Arch-Gun Mod",
                        "effect":  "+90% \u003cDT_IMPACT_COLOR\u003eImpact",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Comet Rounds":  {
                         "type":  "Primary Mod",
                         "effect":  "20% of Damage converted into \u003cDT_IMPACT_COLOR\u003eImpact",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Companion Weapon Riven Mod":  {
                                       "type":  "Companion Weapon Riven Mod",
                                       "effect":  "Unknown effect",
                                       "farm":  "Various Sources (Check Codex Database)",
                                       "value":  "Standard"
                                   },
    "Computer Cop":  {
                         "type":  "Parazon Mod",
                         "effect":  "Stopping cyber-crime in its tracks",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Concealed Explosives":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "+80% Chance to Explode (Use with Caution)",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Concentrated Arrow":  {
                               "type":  "Warframe Mod",
                               "effect":  "Artemis Bow Augment: Fires a single arrow with +25% Base Critical Chance on full charge, additional +50% Chance and explodes in a 7m radius on Weak Points. Removes Punch Through.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Concussion Rounds":  {
                              "type":  "Secondary Mod",
                              "effect":  "+32% \u003cDT_IMPACT_COLOR\u003eImpact",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Condition\u0027s Perfection":  {
                                        "type":  "Melee Mod",
                                        "effect":  "Enables Tennokai. Increases status chance by +100% on Tennokai attacks.",
                                        "farm":  "Various Sources (Check Codex Database)",
                                        "value":  "Standard"
                                    },
    "Conductive Blade":  {
                             "type":  "Arch-Melee Mod",
                             "effect":  "+120% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Conductive Sphere":  {
                              "type":  "Warframe Mod",
                              "effect":  "Arcsphere Augment: Projectiles that pass through Arcsphere have guaranteed \u003cDT_ELECTRICITY_COLOR\u003eElectricity Status Effect and +75% \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Conductor":  {
                      "type":  "Warframe Mod",
                      "effect":  "Resonator Augment: Reactivate the ability to command Resonator to move to your aim point at 150% Speed.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Conic Nozzle":  {
                         "type":  "Plexus Mod",
                         "effect":  "+38.3% Railjack Speed",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Constitution":  {
                         "type":  "Warframe Mod",
                         "effect":  "+40% Faster Knockdown Recovery, +28% Ability Duration",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Contagion Cloud":  {
                            "type":  "Warframe Mod",
                            "effect":  "Toxic Lash Augment: Create 5m toxic clouds, dealing 300 \u003cDT_POISON_COLOR\u003eToxin Damage/s for 12s with every kill. Damage is twice as strong for Melee kills.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Contagious Bond":  {
                            "type":  "Companion Mod",
                            "effect":  "When your Companion kills an enemy afflicted with a Status Effect, 50% of the Status Effect spreads to other enemies within 9m. Max 100 stacks.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Contagious Spread":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+40% \u003cDT_POISON_COLOR\u003eToxin",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Containment Breach":  {
                               "type":  "Arch-Gun Mod",
                               "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +30% Multishot",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Contamination Casing":  {
                                 "type":  "Arch-Gun Mod",
                                 "effect":  "+60% \u003cDT_POISON_COLOR\u003eToxin, +60% Status Chance",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Contamination Wave":  {
                               "type":  "Focus Way",
                               "effect":  "Second Ability emits a Void wave lasting 2s that drenches enemies with Void Contamination making them 50% more vulnerable to Operator Damage for 20s.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Continuous Misery":  {
                              "type":  "Primary Mod",
                              "effect":  "+100% Status Duration",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Controlled Slide":  {
                             "type":  "Warframe Mod",
                             "effect":  "Disable Nezha\u0027s passive ability. Increase Ability Strength by 15%.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Convulsion":  {
                       "type":  "Secondary Mod",
                       "effect":  "+40% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Coolant Leak":  {
                         "type":  "Companion Mod",
                         "effect":  "Unleashes a 10m radial blast of \u003cDT_FREEZE_COLOR\u003eCold when multiple enemies are nearby. Add 3 stacks. 10s cooldown.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Cordon":  {
                   "type":  "Companion Mod",
                   "effect":  "Nautilus forces enemies within 30m of the target into clusters for easier targeting. Cooldown: 15s.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Corrupt Charge":  {
                           "type":  "Melee Mod",
                           "effect":  "+30 Initial Combo, -50% Combo Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Counter Pulse":  {
                          "type":  "Warframe Mod",
                          "effect":  "Polarize Augment: Enemy weapons are jammed and robotics are disabled for 4s when hit by Polarize.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Counterbalance":  {
                           "type":  "Shotgun Mod",
                           "effect":  "-60% Weapon Recoil",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Countermeasures":  {
                            "type":  "Plexus Mod",
                            "effect":  "Flares that distract enemy guided projectiles.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Counterweight":  {
                          "type":  "Melee Mod",
                          "effect":  "20% of Damage converted into \u003cDT_IMPACT_COLOR\u003eImpact",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Covert Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "Finisher and Mercy Kills grant your Companion 10s of stealth that attacks will not disrupt. Max 60s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Covert Lethality":  {
                             "type":  "Melee Mod",
                             "effect":  "+16 Initial Combo, +100% Finisher Damage",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Crash Course":  {
                         "type":  "Primary Mod",
                         "effect":  "+120% \u003cDT_IMPACT_COLOR\u003eImpact",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Crash Shot":  {
                       "type":  "Shotgun Mod",
                       "effect":  "20% of Damage converted into \u003cDT_IMPACT_COLOR\u003eImpact",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Crashing Havoc":  {
                           "type":  "Stance Mod",
                           "effect":  "Fighting form devised for Conclave.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Crashing Timber":  {
                            "type":  "Stance Mod",
                            "effect":  "Fighting form devised for Conclave.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Creeping Terrify":  {
                             "type":  "Warframe Mod",
                             "effect":  "Terrify Augment: Affected enemies have 60% reduced Movement Speed.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Crescent Charge":  {
                            "type":  "Companion Mod",
                            "effect":  "Charges an enemy within 25m dealing \u003cDT_PUNCTURE_COLOR\u003ePuncture Damage and lifting them. While lifted, enemy is flung at nearby foes dealing an additional 20% of the thrown enemy\u0027s health and adding 5 \u003cDT_PUNCTURE_COLOR\u003ePuncture Status to enemies within 5m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Crescent Devolution":  {
                                "type":  "Companion Mod",
                                "effect":  "Devolves into its larval form when downed and charges at enemies, dealing 100 \u003cDT_PUNCTURE_COLOR\u003ePuncture Damage. Regains true form after 30s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Crimson Dervish":  {
                            "type":  "Stance Mod",
                            "effect":  "Strong whirlwind attacks.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Crimson Fugue":  {
                          "type":  "Plexus Mod",
                          "effect":  "+35% Turret Damage per enemy destroyed, for 8s (Maximum 5 stacks)",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Crippling Dash":  {
                           "type":  "Focus Way",
                           "effect":  "Using Void Sling through an enemy will reduce their Damage by 50%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Critical Deceleration":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "+200% Critical Chance, -20% Fire Rate",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Critical Focus":  {
                           "type":  "Arch-Gun Mod",
                           "effect":  "+60% Critical Chance and Damage when Aiming",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Critical Meltdown":  {
                              "type":  "Arch-Melee Mod",
                              "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +60% Critical Chance",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Critical Mutation":  {
                              "type":  "Secondary Mod",
                              "effect":  "Each kill increases Critical Chance and Critical Damage by 30% up to 300%. Reduce by 30% when fewer than 3 enemies are struck by the grenade explosion.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Critical Precision":  {
                               "type":  "Primary Mod",
                               "effect":  "Burst Fire Only: Headshots increase Critical Chance by 10% up to 500%. Missing with all shots in a burst removes up to 100% of this bonus Critical Chance.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Critical Surge":  {
                           "type":  "Warframe Mod",
                           "effect":  "Breach Surge Augment: Teleporting to a Reservoir costs 50% Energy and grants 10% Critical Chance to Primary Weapons per meter traveled for 9s. Maximum 250% Critical Chance.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Crossing Snakes":  {
                            "type":  "Stance Mod",
                            "effect":  "Multi-angle strikes and deadly thrust attacks.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Crowd Dispersion":  {
                             "type":  "Companion Mod",
                             "effect":  "Unleashes a 10.0m radial knockdown when multiple enemies are nearby, dealing 10.0 Damage.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Cruising Speed":  {
                           "type":  "Plexus Mod",
                           "effect":  "+110% Railjack Speed when no enemies within 3000m",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Crushing Ruin":  {
                          "type":  "Stance Mod",
                          "effect":  "Aerial attacks with Crowd Control combos.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Cryo Coating":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold, +60% Status Chance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Cryo Rounds":  {
                        "type":  "Primary Mod",
                        "effect":  "+40% \u003cDT_FREEZE_COLOR\u003eCold",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Cull The Weak":  {
                          "type":  "Companion Mod",
                          "effect":  "+60% Melee Damage per Status Type affecting the target, Non-Critical hits deal +240% damage",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Cunning Aspect":  {
                           "type":  "Stance Mod",
                           "effect":  "Fighting form devised for Conclave.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Cutting Edge":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+110% Melee Damage",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Cyclone Kraken":  {
                           "type":  "Stance Mod",
                           "effect":  "Brutal strikes with deft movement.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Da-Ren":  {
                   "type":  "Tektolyst Artifact Mod",
                   "effect":  "+300 Operator Shields, +30 bonus for each \u003cUNAIRU_CLEAN\u003eUnairu School Mod",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Damage Decoy":  {
                         "type":  "Warframe Mod",
                         "effect":  "Decoy Augment: Decoy can be cast on enemies. Enemies who attack that decoy receive 5 random Status Effects, and the reflected damage is increased by 350%.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Damzav-Vati":  {
                        "type":  "Secondary Mod",
                        "effect":  "+240% \u003cDT_VIRAL_COLOR\u003eViral",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Dark Propagation":  {
                             "type":  "Warframe Mod",
                             "effect":  "Sow Augment: Enemies killed while inflicted with Sow spread its effect in a 15m radius. Shadow\u0027s Death Harvest also inflicts Sow.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Dead Eye":  {
                     "type":  "Warframe Mod",
                     "effect":  "Squad receives +52.5% Sniper Rifle Damage",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Deadly Efficiency":  {
                              "type":  "Arch-Gun Mod",
                              "effect":  "On Reload From Empty:\\n+120% Damage for 9s",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Deadly Maneuvers":  {
                             "type":  "Secondary Mod",
                             "effect":  "On Dodge, gain 400% Headshot Critical Chance for your next 2 shots.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Deadly Sequence":  {
                            "type":  "Primary Mod",
                            "effect":  "+200% Critical Chance, +1 \u0027Sequence\u0027",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Death Blossom":  {
                          "type":  "Plexus Mod",
                          "effect":  "Turret Cooldowns removed for 30s\\nCooldown: 300s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Deathless Currents":  {
                               "type":  "Focus Way",
                               "effect":  "Vortex heals allies for 250 health/s. Downed players inside the vortex will be instantly revived, and dead players will be resummoned.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Deceptive Bond":  {
                           "type":  "Warframe Mod",
                           "effect":  "Decoy Augment: 50% of damage Loki takes is transferred to Decoy, and vice versa.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Decisive Judgement":  {
                               "type":  "Stance Mod",
                               "effect":  "Fierce, double-handed strikes.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Deep Freeze":  {
                        "type":  "Secondary Mod",
                        "effect":  "+20% \u003cDT_FREEZE_COLOR\u003eCold",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Defensive Fire":  {
                           "type":  "Plexus Mod",
                           "effect":  "+13.5% Maximum Shields per enemy killed for 10s (Maximum 10 stacks)",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Defiled Reckoning":  {
                              "type":  "Warframe Mod",
                              "effect":  "Reckoning Augment: Health Orbs become unusable by enemies for 10s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Defiled Snapdragon":  {
                               "type":  "Stance Mod",
                               "effect":  "Sudden lashes, lethal slashes.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Deft Tempo":  {
                       "type":  "Primary Mod",
                       "effect":  "On Headshot:\\n+10% Mobility for 4s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Depleted Reload":  {
                            "type":  "Primary Mod",
                            "effect":  "-60% Magazine Capacity, +48% Reload Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Desiccation\u0027s Curse":  {
                                     "type":  "Warframe Mod",
                                     "effect":  "Desiccation Augment: Killing a blinded enemy with a Finisher has a 100% chance to summon a Swarm Kavat that will spread Scarab Swarm. Maximum Swarm Kavats +2.",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Despoil":  {
                    "type":  "Warframe Mod",
                    "effect":  "Desecrate Augment: No longer consumes Energy, but consumes \u003cLOWER_IS_BETTER\u003e10 Health per corpse instead.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Detect Vulnerability":  {
                                 "type":  "Companion Mod",
                                 "effect":  "Upon completing research on an enemy, subsequent scans will reveal their weak points.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Diamond Skin":  {
                         "type":  "Warframe Mod",
                         "effect":  "+45% \u003cDT_RADIATION_COLOR\u003eRadiation Resistance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Dig":  {
                "type":  "Companion Mod",
                "effect":  "The kubrow sniffs out buried objects and digs them up.",
                "farm":  "Various Sources (Check Codex Database)",
                "value":  "Standard"
            },
    "Directed Convergence":  {
                                 "type":  "Primary Mod",
                                 "effect":  "+100% Accuracy when Aiming",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Disabling Conditioning":  {
                                   "type":  "Companion Mod",
                                   "effect":  "+385% Melee Damage, Convert all base Physical Damage to \u003cDT_PUNCTURE_COLOR\u003ePuncture Damage",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Disarming Blast":  {
                            "type":  "Focus Way",
                            "effect":  "Enemies hit by Void Blast have a 50% chance to be disarmed.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Disarming Purity":  {
                             "type":  "Primary Mod",
                             "effect":  "Secondary Fire mode has a 40% chance to disarm enemies., +1 \u0027Purity\u0027",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Disarming Sling":  {
                            "type":  "Focus Way",
                            "effect":  "Slinging through enemies has a 50% chance to disarm them.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Discharge Strike":  {
                             "type":  "Warframe Mod",
                             "effect":  "Soul Punch Augment: Depletes up to 25 Energy from the target.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Discipline\u0027s Merit":  {
                                    "type":  "Melee Mod",
                                    "effect":  "Enables Tennokai. Opportunities occur every \u003cLOWER_IS_BETTER\u003e4 melee hits instead of at random.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Disorienting Blast":  {
                               "type":  "Focus Way",
                               "effect":  "Void Blast has a 50% chance of confusing enemies for 16s, causing them to be unable to distinguish friend from foe.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Dispatch Overdrive":  {
                               "type":  "Melee Mod",
                               "effect":  "On Heavy Attack Hit:\\n+60% Movement Speed for 15s",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Disruptor":  {
                      "type":  "Shotgun Mod",
                      "effect":  "+12% \u003cDT_IMPACT_COLOR\u003eImpact",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Distilled Contamination":  {
                                    "type":  "Focus Way",
                                    "effect":  "Killing an enemy affected by Contamination Wave makes all affected enemies 50% more vulnerable, while also making the effect last 10s longer. Maximum 2 stacks.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Diversified Denial":  {
                               "type":  "Companion Mod",
                               "effect":  "Fabricate 3 Specters that fight for 30s. Each deals 85% of the Hound\u0027s damage and cannot use Abilities.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Dividing Blades":  {
                            "type":  "Stance Mod",
                            "effect":  "Fighting form devised for Conclave.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Divine Retribution":  {
                               "type":  "Warframe Mod",
                               "effect":  "Divine Spears Augment: Status Effects spread to all speared enemies. Spear explosions scale by 1.5x of remaining \u003cDT_SLASH_COLOR\u003eSlash, \u003cDT_POISON_COLOR\u003eToxin and \u003cDT_FIRE_COLOR\u003eHeat Status Effects. Base Radius is 14m.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Dizzying Rounds":  {
                            "type":  "Secondary Mod",
                            "effect":  "Shots from less than 8m stun enemies and open them to finishers.\\n+200% Status Chance",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Double Tap":  {
                       "type":  "Primary Mod",
                       "effect":  "ON HIT:\\n20% Bonus Damage on next Shot for 2s.\\nStacks up to 20x outside of Conclave.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Double-Barrel Drift":  {
                                "type":  "Shotgun Mod",
                                "effect":  "-20% Weapon Recoil, and +20% Accuracy when Sliding",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Downpour":  {
                     "type":  "Focus Way",
                     "effect":  "Rain of Arrows will also target 4 additional enemies within 10m.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Draining Bite":  {
                          "type":  "Companion Mod",
                          "effect":  "Vasca Kavat inflicts 5 stacks of \u003cDT_SLASH_COLOR\u003eSlash at 150% of its melee damage and restores 10% Health to itself.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Draining Gloom":  {
                           "type":  "Secondary Mod",
                           "effect":  "+100% chance of Energy Drain explosion, -60% Magazine Capacity, -60% Ammo Maximum",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Dread Ward":  {
                       "type":  "Warframe Mod",
                       "effect":  "Dread Mirror Augment: Become unkillable for 8s when Dread Mirror kills a target by ripping its life force.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Dreadful Killshot":  {
                              "type":  "Primary Mod",
                              "effect":  "Increased Damage and Status Chance by +20% for every 75 Warframe Health. Capped at 360%",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Dreamer\u0027s Bond":  {
                                "type":  "Warframe Mod",
                                "effect":  "Squad receives +0.3 Energy Regen/s and +1.5 Health Regen/s",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Dreamer\u0027s Wrath":  {
                                 "type":  "Melee Mod",
                                 "effect":  "Enables Tennokai. Increases opportunity chance by 50% and critical damage by 32% for Tennokai attacks.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Drifting Contact":  {
                             "type":  "Melee Mod",
                             "effect":  "+10s Combo Duration, +40% Status Chance",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Drive-Duster":  {
                         "type":  "Parazon Mod",
                         "effect":  "Your digital virus buster",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Dual Rounds":  {
                        "type":  "Arch-Gun Mod",
                        "effect":  "+60% Multishot",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Duality":  {
                    "type":  "Warframe Mod",
                    "effect":  "Metamorphosis Augment: Equinox\u0027s other half breaks free for 10s, dealing 300% Damage.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Duplex Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "Companion will clone itself each time you expend 100 energy, up to 3 clones. Clones live 30s and cannot use Abilities. Their kills have a 50% chance of dropping Energy Orbs.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Eagle Eye":  {
                      "type":  "Primary Mod",
                      "effect":  "+110% Zoom",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Efficient Beams":  {
                            "type":  "Shotgun Mod",
                            "effect":  "Only consume ammo when dealing damage.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Efficient Transferral":  {
                                  "type":  "Archwing Mod",
                                  "effect":  "+30% Ability Duration",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Eject Magazine":  {
                           "type":  "Secondary Mod",
                           "effect":  "+20% Magazine Reloaded/s when Holstered",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Electrified Barrel":  {
                               "type":  "Arch-Gun Mod",
                               "effect":  "+120% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Electro Pulse":  {
                          "type":  "Companion Mod",
                          "effect":  "Every 5s, Sentinel will continually zap an enemy within 15m, trapping them in a stunned state.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Electromagnetic Shielding":  {
                                      "type":  "Melee Mod",
                                      "effect":  "While blocking, redirect 50% of damage taken by allies within 12m to yourself.",
                                      "farm":  "Various Sources (Check Codex Database)",
                                      "value":  "Standard"
                                  },
    "Elemental Sandstorm":  {
                                "type":  "Warframe Mod",
                                "effect":  "Sandstorm Augment: Sandstorm gains 50% Ability Range and has a 100% chance of inflicting Status Effects based on the Damage Types on the equipped Melee Weapon.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Eleventh Storm":  {
                           "type":  "Stance Mod",
                           "effect":  "Rapid attacks using sword and shield.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Elusive Posture":  {
                            "type":  "Posture Mod",
                            "effect":  "The companion will avoid attacking. +50% Evasion",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Elusive Retribution":  {
                                "type":  "Warframe Mod",
                                "effect":  "Elude Augment: Every attack Baruuk Eludes increases his Melee Attack Speed and Melee Critical Damage by 5% up to 6 stacks. Stacks last 6s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Embedded Catalyzer":  {
                               "type":  "Secondary Mod",
                               "effect":  "On Ability Cast:\\n+90% Status Chance when Aiming for 9s",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Emergent Aftermath":  {
                               "type":  "Primary Mod",
                               "effect":  "On Kill:\\n+50% Reload Speed for 3s",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Emp Aura":  {
                     "type":  "Warframe Mod",
                     "effect":  "Enemy Corpus lose -15% Accuracy",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Empazu-Shol":  {
                        "type":  "Tektolyst Artifact Mod",
                        "effect":  "+12% Tauron Strike Initial Charge., +2% bonus for each Mod from a unique School",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Empowered Blades":  {
                             "type":  "Warframe Mod",
                             "effect":  "Squad receives +60% Status Chance and Status Damage on Heavy Attacks, but lose \u003cLOWER_IS_BETTER\u003e90 Shields per hit.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Empowered Quiver":  {
                             "type":  "Warframe Mod",
                             "effect":  "Quiver Augment: Dashwire grants allies 100% Critical Damage. Cloak arrow has a 100% chance to prevent Status Effects.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Endless Lullaby":  {
                            "type":  "Warframe Mod",
                            "effect":  "Lull Augment: Performing a finisher on or killing a sleeping enemy will retrigger Lull for 100% of the remaining duration.\\nPassive: +50% Lull Duration.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Endoparasitic Vector":  {
                                 "type":  "Companion Mod",
                                 "effect":  "Transmit an endoparasite to an enemy within 30m. Tentacles spawn from it, clinging to enemies within 10m slowing them as they move further from the parasite, and dealing 20 \u003cDT_VIRAL_COLOR\u003eViral Damage/sec over 5s.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Endurance Drift":  {
                            "type":  "Warframe Mod",
                            "effect":  "+10% Energy Max, +12% Parkour Velocity",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Enduring Affliction":  {
                                "type":  "Melee Mod",
                                "effect":  "+100% Status Chance on Lifted enemies",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Enduring Bastille":  {
                              "type":  "Warframe Mod",
                              "effect":  "Bastille Augment: Killing an enemy in Bastille extends the duration by 2s. Vortex\u0027s duration is increased by 70% of its Maximum Duration for each additional Vortex thrown into it.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Enduring Strike":  {
                            "type":  "Melee Mod",
                            "effect":  "+20% Additional Combo Count Chance on Lifted enemies",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Enduring Tides":  {
                           "type":  "Focus Way",
                           "effect":  "Increases Operator Health and Armor by 200%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Enemy Radar":  {
                        "type":  "Warframe Mod",
                        "effect":  "Highlights enemies on the Minimap",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Enemy Sense":  {
                        "type":  "Warframe Mod",
                        "effect":  "+30m Enemy Radar",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Energizing Shot":  {
                            "type":  "Secondary Mod",
                            "effect":  "Shoot Energy Orbs to obtain them with +110% extra effect.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Energy Amplifier":  {
                             "type":  "Archwing Mod",
                             "effect":  "+60% Ability Range",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Energy Channel":  {
                           "type":  "Melee Mod",
                           "effect":  "Converts 550% of Energy used to up to 550 Bonus Damage on next Melee Attack.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Energy Conversion":  {
                              "type":  "Warframe Mod",
                              "effect":  "Energy Orbs grant 50% more Ability Strength to your next cast.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Energy Field":  {
                         "type":  "Archwing Mod",
                         "effect":  "Energy Shell Augment: Energy Shell applies to allies within 140m.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Energy Generator":  {
                             "type":  "Companion Mod",
                             "effect":  "Dethcube drops an Energy Orb after assisting in \u003cLOWER_IS_BETTER\u003e10 kills.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Energy Inversion":  {
                             "type":  "Archwing Mod",
                             "effect":  "+100% Shield Capacity",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Energy Nexus":  {
                         "type":  "Warframe Mod",
                         "effect":  "Warframe receives +3 Energy Regen/s",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Energy Pulse":  {
                         "type":  "Focus Way",
                         "effect":  "Energy pickups grant 50% additional Energy over 5s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Energy Transfer":  {
                            "type":  "Warframe Mod",
                            "effect":  "Mend \u0026 Maim Augment: 100% of charge is conserved when switching between forms.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Enhanced Durability":  {
                                "type":  "Archwing Mod",
                                "effect":  "+100% Health",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Enhanced Vitality":  {
                              "type":  "Companion Mod",
                              "effect":  "+250% Health",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Enraged":  {
                    "type":  "Warframe Mod",
                    "effect":  "Hysteria Augment: Damage increased by 350%, Critical Chance increased by 350%. Hysteria lasts for 15s, and receives a matching cooldown.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Entropy Burst":  {
                          "type":  "Primary Mod",
                          "effect":  "+20 Final Status Chance, +1 \u0027Entropy\u0027",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Entropy Detonation":  {
                               "type":  "Melee Mod",
                               "effect":  "Lethal ground attacks cause enemies to explode dealing +1,000, (+20% Enemy Max Health) \u003cDT_EXPLOSION_COLOR\u003eBlast Damage, in a +10m radius., +1 \u0027Entropy\u0027",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Entropy Flight":  {
                           "type":  "Melee Mod",
                           "effect":  "+140% Projectile Speed, +1 \u0027Entropy\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Entropy Spike":  {
                          "type":  "Secondary Mod",
                          "effect":  "+20% Chance to Explode (Use with Caution), +1 \u0027Entropy\u0027",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Enveloping Cloud":  {
                             "type":  "Warframe Mod",
                             "effect":  "Cloud Walker Augment: Allies within 4m of the cloud become invisible to enemies for 14s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Equilibrium":  {
                        "type":  "Warframe Mod",
                        "effect":  "Health pickups give +110% Energy. Energy pickups give +110% Health.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Equilibrium Audit":  {
                              "type":  "Companion Mod",
                              "effect":  "Unleashes a series of shockwaves that knockdown enemies within 15m and deal 300 damage.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Eroding Blight":  {
                           "type":  "Secondary Mod",
                           "effect":  "+200% Magazine Capacity, +1 \u0027Blight\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Eroding Rapids":  {
                           "type":  "Focus Way",
                           "effect":  "Vortex applies 100% status vulnerability to all enemies within it.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Escape Velocity":  {
                            "type":  "Warframe Mod",
                            "effect":  "Worm Hole Augment: Allies that travel through wormhole gain a 50% Speed bonus for 7s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Esti Vel-Ikha":  {
                          "type":  "Tektolyst Artifact Mod",
                          "effect":  "Increases maximum Void Sling distance by +30%., +10% Void Sling radius for each Mod from a unique School",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Eternal Gaze":  {
                         "type":  "Focus Way",
                         "effect":  "Increase Energy Regeneration Rate for Amps and Void Beam by 60%.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Eternal War":  {
                        "type":  "Warframe Mod",
                        "effect":  "Warcry Augment: While active, Warcry\u0027s duration is increased by 2s for each Melee Kill.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Evasive Denial":  {
                           "type":  "Companion Mod",
                           "effect":  "Teleports a safe distance away and engages a displacement field gaining 75% chance to dodge enemy fire for 8s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Everlasting Ward":  {
                             "type":  "Warframe Mod",
                             "effect":  "Elemental Ward Augment: Allies that leave the radius will retain the effect for 100% of the remaining duration.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Evir-Ti":  {
                    "type":  "Tektolyst Artifact Mod",
                    "effect":  "+60% Operator Jump Height",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Executing Dash":  {
                           "type":  "Focus Way",
                           "effect":  "Void Sling no longer displaces enemies, instead it will open them up to Finishers and increase Finisher Damage taken by 35%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Eximus Advantage":  {
                             "type":  "Primary Mod",
                             "effect":  "Headshots on Eximus enemies increase Secondary Damage by +600% for 10 secs.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Exothermic":  {
                       "type":  "Warframe Mod",
                       "effect":  "Inferno Augment: Enemies killed while under the effect of Inferno have a 15% chance to drop an energy orb.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Expel Corpus":  {
                         "type":  "Secondary Mod",
                         "effect":  "x1.1 Damage to Corpus",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Expel Grineer":  {
                          "type":  "Secondary Mod",
                          "effect":  "x1.1 Damage to Grineer",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Expel Infested":  {
                           "type":  "Secondary Mod",
                           "effect":  "x1.1 Damage to Infested",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Expel Orokin":  {
                         "type":  "Secondary Mod",
                         "effect":  "x1.3 Damage to Orokin",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Expel The Murmur":  {
                             "type":  "Secondary Mod",
                             "effect":  "x1.3 Damage to Murmur",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Explosive Demise":  {
                             "type":  "Melee Mod",
                             "effect":  "Enemies killed explode, dealing 300 Damage shortly after death.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Explosive Legerdemain":  {
                                  "type":  "Warframe Mod",
                                  "effect":  "Sleight of Hand Augment: Ammo and Orbs pickups are turned into proximity mines that deal 1000 Damage with a 100% Status Chance.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Exposing Harpoon":  {
                             "type":  "Primary Mod",
                             "effect":  "Pulling an enemy will give +300% Critical Chance for 15s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Extend":  {
                   "type":  "Arch-Melee Mod",
                   "effect":  "+100 Attraction Range (In Space), +3 Melee Range",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Extreme Velocity":  {
                             "type":  "K-Drive Mod",
                             "effect":  "+30% K-Drive Speed",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Failsafe":  {
                     "type":  "Parazon Mod",
                     "effect":  "+50% to retry on Hacking failure",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Fanged Fusillade":  {
                             "type":  "Primary Mod",
                             "effect":  "+120% \u003cDT_SLASH_COLOR\u003eSlash",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Far Sling":  {
                      "type":  "Focus Way",
                      "effect":  "Increases maximum Void Sling distance by 30%.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Fass":  {
                 "type":  "Parazon Mod",
                 "effect":  "Roiling, moaning, this realm of ours  In madness lost shall die",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Fass Canticle":  {
                          "type":  "Secondary Mod",
                          "effect":  "Killing enemies grants Allies in Affinity Range 40% Shield Recharge Rate and \u003cLOWER_IS_BETTER\u003e-28% Shield Recharge Delay for 15s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Fast Deflection":  {
                            "type":  "Warframe Mod",
                            "effect":  "+90% Shield Recharge, -45% Shield Recharge Delay",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Fast Hands":  {
                       "type":  "Primary Mod",
                       "effect":  "+12% Reload Speed",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Fatal Acceleration":  {
                               "type":  "Shotgun Mod",
                               "effect":  "+40% Projectile Speed",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Fatal Attraction":  {
                             "type":  "Companion Mod",
                             "effect":  "Enemies within 20m are drawn to you. Once they are within 6m, they detonate for 250 Damage. Kill them before detonation to increase lure time and reduce cooldown.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Fateful Truth":  {
                          "type":  "Stance Mod",
                          "effect":  "Fighting form devised for Conclave.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Fear Sense":  {
                       "type":  "Companion Mod",
                       "effect":  "The Kavat senses the weaknesses of enemies within 25m. For 25s, its attacks deal +200% damage and stagger with a 30% chance of knockdown.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Feathered Arrows":  {
                             "type":  "Primary Mod",
                             "effect":  "+60% Projectile Speed, -20% Damage",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Femursetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Ferocity":  {
                     "type":  "Companion Mod",
                     "effect":  "Kubrow attacks an enemy open to finishers with +300% crit chance. If the enemy dies during the attack, enemies within 6m have a 30% chance to be knocked down and opened to finishers.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Fetch":  {
                  "type":  "Companion Mod",
                  "effect":  "13.5m Companion Gather-Link. Detects and collects items, including mods.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Fever Strike":  {
                         "type":  "Melee Mod",
                         "effect":  "+60% \u003cDT_POISON_COLOR\u003eToxin",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Final Act":  {
                      "type":  "Warframe Mod",
                      "effect":  "On Low Health:\\n+30% Ability Strength\\n+30% Casting Speed for 8s",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Final Harbinger":  {
                            "type":  "Stance Mod",
                            "effect":  "Powerful slashes and shield attacks.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Final Tap":  {
                      "type":  "Primary Mod",
                      "effect":  "On 4 Hits within 0.05s:\\n+100% Damage for 0.2s",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Finishing Touch":  {
                            "type":  "Melee Mod",
                            "effect":  "+165% Finisher Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Fire Suppression":  {
                             "type":  "Plexus Mod",
                             "effect":  "Extinguish 1 fire\\nCooldown: \u003cLOWER_IS_BETTER\u003e200s",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Fireball Frenzy":  {
                            "type":  "Warframe Mod",
                            "effect":  "Fireball Augment: Hold to cast will grant all allies within 15m an additional 100% \u003cDT_FIRE_COLOR\u003eHeat Damage to their attacks for 40s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Fired Up":  {
                     "type":  "Companion Mod",
                     "effect":  "5% \u003cDT_FIRE_COLOR\u003eHeat Damage on weapon per hit. Stacks up to 100%. Resets after 5s with no hits.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Firestorm":  {
                      "type":  "Primary Mod",
                      "effect":  "Improves the Blast Radius of weapons with Radial Attacks.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Firewalker":  {
                       "type":  "Warframe Mod",
                       "effect":  "+24.2% to Parkour Velocity, +24.2% Aim Glide/Wall Latch Duration, +275% \u003cDT_FIRE_COLOR\u003eHeat on Bullet Jump",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Firewall":  {
                     "type":  "Parazon Mod",
                     "effect":  "Reduces damage by 75% while hacking",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Fizzbang Flourish":  {
                              "type":  "K-Drive Mod",
                              "effect":  "Fireworks trigger when completing a trick over 200 points.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Flailing Branch":  {
                            "type":  "Stance Mod",
                            "effect":  "Lifting strikes and whirlwind combos.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Flak Shot":  {
                      "type":  "Shotgun Mod",
                      "effect":  "20% of Damage converted into \u003cDT_SLASH_COLOR\u003eSlash",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Flame Blast":  {
                        "type":  "Focus Way",
                        "effect":  "Void Blast releases a ball of fire that deals 250% of the Void Blast damage and explodes after 0.6000000238418579s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Flame Gland":  {
                        "type":  "Companion Mod",
                        "effect":  "+60% \u003cDT_FIRE_COLOR\u003eHeat, +60% Status Chance",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Flame Repellent":  {
                            "type":  "Warframe Mod",
                            "effect":  "+60% \u003cDT_FIRE_COLOR\u003eHeat Resistance",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Flechette":  {
                      "type":  "Shotgun Mod",
                      "effect":  "+12% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Flow Burn":  {
                      "type":  "Plexus Mod",
                      "effect":  "+38% Speed and Boost Speed for 13s\\nCooldown: 240s",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Flowing Strikes":  {
                            "type":  "Focus Way",
                            "effect":  "Increase the range of spectral melee attacks to 26m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Flux Overdrive":  {
                           "type":  "Primary Mod",
                           "effect":  "Status Chance fluctuates between +150% and +250% over 5s while the beam is fired.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Focus Energy":  {
                         "type":  "Melee Mod",
                         "effect":  "+40% Heavy Attack Efficiency, +60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Focus Radon":  {
                        "type":  "Melee Mod",
                        "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +40% Heavy Attack Efficiency",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Focused Acceleration":  {
                                 "type":  "Primary Mod",
                                 "effect":  "When Aiming:",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Focused Defense":  {
                            "type":  "Melee Mod",
                            "effect":  "+20 Parry Angle",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Focused Prospectus":  {
                               "type":  "Companion Mod",
                               "effect":  "Fires a beam of energy that deals 900 \u003cDT_FIRE_COLOR\u003eHeat Damage over 4.5s.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Follow Through":  {
                           "type":  "Warframe Mod",
                           "effect":  "On Respawn:",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Fomorian Accelerant":  {
                                "type":  "Shotgun Mod",
                                "effect":  "Flak now bounces up to 4x and travels 60% faster.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Form Up":  {
                    "type":  "Plexus Mod",
                    "effect":  "Recall all Crew Members to the Railjack and Heal them for 100%\\nCooldown: 240s",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Fortifying Fire":  {
                            "type":  "Plexus Mod",
                            "effect":  "ON CRITICAL HIT:\\nReplenish 4.5% of Shields",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Fortitude":  {
                      "type":  "Warframe Mod",
                      "effect":  "+40% Chance to Resist Knockdown, +100% Shield Recharge",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Forward Artillery":  {
                              "type":  "Plexus Mod",
                              "effect":  "+127.3% Forward Artillery Damage",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Four Riders":  {
                        "type":  "Stance Mod",
                        "effect":  "Fast strikes, powerful slams.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Fracturing Crush":  {
                             "type":  "Warframe Mod",
                             "effect":  "Crush Augment: Crush gains +50% casting speed. The armor of surviving enemies decreases by 75% and they are unable to move for 7s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Fracturing Wind":  {
                            "type":  "Stance Mod",
                            "effect":  "Fast, multi-hit strikes with powerful finishers.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Frail Momentum":  {
                           "type":  "Shotgun Mod",
                           "effect":  "+90% Fire Rate, -15% Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Freeze Force":  {
                         "type":  "Warframe Mod",
                         "effect":  "Freeze Augment: Hold to cast will grant all allies within 15m an additional 100% \u003cDT_FREEZE_COLOR\u003eCold Damage to their attacks for 40s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Frenzied Posture":  {
                             "type":  "Posture Mod",
                             "effect":  "The companion prefers to change its target after each attack. +80% Status Duration",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Frost Jaw":  {
                      "type":  "Companion Mod",
                      "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold, +60% Status Chance",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Full Capacity":  {
                          "type":  "Secondary Mod",
                          "effect":  "+30% Magazine Capacity, -15% Reload Speed",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Full Contact":  {
                         "type":  "Shotgun Mod",
                         "effect":  "+120% \u003cDT_IMPACT_COLOR\u003eImpact",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Fulmination":  {
                        "type":  "Secondary Mod",
                        "effect":  "Improves the Blast Radius of weapons with Radial Attacks.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Funnel Clouds":  {
                          "type":  "Warframe Mod",
                          "effect":  "Tornado Augment: Creates 8 additional tornadoes. All tornadoes are 50% their original size and won\u0027t pick up enemies.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Furious Javelin":  {
                            "type":  "Warframe Mod",
                            "effect":  "Radial Javelin Augment: Each enemy hit will increase Excalibur\u0027s Melee Damage by 15% for 16s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Furor":  {
                  "type":  "Arch-Melee Mod",
                  "effect":  "+10% Attack Speed",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Fury":  {
                 "type":  "Melee Mod",
                 "effect":  "+20% Attack Speed",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Fused Crucible":  {
                           "type":  "Warframe Mod",
                           "effect":  "Crucible Blast Augment: Becomes a channeled ability consuming \u003cLOWER_IS_BETTER\u003e20 \u003cENERGY\u003e Energy/s that ramps up. While active Chyrinka Pillars trigger chain reactions and their duration is frozen. Mobility is greatly reduced.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Fused Reservoir":  {
                            "type":  "Warframe Mod",
                            "effect":  "Reservoirs Augment: Adds a fourth reservoir that gives the effects of all three. Costs \u003cLOWER_IS_BETTER\u003e200% more Energy.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gaia\u0027s Tragedy":  {
                                "type":  "Stance Mod",
                                "effect":  "Slow, powerful strikes.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Gale Kick":  {
                      "type":  "Warframe Mod",
                      "effect":  "+100% of Melee Damage converted to \u003cDT_IMPACT_COLOR\u003eImpact Damage on Jump Kick, knocking down nearby enemies on kill.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Galeforce Dawn":  {
                           "type":  "Stance Mod",
                           "effect":  "Wide slashes and heavy strikes.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Galvanized Acceleration":  {
                                    "type":  "Shotgun Mod",
                                    "effect":  "+30% Projectile Speed and +30% Beam Range, On Kill:\\n+30% Projectile Speed and +30% Beam Range for 10s. Stacks up to 2x.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Galvanized Elementalist":  {
                                    "type":  "Melee Mod",
                                    "effect":  "+80% Status Damage, On Melee Kill:\\n+30% Status Chance for 20s. Stacks up to 4x.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Galvanized Reflex":  {
                              "type":  "Melee Mod",
                              "effect":  "+50% Heavy Attack Efficiency, On Melee Kill:\\n+20 Initial Combo for 20s. Stacks up to 4x.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Galvanized Steel":  {
                             "type":  "Melee Mod",
                             "effect":  "+110% Critical Chance (x2 for Heavy Attacks), On Melee Kill:\\n+30% Critical Damage for 20s. Stacks up to 4x.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Gastro":  {
                   "type":  "Warframe Mod",
                   "effect":  "Regurgitate Augment: Regurgitated enemies bounce up to 3 times, creating gas clouds that last 8s and inflict nearby enemies with \u003cDT_GAS_COLOR\u003e Gas Status Effect.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Gemini Cross":  {
                         "type":  "Stance Mod",
                         "effect":  "A style exhibiting sweeping slash attacks and swift jabs.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Ghost":  {
                  "type":  "Companion Mod",
                  "effect":  "Cloaks owner when enemies are within 24m. The cloak is disrupted if owner attacks.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Gilded Truth":  {
                         "type":  "Primary Mod",
                         "effect":  "+80% Fire Rate, +1 \u0027Truth\u0027",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Glacial Edge":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+120% \u003cDT_FREEZE_COLOR\u003eCold",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Gladiator Aegis":  {
                            "type":  "Warframe Mod",
                            "effect":  "+40% Armor",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gladiator Finesse":  {
                              "type":  "Warframe Mod",
                              "effect":  "Drains Energy to stop Lethal Damage with +60% Efficiency.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Gladiator Might":  {
                            "type":  "Melee Mod",
                            "effect":  "+60% Critical Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gladiator Resolve":  {
                              "type":  "Warframe Mod",
                              "effect":  "+40% Health",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Gladiator Rush":  {
                           "type":  "Melee Mod",
                           "effect":  "+6s Combo Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Gladiatorsetmod":  {
                            "type":  "Mod Set Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gleaming Blight":  {
                            "type":  "Melee Mod",
                            "effect":  "+100% Status Chance, +1 \u0027Blight\u0027",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gleaming Talon":  {
                           "type":  "Stance Mod",
                           "effect":  "Fast arcing strikes.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Gnashing Payara":  {
                            "type":  "Stance Mod",
                            "effect":  "Lunging punctures with impaling spirals.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gorgon Frenzy":  {
                          "type":  "Primary Mod",
                          "effect":  "On Kill:\\n+30% Fire Rate for 3s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Gourmand":  {
                     "type":  "Warframe Mod",
                     "effect":  "Feast Augment: Instead of Energy, consumes \u003cLOWER_IS_BETTER\u003e200 Health on cast. Glutton grants an additional 150 Armor per enemy.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Granum\u0027s Nemesis":  {
                                  "type":  "Plexus Mod",
                                  "effect":  "x1.41 Turret Damage vs Corpus",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Great Quake":  {
                        "type":  "Focus Way",
                        "effect":  "Increase shockwave radius by +40%.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Greedy Pull":  {
                        "type":  "Warframe Mod",
                        "effect":  "Pull Augment: Adds 100% chance to pull pickups towards Mag.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Grim Fury":  {
                      "type":  "Stance Mod",
                      "effect":  "Lightning fast hit chains and hard-hitting combos.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Grinloked":  {
                      "type":  "Primary Mod",
                      "effect":  "+60% Accuracy when Aiming",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Guardian":  {
                     "type":  "Companion Mod",
                     "effect":  "Boosts owner\u0027s shield by 100% when it runs out.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Guardian Armor":  {
                           "type":  "Warframe Mod",
                           "effect":  "Vex Armor Augment: Chroma reduces the damage his squadmates within \u003cAFFINITY_SHARE\u003eAffinity Range take by 75%. Squad kills restore 5% of his Health over 3s and increases Vex Armor duration by 1s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Guardian Blast":  {
                           "type":  "Focus Way",
                           "effect":  "Void Blast consumes 25 Energy for each ally hit within 8m and grants them 160 Shields.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Guardian Break":  {
                           "type":  "Focus Way",
                           "effect":  "When the Guardian Shell breaks, Warframe Shield Regeneration rate is increased by 150% and Regeneration Delay is reduced by 80%, for 12s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Guardian Derision":  {
                              "type":  "Melee Mod",
                              "effect":  "Blocking taunts enemies within 15 meters to target you instead of allies., +30% Combo Count Chance while Blocking",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Guardian Shell":  {
                           "type":  "Focus Way",
                           "effect":  "Void Blast can be charged to manifest a shield that drains Energy for every 400 Damage absorbed.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Guided Effigy":  {
                          "type":  "Warframe Mod",
                          "effect":  "Effigy Augment: Cast and hold to make Effigy move to your aim point. Deals 4000 Damage/s and restores 5 Energy for each enemy in its path. Roars on arrival, stunning nearby enemies.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Guided Ordnance":  {
                            "type":  "Primary Mod",
                            "effect":  "On Hit:\\n+30% Accuracy when Aiming for 9s",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Gun Glide":  {
                      "type":  "Primary Mod",
                      "effect":  "-20% Weapon Recoil, and +20% Accuracy when Sliding",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Gunslinger":  {
                       "type":  "Secondary Mod",
                       "effect":  "+30% Fire Rate",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Hall Of Malevolence":  {
                                "type":  "Warframe Mod",
                                "effect":  "Hall of Mirrors Augment: The damage of your doppelgangers is increased by 5% every time you kill an enemy.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Hallowed Eruption":  {
                              "type":  "Warframe Mod",
                              "effect":  "Hallowed Ground Augment: Reactivate to deal all Remaining Damage and \u003cDT_RADIATION_COLOR\u003eRadiation Status.\\nPassive: +200% Hallowed Ground Duration.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Hallowed Reckoning":  {
                               "type":  "Warframe Mod",
                               "effect":  "Reckoning Augment: Reckoning gains +40% range. A 3m radius around each affected enemy grants bonus armor to allies and deals 300 damage per second to enemies.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Hammer Shot":  {
                        "type":  "Primary Mod",
                        "effect":  "+60% Critical Damage, +80% Status Chance",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Handspring":  {
                       "type":  "Warframe Mod",
                       "effect":  "+160% Faster Knockdown Recovery",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Hard Engage":  {
                        "type":  "Companion Mod",
                        "effect":  "Engages enemies within 10m with melee attacks, dealing 90 \u003cDT_IMPACT_COLOR\u003eImpact Damage. Melee attacks are enhanced by Mods equipped in the Moa\u0027s weapon.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Hard Reset":  {
                       "type":  "Parazon Mod",
                       "effect":  "Mercy Kills reduce Companion Recovery by 15s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Hardened Wellspring":  {
                                "type":  "Focus Way",
                                "effect":  "Use your first Ability inside a Wellspring to increase its size, boost its duration by 20s, and grant 20% Ability Strength to those inside.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Harkonar Scope":  {
                           "type":  "Primary Mod",
                           "effect":  "+12s Combo Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Harrowed Hook":  {
                          "type":  "Melee Mod",
                          "effect":  "With Melee Weapon equipped, unchanneled hits slow target and disable jump for +2s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Harrowing Spire":  {
                            "type":  "Stance Mod",
                            "effect":  "Relentless jabs and powerful sweeping lunges.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Hastened Deflection":  {
                                "type":  "Companion Mod",
                                "effect":  "+90% Shield Recharge, -45% Shield Recharge Delay",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Hastened Steps":  {
                           "type":  "Warframe Mod",
                           "effect":  "+20% Sprint Speed, -20% Shield Capacity",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Hata-Satya":  {
                       "type":  "Primary Mod",
                       "effect":  "Each hit increases Critical Chance by 1.2%. Resets upon reloading or holstering.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Hawk Eye":  {
                     "type":  "Secondary Mod",
                     "effect":  "+220% Zoom",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Hawksetmod":  {
                       "type":  "Mod Set Mod",
                       "effect":  "Unknown effect",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Hayan-Dabor":  {
                        "type":  "Tektolyst Artifact Mod",
                        "effect":  "+60% Amp Multishot",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Healing Flame":  {
                          "type":  "Warframe Mod",
                          "effect":  "Fire Blast Augment: Each enemy hit heals by 25 to 50 depending on current Immolation level. With Ember, over healing grants you Overguard.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Healing Return":  {
                           "type":  "Melee Mod",
                           "effect":  "Restores 11 Health per Status Type affecting the target",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Health Conversion":  {
                              "type":  "Warframe Mod",
                              "effect":  "Health Orbs grant 450 Armor, stacking up to 3x. Taking damage will consume a stack after 3s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Heartseeker":  {
                        "type":  "Melee Mod",
                        "effect":  "Lock onto targets within 1m, but reduces blocking effectiveness., -50% Damage Block",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Hearty Nourishment":  {
                               "type":  "Warframe Mod",
                               "effect":  "Nourish Augment: Clear Status Effects and gain 5s of Status Immunity for each victim in Grendel\u0027s stomach.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Heated Charge":  {
                          "type":  "Secondary Mod",
                          "effect":  "+40% \u003cDT_FIRE_COLOR\u003eHeat",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Heavy Impact":  {
                         "type":  "Warframe Mod",
                         "effect":  "Create 6m seismic shockwaves from heavy landings, dealing 300 Damage and knocking foes off their feet.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Heavy Trauma":  {
                         "type":  "Melee Mod",
                         "effect":  "+60% \u003cDT_IMPACT_COLOR\u003eImpact",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Heavy Warhead":  {
                          "type":  "Secondary Mod",
                          "effect":  "+100% Blast Radius, -50% Projectile Speed",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Heightened Reflexes":  {
                                "type":  "Warframe Mod",
                                "effect":  "+20% Casting Speed, -20% Ability Efficiency",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Hell\u0027s Chamber":  {
                                "type":  "Shotgun Mod",
                                "effect":  "+40% Multishot",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Hellfire":  {
                     "type":  "Primary Mod",
                     "effect":  "+40% \u003cDT_FIRE_COLOR\u003eHeat",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Helminth Ferocity":  {
                              "type":  "Companion Mod",
                              "effect":  "Allows the Kubrow to use Finisher attacks on an enemy.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Hemorrhage":  {
                       "type":  "Secondary Mod",
                       "effect":  " \u003cDT_IMPACT_COLOR\u003eImpact Status Effects have 35% chance to apply a \u003cDT_SLASH_COLOR\u003eSlash Status Effect (x2 when Fire Rate is below 2.5)",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Higasa Serration":  {
                             "type":  "Primary Mod",
                             "effect":  "Alternate Fire applies a random Status Effect to enemies hit.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "High Noon":  {
                      "type":  "Stance Mod",
                      "effect":  "Bullets spray between wicked slash attacks.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Hit And Run":  {
                        "type":  "Parazon Mod",
                        "effect":  "+60% Parkour Speed after a Mercy for 15s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Hok-Kaal":  {
                     "type":  "Tektolyst Artifact Mod",
                     "effect":  "After using Void Mode, the next Amp attack deals x3.0 bonus damage (cooldown 5s)",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Hollow Point":  {
                         "type":  "Secondary Mod",
                         "effect":  "+60% Critical Damage, -15% Damage",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Hollowed Bullets":  {
                             "type":  "Arch-Gun Mod",
                             "effect":  "+80% Critical Damage",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Holster Amp":  {
                        "type":  "Warframe Mod",
                        "effect":  "On Equip:\\nSquad gains 60% Weapon Damage for 3s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Homing Fang":  {
                        "type":  "Stance Mod",
                        "effect":  "Fast strikes, many hits.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Howl":  {
                 "type":  "Companion Mod",
                 "effect":  "The kubrow cries out with a blood-curdling howl that strikes fear into 15 enemies within 24m for 16s.",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Hungering Blades":  {
                             "type":  "Focus Way",
                             "effect":  "Spectral weapons have a 100% chance to attack the same enemy a second time.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Hunt":  {
                 "type":  "Companion Mod",
                 "effect":  "The kubrow charges at a target, dragging them and dealing 120% damage to all in its path.",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Hunter Adrenaline":  {
                              "type":  "Warframe Mod",
                              "effect":  "Convert +45% of Damage on Health to Energy. Without Shields, ally Overguard imitates Health.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Hunter Command":  {
                           "type":  "Companion Mod",
                           "effect":  "Applying a \u003cDT_SLASH_COLOR\u003eSlash Status to an enemy causes the Companion to attack them for 6s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Hunter Recovery":  {
                            "type":  "Companion Mod",
                            "effect":  "Warframe healed for +30% Companion Damage dealt",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Hunter Synergy":  {
                           "type":  "Companion Mod",
                           "effect":  "+30% Primary Weapon Critical Chance added to Companion",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Hunter Track":  {
                         "type":  "Primary Mod",
                         "effect":  "+90% Status Duration",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Hunter\u0027s Bonesaw":  {
                                  "type":  "Melee Mod",
                                  "effect":  "Increase Finisher Damage by 120% against prone enemies.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Huntersetmod":  {
                         "type":  "Mod Set Mod",
                         "effect":  "Unknown effect",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Hush":  {
                 "type":  "Primary Mod",
                 "effect":  "Reduces the chance an enemy will hear gunfire by 100%.",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Hushed Invisibility":  {
                                "type":  "Warframe Mod",
                                "effect":  "Invisibility Augment: Weapon noise is reduced by 100% while invisible.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Hydraulic Barrel":  {
                             "type":  "Secondary Mod",
                             "effect":  "-40% Weapon Recoil, -20% Magazine Capacity",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Hydraulic Chamber":  {
                              "type":  "Shotgun Mod",
                              "effect":  "-60% Weapon Recoil, -10% Magazine Capacity",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Hydraulic Crosshairs":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "On Headshot:\\n+135% Critical Chance when Aiming for 9s",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Hydraulic Gauge":  {
                            "type":  "Primary Mod",
                            "effect":  "-60% Weapon Recoil, -10% Magazine Capacity",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Hyperion Thrusters":  {
                               "type":  "Archwing Mod",
                               "effect":  "+27.5% Flight Speed",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Hyperstrike":  {
                        "type":  "Plexus Mod",
                        "effect":  "+112.5% Turret Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Hypothermic Shell":  {
                              "type":  "Arch-Gun Mod",
                              "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold, +60% Status Chance",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Hysterical Assault":  {
                               "type":  "Warframe Mod",
                               "effect":  "Hysteria Augment: Attack with Valkyr’s Talons to leap onto targeted enemies up to 50m away. Gain +50% Parkour Velocity and +50% Sprint Speed for 5s.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Hysterical Fixation":  {
                                "type":  "Warframe Mod",
                                "effect":  "Hysteria Augment: While Hysteria is active, each kill restores 20% Maximum Shields.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Iatric Mycelium":  {
                            "type":  "Companion Mod",
                            "effect":  "Release a trail of spores every \u003cLOWER_IS_BETTER\u003e8s that heal the companion and its allies for 300 health over 5s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Ice Spring":  {
                       "type":  "Warframe Mod",
                       "effect":  "+24.2% to Parkour Velocity, +24.2% Aim Glide/Wall Latch Duration, +275% \u003cDT_FREEZE_COLOR\u003eCold on Bullet Jump",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Ice Storm":  {
                      "type":  "Secondary Mod",
                      "effect":  "+40% Magazine Capacity, +40% \u003cDT_FREEZE_COLOR\u003eCold",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Ice Wave Impedance":  {
                               "type":  "Warframe Mod",
                               "effect":  "Ice Wave Augment: Create a frozen trail for 12 seconds. Enemies that touch it are inflicted with \u003cDT_FREEZE_COLOR\u003eCold Status every second.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Icy Avalanche":  {
                          "type":  "Warframe Mod",
                          "effect":  "Avalanche Augment: Allies within Affinity Range are coated in ice that grants 60 Overguard per enemy hit. Overguard increases by 20% of your Armor once per enemy.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Immolated Radiance":  {
                               "type":  "Warframe Mod",
                               "effect":  "Immolation Augment: Allies within Affinity range will receive 50% of Immolation\u0027s Damage Reduction.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Immunity Resistance":  {
                                "type":  "Companion Mod",
                                "effect":  "+50% Status Damage",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Immuno Shield":  {
                          "type":  "Parazon Mod",
                          "effect":  "Gain 15% Disinfection and gain 5000 Affinity",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Impaler Munitions":  {
                              "type":  "Secondary Mod",
                              "effect":  "20% of Damage converted into \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Impenetrable Offense":  {
                                 "type":  "Melee Mod",
                                 "effect":  "+30% Damage Block, -10% Melee Damage",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Incendiary Coat":  {
                            "type":  "Shotgun Mod",
                            "effect":  "+40% \u003cDT_FIRE_COLOR\u003eHeat",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Indomitable Matrix":  {
                               "type":  "Plexus Mod",
                               "effect":  "\u003cLOWER_IS_BETTER\u003e-18% Breach Chance\\n+22% Shield Recharge during Breach\\n+30% Armor when below 53% Hull",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Inertia Dampeners":  {
                              "type":  "K-Drive Mod",
                              "effect":  "+4 Point Multiplier to Trick Score",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Infected Clip":  {
                          "type":  "Primary Mod",
                          "effect":  "+40% \u003cDT_POISON_COLOR\u003eToxin",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Infectious Bite":  {
                            "type":  "Companion Mod",
                            "effect":  "An attack that deals +200% Finisher Damage and infects the target with a Virus that grows 4 volatile pustules that react to damage and explode.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Infectious Injection":  {
                                 "type":  "Arch-Melee Mod",
                                 "effect":  "+60% \u003cDT_POISON_COLOR\u003eToxin, +60% Status Chance",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Infested Impedance":  {
                               "type":  "Warframe Mod",
                               "effect":  "Enemy Infested lose -18% Speed",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Infiltrate":  {
                       "type":  "Warframe Mod",
                       "effect":  "Prowl Augment: Ivara is able to bypass laser barriers and gains 25% Movement Speed.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Inner Gaze":  {
                       "type":  "Focus Way",
                       "effect":  "Increase Energy for Amps and Void Beam by 40%.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Inner Might":  {
                        "type":  "Focus Way",
                        "effect":  "Allows Abilities to be cast without using Energy or Shields but requires 60s to recharge.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Insatiable":  {
                       "type":  "Warframe Mod",
                       "effect":  "Ravenous Augment: Nidus has a chance for additional Mutation stacks while in the infestation. The base 60% chance increases with power strength, and multiple stacks are possible above 100%.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Instant Secure":  {
                           "type":  "Parazon Mod",
                           "effect":  "Gain 15% Disinfection and gain 10,000 Höllars",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Insulation":  {
                       "type":  "Warframe Mod",
                       "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold Resistance",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Internal Bleeding":  {
                              "type":  "Primary Mod",
                              "effect":  " \u003cDT_IMPACT_COLOR\u003eImpact Status Effects have 35% chance to apply a \u003cDT_SLASH_COLOR\u003eSlash Status Effect (x2 when Fire Rate is below 2.5)",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Intrepid Stand":  {
                           "type":  "Warframe Mod",
                           "effect":  "Final Stand Augment: Each javelin that damages an enemy grants 60 Overguard to Styanax and 30 Overguard to his allies within Affinity Range.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Intruder":  {
                     "type":  "Warframe Mod",
                     "effect":  "+8s to Hacking",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Intruder Stasis":  {
                            "type":  "Plexus Mod",
                            "effect":  "Freeze all Enemy Boarding Parties for 45s\\nCooldown: 300s",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Investigator":  {
                         "type":  "Companion Mod",
                         "effect":  "Helios Sentinel will scan objects and enemies within 50m over 2.0s. This consumes Codex Scanner charges.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Ion Burn":  {
                     "type":  "Plexus Mod",
                     "effect":  "+67.5% Railjack Boost Speed",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Ion Infusion":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity, +60% Status Chance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Iron Phoenix":  {
                         "type":  "Stance Mod",
                         "effect":  "Fast cutting attacks with puncture finish.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Iron Shrapnel":  {
                          "type":  "Warframe Mod",
                          "effect":  "Iron Skin Augment: Recasting Iron Skin will cause it to detonate, dealing 100% of its remaining Health as \u003cDT_PUNCTURE_COLOR\u003ePuncture Damage, and knocking down enemies.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Ironclad Charge":  {
                            "type":  "Warframe Mod",
                            "effect":  "Rhino Charge Augment: Each enemy hit increases Rhino\u0027s Armor Rating by 50% for 10s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Ironclad Flight":  {
                            "type":  "Warframe Mod",
                            "effect":  "Disable vacuum in Razorwing. Reduced Damage by 40% while Airborne.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Ironclad Matrix":  {
                            "type":  "Plexus Mod",
                            "effect":  "+33.75% Hull and Armor, +38.25% Max Shields and Shield Recharge",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Irradiating Disarm":  {
                               "type":  "Warframe Mod",
                               "effect":  "Radial Disarm Augment: Enemies will be affected by \u003cDT_RADIATION_COLOR\u003eRadiation Status for 9s",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Jade\u0027s Judgment":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "Light\u0027s Judgment Augment: Enemies damaged by the well have a 5% chance per hit to spawn a Jade Light above them, damaging them for 3s.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Jagged Edge":  {
                        "type":  "Melee Mod",
                        "effect":  "+60% \u003cDT_SLASH_COLOR\u003eSlash",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Jahu":  {
                 "type":  "Parazon Mod",
                 "effect":  "Corporeal laws are unwrit  As suns and love retreat",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Jahu Canticle":  {
                          "type":  "Secondary Mod",
                          "effect":  "Killing enemies reduces the Armor and Shields of other enemies within Affinity Range by 5%.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Jet Stream":  {
                       "type":  "Warframe Mod",
                       "effect":  "Turbulence Augment: Turbulence increases Movement Speed by 40% and Projectile Speed by 100% for Zephyr and her allies.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Jugulus Barbs":  {
                          "type":  "Melee Mod",
                          "effect":  "+90% \u003cDT_PUNCTURE_COLOR\u003ePuncture, +60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Jugulus Carapace":  {
                             "type":  "Warframe Mod",
                             "effect":  "+55% Armor, +20% Health",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Jugulus Spines":  {
                           "type":  "Secondary Mod",
                           "effect":  "+90% \u003cDT_PUNCTURE_COLOR\u003ePuncture, +60% Status Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Juice":  {
                  "type":  "K-Drive Mod",
                  "effect":  "Executing tricks charges Energy: 55 Energy per 100 Trick Points.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Justice Blades":  {
                           "type":  "Melee Mod",
                           "effect":  "+100% Melee Damage, +1 \u0027Justice\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Kaal-Zidi":  {
                      "type":  "Tektolyst Artifact Mod",
                      "effect":  "+30% Void Mode efficiency, +5% Movement Speed in Void Mode for each \u003cNARAMON_CLEAN\u003eNaramon School Mod",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Kavat\u0027s Grace":  {
                               "type":  "Warframe Mod",
                               "effect":  "Falling is 100% less likely to result in a hard landing.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Keep-Clean":  {
                       "type":  "Parazon Mod",
                       "effect":  "There\u0027s no Clean like Keep-Clean",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Khra":  {
                 "type":  "Parazon Mod",
                 "effect":  "To cosmic forms from tangent planes  We end as we began",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Khra Canticle":  {
                          "type":  "Secondary Mod",
                          "effect":  "Enemies have a 12% chance to drop a Universal Orb on death.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Kill Switch":  {
                        "type":  "Shotgun Mod",
                        "effect":  "On Kill:\\n+50% Reload Speed for 3s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Killer\u0027s Rush":  {
                               "type":  "Focus Way",
                               "effect":  "Initiating a finisher as Operator switches to Warframe, increasing melee Critical Chance by 50% for 40s.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Killing Blow":  {
                         "type":  "Melee Mod",
                         "effect":  "+120% Melee Damage On Heavy Attack, +60% Heavy Attack Wind Up Speed",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Kinetic Collision":  {
                              "type":  "Warframe Mod",
                              "effect":  "Speed Augment: Running into an opponent increases the duration of Speed by 4s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Kinetic Diversion":  {
                              "type":  "Archwing Mod",
                              "effect":  "Convert +40% of Damage on Health to Energy. Without Shields, ally Overguard imitates Health.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Kinetic Friction":  {
                             "type":  "K-Drive Mod",
                             "effect":  "Grinding builds up a charge that is released when landing the trick, dealing 400 \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage to enemies within 4m.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Kinetic Ricochet":  {
                             "type":  "Primary Mod",
                             "effect":  "Shots now bounce up to 6x and travel 30% further.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Kitgun Riven Mod":  {
                             "type":  "Kitgun Riven Mod",
                             "effect":  "Unknown effect",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Larva Burst":  {
                        "type":  "Warframe Mod",
                        "effect":  "Larva Augment: Reactivate Larva to detonate and deal 600 \u003cDT_POISON_COLOR\u003eToxin Damage in a 8m radius. This damage stacks for every enemy grabbed by the Larva.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Laser Sight":  {
                        "type":  "Shotgun Mod",
                        "effect":  "On Headshot:\\n+120% Critical Chance when Aiming for 9s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Lashing Coil":  {
                         "type":  "Stance Mod",
                         "effect":  "Fighting form devised for Conclave.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Lashta-Vak":  {
                       "type":  "Tektolyst Artifact Mod",
                       "effect":  "Void Sling emits a pulse that breaks Containers within 12 m, +2m bonus for each Mod from a unique School",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Last Gasp":  {
                      "type":  "Focus Way",
                      "effect":  "Revive your Warframe by transferring to Operator and killing 3 enemies before 15s elapse and the Revive Meter begins to drain.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Last Herald":  {
                        "type":  "Stance Mod",
                        "effect":  "Fighting form devised for Conclave.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Lasting Covenant":  {
                             "type":  "Warframe Mod",
                             "effect":  "Covenant Augment: Headshot kills increase Critical Chance bonus duration by 3s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Lasting Purity":  {
                           "type":  "Primary Mod",
                           "effect":  "+60% Damage when Aiming, +1 \u0027Purity\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Lasting Sting":  {
                          "type":  "Melee Mod",
                          "effect":  "+110% Status Duration",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Leaded Gas":  {
                       "type":  "Secondary Mod",
                       "effect":  "On Weak Point Hit:\\n+300% \u003cDT_GAS_COLOR\u003eGas Damage and Status Chance for 6s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Lethal Levitation":  {
                              "type":  "Focus Way",
                              "effect":  "Additional 50% Weapon Damage per Lifted enemy attacked by Operator. Lasts for 60s, stacks up to 4x.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Lethal Momentum":  {
                            "type":  "Secondary Mod",
                            "effect":  "+40% Projectile Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Lie In Wait":  {
                        "type":  "Primary Mod",
                        "effect":  "+20% Fire Rate when Crouching, +100% Weapon Recoil",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Life Strike":  {
                        "type":  "Melee Mod",
                        "effect":  "+20% Life Steal on Heavy Attack",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Lightning Dash":  {
                           "type":  "Focus Way",
                           "effect":  "Manifests ball lightning after a Void Sling that travels slowly and zaps enemies within 16m for 800 Damage. Costs 10 Energy.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Lightning Rod":  {
                          "type":  "Warframe Mod",
                          "effect":  "+60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity Resistance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Lingering Torment":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+90% Status Duration",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Lingering Transmutation":  {
                                    "type":  "Warframe Mod",
                                    "effect":  "Transmutation Probe Augment: Probe returns to cast position after reaching max range, and remains nearby for 15s. Recall Probe by recasting. Recast again to end.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Link Fiber":  {
                       "type":  "Companion Mod",
                       "effect":  "Increase Max Armor by +125% of Warframe\u0027s Armor",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Link Redirection":  {
                             "type":  "Companion Mod",
                             "effect":  "Increase Shield by +125% of Warframe\u0027s Max Shield",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Link Vitality":  {
                          "type":  "Companion Mod",
                          "effect":  "Increase Health by +125% of Warframe\u0027s Max Health",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Live Wire":  {
                      "type":  "Parazon Mod",
                      "effect":  "Shock enemies within 20m while Hacking",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Loaded Capacity":  {
                            "type":  "Shotgun Mod",
                            "effect":  "+30% Magazine Capacity, -15% Reload Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Lock And Load":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+20% Magazine Reloaded/s when Holstered",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Lohk":  {
                 "type":  "Parazon Mod",
                 "effect":  "From brooding gulfs are we beheld  By that which bears no name",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Lohk Canticle":  {
                          "type":  "Secondary Mod",
                          "effect":  "Killing enemies grants Allies within Affinity Range +30% Fire Rate for 15s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Loose Chamber":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+30% Reload Speed, +50% Weapon Recoil",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Loose Hatch":  {
                        "type":  "Primary Mod",
                        "effect":  "+30% Reload Speed, +50% Weapon Recoil",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Loose Magazine":  {
                           "type":  "Secondary Mod",
                           "effect":  "+50% Reload Speed, +50% Weapon Recoil",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Loot Detector":  {
                          "type":  "Warframe Mod",
                          "effect":  "Minimap shows loot crates.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Looter":  {
                   "type":  "Companion Mod",
                   "effect":  "Emits a pulse wave to break open Loot Crates within 22m.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Lorak Tauron Strike":  {
                                "type":  "Focus Way",
                                "effect":  "Summon forth Lorak from the Void and conjure its ruinous spells, calling forth a beam of energy from within. Enemies pierced by the beam have a 100% chance to drop Energy Orbs if killed within 10s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Lorun-Tash":  {
                       "type":  "Tektolyst Artifact Mod",
                       "effect":  "+400 Operator Armor",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Loyal Companion":  {
                            "type":  "Companion Mod",
                            "effect":  "When your Health falls below 35%, gain 75% Damage Reduction for 10s while your Companion becomes invincible and draws fire to itself for 10s. 60s cooldown.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Loyal Merulina":  {
                           "type":  "Warframe Mod",
                           "effect":  "Merulina Augment: Yareli no longer rides Merulina. Instead, Merulina follows her and casts Sea Snare on nearby enemies. 2s cooldown.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Loyal Retriever":  {
                            "type":  "Companion Mod",
                            "effect":  "13% chance to double Credit and Resource pickups",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Lucky Shot":  {
                       "type":  "Primary Mod",
                       "effect":  "+40% Projectile Speed, -2% Accuracy",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Mach Crash":  {
                       "type":  "Warframe Mod",
                       "effect":  "Mach Rush Augment: Impact shockwave leaves behind a vacuum that sucks in enemies within 8m.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Mad Stack":  {
                      "type":  "K-Drive Mod",
                      "effect":  "+120% Velocity when falling",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Madurai Transmute Core":  {
                                   "type":  "Transmutation Mod",
                                   "effect":  "Ensures transmuted mod is of Madurai polarity and eliminates credit cost.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Mafic Rain":  {
                       "type":  "Stance Mod",
                       "effect":  "Fighting form devised for Conclave.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Mag Locks":  {
                      "type":  "K-Drive Mod",
                      "effect":  "+30% K-Drive Grind Magnetism",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Magazine Extension":  {
                               "type":  "Arch-Gun Mod",
                               "effect":  "+60% Magazine Capacity",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Magazine Warp":  {
                          "type":  "Primary Mod",
                          "effect":  "+12% Magazine Capacity",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Maglev":  {
                   "type":  "Warframe Mod",
                   "effect":  "+30% Slide, -30% Friction",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Magma Chamber":  {
                          "type":  "Arch-Gun Mod",
                          "effect":  "+60% \u003cDT_FIRE_COLOR\u003eHeat, +60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Magnetic Blast":  {
                           "type":  "Focus Way",
                           "effect":  "Enemies hit by Void Blast are affected by Magnetize for 10s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Magnetic Boost":  {
                           "type":  "Focus Way",
                           "effect":  "Void Sling out of a Magnetic Flare to refresh its duration and increase its radius by 100%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Magnetic Capacity":  {
                              "type":  "Primary Mod",
                              "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +40% Magazine Capacity",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Magnetic Claws":  {
                           "type":  "Companion Mod",
                           "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +40% Status Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Magnetic Flare":  {
                           "type":  "Focus Way",
                           "effect":  "Use your first Ability to create a 8m radius field that lasts for 30s and disables the shields of any enemy that enters it.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Magnetic Might":  {
                           "type":  "Secondary Mod",
                           "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +40% Critical Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Magnetic Rush":  {
                          "type":  "Melee Mod",
                          "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +20% Attack Speed",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Magnetic Strafe":  {
                            "type":  "Shotgun Mod",
                            "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +40% Fire Rate",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Magnetic Strike":  {
                            "type":  "Companion Mod",
                            "effect":  "100% Chance to apply a \u003cDT_MAGNETIC_COLOR\u003eMagnetic status effect when inflicting an \u003cDT_IMPACT_COLOR\u003eImpact status effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Magnetic Welt":  {
                          "type":  "Shotgun Mod",
                          "effect":  " \u003cDT_IMPACT_COLOR\u003eImpact Status Effects have 35% chance to apply a \u003cDT_MAGNETIC_COLOR\u003eMagnetic Status Effect (x2 when Fire Rate is below 2.5)",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Magnetized Core":  {
                            "type":  "Arch-Melee Mod",
                            "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +40% Critical Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Magnetized Cycle":  {
                             "type":  "Arch-Gun Mod",
                             "effect":  "+60% \u003cDT_MAGNETIC_COLOR\u003eMagnetic, +30% Fire Rate",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Magnetized Discharge":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "Magnetize Augment: Recast on the target to detonate. Enemies hit have a 50% chance to be disarmed.\\nPassive: +45% Magnetize Range.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Magnum Force":  {
                         "type":  "Secondary Mod",
                         "effect":  "+165% Damage, -55% Accuracy",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Maim":  {
                 "type":  "Secondary Mod",
                 "effect":  "+120% \u003cDT_SLASH_COLOR\u003eSlash",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Maiming Strike":  {
                           "type":  "Melee Mod",
                           "effect":  "+150% Critical Chance for Slide Attack",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Malicious Code":  {
                           "type":  "Parazon Mod",
                           "effect":  "50% chance on Mercy Kill for enemies within 15m to cower in fear for 8s",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Malicious Raptor":  {
                             "type":  "Stance Mod",
                             "effect":  "Puncturing strikes and quick slashes.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Manifold Bond":  {
                          "type":  "Companion Mod",
                          "effect":  "Companion Precept Mods apply Status Effects from Companion weapons. Killing enemies with \u003cLOWER_IS_BETTER\u003e3 or more unique Status Effects reduces Companion Ability cooldowns by 3s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Mark Of The Beast":  {
                              "type":  "Melee Mod",
                              "effect":  "On 6 Melee Kills within 6s:\\n\\n+120% Status and Critical Chance for Secondary Weapon for 24s",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Marked Target":  {
                          "type":  "Arch-Gun Mod",
                          "effect":  "+120% Status Chance when Aiming",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Martial Fury":  {
                         "type":  "Melee Mod",
                         "effect":  "+20% Attack Speed, -50% Energy Rate",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Martyr Symbiosis":  {
                             "type":  "Companion Mod",
                             "effect":  "Drains and stores 20 health from corpses within 25m up to 40% of your health. If your health falls below 10%, Companion downs itself to heal you.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Master Key":  {
                       "type":  "Parazon Mod",
                       "effect":  "Unlock 5 lockers within 20m after Hacking",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Master Thief":  {
                         "type":  "Warframe Mod",
                         "effect":  "+40% chance to unlock locked lockers.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Master\u0027s Edge":  {
                               "type":  "Melee Mod",
                               "effect":  "Enables Tennokai. Increases Tennokai damage by 60%.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Maul":  {
                 "type":  "Companion Mod",
                 "effect":  "+330% Melee Damage",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Maximum Capacity":  {
                             "type":  "Primary Mod",
                             "effect":  "+30% Magazine Capacity, -15% Reload Speed",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Measured Burst":  {
                           "type":  "Primary Mod",
                           "effect":  "When Aiming:",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Mecha Empowered":  {
                            "type":  "Warframe Mod",
                            "effect":  "Increased Pistol Ammo recovery.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Mecha Overdrive":  {
                            "type":  "Companion Mod",
                            "effect":  "+60% Primary Weapon Status Chance added to Companion, +90% Status Duration",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Mecha Pulse":  {
                        "type":  "Warframe Mod",
                        "effect":  "Killing a Marked Enemy grants +60% Armor for 20s for each enemy within 30m.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Mecha Recharge":  {
                           "type":  "Companion Mod",
                           "effect":  "+90% Shield Recharge",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Mechasetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Medi-Pet Kit":  {
                         "type":  "Companion Mod",
                         "effect":  "+12 Companion Health Regen/s, -15s Companion Recovery Time",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Medi-Ray":  {
                     "type":  "Companion Mod",
                     "effect":  "Sentinel will occasionally heal its owner, restoring 12% Health over 4s.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Melee Elementalist":  {
                               "type":  "Melee Mod",
                               "effect":  "+90% Status Damage, +60% Heavy Attack Wind Up Speed",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Melee Guidance":  {
                           "type":  "Warframe Mod",
                           "effect":  "You lose \u003cLOWER_IS_BETTER\u003e6s Melee Combo Duration\\nSquadmates gain 12s Melee Combo Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Melee Prowess":  {
                          "type":  "Melee Mod",
                          "effect":  "+60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Melee Riven Mod":  {
                            "type":  "Melee Riven Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Mending Shot":  {
                         "type":  "Primary Mod",
                         "effect":  "Shoot Health Orbs to obtain them with +110% extra effect.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Mending Soul":  {
                         "type":  "Focus Way",
                         "effect":  "The first 4 revives are instantaneous. Additional revives are 100% faster.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Mending Splinters":  {
                              "type":  "Warframe Mod",
                              "effect":  "Splinter Storm Augment: For each target affected, Splinter Storm heals 15 Health/s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Mending Unity":  {
                          "type":  "Focus Way",
                          "effect":  "Increases Affinity Radius by 25m.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Mentor\u0027s Legacy":  {
                                 "type":  "Melee Mod",
                                 "effect":  "Enables Tennokai.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Merciless Gunfight":  {
                               "type":  "Secondary Mod",
                               "effect":  "+45% Critical Damage, +1.2 Punch Through",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Merulina Guardian":  {
                              "type":  "Warframe Mod",
                              "effect":  "Merulina Augment: Enemies eliminated during Sea Snares heal 20% of Merulina\u0027s health. Upon healing, gain +200% Reload Speed and Fire Rate on Secondary weapons for 20s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Mesa\u0027s Waltz":  {
                              "type":  "Warframe Mod",
                              "effect":  "Peacemaker Augment: Mesa can move at 50% Speed while using Peacemaker.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Mesmer Shield":  {
                          "type":  "Warframe Mod",
                          "effect":  "Mesmer Skin Augment: Revenant receives +50% Mesmer Skin Strength and allies within Affinity Range are granted a maximum of 5 charges.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Metal Auger":  {
                        "type":  "Primary Mod",
                        "effect":  "+1 Punch Through",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Metal Fiber":  {
                        "type":  "Companion Mod",
                        "effect":  "+250% Armor",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Metamorphic Magazine":  {
                                 "type":  "Primary Mod",
                                 "effect":  "+90% Magazine Capacity, +90% Ammo Maximum, Inflicting 20 cumulative attacks on an enemy will petrify them for 5s.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Metem-Erun":  {
                       "type":  "Tektolyst Artifact Mod",
                       "effect":  "Increase Operator Sprint Speed by +30%, +5% bonus for each Mod from a unique School",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Metem-Hakh":  {
                       "type":  "Tektolyst Artifact Mod",
                       "effect":  "+30% Operator Health \u0026 Shields, +15% bonus for each Mod from a unique School",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Meteor Crash":  {
                         "type":  "Arch-Melee Mod",
                         "effect":  "+90% \u003cDT_IMPACT_COLOR\u003eImpact",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Meteor Munitions":  {
                             "type":  "Secondary Mod",
                             "effect":  "20% of Damage converted into \u003cDT_IMPACT_COLOR\u003eImpact",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Meteoric Dash":  {
                          "type":  "Focus Way",
                          "effect":  "Void Sling deals 400 Extra Damage to enemies.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Meticulous Aim":  {
                           "type":  "Primary Mod",
                           "effect":  "+105% Headshot Damage, -45% Bodyshot Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Mind Freak":  {
                       "type":  "Warframe Mod",
                       "effect":  "Mind Control Augment: Controlled target inflicts +1000% Damage and gains +25% Movement and Attack Speed.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Mind Sprint":  {
                        "type":  "Focus Way",
                        "effect":  "Increases Void Sling Speed by 120%.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Mind Step":  {
                      "type":  "Focus Way",
                      "effect":  "Increases Operator Movement Speed by 30%.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Mischief":  {
                     "type":  "Companion Mod",
                     "effect":  "Smeeta Kavat becomes invisible for 9s every \u003cLOWER_IS_BETTER\u003e7s while a decoy kavat draws fire. Decoy has a 15% chance to evade damage and blinds nearby enemies on death.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Mobilize":  {
                     "type":  "Warframe Mod",
                     "effect":  "+20% to Parkour Velocity, +20% Aim Glide/Wall Latch Duration",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Modified Munitions":  {
                               "type":  "Arch-Gun Mod",
                               "effect":  "+60% Status Chance",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Molecular Conversion":  {
                                 "type":  "Companion Mod",
                                 "effect":  "Blast enemies within 10m, converting 200 Damage into Shields for the Warframe.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Molecular Fission":  {
                              "type":  "Warframe Mod",
                              "effect":  "Molecular Prime Augment: Enemies hit by Null Stars are primed. When killed, primed enemies will restore a Null Star charge and have a 100% chance of restoring two.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Molten Impact":  {
                          "type":  "Melee Mod",
                          "effect":  "+60% \u003cDT_FIRE_COLOR\u003eHeat",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Momentary Pause":  {
                            "type":  "Shotgun Mod",
                            "effect":  "On Kill:\\n+15 Heal Rate for 10s, -25% from Health Orbs",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Momentous Bond":  {
                           "type":  "Companion Mod",
                           "effect":  "Killing Eximus enemies grants 120% bonus of a random Elemental Damage to your Companion for 30s and reduces Companion Recovery Time by 18s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Morphic Transformer":  {
                                "type":  "Archwing Mod",
                                "effect":  "+20% Ability Strength",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Mortal Conduct":  {
                           "type":  "Melee Mod",
                           "effect":  "At Less than 50 Health:\\n+60% Damage taken is reflected when Blocking attacks while Channeling for 8s",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Motus Impact":  {
                         "type":  "Melee Mod",
                         "effect":  "Increase range of aerial melee attacks by +2m.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Motus Setup":  {
                        "type":  "Primary Mod",
                        "effect":  "100% Critical and Status Chance for 4s after landing from a Double or Bullet Jump.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Motus Signal":  {
                         "type":  "Warframe Mod",
                         "effect":  "Increase Double Jump strength by +200%.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Mountain\u0027s Edge":  {
                                 "type":  "Stance Mod",
                                 "effect":  "Sharp movements with wide reach.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Munitions Vortex":  {
                             "type":  "Plexus Mod",
                             "effect":  "Vortex that absorbs incoming fire and detonates, releasing damage.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Muzzle Flash":  {
                         "type":  "Warframe Mod",
                         "effect":  "Shooting Gallery Augment: After 6 kill assists by a player with Shooting Gallery, Mesa\u0027s next shot will blind enemies within 12m for 6s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Mystic Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "After your Companion uses Abilities with cooldowns \u003cLOWER_IS_BETTER\u003e5 times, you may cast a Warframe Ability without expending Energy.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Nano-Applicator":  {
                            "type":  "Shotgun Mod",
                            "effect":  "On Ability Cast:\\n+90% Status Chance when Aiming for 9s",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Napalm Grenades":  {
                            "type":  "Primary Mod",
                            "effect":  "Grenades leave a burning patch on impact.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Naramon Transmute Core":  {
                                   "type":  "Transmutation Mod",
                                   "effect":  "Ensures transmuted mod is of Naramon polarity and eliminates credit cost.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Narrow Barrel":  {
                          "type":  "Shotgun Mod",
                          "effect":  "On Hit:\\n+30% Accuracy when Aiming for 9s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Natural Talent":  {
                           "type":  "Warframe Mod",
                           "effect":  "Improves Casting Speed on Warframe abilities if applicable.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Nebula Bore":  {
                        "type":  "Arch-Melee Mod",
                        "effect":  "+90% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Necramech Augur":  {
                            "type":  "Necramech Mod",
                            "effect":  "240% Energy spent on abilities is converted to Shields.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Necramech Aviator":  {
                              "type":  "Necramech Mod",
                              "effect":  "Reduced damage by 40% while airborne",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Necramech Blitz":  {
                            "type":  "Necramech Mod",
                            "effect":  "+80% Slide Attack Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Necramech Continuity":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+30% Ability Duration",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Deflection":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+90% Shield Recharge, -45% Shield Recharge Delay",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Drift":  {
                            "type":  "Necramech Mod",
                            "effect":  "+60% Hover Efficiency",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Necramech Efficiency":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+30% Engine Efficiency",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Enemy Sense":  {
                                  "type":  "Necramech Mod",
                                  "effect":  "+30m Enemy Radar",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Necramech Flow":  {
                           "type":  "Necramech Mod",
                           "effect":  "+100% Energy Max",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Necramech Friction":  {
                               "type":  "Necramech Mod",
                               "effect":  "+60% Slide Efficiency",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Necramech Fury":  {
                           "type":  "Necramech Mod",
                           "effect":  "+40% Melee Attack Speed",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Necramech Hydraulics":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+120% Jump Height",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Intensify":  {
                                "type":  "Necramech Mod",
                                "effect":  "+30% Ability Strength",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Necramech Pressure Point":  {
                                     "type":  "Necramech Mod",
                                     "effect":  "+60% Melee Damage",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Necramech Rage":  {
                           "type":  "Necramech Mod",
                           "effect":  "Convert +15% of Damage on Health to Energy. Without Shields, ally Overguard imitates Health.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Necramech Reach":  {
                            "type":  "Necramech Mod",
                            "effect":  "+1 Melee Range",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Necramech Rebuke":  {
                             "type":  "Necramech Mod",
                             "effect":  "Electrifies enemies within 20m for 3s and dealing 300 \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage when shields are depleted.\\n10s cooldown.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Necramech Redirection":  {
                                  "type":  "Necramech Mod",
                                  "effect":  "+100% Shield Capacity",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Necramech Refuel":  {
                             "type":  "Necramech Mod",
                             "effect":  "+20% Engine Replenish",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Necramech Repair":  {
                             "type":  "Necramech Mod",
                             "effect":  "Restore 10% Health/s over 3s when Health drops below 20%. 15s Cooldown.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Necramech Seismic Wave":  {
                                   "type":  "Necramech Mod",
                                   "effect":  "+45% Slam Attack Damage",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Necramech Slipstream":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+60% Slide",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Stamina":  {
                              "type":  "Necramech Mod",
                              "effect":  "-60% Sprint Efficiency",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Necramech Steel Fiber":  {
                                  "type":  "Necramech Mod",
                                  "effect":  "+100% Armor",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Necramech Streamline":  {
                                 "type":  "Necramech Mod",
                                 "effect":  "+30% Ability Efficiency",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Necramech Stretch":  {
                              "type":  "Necramech Mod",
                              "effect":  "+45% Ability Range",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Necramech Thrusters":  {
                                "type":  "Necramech Mod",
                                "effect":  "+100% Engine Max",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Necramech Vitality":  {
                               "type":  "Necramech Mod",
                               "effect":  "+100% Health",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Necrophagic Vigor":  {
                              "type":  "Primary Mod",
                              "effect":  "Reloading drains up to half your Health based on ammo created, increasing Critical Chance and Critical Damage by +20% for every 20 Health drained. Capped at 360%.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Negate":  {
                   "type":  "Companion Mod",
                   "effect":  "Sentinel prevents Status Effects from applying to its owner once every \u003cLOWER_IS_BETTER\u003e5s.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Negation Armor":  {
                           "type":  "Warframe Mod",
                           "effect":  "Scarab Shell Augment: When Inaros takes fatal damage, he consumes Scarab Shell to heal with a brief invulnerability that ends with a deadly \u003cDT_SLASH_COLOR\u003eSlash Status Effect. Cooldown \u003cLOWER_IS_BETTER\u003e30s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Netra":  {
                  "type":  "Parazon Mod",
                  "effect":  "Carrion hordes trill their profane  Accord with eldritch plans",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Netra Invocation":  {
                             "type":  "Secondary Mod",
                             "effect":  "Alternate Fire increases Ability Efficiency by 4% for 20s for each enemy hit. Stacks up to 15 times.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Neutralize":  {
                       "type":  "Companion Mod",
                       "effect":  "The kubrow roars, causing enemies within 10m to stumble and drop their weapons.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Neutralizing Justice":  {
                                 "type":  "Primary Mod",
                                 "effect":  "Each Miter blade has a +90% chance to immediately destroy a Nullifier field., +1 \u0027Justice\u0027",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Neutron Star":  {
                         "type":  "Warframe Mod",
                         "effect":  "Null Star Augment: Particles deal 240 \u003cDT_FIRE_COLOR\u003eHeat Damage with guaranteed Status effect in 8m. On recast, remaining particles seek out enemies with doubled search radius.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Nidri Tauron Strike":  {
                                "type":  "Focus Way",
                                "effect":  "Summon forth Nidri from the Void and plant the noble staff into the ground, creating a titanic splash of water that becomes a lingering vortex for 20s. 50% of damage dealt to enemies caught in the vortex is also inflicted upon all other enemies within it.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Night Stalker":  {
                          "type":  "Secondary Mod",
                          "effect":  "On Hit:",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Nightwatch Napalm":  {
                              "type":  "Primary Mod",
                              "effect":  "Rockets disperse napalm, inflicting 30% damage over 6s across 90% of the explosion area.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Nira\u0027s Anguish":  {
                                "type":  "Warframe Mod",
                                "effect":  "+15% to Parkour Velocity, +15% Aim Glide/Wall Latch Duration",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Nira\u0027s Contempt":  {
                                 "type":  "Melee Mod",
                                 "effect":  "+90% Melee Damage, +60% Status Chance",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Nira\u0027s Hatred":  {
                               "type":  "Warframe Mod",
                               "effect":  "+35% Health, +15% Ability Duration",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Nirasetmod":  {
                       "type":  "Mod Set Mod",
                       "effect":  "Unknown effect",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Nitro Boost":  {
                        "type":  "K-Drive Mod",
                        "effect":  "+30% K-Drive Boost Speed",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "No Current Leap":  {
                            "type":  "Warframe Mod",
                            "effect":  "+10% Mobility, 0 Energy Rate",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "No Quarter":  {
                       "type":  "Focus Way",
                       "effect":  "Killing a disarmed enemy increases Operator energy regen rate by 10% for 10s. 4 Max Stacks.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "No Return":  {
                      "type":  "Secondary Mod",
                      "effect":  "+20% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Noble Cadence":  {
                          "type":  "Stance Mod",
                          "effect":  "Fighting form devised for Conclave.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "North Wind":  {
                       "type":  "Melee Mod",
                       "effect":  "+60% \u003cDT_FREEZE_COLOR\u003eCold",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Null Audit":  {
                       "type":  "Companion Mod",
                       "effect":  "The Hound utilizes the same Aura and Abilities as an Eximus enemy for 60s, while stripping its Overguard by 50%.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Odomedic":  {
                     "type":  "Companion Mod",
                     "effect":  "Every \u003cLOWER_IS_BETTER\u003e3m traversed by Wall Running regenerates +40 Health over 4s. This effect can stack up to 3x.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Omikuji\u0027s Fortune":  {
                                   "type":  "Warframe Mod",
                                   "effect":  "Omikuji Augment: Reduce Omikuji\u0027s Cooldown by 4s when you kill an enemy with the weapon affected by Koumei\u0027s Passive.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Omn-Evi":  {
                    "type":  "Tektolyst Artifact Mod",
                    "effect":  "+60% Amp Critical Chance, +10% Amp Critical Damage for each \u003cZENURIK_CLEAN\u003eZenurik School Mod",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Onslaught Matrix":  {
                             "type":  "Plexus Mod",
                             "effect":  "+22% Turret Damage while 100% Hull\\n20% chance to Reflect 38% Damage while over 80% Shields\\n+9% Battle Mod Efficiency",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Opening Slam":  {
                         "type":  "Focus Way",
                         "effect":  "Performing a Slam as Operator switches to Warframe and grants double Combo gain for 20s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Opportunity\u0027s Reach":  {
                                     "type":  "Melee Mod",
                                     "effect":  "Enables Tennokai. Increases opportunity window to 4.0s and melee range by 3m for Tennokai attacks.",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Ordnance Cheap Shot":  {
                                "type":  "Plexus Mod",
                                "effect":  "Ordnance weapons have a +90% chance to not consume Munitions",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Ordnance Velocity":  {
                              "type":  "Plexus Mod",
                              "effect":  "+90% Ordnance Projectile Speed",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Ore Gaze":  {
                     "type":  "Warframe Mod",
                     "effect":  "Petrify Augment: Petrified enemies are scanned into the Codex and have a 25% chance to drop additional loot when killed.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Organ Shatter":  {
                          "type":  "Melee Mod",
                          "effect":  "+60% Critical Damage",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Orgone Tuning Matrix":  {
                                 "type":  "Plexus Mod",
                                 "effect":  "+33.75% Forge Capacity, \u003cLOWER_IS_BETTER\u003e-22.5% Forge Cooldown, +22.5% Elemental Resistance, +27% Turret Heat Capacity ",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Oull":  {
                 "type":  "Parazon Mod",
                 "effect":  "Through endless faces, countless forms, a multitude unfolds.  (Mimics any Requiem Mod)",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Out Of Sight":  {
                         "type":  "Parazon Mod",
                         "effect":  "Blinds enemies within 18m on Mercy Kill",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Overcharge Detectors":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "Exposes enemies at maximum Energy Capacity within 30m.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Overcharged":  {
                        "type":  "Warframe Mod",
                        "effect":  "On Respawn:",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Overloader":  {
                       "type":  "Plexus Mod",
                       "effect":  "+87% Maximum Ordnance Munitions",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Overview":  {
                     "type":  "Primary Mod",
                     "effect":  "-60% Zoom while Aim Gliding",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Overwhelming Power":  {
                               "type":  "Focus Way",
                               "effect":  "Gain +5% Ability Strength for each enemy hit by the initial Tauron Strike for 30s. Max +50%.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Pacifying Bolts":  {
                            "type":  "Warframe Mod",
                            "effect":  "Psychic Bolts Augment: Throw an additional 3 force bolts with guaranteed \u003cDT_RADIATION_COLOR\u003eRadiation Status Effect. Enemies struck are confused for 10s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Pack Leader":  {
                        "type":  "Companion Mod",
                        "effect":  "Heal your Companion with Melee hits. Excess healing grants Overguard.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Pain Points":  {
                        "type":  "Secondary Mod",
                        "effect":  "On Weak Point hits with Primary Fire:\\n+60% Weak Point Damage for 5s. Stacks up to 10x.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Pain Threshold":  {
                           "type":  "Warframe Mod",
                           "effect":  "+160% Faster Stagger Recovery",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Panzer Devolution":  {
                              "type":  "Companion Mod",
                              "effect":  "Devolves into its larval form when downed and attacks enemies with quills, dealing 60 \u003cDT_VIRAL_COLOR\u003eViral Damage each. Regains true form after 30s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Parallax Scope":  {
                           "type":  "Arch-Gun Mod",
                           "effect":  "+100% Critical Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Paralytic Spores":  {
                             "type":  "Companion Mod",
                             "effect":  "Charges at an enemy within 30m dealing 160 damage. This releases spores that affect enemies within 15m, opening them up to Melee Finishers, and slowing them by 50% for 10s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Parasitic Vitality":  {
                               "type":  "Warframe Mod",
                               "effect":  "Parasitic Link Augment: Nidus and any ally he\u0027s bound to gain 4% Max Health per Mutation during Parasitic Link.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Parry":  {
                  "type":  "Warframe Mod",
                  "effect":  "+96% chance to open enemies to Finisher Attacks after Warframe blocks Melee",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Particle Ram":  {
                         "type":  "Plexus Mod",
                         "effect":  "Railjack Ram that deals damage to anything it touches when moving forward.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Partitioned Mallet":  {
                               "type":  "Warframe Mod",
                               "effect":  "Mallet Augment: Create an additional Mallet with \u003cLOWER_IS_BETTER\u003e20% reduced range.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Patagium":  {
                     "type":  "Warframe Mod",
                     "effect":  "+90% Aim Glide/Wall Latch Duration",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Path Of Statues":  {
                            "type":  "Warframe Mod",
                            "effect":  "Landslide Augment: Leave a trail for 12s that petrifies enemies for 6s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Pathogen Rounds":  {
                            "type":  "Secondary Mod",
                            "effect":  "+40% \u003cDT_POISON_COLOR\u003eToxin",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Peaceful Provocation":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "Pacify \u0026 Provoke Augment: Pacify converts damage done to allies into an aura that slows enemies by 40%. Provoke converts damage done to enemies into 15% extra Ability Strength.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Peculiar Audience":  {
                              "type":  "Peculiar Mod",
                              "effect":  "Killing an enemy has a 60% chance to amuse a certain Void entity. Cooldown: 20s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Peculiar Bloom":  {
                           "type":  "Peculiar Mod",
                           "effect":  "Critical hits cause flowers to grow from the wounds.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Peculiar End":  {
                         "type":  "Peculiar Mod",
                         "effect":  "Finisher kills have a 100% chance to dissolve enemies in dread.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Peculiar Growth":  {
                            "type":  "Peculiar Mod",
                            "effect":  "Damaging an enemy will inflate the body part hit for 6s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Perfect Balance":  {
                            "type":  "K-Drive Mod",
                            "effect":  "+66% Chance to Resist Falls",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Perpetual Agony":  {
                            "type":  "Secondary Mod",
                            "effect":  "+90% Status Duration",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Persistent Posture":  {
                               "type":  "Posture Mod",
                               "effect":  "The companion will pick a target and then attack it relentlessly. +40% Impact Damage",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Phoenix Blaze":  {
                          "type":  "Plexus Mod",
                          "effect":  "Wreathes the Railjack in fire, increasing Turret Damage and Speed.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Phoenix Renewal":  {
                            "type":  "Warframe Mod",
                            "effect":  "Renewal Augment: Taking fatal damage while under the effects of Renewal will instead Heal you or allies to 50% Health. This effect triggers only once for each ally every 60s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Phoenix Spirit":  {
                           "type":  "Focus Way",
                           "effect":  "Elemental Damage increased by |PERCENT|%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Phoenix Talons":  {
                           "type":  "Focus Way",
                           "effect":  "Physical Damage and Operator Damage increased by 30%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Photon Overcharge":  {
                              "type":  "Primary Mod",
                              "effect":  "+90% Critical Damage, On Kill or Assist: Slain enemies have a 2% chance to drop an Energy Orb per \u003cDT_FREEZE_COLOR\u003eCold Status affecting them.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Photon Repeater":  {
                            "type":  "Warframe Mod",
                            "effect":  "Photon Strike Augment: If Photon Strike hits at least \u003cLOWER_IS_BETTER\u003e5 enemies, the next cast will cost no Energy and fire two additional strikes.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Physique":  {
                     "type":  "Warframe Mod",
                     "effect":  "Squad gains +20% Maximum Health",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Piercing Caliber":  {
                             "type":  "Primary Mod",
                             "effect":  "+120% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Piercing Fury":  {
                          "type":  "Stance Mod",
                          "effect":  "Fighting form devised for Conclave.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Piercing Hit":  {
                         "type":  "Primary Mod",
                         "effect":  "+12% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Piercing Navigator":  {
                               "type":  "Warframe Mod",
                               "effect":  "Navigator Augment: Each hit increases the projectile\u0027s Critical Chance by 50% up to a max of 250%.\\n+3 Projectile Punch Through. ",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Piercing Roar":  {
                          "type":  "Warframe Mod",
                          "effect":  "Roar Augment: Roar gains +40% range. Enemies within 25m are knocked down and suffer 5 stacks of \u003cDT_PUNCTURE_COLOR\u003ePuncture Status.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Piercing Step":  {
                          "type":  "Warframe Mod",
                          "effect":  "+18% to Parkour Velocity, +18% Aim Glide/Wall Latch Duration, +60% \u003cDT_PUNCTURE_COLOR\u003ePuncture on Bullet Jump",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Pilfering Strangledome":  {
                                   "type":  "Warframe Mod",
                                   "effect":  "Strangledome Augment: Enemies held in Strangledome have a 65% chance of dropping additional loot.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Pilfering Swarm":  {
                            "type":  "Warframe Mod",
                            "effect":  "Tentacle Swarm Augment: Enemies held by tentacles have a 100% chance at additional drops.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Pistol Acuity":  {
                          "type":  "Secondary Mod",
                          "effect":  "+350% Weak Point Damage, +350% Weak Point Critical Chance. Multishot cannot be modified.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Pistol Ammo Mutation":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "Converts Primary ammo pickups to 50% of Ammo Pick Up.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Pistol Elementalist":  {
                                "type":  "Secondary Mod",
                                "effect":  "+90% Status Damage, +60% Reload Speed",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Pistol Gambit":  {
                          "type":  "Secondary Mod",
                          "effect":  "+60% Critical Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Pistol Riven Mod":  {
                             "type":  "Pistol Riven Mod",
                             "effect":  "Unknown effect",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Pistol Scavenger":  {
                             "type":  "Warframe Mod",
                             "effect":  "Squad receives +150% Pistol Ammo Recovery",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Plan B":  {
                   "type":  "Primary Mod",
                   "effect":  "On Hit:\\n+20% Secondary Weapon Fire Rate for 3s",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Point Blank":  {
                        "type":  "Shotgun Mod",
                        "effect":  "+40% Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Point Strike":  {
                         "type":  "Primary Mod",
                         "effect":  "+60% Critical Chance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Pointed Wind":  {
                         "type":  "Stance Mod",
                         "effect":  "Spiral strikes, lifting combos.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Poise":  {
                  "type":  "Focus Way",
                  "effect":  "Gain immunity to slow, stagger, and knockdown effects for 40s after transferring between Operator or Warframe.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Poisonous Sting":  {
                            "type":  "Arch-Melee Mod",
                            "effect":  "+120% \u003cDT_POISON_COLOR\u003eToxin",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Polar Magazine":  {
                           "type":  "Arch-Gun Mod",
                           "effect":  "+120% \u003cDT_FREEZE_COLOR\u003eCold",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Pool Of Life":  {
                         "type":  "Warframe Mod",
                         "effect":  "Well of Life Augment: On death, marked enemies will drop 4 Health Orbs with a 100% chance of dropping an Energy Orb.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Pop Top":  {
                    "type":  "K-Drive Mod",
                    "effect":  "-60% Jump Charge Time",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Poppin\u0027 Vert":  {
                              "type":  "K-Drive Mod",
                              "effect":  "+80% K-Drive Double Jump Height",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Pounce":  {
                   "type":  "Companion Mod",
                   "effect":  "The Kavat pounces at an enemy, dealing 90% Damage and stunning them for a short duration.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Power Donation":  {
                           "type":  "Warframe Mod",
                           "effect":  "You lose \u003cLOWER_IS_BETTER\u003e30% Ability Strength\\nSquadmates gain 30% Ability Strength",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Power Drain":  {
                        "type":  "Parazon Mod",
                        "effect":  "Next ability cast after Mercy Kill gains +50% Ability Strength",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Power Of Three":  {
                           "type":  "Warframe Mod",
                           "effect":  "Quiver Augment: Quiver fires three arrows and consumes \u003cLOWER_IS_BETTER\u003e20 more Energy.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Power Spike":  {
                        "type":  "Focus Way",
                        "effect":  "Melee Combo Counter now decays while out of combat by 5 every few seconds, instead of depleting completely.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Power Throw":  {
                        "type":  "Melee Mod",
                        "effect":  "+1.3 Punch Through, On Consecutive throw (Max stacks 3):\\n+66.7% Throw Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Power Transfer":  {
                           "type":  "Focus Way",
                           "effect":  "100% Amp Critical Damage for 20s on switching to Operator. 50% Casting Speed on switching to Warframe.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Precision Conditioning":  {
                                   "type":  "Companion Mod",
                                   "effect":  "+385% Melee Damage, Convert all base Physical Damage to \u003cDT_SLASH_COLOR\u003eSlash Damage",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Precision Intensify":  {
                                "type":  "Warframe Mod",
                                "effect":  "+90% Ability Strength for your 4th Ability",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Precision Munition":  {
                               "type":  "Primary Mod",
                               "effect":  "+100% Accuracy, +50% Projectile Speed",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Precision Strike":  {
                             "type":  "Primary Mod",
                             "effect":  "Hitting an enemy directly with the grenade increases Reload Speed by 150% for 5s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Predator":  {
                     "type":  "Plexus Mod",
                     "effect":  "+75% Turret Critical Chance",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Preparation":  {
                        "type":  "Warframe Mod",
                        "effect":  "+100% Maximum Energy is filled on Spawn",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Pressure Point":  {
                           "type":  "Melee Mod",
                           "effect":  "+80% Melee Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Pressurized Magazine":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "On Reload:\\n+90% Fire Rate when Aiming for 9s",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Prey Of Dynar":  {
                          "type":  "Warframe Mod",
                          "effect":  "Shroud of Dynar Augment: Increase an enemy’s Damage Vulnerability by 50%. Using Fang of Raksh on that enemy increases its spread radius by 150%.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Primal Rage":  {
                        "type":  "Warframe Mod",
                        "effect":  "Primal Fury Augment: Killing an enemy increases Critical Chance by 15%. The increase decays by 1%/s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Primary Acuity":  {
                           "type":  "Primary Mod",
                           "effect":  "+350% Weak Point Damage, +350% Weak Point Critical Chance. Multishot cannot be modified.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Primed Ammo Chain":  {
                              "type":  "Arch-Gun Mod",
                              "effect":  "+165% Ammo Maximum",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Ammo Stock":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+110% Magazine Capacity",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Bane Of Corpus":  {
                                  "type":  "Primary Mod",
                                  "effect":  "x1.55 Damage to Corpus",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Bane Of Grineer":  {
                                   "type":  "Primary Mod",
                                   "effect":  "x1.55 Damage to Grineer",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Primed Bane Of Infested":  {
                                    "type":  "Primary Mod",
                                    "effect":  "x1.55 Damage to Infested",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Primed Bane Of Orokin":  {
                                  "type":  "Primary Mod",
                                  "effect":  "x1.55 Damage to Orokin",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Bane Of The Murmur":  {
                                      "type":  "Primary Mod",
                                      "effect":  "x1.55 Damage to Murmur",
                                      "farm":  "Various Sources (Check Codex Database)",
                                      "value":  "Standard"
                                  },
    "Primed Blunderbuss":  {
                               "type":  "Shotgun Mod",
                               "effect":  "+165% Critical Chance",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Chamber":  {
                           "type":  "Primary Mod",
                           "effect":  "+100% Damage on first shot in Magazine",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Primed Charged Chamber":  {
                                   "type":  "Primary Mod",
                                   "effect":  "+110% Damage on first shot in Magazine",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Primed Charged Shell":  {
                                 "type":  "Shotgun Mod",
                                 "effect":  "+165% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Chilling Grasp":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "+165% \u003cDT_FREEZE_COLOR\u003eCold",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Cleanse Corpus":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "x1.55 Damage to Corpus",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Cleanse Grineer":  {
                                   "type":  "Shotgun Mod",
                                   "effect":  "x1.55 Damage to Grineer",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Primed Cleanse Infested":  {
                                    "type":  "Shotgun Mod",
                                    "effect":  "x1.55 Damage to Infested",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Primed Cleanse Orokin":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "x1.55 Damage to Orokin",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Cleanse The Murmur":  {
                                      "type":  "Shotgun Mod",
                                      "effect":  "x1.55 Damage to Murmur",
                                      "farm":  "Various Sources (Check Codex Database)",
                                      "value":  "Standard"
                                  },
    "Primed Combustion Rounds":  {
                                     "type":  "Arch-Gun Mod",
                                     "effect":  "+187% \u003cDT_FIRE_COLOR\u003eHeat",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Primed Convulsion":  {
                              "type":  "Secondary Mod",
                              "effect":  "+165% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Counterbalance":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "-85% Weapon Recoil",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Cryo Rounds":  {
                               "type":  "Primary Mod",
                               "effect":  "+165% \u003cDT_FREEZE_COLOR\u003eCold",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Deadly Efficiency":  {
                                     "type":  "Arch-Gun Mod",
                                     "effect":  "On Reload From Empty:\\n+220% Damage for 17s",
                                     "farm":  "Various Sources (Check Codex Database)",
                                     "value":  "Standard"
                                 },
    "Primed Dual Rounds":  {
                               "type":  "Arch-Gun Mod",
                               "effect":  "+110% Multishot",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Expel Corpus":  {
                                "type":  "Secondary Mod",
                                "effect":  "x1.55 Damage to Corpus",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Expel Grineer":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "x1.55 Damage to Grineer",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Expel Infested":  {
                                  "type":  "Secondary Mod",
                                  "effect":  "x1.55 Damage to Infested",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Expel Orokin":  {
                                "type":  "Secondary Mod",
                                "effect":  "x1.55 Damage to Orokin",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Expel The Murmur":  {
                                    "type":  "Secondary Mod",
                                    "effect":  "x1.55 Damage to Murmur",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Primed Fast Deflection":  {
                                   "type":  "Warframe Mod",
                                   "effect":  "+165% Shield Recharge, -55% Shield Recharge Delay",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Primed Fast Hands":  {
                              "type":  "Primary Mod",
                              "effect":  "+55% Reload Speed",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Fever Strike":  {
                                "type":  "Melee Mod",
                                "effect":  "+165% \u003cDT_POISON_COLOR\u003eToxin",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Firestorm":  {
                             "type":  "Primary Mod",
                             "effect":  "Improves the Blast Radius of weapons with Radial Attacks.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Primed Fulmination":  {
                               "type":  "Secondary Mod",
                               "effect":  "Improves the Blast Radius of weapons with Radial Attacks.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Fury":  {
                        "type":  "Melee Mod",
                        "effect":  "+55% Attack Speed",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Primed Heated Charge":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "+165% \u003cDT_FIRE_COLOR\u003eHeat",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Heavy Trauma":  {
                                "type":  "Melee Mod",
                                "effect":  "+165% \u003cDT_IMPACT_COLOR\u003eImpact",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Magazine Warp":  {
                                 "type":  "Primary Mod",
                                 "effect":  "+55% Magazine Capacity",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Morphic Transformer":  {
                                       "type":  "Archwing Mod",
                                       "effect":  "+55% Ability Strength",
                                       "farm":  "Various Sources (Check Codex Database)",
                                       "value":  "Standard"
                                   },
    "Primed Pack Leader":  {
                               "type":  "Companion Mod",
                               "effect":  "Heal your Companion with Melee hits. Excess healing grants Overguard.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Pistol Ammo Mutation":  {
                                        "type":  "Secondary Mod",
                                        "effect":  "Converts Primary ammo pickups to 92% of Ammo Pick Up.",
                                        "farm":  "Various Sources (Check Codex Database)",
                                        "value":  "Standard"
                                    },
    "Primed Quickdraw":  {
                             "type":  "Secondary Mod",
                             "effect":  "+88% Reload Speed",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Primed Reach":  {
                         "type":  "Melee Mod",
                         "effect":  "+3 Range",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Primed Redirection":  {
                               "type":  "Warframe Mod",
                               "effect":  "+180% Shield Capacity",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Primed Regen":  {
                         "type":  "Companion Mod",
                         "effect":  "Sentinel recovery time reduced by 35s. Revives with 10s of invulnerability.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Primed Rifle Ammo Mutation":  {
                                       "type":  "Primary Mod",
                                       "effect":  "Converts Secondary ammo pickups to 92% of Ammo Pick Up.",
                                       "farm":  "Various Sources (Check Codex Database)",
                                       "value":  "Standard"
                                   },
    "Primed Rubedo-Lined Barrel":  {
                                       "type":  "Arch-Gun Mod",
                                       "effect":  "+187% Damage",
                                       "farm":  "Various Sources (Check Codex Database)",
                                       "value":  "Standard"
                                   },
    "Primed Shotgun Ammo Mutation":  {
                                         "type":  "Shotgun Mod",
                                         "effect":  "Converts Secondary ammo pickups to 92% of Ammo Pick Up.",
                                         "farm":  "Various Sources (Check Codex Database)",
                                         "value":  "Standard"
                                     },
    "Primed Shred":  {
                         "type":  "Primary Mod",
                         "effect":  "+55% Fire Rate (x2 for Bows), +2.2 Punch Through",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Primed Slip Magazine":  {
                                 "type":  "Secondary Mod",
                                 "effect":  "+55% Magazine Capacity",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Smite Corpus":  {
                                "type":  "Melee Mod",
                                "effect":  "x1.55 Damage to Corpus",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Smite Grineer":  {
                                 "type":  "Melee Mod",
                                 "effect":  "x1.55 Damage to Grineer",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Smite Infested":  {
                                  "type":  "Melee Mod",
                                  "effect":  "x1.55 Damage to Infested",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Primed Smite Orokin":  {
                                "type":  "Melee Mod",
                                "effect":  "x1.55 Damage to Orokin",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Smite The Murmur":  {
                                    "type":  "Melee Mod",
                                    "effect":  "x1.55 Damage to Murmur",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Primed Sniper Ammo Mutation":  {
                                        "type":  "Primary Mod",
                                        "effect":  "Converts Secondary ammo pickups to 92% of Ammo Pick Up.",
                                        "farm":  "Various Sources (Check Codex Database)",
                                        "value":  "Standard"
                                    },
    "Primed Stabilizer":  {
                              "type":  "Primary Mod",
                              "effect":  "-85% Weapon Recoil",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Steady Hands":  {
                                "type":  "Secondary Mod",
                                "effect":  "-85% Weapon Recoil",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Primed Streamline":  {
                              "type":  "Warframe Mod",
                              "effect":  "+55% Ability Efficiency",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Primed Tactical Pump":  {
                                 "type":  "Shotgun Mod",
                                 "effect":  "+100% Reload Speed",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Venomous Clip":  {
                                 "type":  "Arch-Gun Mod",
                                 "effect":  "+187% \u003cDT_POISON_COLOR\u003eToxin",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Primed Vigor":  {
                         "type":  "Warframe Mod",
                         "effect":  "+75% Shield Capacity, +75% Health",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Primo Flair":  {
                        "type":  "K-Drive Mod",
                        "effect":  "Increase Maximum Trick Combo to 6000",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Prism Guard":  {
                        "type":  "Warframe Mod",
                        "effect":  "Prism Augment: Prism follows above Mirage. Duration changed to 4s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Prismatic Beam":  {
                           "type":  "Focus Way",
                           "effect":  "Enemies struck by the Tauron Strike fire off smaller beams at other enemies within 20m.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Prismatic Companion":  {
                                "type":  "Warframe Mod",
                                "effect":  "Prismatic Gem Augment: The gem now attaches to your free-moving companion. \\nPassive : +50% Prismatic Gem Duration.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Prize Kill":  {
                       "type":  "Shotgun Mod",
                       "effect":  "On Kill:\\n-100% Shield Recharge Delay for 10s, -25% from Health Orbs",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Proboscis":  {
                      "type":  "Companion Mod",
                      "effect":  "Helminth Charger whips a proboscis out at an enemy within 30m, pulling them back and dealing 100 damage.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Prolonged Paralysis":  {
                                "type":  "Warframe Mod",
                                "effect":  "Paralysis Augment: Affected enemies are pulled towards Valkyr and the stun duration is increased by 5s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Prosperous Retriever":  {
                                 "type":  "Companion Mod",
                                 "effect":  "18% chance to double Credit pickups",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Protect":  {
                    "type":  "Companion Mod",
                    "effect":  "The kubrow comes to the defense of its master, replenishing both of their shields by 30% of its maximum shields and adding its shield regeneration rate to its master\u0027s for 3s.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Protective Shots":  {
                             "type":  "Plexus Mod",
                             "effect":  "+30% Turret Damage when Shields are above 75%",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Protective Sling":  {
                             "type":  "Focus Way",
                             "effect":  "Allies touched by Void Sling are granted immunity from damage for 5s and healed 60% over 5s for 10 energy cost.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Protector Posture":  {
                              "type":  "Posture Mod",
                              "effect":  "The companion will prioritize attacking enemies within 15m of the Warframe. Attacks inflict +4 \u003cDT_PUNCTURE_COLOR\u003e Puncture Status Effects",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Proton Jet":  {
                       "type":  "Primary Mod",
                       "effect":  "During a Wall Latch gain +120% Status Chance and Critical Chance.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Proton Pulse":  {
                         "type":  "Warframe Mod",
                         "effect":  "Wall Dashing grants +100% Bullet Jump Speed.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Proton Snap":  {
                        "type":  "Melee Mod",
                        "effect":  "Hold Wall Latch for 2s to gain +100% \u003cDT_POISON_COLOR\u003eToxin Damage,  and +50% Status Chance for 20s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Provoked":  {
                     "type":  "Warframe Mod",
                     "effect":  "+110% Damage during Bleedout",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Pummel":  {
                   "type":  "Secondary Mod",
                   "effect":  "+120% \u003cDT_IMPACT_COLOR\u003eImpact",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Purging Slash":  {
                          "type":  "Warframe Mod",
                          "effect":  "Slash Dash Augment: Allies in the path of Slash Dash have 4 debuffs removed and 70% Shields restored.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Purifying Flames":  {
                             "type":  "Warframe Mod",
                             "effect":  "Fire Blast Augment: Allies hit by the expanding ring of fire are cured of Status Effects and granted 4s of Status Immunity.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Push \u0026 Pull":  {
                             "type":  "Warframe Mod",
                             "effect":  "Metamorphosis Augment: Switching to Day-form staggers enemies within 6m and knocks them down when switching to Night-form.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Pyroclastic Flow":  {
                             "type":  "Warframe Mod",
                             "effect":  "Fire Walker Augment: Accumulate 250% of the damage Fire Walker deals, unleashing it in a trail of fire that lasts 10s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Quaking Hand":  {
                         "type":  "Stance Mod",
                         "effect":  "Fighting form devised for Conclave.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quasar Drill":  {
                         "type":  "Arch-Gun Mod",
                         "effect":  "+90% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quick Charge":  {
                         "type":  "Warframe Mod",
                         "effect":  "-20% Shield Recharge Delay, -20 Shield Capacity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quick Correct":  {
                          "type":  "Parazon Mod",
                          "effect":  "Gain 10% Disinfection and 10% chance to drop a Live Heartcell ",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Quick Escape":  {
                         "type":  "K-Drive Mod",
                         "effect":  "Gain invulnerability for 5s mounting a K-drive, but will expire early upon dismounting. ",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quick Reload":  {
                         "type":  "Arch-Gun Mod",
                         "effect":  "+100% Reload Speed",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quick Return":  {
                         "type":  "Melee Mod",
                         "effect":  "-4 Bounce",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Quickdraw":  {
                      "type":  "Secondary Mod",
                      "effect":  "+20% Reload Speed",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Quickening":  {
                       "type":  "Melee Mod",
                       "effect":  "+40% Attack Speed, +20% Combo Count Chance",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Quicklock":  {
                      "type":  "Plexus Mod",
                      "effect":  "-112.5% Ordnance Lock-On Time",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Radiant Finish":  {
                           "type":  "Warframe Mod",
                           "effect":  "Radial Blind Augment: Blinded enemies take 300% more Finisher Damage.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Radiated Reload":  {
                            "type":  "Primary Mod",
                            "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +40% Reload Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Radon Claws":  {
                        "type":  "Companion Mod",
                        "effect":  "+60% \u003cDT_RADIATION_COLOR\u003eRadiation, +80% Critical Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Rage":  {
                 "type":  "Warframe Mod",
                 "effect":  "Convert +40% of Damage on Health to Energy. Without Shields, ally Overguard imitates Health.",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Raider Matrix":  {
                          "type":  "Plexus Mod",
                          "effect":  "+22% Archwing Speed and Damage\\n+36% Archwing Shield and Armor\\n+67% Captured Crewship Speed and Damage",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Rail Guards":  {
                        "type":  "K-Drive Mod",
                        "effect":  "+30% K-Drive Grind Speed",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Rain Of Arrows":  {
                           "type":  "Focus Way",
                           "effect":  "On dealing damage, fire an arrow at an enemy with 0.35s cooldown between arrows. 30s duration.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Range Advantage":  {
                            "type":  "Primary Mod",
                            "effect":  "+300% damage if no enemies are within 10m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Rapid Resilience":  {
                             "type":  "Warframe Mod",
                             "effect":  "-75% Status Duration on Self",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Raptorsetmod":  {
                         "type":  "Mod Set Mod",
                         "effect":  "Unknown effect",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Ravage":  {
                   "type":  "Shotgun Mod",
                   "effect":  "+30% Critical Damage",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Razor Mortar":  {
                         "type":  "Warframe Mod",
                         "effect":  "Razor Gyre Augment: Groups enemies together, while Lethal Progeny\u0027s Ortholysts focus fire on those enemies with +70% \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage and Fire Rate for 6s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Razor Munitions":  {
                            "type":  "Secondary Mod",
                            "effect":  "20% of Damage converted into \u003cDT_SLASH_COLOR\u003eSlash",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Razor Shot":  {
                       "type":  "Secondary Mod",
                       "effect":  "+30% \u003cDT_SLASH_COLOR\u003eSlash",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Razorwing Blitz":  {
                            "type":  "Warframe Mod",
                            "effect":  "Razorwing Augment: Flight Speed increased by 25% and Fire Rate increased by 25% for 8s when using abilities. Stacks up to 4x.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Reach":  {
                  "type":  "Melee Mod",
                  "effect":  "+2.3 Range",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Reactive Storm":  {
                           "type":  "Warframe Mod",
                           "effect":  "Serene Storm Augment: Desert Wind is granted +250% Status Chance and changes its damage type to match enemy weaknesses.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Ready Steel":  {
                        "type":  "Warframe Mod",
                        "effect":  "Squad begins the mission with +24 Initial Combo",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Reaping Chakram":  {
                            "type":  "Warframe Mod",
                            "effect":  "Blazing Chakram Augment: Each enemy hit increases the ring\u0027s Damage by 2x and the chance for enemies to drop Health Orbs on death by +0.25x.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Reaping Spiral":  {
                           "type":  "Stance Mod",
                           "effect":  "Far flung attacks and multi-hit combos.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Reawaken":  {
                     "type":  "Companion Mod",
                     "effect":  "Energy Orbs reduce Sentinel Recovery timer by 6s. Djinn recovers with 300 Overshields per Energy Orb collected. Djinn\u0027s max Overshields increase by 900.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Rebound":  {
                    "type":  "Melee Mod",
                    "effect":  "+4 Bounce",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Recharge Barrier":  {
                             "type":  "Warframe Mod",
                             "effect":  "Electric Shield Augment: Allies that pass through have 35% Shields restored.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Recover":  {
                    "type":  "Primary Mod",
                    "effect":  "On Kill:\\n+15 Heal Rate for 10s, -25% from Health Orbs",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Recrystalize":  {
                         "type":  "Warframe Mod",
                         "effect":  "Crystallize Augment: Enemies killed by crystalline growths stagger and spread the crystals to enemies within 16m.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Recuperate":  {
                       "type":  "Secondary Mod",
                       "effect":  "On Kill:\\n+15 Heal Rate for 10s, -25% from Health Orbs",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Reflect":  {
                    "type":  "Companion Mod",
                    "effect":  "Adarza Kavat has a 40% chance to reflect damage back to an enemy, amplifying it by 60%.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Reflection":  {
                       "type":  "Warframe Mod",
                       "effect":  "+40% chance to Stagger on Block, +10% chance to Stun on Block",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Reflex Coil":  {
                        "type":  "Melee Mod",
                        "effect":  "+40% Heavy Attack Efficiency",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Reflex Denial":  {
                          "type":  "Companion Mod",
                          "effect":  "Generates a shield that reflects 90% Damage taken in pulses over 10s as \u003cDT_MAGNETIC_COLOR\u003eMagnetic Damage in a 12m radius.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Reflex Draw":  {
                        "type":  "Secondary Mod",
                        "effect":  "On Equip: \\n\u003cLOWER_IS_BETTER\u003e-40% Weapon Recoil and +40% Accuracy for 8s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Reflex Guard":  {
                         "type":  "Warframe Mod",
                         "effect":  "+100% Combo Count Chance while Blocking",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Regen":  {
                  "type":  "Companion Mod",
                  "effect":  "Sentinel recovery time reduced by 20s. Revives with 10s of invulnerability.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Regenerative Molt":  {
                              "type":  "Warframe Mod",
                              "effect":  "Molt Augment: After casting Molt, Saryn regenerates 50 Health/s for 10s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Reinforced Bond":  {
                            "type":  "Companion Mod",
                            "effect":  "If the Companion exceeds 1200 Max Shields or Overshields then your fire rate is increased 60%. Reloading restores 150 Overshields to your companion.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Reinforced Return":  {
                              "type":  "Focus Way",
                              "effect":  "Warframe is invulnerable for 4s after Operator is downed. Tap \u003cUSE\u003e as Operator falls to bring the Warframe to the Operator’s location.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Reinforcing Stomp":  {
                              "type":  "Warframe Mod",
                              "effect":  "Rhino Stomp Augment: Iron Skin Health is replenished by 4% for each enemy affected.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Rejuvenating Tides":  {
                               "type":  "Focus Way",
                               "effect":  "Operator Health Regeneration is increased by 6/s, and is doubled while controlling the Warframe.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Relentless Assault":  {
                               "type":  "Melee Mod",
                               "effect":  "On Kill:\\n+2 Energy Rate for 4s",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Relentless Combination":  {
                                   "type":  "Melee Mod",
                                   "effect":  "+100% chance to increase Melee Combo Counter when \u003cDT_SLASH_COLOR\u003eSlash Status deals damage.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Rending Crane":  {
                          "type":  "Stance Mod",
                          "effect":  "Downward cuts with an impact combo.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Rending Strike":  {
                           "type":  "Melee Mod",
                           "effect":  "+60% \u003cDT_SLASH_COLOR\u003eSlash, +80% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Rending Turn":  {
                         "type":  "Warframe Mod",
                         "effect":  "+18% to Parkour Velocity, +18% Aim Glide/Wall Latch Duration, +60% \u003cDT_SLASH_COLOR\u003eSlash on Bullet Jump",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rending Wind":  {
                         "type":  "Stance Mod",
                         "effect":  "Fighting form devised for Conclave.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Repair Dispensary":  {
                              "type":  "Warframe Mod",
                              "effect":  "Dispensary Augment: Dispensary also creates pick ups that heal companions for 20% of their maximum health and reduce their incapacitation timer by 12 sec.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Repair Kit":  {
                       "type":  "Companion Mod",
                       "effect":  "+18 Companion Health Regen/s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Repeater Clip":  {
                          "type":  "Shotgun Mod",
                          "effect":  "On Reload:\\n+105% Fire Rate when Aiming for 9s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Repo Audit":  {
                       "type":  "Companion Mod",
                       "effect":  "Emits a magnetic pulse that disarms enemies within 30m.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Resilient Focus":  {
                            "type":  "Warframe Mod",
                            "effect":  "+20% Damage Resistance on Stun",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Resolute Focus":  {
                           "type":  "Arch-Gun Mod",
                           "effect":  "+100% Chance to Resist Staggers/Knockdowns when Aiming, +50% Accuracy when Aiming",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Resonance":  {
                      "type":  "Warframe Mod",
                      "effect":  "Sonar Augment: Killing an enemy by shooting their weak spot will trigger another Sonar for 100% of remaining duration.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Resonating Quake":  {
                             "type":  "Warframe Mod",
                             "effect":  "Sound Quake Augment: Forgoes channeling to create a shockwave that deals 20x Damage at the epicenter, gradually weakening as it expands out.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Resourceful Retriever":  {
                                  "type":  "Companion Mod",
                                  "effect":  "18% chance to double Resource pickups",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Restorative Bond":  {
                             "type":  "Companion Mod",
                             "effect":  "Health Orbs restore 60 more health and reduce Companion Recovery Time by 3s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Retribution":  {
                        "type":  "Warframe Mod",
                        "effect":  "+60% Chance to deal Electrical Damage when shield struck by melee enemies., +80 \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Retrieve":  {
                     "type":  "Companion Mod",
                     "effect":  "Kubrow has 45% chance to scavenge additional loot from a fallen enemy or containers within 30m, every 10s.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Revealing Spores":  {
                             "type":  "Warframe Mod",
                             "effect":  "Spores Augment: Infected enemies within 40m appear on the minimap. +40 Enemy Radar.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Revenge":  {
                    "type":  "Companion Mod",
                    "effect":  "Sentinel will not attack an enemy unless that enemy has attacked the Sentinel\u0027s master within 10m.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Reverse Rotorswell":  {
                               "type":  "Warframe Mod",
                               "effect":  "Rotorswell Augment: 35% of damage received is redirected toward the instigator as \u003cDT_ELECTRICITY_COLOR\u003e Electricity Damage.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Revo Reducer":  {
                         "type":  "Plexus Mod",
                         "effect":  "-60.8% Omni Revolite Consumption",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rifle Ammo Mutation":  {
                                "type":  "Primary Mod",
                                "effect":  "Converts Secondary ammo pickups to 50% of Ammo Pick Up.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Rifle Amp":  {
                      "type":  "Warframe Mod",
                      "effect":  "Squad receives +27% Rifle Damage",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Rifle Aptitude":  {
                           "type":  "Primary Mod",
                           "effect":  "+60% Status Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Rifle Elementalist":  {
                               "type":  "Primary Mod",
                               "effect":  "+90% Status Damage, +0.6 Punch Through",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Rifle Riven Mod":  {
                            "type":  "Rifle Riven Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Rifle Scavenger":  {
                            "type":  "Warframe Mod",
                            "effect":  "Squad receives +150% Rifle Ammo Recovery",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Rift Haven":  {
                       "type":  "Warframe Mod",
                       "effect":  "Banish Augment: Allies banished to the rift will have 25% of their Maximum Health restored every second.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Rift Strike":  {
                        "type":  "Melee Mod",
                        "effect":  "Heavy attacks now step through the rift to attack enemies up to 25m away",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Rift Torrent":  {
                         "type":  "Warframe Mod",
                         "effect":  "Rift Surge Augment: Limbo deals 30% Extra Damage for each enemy affected by Rift Surge while in the rift.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rift Waters":  {
                        "type":  "Focus Way",
                        "effect":  "Vortex strips enemy Overguard 25% per second.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Rime Vault":  {
                       "type":  "Warframe Mod",
                       "effect":  "Ice FX on Bullet Jump",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Ripload":  {
                    "type":  "Plexus Mod",
                    "effect":  "-63% Ordnance Reload Time",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Ripper Rounds":  {
                          "type":  "Primary Mod",
                          "effect":  "20% of Damage converted into \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Ris":  {
                "type":  "Parazon Mod",
                "effect":  "In luminous space blackened stars  They gaze, accuse, deny",
                "farm":  "Various Sources (Check Codex Database)",
                "value":  "Standard"
            },
    "Ris Invocation":  {
                           "type":  "Secondary Mod",
                           "effect":  "Alternate Fire increases Ability Duration by 4% for 20s for each enemy hit. Stacks up to 15 times.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Rising Blast":  {
                         "type":  "Focus Way",
                         "effect":  "Increases Void Blast Damage by 200% and it can now be charged to deal additional damage.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rising Skill":  {
                         "type":  "Warframe Mod",
                         "effect":  "+10% Mobility, -30 Shield Capacity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rising Steel":  {
                         "type":  "Stance Mod",
                         "effect":  "Fighting form devised for Conclave.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rising Storm":  {
                         "type":  "Warframe Mod",
                         "effect":  "Blade Storm Augment: Blade Storm attacks increase your Ability Combo Counter by 4.\\nPassive: +10s Combo Duration",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Rousing Plunder":  {
                            "type":  "Warframe Mod",
                            "effect":  "Plunder Augment: Plunder gains 50% max \u003cDT_CORROSIVE_COLOR\u003eCorrosive Damage and Armor, and heals allies within Affinity range for 50 Health.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Rubble Heap":  {
                        "type":  "Warframe Mod",
                        "effect":  "Passive Augment: When above 1400 Rubble, Landslide costs no Energy, deals 2x Damage, and travels 2x faster.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Rubedo-Lined Barrel":  {
                                "type":  "Arch-Gun Mod",
                                "effect":  "+100% Damage",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Ruinous Extension":  {
                              "type":  "Secondary Mod",
                              "effect":  "+8m Beam Range",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Rumbled":  {
                    "type":  "Warframe Mod",
                    "effect":  "Rumblers Augment: Atlas becomes a Rumbler with Rock Armor that grants Overguard and absorbs up to 300% of damage to Max Health.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Runtime":  {
                    "type":  "Parazon Mod",
                    "effect":  "+75% Sprint Speed for 15s after Hacking",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Rupture":  {
                    "type":  "Primary Mod",
                    "effect":  "+12% \u003cDT_IMPACT_COLOR\u003eImpact",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Rush":  {
                 "type":  "Warframe Mod",
                 "effect":  "+30% Sprint Speed",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Sabot Rounds":  {
                         "type":  "Arch-Gun Mod",
                         "effect":  "+60% Damage, +3 Punch Through",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Sacrifice":  {
                      "type":  "Companion Mod",
                      "effect":  "Sentinel incapacitates itself to revive its downed owner to 100% health and shields in \u003cLOWER_IS_BETTER\u003e4s. Sentinel Recovery timer increases by 15s., +15s Companion Recovery Time",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Sacrificesetmod":  {
                            "type":  "Mod Set Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sacrificial Pressure":  {
                                 "type":  "Melee Mod",
                                 "effect":  "+110% Melee Damage, x1.33 Damage to Sentients",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Safeguard":  {
                      "type":  "Warframe Mod",
                      "effect":  "Warding Halo Augment: Can now be cast on allies with 50% effectiveness.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Safeguard Switch":  {
                             "type":  "Warframe Mod",
                             "effect":  "Switch Teleport Augment: Switch with an enemy for 3s invulnerability. Switch with an ally to give ally 6s invulnerability. Switch also removes negative status effects on Loki and allies.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Sampleantiqueupgrade":  {
                                 "type":  "Tektolyst Artifact Mod",
                                 "effect":  "+30,000 HEAL RATE",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Sanctuary":  {
                      "type":  "Companion Mod",
                      "effect":  "Creates a shield with 1800 Health around the player when they are reviving fallen allies.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Sapping Reach":  {
                          "type":  "Warframe Mod",
                          "effect":  "Pull Augment: Steals up to 25 Energy from the target.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Savage Silence":  {
                           "type":  "Warframe Mod",
                           "effect":  "Silence Augment: Silence staggers enemies and Finisher damage is increased by 300%",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Savagery":  {
                     "type":  "Companion Mod",
                     "effect":  "The Kubrow rushes at 8 enemies within 10m, dealing damage and knocking them over.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Savior Decoy":  {
                         "type":  "Warframe Mod",
                         "effect":  "Decoy Augment: If Loki takes fatal damage, Decoy absorbs the damage and swaps locations. Also increases Casting Speed of Decoy by 50%",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Sawtooth Clip":  {
                          "type":  "Primary Mod",
                          "effect":  "+10% \u003cDT_SLASH_COLOR\u003eSlash",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Saxum Carapace":  {
                           "type":  "Warframe Mod",
                           "effect":  "+55% Armor, +20% Health",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Saxum Spittle":  {
                          "type":  "Secondary Mod",
                          "effect":  "+90% \u003cDT_IMPACT_COLOR\u003eImpact, +60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Saxum Thorax":  {
                         "type":  "Melee Mod",
                         "effect":  "+90% \u003cDT_IMPACT_COLOR\u003eImpact, +60% Status Chance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Scan Matter":  {
                        "type":  "Companion Mod",
                        "effect":  "Reveals resource containers and mineral deposits within 60m. Automatically breaks containers and collects resources every 3s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Scarlet Hurricane":  {
                              "type":  "Stance Mod",
                              "effect":  "Fighting form devised for Conclave.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Scattered Justice":  {
                              "type":  "Primary Mod",
                              "effect":  "+200% Multishot, +1 \u0027Justice\u0027",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Scavenge":  {
                     "type":  "Companion Mod",
                     "effect":  "+90% chance for the pet to pry open a locked locker.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Scourging Warheads":  {
                               "type":  "Plexus Mod",
                               "effect":  "+76.5% chance for Ordnance to ignore enemy Shields",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Searing Leap":  {
                         "type":  "Warframe Mod",
                         "effect":  "Fire FX on Bullet Jump",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Searing Steel":  {
                          "type":  "Arch-Melee Mod",
                          "effect":  "+60% \u003cDT_FIRE_COLOR\u003eHeat, +60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Secondary Wind":  {
                           "type":  "Secondary Mod",
                           "effect":  "On Kill:\\n+50% Reload Speed for 4s",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Section Density":  {
                            "type":  "Plexus Mod",
                            "effect":  "+75% Turret Critical Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Security Override":  {
                              "type":  "Companion Mod",
                              "effect":  "Auto-hacks consoles over 2s. 30% chance to mind control basic robotic enemies and turrets in 30m for 14s after Hacking.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Seeker":  {
                   "type":  "Secondary Mod",
                   "effect":  "+0.6 Punch Through",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Seeker Volley":  {
                          "type":  "Plexus Mod",
                          "effect":  "Fires a volley of homing missiles.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Seeking Force":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+0.8 Punch Through",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Seeking Fury":  {
                         "type":  "Shotgun Mod",
                         "effect":  "+15% Reload Speed, +1.2 Punch Through",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Seeking Shuriken":  {
                             "type":  "Warframe Mod",
                             "effect":  "Shuriken Augment: Hits expose weaknesses on enemies, reducing their Armor by 70% for 8s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Seismic Bond":  {
                         "type":  "Companion Mod",
                         "effect":  "While a channeled Ability is active, Companion melee attacks create a 4m shockwave for 30% of their melee attack damage. Damage dealt by your Companion increases your Ability Efficiency by 3% for 12 seconds. Max 10 stacks.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Seismic Impact":  {
                           "type":  "Focus Way",
                           "effect":  "Cogron Tauron Strikes enable their shockwave effect for the next 4 aerial Melee slam attacks.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Seismic Palm":  {
                         "type":  "Stance Mod",
                         "effect":  "Methodical strikes with reaching combos.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Seismic Wave":  {
                         "type":  "Melee Mod",
                         "effect":  "+200% Slam Attack Damage",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Self Destruct":  {
                          "type":  "Companion Mod",
                          "effect":  "Explodes when incapacitated, dealing 600 \u003cDT_EXPLOSION_COLOR\u003eBlast Damage in a 18m radius and knocking down nearby enemies.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Semi-Pistol Cannonade":  {
                                  "type":  "Secondary Mod",
                                  "effect":  "Only compatible with Semi-Auto Trigger. Fire Rate cannot be modified.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Semi-Rifle Cannonade":  {
                                 "type":  "Primary Mod",
                                 "effect":  "Only compatible with Semi-Auto Trigger. Fire Rate cannot be modified.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Semi-Shotgun Cannonade":  {
                                   "type":  "Shotgun Mod",
                                   "effect":  "Only compatible with Semi-Auto Trigger. Fire Rate cannot be modified.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Sentient Barrage":  {
                             "type":  "Primary Mod",
                             "effect":  "Discharge from Alt-Fire now has infinite Body Punch Through but no longer explodes on contact. Each enemy hit will refill one charge, and reaching a full charge will increase the Critical Chance and Critical Damage of the next discharge by 300%.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Sentient Incision":  {
                              "type":  "Melee Mod",
                              "effect":  "+120% additional damage matching the target\u0027s weakness. Does not combine with other damage types.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Sentient Scalpel":  {
                             "type":  "Plexus Mod",
                             "effect":  "x1.41 Turret Damage vs Sentients",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Sentient Surge":  {
                           "type":  "Secondary Mod",
                           "effect":  "Each target eliminated refills 20% of Ocucor\u0027s magazine. Status Chance and Critical Chance are increased by 60% for each Tendril active.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Sepsis Claws":  {
                         "type":  "Companion Mod",
                         "effect":  "+330% \u003cDT_POISON_COLOR\u003eToxin, +330% Status Chance, Converts all elemental damage from these claws to \u003cDT_POISON_COLOR\u003eToxin damage",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Sequence Burn":  {
                          "type":  "Secondary Mod",
                          "effect":  "+20m Beam Range, +1 \u0027Sequence\u0027",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Serrated Edges":  {
                           "type":  "Melee Mod",
                           "effect":  "20% of Damage converted into \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Serrated Rounds":  {
                            "type":  "Primary Mod",
                            "effect":  "20% of Damage converted into \u003cDT_SLASH_COLOR\u003eSlash",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sey-Taph":  {
                     "type":  "Tektolyst Artifact Mod",
                     "effect":  "+30% Void Sling Efficiency",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Shadow Harvest":  {
                           "type":  "Stance Mod",
                           "effect":  "Fighting form devised for Conclave.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Shadow Haze":  {
                        "type":  "Warframe Mod",
                        "effect":  "Reap Augment: Increase Critical Chance by 50% on enemies inflicted with Death Harvest. A new Shadow emerges from those enemies when they perish. Limit of 3 Shadows.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Sharpened Blade":  {
                            "type":  "Melee Mod",
                            "effect":  "20% of Damage converted into \u003cDT_SLASH_COLOR\u003eSlash",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sharpened Bullets":  {
                              "type":  "Secondary Mod",
                              "effect":  "On Kill:\\n+75% Critical Damage when Aiming for 9s",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Sharpened Claws":  {
                            "type":  "Companion Mod",
                            "effect":  "A vicious attack dealing 300% damage that sunders armor by 120% and rends flesh.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sharpshooter":  {
                         "type":  "Primary Mod",
                         "effect":  "On Headshot Kill:\\n+15 Energy",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Shatter Burst":  {
                          "type":  "Plexus Mod",
                          "effect":  "Delivers a barrage of explosions across a large area.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Shattered Storm":  {
                            "type":  "Warframe Mod",
                            "effect":  "Shattered Lash Augment: When Gara breaks her Mass Vitrify ring with Shattered Lash, enemies struck by the glass suffer Splinter Storm at 100% Strength.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Shattering Impact":  {
                              "type":  "Melee Mod",
                              "effect":  "\u003cDT_IMPACT_COLOR\u003eImpact Damage reduces enemy Armor by 6.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shattering Justice":  {
                               "type":  "Primary Mod",
                               "effect":  "+90% Status Chance, +1 \u0027Justice\u0027",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Shattering Storm":  {
                             "type":  "Stance Mod",
                             "effect":  "Methodical strikes and high impact combos.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Shell Compression":  {
                              "type":  "Shotgun Mod",
                              "effect":  "+12% Ammo Maximum",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shell Rush":  {
                       "type":  "Arch-Gun Mod",
                       "effect":  "+50% Charge Rate",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Shelter":  {
                    "type":  "Companion Mod",
                    "effect":  "Creates a shield with 1800 Health around the player when they are reviving fallen allies.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Shepherd":  {
                     "type":  "Warframe Mod",
                     "effect":  "Squad\u0027s Companions receive +300 Health and +180 Armor",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Shield Charger":  {
                           "type":  "Companion Mod",
                           "effect":  "Increase Warframe Max Shields and Shield Regeneration by 60% for 10s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Shield Disruption":  {
                              "type":  "Warframe Mod",
                              "effect":  "Enemies lose -18% Shield Capacity",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shield Of Shadows":  {
                              "type":  "Warframe Mod",
                              "effect":  "Shadows of the Dead Augment: Each Shadow within 50m take 6% of the Damage done to Nekros in his stead.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shield Overload":  {
                            "type":  "Warframe Mod",
                            "effect":  "Polarize Augment: Increases the time for the target\u0027s Shields to regenerate by 9s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Shimmering Blight":  {
                              "type":  "Stance Mod",
                              "effect":  "Fast spinning attacks and staggering strikes.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shivering Contagion":  {
                                "type":  "Primary Mod",
                                "effect":  "On \u003cDT_FREEZE_COLOR\u003eCold Status Effect: 100% chance to spread that status to other enemies within 6m.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Shock Absorbers":  {
                            "type":  "Warframe Mod",
                            "effect":  "+20% Physical Damage Resistance",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Shock Collar":  {
                         "type":  "Companion Mod",
                         "effect":  "+60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity, +60% Status Chance",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Shock Trooper":  {
                          "type":  "Warframe Mod",
                          "effect":  "Shock Augment: Hold to cast will grant all allies within 15m an additional 100% \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage to their attacks for 40s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Shocking Claws":  {
                           "type":  "Companion Mod",
                           "effect":  "+330% \u003cDT_ELECTRICITY_COLOR\u003eElectricity, +330% Status Chance, Converts all elemental damage from these claws to \u003cDT_ELECTRICITY_COLOR\u003eElectricity damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Shocking Speed":  {
                           "type":  "Warframe Mod",
                           "effect":  "Speed Augment: While moving under the effects of Speed, enemies within 3m will take 300 \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage with guaranteed Status effect.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Shocking Touch":  {
                           "type":  "Melee Mod",
                           "effect":  "+60% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Shockwave Actuators":  {
                                "type":  "Companion Mod",
                                "effect":  "Blasts a shockwave knocking down those within 12m. The shockwave recharges every 10s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Shotgun Ammo Mutation":  {
                                  "type":  "Shotgun Mod",
                                  "effect":  "Converts Secondary ammo pickups to 50% of Ammo Pick Up.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Shotgun Amp":  {
                        "type":  "Warframe Mod",
                        "effect":  "Squad receives +18% Shotgun Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Shotgun Barrage":  {
                            "type":  "Shotgun Mod",
                            "effect":  "+40% Fire Rate",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Shotgun Elementalist":  {
                                 "type":  "Shotgun Mod",
                                 "effect":  "+90% Status Damage, +60% Magazine Capacity",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Shotgun Riven Mod":  {
                              "type":  "Shotgun Riven Mod",
                              "effect":  "Unknown effect",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shotgun Savvy":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+12% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Shotgun Scavenger":  {
                              "type":  "Warframe Mod",
                              "effect":  "Squad receives +150% Shotgun Ammo Recovery",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Shrapnel Rounds":  {
                            "type":  "Secondary Mod",
                            "effect":  "+200% Multishot, -66% Damage",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Shrapnel Shot":  {
                          "type":  "Shotgun Mod",
                          "effect":  "On Kill:\\n+99% Critical Damage when Aiming for 9s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Shred":  {
                  "type":  "Primary Mod",
                  "effect":  "+30% Fire Rate (x2 for Bows), +1.2 Punch Through",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Shred Shot":  {
                       "type":  "Shotgun Mod",
                       "effect":  "20% of Damage converted into \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Shredder":  {
                     "type":  "Shotgun Mod",
                     "effect":  "+12% \u003cDT_SLASH_COLOR\u003eSlash",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Signal Flare":  {
                         "type":  "Warframe Mod",
                         "effect":  "Radial Blind Augment: Blinded enemies are marked on the Minimap for 12s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Sil-Tabol":  {
                      "type":  "Tektolyst Artifact Mod",
                      "effect":  "+60% Amp Status Chance, +15% Status Damage for each \u003cVAZARIN_CLEAN\u003eVazarin School Mod",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Silent Battery":  {
                           "type":  "Shotgun Mod",
                           "effect":  "Reduces the chance an enemy will hear gunfire by 100%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Singularity":  {
                        "type":  "Warframe Mod",
                        "effect":  "Absorb Augment: Create a ring every 3s that drags in enemies at 15m/s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Sinister Reach":  {
                           "type":  "Primary Mod",
                           "effect":  "+12m Beam Range",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Sinking Talon":  {
                          "type":  "Stance Mod",
                          "effect":  "Strong, focused attacks with multi-hit spins.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Skull Shots":  {
                        "type":  "Secondary Mod",
                        "effect":  "On Headshot:\\n+100% Ammo Efficiency for 2s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Slay Board":  {
                       "type":  "K-Drive Mod",
                       "effect":  "On Directional Dismount:",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Slicing Feathers":  {
                             "type":  "Stance Mod",
                             "effect":  "Twirling, acrobatic slashes with a refined touch.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Sling Strength":  {
                           "type":  "Focus Way",
                           "effect":  "Switching to Warframe after a Chained Sling adds 40% Ability Strength for 20s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Sling Stun":  {
                       "type":  "Focus Way",
                       "effect":  "Second Ability increases the width of the next Void Sling by 200% and enemies hit are vulnerable to Finishers, taking 30% more finisher damage.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Slip Magazine":  {
                          "type":  "Secondary Mod",
                          "effect":  "+10% Magazine Capacity",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Sly Devolution":  {
                           "type":  "Companion Mod",
                           "effect":  "Devolves into its larval form when downed and regains its true form after 30s. Your kills reduce enemy accuracy against Warframes by 20% for 8s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Smite Corpus":  {
                         "type":  "Melee Mod",
                         "effect":  "x1.2 Damage to Corpus",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Smite Grineer":  {
                          "type":  "Melee Mod",
                          "effect":  "x1.2 Damage to Grineer",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Smite Infested":  {
                           "type":  "Melee Mod",
                           "effect":  "x1.2 Damage to Infested",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Smite Infusion":  {
                           "type":  "Warframe Mod",
                           "effect":  "Smite Augment: Hold to cast will grant all allies within 15m an additional 100% \u003cDT_RADIATION_COLOR\u003eRadiation Damage to their attacks for 40s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Smite Orokin":  {
                         "type":  "Melee Mod",
                         "effect":  "x1.3 Damage to Orokin",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Smite The Murmur":  {
                             "type":  "Melee Mod",
                             "effect":  "x1.3 Damage to Murmur",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Smoke Shadow":  {
                         "type":  "Warframe Mod",
                         "effect":  "Smoke Screen Augment: Conceals allies within 15m and grants 150% Critical Chance while invisible.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Snap Shot":  {
                      "type":  "Shotgun Mod",
                      "effect":  "+20% Movement Speed when Aiming",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Sniper Ammo Mutation":  {
                                 "type":  "Primary Mod",
                                 "effect":  "Converts Secondary ammo pickups to 50% of Ammo Pick Up.",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Sniper Scavenger":  {
                             "type":  "Warframe Mod",
                             "effect":  "Squad receives +150% Sniper Rifle Ammo Recovery",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Soaring Strike":  {
                           "type":  "Primary Mod",
                           "effect":  "+50% Fire Rate when Airborne",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Soaring Truth":  {
                          "type":  "Secondary Mod",
                          "effect":  "+200% Critical Chance, +1 \u0027Purity\u0027",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Soft Hands":  {
                       "type":  "Shotgun Mod",
                       "effect":  "On Equip: \\n\u003cLOWER_IS_BETTER\u003e-40% Weapon Recoil and +40% Accuracy for 8s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Soft Safe":  {
                      "type":  "Parazon Mod",
                      "effect":  "Keeping software safe by ALWAYS WATCHING",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Sonic Boost":  {
                        "type":  "K-Drive Mod",
                        "effect":  "Every \u003cLOWER_IS_BETTER\u003e10s, boosting will release a shockwave, stunning enemies in 4m.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Sonic Dash":  {
                       "type":  "Focus Way",
                       "effect":  "Void Sling no longer displaces enemies, instead it emits a shockwave 14m wide and travels 8m stunning any enemy it hits.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Sonic Fracture":  {
                           "type":  "Warframe Mod",
                           "effect":  "Sonic Boom Augment: Enemy Armor is reduced by 70%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Soul Survivor":  {
                          "type":  "Warframe Mod",
                          "effect":  "Soul Punch Augment: Use on a downed ally to revive them with 30% Health.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Sovereign Outcast":  {
                              "type":  "Stance Mod",
                              "effect":  "An outlandish style with sweeping attacks.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Spare Parts":  {
                        "type":  "Companion Mod",
                        "effect":  "Companion marks a target every 15s for 15s. The target becomes 200% more likely to drop an item when killed.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Spectral Blades":  {
                            "type":  "Focus Way",
                            "effect":  "Summon 4 spectral swords that are copies of equipped melee weapon. Melee attacks will simultaneously trigger spectral attacks on any enemies within 10m for 30s. Spectral sword hits increase Combo Count and grant extra Tauron Strike Charge. Spectral swords are granted to all players in Affinity Range.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Spectral Pages":  {
                           "type":  "Focus Way",
                           "effect":  "Create 4 spectral pages granting an additional 10% Cast Speed, Ability Strength, Duration, and 100 bonus Energy per page.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Spectral Serration":  {
                               "type":  "Primary Mod",
                               "effect":  "+330% Damage while Invisible",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Spectral Spirit":  {
                            "type":  "Warframe Mod",
                            "effect":  "Grave Spirit Augment: Immediately assume Spectral Form. 100% chance for weapons and abilities to apply Doom. Kills outside of Spectral Form decrease its cooldown by 1s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Spectrosiphon":  {
                          "type":  "Warframe Mod",
                          "effect":  "Spectrorage Augment: Enemies that die within Spectrorage have a 50% chance to drop an Energy Orb.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Speed Drift":  {
                        "type":  "Warframe Mod",
                        "effect":  "+12% Sprint Speed, +15% Casting Speed",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Speed Trigger":  {
                          "type":  "Primary Mod",
                          "effect":  "+20% Fire Rate (x2 for Bows)",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Spellbound Harvest":  {
                               "type":  "Warframe Mod",
                               "effect":  "Spellbind Augment: Hitting at least 4 enemies with Spellbind grants Titania 50\u003cENERGY\u003e. The next cast has +40% Ability Range.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Spidersetmod":  {
                         "type":  "Mod Set Mod",
                         "effect":  "Unknown effect",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Spinning Needle":  {
                            "type":  "Stance Mod",
                            "effect":  "Swift stabs, twisting slashes.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Split Flights":  {
                          "type":  "Primary Mod",
                          "effect":  "On Hit:\\n+100% Multishot\\n-180% Accuracy for 2s. Stacks up to 4x.\\n(Non-AOE Bows)",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Spontaneous Singularity":  {
                                    "type":  "Primary Mod",
                                    "effect":  "Orbs that strike targets will explode immediately with 90% Bonus Damage and a 18% chance of Singularity that pulls in more targets. Orbs do not bounce or combine. ",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Spring-Loaded Blade":  {
                                "type":  "Melee Mod",
                                "effect":  "On Status Effect: +1 Range for 24s. Stacks up to 2 times.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Spring-Loaded Broadhead":  {
                                    "type":  "Primary Mod",
                                    "effect":  "Increase damage by +40%, if the target is over 15m away.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Spring-Loaded Chamber":  {
                                  "type":  "Primary Mod",
                                  "effect":  "On Reload:\\n+75% Fire Rate when Aiming for 9s",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Sprint Boost":  {
                         "type":  "Warframe Mod",
                         "effect":  "Squad receives +15% Sprint Speed",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Spry Sights":  {
                        "type":  "Secondary Mod",
                        "effect":  "+20% Movement Speed when Aiming",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Squad Regen":  {
                        "type":  "Focus Way",
                        "effect":  "When Void Regen reaches its maximum, it is applied to squad members within Affinity Range for 60s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Squad Renew":  {
                        "type":  "Plexus Mod",
                        "effect":  "Heal all Railjack squad members by 100%.\\nCooldown: 300s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Stabilizer":  {
                       "type":  "Primary Mod",
                       "effect":  "-90% Weapon Recoil",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Staggering Shield":  {
                              "type":  "Warframe Mod",
                              "effect":  "Shatter Shield Augment: Reflected bullets have a chance to stagger enemies. The base 50% chance increases with power strength.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Stalk":  {
                  "type":  "Companion Mod",
                  "effect":  "The kubrow cloaks itself and its master to stalk down its prey when they are within 24m.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Stalking Fan":  {
                         "type":  "Stance Mod",
                         "effect":  "Lunging spirals and shattering combos.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Stand Ground":  {
                         "type":  "Melee Mod",
                         "effect":  "Blocking reduces damage taken from enemy abilities by 60%.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Star Divide":  {
                        "type":  "Stance Mod",
                        "effect":  "Fighting form devised for Conclave.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Stasis Field":  {
                         "type":  "Companion Mod",
                         "effect":  "Creates a stasis field for 30s. While inside the field, all enemy projectiles move 90% slower and deal 60% less Damage.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Static Alacrity":  {
                            "type":  "Secondary Mod",
                            "effect":  "+50% Projectile Speed, -50% Blast Radius",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Static Discharge":  {
                             "type":  "Melee Mod",
                             "effect":  "Heavy Attacks electrify nearby enemies for \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage equal to 80% of weapon damage.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Static Purge":  {
                         "type":  "Focus Way",
                         "effect":  "100% chance to clear Transference Static on kill while Reinforced Return is active.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Steady Hands":  {
                         "type":  "Secondary Mod",
                         "effect":  "-90% Weapon Recoil",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Stealth Drift":  {
                          "type":  "Warframe Mod",
                          "effect":  "+18m Enemy Radar, +12% Aim Glide/Wall Latch Duration",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Stinging Thorn":  {
                           "type":  "Stance Mod",
                           "effect":  "Vigorous slashes with forceful stabs.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Stinging Truth":  {
                           "type":  "Secondary Mod",
                           "effect":  "+40 Magazine Capacity, +1 \u0027Truth\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Stockpiled Blight":  {
                              "type":  "Secondary Mod",
                              "effect":  "+200% Magazine Capacity, +1 \u0027Blight\u0027",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Stone Skin":  {
                       "type":  "Focus Way",
                       "effect":  "Increases Armor for Warframe and Operator by 200.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Stormbringer":  {
                         "type":  "Primary Mod",
                         "effect":  "+40% \u003cDT_ELECTRICITY_COLOR\u003eElectricity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Strafing Slide":  {
                           "type":  "Secondary Mod",
                           "effect":  "-20% Weapon Recoil, and +20% Accuracy when Sliding",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Strain Consume":  {
                           "type":  "Warframe Mod",
                           "effect":  "Dead Maggots within 10m are consumed, increasing Max Health by 4% and increasing Health Regen by 2/sec for 45sec.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Strain Eruption":  {
                            "type":  "Companion Mod",
                            "effect":  "Maggots explode on death, dealing 4% of an enemy\u0027s current Health as \u003cDT_CORROSIVE_COLOR\u003eCorrosive Damage to any enemy within 8m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Strain Fever":  {
                         "type":  "Companion Mod",
                         "effect":  "Helminth Charger gains +40% Damage per Cyst.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Strain Infection":  {
                             "type":  "Melee Mod",
                             "effect":  "Melee Attacks gain +20% Critical Damage per Cyst.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Strainsetmod":  {
                         "type":  "Mod Set Mod",
                         "effect":  "Unknown effect",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Streamlined Form":  {
                             "type":  "Warframe Mod",
                             "effect":  "+30% Slide, -30% Friction",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Stunning Speed":  {
                           "type":  "Secondary Mod",
                           "effect":  "+40% Reload Speed, +30% Status Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Sudden Impact":  {
                          "type":  "Arch-Melee Mod",
                          "effect":  "+60% Status Chance",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Sudden Justice":  {
                           "type":  "Primary Mod",
                           "effect":  "On 2 Hits within 0.2s:\\n+30% Fire Rate for 2s",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Summoner\u0027s Wrath":  {
                                  "type":  "Warframe Mod",
                                  "effect":  "Squad receives 75% Companion and Summon Damage",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Sundered Bounty":  {
                            "type":  "Focus Way",
                            "effect":  "Shockwaves generate 5 pickups, in the form of Universal Orbs or Ammo.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sundering Dash":  {
                           "type":  "Focus Way",
                           "effect":  "Using Void Sling through an enemy will reduce their Armor by 75%.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Sundering Strike":  {
                             "type":  "Melee Mod",
                             "effect":  "+60% \u003cDT_PUNCTURE_COLOR\u003ePuncture",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Sundering Weave":  {
                            "type":  "Stance Mod",
                            "effect":  "Steady chopping strikes with focused damage.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Superior Defenses":  {
                              "type":  "Archwing Mod",
                              "effect":  "+100% Shield Recharge, -50% Shield Recharge Delay",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Suppress":  {
                     "type":  "Secondary Mod",
                     "effect":  "Reduces the chance an enemy will hear gunfire by 100%.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Sure Footed":  {
                        "type":  "Warframe Mod",
                        "effect":  "+60% Chance to Resist Knockdown",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Sure Shot":  {
                      "type":  "Secondary Mod",
                      "effect":  "+4% Status Chance",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Surging Blades":  {
                           "type":  "Warframe Mod",
                           "effect":  "Aquablades Augment: Activate Aquablades when the ability is in use or cooldown to throw one blade. Blades gain 10% damage when any Aquablade hits an enemy. No cost to throw with Merulina.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Surging Dash":  {
                         "type":  "Warframe Mod",
                         "effect":  "Slash Dash Augment: Each enemy hit during Slash Dash further increases your Melee Counter by 8.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Surging Storm":  {
                          "type":  "Focus Way",
                          "effect":  "Increase Rain of Arrows radius to 5m.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Surplus Diverters":  {
                              "type":  "Warframe Mod",
                              "effect":  "Gain +6 energy, upon replenishing shields completely after they have been deactivated.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Survival Instinct":  {
                              "type":  "Companion Mod",
                              "effect":  "On Bullet Jump:\\nEnemies lose sight of you for 1.5s. \u003cLOWER_IS_BETTER\u003e5s cooldown.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Sweeping Serration":  {
                               "type":  "Shotgun Mod",
                               "effect":  "+120% \u003cDT_SLASH_COLOR\u003eSlash",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Swelling Deluge":  {
                            "type":  "Focus Way",
                            "effect":  "Increase vortex duration to 40s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Swift Bite":  {
                       "type":  "Warframe Mod",
                       "effect":  "Ophidian Bite Augment: Reduce Ability Cooldowns by 4s when at least 4 enemies are hit. Ophidian Bite is granted 30% additional Ability Range.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Swift Mercy":  {
                        "type":  "Parazon Mod",
                        "effect":  "Speed of Mercy Kills increased by 50%",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Swift Momentum":  {
                           "type":  "Warframe Mod",
                           "effect":  "Squad receives +30% Heavy Attack Wind Up Speed and +6s Melee Combo Duration",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Swing Line":  {
                       "type":  "Warframe Mod",
                       "effect":  "Rip Line Augment: Rip Lines has no Energy cost while Airborne., +20% Parkour Velocity",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Swipe":  {
                  "type":  "Companion Mod",
                  "effect":  "Strikes 4 additional enemies and increases Attack Range by 2m.",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Swirling Tiger":  {
                           "type":  "Stance Mod",
                           "effect":  "Fanning, multi-hit strikes.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Swooping Falcon":  {
                            "type":  "Stance Mod",
                            "effect":  "Quick slashes with spinning lunges.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Sword Alone":  {
                        "type":  "Melee Mod",
                        "effect":  "With Melee Equipped:",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Synergized Prospectus":  {
                                  "type":  "Companion Mod",
                                  "effect":  "Fires a spark that seeks out the nearest enemy in 30m, dealing 300 \u003cDT_ELECTRICITY_COLOR\u003eElectricity Damage in a 10m radius. The spark ricochets up to 7x, seeking out the nearest enemy in 30m.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Synth Charge":  {
                         "type":  "Secondary Mod",
                         "effect":  "+200% Bonus Damage on final shot. Requires Magazine 6 or higher.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Synth Deconstruct":  {
                              "type":  "Companion Mod",
                              "effect":  "Enemies injured by the Companions have 25% chance to drop a Health Orb when killed.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Synth Fiber":  {
                        "type":  "Companion Mod",
                        "effect":  "Health Orbs increase Armor for Companions by 100% for 12s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Synth Reflex":  {
                         "type":  "Warframe Mod",
                         "effect":  "On Equip:\\n+40% Bullet Jump for 2s",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Synthsetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "System Reroute":  {
                           "type":  "Archwing Mod",
                           "effect":  "+55% Ability Efficiency",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Tactical Pump":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+12% Reload Speed",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Tactical Reload":  {
                            "type":  "Primary Mod",
                            "effect":  "+20% Magazine Reloaded/s when Holstered",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Tactical Retreat":  {
                             "type":  "Warframe Mod",
                             "effect":  "On Low Health:\\n+10% Mobility for 4s",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Tainted Clip":  {
                         "type":  "Secondary Mod",
                         "effect":  "+60% Magazine Capacity, -30% Reload Speed",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Tainted Hydra":  {
                          "type":  "Stance Mod",
                          "effect":  "Fighting form devised for Conclave.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Tainted Mag":  {
                        "type":  "Primary Mod",
                        "effect":  "+66% Magazine Capacity, -33% Reload Speed",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Tainted Shell":  {
                          "type":  "Shotgun Mod",
                          "effect":  "+77% Accuracy, -55% Fire Rate",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Talsek-An":  {
                      "type":  "Tektolyst Artifact Mod",
                      "effect":  "Gain knockdown immunity. When knockdown is blocked, enter Void Mode for 3s (cooldown 7.5s)",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Tandem Bond":  {
                        "type":  "Companion Mod",
                        "effect":  "Companion melee hits increase your Combo by 6. Heavy Attacks increase Companion melee damage by 30% multiplied by your combo multiplier for 30s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Target Acquired":  {
                            "type":  "Primary Mod",
                            "effect":  "+60% to Headshot Multiplier",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Target Cracker":  {
                           "type":  "Secondary Mod",
                           "effect":  "+30% Critical Damage",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Target Fixation":  {
                            "type":  "Warframe Mod",
                            "effect":  "Tail Wind Augment: Casting Tail Wind resets Zephyr’s bullet jump. Each enemy hit increases Tail Wind Damage by 100%. Damage resets upon being on the ground for 2s.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Targeting Receptor":  {
                               "type":  "Companion Mod",
                               "effect":  "Causes the Helios Sentinel to attack targets within 10m with 3 glaives.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Targeting Subsystem":  {
                                "type":  "Secondary Mod",
                                "effect":  "On Hit:\\n+30% Accuracy when Aiming for 9s",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Tear Gas":  {
                     "type":  "Warframe Mod",
                     "effect":  "Smoke Screen Augment: Blinds enemies within 4m for 3s.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Tectonic Fracture":  {
                              "type":  "Warframe Mod",
                              "effect":  "Tectonics Augment: Create up to 3 walls with 100% Health. Walls can no longer be turned into boulders.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Teeming Virulence":  {
                              "type":  "Warframe Mod",
                              "effect":  "Virulence Augment: Hitting 4 enemies with Virulence grants 120% Primary Weapon Critical Chance for 15s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Tek Assault":  {
                        "type":  "Companion Mod",
                        "effect":  "Kavat has 60% chance to ignore Lethal Damage and be immune for 4s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Tek Collateral":  {
                           "type":  "Warframe Mod",
                           "effect":  "Increased Pistol Ammo recovery.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Tek Enhance":  {
                        "type":  "Companion Mod",
                        "effect":  "+30% Kavat Ability Duration",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Tek Gravity":  {
                        "type":  "Melee Mod",
                        "effect":  "Slam Attacks in the Marked Zone pull all enemies within 20m.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Teksetmod":  {
                      "type":  "Mod Set Mod",
                      "effect":  "Unknown effect",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Teleport Rush":  {
                          "type":  "Warframe Mod",
                          "effect":  "Teleport Augment: Using Teleport increases Parkour Velocity by 30% for 12s. Executing a target with Teleport extends Smoke Screen\u0027s duration by 5s. Teleport Mercy Kills fully refresh the duration.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Tempered Benison":  {
                             "type":  "Focus Way",
                             "effect":  "Shockwaves create 5 Armor Motes that grant +450 temporary Armor. Max 5.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Tempered Blade":  {
                           "type":  "Arch-Melee Mod",
                           "effect":  "+150% Critical Chance",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Tempered Bound":  {
                           "type":  "Warframe Mod",
                           "effect":  "-10% Mobility, +30 Shield Capacity",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Tempo Royale":  {
                         "type":  "Stance Mod",
                         "effect":  "Sweeping strikes and twisting slashes.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Temporal Artillery":  {
                               "type":  "Warframe Mod",
                               "effect":  "Blaze Artillery Augment : When Temporal Anchor is activated, one existing Artillery unit will attach to Protea, halting its duration countdown. Max combo count is 20x.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Temporal Drag":  {
                          "type":  "Focus Way",
                          "effect":  "Second Ability emits a radial burst slowing any enemy it touches by 80% for 10s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Temporal Erosion":  {
                             "type":  "Warframe Mod",
                             "effect":  "Temporal Anchor Augment: While Temporal Anchor is active, each strike of Grenade Fan and Blaze Artillery strips 10% Armor from enemies.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Temporal Shot":  {
                          "type":  "Focus Way",
                          "effect":  "Precision head shot damage increased by 100% on enemies afflicted with Temporal Drag.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Tenacious Bond":  {
                           "type":  "Companion Mod",
                           "effect":  "Headshot kills reduce Companion Recovery timer by 3s. If the Companion\u0027s Critical Chance is over 50% then you gain +1.2x Final Critical Damage Multiplier.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Terminal Velocity":  {
                              "type":  "Primary Mod",
                              "effect":  "+60% Projectile Speed",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Territorial Aggression":  {
                                   "type":  "Companion Mod",
                                   "effect":  "The Kavat stakes their territory in a radius of 6m for 15s. Each second, enemies within this area have a 30% chance of being attacked by a shadow Kavat.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Tesla Bank":  {
                       "type":  "Warframe Mod",
                       "effect":  "Tesla Nervos Augment: Enemy health when a Nervos is first attached is converted into 8m burst of \u003cDT_ELECTRICITY_COLOR\u003eElectricity when killed.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Tether":  {
                   "type":  "Plexus Mod",
                   "effect":  "Ensnares enemies, increasing vulnerability to Railjack weaponry.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Tether Grenades":  {
                            "type":  "Primary Mod",
                            "effect":  "Grenades tether up to 5 enemies from 9m away.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Thara Tauron Strike":  {
                                "type":  "Focus Way",
                                "effect":  "Summon forth Thara from the Void and fire the great bow into the air, blanketing the area with a rain of explosive arrows for 7s.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Tharros Lethality":  {
                              "type":  "Warframe Mod",
                              "effect":  "Tharros Strike Augment: Increases Critical Damage by 100% on enemies you hit. Critical Damage bonus is doubled for Spearguns.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "The Relentless Lost":  {
                                "type":  "Warframe Mod",
                                "effect":  "The Lost Augment: The Lost gains 35% Ability Strength and 15% Ability Efficiency when cast. The effect stacks up to 3x. Casting the same ability back-to-back resets the effect.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Thermagnetic Shells":  {
                                "type":  "Primary Mod",
                                "effect":  "Enemies explode on death, dealing 80 \u003cDT_MAGNETIC_COLOR\u003eMagnetic Damage (+40% Enemy Max Health) in a 6m radius.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Thermal Transfer":  {
                             "type":  "Warframe Mod",
                             "effect":  "Thermal Sunder Augment: Allies in range gain 75% bonus Elemental Damage for 30s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Thief\u0027s Wit":  {
                             "type":  "Warframe Mod",
                             "effect":  "Minimap shows loot crates.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Thrall Pact":  {
                        "type":  "Warframe Mod",
                        "effect":  "Enthrall Augment: Gain +25% Primary Weapon Damage for each active Thrall.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Thrash Landing":  {
                           "type":  "K-Drive Mod",
                           "effect":  "Landing a trick releases an explosion dealing 40% Trick Score \u003cDT_EXPLOSION_COLOR\u003eBlast Damage to enemies within 4m.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Threat Blocker":  {
                           "type":  "Parazon Mod",
                           "effect":  "Gain 10% Disinfection and 25% chance to drop a Potency mod",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Thumper":  {
                    "type":  "Companion Mod",
                    "effect":  "Djinn will attack the first visible enemy within 60m.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Thunderbolt":  {
                        "type":  "Primary Mod",
                        "effect":  "+30% Chance to Explode (Use with Caution)",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Thundermiter":  {
                         "type":  "Primary Mod",
                         "effect":  "+100% chance charged Projectiles explode, -60% Magazine Capacity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Tidal Impunity":  {
                           "type":  "Warframe Mod",
                           "effect":  "Tidal Surge Augment: Clears Status Effects and grants 12s of Status Immunity for yourself and allies that come in contact with it. Reduces Tidal Surge\u0027s Energy cost to 15.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Titanic Rumbler":  {
                            "type":  "Warframe Mod",
                            "effect":  "Rumblers Augment: Create a single rumbler with 300% Health and 400% Damage.\\nReactivating will cause him to slam the floor and knockdown enemies in 15m.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Total Eclipse":  {
                          "type":  "Warframe Mod",
                          "effect":  "Eclipse Augment: While active, allies within 15m benefit from Eclipse.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Toxic Blight":  {
                         "type":  "Melee Mod",
                         "effect":  "+100% \u003cDT_POISON_COLOR\u003eToxin, +1 \u0027Blight\u0027",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Toxic Flight":  {
                         "type":  "Warframe Mod",
                         "effect":  "+24.2% to Parkour Velocity, +24.2% Aim Glide/Wall Latch Duration, +275% \u003cDT_POISON_COLOR\u003eToxin on Bullet Jump",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Toxic Sequence":  {
                           "type":  "Secondary Mod",
                           "effect":  "+200% Status Duration, +1 \u0027Sequence\u0027",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Toxin Resistance":  {
                             "type":  "Warframe Mod",
                             "effect":  "+15% \u003cDT_POISON_COLOR\u003eToxin Resistance",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Tractor Beam":  {
                         "type":  "Companion Mod",
                         "effect":  "+100% Aim Glide Duration\\n\u003cLOWER_IS_BETTER\u003e-50% Gravity",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Trail Blazer":  {
                         "type":  "K-Drive Mod",
                         "effect":  "Tricks leave a trail inflicting 40 \u003cDT_FIRE_COLOR\u003eHeat Damage to enemies.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Trample":  {
                    "type":  "Companion Mod",
                    "effect":  "The Helminth Charger rushes an enemy, dealing 160 Damage to all in its path. It gains +10% Melee Damage, Max Health and Armor for every enemy hit for 5s.",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Tranquil Cleave":  {
                            "type":  "Stance Mod",
                            "effect":  "Powerful arcs with frenzied combo.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Transfusion":  {
                        "type":  "Companion Mod",
                        "effect":  "When its Master is bleeding out, the Vasca Kavat sacrifices \u003cLOWER_IS_BETTER\u003e20% of its Health to raise them.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Transistor Shield":  {
                              "type":  "Warframe Mod",
                              "effect":  "Electric Shield Augment: Allies can pick up Electric Shield. 300% of damage absorbed will be added to Volt\u0027s Static Discharge.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Transmute Core":  {
                           "type":  "Transmutation Mod",
                           "effect":  "Removes credits cost and guarantees the resultant mod polarity.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Tribunal":  {
                     "type":  "Warframe Mod",
                     "effect":  "Condemn Augment: Other players will trigger 100% of the effects of Penance and Thurible when attacking chained enemies.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Trick Mag":  {
                      "type":  "Secondary Mod",
                      "effect":  "+40% Ammo Maximum",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Triple Tap":  {
                       "type":  "Primary Mod",
                       "effect":  "On 2 Hits within 0.02s:\\n+40% Damage for 0.2s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Trojan Tracker":  {
                           "type":  "Parazon Mod",
                           "effect":  "Eliminating sneaky viruses since 1989",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "True Punishment":  {
                            "type":  "Melee Mod",
                            "effect":  "+100% Additional Combo Count Chance, -50% Combo Duration",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "True Steel":  {
                       "type":  "Melee Mod",
                       "effect":  "+80% Critical Chance (x2 for Heavy Attacks)",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Truth\u0027s Flame":  {
                               "type":  "Melee Mod",
                               "effect":  "Enables Tennokai.\\nTennokai kills grant an additional 4s Tennokai opportunity and increase Tennokai damage by 120%.\\n\\nCURSE: Suffer 100 \u003cDT_FIRE_COLOR\u003eHeat Damage/s for 6s.\\n, +1 \u0027Truth\u0027",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Turbo Protect":  {
                          "type":  "Parazon Mod",
                          "effect":  "Gain 10% Disinfection and 25% chance to drop an Antivirus mod",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Turret Velocity":  {
                            "type":  "Plexus Mod",
                            "effect":  "+32.2% Turret Range, +70% Turret Projectile Speed",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Twirling Spire":  {
                           "type":  "Stance Mod",
                           "effect":  "A mix of sweeping attacks with precise strikes.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Twitch":  {
                   "type":  "Primary Mod",
                   "effect":  "On Equip: \\n\u003cLOWER_IS_BETTER\u003e-40% Weapon Recoil and +40% Accuracy for 8s",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Ubri-Kaneph":  {
                        "type":  "Tektolyst Artifact Mod",
                        "effect":  "+60% Damage to Amps, +10% bonus for each Mod from a unique School",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Ulashta-Shol":  {
                         "type":  "Tektolyst Artifact Mod",
                         "effect":  "-60% Transference Static duration",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Ulfrun\u0027s Endurance":  {
                                    "type":  "Warframe Mod",
                                    "effect":  "Ulfrun\u0027s Descent Augment: During Ulfrun’s attack, enemies that die from \u003cDT_SLASH_COLOR\u003eSlash Status within 20m restore Voruna’s charges.",
                                    "farm":  "Various Sources (Check Codex Database)",
                                    "value":  "Standard"
                                },
    "Umbrasetmod":  {
                        "type":  "Mod Set Mod",
                        "effect":  "Unknown effect",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Unairu Wisp":  {
                        "type":  "Focus Way",
                        "effect":  "Void Blast has a 100% chance to summon a Wisp when it damages an enemy. The Wisp can be picked up by allies to increase Operator Damage by 100% for 12s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Undying Will":  {
                         "type":  "Warframe Mod",
                         "effect":  "+42% Bleedout Reduction",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Unfused Artifact":  {
                             "type":  "Plexus Mod",
                             "effect":  "Unknown effect",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Unleashed":  {
                      "type":  "Companion Mod",
                      "effect":  "The kubrow hunts for Eximus units protected by Overguard within 60m and deals +300% Damage against Overguard.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Unseen Dread":  {
                         "type":  "Primary Mod",
                         "effect":  "Become invisible for 5 seconds when you strike 3 or more enemies with a single projectile. Deal 175% more Critical Damage with Dread while invisible.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Untime Rift":  {
                        "type":  "Warframe Mod",
                        "effect":  "The Vast Untime Augment: Creates a Rift that connects to enemies suffering from \u003cDT_RADIANT_COLOR\u003e Void Status Effect within 15m, doubling debuffs applied by The Vast Untime and maintaining \u003cDT_RADIANT_COLOR\u003e Void Status.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Untraceable":  {
                        "type":  "Parazon Mod",
                        "effect":  "Invisible for 15s after Hacking",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Vacuum":  {
                   "type":  "Companion Mod",
                   "effect":  "13.5m Companion Gather-Link. Detects and collects items, including mods.",
                   "farm":  "Various Sources (Check Codex Database)",
                   "value":  "Standard"
               },
    "Valence Formation":  {
                              "type":  "Warframe Mod",
                              "effect":  "Passive Augment: Casting an Ability imbued with extra Elemental Damage applies that Element as a 200% bonus to your weapons with guaranteed Status for 20s.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Vampire Leech":  {
                          "type":  "Warframe Mod",
                          "effect":  "Energy Vampire Augment: Excess Energy replenishes Shields by 225%.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Vampiric Grasp":  {
                           "type":  "Warframe Mod",
                           "effect":  "Grasp of Lohk Augment: When a stolen weapon deals damage to an enemy affected by The Lost: Gaze or The Vast Untime, Xaku heals by 25.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Vanquished Prey":  {
                            "type":  "Primary Mod",
                            "effect":  "On Kill:\\n-100% Shield Recharge Delay for 10s, -25% from Health Orbs",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Vapor Trail":  {
                        "type":  "K-Drive Mod",
                        "effect":  "Add 11 Boost Speed. Consumes 10 Energy/s",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Vaporize":  {
                     "type":  "Companion Mod",
                     "effect":  "Every 10s the sentinel will stun and inflict 600 damage to an enemy within 30m. Damage dealt affected by Sentinel Weapon Mods.",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Vazarin Transmute Core":  {
                                   "type":  "Transmutation Mod",
                                   "effect":  "Ensures transmuted mod is of Vazarin polarity and eliminates credit cost.",
                                   "farm":  "Various Sources (Check Codex Database)",
                                   "value":  "Standard"
                               },
    "Velox Conclusion":  {
                             "type":  "Secondary Mod",
                             "effect":  "On hit, gain +0.6% Ability Strength up to 60% maximum. Consumed on your next Ability cast.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Venari Bodyguard":  {
                             "type":  "Warframe Mod",
                             "effect":  "Venari Augment: Venari dies in Khora\u0027s place. Recovery timer increased to 150s. Killing enemies decreases the timer by 4s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Venerdo Hoverdrive":  {
                               "type":  "K-Drive Mod",
                               "effect":  "+30% K-Drive Jump Height",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Vengeance":  {
                      "type":  "Focus Way",
                      "effect":  "During Last Gasp, Operator Damage is increased by 100% plus an additional 25% per second.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Vengeful Revenant":  {
                              "type":  "Stance Mod",
                              "effect":  "Hate... Dread... Despair...",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Venom Dose":  {
                       "type":  "Warframe Mod",
                       "effect":  "Spores Augment: Hold to cast will grant all allies within 15m an additional 100% \u003cDT_CORROSIVE_COLOR\u003eCorrosive Damage to their attacks for 40s.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Venom Teeth":  {
                        "type":  "Companion Mod",
                        "effect":  "+60% \u003cDT_POISON_COLOR\u003eToxin, +60% Status Chance",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Venomous Clip":  {
                          "type":  "Arch-Gun Mod",
                          "effect":  "+120% \u003cDT_POISON_COLOR\u003eToxin",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Venomous Rise":  {
                          "type":  "Warframe Mod",
                          "effect":  "Toxin FX on Bullet Jump",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Vermillion Storm":  {
                             "type":  "Stance Mod",
                             "effect":  "Kicks woven between spinning slashes.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Vexing Retaliation":  {
                               "type":  "Warframe Mod",
                               "effect":  "Vex Armor Augment: Taking 150 Damage will trigger a 9m burst. Shield damage will cause a \u003cDT_PUNCTURE_COLOR\u003ePuncture Status effect while Health damage will cause a \u003cDT_EXPLOSION_COLOR\u003eBlast Status effect.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Vexoric Tauron Strike":  {
                                  "type":  "Focus Way",
                                  "effect":  "Summon forth Vexoric from the Void and swing the colossal sword, unleashing a wave of devastating energy. Gain +8 Melee Combo from each enemy hit.",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Vicious Approach":  {
                             "type":  "Stance Mod",
                             "effect":  "Fighting form devised for Conclave.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Vicious Bond":  {
                         "type":  "Companion Mod",
                         "effect":  "Companion melee attacks strip 15% of enemy armor. Enemies recently damaged by Abilities spread the effect to other enemies in a 9m radius.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Vicious Spread":  {
                           "type":  "Shotgun Mod",
                           "effect":  "+90% Damage, -60% Accuracy",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Vigilante Armaments":  {
                                "type":  "Primary Mod",
                                "effect":  "+60% Multishot",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Vigilante Fervor":  {
                             "type":  "Primary Mod",
                             "effect":  "+45% Fire Rate (x2 for Bows)",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Vigilante Offense":  {
                              "type":  "Primary Mod",
                              "effect":  "+1.5 Punch Through",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Vigilante Pursuit":  {
                              "type":  "Warframe Mod",
                              "effect":  "+30m Enemy Radar",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Vigilante Supplies":  {
                               "type":  "Primary Mod",
                               "effect":  "Converts Secondary ammo pickups to 30% of Ammo Pick Up.",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Vigilante Vigor":  {
                            "type":  "Warframe Mod",
                            "effect":  "+60% Shield Recharge, -30% Shield Recharge Delay",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Vigilantesetmod":  {
                            "type":  "Mod Set Mod",
                            "effect":  "Unknown effect",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Vigor":  {
                  "type":  "Warframe Mod",
                  "effect":  "+50% Shield Capacity, +50% Health",
                  "farm":  "Various Sources (Check Codex Database)",
                  "value":  "Standard"
              },
    "Vigorous Swap":  {
                          "type":  "Warframe Mod",
                          "effect":  "On Equip:\\n+165% Damage for 3s",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Vik-Anam":  {
                     "type":  "Tektolyst Artifact Mod",
                     "effect":  "+30% Maximum Amp Energy, +5% Amp Energy Regen Rate for each \u003cMADURAI_CLEAN\u003eMadurai School Mod",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Vikla-Safor":  {
                        "type":  "Tektolyst Artifact Mod",
                        "effect":  "+30% Amp Fire Rate, +30% Amp Ammo Efficiency",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Vile Discharge":  {
                           "type":  "Primary Mod",
                           "effect":  "Damage is accumulated up to 30,000. Use Alt-fire to launch an explosive vile sac dealing and resetting the accumulated damage.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Vile Precision":  {
                           "type":  "Primary Mod",
                           "effect":  "-90% Weapon Recoil, -36% Fire Rate (x2 for Bows)",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Viral Quills":  {
                         "type":  "Companion Mod",
                         "effect":  "Launches 6 quills at enemies within 20m, each dealing 60 \u003cDT_VIRAL_COLOR\u003eViral Damage with 40% Status Chance. If the target is affected by a Viral Status, a Spore is added. \u003cLOWER_IS_BETTER\u003e4s cooldown.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Viral Tempest":  {
                          "type":  "Warframe Mod",
                          "effect":  "Tempest Barrage Augment: Each projectile has a 100% chance of inflicting a \u003cDT_VIRAL_COLOR\u003eViral Status Effect.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Vital Sense":  {
                        "type":  "Primary Mod",
                        "effect":  "+60% Critical Damage",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Vital Systems Bypass":  {
                                 "type":  "Warframe Mod",
                                 "effect":  "+1 Health Regen/s, +50% Shield Recharge Delay",
                                 "farm":  "Various Sources (Check Codex Database)",
                                 "value":  "Standard"
                             },
    "Void Aegis":  {
                       "type":  "Focus Way",
                       "effect":  "Void Mode creates a shield that grows up to 12m over 5s. This ability costs an additional 2 Energy/s.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Void Chrysalis":  {
                           "type":  "Focus Way",
                           "effect":  "Void Mode reduces damage taken by invisible allies within 25m by 80%. This ability costs an additional 4 Energy/s.",
                           "farm":  "Various Sources (Check Codex Database)",
                           "value":  "Standard"
                       },
    "Void Cloak":  {
                       "type":  "Plexus Mod",
                       "effect":  "Cloak from Enemies for 50s\\nEngine Speed reduced to 50%\\nCooldown: 120s",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Void Flow":  {
                      "type":  "Focus Way",
                      "effect":  "Increases Operator Energy by 90%.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Void Fuel":  {
                      "type":  "Focus Way",
                      "effect":  "40% Weapon Efficiency for Operator and Warframe while Void Strike is active.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Void Hole":  {
                      "type":  "Plexus Mod",
                      "effect":  "A black hole that draws in enemies, dealing damage.",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Void Hunter":  {
                        "type":  "Focus Way",
                        "effect":  "Void Mode reveals enemies within 25m through walls. This range gradually decreases over 5s when the Operator leaves Void Mode. This ability costs an additional 1 Energy/s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Void Levitation":  {
                            "type":  "Focus Way",
                            "effect":  "First Ability creates a 6m wide shockwave lasting 4s, that inflicts Lift Status on all enemies it touches.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Void Radiance":  {
                          "type":  "Focus Way",
                          "effect":  "Consumes 50 Energy on leaving Void Mode to blind enemies within 10m for 5s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Void Regen":  {
                       "type":  "Focus Way",
                       "effect":  "Void Mode starts healing at +10 Health per second, increasing by 10 per second up to a maximum of 50.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Void Shadow":  {
                        "type":  "Focus Way",
                        "effect":  "Void Mode now renders allies within 40m invisible. This ability costs an additional 4 Energy/s per ally cloaked.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Void Singularity":  {
                             "type":  "Focus Way",
                             "effect":  "Void Mode pulls enemies within 20m towards the Operator, and costs an additional 2 Energy/s.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Void Siphon":  {
                        "type":  "Focus Way",
                        "effect":  "Increases Operator Energy Regeneration by 90%.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Void Snare":  {
                       "type":  "Focus Way",
                       "effect":  "Second Ability Launches a projectile that spins up a vortex trap on impact, or tap \u003cACTIVATE_ABILITY_1\u003e again to detonate in-flight. Trap lasts 8s. Void Sling through trapped enemies to grant allies within Affinity Range 100 Health.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Void Spines":  {
                        "type":  "Focus Way",
                        "effect":  "100% Damage taken is returned to the attacker.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Void Stalker":  {
                         "type":  "Focus Way",
                         "effect":  "Void Mode increases Critical Chance of melee attacks by up to 50% over 5s. This chance gradually decreases over 20s when the Operator leaves Void Mode. This ability costs an additional 4 Energy/s.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Void Static":  {
                        "type":  "Focus Way",
                        "effect":  "Void Mode emits a pulse that deals 500 Damage/s over 15m, and costs an additional 1 Energy/s.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Void Strike":  {
                        "type":  "Focus Way",
                        "effect":  "First Ability consumes all energy to increase damage for 8s. Deal 10% additional damage for every percentage of energy consumed. 40s cooldown.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Volatile Parasite":  {
                              "type":  "Companion Mod",
                              "effect":  "Every \u003cLOWER_IS_BETTER\u003e15s spits out a maggot that latches onto the nearest enemy, drawing fire from those within 40m. On death, the maggot bursts, dealing 100% of accumulated damage \u003cDT_VIRAL_COLOR\u003eViral Damage (+40% damage if the enemy dies while latched) to those within 10m.",
                              "farm":  "Various Sources (Check Codex Database)",
                              "value":  "Standard"
                          },
    "Volatile Quick Return":  {
                                  "type":  "Melee Mod",
                                  "effect":  "-4 Bounce, +3 Blast Radius, +100% Chance to explode on Bounce (Disables Punch Through)",
                                  "farm":  "Various Sources (Check Codex Database)",
                                  "value":  "Standard"
                              },
    "Volatile Rebound":  {
                             "type":  "Melee Mod",
                             "effect":  "+100% Chance to explode on Bounce (Disables Punch Through)",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Volatile Recompense":  {
                                "type":  "Warframe Mod",
                                "effect":  "Recompense Augment: Daggers whirl in a ring around Kullervo for 25s, slashing nearby foes and dealing \u003cDT_EXPLOSION_COLOR\u003eBlast Damage and Status Effect before returning to the ring.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Volatile Variant":  {
                             "type":  "Primary Mod",
                             "effect":  "Shots have +3 Punch Through and barbs explode instantly. Barbs that strike enemies directly have +4m radius and +50% Status Chance.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Voltage Sequence":  {
                             "type":  "Primary Mod",
                             "effect":  "Killing a flying enemy creates a lightning trap from their remains, lasting 8s, +1 \u0027Sequence\u0027",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Voltaic Blast":  {
                          "type":  "Focus Way",
                          "effect":  "Void Blast creates a surge of electricity, zapping enemies within 10m for 200% Damage.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Voltaic Lance":  {
                          "type":  "Warframe Mod",
                          "effect":  "Electrical FX on Bullet Jump",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Vome":  {
                 "type":  "Parazon Mod",
                 "effect":  "To cosmic madness laws submit  Though stalwart minds entreat",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Vome Invocation":  {
                            "type":  "Secondary Mod",
                            "effect":  "Alternate Fire increases Ability Strength by 4% for 20s for each enemy hit. Stacks up to 15 times.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Votive Onslaught":  {
                             "type":  "Stance Mod",
                             "effect":  "Precise, focused arcs and cuts not hampered by pity.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Vulcan Blitz":  {
                         "type":  "Melee Mod",
                         "effect":  "Enemies explode on death, dealing 300 \u003cDT_EXPLOSION_COLOR\u003eBlast Damage (+60% Enemy Max Health) in a 6m radius.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Vulpine Mask":  {
                         "type":  "Stance Mod",
                         "effect":  "Swift cuts, lancing strikes.",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     },
    "Ward Recovery":  {
                          "type":  "Warframe Mod",
                          "effect":  "Warding Halo Augment: 50% of the casting cost returned based on how much protection is left.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Warding Thurible":  {
                             "type":  "Warframe Mod",
                             "effect":  "Thurible Augment: Allies in range take 50% less Damage while channeling Thurible and grant 1.0 additional Energy charge whenever damaged.",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Warhead":  {
                    "type":  "Plexus Mod",
                    "effect":  "+127.3% Ordnance Damage",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Warm Coat":  {
                      "type":  "Warframe Mod",
                      "effect":  "+12% Shield Resistance to Environmental Ice Hazards",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Warrior\u0027s Rest":  {
                                "type":  "Warframe Mod",
                                "effect":  "Passive Augment: Umbra\u0027s Ability Strength increases by +15% but he no longer fights independently alongside his Operator.",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Waveband Disruptor":  {
                               "type":  "Plexus Mod",
                               "effect":  "+76.5% chance for Turret Critical Hits to ignore enemy Shields",
                               "farm":  "Various Sources (Check Codex Database)",
                               "value":  "Standard"
                           },
    "Wellspring":  {
                       "type":  "Focus Way",
                       "effect":  "First Ability creates a well of energy for 8s. Allies passing through the well gain 5 Energy/s for 30s.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Whiplash Mine":  {
                          "type":  "Companion Mod",
                          "effect":  "Deploys a tether mine snaring all enemies in a 20m. After 3s, all enemies still in range get pulled to the mine.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Whirlwind":  {
                      "type":  "Melee Mod",
                      "effect":  "+120% Projectile Speed",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Wild Frenzy":  {
                        "type":  "Primary Mod",
                        "effect":  "Secondary Fire will shoot with +400% Fire Rate until the magazine is empty. Killing 2 or more enemies will refund 100% of the ammo.",
                        "farm":  "Various Sources (Check Codex Database)",
                        "value":  "Standard"
                    },
    "Wildfire":  {
                     "type":  "Primary Mod",
                     "effect":  "+20% Magazine Capacity, +60% \u003cDT_FIRE_COLOR\u003eHeat",
                     "farm":  "Various Sources (Check Codex Database)",
                     "value":  "Standard"
                 },
    "Winds Of Purity":  {
                            "type":  "Secondary Mod",
                            "effect":  "+20% Life Steal, +1 \u0027Purity\u0027",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Wise Razor":  {
                       "type":  "Stance Mod",
                       "effect":  "Deftly executed sweeps and slashes.",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Worm Away":  {
                      "type":  "Parazon Mod",
                      "effect":  "Get rid of malware, spyware, wetware and worms",
                      "farm":  "Various Sources (Check Codex Database)",
                      "value":  "Standard"
                  },
    "Worm\u0027s Torment":  {
                                "type":  "Plexus Mod",
                                "effect":  "x1.41 Turret Damage vs Grineer",
                                "farm":  "Various Sources (Check Codex Database)",
                                "value":  "Standard"
                            },
    "Worthy Comradery":  {
                             "type":  "Warframe Mod",
                             "effect":  "Squad receives +75% Weak Point Critical Chance",
                             "farm":  "Various Sources (Check Codex Database)",
                             "value":  "Standard"
                         },
    "Wrath Of Ukko":  {
                          "type":  "Warframe Mod",
                          "effect":  "Storm of Ukko Augment: Wrathful Advance moves the storm of daggers to the teleportation location and increases its duration by 6s.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Wrecking Wall":  {
                          "type":  "Warframe Mod",
                          "effect":  "Containment Wall Augment: Strip 50% of armor and shields from struck enemies. Hitting 5 or more enemies will restart the duration of any Chyrinka Pillars and empower them.",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Xata":  {
                 "type":  "Parazon Mod",
                 "effect":  "Its heralds are the stars it fells  The sky and Earth aflame",
                 "farm":  "Various Sources (Check Codex Database)",
                 "value":  "Standard"
             },
    "Xata Invocation":  {
                            "type":  "Secondary Mod",
                            "effect":  "Alternate Fire grants 1 Energy Regen/s for 20s for each enemy hit. Stacks up to 10 times.",
                            "farm":  "Various Sources (Check Codex Database)",
                            "value":  "Standard"
                        },
    "Yar Dal":  {
                    "type":  "Tektolyst Artifact Mod",
                    "effect":  "+300 Operator Health",
                    "farm":  "Various Sources (Check Codex Database)",
                    "value":  "Standard"
                },
    "Zaw Riven Mod":  {
                          "type":  "Zaw Riven Mod",
                          "effect":  "Unknown effect",
                          "farm":  "Various Sources (Check Codex Database)",
                          "value":  "Standard"
                      },
    "Zazvat-Kar":  {
                       "type":  "Secondary Mod",
                       "effect":  "+75% Ammo Efficiency while Airborne",
                       "farm":  "Various Sources (Check Codex Database)",
                       "value":  "Standard"
                   },
    "Zodiac Shred":  {
                         "type":  "Arch-Gun Mod",
                         "effect":  "+90% \u003cDT_SLASH_COLOR\u003eSlash",
                         "farm":  "Various Sources (Check Codex Database)",
                         "value":  "Standard"
                     }
};
// DOM Scanning and Hover Tooltip Setup
let megaRegex = null;

window.scanForMods = function(root = document) {
    if (!megaRegex) {
        const modNames = Object.keys(modDatabase);
        modNames.sort((a, b) => b.length - a.length);
        const escapeRegex = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const megaPattern = modNames.map(escapeRegex).join('|');
        megaRegex = new RegExp('(?<![A-Za-z0-9"\'\\-])\\b(' + megaPattern + ')\\b(?![A-Za-z0-9"\'\\-])', 'g');
    }

    // Find all elements that might contain mod text
    const targetElements = root.querySelectorAll('li, p, .info-card-subtext, .info-highlight-text, .evo-row, .build-guide-content');
    
    targetElements.forEach(el => {
        // Skip parent elements if we are scanning their child nodes
        if (el.querySelector('li, p')) return;
        
        let text = el.innerHTML;
        if (text.includes('data-mod=')) return; // Skip if already wrapped
        if (text.includes('<input') || text.includes('<button') || text.includes('<select')) return; // Avoid input controls

        const newText = text.replace(megaRegex, (match) => {
            return '<span class="mod-db-link" data-mod="' + match + '" style="cursor: pointer; text-decoration: underline dotted #ffab00; font-weight: bold; transition: all 0.2s;" onmouseover="this.style.color=\'#ff5722\'; this.style.textDecoration=\'underline dashed #ff5722\';" onmouseout="this.style.color=\'inherit\'; this.style.textDecoration=\'underline dotted #ffab00\';">' + match + '</span>';
        });
        
        if (newText !== text) {
            el.innerHTML = newText;
        }
    });
};

function initTooltip() {
    // Create Tooltip Element if not already existing
    let tooltip = document.querySelector('.mod-hover-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'mod-hover-tooltip';
        tooltip.style.cssText = 'position: absolute; pointer-events: auto; opacity: 0; z-index: 9999; background: rgba(10, 15, 36, 0.95); backdrop-filter: blur(12px); border: 1px solid #ffab00; border-radius: 12px; padding: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.8), 0 0 15px rgba(255, 171, 0, 0.3); color: #fff; width: 320px; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; transition: opacity 0.2s ease-in-out; transform: translateY(-10px);';
        document.body.appendChild(tooltip);
    }

    // Run initial scan
    window.scanForMods();


    // Hover Event Delegation with Timeout Buffer
    let hideTimeout;

    document.body.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.mod-db-link');
        if (target) {
            clearTimeout(hideTimeout);
            const modName = target.getAttribute('data-mod');
            const mod = modDatabase[modName];
            if (mod) {
                tooltip.innerHTML = '<h3 style="margin: 0 0 8px 0; color: #ffab00; font-size: 18px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">' + modName + '</h3>' +
                                    '<p style="margin: 0 0 8px 0; font-size: 13px; color: #b0bec5;"><strong>Type:</strong> ' + mod.type + '</p>' +
                                    '<p style="margin: 0 0 8px 0; font-size: 14px; color: #fff; line-height: 1.4;"><strong>Effect:</strong> ' + mod.effect + '</p>' +
                                    '<p style="margin: 0 0 12px 0; font-size: 13px; color: #81c784;"><strong>Farm:</strong> ' + mod.farm + '</p>' +
                                    '<div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 6px; text-align: center;">' +
                                    '<a href="Warframe_Mods_Database.html?mod=' + encodeURIComponent(modName) + '" style="color: #4fc3f7; text-decoration: none; font-size: 12px; font-weight: bold; pointer-events: auto;">&#x1F50D; View in Mod Database</a></div>';
                
                const rect = target.getBoundingClientRect();
                tooltip.style.left = (rect.left + window.scrollX) + 'px';
                tooltip.style.top = (rect.bottom + window.scrollY + 10) + 'px';
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
                tooltip.style.pointerEvents = 'auto';
            }
        }
    });

    document.body.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.mod-db-link');
        if (target) {
            hideTimeout = setTimeout(() => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(-10px)';
                tooltip.style.pointerEvents = 'none';
            }, 300); // 300ms buffer so user can move mouse into tooltip
        }
    });

    // Keep tooltip alive if mouse is inside it
    tooltip.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });

    tooltip.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(-10px)';
            tooltip.style.pointerEvents = 'none';
        }, 300);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTooltip);
} else {
    initTooltip();
}