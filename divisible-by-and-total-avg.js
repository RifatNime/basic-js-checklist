// 1-n / 3 them total then count then avarage?
// {123456789} [3-6-9(3)]  [18(6*3)]

function avarage(n){
    let sum = 0, count = 0;
    for (let i = 1; i < n; i++){
        if(i%3 == 0){
            console.log(i);
            sum = sum + i;
            count ++;
        }
    }
    
    console.log('Count: ',count);
    let avg = sum / count;
    console.log("Avarage ",avg);
    console.log('Sum: ',sum);
    return avg;
}

const result = avarage(10);
// console.log("Result: ",result);