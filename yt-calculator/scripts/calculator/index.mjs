import {
  sum,
  subtraction,
  division,
  multiplication
} from "./utils/math-operator.mjs";

function handleMathOperator(signalOperator, values) {
  const { valuePrevious, valueNext } = values;

  switch (signalOperator) {
    case "-":
      const result = subtraction(valuePrevious, valueNext);
      return result;

    case "+":
      const sumResult = sum(valuePrevious, valueNext);
      return sumResult;

    case "/":
      const divisionResult = division(valuePrevious, valueNext);
      return divisionResult;

    case "x":
      const multiplicationResult = multiplication(valuePrevious, valueNext);
      return multiplicationResult;
  }
}

export { handleMathOperator };
