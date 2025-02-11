let isDarkMode = false
let username = ""
let isUserLoggedIn = false
let isDashboardOn = false
console.log(`Is dark mode enabled:  ${isDarkMode}`)    // interpolation
 
isUserLoggedIn = "true"
username = "Anna"
isDashboardOn = isUserLoggedIn && username // 2nd is always the parameter that we want (not) to show
console.log(isDashboardOn)