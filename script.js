function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

console.log(add(3, 4));
console.log(sub(8, 3));
console.log(multiply(10, 2));
console.log(division(10, 2));


// let addSectionElement = document.getElementById("add-section");
// addSectionElement.children

let addButton = document.getElementById("add-button");

let addSectionAnswer = document.getElementById("add-section-answer");

addSectionAnswer.style.display = 'none';

function addNumber() {
    let addInputOne = document.getElementById("add-input-one");
    let addInputTwo = document.getElementById("add-input-two");
    // let addSectionAnswer = document.getElementById("add-section-answer");

    addSectionAnswer.style.display = 'inline-block';

    addSectionAnswer.innerText = "Answer is: ";

    let addNum = add(Number(addInputOne.value), Number(addInputTwo.value));

    addSectionAnswer.innerText += addNum;
}

addButton.addEventListener("click", addNumber);

let subButton = document.getElementById("sub-button");

subButton.addEventListener("click", subNumber);

let subSectionAnswer = document.getElementById("sub-section-answer");

subSectionAnswer.style.display = "none";

function subNumber() {
    let subFirstInput = document.getElementById("sub-first-input");
    let subSecondInput = document.getElementById("sub-second-input");
    

    subSectionAnswer.style.display = "inline-block";

    subSectionAnswer.innerText = "Answer is: ";

    let subNum = sub(Number(subFirstInput.value), Number(subSecondInput.value));

    subSectionAnswer.innerText += subNum;

}

subButton.addEventListener("click", subNumber);

let multiplyButton = document.getElementById("multiply-button");

multiplyButton.addEventListener("click", multiplyNumber);

let multiplySectionAnswer = document.getElementById("multiply-section-answer");

multiplySectionAnswer.style.display = "none";

function multiplyNumber() {
    let multiplyFirstInput = document.getElementById("multiply-first-input");
    let multiplySecondInput = document.getElementById("multiply-second-input");
    

    multiplySectionAnswer.style.display = "inline-block";

    multiplySectionAnswer.innerText = "Answer is: ";

    let multiplyNum = multiply(Number(multiplyFirstInput.value), Number(multiplySecondInput.value));

    multiplySectionAnswer.innerText += multiplyNum;

}



multiplyButton.addEventListener("click", multiplyNumber);

let divisionButton = document.getElementById("division-button");

divisionButton.addEventListener("click", divisionNumber);

let divisionSectionAnswer = document.getElementById("division-section-answer");

divisiomSectionAnswer.style.display = "none";

function divisionNumber() {
    let divisionFirstInput = document.getElementById("division-first-input");
    let divisionSecondInput = document.getElementById("division-second-input");
    

    divisionSectionAnswer.style.display = "inline-block";

    divisionSectionAnswer.innerText = "Answer is: ";

    let divisionNum = division(Number(divisionFirstInput.value), Number(divisionSecondInput.value));

    divisionSectionAnswer.innerText += divisionNum;

}
//divisionButton.addEventListener("click", divisionNumber)


//let subButton = document.getElementById("sub-button2");


// console.log(addSectionElement.children[3])
