//Scope global variable

var x = 10; // varaible is out side of the function so would be considered global
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


//scope local variable

function Add_numbers_1() {
    var y = 10;// variable is inside the function so it is local
    document.write(20 + y + "<br>");
}
function Add_numbers_2() {
    var y = 10
    document.write(y + 100);
    }
Add_numbers_1();
Add_numbers_2();

//console log

function Add_numbers_1() {
    var y = 10;
    console.log(20 + y);
}
function Add_numers_2() {
    var y = 10;
    console.log(y +  100);
}
Add_numbers_1();
Add_numbers_2();

//if statements

if (1 < 2) {
    document.write("The left number is smaller then the number on the right.")
}

function get_Date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function age_verification(){
    if (16 == 16) {
        document.getElementById("Sixteen").innerHTML = "You are able to get a drivers license!";
    }
}

//Else statements

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else If statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
