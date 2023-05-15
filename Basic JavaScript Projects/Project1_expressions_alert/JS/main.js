//-----ASSIGNING VARIABLES AND STRIGNS TO VARIABLES-----//
var A = "hello, world! Are you there still?";
var B = ("\"Be who you say are and say what you feel,"
+"because those who mind don\'t matter and those who matter don\'t mind.\""+"-Dr.Suess");
//----ALERT WINDOW----//
window.alert(A);
//----WILL DISPLAY WHAT IS INSIDE THE PARENTHESIS----//
document.write(B);

//-----ESCAPING-----//
document.write("lisa told bart, \"knock it off, bart! or i'll tell dad!\"<br>\"eat my shorts!\"bart responded.");
document.write("How\'s\ it going? said Bill\'s\ dad.");
document.write("\"Be who you say are and say what you feel,"
+"because those who mind don\'t matter and those who matter don\'t mind.\""+"-Dr.Suess");

//-----MULTIPLE VARIABLES-----//
var family = "The People", Dad="Person1", Mom="Person2", Daughter="Person3", Son="Person4";
document.write(Dad);

//----EXPRESSIONS----//
document.write(3+3);

//---FUNCTIONS---//
function My_First_Function() {
	var str = "This is the button text!";
	document.getElementById("Button_Text").innerHTML = str;
}
