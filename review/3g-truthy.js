let temp = 0 // false
const s = "" // false

if (temp) {
  console.log("Non-Zero")
} else {
  console.log("Temp is zero")
}

let str = (s) ? "Str is non-empty" : "Str is empty"
console.log(str)