// const binarySearch = (arr, t) => {
//     const middleIndex = Math.floor(arr.length/2);
//     const left = arr.slice(0, middleIndex);
//     const right = arr.slice(middleIndex);
//     if (t < arr[middleIndex]) {
//         for (let i=0; i < left.length; i++ ) {
//             if (left[i] === t) {
//                 return i
//             }
//         }
//     }
//     else if (t > arr[middleIndex]) {
//         for (let i=0; i < right.length; i++ ) {
//             if (right[i] === t) {
//                 return middleIndex + i
//             }
//         }
//     }
//     return -1
// }

// const arrayEx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// console.log(binarySearch(arrayEx, 2))

const binarySearch = (arr, t) => {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (t===arr[middleIndex]) {
            return middleIndex
        }
        if (t < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

const binarySearchR = (arr, t) => {
    return search(arr, t, 0, (arr.length-1))
}

const search = (arr, t, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if (t === arr[middleIndex]) {
        return middleIndex
    }
    if (t < arr[middleIndex]) {
        return search(arr, t, leftIndex, middleIndex - 1)
    }
    else {
        return search(arr, t, middleIndex + 1, rightIndex)
    }
}

console.log(binarySearchR([-5, 2, 4, 6, 10], 10))
console.log(binarySearchR([-5, 2, 4, 6, 10], 6))
console.log(binarySearchR([-5, 2, 4, 6, 10], 20))