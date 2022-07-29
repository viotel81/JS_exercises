let input1 = prompt("Hello! Please think of and enter a numerical value:");
let input2 = prompt("Now enter a second numerical value:");
let input3 = prompt("Now choose the action for the values provided: '+', or '-', or '*', or '/':");
let parsed1 = Number.parseInt(input1);
let parsed2 = Number.parseInt(input2);
let resultAddition = parsed1 + parsed2;
let resultConcat = input1 + input2;
let resultSubstraction = input1 - input2;
let resultMultiplication = input1 * input2;
let resultDivision = input1 / input2;

if (!isNaN(input1) && !isNaN(input1)) {
    switch (input3) {
        case "+":
            alert("Thank you! Your result is: " + resultAddition);
            break;
        case "-":
            alert("Thank you! Your result is: " + resultSubstraction);
            break;
        case "*":
            alert("Thank you! Your result is: " + resultMultiplication);
            break;
        case "/":
            alert("Thank you! Your result is: " + resultDivision);
            break;
        default:
            alert("Please check the action provided and try again!");
    }
} else {
    input3 == "+" ? alert("Thank you! Your result is: " + resultConcat) : alert("Please check the values provided and try again!");
}
