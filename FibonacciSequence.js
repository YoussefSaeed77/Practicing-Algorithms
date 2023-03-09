// const fibonacci = (n) => {
//     let array = [0,1];
//     for (i=2; i < n; i++) {
//         array[i] = array[i-1] + array[i-2]
//     }
//     return array
// }

// console.log(fibonacci(10))

const fibonacci = (n) => {
    if (n < 2) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(7))