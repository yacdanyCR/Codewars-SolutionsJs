// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
function consonantCount(str) {
    const consonantsLetters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "v", "w", "x", "y", "z"]

    return str.split('').filter((el) => {
        if (consonantsLetters.includes(el.toLowerCase())) {
            return el
        }
    }).length
}