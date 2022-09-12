function caculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        return "Can't divide by 0!";
      } else {
        return num1 / num2;
      }
      break;
    default:
      return "Invalid Operator";
  }
}

console.log(caculator(2, "+", 2));
console.log(caculator(2, "-", 2));
console.log(caculator(2, "*", 2));
console.log(caculator(4, "/", 2));
console.log(caculator(4, "/", 0));
console.log(caculator(4, ".", 0));
