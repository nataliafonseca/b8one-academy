let lista = ["frase 1", 5, true, undefined, null, false];

let result = true;
let name = "Natália";
let age = 26;
let weight = 65;

let values = [result, name, age, weight];

console.log(values.length); // 4

name = "Nat";

console.log(name); // 'Nat'
console.log(values[1]); // 'Natália'

values.push("Nat");

console.log(values.length); // 5
