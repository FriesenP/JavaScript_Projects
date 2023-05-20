//addition function
function addition_function() {
    var addition = 6+2;
    document.getElementById("math").innerHTML = + addition;
}

//subtraction function
function subtraction_function() {
    var subtraction = 6-2;
    document.getElementById("math1").innerHTML = + subtraction;
}

//multiplication function
function multiplication() {
    var multiplication = 6*8;
    document.getElementById("math2").innerHTML = + multiplication;
}

//division function
function division() {
    var division = 48 / 6;
    document.getElementById("math3").innerHTML = + division;
}

//multiple math function at once
function more_math() {
    var simple_math = (1+2) * 10 / 2 - 5;
    document.getElementById("math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

//modulus operator
function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

//Unary Operator - EXAMPLE: In 5+6, the operands are 5 and 6. The “+” is the operator. A “unary operator” is an operation that only contains a single operand. An example of this would be + 5.
function negation_operator() {
    var x = 10;
    document.getElementById("math6").innerHTML = -x;
}

//Increment and Decrement Operators
function Increment_operator() {
    var x = 5;
    x++;
    document.getElementById("math7").innerHTML = x++;
}

//decrement operator
function decrement_operator() {
    var x = 5.25;
    x--;
    document.getElementById("math8").innerHTML = x--;
}

//Return random number
window.alert(Math.random() * 100);

//Math objects
document.getElementById("math9").innerHTML = Math.PI;

