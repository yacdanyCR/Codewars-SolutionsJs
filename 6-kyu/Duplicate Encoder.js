// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
function duplicateEncode(word) {
    word = word.toLowerCase()
    const noRepeatLetters = [...new Set(word)]
    const uniqueLetters = new Map()

    for (let index = 0; index < noRepeatLetters.length; index++) {
        uniqueLetters.set(noRepeatLetters[index], 0)
    }

    for (let index = 0; index < word.length; index++) {
        let prevCount = uniqueLetters.get(word[index])
        uniqueLetters.set(word[index], prevCount += 1)
    }

    return word.split('').map((el) => {
        return uniqueLetters.get(el) >= 2 ? ')' : '('
    }).join('')
}