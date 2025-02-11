const calc = {
  add: function(a, b) {
    return a + b
  },

  sub(a, b) { // short version
    return a- b
  }
}

console.log(calc.add) // reference
console.log(calc.add(12, 7))
console.log(calc.add(5, 1))
console.log(calc.sub(10, 4))