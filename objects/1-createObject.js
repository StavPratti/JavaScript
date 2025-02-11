// 3 ways
// Literal way
// Common way
const obj = {} // empty object
const point = { x: 1, y: 1 } // key-value pair
point.z = 2 // dynamic addition

// With construction
const point3D = new Object()
point3D.x = 1
point3D.y = 2
point3D.z = 35

// Wrapper class
const newObj = Object.create(Object.prototype)