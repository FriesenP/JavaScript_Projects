//Concatenate
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice method
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//to upper case method
function upper_case() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML =
    text.toUpperCase();
}

//search() method
function Search_method() {
    let text = "Douglas fir trees are tall, Cedars are tall too"
    let position = text.search("tall");
    document.getElementById("search").innerHTML = position;
}

//Numbers Methods
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//tofixed method
function tofixed_method() {
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

//valueof method
function valueof_method() {
    let text = "Hello World!";
    let result = text.valueOf();    
    document.getElementById("valueof").innerHTML = result;
}