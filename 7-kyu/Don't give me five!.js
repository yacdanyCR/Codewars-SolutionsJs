// DESCRIPTION:
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end) {
	let i = start - 1
	const arraSize = (end - start) + 1
	return [...new Array(arraSize)].map(() => {
		i++
		return String(i)
	}).filter((el) => !el.includes(5)).length
}