const keyValuePreview = document.querySelector(".result-preview");
const keyValuePrevious = document.querySelector(".previous-value");
const keyValueNext = document.querySelector(".next-value");
const signalOperatorElement = document.querySelector(".signal-operator");

const signalEqualsElement = document.querySelector(".signal-equals");

const buttonsNumbers = document.querySelectorAll("#button-number");
const buttonsSignalOperators = document.querySelectorAll(
  ".button-signal-operator"
);

const buttonEqual = document.querySelector("#button-equal");
const buttonClearEntry = document.querySelector("#clear-entry");

export {
  keyValueNext,
  keyValuePreview,
  keyValuePrevious,
  signalEqualsElement,
  buttonsNumbers,
  buttonsSignalOperators,
  buttonEqual,
  buttonClearEntry,
  signalOperatorElement,
  keyValueNext
};
