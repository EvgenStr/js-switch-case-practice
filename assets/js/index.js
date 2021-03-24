let inp = prompt("Enter day (1-31):");
let num1 = prompt("Enter number one:");
let num2 = prompt("Enter number two:");
let operation = prompt("Enter operation (+, -, *,/ ):");

switch (Boolean(inp)) {
  case inp <= 10: {
    console.log(inp, "- first decade");
    break;
  }
  case inp <= 20: {
    console.log(inp, "- second decade");
    break;
  }
  case inp <= 31: {
    console.log(inp, "- third decade");
    break;
  }
  default: {
    console.log("Wrong value, enter a day within from 1 to 31");
  }
}

isNaN(num1 - num2) ? console.log("Invalid number") : calculation();
/**
 * function calculates values and output value in console
 */
function calculation() {
  switch (operation) {
    case "+": {
      console.log(`Result: ${num1} + ${num2} = ${+num1 + +num2}`);
      break
    }
    case "-": {
      console.log(`Result: ${num1} - ${num2} = ${+num1 - +num2}`);
      break
    }
    case "*": {
      console.log(`Result: ${num1} * ${num2} = ${+num1 * +num2}`);
      break
    }
    case "/": {
      console.log(`Result: ${num1} / ${num2} = ${+num1 / +num2}`);
      break
    }
    default: {
      console.log("Wrong operation: ", operation);
    }
  }
}

// console.log(Boolean(operation));
// console.log(!isNaN(num1 - num2));