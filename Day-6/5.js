// Truthy
// Falsy

// OLT - Or looks for Truthy value

let a = 12 || 0

let b = 0 || "" || "CFI" || 123

// console.log(b)

let c = 0 || ("CFI" && 12) || 123

console.log(c)