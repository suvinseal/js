//  function basics 

function twoSum(a, b) {
    return a + b;
}

console.log(twoSum(1, 2));

// scope

function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

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