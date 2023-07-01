// DESCRIPTION:
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

function duplicates(arr) {
    const uniqueData = [...new Set(arr)];
    const dataMap = new Map();
    const duplicateData = [];

    for (let index = 0; index < uniqueData.length; index++) {
        dataMap.set(uniqueData[index], 0)
    }

    for (let index = 0; index < arr.length; index++) {
        let previousInput = dataMap.get(arr[index]);
        dataMap.set(arr[index], previousInput += 1);

        if (dataMap.get(arr[index]) >= 2) {
            duplicateData.push(arr[index])
        }
    }

    return duplicateData.length > 2 ? Array(...new Set(duplicateData)) : duplicateData.length === 0 ? [] : duplicateData
}