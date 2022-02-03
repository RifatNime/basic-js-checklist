//  Factorial of 7 by loop

let Factorial = 1;
for (let i = 1; i <= 7; i++) {
    Factorial = Factorial * i;
    console.log(Factorial);
}
// Factorial using a while loop or a decrementing loop

let needFactorialOf = 7;
calcFactorial(needFactorialOf);
function calcFactorial(value2BFactorised) {
    let factorial4Two = 1;
    let i = 1;
    while (i <= needFactorialOf) {
        factorial4Two = factorial4Two * i;
        i++;
    }
    return factorial4Two;
}
let resultOfFactorial4Two = calcFactorial(needFactorialOf);
console.log(`Factorial of ${needFactorialOf} = ${resultOfFactorial4Two}`);



// example of reverse factorial

let factorial2revised = 10;
reviseFactorial(factorial2revised);
function reviseFactorial(revisedValue) {
    let factorial4Revised = 1;
    for (let i = factorial2revised; i > 0; i--) {
        factorial4Revised = factorial4Revised * i;
    }
    return factorial4Revised;
}
let resultOfRevisedFactorial = reviseFactorial(factorial2revised);
console.log(`Revisedfactorial of ${factorial2revised} = ${resultOfRevisedFactorial}`);

// Factorial of a askii Number by functio and loop [Cautions: don't set value more than 10 for factorial calculation]

let factorialOf = 9; // value is setting here
getFactorial(factorialOf); // function declared and defining bellow
function getFactorial(valu2GetFactorialOf) {
    let factorial = 1;
    for (let i = 1; i <= valu2GetFactorialOf; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let resulOfFactorial = getFactorial(factorialOf);
console.log(`Factorial of ${factorialOf} is, ${resulOfFactorial}`);