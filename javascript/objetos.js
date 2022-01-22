const values = {
  name: "Natalia",
  age: 26,
  weight: 65,
};

console.log(values);
console.log(values.name);
console.log(values.age);
console.log(values.weight);

delete values.weight;
console.log(values);

values.weight = 65;
values.name = "Nat";
console.log(values);
