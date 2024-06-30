const nums = [4, 5, 6, 3, 93, 98, 39, 0]

nums.forEach(function (el) {
    console.log(el)
});

// map 
console.log("------");

const texts = ["rofl", "lol", "kek"];

// const caps = texts.map(function (el) {
//     return el.toUpperCase();
// })

const caps = texts.map(el => el.toUpperCase())

console.log(caps);

console.log("------");

const numbers = [4, 5, 2, 6, 7];

// const doubles = numbers.map(function (el) {
//     return el * 2;
// })

const doubles = numbers.map(num => num * 2);

console.log(numbers);

console.log(doubles);

console.log("------");

// set time out

// print statement appears after 3 seconds / good for displaying aletrs or notifications
// setTimeout(() => {
//     console.log("timeout");
// }, 3000);

// clock interval is used to periodically update part of user interface, such as a clock or a status display
// other use cases include real-time data fetching, monitoring user inactivity, animations ,and polling 

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000); // 2 seconds 

// use clearInterval(id) to stop;


// filter

const num3 = [4, 5, 6, 34, 67, 532, 79];

const newNums3 = num3.filter(num => num % 2 === 0);

// const newNums3 = num3.filter(function (el) {
//     return el % 2 === 0;
// })

console.log("filtered")
console.log(num3);
console.log(newNums3);

console.log("------");

// some and every

const num4 = [4, 5, 6, 34, 67, 532, 79];

console.log(num4.every(num => num > 3));

console.log(num4.some(num => num > 45));

// reduce - take an array and reduce it to single value

// we define how to reduce arrays 

const sample = [5, 6, 2, 7].reduce((acc, val) => {
    return acc + val;
})

console.log(sample);





























