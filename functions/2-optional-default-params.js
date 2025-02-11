function greet(name) {
  if (name === undefined) {
    name = "Guest"
  }
  console.log(`hello, ${name}`)
}

greet()

// Default params with =
// Function add (a = 0, b = 0)
function getUser(name = "Guest", age = 18) {
  return { name, age }
}
const obj = getUser()
console.log(obj)

// When a parameter is missing when calling a function with many params
// then the undefined value is given to the missing one
function getFormattedDateTime(
  locale = "en-US",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }
) {
  const now = new Date()
  return now.toLocaleString(locale, options)
}
console.log(getFormattedDateTime("el-GR"))