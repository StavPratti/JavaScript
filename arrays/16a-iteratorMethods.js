const students = ['Alice', 'Andreas', 'Andreas', 'Bob', 'Costas']

// lambda expressions
// (value, index, array)
students.forEach(function(val, _, arr) { // ignore _
  console.log(index, val, arr)
})

// new array is returned
// let filtered = students.filter(student => student === 'Andreas') // like boolean
// console.log(filtered)

// new array is returned
// let mapped = students.map(student => "Student: " + student)
// console.log(mapped)

// one value is returned
// const numbers = [1, 6, 9, 12]
// let sum = numbers.reduce((total, val) => total + val, 0)
// console.log(sum)