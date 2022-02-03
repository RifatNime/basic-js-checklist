var arr = [3, 2, 6, 85, 19, 99];
var largest = arr[0];
for (var i = 0; i < arr.length; i++){
    const element = arr[i];
    if(element > largest){
        largest = element;
    }
}
console.log(largest);