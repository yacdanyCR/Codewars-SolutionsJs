// Alternating Among Three Values
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

// What is the most efficient way to cycle among three values? Write a function f so that it satisfies

function f(x, cc) {
    const objectKeys = Object.keys(cc)
    const keyIndex = Object.values(cc).findIndex((el) => el === x)

    return keyIndex === objectKeys.length - 1
        ? cc[objectKeys[0]]
        : cc[objectKeys[keyIndex + 1]]
}