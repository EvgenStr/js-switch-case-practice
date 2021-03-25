let inp = prompt("Enter day (1-31):");
const num1 = +prompt("Enter number one:");
const num2 = +prompt("Enter number two:");
let operation = prompt("Enter operation (+, -, *,/ ):");

switch (true) {
  case inp >0 && inp <= 10: {
    console.log(inp, "- first decade");
    break;
  }
  case inp > 10 && inp <= 20: {
    console.log(inp, "- second decade");
    break;
  }
  case inp >20 && inp <= 31: {
    console.log(inp, "- third decade");
    break;
  }
  default: {
    console.log("Wrong value, enter a day within from 1 to 31");
  }
}

// isNaN(num1 - num2) ? console.log("Invalid number") : calculation();
console.log(calculation(num1, num1,operation))

/**
 * function calculates values and output value in console
 */
function calculation(num1, num2, operation) {
  if (isNaN(num1 - num2)) return false;
  switch (operation) {
    case "+": {
       return `Result: ${num1} + ${num2} = ${num1 + num2}`;
    }
    case "-": {
      return `Result: ${num1} - ${num2} = ${num1 - num2}`;
    }
    case "*": {
      return `Result: ${num1} * ${num2} = ${num1 * num2}`;
    }
    case "/": {
      return `Result: ${num1} / ${num2} = ${num1 / num2}`;
    }
    default: {
      return `Wrong operation:  ${operation}`;
    }
  }
}

// console.log(Boolean(operation));
// console.log(!isNaN(num1 - num2));