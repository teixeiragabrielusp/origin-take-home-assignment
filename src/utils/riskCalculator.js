const riskCalculator = async (data) => {

    let baseScore = data.risk_questions.reduce((a, b) => a + b, 0);
    let autoScore = disabilityScore = homeScore = lifeScore = baseScore;
    let currentYear = new Date().getFullYear();

    if (data.age < 30) {
        autoScore -= 2;
        disabilityScore -= 2;
        homeScore -= 2;
        lifeScore -= 2;
    }
    if (data.age >= 30 && data.age <= 40) {
        autoScore -= 1;
        disabilityScore -= 1;
        homeScore -= 1;
        lifeScore -= 1;
    }
    if (data.income > 200000) {
        autoScore -= 1;
        disabilityScore -= 1;
        homeScore -= 1;
        lifeScore -= 1;
    }
    if (data.house.ownership_status === 'mortgaged') {
        homeScore += 1;
        disabilityScore += 1;
    }
    if (data.dependents > 0) {
        disabilityScore += 1;
        lifeScore += 1;
    }
    if (data.marital_status === 'married') {
        lifeScore += 1;
        disabilityScore -= 1;
    }
    if (data.vehicle.year >= currentYear - 5 && data.vehicle.year <= currentYear) {
        autoScore += 1;
    }
    if (data.income == 0) {
        disabilityScore = null;
    }
    if (data.house == 0) {
        homeScore = null;
    }
    if (data.vehicle == 0) {
        autoScore = null;
    }
    if (data.age > 60) {
        disabilityScore = null;
        lifeScore = null;
    }

    let insuranceResult = { 'auto': autoScore, 'disability': disabilityScore, 'home': homeScore, 'life': lifeScore };
    for (let i in insuranceResult) {
        if (insuranceResult[i] === null) {
            insuranceResult[i] = 'ineligible';
        }
        else if (insuranceResult[i] <= 0) {
            insuranceResult[i] = 'economic';
        }
        else if (insuranceResult[i] >= 1 && insuranceResult[i] <= 2) {
            insuranceResult[i] = 'regular';
        }
        else {
            insuranceResult[i] = 'responsible';
        }
    }

    return insuranceResult;
}

module.exports = riskCalculator;