let inp = prompt("Enter day (1-31):");
const num1 = +prompt("Enter number one:");
const num2 = +prompt("Enter number two:");
const operation = prompt("Enter operation (+, -, *,/ ):");

switch (true) {
  case inp > 0 && inp <= 10: {
    console.log(inp, "- first decade");
    break;
  }
  case inp > 10 && inp <= 20: {
    console.log(inp, "- second decade");
    break;
  }
  case inp > 20 && inp <= 31: {
    console.log(inp, "- third decade");
    break;
  }
  default: {
    console.log("Wrong value, enter a day within from 1 to 31");
  }
}

switch (true) {
  case isNaN(num1 - num2): {
    console.log("error");
    break;
  }
  case operation === "+": {
   calc(num1, num2, sum);
    break;
  }
  case operation === "-": {
   calc(num1, num2, sub);
    break;
  }
  case operation === "*": {
    calc(num1, num2, mul);
    break;
  }
  case operation === "/": {
    calc(num1, num2, div);
    break;
  }
  default: {
  }
}

function calc(a, b, cb) {
  console.log(cb(a, b), cb)
  return cb(a, b);
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}


// isNaN(num1 - num2) ? console.log("Invalid number") : calculation();
// console.log(calculation(num1, num1,operation))
// console.log(Boolean(operation));
// console.log(!isNaN(num1 - num2));