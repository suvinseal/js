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

