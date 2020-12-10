/*
let js = "awsome";
if (js === "awsome") alert("JavaScript is the BEST!");
// alert will show in console

20 + 10;
// this wont show in consol or in browser

console.log(20 + 8 + 23 - 10);
// we need to tell javascript explicitly that it should print the
// output in the consol

let lesson = "first";
// declaring a variable and assigning a value

"Helena";
console.log("Helena NY");
console.log("Helena NY");
console.log("Helena NY");
console.log("Helena NY");

35;
console.log(35);
// we can just type value and not assigning it to a variable
// javascript wont give an error but this is not the convention and not
// efficient

let firstName = "Helena";
console.log(firstName);
// we declare a variable called firstName and then assign it a value of "Helena"
// we can then consol the variable that contains the value
// the output to the console will be "Helena"

let new = 22;
let function = 22;
// new, and function are reserved words in javascript and you can not
// use the declaring a variable

let name = "Helena";
// name is not reserved but its kinda reserved so it might cause problems
// if you use it - so dont!

let week1 = 45;
let week2 = 46;
// this is ok we declare two variables called week1 and week2
// but to be really clear and to make our code easier to read

let lastWeek = 45;
let currentWeek = 46;
// we can name them like this if its actually the current weel and last week
// this makes it more clear of what value our variables actually holds

let firstName;
// value of firstName is undefined
// its undefined because we only declared a variable we didnt assign a value to it

firstName = "Helena";
// now we assign a value to the variable and its no longer underfined instead its "Helena"

// DATA TYPES

// Boolean values
// a boolean can only be true or false, we use it to make descisions in our code
true;
console.log(true);
// boolean value

let youWillLearnJs = true;
console.log(youWillLearnJs);
// right way of decalring a boolean variable and assgning the value to true

youWillLearnJs = false;
// we change the value of our variable from true to false
console.log(youWillLearnJs);
// this time when we console log it it will return false

// we can use the built in operator typeof to know what data type our value is
// OBS!!!! DATA TYPE AND VALUE ARE NOT THE SAME
console.log(typeof "Helena"); 
// here the DATA TYPE is a string and the VALUE is "Helena"
console.log(typeof 35); // data typen number och värdet 35
// here the DATA TYPE is number and the VALUE is 35
console.log(typeof youWillLearnJs); // data type boolean och värdet false
// here the DATA TYPE is a boolean and the value is false

console.log("Helena"); 
console.log(35); 
console.log(youWillLearnJs);
// above we only log the value to the console we do not log what data type it is 

console.log(20 + 8 + 23 - 10);
// you can use operators to concatinate and subtract in javascript
// you can concatinate numbers aswell as strings

let firstName = 35;
//console.log(firstName);
let lastName = "Sara";

console.log(firstName);
console.log(lastName);

firstName = 20;
lastName = 35;

console.log(firstName);
console.log(lastName);

// above we are chaning the value of the two variables using the assignment operator =

let day;
console.log(day);

day = "Wedenesday";
console.log(day);

console.log(typeof null);
// typeof null is actually an error i javascript and will give you the result object
// which is not true at all because we learned earlier that null is one of the 7
// primitive values
// but it costs more to fix this than just leave it because of legacy reasons in javascript
// you will probably never encounbter this or use it at alla but now you know :)

// LET CONST VAR

// keywords that we use to declare varibles

// we use let to declare variables where the value might change in the future

// we use const when the value cant change
const me = "Helena";
//me = "Hej";
// the line abve will not run it will throw an exeption

//const birthYear = 1985;

// convention is to use const as much as you can and only use let in some cases where you really
// need to change the value later
// this will come natural to you as we go further in this course
// so from now on you use const and only use let when you really have to

var job = "developer";
// var is the old way of declarung variables and we will not use it
// it was used before es6
job = "teacher";
// you can change the value of a variable that is declared with var
// let and var are kinda like but underneath they really arent

// OPERATORS
// variety of different operators like mathematic, comparison, logical, assignment etc.. 

const birthYear = 2020 - 1985;
// assignment operator is the most common =
console.log(birthYear);

//const brothersAge = 2020 - 1991;
//console.log(brothersAge);

const now = 2020;
const myAge = now - 1985;
const brothersAge = now - 1991;
console.log(myAge, brothersAge);
// we can log both variables to the console separating them with a comma

console.log(myAge * 2, myAge / 10);
// we can use javascript to calculate stuff for us

console.log(myAge * 3, brothersAge);


let x = 10 + 5; // x = 15
console.log(x);
x += 10; // x = x + 10 value is now 25
console.log(x);
x *= 4; // x = * 4 = 100 value is now 100
console.log(x);
x++; // we increadse the value with 1 using the plus operator
console.log(x);
x--; // we decrease the value with one 
console.log(x);
*/

const sarasAge = 15;

const isFullAge = sarasAge >= 18;
// here we actually declare a boolean variable that contains the true or false
// depending on if sarasAge is higher than 18 or exactly 18
// the result here is then false since sarasAge is 15 as we declared above
console.log(isFullAge);
// false
console.log(typeof isFullAge);
// data type: boolean

const now = 2020;
console.log(now - 1991 > now - 1985);
// now we are asking javascript to determine if now (that has the value 2020) - 1991
// is bigger than now (2020) - 1985
// the result in the console is false since its not bigger
// but how does javascript know what to calculate first? 
// More about that tomorrow :)


