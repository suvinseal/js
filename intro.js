// primitive types

let a = 4;
let b = 5;

const x = a + b;
console.log("x =", x);

// ----

let xyz = "yo";

if (xyz === "yo") {
    console.log("yay, it worked #1");
}

console.log("-----");
// try with random

let uu = Math.random();
if (uu > 0.5) {
    console.log(uu);
    console.log("it worked! #2");
}

// ---- logic &&

// const pwd = prompt("enter password: ");

// if (pwd.length > 6 && pwd.indexOf(" ")) {
//     console.log("password is ok");
// } else {
//     console.log("password is not ok");
// }

// && operator runs before || 

// arrays

let colors = ['red', 'blue', 'green'];

console.log('len of array=', colors.length);

console.log(colors[1]);

// shift or unshift to remove or add elments from beginning of array 

let numbers = ['1', '2', '3'];

const combo = colors.concat(numbers);

console.log(combo);

console.log(combo.indexOf('3'));

let newCombo = combo.slice(2,);

console.log(newCombo);

// objects aka dict's in python

const fitbitData = {
    steps: 200,
    workoutsThisWeek: '2 of 7',
    totalMiles: 7.5
}


let comment = {
    username: 'Jack',
    downvotes: 15,
    upvotes: 11,
    commentText: 'I am a good boy',
    tags: ['#good', '#boy']
}

console.log(comment.upvotes);

// for loops 
console.log("for loop practice!");
for (let i = 0; i < 7; i++) {
    console.log(i);
}
console.log("-----");
console.log("looping through arrays practice!");
// array loop.

const animals = ['dog', 'cat', 'lion'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

// play with break 

let maximum = parseInt(prompt('Enter the maximum number'));

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

// for of loop (iterate over arrays)

const subReddits = ['pics', 'funny', 'cats'];

for (let k = 0; k < subReddits.length; k++) {
    console.log(`visit reddit.com/r/${subReddits[k]}`);
}

// it can be also written as

for (let sub of subReddits) {
    console.log(sub);
}

// iterating over a dictionary/object

const testScores = {
    john: 90,
    jane: 80,
    jill: 100
}

for (let name in testScores) {
    console.log(name, testScores[name]);
}


// to get the sum of values in dictionary

let total = 0;

for (let score of Object.values(testScores)) {
    total += score;
}