const addNumbers = (numOne, numTwo) => {
    return parseInt(numOne) + parseInt(numTwo);
}

const subNumbers = (numOne, numTwo) => {
    return numOne - numTwo;
}

const divideNumbers = (numOne, numTwo) => {
    return numOne / numTwo;
}

let numOne = prompt("Please enter number 1");
let numTwo = prompt("Please enter number 2");

document.getElementById("calculator").innerHTML = `${numOne} + ${numTwo} = ${addNumbers(numOne, numTwo)} <br> ${numOne} - ${numTwo} = ${subNumbers(numOne, numTwo)}  <br> ${numOne} / ${numTwo} = ${divideNumbers(numOne, numTwo)}`;



