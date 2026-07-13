// The Steel Path Circuit follows a strict 7-week rotation.
// The rotation resets every Sunday at 00:00 UTC.
// Anchor Date: A known date when "Week 1" started. 
// Using April 30, 2023 (Sunday 00:00 UTC) as the origin point.
const CIRCUIT_ANCHOR_DATE = new Date(Date.UTC(2023, 3, 30, 0, 0, 0)); 

const circuitRotation = [
    {
        week: 1,
        weapons: [
            { name: "Braton", type: "Primary", tier: "A" },
            { name: "Lato", type: "Secondary", tier: "B" },
            { name: "Skana", type: "Melee", tier: "B" },
            { name: "Paris", type: "Primary", tier: "A" },
            { name: "Kunai", type: "Secondary", tier: "C" }
        ],
        highlight: false
    },
    {
        week: 2,
        weapons: [
            { name: "Bo", type: "Melee", tier: "B" },
            { name: "Latron", type: "Primary", tier: "S" },
            { name: "Furis", type: "Secondary", tier: "A" },
            { name: "Furax", type: "Melee", tier: "B" },
            { name: "Strun", type: "Primary", tier: "S" }
        ],
        highlight: true // Latron and Strun are insane
    },
    {
        week: 3,
        weapons: [
            { name: "Lex", type: "Secondary", tier: "S" },
            { name: "Magistar", type: "Melee", tier: "S" }, // Top stat stick
            { name: "Boltor", type: "Primary", tier: "A" },
            { name: "Bronco", type: "Secondary", tier: "C" },
            { name: "Ceramic Dagger", type: "Melee", tier: "S" } // Top stat stick
        ],
        highlight: true
    },
    {
        week: 4,
        weapons: [
            { name: "Torid", type: "Primary", tier: "S+" }, // Best weapon in game
            { name: "Dual Toxocyst", type: "Secondary", tier: "S" },
            { name: "Dual Ichor", type: "Melee", tier: "S" },
            { name: "Miter", type: "Primary", tier: "A" },
            { name: "Atomos", type: "Secondary", tier: "A" }
        ],
        highlight: true // Torid is God tier
    },
    {
        week: 5,
        weapons: [
            { name: "Ack & Brunt", type: "Melee", tier: "B" },
            { name: "Soma", type: "Primary", tier: "B" },
            { name: "Vasto", type: "Secondary", tier: "A" },
            { name: "Burston", type: "Primary", tier: "S" },
            { name: "Zylok", type: "Secondary", tier: "B" }
        ],
        highlight: false
    },
    {
        week: 6,
        weapons: [
            { name: "Gorgon", type: "Primary", tier: "B" },
            { name: "Boar", type: "Primary", tier: "S" },
            { name: "Angstrum", type: "Secondary", tier: "A" },
            { name: "Gammacor", type: "Secondary", tier: "A" },
            { name: "Anku", type: "Melee", tier: "C" }
        ],
        highlight: false
    },
    {
        week: 7,
        weapons: [
            { name: "Sibear", type: "Melee", tier: "A" }, // Rare resource sink
            { name: "Dera", type: "Primary", tier: "B" },
            { name: "Sybaris", type: "Primary", tier: "B" },
            { name: "Cernos", type: "Primary", tier: "B" },
            { name: "Nami Solo", type: "Melee", tier: "C" }
        ],
        highlight: false
    }
];

// Helper to determine the current week and next week based on current date
function calculateCircuitRotation() {
    const now = new Date();
    // Milliseconds in a week
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    
    // Difference between now and the anchor date
    const diff = now.getTime() - CIRCUIT_ANCHOR_DATE.getTime();
    
    // Calculate total weeks passed since anchor
    const totalWeeksPassed = Math.floor(diff / msPerWeek);
    
    // The rotation is 7 weeks long (0-indexed logic)
    const currentWeekIndex = totalWeeksPassed % circuitRotation.length;
    
    // Determine the next reset date
    const nextReset = new Date(CIRCUIT_ANCHOR_DATE.getTime() + ((totalWeeksPassed + 1) * msPerWeek));
    
    // Calculate how many days until reset
    const daysUntilReset = Math.ceil((nextReset.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    return {
        currentWeek: currentWeekIndex + 1, // 1-indexed
        daysUntilReset: daysUntilReset,
        nextResetDate: nextReset
    };
}
