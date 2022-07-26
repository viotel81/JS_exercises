let value1 = prompt("Hello! Please think of and enter a numerical value:");
let value2 = prompt("Now enter a second numerical value:");
let resultAddition = Number.parseInt(value1) + Number.parseInt(value2);
let resultSubstraction = value1 - value2;
let resultMultiplication = value1 * value2;
let resultDivision = value1 / value2;
alert("Thank you! Your results are:\n" + resultAddition + " after adding,\n" + resultSubstraction + " after substracting,\n" + resultMultiplication + " after multiplying,\n" + resultDivision + " after dividing!");

let firstName = prompt("Please enter your First Name:");
let lastName = prompt("Please enter your Last Name:");
alert("Hello " + firstName + " " + lastName + "!");
