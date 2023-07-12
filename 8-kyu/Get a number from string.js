// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
function getNumberFromString(s) {
    const regex = /[0-9]/g
    return Number(s.match(regex).join(''))
}

console.log(getNumberFromString("hell5o wor6ld"))