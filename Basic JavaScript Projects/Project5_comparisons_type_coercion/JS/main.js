//"Type Of" operator
document.write(typeof "Word");
document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}
//infinity
function infinity() {
    document.write(2E310)
}
//negative infinity
function neg_infinity() {
    document.write(-3E310);
}

//Boolean
function boolean_true() {
    document.write(10 > 2);
}

function boolean_false() {
    document.write(10 < 2);
}
//console log display
console.log(2 + 2);
console.log(10>20);

//double equals
function double_equals() {
    document.write(10==10);
}

//triple equal sign with numbers
function triple_equal_true() {
    var x = 10; 
        y = 10;
    document.write(x === y);
}

function triple_equal_false() {
    var x = 82; 
        y = "82";
document.write(x === y);
}

//triple equal signs with data
function triple_equal_data() {
    var A= "magnus";
        B= "magnus";
        document.write(A === B);
}

//Logical operators and =&& or=|| not=!
function and_operator() {
    document.write(5 > 2 && 10 > 4);
}

function or_operator() {
    document.write(5 > 10 || 10 > 4);
}

function not_operator() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}


