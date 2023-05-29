//while loop
function count_to_ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

// For Loop
var Instruments = ["Guitar",  "Drums",  "Piano",  "Bass", "Violin", "Trumpet", "Flute"]; 
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

//Arrays and objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//document.getelementbyid()
function tree_species() {
    var Trees = [];
    Trees[0] = "Cedar";
    Trees[1] = "Alder";
    Trees[3] = "Fir";
    document.getElementById("Array").innerHTML = "This is a picture of a " + Trees[0] + " tree.";
}

//const keyword
function constant_function() {
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "Blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "the cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//let keyword
var X = 82;

//objects
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

