const lista = [1, 2, 3, 4, 5];

// for
for (let i = 0; i < lista.length; i++) {
  console.log(`${i}: ${lista[i]}`);
}

// forEach
lista.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

// map
const mapLista = lista.map((value) => value + 5);
console.log(mapLista);

// filter
const filterLista = lista.filter((value) => value >= 3);
console.log(filterLista);

// while
let value = 5;
while (value > 0) {
  console.log(`${value}`);
  value--;
}
