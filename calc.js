document.addEventListener('DOMContentLoaded', calcApp);

function calcApp() {

    let buttons = document.querySelectorAll(".main-wrapper button");

    for (let currentElementIndex = 0; currentElementIndex < buttons.length; currentElementIndex++) {
        buttons[currentElementIndex].addEventListener('click', getCurrentNumberValue);
    }

}

let currentLeftNumberValue = "";
let currentOperatorValue = "";
let currentRightNumberValue = "";
let currentValue = "";

let mainDisplay = document.getElementById("main-display");
let calcAnswer = document.getElementById("calc-answer");

function getCurrentNumberValue(event) {

    currentValue = event.srcElement.value;
    calcAnswer.innerText = "";

    if (currentValue === "=") return calculate();

    if (isNaN(currentValue)) {
        currentOperatorValue = currentValue;
    }

    if (currentOperatorValue.length < 1) currentLeftNumberValue += currentValue;

    if (currentLeftNumberValue.length > 0 && currentOperatorValue.length > 0 && !isNaN(currentValue)) {
        currentRightNumberValue += currentValue;
    }

    mainDisplay.innerText = `${currentLeftNumberValue} ${currentOperatorValue} ${currentRightNumberValue}`;
}

function calculate() {
    let operationValue = 0;

    if (currentOperatorValue === "+") {
        operationValue = add(+currentLeftNumberValue, +currentRightNumberValue);
    }

    if (currentOperatorValue === "-") {
        operationValue = sub(+currentLeftNumberValue, +currentRightNumberValue);
    }

    if (currentOperatorValue === "/") {
        operationValue = division(+currentLeftNumberValue, +currentRightNumberValue);
    }

    if (currentOperatorValue === "*") {
        operationValue = multiply(+currentLeftNumberValue, +currentRightNumberValue);
    }

    calcAnswer.innerText += operationValue;

    resetValue();
}

function resetValue(){
    currentLeftNumberValue = "";
    currentOperatorValue = "";
    currentRightNumberValue = "";
}