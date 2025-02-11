const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens",
  isStudent: false
}

// a new array is returned
const keys = Object.keys(person)
keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

// a new array is returned
console.log(Object.values(person))

const grades = { maths: 8, science: 10, history: 5}
const total = Object.values(grades).reduce((sum, val) => sum + val, 0)
console.log("total: " + total)
let avg = (total / Object.values(grades).length).toFixed(2)
console.log(avg)