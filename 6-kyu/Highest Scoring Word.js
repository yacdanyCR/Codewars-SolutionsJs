// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function fillAlphabetPoints() {
    const allphabetPoints = new Map()
    let i = 1

    for (let index = 97; index <= 122; index++) {
        allphabetPoints.set(String.fromCharCode(index), i)
        i++
    }

    return allphabetPoints
}

function high(x) {
    x = x.toLowerCase().split(' ')
    const alphabetPoints = fillAlphabetPoints();
    const wordsMap = new Map()
    let point = 0
    let prevPoint = 0

    for (let index = 0; index < x.length; index++) {
        wordsMap.set(x[index], 0)
        let splitWord = x[index].split('')
        for (let index_2 = 0; index_2 < splitWord.length; index_2++) {
            if (alphabetPoints.has(splitWord[index_2])) {
                prevPoint = wordsMap.get(x[index])
                point = alphabetPoints.get(splitWord[index_2])
                wordsMap.set(x[index], prevPoint + point)
            }
        }
    }

    const maxPoint = [...wordsMap.values()]
    const words = [...wordsMap.keys()]

    return words[maxPoint.indexOf(Math.max(...maxPoint))]
}