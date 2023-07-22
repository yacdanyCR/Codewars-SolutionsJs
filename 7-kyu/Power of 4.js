// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false

function powerOf4(n) {
    let i = 0;
    let itIsPower = false
    let result = 0

    while (result < n) {
        result = Math.pow(4, i)
        itIsPower = Math.pow(4, i) === n ? true : false
        i++
    }
    return itIsPower
}

console.log(powerOf4(16))

console.log(Math.pow(4, 2))