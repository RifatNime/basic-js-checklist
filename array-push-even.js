var numbers = [243, 432, 545, 323,2];

function printAllArrayNumber(numbersArray){
    var evenArray = [];
    for (var i = 0; i<numbersArray.length; i++){
        if(numbersArray[i] % 2 == 0){
            evenArray.push(numbersArray[i]);
        }
    }

    return evenArray;
}
var newEven = printAllArrayNumber(numbers);
console.log(newEven);
var even = printAllArrayNumber([6,243, 452, 444, 653, 665, 924]);
console.log(even);