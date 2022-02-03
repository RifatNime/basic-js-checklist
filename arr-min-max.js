
let forPickArray = [10, 520, 5, 54, 556];
function checkThePick(arr) {
    let pick = Math.max(...arr);
    return pick;
}
let resultPick = checkThePick(forPickArray);
console.log(resultPick);
// lowest  element of an array
let forBottomArray = [100, 520, 50, 54, 5560];
function checkTheBottom(arr) {
    let bottom = Math.min(...arr);
    return bottom;
}
let resultBottom = checkTheBottom(forBottomArray);
console.log(resultBottom);

// ৩টা সংখ্যার মাঝে বড় কন্টা এবং ছোট কোনটা বের করার ফানশন using math method

let n1 = number(prompt("num1"));
let n2 = number(prompt("num2"));
let n3 = number(prompt("num3"));

findLargestNLowest(n1, n2, n3);

function findLargestNLowest(v1, v2, v3) {
    let largestNum = Math.max(v1, v2, v3);
    let lowestNum = Math.min(v1, v2, v3);
    return `largestNum is ${largestNum} and lowestNum is ${lowestNum}`;
}
let outputOfOpt = findLargestNLowest(n1, n2, n3);
console.log(outputOfOpt);
