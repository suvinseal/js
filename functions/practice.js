//  function basics 

function twoSum(a, b) {
    return a + b;
}

console.log(twoSum(1, 2));

// print in functions

function greet(firstName) {
    console.log(`hello, ${firstName}`);
}

greet("Elvin");

// multiple arguements

function greet2(firstName, lastName) {
    console.log(`hello, ${firstName} ${lastName[0]}`);
}

greet2("Elvin", "John");


// scope

function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

// global and local scope 

let bird = "macau";

function identifyBird() {
    //let bird = "duck";
    console.log(bird);
}

identifyBird()

// lexical scope 

// for in is for objects
// for of is for arrays

// inner funciton nested inside a parent function has access to the parent function's scope 

function robbery() {
    const heros = ['spiderman', 'wolverine', 'black panther'];
    function cryForHelp() {
        for (let hero of heros) {
            console.log(`help me ${hero}!!`);
        }
    }
    cryForHelp();
}

robbery();

console.log("-------")

// function expressions (functions without names)

const add = function (a, b) {
    return a + b;
}

console.log(add(5, 7));

// higher order function -- accepts other functions as arguements and return a function

function callTwice(f) {
    f();
    f();
}

function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

callTwice(rollDice);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand < 0.5) {
        return function () {
            console.log("congrats, i am a good function")
        }
    }
    else {
        return function () {
            console.log("i am a bad function")
        }
    }
}

//console.log(makeMysteryFunc());
const mystery = makeMysteryFunc(); // mystery is both a variable and a function reference, and we use it as a function by calling it with parenthesis 

mystery();

console.log("-------")

// methods are functions that are associated with objects as properties 
// functions are standalone blocks that can be called independently

// keyword this- used inside a method object?

const cat = {
    name: "elvin",
    color: "white",
    meow() {
        console.log(`${this.name} says meow`);
    }
}

console.log(cat.meow());


































