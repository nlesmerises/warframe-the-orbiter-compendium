// Databases of Standard and Prime Warframes
const standardWarframes = [
  { name: "Ash", category: "Special", location: "Railjack Defense/Survival (Pluto/Neptune Proxima)" },
  { name: "Atlas", category: "Assassination", location: "Jordas Golem Assassination (Eris)" },
  { name: "Banshee", category: "Dojo", location: "Dojo Tenno Lab Research" },
  { name: "Baruuk", category: "Syndicate", location: "Little Duck (Fortuna Vox Solaris)" },
  { name: "Caliban", category: "Special", location: "Narmer Bounties (Plains of Eidolon / Orb Vallis)" },
  { name: "Chroma", category: "Quest", location: "Quest 'The New Strange' & Planetary Junctions" },
  { name: "Citrine", category: "Special", location: "Mirror Defense (Tyana Pass, Mars) / Otak (Deimos)" },
  { name: "Dagath", category: "Dojo", location: "Dojo Dagath's Hollow (Requires Vainthorns)" },
  { name: "Dante", category: "Special", location: "Disruption (Armatus, Deimos) / Loid (Sanctum)" },
  { name: "Ember", category: "Assassination", location: "General Sargas Ruk (Tethys, Saturn)" },
  { name: "Equinox", category: "Assassination", location: "Tyl Regor (Titania, Uranus)", parts: ["Main BP", "Day Aspect", "Day Neuroptics", "Day Chassis", "Day Systems", "Night Aspect", "Night Neuroptics", "Night Chassis", "Night Systems"] },
  { name: "Excalibur", category: "Assassination", location: "Lieutenant Lech Kril (War, Mars)" },
  { name: "Frost", category: "Assassination", location: "Captain Vor & Lt. Lech Kril duo (Exta, Ceres)" },
  { name: "Gara", category: "Syndicate", location: "Cetus Bounties (Plains of Eidolon)" },
  { name: "Garuda", category: "Syndicate", location: "Fortuna Bounties (Orb Vallis)" },
  { name: "Gauss", category: "Special", location: "Disruption Rotation C (Kappa, Sedna)" },
  { name: "Grendel", category: "Syndicate", location: "Europa Challenge Missions (Keys bought with Vitus Essence)" },
  { name: "Gyre", category: "Special", location: "Chrysalith (Zariman) Bounties / Quinn" },
  { name: "Harrow", category: "Special", location: "Pago Spy (Kuva Fortress), Defection (Neptune/Saturn)" },
  { name: "Hildryn", category: "Syndicate", location: "Exploiter Orb Boss / Little Duck (Fortuna)" },
  { name: "Hydroid", category: "Assassination", location: "Counselor Vay Hek (Oro, Earth) - Requires MR 5" },
  { name: "Inaros", category: "Quest", location: "Quest 'Sands of Inaros' (Baro Ki'Teer)" },
  { name: "Ivara", category: "Special", location: "Spy Missions (Earth/Venus/Ceres/Saturn/Uranus/Pluto)" },
  { name: "Jade", category: "Special", location: "Ascension (Brutus, Uranus) / Ordis (Larunda Relay)" },
  { name: "Khora", category: "Special", location: "Sanct sanctuary Onslaught (Rotations A, B, & C)" },
  { name: "Kullervo", category: "Syndicate", location: "Acrithis (Duviri) - Requires Kullervo's Bane" },
  { name: "Lavos", category: "Syndicate", location: "Father (Necralisk, Deimos) - Entrati Standing" },
  { name: "Limbo", category: "Quest", location: "Quest 'The Limbo Theorem'" },
  { name: "Loki", category: "Assassination", location: "Hyena Pack (Psamathe, Neptune)" },
  { name: "Mag", category: "Assassination", location: "The Sergeant (Iliad, Phobos)" },
  { name: "Mesa", category: "Assassination", location: "Mutalist Alad V (Assassination, Eris) - Key Required" },
  { name: "Mirage", category: "Quest", location: "Quest 'Hidden Messages'" },
  { name: "Nekros", category: "Assassination", location: "Leantis (Magnacidium, Deimos)" },
  { name: "Nezha", category: "Dojo", location: "Dojo Tenno Lab Research" },
  { name: "Nidus", category: "Special", location: "Infested Salvage (Oestrus, Eris) Rotation C" },
  { name: "Nova", category: "Assassination", location: "Raptors (Naamah, Europa)" },
  { name: "Nyx", category: "Assassination", location: "Phorid (during Infested Outbreaks)" },
  { name: "Oberon", category: "Special", location: "Railjack Missions (Earth/Saturn Proxima)" },
  { name: "Octavia", category: "Quest", location: "Quest 'Octavia's Anthem' & Lua Puzzles/Caches" },
  { name: "Protea", category: "Special", location: "Granum Void (Corpus Ship Tilesets)" },
  { name: "Qorvex", category: "Syndicate", location: "Cavia Bounties / Loid (Sanctum Anatomica)" },
  { name: "Revenant", category: "Quest", location: "Quest 'Mask of the Revenant' & Cetus Bounties" },
  { name: "Rhino", category: "Assassination", location: "Jackal (Fossa, Venus)" },
  { name: "Saryn", category: "Assassination", location: "Kela De Thaym (Merrow, Sedna)" },
  { name: "Sevagoth", category: "Quest", location: "Quest 'Call of the Tempestarii' & Void Storms (Railjack)" },
  { name: "Styanax", category: "Syndicate", location: "Chipper (Drifter's Camp) - Earned with Stock" },
  { name: "Titania", category: "Quest", location: "Quest 'The Silver Grove'" },
  { name: "Trinity", category: "Assassination", location: "Ambulas (Hades, Pluto) - Requires Animo Beacons" },
  { name: "Valkyr", category: "Assassination", location: "Alad V & Zanuka (Themisto, Jupiter)" },
  { name: "Vauban", category: "Special", location: "Nightwave Cred Offerings Store" },
  { name: "Volt", category: "Dojo", location: "Dojo Tenno Lab Research" },
  { name: "Voruna", category: "Special", location: "Conjunction Survival (Lua) / Archimedean Yonta" },
  { name: "Wisp", category: "Assassination", location: "Ropalolyst Boss Fight (Jupiter)" },
  { name: "Wukong", category: "Dojo", location: "Dojo Tenno Lab Research" },
  { name: "Xaku", category: "Syndicate", location: "Heart of Deimos Quest & Necralisk Bounties" },
  { name: "Yareli", category: "Quest", location: "Quest 'The Waverider' & Dojo Bash Lab" },
  { name: "Zephyr", category: "Dojo", location: "Dojo Tenno Lab Research" }];

const expansionWarframes = [
  { name: "Koumei", category: "Special", location: "Earth Shrine Defense (Cetus)" },
  { name: "Cyte-09", category: "Quest", location: "Warframe 1999 Progression" },
  { name: "Excalibur Umbra", category: "Quest", location: "The Sacrifice Quest" },
  { name: "Oraxia", category: "Special", location: "Isleweaver Expansion" },
  { name: "Nokko", category: "Special", location: "Vallis Undermind Expansion" },
  { name: "Uriel", category: "Quest", location: "The Old Peace Expansion" },
  { name: "Follie", category: "Special", location: "Shadowgrapher Expansion" },
  { name: "Temple", category: "Special", location: "Ancient Arbiter Expansion" },
  { name: "Sirius & Orion", category: "Special", location: "Expansion Content" }
];

const primeWarframes = [
  { name: "Ash Prime", category: "Prime", location: "Void Relics (Vaulted / Prime Resurgence)" },
  { name: "Atlas Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Banshee Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Baruuk Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Caliban Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Chroma Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Ember Prime", category: "Prime", location: "Void Relics (Vaulted / Prime Resurgence)" },
  { name: "Equinox Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Excalibur Prime", category: "Prime", location: "Founder's Pack Exclusive (Unavailable)" },
  { name: "Frost Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Gara Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Garuda Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Gauss Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Grendel Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Gyre Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Harrow Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Hildryn Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Hydroid Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Inaros Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Ivara Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Khora Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Lavos Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Limbo Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Loki Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Mag Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Mesa Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Mirage Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Nekros Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Nezha Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Nidus Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Nova Prime", category: "Prime", location: "Void Relics (Vaulted / Prime Resurgence)" },
  { name: "Nyx Prime", category: "Prime", location: "Void Storms (Railjack Proxima Missions)" },
  { name: "Oberon Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Octavia Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Protea Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Revenant Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Rhino Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Saryn Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Sevagoth Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Styanax Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Titania Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Trinity Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Valkyr Prime", category: "Prime", location: "Void Storms (Railjack Proxima)" },
  { name: "Vauban Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Volt Prime", category: "Prime", location: "Baro Ki'Teer / Resurgence Relics" },
  { name: "Voruna Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Wisp Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Wukong Prime", category: "Prime", location: "Void Relics (Vaulted)" },
  { name: "Xaku Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Yareli Prime", category: "Prime", location: "Void Relics (Active)" },
  { name: "Zephyr Prime", category: "Prime", location: "Void Relics (Vaulted)" }
];

const defaultParts = ["Main BP", "Neuroptics", "Chassis", "Systems"];

// State Variables
let currentHubSection = "codex"; // or "builds"
let currentTab = "standard"; // or "prime"
let searchQuery = "";
let categoryFilter = "all";
let completionFilter = "all";

// Global Navigation elements
const navCodex = document.getElementById("nav-codex");
const sectionCodex = document.getElementById("section-codex");

const MODS_DB = [
  { name: "Blood Rush", type: "Melee", attribute: "Crit Chance" },
  { name: "Organ Shatter", type: "Melee", attribute: "Crit Damage" },
  { name: "Condition Overload", type: "Melee", attribute: "Base Damage" },
  { name: "Weeping Wounds", type: "Melee", attribute: "Status Chance" },
  { name: "Pressure Point", type: "Melee", attribute: "Base Damage" },
  { name: "Sacrificial Steel", type: "Melee", attribute: "Crit Chance" },
  { name: "True Steel", type: "Melee", attribute: "Crit Chance" },
  { name: "Fever Strike", type: "Melee", attribute: "Toxin Damage" },
  { name: "North Wind", type: "Melee", attribute: "Cold Damage" },
  { name: "Shocking Touch", type: "Melee", attribute: "Electric Damage" },
  { name: "Molten Impact", type: "Melee", attribute: "Heat Damage" },
  { name: "Point Strike", type: "Primary", attribute: "Crit Chance" },
  { name: "Serration", type: "Primary", attribute: "Base Damage" },
  { name: "Primed Pistol Gambit", type: "Secondary", attribute: "Crit Chance" },
  { name: "Hornet Strike", type: "Secondary", attribute: "Base Damage" }
];

// Codex DOM Elements
const cardGrid = document.getElementById("card-grid");
const standardTabBtn = document.getElementById("tab-standard");
const primeTabBtn = document.getElementById("tab-prime");
const expansionTabBtn = document.getElementById("tab-expansion");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const completionSelect = document.getElementById("completion-select");
const acquiredCountEl = document.getElementById("acquired-count");
const totalCountEl = document.getElementById("total-count");
const progressBarFill = document.getElementById("progress-bar-fill");// Start Function
function init() {
  // Initialize History state on load
  if (!history.state) {
    history.replaceState({ section: 'codex', tab: 'standard' }, '', '#standard');
  }

  // Handle back/forward
  window.addEventListener('popstate', (e) => {
    const state = e.state || { section: 'codex', tab: 'standard' };
    if (state.section) showSection(state.section, false);
    if (state.tab) setTab(state.tab, false);
  });

  // Global Nav
  // navCodex.addEventListener("click", () => showSection("codex"));

  // Codex Tab clicks
  standardTabBtn.addEventListener("click", () => setTab("standard"));
  primeTabBtn.addEventListener("click", () => setTab("prime"));
  expansionTabBtn.addEventListener("click", () => setTab("expansion"));

  // Codex filters
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderCodex();
    });
  }
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      categoryFilter = e.target.value;
      renderCodex();
    });
  }
  if (completionSelect) {
    completionSelect.addEventListener("change", (e) => {
      completionFilter = e.target.value;
      renderCodex();
    });
  }

  // Render Page
  setTab("standard", false);
}

// Show specific layout section
function showSection(section, pushHistory = true) {
  currentHubSection = section;
  
  // Reset all navigation states
  if (navCodex) navCodex.classList.remove("active");
  sectionCodex.classList.remove("active");

  if (section === "codex") {
    if (navCodex) navCodex.classList.add("active");
    sectionCodex.classList.add("active");
  }
  
  if (pushHistory) {
    history.pushState({ section: section, tab: currentTab }, '', '#' + section);
  }
}

// Set standard or prime tab
function setTab(tab, pushHistory = true) {
    currentTab = tab;
    
    standardTabBtn.classList.remove("active");
    primeTabBtn.classList.remove("active");
    expansionTabBtn.classList.remove("active");

    if (tab === "standard") {
      standardTabBtn.classList.add("active");
    } else if (tab === "prime") {
      primeTabBtn.classList.add("active");
    } else {
      expansionTabBtn.classList.add("active");
    }
  
    categoryFilter = "all";
    if (categorySelect) {
      categorySelect.innerHTML = "";
      const data = tab === "standard" ? standardWarframes : (tab === "prime" ? primeWarframes : expansionWarframes);
      const categories = [...new Set(data.map(wf => wf.category))].filter(Boolean);
      
      if (categories.length > 1) {
        categorySelect.style.display = "inline-block";
        const categoryDisplayNames = {
          "Assassination": "Assassination (Bosses)",
          "Dojo": "Clan Dojo",
          "Quest": "Quest Rewards",
          "Syndicate": "Syndicates & Bounties",
          "Special": "Special Mission Modes",
          "Prime": "Prime"
        };
        let optionsHtml = `<option value="all">All Categories</option>`;
        categories.forEach(cat => {
          const disp = categoryDisplayNames[cat] || cat;
          optionsHtml += `<option value="${cat}">${disp}</option>`;
        });
        categorySelect.innerHTML = optionsHtml;
        categorySelect.value = "all";
      } else {
        categorySelect.style.display = "none";
      }
    }
    
    renderCodex();

    if (pushHistory) {
      history.pushState({ section: currentHubSection, tab: tab }, '', '#' + tab);
    }
}

function isPartChecked(wfName, partName) {
  const key = `wf_${currentTab}_${wfName}_${partName}`;
  return safeStorage.getItem(key) === "true";
}

function setPartState(wfName, partName, state) {
  const key = `wf_${currentTab}_${wfName}_${partName}`;
  safeStorage.setItem(key, state);
}

// Foundry Pipeline state helpers
function isWfBuilding(wfName) {
  const key = `wf_${currentTab}_${wfName}_building`;
  return safeStorage.getItem(key) === "true";
}

function setWfBuilding(wfName, state) {
  const key = `wf_${currentTab}_${wfName}_building`;
  safeStorage.setItem(key, state);
}

function isWfCompleted(wfName, parts) {
  const key = `wf_${currentTab}_${wfName}_completed`;
  const val = safeStorage.getItem(key);
  if (val !== null) {
    return val === "true";
  }
  // Backwards compatibility fallback: if all parts are checked, default to completed
  const allChecked = parts.every(part => isPartChecked(wfName, part));
  if (allChecked) {
    safeStorage.setItem(key, "true");
    return true;
  }
  return false;
}

function setWfCompleted(wfName, state) {
    const key = `wf_${currentTab}_${wfName}_completed`;
    safeStorage.setItem(key, state);
    updateLegacyKey(wfName, state);
  }

function isWfLvl30(wfName) {
  const key = `wf_${currentTab}_${wfName}_lvl30`;
  return safeStorage.getItem(key) === "true";
}

function setWfLvl30(wfName, state) {
  const key = `wf_${currentTab}_${wfName}_lvl30`;
  safeStorage.setItem(key, state);
}

// Render dynamic checklist
    // Sync legacy keys and Master Index keys to the Orbiter Hub schema ONE WAY
  // This ensures old backups load properly into the new schema
  let migrationRun = false;
  function syncLegacyKeys() {
    if (migrationRun) return;
    migrationRun = true;
    const warframeArrays = [
      { tab: 'standard', arr: standardWarframes },
      { tab: 'prime', arr: primeWarframes },
      { tab: 'expansion', arr: expansionWarframes }
    ];

    warframeArrays.forEach(group => {
      group.arr.forEach(wf => {
        let cleanName = wf.name.toLowerCase().replace(' prime', '');
        let legacyKey = 'tracker_frame_' + cleanName;
        let hubKeyCompleted = `wf_${group.tab}_${wf.name}_completed`;

        if (safeStorage.getItem(legacyKey) === 'true') {
          if (safeStorage.getItem(hubKeyCompleted) !== 'true') {
            safeStorage.setItem(hubKeyCompleted, 'true');
          }
        }
      });
    });
  }

  function updateLegacyKey(wfName, state) {
      let cleanName = wfName.toLowerCase().replace(' prime', '');
      let legacyKey = 'tracker_frame_' + cleanName;
      safeStorage.setItem(legacyKey, state ? 'true' : 'false');
  }
function renderCodex() {
    syncLegacyKeys();
  const data = currentTab === "standard" ? standardWarframes : (currentTab === "prime" ? primeWarframes : expansionWarframes);

  // Calculate Progress Stats
  let totalAcquired = 0;
  let totalLvl30 = 0;
  data.forEach(wf => {
    const parts = wf.parts || defaultParts;
    if (isWfCompleted(wf.name, parts)) totalAcquired++;
    if (isWfLvl30(wf.name)) totalLvl30++;
  });

  acquiredCountEl.textContent = `${totalAcquired} Own / ${totalLvl30} Lvl 30`;
  totalCountEl.textContent = data.length;
  const baselineTotal = Math.max(data.length, 680);
  const percentage = data.length > 0 ? (totalLvl30 / baselineTotal) * 100 : 0;
  progressBarFill.style.width = `${percentage}%`;

  // Apply filters
  const filteredData = data.filter(wf => {
    const matchesSearch = wf.name.toLowerCase().includes(searchQuery) || wf.location.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter === "all" || wf.category === categoryFilter;

    const parts = wf.parts || defaultParts;
    const isCompleted = isWfCompleted(wf.name, parts);
    let matchesCompletion = true;
    if (completionFilter === "completed") {
      matchesCompletion = isCompleted;
    } else if (completionFilter === "incomplete") {
      matchesCompletion = !isCompleted;
    }

    return matchesSearch && matchesCategory && matchesCompletion;
  });

  cardGrid.innerHTML = "";
  if (filteredData.length === 0) {
    cardGrid.innerHTML = `<div class="empty-msg">No Warframes found matching your filters.</div>`;
    return;
  }

  filteredData.forEach(wf => {
    const parts = wf.parts || defaultParts;
    const allPartsChecked = parts.every(part => isPartChecked(wf.name, part));
    const isBuilding = isWfBuilding(wf.name);
    const isCompleted = isWfCompleted(wf.name, parts);
    const isLvl30 = isWfLvl30(wf.name);

    const card = document.createElement("div");
    card.className = `wf-card`;
    if (isLvl30) {
      card.classList.add("completed");
    } else if (isCompleted) {
      card.classList.add("owned-only");
    } else if (isBuilding) {
      card.classList.add("building");
    }

    const badgeClass = wf.category === "Prime" ? "badge-prime" : "badge-source";
    const badgeLabel = wf.category === "Prime" ? "Prime" : wf.category;

    let partsHtml = "";
    parts.forEach(part => {
      const checked = isPartChecked(wf.name, part);
      partsHtml += `
        <label class="part-item ${checked ? "checked" : ""}">
          <span>${part}</span>
          <input type="checkbox" class="part-checkbox part-sub-checkbox" data-wf="${wf.name}" data-part="${part}" ${checked ? "checked" : ""} ${isBuilding || isCompleted ? "disabled" : ""}>
        </label>
      `;
    });

    // Generate Pipeline Action controls
    let pipelineHtml = "";
    if (isCompleted) {
      pipelineHtml = `
        <div class="pipeline-banner banner-completed" style="${isLvl30 ? "" : "background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.2); color: #3b82f6;"}">
          <span>${isLvl30 ? "&#x1F3C6;" : "&#x1F4E6;"}</span> ${isLvl30 ? "Claimed & Mastered" : "Claimed & Owned"}
        </div>
        <div class="pipeline-actions">
          <button class="btn-reset-link" data-wf="${wf.name}">Reset / Re-farm</button>
        </div>
      `;
    } else if (isBuilding) {
      pipelineHtml = `
        <div class="pipeline-banner banner-building">
          <span class="spin-gear">&#x2699;&#xFE0F;</span> Building in Foundry...
        </div>
        <div class="pipeline-actions">
          <button class="btn-pipeline btn-claim" data-wf="${wf.name}">
            <span>&#x1F4E6;</span> Claim Warframe
          </button>
        </div>
      `;
    } else if (allPartsChecked) {
      pipelineHtml = `
        <div class="pipeline-actions">
          <button class="btn-pipeline btn-foundry" data-wf="${wf.name}">
            <span>&#x1F528;</span> Send to Foundry
          </button>
        </div>
      `;
    } else {
      const checkedCount = parts.filter(p => isPartChecked(wf.name, p)).length;
      pipelineHtml = `
        <div style="font-size: 0.75rem; color: var(--text-secondary); text-align: center; margin-top: 1rem;">
          Gathering Parts (${checkedCount}/${parts.length})
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <h3 class="card-title click-title" style="margin: 0; line-height: 1.2; cursor: pointer;" title="Click to view detailed info & build">${wf.name}</h3>
        </div>
        <div style="display: flex; gap: 10px; align-items: center; margin-left: auto;">
          <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--text-secondary); cursor: pointer;" title="Own">
            <input type="checkbox" class="part-checkbox header-own-checkbox" data-wf="${wf.name}" ${isCompleted ? "checked" : ""}>
            <span>Own</span>
          </label>
          <label style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--text-secondary); cursor: pointer;" title="Level 30">
            <input type="checkbox" class="part-checkbox header-lvl30-checkbox" data-wf="${wf.name}" ${isLvl30 ? "checked" : ""}>
            <span>30</span>
          </label>
        </div>
      </div>
      <div class="card-loc" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 0.5rem;">
        <span style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; min-height: 2.8rem;">${wf.location}</span>
        <span class="badge ${badgeClass}" style="flex-shrink: 0; margin-top: 2px;">${badgeLabel}</span>
      </div>
      <div class="parts-list">
        ${partsHtml}
      </div>
      ${pipelineHtml}
    `;

    const clickTitle = card.querySelector(".click-title");
    if (clickTitle) {
      clickTitle.addEventListener("click", () => {
        showWarframeModal(wf.name, wf.category, parts, wf.location);
      });
    }

    const subCheckboxes = card.querySelectorAll(".part-sub-checkbox");

    subCheckboxes.forEach(cb => {
      cb.addEventListener("change", (e) => {
        const wfName = e.target.getAttribute("data-wf");
        const partName = e.target.getAttribute("data-part");
        setPartState(wfName, partName, e.target.checked);
        renderCodex();
      });
    });

    // Bind own toggle
    const ownCb = card.querySelector(".header-own-checkbox");
    if (ownCb) {
      ownCb.addEventListener("change", (e) => {
        const wfName = e.target.getAttribute("data-wf");
        const targetState = e.target.checked;
        setWfCompleted(wfName, targetState);
        // Also write the base key so the Builds Codex left panel reads ownership
        const baseKey = `wf_${currentTab}_${wfName.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'')}`;
        safeStorage.setItem(baseKey, targetState ? 'true' : 'false');
        if (targetState) {
          setWfBuilding(wfName, false);
          parts.forEach(part => setPartState(wfName, part, true));
        } else {
          setWfBuilding(wfName, false);
          parts.forEach(part => setPartState(wfName, part, false));
          setWfLvl30(wfName, false);
        }
        renderCodex();
      });
    }

    // Bind lvl30 toggle
    const lvl30Cb = card.querySelector(".header-lvl30-checkbox");
    if (lvl30Cb) {
      lvl30Cb.addEventListener("change", (e) => {
        const wfName = e.target.getAttribute("data-wf");
        const targetState = e.target.checked;
        setWfLvl30(wfName, targetState);
        if (targetState) {
          setWfCompleted(wfName, true);
          setWfBuilding(wfName, false);
          parts.forEach(part => setPartState(wfName, part, true));
        }
        renderCodex();
      });
    }

    // Bind action button triggers
    const btnFoundry = card.querySelector(".btn-foundry");
    if (btnFoundry) {
      btnFoundry.addEventListener("click", () => {
        setWfBuilding(wf.name, true);
        renderCodex();
      });
    }

    const btnClaim = card.querySelector(".btn-claim");
    if (btnClaim) {
      btnClaim.addEventListener("click", () => {
        setWfBuilding(wf.name, false);
        setWfCompleted(wf.name, true);
        renderCodex();
      });
    }

    const btnReset = card.querySelector(".btn-reset-link");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        setWfBuilding(wf.name, false);
        setWfCompleted(wf.name, false);
        setWfLvl30(wf.name, false);
        parts.forEach(part => setPartState(wf.name, part, false));
        renderCodex();
      });
    }

    cardGrid.appendChild(card);
  });
}

function updateStatsOnly(data) {
  let totalAcquired = 0;
  let totalLvl30 = 0;
  data.forEach(wf => {
    const parts = wf.parts || defaultParts;
    if (isWfCompleted(wf.name, parts)) totalAcquired++;
    if (isWfLvl30(wf.name)) totalLvl30++;
  });

  acquiredCountEl.textContent = `${totalAcquired} Own / ${totalLvl30} Lvl 30`;
  const baselineTotal = Math.max(data.length, 680);
  const percentage = data.length > 0 ? (totalLvl30 / baselineTotal) * 100 : 0;
  progressBarFill.style.width = `${percentage}%`;
}








// Initialize Application
document.addEventListener('DOMContentLoaded', init);

// ==========================================================================
// WARFRAME DETAILS MODAL POPUP SYSTEM
// ==========================================================================

function getWarframeDetails(name) {
  const baseName = name.replace(" Prime", "").replace(" Umbra", "");
  
  const customDetails = {
    "Ash": {
      desc: "The ultimate ninja, Ash uses invisibility, smoke screens, and lethal blade-storms to assassinate enemies from the shadows.",
      guide: "<strong>Focus:</strong> Duration & Strength (Slash damage scaling).<br><strong>Aura:</strong> Steel Charge<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Seeking Shuriken (Augment), Primed Continuity, Transient Fortitude, Primed Flow, Streamline, Vitality.<br><strong>Arcanes:</strong> Arcane Fury, Arcane Energize.<br><strong>Synergy:</strong> Seeking Shuriken strips 100% armor at 143% Ability Strength. Use Blade Storm (4) with a high-combo melee weapon."
    },
    "Atlas": {
      desc: "A stone titan that petrifies enemies, creates rock walls, and lands massive rubble-generating punches.",
      guide: "<strong>Focus:</strong> Ability Strength & Rubble management.<br><strong>Aura:</strong> Steel Charge<br><strong>Exilus:</strong> Primed Sure Footed<br><strong>Mods:</strong> Rubble Heap (Augment), Blind Rage, Umbral Intensify, Overextended, Primed Flow, Stretch, Rolling Guard.<br><strong>Arcanes:</strong> Arcane Avenger, Arcane Fury.<br><strong>Synergy:</strong> Landslide (1) inherits melee weapon mods. Maintain 1400+ Rubble for zero energy cost and 2x damage."
    },
    "Chroma": {
      desc: "The elemental dragon, Chroma shifts his energy type to adapt and gains massive damage and armor buffs.",
      guide: "<strong>Focus:</strong> Ability Strength & Duration.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Vex Armor build, Primed Flow, Narrow Minded, Blind Rage, Transient Fortitude, Umbral Vitality, Umbral Fiber.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Grace.<br><strong>Synergy:</strong> Take self-damage or shield damage to charge Vex Armor (3) for huge armor and weapon damage multipliers."
    },
    "Ember": {
      desc: "A pyromaniac casting fireballs, reducing armor with heat waves, and calling meteors upon enemies.",
      guide: "<strong>Focus:</strong> Strength & Efficiency.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Exothermic (Augment), Streamline, Stretch, Umbral Intensify, Primed Continuity, Fleeting Expertise, Primed Flow.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Eruption.<br><strong>Synergy:</strong> Keep Immolation gauge high for 90% DR and maximum armor strip from Fire Blast (3)."
    },
    "Excalibur": {
      desc: "A legendary swordsman summoning a blade of pure light, blinding enemies and slashing them with infinite speed.",
      guide: "<strong>Focus:</strong> Strength & Efficiency.<br><strong>Aura:</strong> Steel Charge<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Chromatic Blade (Augment), Umbral Intensify, Hunter Adrenaline, Primed Flow, Fleeting Expertise, Streamline, Vitality.<br><strong>Arcanes:</strong> Arcane Strike, Arcane Fury.<br><strong>Synergy:</strong> Mod Exalted Blade for Viral/Heat to trigger Chromatic Blade status procs."
    },
    "Frost": {
      desc: "The master of cryo, Frost creates protective snow globes, freezes enemies, and strips their armor with icy bursts.",
      guide: "<strong>Focus:</strong> Range & Armor (Globe scaling).<br><strong>Aura:</strong> Corrosive Projection<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Biting Frost (Augment), Overextended, Primed Continuity, Umbral Fiber, Stretch, Streamline, Primed Flow.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Guardian.<br><strong>Synergy:</strong> Biting Frost increases critical chance and damage against frozen enemies by 200%."
    },
    "Gara": {
      desc: "A glass warrior who refracts light to blind foes and shatters glass shields to deal infinite scaling area damage.",
      guide: "<strong>Focus:</strong> Duration & Range.<br><strong>Aura:</strong> Corrosive Projection<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Splinter Storm build, Overextended, Primed Continuity, Stretch, Narrow Minded, Streamline, Vitality.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Aegis.<br><strong>Synergy:</strong> Break her Mass Vitrify (4) from the outside with Shattered Lash (1) to add damage to Splinter Storm (2) infinitely."
    },
    "Gauss": {
      desc: "The runner of kinetic energy, Gauss relies on speed and momentum to generate defensive shields and explosive heat/cold blasts.",
      guide: "<strong>Focus:</strong> Duration & Range (Thermal Sunder scaling).<br><strong>Aura:</strong> Sprint Boost<br><strong>Exilus:</strong> Rush<br><strong>Mods:</strong> Mach Rush build, Primed Continuity, Stretch, Narrow Minded, Overextended, Streamline, Primed Flow.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Aegis.<br><strong>Synergy:</strong> Thermal Sunder (3) armor-strips when combining Heat and Cold procs under Redline (4)."
    },
    "Koumei": {
      desc: "The thread-weaver of fate, Koumei rolls the dice of fortune, inflicting random status ailments and binding enemies in threads.",
      guide: "<strong>Focus:</strong> Duration & Range.<br><strong>Mods:</strong> Stretch, Primed Continuity, Streamline, Overextended, Primed Flow, Vitality, Intensify.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Grace.<br><strong>Synergy:</strong> Spawns threads that bind enemies. Roll dice to get random powerful buffs."
    },
    "Loki": {
      desc: "The trickster, Loki utilizes decoy, invisibility, and radial disarm to manipulate and confuse enemies.",
      guide: "<strong>Focus:</strong> Duration & Range (Disarm/Invis).<br><strong>Aura:</strong> Energy Siphon<br><strong>Exilus:</strong> Coaction Drift<br><strong>Mods:</strong> Hushed Invisibility (Augment), Primed Continuity, Narrow Minded, Overextended, Stretch, Streamline, Quick Thinking.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Strike.<br><strong>Synergy:</strong> Use Decoy + Switch Teleport to bypass map sections, and Radial Disarm (4) to force melee fights."
    },
    "Mesa": {
      desc: "The gunfighter, Mesa uses rapid-fire pistols and ballistic shields to dominate the battlefield.",
      guide: "<strong>Focus:</strong> Efficiency & Duration.<br><strong>Aura:</strong> Corrosive Projection or Pistol Amp<br><strong>Exilus:</strong> Mesa's Waltz<br><strong>Mods:</strong> Fleeting Expertise, Narrow Minded, Primed Continuity, Streamline, Umbral Intensify, Primed Flow, Vitality.<br><strong>Arcanes:</strong> Arcane Velocity, Arcane Energize.<br><strong>Synergy:</strong> Activate Shatter Shield (3) for 95% DR, then trigger Peacemaker (4)."
    },
    "Nova": {
      desc: "An antimatter manipulator that primes enemies, causing them to move in slow-motion or fast-forward while doubling damage taken.",
      guide: "<strong>Focus:</strong> Duration & Strength (Slow vs Speed build).<br><strong>Aura:</strong> Power Donation (Speed) or Growing Power (Slow)<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Molecular Fission (Augment), Primed Continuity, Narrow Minded, Overextended, Primed Flow, Streamline, Quick Thinking.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Guardian.<br><strong>Synergy:</strong> Molecular Prime (4) speed scales inversely with Strength. High Strength slows enemies; low Strength speeds them up."
    },
    "Octavia": {
      desc: "The conductor of music, Octavia writes melodies that grant invisibility, speed, and damage multipliers while turning enemy aggro into area damage.",
      guide: "<strong>Focus:</strong> Duration & Range.<br><strong>Aura:</strong> Energy Siphon<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Partitioned Mallet (Augment), Primed Continuity, Overextended, Stretch, Streamline, Primed Flow, Constitution.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Grace.<br><strong>Synergy:</strong> Crouch rhythmically to the beat of her Mandachord song to trigger Metronome's Nocturne (Invisibility)."
    },
    "Protea": {
      desc: "A gadgeteer deploying shrapnel, shield satellites, supply dispensers, and temporal anchors to reverse time.",
      guide: "<strong>Focus:</strong> Duration & Range.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Temporal Anchor build, Primed Continuity, Stretch, Equilibrium, Overextended, Intensify, Flow.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Steadfast.<br><strong>Synergy:</strong> Blaze Artillery (2) gains +100% damage multiplier per hit. Combine with Larva (Helminth) for crowd clears."
    },
    "Rhino": {
      desc: "A brute force juggernaut, Rhino shrugs off enemy damage with Iron Skin, roars to multiply damage, and stomps to slow time.",
      guide: "<strong>Focus:</strong> Strength & Armor (Iron Skin scaling).<br><strong>Aura:</strong> Steel Charge<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Iron Shrapnel (Augment), Ironclad Charge (Augment), Blind Rage, Umbral Fiber, Umbral Intensify, Primed Flow, Streamline.<br><strong>Arcanes:</strong> Arcane Guardian, Arcane Tanker.<br><strong>Synergy:</strong> Stomp (4) suspends enemies. Charge (1) through groups to multiply Iron Skin base armor before casting (2)."
    },
    "Saryn": {
      desc: "The ultimate plague-bearer, Saryn utilizes toxic spores and corrosive damage to melt entire rooms of enemies.",
      guide: "<strong>Focus:</strong> Range & Strength.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Venom Dose (Augment), Overextended, Stretch, Regenerative Molt, Blind Rage, Primed Continuity, Primed Flow, Vitality.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Avenger.<br><strong>Synergy:</strong> Spreads spores through weapons like Ignis Wraith or Torid."
    },
    "Volt": {
      desc: "The manipulator of electricity, Volt provides speed boosts, protective shields, and wide-area electrical discharge.",
      guide: "<strong>Focus:</strong> Speed & Discharge.<br><strong>Aura:</strong> Growing Power or Corrosive Projection<br><strong>Exilus:</strong> Speed Drift<br><strong>Mods:</strong> Capacitance (Augment), Primed Flow, Stretch, Overextended, Primed Continuity, Streamline, Vitality.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Aegis.<br><strong>Synergy:</strong> Shoot through Electric Shield (3) for +200% critical damage multiplier."
    },
    "Wisp": {
      desc: "The dimensional traveler, Wisp opens portals to the sun and summons motes to buff speed, health, and stun enemies.",
      guide: "<strong>Focus:</strong> Ability Strength.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Power Drift<br><strong>Mods:</strong> Fused Reservoir (Augment), Blind Rage, Transient Fortitude, Umbral Intensify, Primed Continuity, Primed Flow, Stretch.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Guardian.<br><strong>Synergy:</strong> Place Reservoirs (1) to buff all allies. Use Breach Surge (3) for scaling damage sparks."
    }
  };

  const isPrime = name.includes(" Prime");
  const isUmbra = name.includes(" Umbra");

  if (customDetails[name]) {
    return customDetails[name];
  }
  if (customDetails[baseName]) {
    const base = customDetails[baseName];
    const prefix = isPrime ? "Primed" : "Sentient Umbral";
    return {
      desc: `The enhanced ${prefix} variant of ${baseName}. ${base.desc}`,
      guide: base.guide
    };
  }

  // Fallback
  return {
    desc: `${name} is a versatile Warframe capable of high-level battle utility in both solo and cooperative play.`,
    guide: `<strong>Focus:</strong> Balanced Ability Stats.<br><strong>Aura:</strong> Corrosive Projection or Steel Charge.<br><strong>Mods:</strong> Primed Continuity, Umbral Intensify, Stretch, Streamline, Vitality.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Guardian.<br><strong>Synergy:</strong> Mod for ability duration and strength to maximize utility. Leverage helminth replacements like Nourish or Gloom.`
  };
}

function showWarframeModal(wfName, category, parts, location) {
  let modal = document.getElementById("wf-detail-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "wf-detail-modal";
    modal.className = "wf-modal-overlay";
    document.body.appendChild(modal);
  }

  const details = getWarframeDetails(wfName);
  const isBuilding = isWfBuilding(wfName);
  const isCompleted = isWfCompleted(wfName, parts);

  let partsHtml = "";
  parts.forEach(part => {
    const checked = isPartChecked(wfName, part);
    partsHtml += `
      <label class="part-item ${checked ? "checked" : ""}" style="padding: 8px 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
        <span style="font-size: 0.9rem; font-weight: 500;">${part}</span>
        <input type="checkbox" class="part-checkbox modal-part-checkbox" data-wf="${wfName}" data-part="${part}" ${checked ? "checked" : ""} ${isBuilding || isCompleted ? "disabled" : ""}>
      </label>
    `;
  });

  modal.innerHTML = `
    <div class="wf-modal-content">
      <button class="wf-modal-close" id="modal-close-btn">&times;</button>
      <div class="wf-modal-header">
        <div class="wf-modal-title">
          <span>${wfName}</span>
          <span class="badge ${category === "Prime" ? "badge-prime" : "badge-source"}" style="font-size: 0.8rem; padding: 4px 10px;">${category}</span>
        </div>
        <div class="wf-modal-subtitle">
          <span>📍 Farm Location: ${location}</span>
        </div>
      </div>
      <div class="wf-modal-body">
        <div class="wf-modal-section">
          <div class="wf-modal-section-title">Codex Description</div>
          <p style="margin: 0; line-height: 1.5; color: var(--text-secondary); font-size: 0.95rem;">${details.desc}</p>
        </div>
        <div class="wf-modal-section">
          <div class="wf-modal-section-title">Parts Checklist</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${partsHtml}
          </div>
        </div>
        <div class="wf-modal-section">
          <div class="wf-modal-section-title">Recommended Build Setup</div>
          <div class="wf-modal-guide-content">${details.guide}</div>
        </div>
      </div>
    </div>
  `;

  // Attach event handlers inside modal
  const closeBtn = modal.querySelector("#modal-close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  const modalCheckboxes = modal.querySelectorAll(".modal-part-checkbox");
  modalCheckboxes.forEach(cb => {
    cb.addEventListener("change", (e) => {
      const part = e.target.getAttribute("data-part");
      setPartState(wfName, part, e.target.checked);
      
      // Update background checklist
      renderCodex();

      // Trigger mod scanning again on background checklist if loaded
      if (window.scanForMods) {
        window.scanForMods();
      }

      // Keep label checked state in sync visually
      const label = e.target.closest(".part-item");
      if (label) {
        if (e.target.checked) label.classList.add("checked");
        else label.classList.remove("checked");
      }
    });
  });

  modal.classList.add("active");

  // Scan the build guide content inside the modal for clickable mods!
  if (window.scanForMods) {
    window.scanForMods(modal);
  }
}








