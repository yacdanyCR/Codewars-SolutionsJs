// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "

function fillAbecedary() {
    const abecedary = new Map()
    const ConsonantsExeption = ['a', 'e', 'i', 'o', 'u']
    let cont = 1

    for (let index = 97; index <= 122; index++) {
        if (!ConsonantsExeption.includes(String.fromCharCode(index))) {
            abecedary.set(String.fromCharCode(index), cont)
        }
        cont++
    }
    return { abecedary, ConsonantsExeption }
}

function solve(s) {
    //s if (s === "az") return 26
    const { abecedary, ConsonantsExeption } = fillAbecedary()
    const totalSum = []
    let sum = 0

    for (let index = 0; index < s.length; index++) {
        if (!ConsonantsExeption.includes(s[index])) {
            sum += abecedary.get(s[index])
        } else {
            totalSum.push(sum)
            sum = 0
        }
    }

    return totalSum
};

console.log(solve("az"))