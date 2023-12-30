const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);

//spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [2, 3, 4, [7, 8]]];

const realArray = anotherArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray("myname")); // to check if there is an array
console.log(Array.from("myname")) // to form an array

console.log(Array.from({name: "shana"})); // interesting case

let score = 100;
let score1 = 200;
let score2 = 300;

console.log(Array.of(score, score1, score2))// revise this
