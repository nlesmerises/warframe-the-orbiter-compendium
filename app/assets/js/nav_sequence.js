// nav_sequence.js - SINGLE SOURCE OF TRUTH for chapter (Prev/Next) order.
// Edit this ONE list to change the order across every page. Each page reads it
// via `const guideSequence = window.GUIDE_SEQUENCE`.
//
// Seeded from the original learning-flow order, then the remaining navigable
// pages appended alphabetically. Nelson: reorder to taste and remove any page
// that should not sit in the linear flow (removing it here disables its
// Prev/Next; the page itself still works and stays reachable from the hub).
window.GUIDE_SEQUENCE = [
    'Warframe_Progression_Guide.html',
    'Warframe_Orbiter_Codex.html',
    'Warframe_Mastery_Rank_Guide.html',
    'Warframe_Quest_Codex.html',
    'Warframe_Meta_Weapons_Codex.html',
    'Warframe_Tennokai_Melee_Codex.html',
    'Warframe_Companions_Vehicles_Codex.html',
    'Warframe_Fishing_Companion_Codex.html',
    'Warframe_Conservation_Codex.html',
    'Warframe_Open_Worlds_Guide.html',
    'Warframe_Eidolon_Hunt_Guide.html',
    'Warframe_Zariman_Guide.html',
    'Warframe_Albrecht_Labs_Guide.html',
    'Warframe_1999_Hollvania_Guide.html',
    'Warframe_Amp_Operator_Guide.html',
    'Warframe_Seasonal_Events_Guide.html',
    'Warframe_Tenno_Foundry.html',
    'Warframe_Foundry_Farming_Guide.html',
    'Warframe_Relics_Database.html',
    'Warframe_Relic_Tracker.html',
    'Warframe_Mods_Database.html',
    'Warframe_Mod_Farming_Guide.html',
    'Warframe_Rare_Mods_Value_Guide.html',
    'Warframe_Augment_Codex.html',
    'Warframe_Arcane_Codex.html',
    'Warframe_Riven_Guide.html',
    'Warframe_Resource_Farming_Guide.html',
    'Warframe_Drop_Tables.html',
    'Warframe_Endo_Farming_Volume.html',
    'Warframe_Platinum_Farming_Guide.html',
    'Warframe_Currency_Farming_Codex.html',
    'Warframe_Syndicate_Farming_Guide.html',
    'Warframe_Nightwave_Guide.html',
    'Warframe_Combat_Mechanics.html',
    'Warframe_Damage_Guide.html',
    'Warframe_Endgame_Systems_Codex.html',
    'Warframe_Mechanics_Focus_Guide.html',
    'Warframe_Helminth_Synergy_App.html',
    'Warframe_Duviri_Codex.html',
    'Warframe_Circuit_Tracker_App.html',
    'Warframe_Archon_Planner_App.html',
    'Warframe_Mission_Types_Guide.html',
    'Warframe_Arbitrations_Guide.html',
    'Warframe_Deep_Archimedea_Guide.html',
    'Warframe_Profit_Taker_Guide.html',
    'Warframe_Status_Effects_Guide.html',
    'Warframe_Void_Relics_Meta_Guide.html',
    'Warframe_Tenet_Kuva_Weapons_Guide.html',
    'Warframe_Lich_Guide.html',
    'Warframe_Conclave_Guide.html',
    'Warframe_Steel_Path_Audit.html',
    'Warframe_Railjack_Codex.html',
    'Warframe_Necramech_Codex.html',
    'Warframe_Kahl_Veilbreaker_Codex.html',
    'Warframe_Vendor_Tracking_Guide.html',
    'Warframe_Reset_Checklist.html',
    'Warframe_Inventory_Cleanup_Guide.html',
    'Warframe_Weapons_Recipe_Ingredients.html',
    'Warframe_Disposal_Guidelines_SOP.html',
    'Warframe_Active_Projects_Farming_Hub.html',
    'Warframe_Frame_Builds_Reference.html',
    'Warframe_Builds_Codex.html',
    'Warframe_Endgame_Modes_Codex.html',
    'Warframe_Farming_Codex_App.html',
    'Warframe_Foundry_Planner.html',
    'Warframe_Incarnon_Tracker.html',
    'Warframe_Syndicate_Manager.html',
    'Warframe_Trading_Ledger.html',
    'Warframe_Tenno_Path.html',
    'Warframe_Start_Here.html',
    'Warframe_Tenno_Path_Expansion.html',
    'Warframe_Tenno_Path_Endgame.html',
];

// Excluded on purpose (hub / settings / dashboards). Add here if you want
// them in the linear flow:
//   !Warframe_Master_Index.html
//   Warframe_Dashboard.html
//   Warframe_System_Settings.html

// Standalone pages with no Prev/Next wiring at all:
//   License_Agreement.html
//   README.html
//   Release_Notes.html
//   Warframe_Weapon_Build_Customizer.html  (interactive tool — no linear flow)
//   Warframe_Live_Network_Hub.html
//   Warframe_Site_Map.html               (navigation utility — no linear flow)
//   Warframe_Weapons_Database.html       (old design — archived, file kept outside app)
