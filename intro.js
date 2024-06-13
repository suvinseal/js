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

