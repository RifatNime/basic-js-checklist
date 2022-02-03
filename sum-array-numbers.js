// Sum of all numbers in an array

// without function
let anArray = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < anArray.length; i++) {
    sum += anArray[i]
}
console.log(sum);
// with function
let anArray1 = [100, 200, 300, 400];
sumOfArray(anArray1);
function sumOfArray(arr1) {
    let finalSum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        finalSum += element;
    }
    return finalSum;
}
let resultOfArraySum = sumOfArray(anArray1);
console.log(resultOfArraySum);