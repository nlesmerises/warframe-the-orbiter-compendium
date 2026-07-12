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
  { name: "Zephyr", category: "Dojo", location: "Dojo Tenno Lab Research" }
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

// --- AUTOMATIC DATA MIGRATION ---
// Synchronize legacy Farming Codex data (wf_standard_, wf_prime_, wf_expansion_) to the new Orbiter Hub (wf_global_)
(function autoSyncGlobalData() {
  const syncedMarker = safeStorage.getItem("codex_global_migration_done_v2");
  if (syncedMarker === "true") return;

  let hasMigrated = false;
  const keysToCopy = {};
  
  for (let i = 0; i < safeStorage.length; i++) {
    const key = safeStorage.key(i);
    if (!key) continue;
    
    const tabMatch = key.match(/^wf_(standard|prime|expansion)_(.+)$/);
    if (tabMatch) {
      const globalKey = `wf_global_${tabMatch[2]}`;
      keysToCopy[globalKey] = safeStorage.getItem(key);
      hasMigrated = true;
    }
  }

  for (const globalKey in keysToCopy) {
    if (safeStorage.getItem(globalKey) === null) {
      safeStorage.setItem(globalKey, keysToCopy[globalKey]);
    }
  }
  
  if (hasMigrated) {
    safeStorage.setItem("codex_global_migration_done_v2", "true");
  }
})();
// --------------------------------

const defaultParts = ["Main BP", "Neuroptics", "Chassis", "Systems"];

// State Variables
let currentHubSection = "codex"; // or "builds"
let currentTab = "standard";
let searchQuery = "";
let categoryFilter = "all";
let completionFilter = "all";

// Global Navigation elements
const navCodex = document.getElementById("nav-codex");
const navBuilds = document.getElementById("nav-builds");
const navMods = document.getElementById("nav-mods");
const sectionCodex = document.getElementById("section-codex");
const sectionBuilds = document.getElementById("section-builds");
const sectionMods = document.getElementById("section-mods");

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
const tabStandardBtn = document.getElementById("tab-standard");
const tabPrimeBtn = document.getElementById("tab-prime");
const tabExpansionBtn = document.getElementById("tab-expansion");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const completionSelect = document.getElementById("completion-select");
const acquiredCountEl = document.getElementById("acquired-count");
const totalCountEl = document.getElementById("total-count");
const progressBarFill = document.getElementById("progress-bar-fill");

// Calculator Elements
const baseCrit = 0.05; // 5% base crit
const baseMultiplier = 2.0;

const incarnonSelect = document.getElementById('calc-incarnon');
const avengerCheck = document.getElementById('calc-avenger');
const wrathfulCheck = document.getElementById('calc-wrathful');
const strengthInput = document.getElementById('calc-strength');
const strengthContainer = document.getElementById('calc-strength-container');
const modSelect = document.getElementById('calc-mods');
const comboSlider = document.getElementById('calc-combo');
const comboVal = document.getElementById('combo-val');
const gladiatorSelect = document.getElementById('calc-gladiator');

const critValDisplay = document.getElementById('crit-val-display');
const critTierDisplay = document.getElementById('crit-tier-display');
const critMultDisplay = document.getElementById('crit-mult-display');

// Start Function

function migrateKeys() {
  if (safeStorage.getItem("migrated_global") === "true") return;
  for (let i = 0; i < safeStorage.length; i++) {
    const k = safeStorage.key(i);
    if (k && (k.startsWith("wf_standard_") || k.startsWith("wf_prime_"))) {
      const val = safeStorage.getItem(k);
      const newKey = k.replace(/wf_(standard|prime)_/, "wf_global_");
      safeStorage.setItem(newKey, val);
    }
  }
  safeStorage.setItem("migrated_global", "true");
}

function init() {
  migrateKeys();

  const initialHash = window.location.hash.replace("#", "").toLowerCase();
  const initialTab = ["standard", "prime", "expansion"].includes(initialHash)
    ? initialHash
    : "standard";
  const initialSection = ["codex", "builds", "mods"].includes(initialHash)
    ? initialHash
    : "codex";

  history.replaceState(
    { section: initialSection, tab: initialTab },
    "",
    `#${initialHash || initialTab}`
  );

  // Handle back/forward
  window.addEventListener('popstate', (e) => {
    const state = e.state || { section: 'codex', tab: 'standard' };
    if (state.section) showSection(state.section, false);
    if (state.tab) setTab(state.tab, false);
  });

  // Global Nav
  navCodex.addEventListener("click", () => showSection("codex"));
  navBuilds.addEventListener("click", () => showSection("builds"));
  navMods.addEventListener("click", () => showSection("mods"));

  // Codex Tab clicks
  if (tabStandardBtn) tabStandardBtn.addEventListener("click", () => setTab("standard"));
  if (tabPrimeBtn) tabPrimeBtn.addEventListener("click", () => setTab("prime"));
  if (tabExpansionBtn) tabExpansionBtn.addEventListener("click", () => setTab("expansion"));

  // Codex filters
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderCodex();
      filterBuildsAndMods();
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

  // Calculator Logic
  comboSlider.addEventListener('input', () => {
    comboVal.textContent = `${comboSlider.value}x`;
    calculateCrit();
  });

  [incarnonSelect, avengerCheck, wrathfulCheck, strengthInput, modSelect, gladiatorSelect].forEach(elem => {
    elem.addEventListener('change', calculateCrit);
    elem.addEventListener('input', calculateCrit);
  });

  wrathfulCheck.addEventListener('change', () => {
    if (wrathfulCheck.checked) {
      strengthContainer.style.display = 'block';
    } else {
      strengthContainer.style.display = 'none';
    }
    calculateCrit();
  });

  // Initialize Synergy Sandbox selectors
  initSandbox();

  // Render the requested section/tab, including direct links such as #prime.
  showSection(initialSection, false);
  setTab(initialTab, false);
  calculateCrit();
}

// Show specific layout section
function showSection(section, pushHistory = true) {
  currentHubSection = section;
  
  // Reset all navigation states
  navCodex.classList.remove("active");
  navBuilds.classList.remove("active");
  navMods.classList.remove("active");
  sectionCodex.classList.remove("active");
  sectionBuilds.classList.remove("active");
  sectionMods.classList.remove("active");

  if (section === "codex") {
    navCodex.classList.add("active");
    sectionCodex.classList.add("active");
    if (categorySelect) categorySelect.style.display = "inline-block";
    if (completionSelect) completionSelect.style.display = "inline-block";
  } else if (section === "builds") {
    navBuilds.classList.add("active");
    sectionBuilds.classList.add("active");
    if (categorySelect) categorySelect.style.display = "none";
    if (completionSelect) completionSelect.style.display = "none";
  } else if (section === "mods") {
    navMods.classList.add("active");
    sectionMods.classList.add("active");
    if (categorySelect) categorySelect.style.display = "none";
    if (completionSelect) completionSelect.style.display = "none";
    evaluateSandbox(); // run initial sandbox calc on view
  }

  // Re-filter sub-views immediately
  filterBuildsAndMods();

  if (pushHistory) {
    history.pushState({ section: section, tab: currentTab }, '', '#' + section);
  }
}

// Global filter helper for builds and mods
function filterBuildsAndMods() {
  const query = searchQuery.toLowerCase();
  
  // Filter builds section mods
  const buildMods = document.querySelectorAll("#section-builds .mod-card");
  buildMods.forEach(card => {
    const title = card.querySelector(".mod-title")?.textContent.toLowerCase() || "";
    const desc = card.querySelector(".mod-desc")?.textContent.toLowerCase() || "";
    if (title.includes(query) || desc.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  // Filter mods section info-cards and mod-cards
  const modCards = document.querySelectorAll("#section-mods .mod-card");
  modCards.forEach(card => {
    const title = card.querySelector(".mod-title")?.textContent.toLowerCase() || "";
    const desc = card.querySelector(".mod-desc")?.textContent.toLowerCase() || "";
    if (title.includes(query) || desc.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  const infoCards = document.querySelectorAll("#section-mods .info-card");
  infoCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Set standard or prime tab
function setTab(tab, pushHistory = true) {
  currentTab = tab;
  if (tabStandardBtn) tabStandardBtn.classList.remove("active");
  if (tabPrimeBtn) tabPrimeBtn.classList.remove("active");
  if (tabExpansionBtn) tabExpansionBtn.classList.remove("active");
  
  if (tab === "standard" && tabStandardBtn) tabStandardBtn.classList.add("active");
  if (tab === "prime" && tabPrimeBtn) tabPrimeBtn.classList.add("active");
  if (tab === "expansion" && tabExpansionBtn) tabExpansionBtn.classList.add("active");

  if (categorySelect) {
    if (tab === "prime") {
      categorySelect.innerHTML = `<option value="all">All Prime Categories</option>`;
    } else {
      categorySelect.innerHTML = `
          <option value="all">All Categories</option>
          <option value="Assassination">Assassination (Bosses)</option>
          <option value="Dojo">Clan Dojo</option>
          <option value="Quest">Quest Rewards</option>
          <option value="Syndicate">Syndicates & Bounties</option>
          <option value="Special">Special Mission Modes</option>
      `;
    }
  }
  categoryFilter = "all";
  renderCodex();

  if (pushHistory) {
    history.pushState({ section: currentHubSection, tab: tab }, '', '#' + tab);
  }
}

function isPartChecked(wfName, partName) {
  const globalKey = `wf_global_${wfName}_${partName}`;
  if (safeStorage.getItem(globalKey) === "true") return true;
  
  if (safeStorage.getItem(`wf_standard_${wfName}_${partName}`) === "true") return true;
  if (safeStorage.getItem(`wf_prime_${wfName}_${partName}`) === "true") return true;
  if (safeStorage.getItem(`wf_expansion_${wfName}_${partName}`) === "true") return true;
  
  return false;
}

function setPartState(wfName, partName, state) {
  const key = `wf_global_${wfName}_${partName}`;
  safeStorage.setItem(key, state);
}

// Foundry Pipeline state helpers
function isWfBuilding(wfName) {
  const globalKey = `wf_global_${wfName}_building`;
  if (safeStorage.getItem(globalKey) === "true") return true;
  
  if (safeStorage.getItem(`wf_standard_${wfName}_building`) === "true") return true;
  if (safeStorage.getItem(`wf_prime_${wfName}_building`) === "true") return true;
  if (safeStorage.getItem(`wf_expansion_${wfName}_building`) === "true") return true;
  
  return false;
}

function setWfBuilding(wfName, state) {
  const key = `wf_global_${wfName}_building`;
  safeStorage.setItem(key, state);
}

function isWfCompleted(wfName, parts) {
  const globalKey = `wf_global_${wfName}_completed`;
  const val = safeStorage.getItem(globalKey);
  if (val !== null) return val === "true";
  
  if (safeStorage.getItem(`wf_standard_${wfName}_completed`) === "true") return true;
  if (safeStorage.getItem(`wf_prime_${wfName}_completed`) === "true") return true;
  if (safeStorage.getItem(`wf_expansion_${wfName}_completed`) === "true") return true;

  // Backwards compatibility fallback: if all parts are checked, default to completed
  const allChecked = parts.every(part => isPartChecked(wfName, part));
  if (allChecked) {
    safeStorage.setItem(globalKey, "true");
    return true;
  }
  return false;
}

function setWfCompleted(wfName, state) {
  const key = `wf_global_${wfName}_completed`;
  safeStorage.setItem(key, state);
}

function isWfLvl30(wfName) {
  const globalKey = `wf_global_${wfName}_lvl30`;
  const val = safeStorage.getItem(globalKey);
  if (val !== null) return val === "true";

  if (safeStorage.getItem(`wf_standard_${wfName}_lvl30`) === "true") return true;
  if (safeStorage.getItem(`wf_prime_${wfName}_lvl30`) === "true") return true;
  if (safeStorage.getItem(`wf_expansion_${wfName}_lvl30`) === "true") return true;

  return false;
}

function setWfLvl30(wfName, state) {
  safeStorage.setItem(`wf_global_${wfName}_lvl30`, state);
}

// // Render dynamic checklist
function createCard(wf) {
    const parts = wf.parts || defaultParts;
    const allPartsChecked = parts.every(part => isPartChecked(wf.name, part));
    const isBuilding = isWfBuilding(wf.name);
    const isCompleted = isWfCompleted(wf.name, parts);
    const isLvl30 = isCompleted && isWfLvl30(wf.name);

    const card = document.createElement("div");
    card.className = `wf-card`;
    if (isLvl30) card.classList.add("completed");
    else if (isCompleted) card.classList.add("owned-only");
    else if (isBuilding) card.classList.add("building");
    card.id = `wf-card-${wf.name.replace(/\s+/g, "-")}`;

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

    let pipelineHtml = "";
    if (isCompleted) {
      pipelineHtml = `
        <div class="pipeline-banner banner-completed" style="${isLvl30 ? "" : "background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.2); color: #3b82f6;"}">
          <span>${isLvl30 ? "🏆" : "📦"}</span> ${isLvl30 ? "Claimed & Rank 30" : "Claimed & Owned"}
        </div>
        <div class="pipeline-actions">
          <button class="btn-reset-link" data-wf="${wf.name}">Reset / Re-farm</button>
        </div>
      `;
    } else if (isBuilding) {
      pipelineHtml = `
        <div class="pipeline-banner banner-building">
          <span class="spin-gear">⚙️</span> Building in Foundry...
        </div>
        <div class="pipeline-actions">
          <button class="btn-pipeline btn-claim" data-wf="${wf.name}">
            <span>📦</span> Claim Warframe
          </button>
        </div>
      `;
    } else if (allPartsChecked) {
      pipelineHtml = `
        <div class="pipeline-actions">
          <button class="btn-pipeline btn-foundry" data-wf="${wf.name}">
            <span>🔨</span> Send to Foundry
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

    let buildGuideHtml = "";
    if (wf.name === "Saryn Prime") {
      buildGuideHtml = `
        <details class="build-guide-container" style="margin-top: 10px;">
          <summary>⚙️ Build Guide: Area Denial Nuke</summary>
          <div class="build-guide-content"><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Cunning Drift<br><strong>Range:</strong> Overextended, Stretch, Reach<br><strong>Strength:</strong> Blind Rage, Transient Fortitude<br><strong>Survivability:</strong> Vitality<br><strong>Augment:</strong> Venom Dose<br><strong>Arcanes:</strong> Energize, Avenger<br><br><em>Synergy:</em> Ignis Wraith or Torid Incarnon to pop spores. Cast 1, shoot to spread, cast 3 for extra toxin, 4 to nuke.</div>
        </details>
      `;
    } else if (wf.name === "Mesa Prime") {
      buildGuideHtml = `
        <details class="build-guide-container" style="margin-top: 10px;">
          <summary>⚙️ Build Guide: Aimbot Turret</summary>
          <div class="build-guide-content"><strong>Aura:</strong> Pistol Amp or Corrosive Projection<br><strong>Exilus:</strong> Mesa's Waltz<br><strong>Efficiency:</strong> Fleeting Expertise, Streamline<br><strong>Strength:</strong> Intensify, Transient Fortitude<br><strong>Duration:</strong> Narrow Minded, Primed Continuity<br><strong>Survivability:</strong> Vitality<br><strong>Arcanes:</strong> Velocity, Energize<br><br><em>Synergy:</em> Rely on Shatter Shield (3) for 95% DR, then activate Peacemaker (4) and hold fire.</div>
        </details>
      `;
    }
    
    card.innerHTML = `
      <div class="card-header">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h3 class="card-title click-title" title="Click to view detailed info & build">${wf.name}</h3>
          <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" class="part-checkbox own-checkbox" data-wf="${wf.name}" title="Mark as Owned" ${isCompleted ? "checked" : ""}> Own
          </label>
          <label style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" class="part-checkbox thirty-checkbox header-lvl30-checkbox" data-wf="${wf.name}" title="${isCompleted ? "Mark as Rank 30" : "Mark as Owned before setting Rank 30"}" ${isLvl30 ? "checked" : ""} ${isCompleted ? "" : "disabled"}> 30
          </label>
        </div>
        <span class="badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="card-loc">${wf.location}</div>
      <div class="parts-list">
        ${partsHtml}
      </div>
      ${pipelineHtml}
      ${buildGuideHtml}
    `;

    const clickTitle = card.querySelector(".click-title");
    if (clickTitle) {
      clickTitle.addEventListener("click", () => {
        showWarframeModal(wf.name, wf.category, parts, wf.location);
      });
    }

    const ownCheckbox = card.querySelector(".own-checkbox");
    if (ownCheckbox) {
      ownCheckbox.addEventListener("change", (e) => {
        const targetState = e.target.checked;
        setWfCompleted(wf.name, targetState);
        setWfBuilding(wf.name, false);
        parts.forEach(part => setPartState(wf.name, part, targetState));
        if (!targetState) setWfLvl30(wf.name, false);
        renderCodex();
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

    const headerLvl30Cb = card.querySelector(".header-lvl30-checkbox");
    if (headerLvl30Cb) {
      headerLvl30Cb.addEventListener("change", (e) => {
        const wfName = e.target.getAttribute("data-wf");
        const targetState = e.target.checked;
        if (targetState && !isWfCompleted(wfName, parts)) {
          e.target.checked = false;
          return;
        }
        setWfLvl30(wfName, targetState);
        renderCodex();
      });
    }

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

    return card;
}

  function renderCodex() {
    let data = [];
    if (currentTab === "standard") data = standardWarframes;
    else if (currentTab === "prime") data = primeWarframes;
    else if (currentTab === "expansion") data = expansionWarframes;
    else data = standardWarframes;
  
    // Calculate Progress Stats
    let totalAcquired = 0;
    data.forEach(wf => {
      const parts = wf.parts || defaultParts;
      if (isWfCompleted(wf.name, parts)) totalAcquired++;
    });
  
    acquiredCountEl.textContent = totalAcquired;
    totalCountEl.textContent = data.length;
    const baselineTotal = Math.max(data.length, 680);
    const percentage = data.length > 0 ? (totalAcquired / baselineTotal) * 100 : 0;
    progressBarFill.style.width = `${percentage}%`;
  
    // Apply filters
    const filteredData = data.filter(wf => {
      const matchesSearch = wf.name.toLowerCase().includes(searchQuery) || wf.location.toLowerCase().includes(searchQuery);
      const matchesCategory = categoryFilter === "all" || wf.category === categoryFilter;
  
      let matchesCompletion = true;
      if (completionFilter === "completed") {
        matchesCompletion = isWfCompleted(wf.name, wf.parts || defaultParts);
      } else if (completionFilter === "incomplete") {
        matchesCompletion = !isWfCompleted(wf.name, wf.parts || defaultParts);
      }
      return matchesSearch && matchesCategory && matchesCompletion;
    });
  
    cardGrid.innerHTML = "";
    if (filteredData.length === 0) {
      cardGrid.innerHTML = `<div class="empty-msg">No Warframes found matching your filters.</div>`;
      return;
    }
  
    filteredData.forEach(wf => cardGrid.appendChild(createCard(wf)));
  }

function updateStatsOnly(data) {
  let totalAcquired = 0;
  data.forEach(wf => {
    const parts = wf.parts || defaultParts;
    if (isWfCompleted(wf.name, parts)) totalAcquired++;
  });

  acquiredCountEl.textContent = totalAcquired;
  const baselineTotal = Math.max(data.length, 680);
  const percentage = data.length > 0 ? (totalAcquired / baselineTotal) * 100 : 0;
  progressBarFill.style.width = `${percentage}%`;
}


// Crit Calculator Math
function calculateCrit() {
  let flatCrit = 0;

  const incarnonType = incarnonSelect.value;
  let baseMultAdd = 0;
  if (incarnonType === 'magistar') {
    flatCrit += 0.16; // Magistar flat +16%
    baseMultAdd = 1.0;
  } else if (incarnonType === 'ceramic') {
    flatCrit += 0.30; // Ceramic flat +30%
  }

  if (avengerCheck.checked) {
    flatCrit += 0.45; // Avenger flat +45%
  }

  if (wrathfulCheck.checked) {
    const strength = parseFloat(strengthInput.value) || 100;
    flatCrit += (strength / 100);
  }

  const adjustedBaseCrit = baseCrit + flatCrit;
  let modMultiplier = 0;

  const modType = modSelect.value;
  if (modType === 'sacrificial_set') {
    modMultiplier += 2.75;
  } else if (modType === 'sacrificial_steel') {
    modMultiplier += 2.20;
  } else if (modType === 'true_steel') {
    modMultiplier += 1.20;
  }

  const comboMultiplier = parseInt(comboSlider.value);
  const stacks = Math.max(0, comboMultiplier - 1);
  if (modType !== 'none') {
    modMultiplier += (stacks * 0.40); // Blood rush +40% per combo stack
  }

  const gladiatorMods = parseInt(gladiatorSelect.value);
  modMultiplier += (stacks * 0.10 * gladiatorMods);

  const finalCritChance = adjustedBaseCrit * (1 + modMultiplier);
  const finalCritPercentage = (finalCritChance * 100).toFixed(1);

  critValDisplay.textContent = `${finalCritPercentage}%`;

  critValDisplay.className = 'calc-crit-val';
  let tierText = '';
  if (finalCritChance < 1.0) {
    critValDisplay.classList.add('crit-normal');
    tierText = `Yellow Crit Chance: ${(finalCritChance * 100).toFixed(0)}%`;
  } else if (finalCritChance >= 1.0 && finalCritChance < 2.0) {
    critValDisplay.classList.add('crit-yellow');
    tierText = `Guaranteed Yellow / ${( (finalCritChance - 1) * 100 ).toFixed(0)}% Orange Crit`;
  } else if (finalCritChance >= 2.0 && finalCritChance < 3.0) {
    critValDisplay.classList.add('crit-orange');
    tierText = `Guaranteed Orange / ${( (finalCritChance - 2) * 100 ).toFixed(0)}% Red Crit`;
  } else {
    critValDisplay.classList.add('crit-red');
    tierText = `Guaranteed Red Crit (Tier ${Math.floor(finalCritChance)})`;
  }
  critTierDisplay.textContent = tierText;

  // Crit damage CD = Base * (1 + CD mods)
  // Organ Shatter (85%) + Gladiator Might (60%) = +145% CD mods
  const finalMultiplier = (baseMultiplier + baseMultAdd) * (1 + 1.45);
  critMultDisplay.textContent = `${finalMultiplier.toFixed(1)}x`;
}

// Sandbox Initializer
function initSandbox() {
  const select1 = document.getElementById("sandbox-mod1");
  const select2 = document.getElementById("sandbox-mod2");

  if (!select1 || !select2) return;

  // Sort mods alphabetically
  const sortedMods = [...MODS_DB].sort((a, b) => a.name.localeCompare(b.name));

  // Populate lists
  select1.innerHTML = sortedMods.map(m => `<option value="${m.name}">${m.name} (${m.type})</option>`).join('');
  select2.innerHTML = sortedMods.map(m => `<option value="${m.name}">${m.name} (${m.type})</option>`).join('');

  // Default selection
  select1.value = "Blood Rush";
  select2.value = "Organ Shatter";

  // Bind change events
  select1.addEventListener("change", evaluateSandbox);
  select2.addEventListener("change", evaluateSandbox);
}

// Sandbox Synergy Evaluator
function evaluateSandbox() {
  const mod1Name = document.getElementById("sandbox-mod1").value;
  const mod2Name = document.getElementById("sandbox-mod2").value;
  const outputBox = document.getElementById("sandbox-output");
  const ratingEl = document.getElementById("sandbox-rating");
  const descEl = document.getElementById("sandbox-description");

  if (!outputBox || !ratingEl || !descEl) return;

  const mod1 = MODS_DB.find(m => m.name === mod1Name);
  const mod2 = MODS_DB.find(m => m.name === mod2Name);

  // Reset classes
  outputBox.className = "calc-output";

  if (mod1Name === mod2Name) {
    outputBox.classList.add("synergy-mismatch");
    ratingEl.innerHTML = "&#x26A0;&#xFE0F; DUPLICATE MOD DETECTED";
    descEl.innerHTML = `Duplicate mod selected! You cannot equip two copies of <strong>'${mod1Name}'</strong> on the same weapon or loadout. Select another mod to test their interaction.`;
    return;
  }

  if (mod1.type !== mod2.type) {
    outputBox.classList.add("synergy-mismatch");
    ratingEl.innerHTML = "&#x26A0;&#xFE0F; CLASS MISMATCH";
    descEl.innerHTML = `Incompatible categories! <strong>'${mod1.name}'</strong> is a <strong>${mod1.type}</strong> mod, while <strong>'${mod2.name}'</strong> is a <strong>${mod2.type}</strong> mod. They cannot be equipped together on the same equipment.`;
    return;
  }

  const comboKey = [mod1Name, mod2Name].sort().join(" + ");

  // High-synergy pairs
  if (comboKey === "Blood Rush + Organ Shatter") {
    outputBox.classList.add("synergy-maximal");
    ratingEl.innerHTML = "&#x1F525; MAXIMAL SYNERGY: MELEE CRIT LOOP";
    descEl.innerHTML = "<strong>Blood Rush</strong> scales critical chance per combo multiplier (+40% per combo, up to +440% at x12). This pushes hits into red-critical tiers, allowing the increased critical multiplier from <strong>Organ Shatter</strong> to yield massive multiplicative damage.";
    return;
  }

  if (comboKey === "Condition Overload + Weeping Wounds") {
    outputBox.classList.add("synergy-maximal");
    ratingEl.innerHTML = "&#x1F525; MAXIMAL SYNERGY: MELEE STATUS SCALING";
    descEl.innerHTML = "<strong>Weeping Wounds</strong> scales status chance per combo (+40% per combo stack), guaranteeing status applications. This rapidly stacks status effects, which directly fuels <strong>Condition Overload</strong> (+80% melee damage per unique active status type on the target).";
    return;
  }

  // Elemental Fusions
  const elemMods = {
    "Fever Strike": "Toxin",
    "North Wind": "Cold",
    "Shocking Touch": "Electric",
    "Molten Impact": "Heat"
  };

  if (elemMods[mod1Name] && elemMods[mod2Name]) {
    const el1 = elemMods[mod1Name];
    const el2 = elemMods[mod2Name];
    const elCombo = [el1, el2].sort().join(" + ");
    
    let resElement = "";
    let resDesc = "";

    if (elCombo === "Cold + Toxin") {
      resElement = "Viral";
      resDesc = "Multiplies all direct damage dealt to the target's health bar by 100% on the first status effect, scaling up to +325% at 10 stacks. The absolute meta standard for health damage scaling.";
    } else if (elCombo === "Electric + Toxin") {
      resElement = "Corrosive";
      resDesc = "Strips 26% of target armor on the first status proc, scaling up to 80% armor reduction at 10 stacks. Extremely effective against high-armor Grineer.";
    } else if (elCombo === "Electric + Heat") {
      resElement = "Radiation";
      resDesc = "Forces the target to attack its allies for 12 seconds, drawing enemy aggro. Deals +75% bonus damage to Alloy Armor (heavy units and bosses).";
    } else if (elCombo === "Cold + Electric") {
      resElement = "Magnetic";
      resDesc = "Amplifies damage dealt to active shields by +100% (+325% at max stacks) and stops shield recharge. Essential against the Corpus faction.";
    } else if (elCombo === "Cold + Heat") {
      resElement = "Blast";
      resDesc = "Triggers a localized explosion after a brief delay or when 10 stacks are reached, dealing area-of-effect damage to all nearby targets.";
    } else if (elCombo === "Heat + Toxin") {
      resElement = "Gas";
      resDesc = "Creates a toxic cloud that deals damage over time to all targets within a radius. Excellent for clearing tightly packed, low-armor infected groups.";
    }

    outputBox.classList.add("synergy-elemental");
    ratingEl.innerHTML = `&#x26A1; ELEMENTAL FUSION: ${resElement.toUpperCase()}`;
    descEl.innerHTML = `Equipping <strong>'${mod1Name}'</strong> (${el1}) and <strong>'${mod2Name}'</strong> (${el2}) fuses their base types into <strong>${resElement}</strong>. <br><br><strong>Status Effect:</strong> ${resDesc}`;
    return;
  }

  // Diminishing returns warnings
  if (mod1.attribute === mod2.attribute && mod1.attribute === "Base Damage") {
    outputBox.classList.add("synergy-diminishing");
    ratingEl.innerHTML = "&#x1F44E; DIMINISHING RETURNS DETECTED";
    descEl.innerHTML = `Both <strong>'${mod1Name}'</strong> and <strong>'${mod2Name}'</strong> add flat base damage. Because they scale additively rather than multiplying each other, stacking both decreases their relative return. Consider replacing one with a critical damage or elemental mod for higher total scaling.`;
    return;
  }

  if (comboKey === "Sacrificial Steel + True Steel") {
    outputBox.classList.add("synergy-diminishing");
    ratingEl.innerHTML = "&#x26A0;&#xFE0F; SUB-OPTIMAL SYNERGY (DUPLICATE STAT)";
    descEl.innerHTML = "Both mods add flat critical chance. Because they scale additively, stacking them results in diminishing relative gains. Sacrificial Steel is a direct upgrade; we suggest replacing True Steel with Melee Damage, Critical Damage, or Attack Speed.";
    return;
  }

  // Default Compatible Match
  outputBox.classList.add("synergy-maximal");
  ratingEl.innerHTML = "&#x2714;&#xFE0F; COMPATIBLE MATCH";
  descEl.innerHTML = `These mods are fully compatible on the same loadout. <strong>'${mod1Name}'</strong> (${mod1.attribute}) and <strong>'${mod2Name}'</strong> (${mod2.attribute}) work together to amplify your stats without conflict or diminishing returns.`;
}

// On Load
document.addEventListener("DOMContentLoaded", init);

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
      guide: "<strong>Focus:</strong> Duration & Range.<br><strong>Aura:</strong> Growing Power<br><strong>Exilus:</strong> Cunning Drift<br><strong>Mods:</strong> Stretch, Primed Continuity, Streamline, Overextended, Primed Flow, Vitality, Intensify.<br><strong>Arcanes:</strong> Arcane Energize, Arcane Grace.<br><strong>Synergy:</strong> Spawns threads that bind enemies. Roll dice to get random powerful buffs."
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


