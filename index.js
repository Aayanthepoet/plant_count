//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;
const gardenArea = 3.1415 * 5 * 5; // Calculate the total area of the garden
const plantSpace = 0.8; // Space needed for each plant
const maxPlants = 78.54/0.8; plantSpace;
// Maximum number of plants that can fit is 98.1

// Function to check plant growth
function plantGrowth(weeks) {
    let plantCount = 20; // Start with 20 plants

    // plants Double the number of plants each week
    for (let i = 1; i <= weeks; i++) {
        plantCount *= 2;
    }

    console.log(`After ${weeks} week(s), there will be ${plantCount} plants.`);

    // Decide what to do based on plant count
    if (plantCount > maxPlants * 0.8) {
        console.log("Prune the plants! There are too many.");
    } else if (plantCount > maxPlants * 0.5) {
        console.log("Monitor the plants. They're growing fine.");
    } else {
        console.log("Plant more plants! There's still space.");
    }
}

// Test Part 1 with 1, 2, and 3 weeks
console.log("** Part 1: Growing Pains **");
plantGrowth(1);
plantGrowth(2);
plantGrowth(3);

// Part 2: Thinking Bigger
function additionalSpace(weeks) {
    let plantCount = 100; // begin with 100 plants

    // Double the plants each week for the given weeks
    plantCount *= Math.pow(2, weeks);

    const totalSpaceNeeded = plantCount * plantSpace;
    const extraSpaceNeeded = totalSpaceNeeded - gardenArea;

    console.log(`\nAfter ${weeks} weeks, they need ${extraSpaceNeeded.toFixed(2)} square meters more space.`);
    
    // Find the radius of the new bigger garden
    const newGardenRadius = Math.sqrt(totalSpaceNeeded / PI);
    console.log(`The new radius of the garden should be: ${newGardenRadius.toFixed(2)} meters.`);
}

// Test Part 2 with 10 weeks
console.log("\n** Part 2: Thinking Bigger **");
additionalSpace(10);

// Part 3: Errors in Judgement
try {
    let plantCount = 100;
    const totalSpaceNeeded = plantCount * plantSpace;

    if (totalSpaceNeeded > gardenArea) {
        throw new Error("Not enough space! The plants can't fit in the garden.");
    }

    console.log("\nThe plants fit perfectly in the garden.");
} catch (error) {
    console.log("\n** Part 3: Errors in Judgement **");
    console.log(error.message);
}