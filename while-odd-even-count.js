/* let i = 7;
let countOdd = 0;
let countEven = 0;
   
while(i <= 19 ){
    
    if((i % 2) != 0){
       
        console.log(i +' is an odd number!')
        countOdd ++;
        
    }
    else{
        countEven++
    }
    i++;

}
console.log(countOdd, ' total odd number!');
console.log(countEven, ' total even number!');
//
var array = [1,2,3]

for(var i = 0; i < array. length ; i++){
  
console. log(array[i])
} */
//loop 1-20 even
let countOdd = 0;
let countEven = 0;
function printEven(){
    for (let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i +' is an even number!');
            countEven++;
        }
        else{
            countOdd++;
        }
    }
}
printEven();
console.log(countOdd, ' total odd number!');
console.log(countEven, ' total even number!');

