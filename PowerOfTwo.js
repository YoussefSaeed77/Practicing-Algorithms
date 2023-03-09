// const isPowerOfTwo = (n) => {
//     if (Math.log2(n) % 1 !== 0) {
//         return false
//     }
//     return true
// }

// console.log(isPowerOfTwo(1))

const isPowerOfTwo2 = (n) => {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n/2
    }
    return true
}

console.log(isPowerOfTwo2(1))