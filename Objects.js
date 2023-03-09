const obj = {
    name: "Bruce",
    age: 25,
    "key-three": true,
    sayMyName:  function() {
        console.log(this.name)
    }
}

obj.hobby = 'football'
delete obj.hobby;

// console.log(obj)

obj.sayMyName();

// Object.keys() .values() .entries() - O(n)
// Insert O(1)
// Remove O(1)
// Access O(1)
// Search O(n)
