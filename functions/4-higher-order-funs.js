// Higher-order functions
// Function factory
// Function can be in the parameters as well -> callback
// Closure
function createMultiplier(multiplier) {
  return function(num) { // it has access to outer scope
    return num * multiplier
  }
}

const createMultiplier2 = (multiplier) => (num) => num * multiplier

// Reusability
const double = createMultiplier(2)
const triple = createMultiplier(3)
console.log(double(5))