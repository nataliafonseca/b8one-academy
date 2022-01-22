// if
let result = 10 + 10;
if (result === 20) {
  console.log("bloco if");
}

// else if
let apples = 20;
if (apples === 10) {
  console.log("bloco if");
} else if (apples === 20) {
  console.log("bloco else if");
} else if (apples === 30) {
  console.log("bloco else if");
}

// else
let waterBottles = 500;
if (waterBottles !== 500) {
  console.log("bloco if");
} else {
  console.log("bloco else");
}

let mice = 3;

if (mice !== 3) {
  console.log("bloco if");
} else if (mice === 10) {
  console.log("bloco else if");
} else {
  console.log("bloco else");
}

// switch

let isAuthenticated = undefined;

switch (isAuthenticated) {
  case false:
    console.log("case false");
    break;
  case true:
    console.log("case true");
    break;
  default:
    console.log("case default");
    break;
}
