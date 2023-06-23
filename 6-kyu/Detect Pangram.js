// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function abecedary() {
    const abecedaryMap = new Map()

    for (let index = 65; index <= 90; index++) {
        abecedaryMap.set(String.fromCharCode(index), 0)
    }

    return abecedaryMap
}

function isPangram(string) {
    const formatString = string.toUpperCase().replace(/ /g, '').split('')
    const LettersMap = abecedary()

    for (let index = 0; index < formatString.length; index++) {
        if (LettersMap.get(formatString[index]) !== undefined) {
            const prevPoint = LettersMap.get(formatString[index])
            LettersMap.set(formatString[index], prevPoint + 1)
        }
    }

    for (const value of LettersMap.values()) {
        if (value === 0) return false
    }

    return true
}

console.log(isPangram("This is not a pangram."))