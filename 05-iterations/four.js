const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
} 
// for (const key in myObj) {
// console.log(`${key} shortcut is ${myObj[key]}`)
// }

const programming = ["rb", "py", "js", "c++"]

for (const key in programming) {
   console.log(key) 
}
for (const key in programming) {
   console.log(programming[key]) //only key means it gives index


}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // this does not work here
}