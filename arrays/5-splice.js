const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Delete
// its like splitting
const arr2 = arr.splice(0, 4)
console.log(arr2)
console.log(arr)


// Insert
// shift right
arr.splice(0, 0, 10)
console.log(arr)


// Update
arr.splice(0, 1, 11)
console.log(arr)