// var arr = [3, 2, 6, 85, 19, 99];
// var largest = arr[0];
// for (var i = 0; i < arr.length; i++){
//     const element = arr[i];
//     if(element > largest){
//         largest = element;
//     }
// }
// console.log(largest);
//using function
var numbers = [34, 21, 45, 55, 99, 60, 101];

function bigNum(numArray){
    numArray.sort(function(a, b){ return b - a });
    console.log('Second Large: ',numArray[1]);
    return ("First Large: "+numArray[0]) ;
}
var findLarge = bigNum(numbers);
console.log(findLarge);