function f(x, cc) {
    const objectKeys = Object.keys(cc)
    const keyIndex = Object.values(cc).findIndex((el) => el === x)

    return keyIndex === objectKeys.length - 1
        ? cc[objectKeys[0]]
        : cc[objectKeys[keyIndex + 1]]
}