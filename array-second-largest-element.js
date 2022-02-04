///find the second largest

function secondlargestElement(array){
    let largest = array[0];
    let secondLargest = array[0];
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if(element>largest){
            secondLargest = largest;
            largest = element;
        }
        else if(element > secondLargest){
            secondLargest = element
        }
    }
    return [secondLargest , largest];
}
let array = [33,35,45,28,59,10,48];
let result = secondlargestElement(array);
console.log(result[1],result[0]);
console.log(secondlargestElement(array));