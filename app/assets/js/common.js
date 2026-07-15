// safe_storage.js
// A resilient wrapper for localStorage that prevents SecurityError crashes 
// when the Codex is run locally via file:/// protocol or blocked by privacy extensions.

window.safeStorage = (function() {
    let memoryStorage = window.__memory_restore_data__ || {};
    let isAvailable = false;
    const sharedStorage = window.codexSharedStorage || null;
    
    try {
        const testKey = '__storage_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        isAvailable = true;
    } catch(e) {
        console.warn("Warframe Codex: localStorage is blocked or unavailable (SecurityError). Falling back to temporary in-memory storage.", e);
    }

    return {
        getItem: function(key) {
            if (sharedStorage) {
                try {
                    return sharedStorage.getItem(key);
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    return window.localStorage.getItem(key);
                } catch(e) {
                    console.warn("Storage Error on getItem", e);
                    return null;
                }
            }
            return memoryStorage.hasOwnProperty(key) ? memoryStorage[key] : null;
        },
        setItem: function(key, val) {
            if (sharedStorage) {
                try {
                    sharedStorage.setItem(key, val);
                    return;
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    window.localStorage.setItem(key, val);
                } catch(e) {
                    console.warn("Storage Error on setItem", e);
                }
            } else {
                memoryStorage[key] = String(val);
            }
        },
        removeItem: function(key) {
            if (sharedStorage) {
                try {
                    sharedStorage.removeItem(key);
                    return;
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    window.localStorage.removeItem(key);
                } catch(e) {
                    console.warn("Storage Error on removeItem", e);
                }
            } else {
                delete memoryStorage[key];
            }
        },
        get length() {
            if (sharedStorage) {
                try {
                    return typeof sharedStorage.length === 'function' ? sharedStorage.length() : 0;
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    return window.localStorage.length;
                } catch(e) {
                    return 0;
                }
            }
            return Object.keys(memoryStorage).length;
        },
        key: function(i) {
            if (sharedStorage) {
                try {
                    const keys = typeof sharedStorage.keys === 'function' ? sharedStorage.keys() : [];
                    return keys[i] || null;
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    return window.localStorage.key(i);
                } catch(e) {
                    return null;
                }
            }
            return Object.keys(memoryStorage)[i] || null;
        },
        clear: function() {
            if (sharedStorage) {
                try {
                    sharedStorage.clear();
                    return;
                } catch (e) {}
            }
            if (isAvailable) {
                try {
                    window.localStorage.clear();
                } catch(e) {
                    console.warn("Storage Error on clear", e);
                }
            }
            memoryStorage = {};
        },
        isPersistent: isAvailable || !!sharedStorage
    };
})();

// ── User Preferences Bootstrap ──────────────────────────────────────────────
// Runs at parse time so scale/motion are applied before first paint (no flash).
(function () {
    // Inject reduce-motion override stylesheet
    var ms = document.createElement('style');
    ms.id = 'codex-motion-style';
    ms.textContent =
        '.codex-reduce-motion *,' +
        '.codex-reduce-motion *::before,' +
        '.codex-reduce-motion *::after {' +
        'transition:none!important;animation:none!important;}';
    (document.head || document.documentElement).appendChild(ms);

    try {
        var scale = window.localStorage.getItem('codex_ui_scale');
        if (scale) {
            document.documentElement.style.zoom = (parseInt(scale, 10) / 100).toFixed(2);
        }
        if (window.localStorage.getItem('codex_reduce_motion') === 'true') {
            document.documentElement.classList.add('codex-reduce-motion');
        }
    } catch (e) { /* storage unavailable — skip */ }
})();

// Back/Forward buttons — always enabled. history.back() / history.forward()
// are silent no-ops when there is nothing to traverse, which is fine.
(function () {
    "use strict";
    function enable(id) {
        var btn = document.getElementById(id);
        if (!btn) return;
        btn.classList.remove("disabled");
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    }
    function enableBoth() {
        enable("nav-back-top");
        enable("nav-forward-top");
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { setTimeout(enableBoth, 0); });
    } else {
        setTimeout(enableBoth, 0);
    }
})();

function collectStorageArea(storage) {
    const data = {};
    try {
        if (!storage) return data;
        const len = typeof storage.length === 'function' ? storage.length() : storage.length;
        for (let i = 0; i < len; i++) {
            const key = typeof storage.key === 'function' ? storage.key(i) : null;
            if (!key) continue;
            data[key] = storage.getItem(key);
        }
    } catch (err) {}
    return data;
}

window.codexBackupTools = {
    snapshot() {
        return {
            schema: 'warframe-codex-backup-v1',
            createdAt: new Date().toISOString(),
            shared: collectStorageArea(window.codexSharedStorage),
            local: collectStorageArea(window.localStorage),
            session: collectStorageArea(window.sessionStorage)
        };
    },
    restore(payload) {
        if (!payload || payload.schema !== 'warframe-codex-backup-v1') {
            throw new Error('Unsupported backup file format.');
        }
        try {
            if (window.codexSharedStorage && typeof window.codexSharedStorage.clear === 'function') {
                window.codexSharedStorage.clear();
                Object.entries(payload.shared || {}).forEach(([key, value]) => {
                    window.codexSharedStorage.setItem(key, value);
                });
            }
        } catch (err) {
            console.warn("Warframe Codex backup restore: shared storage restore failed.", err);
        }
        try {
            window.localStorage.clear();
            Object.entries(payload.local || {}).forEach(([key, value]) => {
                window.localStorage.setItem(key, value);
            });
        } catch (err) {
            console.warn("Warframe Codex backup restore: local storage restore failed.", err);
        }
        try {
            window.sessionStorage.clear();
            Object.entries(payload.session || {}).forEach(([key, value]) => {
                window.sessionStorage.setItem(key, value);
            });
        } catch (err) {
            console.warn("Warframe Codex backup restore: session storage restore failed.", err);
        }
    }
};

// Persistent quick-nav: one emoji per content area, each jumping straight to that
// area's main page. Shown on every page after a vertical divider, in the same icon
// style as home/settings. [emoji, label, page]. Defined at file scope (not inside the
// header-chrome IIFE below) so the breadcrumb block further down can reuse the same
// list without duplicating it.
var CODEX_QUICK_NAV = [
    ["🚀", "Getting Started", "Warframe_Progression_Guide.html"],
    ["🛡️", "Warframes", "Warframe_Builds_Codex.html"],
    ["🔫", "Arsenal", "Warframe_Meta_Weapons_Codex.html"],
    ["📂", "Mods & Arcanes", "Warframe_Mods_Database.html"],
    ["⛏️", "Farming & Economy", "Warframe_Resource_Farming_Guide.html"],
    ["⚔️", "Combat & Mechanics", "Warframe_Combat_Mechanics.html"],
    ["🔥", "Endgame & Activities", "Warframe_Endgame_Systems_Codex.html"],
    ["📦", "Tools & Maintenance", "Warframe_Inventory_Cleanup_Guide.html"]
];

// Friendly display name for a page's dropdown entry -- same overrides/transform as
// Warframe_Site_Map.html's own friendly(), duplicated here (small, static list) rather
// than sharing a reference so this file has no load-order dependency on the Site Map page.
var CODEX_PAGE_LABEL_OVERRIDES = {
    "Warframe_Lich_Guide.html": "Lich & Sisters",
    "Warframe_Companions_Vehicles_Codex.html": "Companions & Vehicles",
    "Warframe_Necramech_Codex.html": "Necramech",
    "Warframe_Kahl_Veilbreaker_Codex.html": "Kahl & Veilbreaker",
    "Warframe_Tennokai_Melee_Codex.html": "Tennokai Melee"
};
function codexFriendlyPageName(file) {
    if (CODEX_PAGE_LABEL_OVERRIDES[file]) return CODEX_PAGE_LABEL_OVERRIDES[file];
    return file.replace(/^!/, "").replace(/^Warframe_/, "").replace(/\.html$/, "").replace(/_/g, " ");
}

// Optional in-page anchor sub-links for a dropdown entry, so a page's own sections can
// be jumped to directly instead of always landing on top and clicking through manually.
// Deliberately a small hand-picked list (not audited across all ~66 pages) -- start
// simple, extend later if it proves useful. [anchor id (no #), label].
var CODEX_PAGE_ANCHORS = {
    "Warframe_Progression_Guide.html": [
        ["section-early-game", "Phase 1: Early Game"],
        ["section-mid-game", "Phase 2: Mid Game"],
        ["section-pre-endgame", "Phase 3: The Pre-Endgame"],
        ["section-true-endgame", "Phase 4: True Endgame"]
    ],
    "Warframe_Mastery_Rank_Guide.html": [
        ["section-calculator", "1. Interactive Mastery Rank Calculator"],
        ["section-math", "2. The Math of Mastery Points"],
        ["section-farming", "3. The Best Farming Locations"],
        ["section-pipeline", "4. The “Foundry Pipeline” Strategy"],
        ["section-missed", "5. Easy-to-Miss Mastery Points"],
        ["section-milestones", "6. Mastery Rank Milestone Unlocks"],
        ["section-values", "7. Mastery Point Values Quick Reference"]
    ]
};

/* ===== Compendium registry: parent-pointer tree, replaces the old flat
   CODEX_CATEGORY_PAGES array =====
   Design from Nelson (2026-07-14 session): a flat map where every node just
   points at its own parent, instead of a nested literal. Trivial to extend
   (move a page = change one "parent" value) and the same shape supports any
   depth -- a node's parent can itself be a virtual "sub-category" node with
   no real page behind it, which is how Arsenal below gets its 4th level
   without needing a different data structure for that one case.
   Keys are real filenames (matching codexCurrentBasename()) for every actual
   page; virtual (non-page) nodes use a "__"-prefixed key so they can never
   collide with a real ".html" filename. Each node: {label, parent, target}.
   "target" is the href to land on when this node is clicked (null = plain
   text, not clickable -- used for virtual sub-category headers that have no
   page of their own, and for leaf/current-page nodes, which are never links). */
var CODEX_HOME_KEY = "__home__";
var CODEX_REGISTRY = (function () {
    var reg = {};
    reg[CODEX_HOME_KEY] = { label: "Home", parent: null, target: null };

    for (var i = 0; i < CODEX_QUICK_NAV.length; i++) {
        var catKey = "__cat_" + i + "__";
        reg[catKey] = { label: CODEX_QUICK_NAV[i][1], parent: CODEX_HOME_KEY, target: CODEX_QUICK_NAV[i][2] };
    }

    // Flat page lists per category, same content as the old CODEX_CATEGORY_PAGES
    // (index-aligned with CODEX_QUICK_NAV) -- default parent is that category's
    // node directly, overridden below for Arsenal's two sub-groups.
    var flatPages = [
        ["Warframe_Orbiter_Codex.html","Warframe_Progression_Guide.html","Warframe_Mastery_Rank_Guide.html","Warframe_Quest_Codex.html","Warframe_Start_Here.html","Warframe_Mission_Types_Guide.html","Warframe_Tenno_Path.html","Warframe_Tenno_Path_Expansion.html","Warframe_Tenno_Path_Endgame.html"],
        ["Warframe_Frame_Builds_Reference.html","Warframe_Builds_Codex.html","Warframe_Dashboard.html"],
        ["Warframe_Meta_Weapons_Codex.html","Warframe_Weapon_Build_Customizer.html","Warframe_Weapons_Recipe_Ingredients.html","Warframe_Tennokai_Melee_Codex.html","Warframe_Incarnon_Tracker.html","Warframe_Companions_Vehicles_Codex.html","Warframe_Tenet_Kuva_Weapons_Guide.html","Warframe_Active_Projects_Farming_Hub.html"],
        ["Warframe_Mods_Database.html","Warframe_Mod_Farming_Guide.html","Warframe_Rare_Mods_Value_Guide.html","Warframe_Augment_Codex.html","Warframe_Arcane_Codex.html","Warframe_Riven_Guide.html"],
        ["Warframe_Resource_Farming_Guide.html","Warframe_Endo_Farming_Volume.html","Warframe_Platinum_Farming_Guide.html","Warframe_Currency_Farming_Codex.html","Warframe_Foundry_Farming_Guide.html","Warframe_Foundry_Planner.html","Warframe_Tenno_Foundry.html","Warframe_Vendor_Tracking_Guide.html","Warframe_Trading_Ledger.html","Warframe_Syndicate_Farming_Guide.html","Warframe_Syndicate_Manager.html","Warframe_Relics_Database.html","Warframe_Relic_Tracker.html","Warframe_Void_Relics_Meta_Guide.html","Warframe_Fishing_Companion_Codex.html","Warframe_Conservation_Codex.html","Warframe_Farming_Codex_App.html","Warframe_Drop_Tables.html","Warframe_Live_Network_Hub.html"],
        ["Warframe_Combat_Mechanics.html","Warframe_Damage_Guide.html","Warframe_Status_Effects_Guide.html","Warframe_Mechanics_Focus_Guide.html","Warframe_Amp_Operator_Guide.html"],
        ["Warframe_Endgame_Systems_Codex.html","Warframe_Endgame_Modes_Codex.html","Warframe_Steel_Path_Audit.html","Warframe_Arbitrations_Guide.html","Warframe_Profit_Taker_Guide.html","Warframe_Conclave_Guide.html","Warframe_Duviri_Codex.html","Warframe_Circuit_Tracker_App.html","Warframe_Archon_Planner_App.html","Warframe_Railjack_Codex.html","Warframe_Necramech_Codex.html","Warframe_Kahl_Veilbreaker_Codex.html","Warframe_Lich_Guide.html","Warframe_Eidolon_Hunt_Guide.html","Warframe_Deep_Archimedea_Guide.html","Warframe_Open_Worlds_Guide.html","Warframe_Zariman_Guide.html","Warframe_Albrecht_Labs_Guide.html","Warframe_1999_Hollvania_Guide.html","Warframe_Seasonal_Events_Guide.html","Warframe_Nightwave_Guide.html","Warframe_Helminth_Synergy_App.html"],
        ["Warframe_Inventory_Cleanup_Guide.html","Warframe_Disposal_Guidelines_SOP.html","Warframe_Reset_Checklist.html"]
    ];

    // Sub-groups per category (index-aligned with CODEX_QUICK_NAV/flatPages).
    // A page listed under a group gets a virtual parent node instead of the
    // category node directly, giving it a real 4th breadcrumb level and a
    // grouped header in the dropdown. Only categories/groups worth the extra
    // depth are listed here -- small categories (Warframes, Mods & Arcanes,
    // Combat & Mechanics, Tools & Maintenance) stay fully flat on purpose,
    // and pages not listed in any group for a category that DOES have groups
    // still fall through to that category's node directly (see the loop below).
    var SUBGROUPS = {
        0: { // Getting Started
            "The Tenno Path": ["Warframe_Tenno_Path.html", "Warframe_Tenno_Path_Expansion.html", "Warframe_Tenno_Path_Endgame.html"]
        },
        2: { // Arsenal
            "Melee & Combos": ["Warframe_Tennokai_Melee_Codex.html", "Warframe_Incarnon_Tracker.html"],
            "Companions & Vehicles": ["Warframe_Companions_Vehicles_Codex.html"]
        },
        4: { // Farming & Economy
            "Foundry": ["Warframe_Foundry_Farming_Guide.html", "Warframe_Foundry_Planner.html", "Warframe_Tenno_Foundry.html"],
            "Trading & Syndicates": ["Warframe_Vendor_Tracking_Guide.html", "Warframe_Trading_Ledger.html", "Warframe_Syndicate_Farming_Guide.html", "Warframe_Syndicate_Manager.html"],
            "Relics": ["Warframe_Relics_Database.html", "Warframe_Relic_Tracker.html", "Warframe_Void_Relics_Meta_Guide.html"],
            "Live Feeds": ["Warframe_Live_Network_Hub.html"]
        },
        6: { // Endgame & Activities
            "Open Worlds & Story": ["Warframe_Duviri_Codex.html", "Warframe_Deep_Archimedea_Guide.html", "Warframe_Zariman_Guide.html", "Warframe_Albrecht_Labs_Guide.html", "Warframe_1999_Hollvania_Guide.html", "Warframe_Open_Worlds_Guide.html", "Warframe_Eidolon_Hunt_Guide.html"],
            "Vehicles": ["Warframe_Railjack_Codex.html", "Warframe_Necramech_Codex.html"],
            "Story Companions": ["Warframe_Kahl_Veilbreaker_Codex.html", "Warframe_Lich_Guide.html"],
            "Trackers": ["Warframe_Circuit_Tracker_App.html", "Warframe_Archon_Planner_App.html"]
        }
    };

    // Build each category's group virtual nodes and a page->group-key lookup.
    var pageToGroupKey = {};
    for (var catIdx in SUBGROUPS) {
        var catNodeKeyForGroups = "__cat_" + catIdx + "__";
        var groups = SUBGROUPS[catIdx];
        var groupIdx = 0;
        for (var groupLabel in groups) {
            var groupKey = "__cat_" + catIdx + "_group_" + groupIdx + "__";
            reg[groupKey] = { label: groupLabel, parent: catNodeKeyForGroups, target: null };
            var groupPages = groups[groupLabel];
            for (var gp = 0; gp < groupPages.length; gp++) {
                pageToGroupKey[groupPages[gp]] = groupKey;
            }
            groupIdx++;
        }
    }

    for (var c = 0; c < flatPages.length; c++) {
        var catNodeKey = "__cat_" + c + "__";
        for (var p = 0; p < flatPages[c].length; p++) {
            var file = flatPages[c][p];
            var parentKey = pageToGroupKey[file] || catNodeKey;
            reg[file] = { label: null, parent: parentKey, target: file };
        }
    }

    return reg;
})();

// Walk UP from a page to Home, returning the full ancestor chain (Home first,
// the page itself last). Powers the breadcrumb. A page/key not in the
// registry returns an empty array (caller falls back to a simpler display).
function codexWalkUp(key) {
    var trail = [];
    var current = key;
    var guard = 0; // parent-cycle safety net; registry is hand-built, not user data
    while (current && CODEX_REGISTRY[current] && guard < 50) {
        trail.unshift({ key: current, node: CODEX_REGISTRY[current] });
        current = CODEX_REGISTRY[current].parent;
        guard++;
    }
    return trail;
}

// Walk DOWN from a category/sub-category key to its immediate children.
// Powers the dropdown.
function codexGetChildren(parentKey) {
    var children = [];
    for (var key in CODEX_REGISTRY) {
        if (CODEX_REGISTRY[key].parent === parentKey) {
            children.push({ key: key, node: CODEX_REGISTRY[key] });
        }
    }
    return children;
}

// Recursive version of codexGetChildren, building a full nested subtree --
// each entry optionally carries a "children" array if it has any of its own
// (e.g. Arsenal's "Melee & Combos" virtual node). Used by the dropdown to
// render grouped headers instead of one flat list.
function codexBuildSubtree(parentKey) {
    var children = codexGetChildren(parentKey);
    for (var i = 0; i < children.length; i++) {
        var sub = codexBuildSubtree(children[i].key);
        if (sub.length) children[i].children = sub;
    }
    return children;
}

/* ===== Header chrome: active-page highlight + teal hover outlines and labels =====
   Runs on every page (this file is loaded everywhere). Gives all header controls a
   teal hover outline, shows a text label for the icon-only buttons on hover, and
   marks whichever icon matches the current page with a persistent amber highlight
   (added 2026-07-14 -- previously nothing indicated where you currently were). The
   Site Map button was retired from this row the same day; it now lives inside
   Settings (Warframe_System_Settings.html) instead of being one click from every
   single page. */
(function () {
    "use strict";
    // Canonical pixel size for the header icon buttons (home, settings, quick-nav).
    var ICON_SIZE_PX = 38;
    var QUICK_NAV = CODEX_QUICK_NAV;

    // Inject the header-chrome stylesheet SYNCHRONOUSLY. This script is loaded in <head>, so
    // this runs before <body> is parsed and painted: every header icon paints at its final
    // size on first render, so the button row never resizes/jiggles between pages. Selectors
    // are element-qualified (a.<class>) so they out-specify any per-page header rule
    // regardless of cascade order (this is also what lets the teal hover win over a page's
    // own amber :hover rule).
    function injectStyle() {
        if (document.getElementById("codex-chrome-style")) return;
        var ICONS = "a.home-emoji-btn,a.settings-emoji-btn,a.qnav-emoji-btn";
        var HOVER = "a.home-emoji-btn:hover,a.settings-emoji-btn:hover,a.qnav-emoji-btn:hover";
        // Quick-nav icons get a rich page-list dropdown (below) instead of the plain
        // single-line label tooltip, so they're excluded from AFTER here.
        var AFTER = "a.home-emoji-btn:hover::after,a.settings-emoji-btn:hover::after";
        var css =
            // Reserve the vertical scrollbar gutter on every page from first paint (injectStyle
            // runs synchronously in <head>, before <body> paints), so centred and fixed content
            // never shifts by half the scrollbar width when a page's content crosses the viewport
            // height, or when navigating between a short page and a tall one. Single source: this
            // supersedes the per-page "html{overflow-y:scroll}" the arsenal pages used to carry.
            "html{overflow-y:scroll;}" +
            // GREAT MOVE: pin the ENTIRE header tray to one canonical definition on every page, so the
            // bar and its icon buttons are byte-identical everywhere and nothing can shift when moving
            // between pages. Each page ships its own header markup with slightly different inline styles;
            // these !important rules override all of it (position, size, padding, gap, alignment, chrome).
            // The 1366px media-query later re-tightens the gap for laptops and wins by being later.
            ".global-top-header{position:fixed!important;top:0!important;left:0!important;right:0!important;" +
                "box-sizing:border-box!important;height:60px!important;padding:0 20px!important;gap:15px!important;" +
                "display:flex!important;align-items:center!important;justify-content:flex-start!important;" +
                "background:rgba(15,22,42,0.95)!important;border-bottom:1px solid rgba(255,255,255,0.1)!important;" +
                "box-shadow:0 2px 10px rgba(0,0,0,0.5)!important;backdrop-filter:blur(10px)!important;" +
                "-webkit-backdrop-filter:blur(10px)!important;z-index:10000!important;}" +
            // The arsenal calculators (and any future page on that template) repeat the page name
            // in a .header-title-block in the top bar while the big .page-title-banner below already
            // shows it, and the leading icon duplicates the quick-nav icon. The banner is the single
            // source of the name, so hide the redundant header-bar copy on every page in one rule.
            ".header-title-block{display:none!important;}" +
            ICONS + "{position:relative!important;display:inline-flex!important;align-items:center!important;" +
                "justify-content:center!important;font-size:" + ICON_SIZE_PX + "px!important;line-height:1!important;" +
                // Pin an explicit emoji font on the icon buttons. Otherwise they inherit each page's
                // body font stack, which varies page to page; the differing stack changes the line
                // metrics and renders the emoji glyph 1-2px higher or lower (the box stays put, the
                // glyph moves). A fixed stack makes every icon render identically on every page.
                "font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif!important;" +
                "padding:3px 7px!important;border-radius:8px!important;text-decoration:none!important;" +
                "box-sizing:border-box!important;vertical-align:middle!important;}" +
                // The 🔫 glyph's artwork sits low within its own character cell. Nudging the
                // whole button (as before) moved the box itself out of alignment with every
                // other quick-nav icon's box -- so the shift is applied only to an inner
                // wrapper span around the glyph (see QUICK_NAV build below), leaving the
                // button's own position untouched.
                ".qnav-glyph-nudge{display:inline-block;transform:translateY(-6px);}" +
            HOVER + "{box-shadow:inset 0 0 0 2px #2dd4bf!important;background:rgba(45,212,191,0.14)!important;}" +
            // Persistent highlight for whichever icon matches the current page. Kept as a
            // separate class (not folded into HOVER) so it survives when the mouse moves away,
            // and a plain :hover on top of it still shows the teal ring layered over the amber.
            ".codex-nav-active{box-shadow:inset 0 0 0 2px #ffab00!important;background:rgba(255,171,0,0.16)!important;}" +
            "a.nav-btn-top:hover{box-shadow:inset 0 0 0 2px #2dd4bf!important;" +
                "border-color:#2dd4bf!important;color:#2dd4bf!important;background:rgba(45,212,191,0.10)!important;}" +
            AFTER + "{content:attr(data-label);position:absolute;top:100%;left:50%;transform:translateX(-50%);" +
                "margin-top:7px;white-space:nowrap;background:rgba(8,12,24,0.97);color:#2dd4bf;" +
                "border:1px solid #2dd4bf;border-radius:6px;padding:2px 9px;font-size:12px;font-weight:600;" +
                "font-family:'Inter',sans-serif;letter-spacing:0.5px;z-index:10001;pointer-events:none;}" +
            "span.qnav-sep{flex:0 0 auto;align-self:center;width:1px;height:26px;background:rgba(255,255,255,0.22);}" +
            // Hover dropdown listing every page in a quick-nav icon's section (not just its
            // one landing page). The icon itself sits in a wrapper span so the dropdown can be
            // a normal sibling <div> full of real <a> links (a dropdown nested inside the icon's
            // own <a> would be invalid HTML and unclickable).
            ".qnav-wrap{position:relative!important;display:inline-flex!important;align-items:center!important;}" +
            // No gap between the icon and this box (top:100%, no margin) -- a margin here
            // would create dead space that isn't part of any element, breaking :hover the
            // instant the mouse crosses it on the way down to the links. The 10px of visual
            // breathing room is padding-top instead, which IS part of the hoverable box.
            ".qnav-dropdown{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);" +
                "background:rgba(8,12,24,0.98);border:1px solid rgba(45,212,191,0.4);" +
                "border-radius:8px;padding:12px 4px 8px;min-width:230px;max-width:300px;max-height:70vh;" +
                "overflow-y:auto;z-index:10001;box-shadow:0 8px 24px rgba(0,0,0,0.5);}" +
            ".qnav-wrap:hover .qnav-dropdown{display:block;}" +
            ".qnav-dropdown-title{font-family:'Inter',sans-serif;font-size:11px;font-weight:700;color:#2dd4bf;" +
                "text-transform:uppercase;letter-spacing:1px;padding:2px 12px 8px;" +
                "border-bottom:1px solid rgba(255,255,255,0.08);margin-bottom:4px;}" +
            ".qnav-dropdown a{display:block;padding:6px 12px;font-family:'Inter',sans-serif;font-size:13px;" +
                "color:#e2e8f0;text-decoration:none;border-radius:4px;white-space:nowrap;overflow:hidden;" +
                "text-overflow:ellipsis;}" +
            ".qnav-dropdown a:hover{background:rgba(45,212,191,0.12);color:#2dd4bf;}" +
            ".qnav-dropdown a.codex-nav-active{color:#ffab00;background:rgba(255,171,0,0.1);}" +
            // In-page anchor sub-links (see CODEX_PAGE_ANCHORS) sit indented under their
            // parent page's entry, smaller and dimmer so the page list itself stays the
            // visual focus.
            ".qnav-dropdown a.qnav-dropdown-anchor{padding-left:26px;font-size:12px;color:#94a3b8;}" +
            ".qnav-dropdown a.qnav-dropdown-anchor:hover{color:#2dd4bf;}" +
            // Virtual sub-category group headers (e.g. Arsenal's "Melee & Combos") --
            // dashed divider above each group (except the first), small uppercase dim
            // label, indented sub-list of that group's own pages underneath.
            ".qnav-dropdown-group{margin-top:8px;padding-top:6px;border-top:1px dashed rgba(255,255,255,0.12);}" +
            ".qnav-dropdown-group:first-child{border-top:none;margin-top:0;padding-top:0;}" +
            ".qnav-dropdown-group-title{font-size:10.5px;color:#64748b;text-transform:uppercase;" +
                "letter-spacing:0.5px;padding:2px 12px;font-family:'Inter',sans-serif;font-weight:700;}" +
            ".qnav-dropdown-sublist{padding-left:12px;}" +
            // Some pages disable the logo with pointer-events:none and nest the view-tab bar
            // inside it, which makes the tabs un-clickable by inheritance. Re-enable them.
            ".main-nav,.tab-icon-btn{pointer-events:auto!important;}" +
            // G1 (header CSS single source): the nav-cluster button sizing used to live in a
            // per-page <style class="unified-header-style"> block repeated on every page. It is
            // centralised here so the injected Prev/Back/Forward/Next buttons size identically
            // everywhere and that per-page block can be deleted. The 1366px query below re-tightens.
            "a.nav-btn-top{position:relative!important;width:auto!important;height:44px!important;padding:0 10px!important;white-space:nowrap!important;flex-shrink:0!important;color:#ffab00!important;text-decoration:none!important;border-radius:6px!important;border:none!important;background:none!important;font-family:'Inter',sans-serif!important;font-size:14px!important;font-weight:600!important;}" +
            "a.nav-btn-top svg{width:34px!important;height:34px!important;}" +
            "a.nav-btn-top .nav-text{display:none!important;}" +
            "a.nav-btn-top:hover::after{content:attr(title);position:absolute;top:100%;left:50%;transform:translateX(-50%);" +
                "margin-top:7px;white-space:nowrap;background:rgba(8,12,24,0.97);color:#2dd4bf;" +
                "border:1px solid #2dd4bf;border-radius:6px;padding:2px 9px;font-size:12px;font-weight:600;" +
                "font-family:'Inter',sans-serif;letter-spacing:0.5px;z-index:10001;pointer-events:none;}" +
            "a.nav-btn-top.disabled{opacity:0.25!important;pointer-events:none!important;}" +
            // Responsive header: on laptops and smaller the row would overflow (the 7 quick-nav
            // icons plus the Prev/Next buttons), so shrink the icons, tighten gaps, hide the long
            // branding title and compact the nav buttons. The nav buttons keep their text, just
            // smaller. No overflow scroll, which would clip the hover-label tooltips.
            "@media(max-width:1366px){a.home-emoji-btn,a.settings-emoji-btn,a.qnav-emoji-btn{font-size:25px!important;padding:1px 5px!important;}.global-top-header{gap:7px!important;}.global-top-header .header-title{display:none!important;}a.nav-btn-top{padding:0 9px!important;font-size:11px!important;}a.nav-btn-top svg{width:18px!important;height:18px!important;}}" +
            // Nav bar cluster (Back/Forward/Prev/Next) retired 2026-07-14 -- breadcrumb +
            // the quick-nav dropdowns cover "where am I / go up / jump to a page" now, and
            // Nelson confirmed the guided Prev/Next reading order wasn't actually in use.
            // Hidden rather than deleted: every button, its per-page hardcoded markup, and
            // all the wiring/injection code below stay fully intact so this can be turned
            // back on by removing just this one rule, with no code to rebuild.
            ".header-nav{display:none!important;}";
        var st = document.createElement("style");
        st.id = "codex-chrome-style";
        st.textContent = css;
        (document.head || document.documentElement).appendChild(st);
    }
    injectStyle();

    // Build the Site Map button, the divider and the quick-nav row right after the cog. This
    // needs the cog in the DOM, so run the instant the header is parsed via a MutationObserver
    // so nothing pops in after first paint. DOMContentLoaded is the fallback.
    // Highlight whichever header icon matches the current page, so it's obvious at a
    // glance where you are (previously nothing distinguished "here" from anywhere else).
    function markActiveNavIcon() {
        var here = codexCurrentBasename();
        var home = document.querySelector(".home-emoji-btn");
        if (home && here === "!Warframe_Master_Index.html") home.classList.add("codex-nav-active");
        var settings = document.querySelector(".settings-emoji-btn");
        if (settings && here === "Warframe_System_Settings.html") settings.classList.add("codex-nav-active");
        // Ancestry check via the registry, not a flat-array membership test -- so an icon
        // stays lit for any descendant page, including ones nested under a virtual
        // sub-category (e.g. Tennokai Melee, nested under Arsenal's "Melee & Combos").
        var trail = codexWalkUp(here);
        var ancestorKeys = trail.map(function (t) { return t.key; });
        var qnavBtns = document.querySelectorAll(".qnav-emoji-btn");
        for (var i = 0; i < qnavBtns.length; i++) {
            var catKey = "__cat_" + i + "__";
            if (ancestorKeys.indexOf(catKey) !== -1) qnavBtns[i].classList.add("codex-nav-active");
        }
        // Also mark the matching link inside each dropdown, so the current page stands
        // out in its own section's page list, not just the icon that opens it.
        var dropdownLinks = document.querySelectorAll(".qnav-dropdown a");
        for (var j = 0; j < dropdownLinks.length; j++) {
            if (dropdownLinks[j].getAttribute("data-page") === here) {
                dropdownLinks[j].classList.add("codex-nav-active");
            }
        }
    }

    // Renders a dropdown's contents from codexBuildSubtree()'s nested output.
    // A node with children is a virtual sub-category (e.g. Arsenal's "Melee &
    // Combos") -- rendered as a small group header with an indented sub-list,
    // recursing in case a sub-category ever has its own sub-categories. A node
    // with no children is a real page -- rendered as a link, with its optional
    // CODEX_PAGE_ANCHORS sub-links right underneath.
    function renderDropdownNodes(container, nodes, prefix) {
        for (var n = 0; n < nodes.length; n++) {
            var entry = nodes[n];
            if (entry.children && entry.children.length) {
                var groupWrap = document.createElement("div");
                groupWrap.className = "qnav-dropdown-group";
                var groupTitle = document.createElement("div");
                groupTitle.className = "qnav-dropdown-group-title";
                groupTitle.textContent = entry.node.label;
                groupWrap.appendChild(groupTitle);
                var subList = document.createElement("div");
                subList.className = "qnav-dropdown-sublist";
                renderDropdownNodes(subList, entry.children, prefix);
                groupWrap.appendChild(subList);
                container.appendChild(groupWrap);
            } else {
                var link = document.createElement("a");
                link.href = prefix + entry.key;
                link.textContent = codexFriendlyPageName(entry.key);
                link.setAttribute("data-page", entry.key);
                container.appendChild(link);

                var anchors = CODEX_PAGE_ANCHORS[entry.key];
                if (anchors) {
                    for (var a = 0; a < anchors.length; a++) {
                        var anchorLink = document.createElement("a");
                        anchorLink.href = prefix + entry.key + "#" + anchors[a][0];
                        anchorLink.textContent = anchors[a][1];
                        anchorLink.className = "qnav-dropdown-anchor";
                        container.appendChild(anchorLink);
                    }
                }
            }
        }
    }

    function injectControls() {
        try {
            var emoji = document.querySelectorAll(".home-emoji-btn,.settings-emoji-btn");
            for (var i = 0; i < emoji.length; i++) {
                if (!emoji[i].getAttribute("data-label")) {
                    emoji[i].setAttribute("data-label", emoji[i].getAttribute("title") || "");
                }
            }
            var cog = document.querySelector(".settings-emoji-btn");
            if (!cog) return false;
            // Path prefix from the current location: app pages, app/docs pages, or root.
            var prefix = codexPathPrefix();
            if (!document.querySelector(".qnav-emoji-btn")) {
                var sep = document.createElement("span");
                sep.className = "qnav-sep";
                sep.setAttribute("aria-hidden", "true");
                cog.insertAdjacentElement("afterend", sep);
                var prev = sep;
                for (var q = 0; q < QUICK_NAV.length; q++) {
                    var item = QUICK_NAV[q];
                    var wrap = document.createElement("span");
                    wrap.className = "qnav-wrap";

                    var b = document.createElement("a");
                    b.href = prefix + item[2];
                    b.className = "qnav-emoji-btn";
                    b.title = item[1];
                    b.setAttribute("data-label", item[1]);
                    if (item[1] === "Arsenal") {
                        b.innerHTML = '<span class="qnav-glyph-nudge">' + item[0] + '</span>';
                    } else {
                        b.textContent = item[0];
                    }
                    wrap.appendChild(b);

                    var subtree = codexBuildSubtree("__cat_" + q + "__");
                    if (subtree.length) {
                        var dd = document.createElement("div");
                        dd.className = "qnav-dropdown";
                        var ddTitle = document.createElement("div");
                        ddTitle.className = "qnav-dropdown-title";
                        ddTitle.textContent = item[0] + " " + item[1];
                        dd.appendChild(ddTitle);
                        renderDropdownNodes(dd, subtree, prefix);
                        wrap.appendChild(dd);
                    }

                    prev.insertAdjacentElement("afterend", wrap);
                    prev = wrap;
                }
            }
            markActiveNavIcon();
            return !!document.querySelector(".qnav-emoji-btn");
        } catch (e) {
            console.warn("Codex chrome inject failed", e);
            return false;
        }
    }
    if (!injectControls()) {
        if (typeof MutationObserver !== "undefined" && document.documentElement) {
            var obs = new MutationObserver(function () {
                if (injectControls()) { obs.disconnect(); }
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
            document.addEventListener("DOMContentLoaded", function () {
                injectControls();
                obs.disconnect();
            });
        } else {
            document.addEventListener("DOMContentLoaded", injectControls);
        }
    }
})();

/* ===== View-tab wiring =====
   Pages with a header tab bar (button.tab-icon-btn[data-view]) switch between in-page
   panels (div.view#view-<name>) by toggling the "active" class. Those tab buttons ship
   without a click handler, so this wires them generically: click a tab -> show its
   matching view and mark the tab active. Guarded, so it no-ops on every other page. */
(function () {
    "use strict";
    function wireTabs() {
        var tabs = document.querySelectorAll(".tab-icon-btn[data-view]");
        if (!tabs.length) return;
        function activate(btn) {
            var panel = document.getElementById("view-" + btn.getAttribute("data-view"));
            if (!panel) return;
            var views = document.querySelectorAll(".view");
            for (var v = 0; v < views.length; v++) { views[v].classList.remove("active"); }
            panel.classList.add("active");
            for (var t = 0; t < tabs.length; t++) { tabs[t].classList.remove("active"); }
            btn.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        for (var i = 0; i < tabs.length; i++) {
            (function (btn) {
                btn.addEventListener("click", function () { activate(btn); });
            })(tabs[i]);
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", wireTabs);
    } else {
        wireTabs();
    }
})();

// Shared nav-button inline style — used by both the header nav cluster and the
// jump-to-top/bottom button so the two can never drift out of sync with each other.
var CODEX_NAV_BTN_STYLE = "color:#ffab00;text-decoration:none;border-radius:6px;border:none;background:none;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:all 0.2s;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;white-space:nowrap;flex-shrink:0;";

// Shared path-prefix resolver — app pages need "", app/docs pages need "../",
// root pages need "app/". Used by the header chrome (site map / quick-nav links)
// and the search UI (index + result links) so both resolve paths identically.
function codexPathPrefix() {
    return /\/app\/docs\//.test(location.pathname) ? "../" : (/\/app\//.test(location.pathname) ? "" : "app/");
}

// The current page's filename with no path, used to match it against the header
// icons' href targets (active-page highlight, breadcrumb).
function codexCurrentBasename() {
    var p = location.pathname;
    var idx = p.lastIndexOf("/");
    return decodeURIComponent(idx === -1 ? p : p.substring(idx + 1));
}

/* ===== Header navigation cluster: single source of truth =====
   common.js owns the whole right-hand nav cluster so it is identical on every
   page and can never drift. Back/Forward (browser history) appear on EVERY page;
   Prev/Next (chapter) appear ONLY on pages listed in window.GUIDE_SEQUENCE
   (nav_sequence.js). Order is always Prev, Back, Forward, Next. A hardcoded copy
   is reused when present (no duplicate); a missing button is injected. So a page
   renders exactly one correct cluster whether or not it still ships the markup.
   Back/Forward keep an inline history fallback; the wiring block above upgrades
   them (disabled state, modal/hash handling) once they are in the DOM. */
(function () {
    "use strict";
    var BTN_STYLE = CODEX_NAV_BTN_STYLE;
    var SVG = {
        prev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
        back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.25"><polyline points="15 18 9 12 15 6"></polyline></svg>',
        forward: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.25"><polyline points="9 18 15 12 9 6"></polyline></svg>',
        next: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    };
    function currentFile() {
        return (window.location.pathname.split("/").pop() || "!Warframe_Master_Index.html").toLowerCase();
    }
    function sequenceIndex() {
        var seq = Array.isArray(window.GUIDE_SEQUENCE) ? window.GUIDE_SEQUENCE : null;
        if (!seq) return { seq: null, idx: -1 };
        var cur = currentFile();
        for (var i = 0; i < seq.length; i++) {
            if (String(seq[i]).toLowerCase() === cur) return { seq: seq, idx: i };
        }
        return { seq: seq, idx: -1 };
    }
    function makeButton(id, title, label, svg, labelFirst, onclick) {
        var a = document.createElement("a");
        a.id = id;
        a.className = "nav-btn-top";
        a.title = title;
        a.setAttribute("style", BTN_STYLE);
        if (onclick) a.setAttribute("onclick", onclick);
        var text = '<span class="nav-text">' + label + '</span>';
        a.innerHTML = labelFirst ? (text + svg) : (svg + text);
        return a;
    }
    function ensureWrap(header) {
        var wrap = header.querySelector(".header-nav");
        if (!wrap) {
            wrap = document.createElement("div");
            wrap.className = "header-nav no-print";
            wrap.setAttribute("style", "margin-left:auto;display:flex;gap:12px;align-items:center;");
            header.appendChild(wrap);
        }
        return wrap;
    }
    // Back/Forward belong on every page. Reuse an existing copy anywhere in the
    // header (any markup variant: canonical id, an inline history onclick, or
    // just a titled nav button), pull it into the cluster and give it the
    // canonical id so the wiring block upgrades it; drop any duplicates; inject
    // only when none exists. So exactly one Back and one Forward survive however
    // a page happened to ship the markup.
    function reuseOrInject(header, wrap, id, label, svg, labelFirst, onclick, selector) {
        var found = header.querySelectorAll(selector);
        if (!found.length) {
            wrap.appendChild(makeButton(id, label, label, svg, labelFirst, onclick));
            return;
        }
        var keep = found[0];
        keep.id = id;
        keep.setAttribute("style", BTN_STYLE);
        if (onclick) keep.setAttribute("onclick", onclick);
        if (keep.parentNode !== wrap) wrap.appendChild(keep);
        for (var i = 1; i < found.length; i++) found[i].remove();
    }
    function ensureBackForward(header, wrap) {
        reuseOrInject(header, wrap, "nav-back-top", "Back", SVG.back, false, "history.back()",
            '#nav-back-top, a[onclick*="history.back"], a.nav-btn-top[title="Back"]');
        reuseOrInject(header, wrap, "nav-forward-top", "Forward", SVG.forward, true, "history.forward()",
            '#nav-forward-top, a[onclick*="history.forward"], a.nav-btn-top[title="Forward"]');
    }
    // Prev/Next only on sequence pages. Prev sits first, Next last, so the order
    // is Prev, Back, Forward, Next regardless of how the cluster was assembled.
    function ensureChapter(wrap, info) {
        var prev = document.getElementById("nav-prev-top") || makeButton("nav-prev-top", "Previous Chapter", "Prev Chapter", SVG.prev, false, null);
        var next = document.getElementById("nav-next-top") || makeButton("nav-next-top", "Next Chapter", "Next Chapter", SVG.next, true, null);
        prev.setAttribute("style", BTN_STYLE);
        next.setAttribute("style", BTN_STYLE);
        if (prev.parentNode !== wrap) wrap.insertBefore(prev, wrap.firstChild);
        if (next.parentNode !== wrap) wrap.appendChild(next);
        if (info.idx > 0) { prev.setAttribute("href", info.seq[info.idx - 1]); prev.classList.remove("disabled"); }
        else { prev.removeAttribute("href"); prev.classList.add("disabled"); }
        if (info.idx < info.seq.length - 1) { next.setAttribute("href", info.seq[info.idx + 1]); next.classList.remove("disabled"); }
        else { next.removeAttribute("href"); next.classList.add("disabled"); }
    }
    function removeChapter() {
        var p = document.getElementById("nav-prev-top"); if (p) p.remove();
        var n = document.getElementById("nav-next-top"); if (n) n.remove();
    }
    // force = the final DOMContentLoaded pass, at which point an absent
    // GUIDE_SEQUENCE can be trusted to mean "this page is not in the flow"
    // (during head parsing the sequence script may simply not have run yet).
    function apply(force) {
        var header = document.querySelector(".global-top-header");
        if (!header) return false;               // header not parsed yet; retry
        var wrap = ensureWrap(header);
        ensureBackForward(header, wrap);         // every page, as soon as the header exists
        var hasSeq = Array.isArray(window.GUIDE_SEQUENCE);
        if (!hasSeq && !force) return false;     // chapter decision needs the sequence
        var info = sequenceIndex();
        if (info.idx === -1) {
            if (!force) return false;            // strip stray chapter buttons only on the final pass
            removeChapter();
            return true;
        }
        ensureChapter(wrap, info);
        return true;
    }

    var done = false;
    var observer = null;
    function tryApply(force) {
        if (done) return;
        if (apply(force)) {
            done = true;
            if (observer) observer.disconnect();
        }
    }
    if (typeof MutationObserver !== "undefined" && document.documentElement) {
        observer = new MutationObserver(function () { tryApply(false); });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { tryApply(true); });
    } else {
        tryApply(true);
    }
})();

/* ===== Jump-to-top/bottom control: single source of truth =====
   Moved into the header nav cluster (2026-07-13) as the last icon after Next
   Chapter, reusing a.nav-btn-top styling wholesale instead of a separate
   floating-circle style. Waits for .header-nav via a short bounded poll
   (not a MutationObserver -- a second full-document observer running
   alongside the nav-cluster's own observer was suspected but not confirmed
   as a cause of a real hang on the master index; polling avoids the
   question entirely). The button hides itself when the page is too short
   to scroll. */
(function () {
    "use strict";
    var BTN_ID = "codex-jump-btn";
    var SHORT_PAGE_SLACK_PX = 40;
    var ICON_DOWN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.25"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    var ICON_UP = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.25"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    var JUMP_BTN_STYLE = CODEX_NAV_BTN_STYLE;

    function wire(btn) {
        var atBottom = false;
        function onScroll() {
            var doc = document.documentElement;
            var scrollTop = window.scrollY || doc.scrollTop;
            var scrollHeight = doc.scrollHeight;
            var clientHeight = doc.clientHeight;
            if (scrollHeight <= clientHeight + SHORT_PAGE_SLACK_PX) {
                btn.style.display = "none";   // page too short to scroll
                return;
            }
            btn.style.display = "flex";
            if (scrollTop > (scrollHeight - clientHeight) / 2) {
                btn.innerHTML = ICON_UP; btn.title = "Jump to Top"; atBottom = true;
            } else {
                btn.innerHTML = ICON_DOWN; btn.title = "Jump to Bottom"; atBottom = false;
            }
        }
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: atBottom ? 0 : document.body.scrollHeight, behavior: "smooth" });
        });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        onScroll();
        setTimeout(onScroll, 400);
    }

    function build() {
        var strays = document.querySelectorAll(".jump-btns, #global-jump-btn, #jump-up, #jump-dn, #" + BTN_ID);
        for (var i = 0; i < strays.length; i++) strays[i].remove();
        var wrap = document.querySelector(".header-nav");
        if (!wrap) return false;
        var btn = document.createElement("a");
        btn.id = BTN_ID;
        btn.className = "nav-btn-top";
        btn.href = "#";
        btn.title = "Jump to Bottom";
        btn.setAttribute("style", JUMP_BTN_STYLE);
        btn.innerHTML = ICON_DOWN;
        wrap.appendChild(btn);
        wire(btn);
        return true;
    }

    var done = false;
    var attempts = 0;
    var MAX_ATTEMPTS = 40;
    function tryBuild() {
        if (done) return;
        if (build()) {
            done = true;
            return;
        }
        attempts++;
        if (attempts < MAX_ATTEMPTS) setTimeout(tryBuild, 50);
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { tryBuild(); });
    } else {
        tryBuild();
    }
})();



/* ===== Global Compendium Search =====
   Injects a search input into the subtitle row (right side, fixed position).
   Searches window.WF_SEARCH_INDEX built by build_search_index.py.
   Additive only — nothing existing is touched. */
(function () {
    "use strict";

    // Score one term against one field value.
    // Returns 0 if the term doesn't appear at all (used to filter out non-matches).
    function scoreTerm(term, field) {
        if (!field) return 0;
        var f = field.toLowerCase();
        var idx = f.indexOf(term);
        if (idx === -1) return 0;
        // Exact whole-field match
        if (f === term) return 100;
        // Field starts with term
        if (idx === 0) return 70;
        // Term appears at a word boundary (space or start)
        var prevChar = f.charAt(idx - 1);
        if (prevChar === ' ' || prevChar === '-' || prevChar === ':') return 50;
        // Term is somewhere inside the field
        return 10;
    }

    // Score an index entry against all query terms.
    // All terms must match somewhere — returns 0 (reject) if any term is absent.
    function scoreItem(item, terms) {
        var total = 0;
        var title   = (item.title   || '');
        var desc    = (item.desc    || '');
        var page    = (item.page    || '');
        var section = (item.section || '');
        var tags    = Array.isArray(item.tags) ? item.tags.join(' ') : '';

        for (var i = 0; i < terms.length; i++) {
            var t = terms[i];
            var best = 0;
            var s;
            s = scoreTerm(t, title);   if (s > best) best = s;      // title: full weight
            s = scoreTerm(t, desc)  * 0.6; if (s > best) best = s;  // desc: 60%
            s = scoreTerm(t, tags)  * 0.5; if (s > best) best = s;  // tags: 50%
            s = scoreTerm(t, page)  * 0.4; if (s > best) best = s;  // page: 40%
            s = scoreTerm(t, section) * 0.4; if (s > best) best = s;
            if (best === 0) return 0;  // term absent — discard entry
            total += best;
        }

        // Boost page-level entries so they surface above section/card duplicates
        if (item.type === 'page') total += 25;

        return total;
    }

    // Search + score + per-file dedup (keep best-scoring entry per file).
    function wfSearch(query) {
        var idx = window.WF_SEARCH_INDEX;
        if (!Array.isArray(idx) || !idx.length) return [];
        var terms = query.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 0; });
        if (!terms.length) return [];

        // Score every entry
        var scored = [];
        for (var i = 0; i < idx.length; i++) {
            var s = scoreItem(idx[i], terms);
            if (s > 0) scored.push({ item: idx[i], score: s });
        }

        // Per-file dedup: keep only the highest-scoring entry for each destination file
        var byFile = {};
        for (var j = 0; j < scored.length; j++) {
            var file = (scored[j].item.href || '').split('#')[0].toLowerCase();
            if (!byFile[file] || scored[j].score > byFile[file].score) {
                byFile[file] = scored[j];
            }
        }

        // Sort by score descending, return top N items (configurable in Settings)
        var limit = parseInt(safeStorage.getItem('codex_search_limit') || '10', 10) || 10;
        return Object.values(byFile)
            .sort(function (a, b) { return b.score - a.score; })
            .slice(0, limit)
            .map(function (x) { return x.item; });
    }

    function escHtml(s) {
        return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function buildSearchUI() {
        if (document.getElementById('wf-search-wrap')) return;

        // Path prefix: app pages need "" prefix, root pages need "app/"
        var prefix = codexPathPrefix();

        // ── styles ──────────────────────────────────────────────────────────
        var style = document.createElement('style');
        style.id  = 'wf-search-style';
        style.textContent =
            '#wf-search-wrap{position:fixed;top:86px;right:24px;z-index:9997;' +
                'display:flex;align-items:center;pointer-events:auto;}' +
            '#wf-search-input{box-sizing:border-box;background:rgba(10,40,25,0.93);border:2px solid rgba(34,197,94,0.75);' +
                'border-radius:20px;color:#f1f5f9;font-family:"Inter",sans-serif;font-size:13px;' +
                'padding:9px 16px 9px 34px;width:398px;outline:none;' +
                'transition:border-color 0.2s,width 0.25s,background 0.2s,box-shadow 0.2s;' +
                'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);' +
                'box-shadow:0 0 0 1px rgba(34,197,94,0.18),inset 0 1px 3px rgba(0,0,0,0.4);}' +
            '#wf-search-input::placeholder{color:#86efac;font-style:italic;}' +
            '#wf-search-input:focus{border-color:#22c55e;width:510px;' +
                'background:rgba(5,25,15,0.98);' +
                'box-shadow:0 0 0 3px rgba(34,197,94,0.22),inset 0 1px 3px rgba(0,0,0,0.5);}' +
            '#wf-search-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);' +
                'font-size:14px;pointer-events:none;opacity:0.85;line-height:1;}' +
            '#wf-search-results{position:absolute;top:calc(100% + 6px);right:0;' +
                'min-width:330px;max-width:440px;' +
                'background:rgba(5,20,12,0.97);border:1px solid rgba(34,197,94,0.3);' +
                'border-radius:12px;box-shadow:0 14px 45px rgba(0,0,0,0.75);' +
                'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);' +
                'display:none;overflow:hidden;z-index:9998;}' +
            '#wf-search-results a.wf-sr-item{display:flex;flex-direction:column;' +
                'padding:10px 14px;text-decoration:none;color:inherit;' +
                'border-bottom:1px solid rgba(255,255,255,0.04);transition:background 0.12s;}' +
            '#wf-search-results a.wf-sr-item:last-child{border-bottom:none;}' +
            '#wf-search-results a.wf-sr-item:hover{background:rgba(34,197,94,0.08);}' +
            '.wf-sr-title{font-family:"Outfit",sans-serif;font-size:0.84rem;font-weight:700;' +
                'color:#ffab00;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}' +
            '.wf-sr-meta{font-size:0.72rem;color:#475569;margin-top:1px;' +
                'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}' +
            '.wf-sr-desc{font-size:0.77rem;color:#94a3b8;margin-top:3px;line-height:1.4;' +
                'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}' +
            '#wf-search-none{padding:14px 16px;color:#475569;font-size:0.82rem;' +
                'font-family:"Inter",sans-serif;text-align:center;}' +
            '@media(max-width:1366px){' +
                '#wf-search-wrap{top:88px;right:14px;}' +
                '#wf-search-input{width:285px;font-size:12px;padding-left:30px;}' +
                '#wf-search-input:focus{width:383px;}' +
            '}';
        (document.head || document.documentElement).appendChild(style);

        // ── markup ───────────────────────────────────────────────────────────
        var wrap = document.createElement('div');
        wrap.id = 'wf-search-wrap';

        var icon = document.createElement('span');
        icon.id = 'wf-search-icon';
        icon.textContent = '🔍';

        var input = document.createElement('input');
        input.type = 'text';
        input.id   = 'wf-search-input';
        input.placeholder = 'Search the Compendium…';
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('spellcheck',   'false');

        var results = document.createElement('div');
        results.id = 'wf-search-results';

        wrap.appendChild(icon);
        wrap.appendChild(input);
        wrap.appendChild(results);
        document.body.appendChild(wrap);

        // ── index loader ────────────────────────────────────────────────────
        var indexLoaded = false;
        function ensureIndex(cb) {
            if (indexLoaded || Array.isArray(window.WF_SEARCH_INDEX)) {
                indexLoaded = true;
                cb();
                return;
            }
            var s = document.createElement('script');
            s.src = prefix + 'assets/js/search_index.js';
            s.onload = function () { indexLoaded = true; cb(); };
            s.onerror = function () {
                console.warn('WF Search: could not load search_index.js');
            };
            document.head.appendChild(s);
        }

        // ── search logic ─────────────────────────────────────────────────────
        function showResults(hits, query) {
            results.innerHTML = '';
            if (!hits.length) {
                results.innerHTML = '<div id="wf-search-none">No results for "<strong>' +
                    escHtml(query) + '</strong>"</div>';
                results.style.display = 'block';
                return;
            }
            hits.forEach(function (item) {
                var a = document.createElement('a');
                a.className = 'wf-sr-item';
                a.href = prefix + item.href;
                var meta = [item.page, item.section].filter(Boolean).join(' › ');
                // Don't repeat the title as the meta
                if (meta.toLowerCase() === item.title.toLowerCase()) meta = '';
                a.innerHTML =
                    '<span class="wf-sr-title">' + (item.icon ? item.icon + ' ' : '') +
                        escHtml(item.title) + '</span>' +
                    (meta ? '<span class="wf-sr-meta">' + escHtml(meta) + '</span>' : '') +
                    (item.desc ? '<span class="wf-sr-desc">' + escHtml(item.desc) + '</span>' : '');
                results.appendChild(a);
            });
            results.style.display = 'block';
        }

        var debounce = null;
        input.addEventListener('input', function () {
            clearTimeout(debounce);
            var q = this.value.trim();
            if (q.length < 2) { results.style.display = 'none'; return; }
            debounce = setTimeout(function () {
                ensureIndex(function () {
                    showResults(wfSearch(q), q);
                });
            }, 160);
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!wrap.contains(e.target)) results.style.display = 'none';
        });

        // Escape key closes
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { results.style.display = 'none'; input.blur(); }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildSearchUI);
    } else {
        buildSearchUI();
    }
})();

/* ===== App title banner: single source of truth =====
   The floating amber "Warframe: The Orbiter Compendium by Zylxyz" title was
   hand-copied into all ~66 pages and had drifted into five different
   treatments (a 16px-lower outlier, two layout strategies on the docs pages,
   an inline 24px in-header variant that could wrap and collide with the icon
   row, and one page where it was missing entirely) — see the v1.5.2 Oliver
   Ernster review. common.js now owns it: one definition, injected once per
   page, so it cannot drift again. Docs pages (anything under /docs/) get
   position:absolute so the title scrolls away instead of overprinting
   long-form text (the original fix for that issue); every other page gets
   the standard fixed top:70px/left:20px treatment. The source HTML for every
   page has had its hardcoded copy removed; this stray-copy sweep is a safety
   net in case any page's source still carries one (matches the project's
   established pattern of common.js canonicalising markup that a bulk edit
   might have missed). */
(function () {
    "use strict";
    var STYLE_ID = "codex-app-title-style";
    var BANNER_ID = "codex-app-title-banner";
    var BREADCRUMB_ID = "codex-breadcrumb";
    var TITLE_TEXT = "Warframe: The Orbiter Compendium by Zylxyz";

    function isDocsPage() {
        return window.location.pathname.indexOf("/docs/") !== -1;
    }

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) return;
        var pos = isDocsPage() ? "absolute" : "fixed";
        // Every page carries its own hardcoded "body{padding-top:154.6px!important}"
        // (or similar), calibrated back when there was only the title banner and no
        // breadcrumb line below it. Adding the breadcrumb made that reserved space too
        // short everywhere -- rather than hand-editing ~65 pages, override it centrally
        // here with a higher-specificity selector ("html body" beats a bare "body" at
        // equal !important regardless of which <style> tag comes later in the document).
        // Skipped on docs pages (different, scroll-away layout, no padding-top to begin
        // with) and on Home (no breadcrumb is ever shown there, so no extra space needed).
        var isHome = /!Warframe_Master_Index\.html$/i.test(window.location.pathname);
        var paddingFix = (!isDocsPage() && !isHome)
            ? "html body{padding-top:172px!important;}"
            : "";
        var css =
            paddingFix +
            "#" + BANNER_ID + "{position:" + pos + "!important;top:90px!important;left:20px!important;" +
            "z-index:9999!important;pointer-events:none!important;user-select:none!important;" +
            "font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:30px!important;" +
            "font-weight:700!important;color:#ffab00!important;letter-spacing:1px!important;" +
            "text-shadow:0 2px 12px rgba(255,171,0,0.3)!important;white-space:nowrap!important;" +
            "max-width:calc(100vw - 600px)!important;overflow:hidden!important;text-overflow:ellipsis!important;}" +
            // Sits directly under the title banner. Ice blue (matches every page's own <h1>
            // color) so it reads as "page identity" rather than clashing with the banner's amber.
            // Unlike the banner, this one needs pointer-events -- its Home/section segments
            // are real clickable links. Semantic nav>ol>li structure (screen readers announce
            // it as breadcrumb navigation, current page marked via aria-current="page"), with
            // CSS-generated "/" separators instead of literal separator elements in the DOM.
            "#" + BREADCRUMB_ID + "{position:" + pos + "!important;top:134px!important;left:20px!important;" +
            "z-index:9999!important;user-select:none!important;}" +
            "#" + BREADCRUMB_ID + " ol{display:flex!important;flex-wrap:wrap!important;list-style:none!important;" +
            "margin:0!important;padding:0!important;" +
            "font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:16px!important;" +
            "font-weight:600!important;letter-spacing:0.5px!important;}" +
            "#" + BREADCRUMB_ID + " li{display:flex!important;align-items:center!important;}" +
            "#" + BREADCRUMB_ID + " li+li::before{content:'/'!important;padding:0 8px!important;" +
            "color:#64748b!important;user-select:none!important;}" +
            "#" + BREADCRUMB_ID + " a{color:#93c5fd!important;text-decoration:none!important;}" +
            "#" + BREADCRUMB_ID + " a:hover{color:#ffab00!important;text-decoration:underline!important;}" +
            "#" + BREADCRUMB_ID + " [aria-current]{color:#94a3b8!important;}";
        var st = document.createElement("style");
        st.id = STYLE_ID;
        st.textContent = css;
        (document.head || document.documentElement).appendChild(st);
    }
    injectStyle();

    function removeStrayCopies() {
        var spans = document.querySelectorAll("span");
        for (var i = 0; i < spans.length; i++) {
            var el = spans[i];
            if (el.id === BANNER_ID) continue;
            if (el.closest && el.closest("#content")) continue; // never touch rendered docs content
            if (el.children.length === 0 && el.textContent.trim() === TITLE_TEXT) {
                el.remove();
            }
        }
    }

    function ensureBanner() {
        if (document.getElementById(BANNER_ID)) return true;
        var header = document.querySelector(".global-top-header");
        if (!header) return false;
        removeStrayCopies();
        var el = document.createElement("span");
        el.id = BANNER_ID;
        el.className = "no-print";
        el.textContent = TITLE_TEXT;
        if (header.nextSibling) {
            header.parentNode.insertBefore(el, header.nextSibling);
        } else {
            header.parentNode.appendChild(el);
        }
        return true;
    }

    // Breadcrumb built by walking CODEX_REGISTRY from the current page up to
    // Home (codexWalkUp) -- covers every ancestor in one pass, including any
    // virtual sub-category (e.g. Arsenal's "Melee & Combos"), so a page nested
    // that deep gets a real 4-segment trail instead of being capped at 3.
    // Pages outside the registry entirely (hubs/dashboards, Settings, Site Map,
    // docs) get an empty trail and fall through to a plain "Home / <page
    // title>" fallback -- every page except Home itself gets a breadcrumb.
    function ensureBreadcrumb() {
        if (document.getElementById(BREADCRUMB_ID)) return true;
        var here = codexCurrentBasename();
        if (here === "!Warframe_Master_Index.html") return true;
        var banner = document.getElementById(BANNER_ID);
        if (!banner) return false;
        var prefix = codexPathPrefix();
        var nav = document.createElement("nav");
        nav.id = BREADCRUMB_ID;
        nav.className = "no-print";
        nav.setAttribute("aria-label", "Breadcrumb");
        var ol = document.createElement("ol");
        nav.appendChild(ol);

        function addLi(child) {
            var li = document.createElement("li");
            li.appendChild(child);
            ol.appendChild(li);
            return li;
        }

        // Reuse the home icon's own href rather than recomputing the path -- that icon
        // already carries the correct relative path to the root-level Master Index from
        // wherever this page lives (codexPathPrefix() is for linking between app/ pages,
        // one level below root, so it would be wrong here).
        var homeIcon = document.querySelector(".home-emoji-btn");
        var homeLink = document.createElement("a");
        homeLink.href = homeIcon ? homeIcon.getAttribute("href") : "!Warframe_Master_Index.html";
        homeLink.textContent = "Home";
        addLi(homeLink);

        var h1 = document.querySelector("h1");
        var pageTitle = h1 ? h1.textContent.trim().replace(/^[^a-zA-Z0-9]+/, "") : "";

        var trail = codexWalkUp(here);
        if (trail.length) {
            // trail[0] is Home itself (already added above via the icon's own href), so
            // start at index 1. The last entry is always the current page -- rendered
            // plain text using the live <h1> (registry pages carry label:null on purpose,
            // since the page's own heading is the accurate source of truth, not a second
            // hand-maintained copy of it).
            for (var i = 1; i < trail.length; i++) {
                var entry = trail[i];
                var isLeaf = (i === trail.length - 1);
                if (isLeaf) {
                    var leafText = document.createElement("span");
                    leafText.textContent = pageTitle || codexFriendlyPageName(entry.key);
                    leafText.setAttribute("aria-current", "page");
                    addLi(leafText);
                } else if (entry.node.target) {
                    var link = document.createElement("a");
                    link.href = prefix + entry.node.target;
                    link.textContent = entry.node.label;
                    addLi(link);
                } else {
                    var groupText = document.createElement("span");
                    groupText.textContent = entry.node.label;
                    addLi(groupText);
                }
            }
        } else if (pageTitle) {
            // Not in the registry at all (hub/dashboard/Settings/Site Map/docs page) --
            // plain two-segment fallback, same behavior as before.
            var fallbackText = document.createElement("span");
            fallbackText.textContent = pageTitle;
            fallbackText.setAttribute("aria-current", "page");
            addLi(fallbackText);
        }

        if (banner.nextSibling) {
            banner.parentNode.insertBefore(nav, banner.nextSibling);
        } else {
            banner.parentNode.appendChild(nav);
        }
        return true;
    }

    function ensureAll() {
        ensureBanner();
        ensureBreadcrumb();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ensureAll);
    } else {
        ensureAll();
    }
})();

// ── Header block alignment ──────────────────────────────────────────────
// Title/breadcrumb and the search bar were each pinned to hardcoded viewport
// pixel offsets (banner left:20px, search right:24px) with no relationship
// to the actual content panel underneath, and no shared vertical anchor to
// each other -- hence "left-aligned by accident" and never lining up with
// the panel edges or with each other vertically. This locks both blocks to
// the real panel's left/right edges (read via getBoundingClientRect, so it
// works regardless of which container class a given page uses) and centers
// both vertically in the gap between the icon bar (60px) and the panel top.
(function () {
    "use strict";
    var ICON_BAR_BOTTOM = 60;
    var TITLE_BC_GAP = 8; // spacing between banner baseline and breadcrumb top

    function findPanel() {
        var selectors = [".hub-container", ".main-content", "#main-content", ".container", ".dashboard-panel"];
        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el) return el;
        }
        return null;
    }

    function alignHeaderBlock() {
        var banner = document.getElementById("codex-app-title-banner");
        var breadcrumb = document.getElementById("codex-breadcrumb");
        var searchWrap = document.getElementById("wf-search-wrap");
        var panel = findPanel();
        if (!panel || !banner) return;

        var rect = panel.getBoundingClientRect();
        var gapHeight = rect.top - ICON_BAR_BOTTOM;
        if (gapHeight <= 0) return; // panel hasn't laid out yet (fonts/images still loading)

        // Horizontal: lock title/breadcrumb to the panel's left edge, search to its right edge.
        // setProperty(...,"important") is required here -- the base injected CSS
        // sets left:20px!important on the banner/breadcrumb, which beats a plain
        // inline style regardless of specificity.
        banner.style.setProperty("left", rect.left + "px", "important");
        if (breadcrumb) breadcrumb.style.setProperty("left", rect.left + "px", "important");
        if (searchWrap) searchWrap.style.right = (window.innerWidth - rect.right) + "px";

        // Title max-width: the base CSS reserves a hardcoded 600px for the icon
        // bar/search regardless of window size, so at narrower widths the title
        // truncates almost immediately ("Warfra..."). Tie it to the real gap
        // instead -- the space between the banner's own left edge and wherever
        // the search bar actually starts (or the panel's right edge if there's
        // no search bar on this page), minus a small margin.
        var titleLimitRight = searchWrap
            ? searchWrap.getBoundingClientRect().left
            : rect.right;
        var titleMaxWidth = titleLimitRight - rect.left - 24;
        if (titleMaxWidth > 0) {
            banner.style.setProperty("max-width", titleMaxWidth + "px", "important");
        }

        // Vertical: center the title+breadcrumb block, and the search bar, in the
        // gap between the icon bar and the panel top -- independently, since they
        // are different heights, but on the same reference band so they read as
        // one aligned header row rather than two unrelated fixed offsets.
        var bannerH = banner.offsetHeight;
        var breadcrumbH = breadcrumb ? breadcrumb.offsetHeight : 0;
        var blockH = bannerH + (breadcrumb ? TITLE_BC_GAP + breadcrumbH : 0);
        var blockTop = ICON_BAR_BOTTOM + (gapHeight - blockH) / 2;
        banner.style.setProperty("top", blockTop + "px", "important");
        if (breadcrumb) breadcrumb.style.setProperty("top", (blockTop + bannerH + TITLE_BC_GAP) + "px", "important");

        if (searchWrap) {
            var searchH = searchWrap.offsetHeight;
            searchWrap.style.top = (ICON_BAR_BOTTOM + (gapHeight - searchH) / 2) + "px";
        }
    }

    var pending = null;
    function scheduleAlign() {
        if (pending) return;
        pending = requestAnimationFrame(function () {
            pending = null;
            alignHeaderBlock();
        });
    }

    window.addEventListener("load", scheduleAlign);
    window.addEventListener("resize", scheduleAlign);
    // Search UI and breadcrumb/banner are injected asynchronously (search waits on
    // a fetched index; breadcrumb waits on DOMContentLoaded) -- a short repeated
    // recheck covers both without needing to hook every injection call site.
    var tries = 0;
    var poll = setInterval(function () {
        scheduleAlign();
        tries++;
        if (tries > 20) clearInterval(poll);
    }, 150);
})();
