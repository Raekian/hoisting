// 1
console.log(hello); // logs undefined
var hello = 'world'; // defines hello as 'world'

// 2
var needle = 'haystack';// defines needle as 'haystack'
test(); //creates a fuction called test
function test(){
    var needle = 'magnet'; //redefines needle as magnet
    console.log(needle); // console logs needle
}

// 3
var brendan = 'super cool'; //defines brendan
function print(){
    brendan = 'only okay'; //does nothing because funciton is not called
    console.log(brendan);
}
console.log(brendan); // console logs brendan

// 4
var food = 'chicken'; // defines food
console.log(food); // logs food
eat(); // creates new function
function eat(){
    food = 'half-chicken'; //redefines food
    console.log(food); // logs food
    var food = 'gone'; // redifines food but does not do anything
}

// 5
mean(); //calls a function that doesn't exist
console.log(food); // logs nothing because function was not created properly
var mean = function() { //attempts to store a function in a variable but does not
    food = "chicken"; //would redefine food
    console.log(food); // would log food
    var food = "fish";//would  redefine food again
    console.log(food); //would log food
}
console.log(food); // logs nothing because function was not created properly

// 6
console.log(genre); //undefined, variable is defined after log
var genre = "disco"; //defines genre
rewind(); //calls a function
function rewind() { //creates new function
    genre = "rock"; //redefines genre
    console.log(genre); // logs genre
    var genre = "r&b"; //redefines genre
    console.log(genre); //logs genre
}
console.log(genre); // logs the original genre

// 7
dojo = "san jose"; // defines dojo
console.log(dojo); // logs dojo
learn(); // calls function
function learn() { // creates function
    dojo = "seattle"; // redifines dojo
    console.log(dojo); // logs dojo
    var dojo = "burbank"; // redefines dojo
    console.log(dojo); // logs dojo
}
console.log(dojo); // logs original dojo

// // 8
// console.log(makeDojo("Chicago", 65)); // calls function with var arguements
// console.log(makeDojo("Berkeley", 0));// calls function with var arguements
// function makeDojo(name, students){ // creates function that requires name & students parameters
//     const dojo = {}; // creates an object with arguements passed into it
//     dojo.name = name; // passes name in
//     dojo.students = students; // passes students in
//     if(dojo.students > 50){ // if statement checking number of students
//         dojo.hiring = true;// if there are more than 50 students hiring = true
//     }
//     else if(dojo.students <= 0){ // if there are less students dojo = "closed for now"
//         dojo = "closed for now"; // redefines dojo
//     }
//     return dojo;
// }
