function primeNum(num){
    let primeNumber = 0;
    if((6 * num + 1 || 6 * num - 1) && (num % 5 !==0 && num % 7 !== 0)){
        primeNumber = true;
    }
    else{
        primeNumber = false;
    }
    return primeNumber;
}
const myPrime = primeNum(67);
console.log(myPrime);