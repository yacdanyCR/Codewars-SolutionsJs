// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function createAbecedaryMap() {
    const abecedaryMap = new Map()
    let cont = 1;

    for (let index = 97; index <= 122; index++) {
        abecedaryMap.set(String.fromCharCode(index), cont)
        cont++
    }
    return abecedaryMap
}

function position(letter) {
    const abecedaryMap = createAbecedaryMap()
    return "Position of alphabet: " + abecedaryMap.get(letter)
}