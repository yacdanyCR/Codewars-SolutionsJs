// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    const uniqueLetters = [...new Set(text.toLowerCase())]
    const mapLetters = new Map()
    const duplicateLetters = []

    uniqueLetters.forEach(element => {
        mapLetters.set(element, 0)
    });

    for (let index = 0; index < text.length; index++) {
        let previousLetter = mapLetters.get(text[index].toLowerCase())
        mapLetters.set(text[index].toLowerCase(), previousLetter += 1)
    }

    mapLetters.forEach((value, key) => {
        if (value >= 2) {
            duplicateLetters.push([key, value])
        }
    });

    return duplicateLetters.length
}