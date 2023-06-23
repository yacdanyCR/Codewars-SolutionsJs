// DESCRIPTION:
// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

function sortArray(a1, a2) {
    const orderArray = []

    for (let index = 0; index < a1.length; index++) {
        for (let index_2 = 0; index_2 < a2.length; index_2++) {
            if (a1[index][0] === a2[index_2][0]) {
                orderArray.push(a2[index_2])
                break
            }
        }
    }

    return orderArray
}