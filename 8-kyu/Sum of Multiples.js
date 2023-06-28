// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
    if (m <= 0) return "INVALID"
    let aux = n
    return new Array(m - 1).fill(0, 0).map((el, index) => {
        if (index > 0) {
            aux += n
        }
        return el = aux
    }).filter((el) => el < m).reduce((pre, curr) => pre + curr)
}

console.log(sumMul(3, 13))