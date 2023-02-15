function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}
function pin() {
  const code = generatePin() + "";
  if (code.length == 4) {
    return code;
  } else {
    return pin();
  }
}
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

function successOrFailMessage(successDisplayValue , failDisplayValue) {
  const pinSuccessMessage = document.getElementById("pin-success");
  const pinFailMessage = document.getElementById("pin-fail");
  pinSuccessMessage.style.display = successDisplayValue;
  pinFailMessage.style.display = failDisplayValue;
}

document.getElementById("generate-pin-btn").addEventListener("click", function () {
    const generatedPin = pin();
    const displayPinField = document.getElementById("display-pin");
    displayPinField.value = generatedPin;
    document.getElementById('input-number').value = '' ;
    successOrFailMessage('none' , 'none') ;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const inputNumberField = document.getElementById("input-number");
    const previousNumber = getInputFieldValueById('input-number')

    if (isNaN(number)) {
      if (number == "C") {
        inputNumberField.value = "";
        successOrFailMessage('none' , 'none') ;
      } else if (number == "<") {
        const digits = previousNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        inputNumberField.value = remainingDigits;
      }
    } else {
      const newNumber = previousNumber + number;
      inputNumberField.value = newNumber;
    }
  });

document.getElementById("btn-submit").addEventListener("click", function () {
  const displayPin = getInputFieldValueById('display-pin')
  const inputPin =getInputFieldValueById('input-number')

  if (displayPin === inputPin) {
    successOrFailMessage('block' , 'none')  ;
  } else {
    successOrFailMessage('none' , 'block') 
  }
});
