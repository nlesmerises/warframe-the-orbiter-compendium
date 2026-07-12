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

/* ===== Header chrome: Site Map button + teal hover outlines and labels =====
   Runs on every page (this file is loaded everywhere). Adds a Site Map button to
   the right of the cog, gives all header controls a teal hover outline, and shows
   a text label for the icon-only buttons on hover. */
(function () {
    "use strict";
    // Canonical pixel size for the three header icon buttons (home, settings, site map).
    var ICON_SIZE_PX = 38;

    // Persistent quick-nav: one emoji per content area (mirrors the Site Map's category
    // icons), each jumping straight to that area's main page. Shown on every page after a
    // vertical divider, in the same icon style as home/settings/map. [emoji, label, page].
    var QUICK_NAV = [
        ["🚀", "Getting Started", "Warframe_Progression_Guide.html"],
        ["🛡️", "Warframes", "Warframe_Builds_Codex.html"],
        ["🔫", "Arsenal", "Warframe_Meta_Weapons_Codex.html"],
        ["📂", "Mods & Arcanes", "Warframe_Mods_Database.html"],
        ["⛏️", "Farming & Economy", "Warframe_Resource_Farming_Guide.html"],
        ["⚔️", "Combat & Mechanics", "Warframe_Combat_Mechanics.html"],
        ["🔥", "Endgame & Activities", "Warframe_Endgame_Systems_Codex.html"],
        ["📦", "Tools & Maintenance", "Warframe_Inventory_Cleanup_Guide.html"]
    ];

    // Inject the header-chrome stylesheet SYNCHRONOUSLY. This script is loaded in <head>, so
    // this runs before <body> is parsed and painted: every header icon paints at its final
    // size on first render, so the button row never resizes/jiggles between pages. Selectors
    // are element-qualified (a.<class>) so they out-specify any per-page header rule
    // regardless of cascade order (this is also what lets the teal hover win over a page's
    // own amber :hover rule).
    function injectStyle() {
        if (document.getElementById("codex-chrome-style")) return;
        var ICONS = "a.home-emoji-btn,a.settings-emoji-btn,a.sitemap-emoji-btn,a.qnav-emoji-btn";
        var HOVER = "a.home-emoji-btn:hover,a.settings-emoji-btn:hover,a.sitemap-emoji-btn:hover,a.qnav-emoji-btn:hover";
        var AFTER = "a.home-emoji-btn:hover::after,a.settings-emoji-btn:hover::after,a.sitemap-emoji-btn:hover::after,a.qnav-emoji-btn:hover::after";
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
                "a.sitemap-emoji-btn{font-size:41px!important;}" +
                // The 🔫 glyph's artwork sits low within its own character cell (same class of
                // issue as the Site Map glyph above, different axis) -- flexbox centers the box,
                // not the visible ink, so nudge it up to visually match the other icons' baseline.
                'a.qnav-emoji-btn[data-label="Arsenal"]{transform:translateY(-6px)!important;}' +
            HOVER + "{box-shadow:inset 0 0 0 2px #2dd4bf!important;background:rgba(45,212,191,0.14)!important;}" +
            "a.nav-btn-top:hover{box-shadow:inset 0 0 0 2px #2dd4bf!important;" +
                "border-color:#2dd4bf!important;color:#2dd4bf!important;background:rgba(45,212,191,0.10)!important;}" +
            AFTER + "{content:attr(data-label);position:absolute;top:100%;left:50%;transform:translateX(-50%);" +
                "margin-top:7px;white-space:nowrap;background:rgba(8,12,24,0.97);color:#2dd4bf;" +
                "border:1px solid #2dd4bf;border-radius:6px;padding:2px 9px;font-size:12px;font-weight:600;" +
                "font-family:'Inter',sans-serif;letter-spacing:0.5px;z-index:10001;pointer-events:none;}" +
            "span.qnav-sep{flex:0 0 auto;align-self:center;width:1px;height:26px;background:rgba(255,255,255,0.22);}" +
            // Some pages disable the logo with pointer-events:none and nest the view-tab bar
            // inside it, which makes the tabs un-clickable by inheritance. Re-enable them.
            ".main-nav,.tab-icon-btn{pointer-events:auto!important;}" +
            // G1 (header CSS single source): the nav-cluster button sizing used to live in a
            // per-page <style class="unified-header-style"> block repeated on every page. It is
            // centralised here so the injected Prev/Back/Forward/Next buttons size identically
            // everywhere and that per-page block can be deleted. The 1366px query below re-tightens.
            "a.nav-btn-top{width:auto!important;height:44px!important;padding:0 16px!important;white-space:nowrap!important;flex-shrink:0!important;color:#ffab00!important;text-decoration:none!important;border-radius:6px!important;border:1px solid rgba(255,171,0,0.25)!important;font-family:'Inter',sans-serif!important;font-size:14px!important;font-weight:600!important;}" +
            "a.nav-btn-top svg{width:28px!important;height:28px!important;}" +
            "a.nav-btn-top.disabled{opacity:0.25!important;pointer-events:none!important;}" +
            // Responsive header: on laptops and smaller the row would overflow (the 7 quick-nav
            // icons plus the Prev/Next buttons), so shrink the icons, tighten gaps, hide the long
            // branding title and compact the nav buttons. The nav buttons keep their text, just
            // smaller. No overflow scroll, which would clip the hover-label tooltips.
            "@media(max-width:1366px){a.home-emoji-btn,a.settings-emoji-btn,a.sitemap-emoji-btn,a.qnav-emoji-btn{font-size:25px!important;padding:1px 5px!important;}a.sitemap-emoji-btn{font-size:27px!important;}.global-top-header{gap:7px!important;}.global-top-header .header-title{display:none!important;}a.nav-btn-top{padding:0 9px!important;font-size:11px!important;}a.nav-btn-top svg{width:18px!important;height:18px!important;}}";
        var st = document.createElement("style");
        st.id = "codex-chrome-style";
        st.textContent = css;
        (document.head || document.documentElement).appendChild(st);
    }
    injectStyle();

    // Build the Site Map button, the divider and the quick-nav row right after the cog. This
    // needs the cog in the DOM, so run the instant the header is parsed via a MutationObserver
    // so nothing pops in after first paint. DOMContentLoaded is the fallback.
    function injectControls() {
        try {
            var emoji = document.querySelectorAll(".home-emoji-btn,.settings-emoji-btn,.sitemap-emoji-btn");
            for (var i = 0; i < emoji.length; i++) {
                if (!emoji[i].getAttribute("data-label")) {
                    emoji[i].setAttribute("data-label", emoji[i].getAttribute("title") || "");
                }
            }
            var cog = document.querySelector(".settings-emoji-btn");
            if (!cog) return false;
            // Path prefix from the current location: app pages, app/docs pages, or root.
            var prefix = (/\/app\/docs\//.test(location.pathname) ? "../" : (/\/app\//.test(location.pathname) ? "" : "app/"));
            var map = document.querySelector(".sitemap-emoji-btn");
            if (!map) {
                var map = document.createElement("a");
                map.href = prefix + "Warframe_Site_Map.html";
                map.className = "sitemap-emoji-btn";
                map.title = "Site Map";
                map.setAttribute("data-label", "Site Map");
                map.textContent = "🗺️";
            }
            if (!document.querySelector(".qnav-emoji-btn")) {
                var sep = document.createElement("span");
                sep.className = "qnav-sep";
                sep.setAttribute("aria-hidden", "true");
                cog.insertAdjacentElement("afterend", sep);
                // Site Map immediately after that first divider, then a second divider,
                // so it is bracketed: Settings │ Site Map │ Getting Started.
                sep.insertAdjacentElement("afterend", map);
                var sep2 = document.createElement("span");
                sep2.className = "qnav-sep";
                sep2.setAttribute("aria-hidden", "true");
                map.insertAdjacentElement("afterend", sep2);
                var prev = sep2;
                for (var q = 0; q < QUICK_NAV.length; q++) {
                    var item = QUICK_NAV[q];
                    var b = document.createElement("a");
                    b.href = prefix + item[2];
                    b.className = "qnav-emoji-btn";
                    b.title = item[1];
                    b.setAttribute("data-label", item[1]);
                    b.textContent = item[0];
                    prev.insertAdjacentElement("afterend", b);
                    prev = b;
                }
            }
            // Fallback: if the quick-nav row already existed but the Site Map button
            // is orphaned, place it just before "Getting Started". No-op normally,
            // and it never re-moves an already-placed button (keeps re-runs idempotent).
            if (!map.parentNode) {
                var firstQnav = document.querySelector(".qnav-emoji-btn");
                if (firstQnav) {
                    firstQnav.insertAdjacentElement("beforebegin", map);
                } else {
                    cog.insertAdjacentElement("afterend", map);
                }
            }
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
    var BTN_STYLE = "color:#ffab00;text-decoration:none;border-radius:6px;border:1px solid rgba(255,171,0,0.25);display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:all 0.2s;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;white-space:nowrap;flex-shrink:0;";
    var SVG = {
        prev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>',
        back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
        forward: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
        next: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>'
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
   The floating jump button used to be hardcoded on each page (markup, CSS and
   scroll JS all duplicated), so pages drifted: six shipped the markup without
   its CSS, leaving a stray unstyled button in the top-left, and one page used a
   different two-button variant whose JS targeted an id it never rendered (so the
   buttons were dead). common.js now owns it. The stylesheet is injected
   synchronously in the head, so no page can ever render the button unstyled, and
   the markup is canonicalised once the body exists: every hardcoded variant is
   removed and a single wired button is mounted. The button hides itself when the
   page is too short to scroll, so mounting it on every page is safe. The new id
   (codex-jump-btn) leaves any guarded per-page script inert. */
(function () {
    "use strict";
    var STYLE_ID = "codex-jump-style";
    var BTN_ID = "codex-jump-btn";
    var SHORT_PAGE_SLACK_PX = 40;
    var DOWN = "▼";   // black down-pointing triangle
    var UP = "▲";     // black up-pointing triangle

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) return;
        var css =
            ".jump-btns{position:fixed;bottom:80px;right:20px;display:flex;flex-direction:column;gap:10px;z-index:9999;}" +
            ".jump-btn{width:44px;height:44px;border-radius:50%;background:rgba(15,22,42,0.85);" +
                "border:1px solid rgba(255,171,0,0.3);color:#ffab00;cursor:pointer;display:flex;" +
                "justify-content:center;align-items:center;font-size:18px;font-weight:bold;" +
                "box-shadow:0 4px 15px rgba(0,0,0,0.5);transition:all 0.3s ease;" +
                "font-family:'Segoe UI Symbol','Segoe UI',sans-serif;}" +
            ".jump-btn:hover{background:rgba(255,171,0,0.15);transform:scale(1.1);border-color:#ffab00;" +
                "box-shadow:0 0 12px rgba(255,171,0,0.5),0 4px 15px rgba(0,0,0,0.5);}";
        var st = document.createElement("style");
        st.id = STYLE_ID;
        st.textContent = css;
        (document.head || document.documentElement).appendChild(st);
    }
    injectStyle();

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
                btn.textContent = UP; btn.title = "Jump to Top"; atBottom = true;
            } else {
                btn.textContent = DOWN; btn.title = "Jump to Bottom"; atBottom = false;
            }
        }
        btn.addEventListener("click", function () {
            window.scrollTo({ top: atBottom ? 0 : document.body.scrollHeight, behavior: "smooth" });
        });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        onScroll();
    }

    function build() {
        if (!document.body) return;
        var strays = document.querySelectorAll(".jump-btns, #global-jump-btn, #jump-up, #jump-dn");
        for (var i = 0; i < strays.length; i++) strays[i].remove();
        var wrap = document.createElement("div");
        wrap.className = "jump-btns no-print";
        var btn = document.createElement("button");
        btn.className = "jump-btn";
        btn.id = BTN_ID;
        btn.title = "Jump to Bottom";
        btn.textContent = DOWN;
        wrap.appendChild(btn);
        document.body.appendChild(wrap);
        wire(btn);
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", build);
    } else {
        build();
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
        var prefix = (/\/app\/docs\//.test(location.pathname) ? "../" :
                     (/\/app\//.test(location.pathname)       ? ""    : "app/"));

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
    var TITLE_TEXT = "Warframe: The Orbiter Compendium by Zylxyz";

    function isDocsPage() {
        return window.location.pathname.indexOf("/docs/") !== -1;
    }

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) return;
        var pos = isDocsPage() ? "absolute" : "fixed";
        var css =
            "#" + BANNER_ID + "{position:" + pos + "!important;top:90px!important;left:20px!important;" +
            "z-index:9999!important;pointer-events:none!important;user-select:none!important;" +
            "font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:30px!important;" +
            "font-weight:700!important;color:#ffab00!important;letter-spacing:1px!important;" +
            "text-shadow:0 2px 12px rgba(255,171,0,0.3)!important;white-space:nowrap!important;" +
            "max-width:calc(100vw - 600px)!important;overflow:hidden!important;text-overflow:ellipsis!important;}";
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

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ensureBanner);
    } else {
        ensureBanner();
    }
})();
