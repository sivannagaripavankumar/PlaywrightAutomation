 
 // declarations
/*
let a111 = 10;
var b1 = 20;
const c1222 = 30;
let d1 = a111 + b1122;
console.log(d1);
*/
// Operators In JavaScript  
// Category       Operators       
// Arithmetic     +, -, *, /, %, **x + y
// Assignment     =, +=, -=, *=, /=x += 5
// Comparison     ==, ===, !=, !==, >, <x > y
// Logical        &&, ||x && y
// Conditional     ? :x > y ? "Yes" : "No" 
// type            Typetypeof
//                 instanceof 
 

// Arithmetic operators
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// % Modulus (Remainder)
// ** Exponentiation
// ++ Increment
// -- Decrement


// Addition 
let a1 = 10;
let b1 = 20;
let c1 = a1 + b1;
console.log(c1);

// Subtraction
let a2 = 10;
let b2 = 20;
let c2 = a2 - b2;
console.log(c2);

// Multiplication
let a3 = 10;
let b3 = 20;
let c3 = a3 * b3;
console.log(c3);

// Division
let a4 = 10;
let b4 = 2;
let c4 = a4 / b4;
console.log(c4);

// Modulus (Remainder)
let a5 = 100;
let b5 = 2;
let c5 = a5 % b5;
console.log(c5);

// Exponentiation
let a6 = 18;
let b6 = 2;
let c6 = a6 ** b6;
console.log(c6);

// Increment
let a7 = 10;
let b7 = a7++;
console.log(a7);

// Decrement
let c7 = 13;
let d7 = c7--;
console.log(d7);

// Assignment Operators
// = equal to
// += add and assign
// -= subtract and assign
// *= multiply and assign
// /= divide and assign
// %= modulus and assign

// equal to assignment
let x1 = 10;
let y1 = 20;
console.log(x1 = y1);

// addition assignment
let x2 = 10;
let y2 = 20;
console.log(x2 += y2);

// subtraction assignment
let x3 = 10;
let y3 = 20;
console.log(x3 -= y3);

// multiplication assignment
let x4 = 10;
let y4 = 20;
console.log(x4 *= y4);

// Division assignment
let x5 = 10;
let y5 = 20;
console.log(x5 /= y5);

// modulus assignment
let x6 = 10;
let y6 = 20;
console.log(x6 %= y6);

// Comparison Operators
// == equal to
// != not equal to
// === equal to and data type
// !== not equal to and data type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// equal to
let x7 = 10;
let y7 = 20;
console.log(x7 == y7);

// not equal to
let x8 = 10;
let y8 = 20;
console.log(x8 != y8);

// equal to and data type
let x9 = 10;
let y9 = "10";
console.log(x9 === y9);

// not equal to and data type
let x10 = 10;
let y10 = "10";
console.log(x10 !== y10);

// greater than
let x11 = 10;
let y11 = 20;
console.log(x11 > y11);

// less than
let x12 = 10;
let y12 = 20;
console.log(x12 < y12);

// greater than or equal to
let x13 = 10;
let y13 = 20;
console.log(x13 >= y13);

// less than or equal to
let x14 = 10;
let y14 = 20;
console.log(x14 <= y14);
 
// Logical Operators
// and &&
let isTrue1 = true;
let isTrue2 = true;
console.log(isTrue1 && isTrue2);

// or ||
let isTrue3 = true;
let isFalse1 = false;
console.log(isTrue3 || isFalse1);

// not !
let isTrue4 = true;
console.log(!isTrue4);

// Ternary Operator / Conditional
let value1 = 10;
let result = (value1 >= 10) ? "Yes" : "No";
console.log(result);

// Type Operators
// typeof
// instanceof
console.log([1, 2, 3] instanceof Array);

// Functions
// without arguments and no return value
function greetMessage() {
    console.log("Hello");
}
greetMessage();

// with arguments and no return value
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 10);

// without arguments and return value
function returnNumber() {
    return 10;
}
console.log(returnNumber());

// with arguments and return value
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

// Function Expression
const addExpression = function(a, b) {
    return a + b;
};
console.log(addExpression(5, 10));

// Arrow Function
const arrowAdd = (a, b) => {
    return a + b;
};
console.log(arrowAdd(5, 10));

// Data Types
// 1. Primitive Data Types
// 2. Reference/Complex Data Types

// Primitive Data Types
// Number
let numValue = 10;
console.log(numValue);

// String
let greeting = "Hello";
console.log(greeting);

// Boolean
let isActive = true;
console.log(isActive);

// Null
let nullValue = null;
console.log(nullValue);

// Undefined
let undefinedValue;
console.log(undefinedValue);

// 2. Reference/Complex Data Types
// Object
let person = {
    name: "John",
    age: 30
};
console.log(person);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Function
function sayHello(name) {
    console.log(name);
}
sayHello("John");

// Array Declarations
let array1 = [1, 2, 3, 4];
console.log(array1);
let colors = new Array("red", "green", "blue");
console.log(colors);

 
// Adding elements to an array
// push
// unshift

// Removing elements from an array
// pop
// shift

// Pop - remove end of array
let numbers1 = [10, 20, 30, 40];
numbers1.pop();
console.log(numbers1);

// Shift - remove start of array
let numbers2 = [10, 20, 30, 40];
numbers2.shift();
console.log(numbers2);

// Modify and access array elements
// index
// splice
// slice

let numbers3 = [5, 10, 15, 20];
console.log(numbers3[0]); // access first element by using index 0
console.log(numbers3[1]); // access second element by using index 1

let colorPalette = ["pink", "purple", "orange"];

// splice - add or remove elements from array
colorPalette.splice(0, 2);
console.log(colorPalette);
colorPalette.splice(1, 2, "violet"); // adding item
console.log(colorPalette);

// slice - extract elements from array
let numbers4 = [5, 10, 15, 20, 25];
console.log(numbers4.slice(1, 3)); // extract elements from index 1 to 3
console.log(numbers4.slice(1)); // extract elements from index 1 to the end

// Array search and sort
// indexOf()
// includes()
// sort()
// reverse

let colorSet = ["blue", "green"];
console.log(colorSet.indexOf("green")); // returns index

console.log(colorSet.includes("blue")); // returns a boolean indicating presence
let colorArray = ["blue", "green", "yellow"];
console.log(colorArray.sort()); // sort array in ascending order
console.log(colorArray.reverse()); // reverse the array elements

// Array iteration methods
// forEach()
// map()
// filter()
// reduce()
// concat()
// join()

let numberArray = [2, 4, 6, 8, 10];
numberArray.forEach(num => console.log(num)); // forEach() method

let squareArray = [1, 2, 3, 4, 5];
let squares = squareArray.map(num => num * num); // map() method creates a new array
console.log(squares);

let filterArray = [1, 2, 3, 4, 5];
let filteredArray = filterArray.filter(num => num > 3); // filter() method creates a new array
console.log(filteredArray);

let sumArray = [1, 2, 3, 4, 5];
let sum = sumArray.reduce((acc, current) => acc + current, 0); // reduce()
console.log(sum);

let array12 = [1, 2, 3];
let array2 = [6, 7, 8];
let combinedArray = array12.concat(array2); // concat() method
console.log(combinedArray);

let joinArray = [1, 2, 3];
let joinedString = joinArray.join(" -> "); // join() method
console.log(joinedString);

// Array destructuring
let destructureArray = [1, 2, 3, 4, 5];
let [firstElement, secondElement] = destructureArray; // array destructuring
console.log(firstElement);
console.log(secondElement);
 
// Control constructs
// if
// else if
// else
// switch

// while
// do while

// for
// for of
// for in

// break
// continue

let num1 = 3;
if (num1 > 1) {
    console.log("num1 is greater than 1");  // if statement
}
else if (num1 == 1) {
    console.log("num1 is equal to 1");  // else if statement
}
else {
    console.log("num1 is less than 1"); // else statement
}

let switchNum = 3;
switch(switchNum) {                           // switch statement
    case 1:
        console.log("num1 is equal to 1");
        break;
    case 2:
        console.log("num1 is equal to 2");
        break;
    case 3: 
        console.log("num1 is equal to 3");
        break;
    default:
        console.log("num1 is not equal to 1, 2 or 3");
}

let count1 = 1;
while (count1 <= 5) {                        // while loop
    console.log(count1);
    count1++;
}

let count2 = 1;
do {                                   // do while loop
    console.log(count2);
    count2++;
} 
while (count2 <= 5);

let count3 = 4;
for (let index1 = 1; index1 <= count3; index1++) {        // for loop
    console.log(index1);
}

let array0 = [10, 20, 30, 40, 50];            // for of loop
for (let item of array0) {
    console.log(item);
}

let array01 = [10, 20, 30, 40, 50];            // for in loop
for (let idx in array01) {
    console.log(idx, array2[idx]);
}

let colorsArray = ["red", "green", "blue"];
colorsArray.forEach(function(color, index) {   // for each loop
    console.log(color, index);
});

for(let i = 1; i <= 5; i++) {
    if(i == 3) continue;          // continue statement
    console.log(i); 
}

for(let i = 1; i <= 5; i++) {
    if(i == 3) break;          // break statement
    console.log(i);
}

// Function overloading
function sum1() {
    if(arguments.length == 1) {
        return arguments[0];
    }
    else if(arguments.length == 2) {
        return arguments[0] + arguments[1];
    }
    else if(arguments.length == 4) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }
    else {
        return "Invalid number of arguments";
    }
}

console.log(sum1(1));
console.log(sum1(1, 2));
console.log(sum1(1, 2, 4, 50));

// Spread operator
function addNumbers(...args) {
    if(args.length == 2) {
        return args[0] + args[1];
    }
    else if(args.length == 3) {
        return args[0] + args[1] + args[2];
    }
    else {
        return "Invalid number of arguments";
    }
}
console.log(addNumbers(1, 2));  
console.log(addNumbers(1, 2, 4));

// Scope chain
function outerFunction() {
    let outerVar = 10;
    function innerFunction() {
        let innerVar = 20;
        console.log(outerVar); 
        console.log(innerVar);  
    }
    innerFunction();
}
outerFunction();

// Combining closure and lexical environment

// Object in JS
const vehicle = {
    brand: 'Honda',
    year: 2020,
    color: 'Red',
    startEngine: function() {
        console.log('The engine is starting.');
    }
}
console.log(vehicle.brand);
console.log(vehicle.year);
console.log(vehicle.color);
console.log(vehicle.startEngine());

// Class
class Vehicle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    startEngine() {
        console.log('The engine is starting.');
    }
}
const car = new Vehicle('Honda', 'Red');  // object 
console.log(car.name, car.color);
car.startEngine();

// Inheritance
class ParentClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' +
            this.age + ' years old.');
    }
}

class ChildClass extends ParentClass {
    farewell() {
        console.log("Goodbye!");
    }
}

const childInstance = new ChildClass('Alice', 30);
childInstance.greet();
childInstance.farewell();

// Constructor and super
class ParentClass1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;   
    }
    farewell() {
        console.log('Goodbye, my name is ' + this.name + ' and I am ' +
            this.age + ' years old.');
    }
}

class ChildClass1 extends ParentClass1 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    farewellWithDetails() {
        console.log('Goodbye, my name is ' + this.name + ' and I am ' +
            this.age + ' years old and I am in grade ' + this.grade);
    }
}

const childInstance1 = new ChildClass1('John', 33, 10);
childInstance1.farewell();
childInstance1.farewellWithDetails();
 