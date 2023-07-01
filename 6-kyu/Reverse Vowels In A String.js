// DESCRIPTION:
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str) {
    let strToReverse = str.split('')
    let i = 0
    const vowelsOnTheString = str.split('').filter((el) => {
        switch (el.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                return el
            default:
                break
        }
    }).reverse()

    let flag = 0
    while (i < vowelsOnTheString.length) {
        switch (strToReverse[flag].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                strToReverse[flag] = vowelsOnTheString[i]
                i++
            default:
                break
        }
        flag++
    }


    return strToReverse.join('')
}