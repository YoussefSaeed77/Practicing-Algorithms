const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length/2);
    const left  = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const sortedArray = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift())
        }
        else {
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
}

console.log(mergeSort([2, 1, 3]))