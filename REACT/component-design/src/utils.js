// Create boxes based on a number of boxes required
function createBoxes(n) {
    return Array.from({ length: n }, () => true);
}

// Get random integer from 1 to 6: [1...6]
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get n rolls => [num, ...]
function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}

// Get sum of nums
function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0);
}

// Boolean function checking if a total dice < 4
function lessThan4(dice) {
    return sum(dice) < 4;
}

function allSameValue(dice) {
    return dice.every((v) => v === dice[0]);
}

export { allSameValue, createBoxes, d6, getRolls, lessThan4, sum };

