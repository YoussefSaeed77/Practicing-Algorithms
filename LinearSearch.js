const arrayEx = [0, 2, 5, 6, 7, 9, 11, -5, -6]

const linSearch = (array, t) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === t) {
            return i
        }
    }
    return -1
}

console.log(linSearch(arrayEx, 8))