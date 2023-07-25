// DESCRIPTION:
// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"

const getAbecedary = () => {
    const abecedary = new Map();
    let cont = 1;
    for (let i = 65; i <= 90; i++) {
        abecedary.set(String.fromCharCode(i), cont)
        cont++;
    }
    return abecedary
}

function battle(x, y) {
    if (x === y) return 'Tie!'
    const abecedary = getAbecedary();
    const words = [x, y];
    const totalPoints = [0, 0];

    for (let i = 0; i < words.length; i++) {
        const splitWord = words[i].split('')
        for (let index = 0; index < splitWord.length; index++) {
            const prevPoint = abecedary.get(splitWord[index]);
            totalPoints[words.indexOf(splitWord.join(''))] += prevPoint;
        }
    }

    return totalPoints[0] === totalPoints[1] ? 'Tie!' :
        totalPoints[0] > totalPoints[1] ? words[0] : words[1]
}

console.log(battle("D", "D"))
console.log(2 + 0.5)