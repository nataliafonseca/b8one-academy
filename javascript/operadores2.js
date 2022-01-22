// && - AND

let result = true;
let username = "Gabriel";

let isAuthenticated1 = result === true && username === "Gabriel"; // true
let isAuthenticated2 = result && username === "Hugo"; // false
let isAuthenticated3 = !result && username === "Gabriel"; // false

// || - OR

let apples = 20;
let waterBottles = 10;

let dailyStockIsOk1 = apples === 20 || waterPallets === 10; // true
let dailyStockIsOk2 = apples === 20 || waterPallets === 20; // true
let dailyStockIsOk3 = apples === 25 || waterPallets === 20; // false
