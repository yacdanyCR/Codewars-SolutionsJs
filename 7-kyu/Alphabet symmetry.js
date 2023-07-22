// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

const getAbecedary = () => {
    const abecedary = new Map();
    let position = 1;

    for (let i = 97; i < 122; i++) {
        abecedary.set(position, String.fromCharCode(i))
        position++
    }

    return abecedary
}

function solve(arr) {
    const abecedary = getAbecedary();
    let simetryPts = []

    for (let i = 0; i < arr.length; i++) {
        const checkWord = arr[i].toLowerCase()
        let simetryEquals = 0
        for (let i_2 = 0; i_2 < checkWord.length; i_2++) {
            if (abecedary.get(i_2 + 1) === checkWord[i_2]) {
                simetryEquals++
            }
        }
        simetryPts.push(simetryEquals)
    }

    return simetryPts
};

console.log(solve(["abode", "ABc", "xyzD"]))