//Ternary operators
function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//A constructor function utilizing "new and "this"
function Chainsaw (Make, Model, Engine_Size, Bar_Length) {
    this.Chainsaw_Make = Make;
    this.Chainsaw_Model = Model;
    this.Chainsaw_Engine_Size = Engine_Size;
    this.Chainsaw_Bar_Length = Bar_Length;
}
var Pete = new Chainsaw ("Husquavarna", "390xp", "95 cc", "33 inches");
var Bill = new Chainsaw ("Stihl", "550", "75cc", "28 inches");
var Bob = new Chainsaw ("Stihl", "880", "110cc", "48inches");

//A function to display the esults of the constructor
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Pete likes to use a " + Pete.Chainsaw_Make + ". His prefered model is the " + Pete.Chainsaw_Model +
    ", which has a " + Pete.Chainsaw_Engine_Size + " engine." + " With a bar length of " + Pete.Chainsaw_Bar_Length + ".";
}

function myFunction1() {
    document.getElementById("New_and_This").innerHTML = 
    "Bill likes to use a " + Bill.Chainsaw_Make + ". His prefered model is the " + Bill.Chainsaw_Model +
    ", which has a " + Bill.Chainsaw_Engine_Size + " engine." + " With a bar length of " + Bill.Chainsaw_Bar_Length + ".";
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Bob likes to use a " + Bob.Chainsaw_Make + ". His prefered model is the " + Bob.Chainsaw_Model +
    ", which has a " + Bob.Chainsaw_Engine_Size + " engine." + " With a bar length of " + Bob.Chainsaw_Bar_Length + ".";
}

//Nested Functions

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}