import {
  buttonsNumbers,
  buttonsSignalOperators,
  keyValueNext,
  keyValuePreview,
  keyValuePrevious,
  buttonEqual,
  buttonClearEntry,
  signalOperatorElement,
  signalEqualsElement
} from "./dom.mjs";

import { handleMathOperator } from "./calculator/index.mjs";

function verifyIfExistsSomethingTyped() {
  const valuePrevious = Number(keyValuePrevious.textContent);

  const someNumberWasEntered = valuePrevious;
  return someNumberWasEntered ? true : false;
}

function handleClickButtonNumber(keyValue) {
  const signalOperatorExists = signalOperatorElement.childNodes.length;

  if (signalOperatorExists) {
    keyValueNext.innerHTML += keyValue;
  } else {
    keyValuePrevious.innerHTML += keyValue;
  }
}

function handleClickButtonSignalOperator(signalOperator) {
  signalOperatorElement.innerHTML = signalOperator;
}

buttonsNumbers.forEach(button => {
  const content = button.textContent;
  const keyValue = Number(content);

  button.addEventListener("click", () => handleClickButtonNumber(keyValue));
});

buttonsSignalOperators.forEach(button => {
  button.addEventListener("click", () => {
    const someNumberWasEntered = verifyIfExistsSomethingTyped();

    if (!someNumberWasEntered) {
      alert("Comece digitando algum número");
      return;
    }

    const signalOperator = button.textContent;

    handleClickButtonSignalOperator(signalOperator);
  });
});

buttonEqual.addEventListener("click", () => {
  const someNumberWasEntered = verifyIfExistsSomethingTyped();

  if (!someNumberWasEntered) {
    alert("Digite algo na calculadora");
    return;
  }

  const valuePrevious = Number(keyValuePrevious.textContent);
  const valueNext = Number(keyValueNext.textContent);

  const mathOperator = signalOperatorElement.textContent.trim();

  const values = { valuePrevious, valueNext };

  const result = handleMathOperator(mathOperator, values);
  keyValuePreview.innerHTML = result;

  signalEqualsElement.classList.remove("hide");
});

buttonClearEntry.addEventListener("click", () => {
  keyValuePrevious.innerHTML = "";
  keyValueNext.innerHTML = "";

  signalOperatorElement.innerHTML = "";
  keyValuePreview.innerHTML = "";

  signalEqualsElement.classList.add("hide");
});
