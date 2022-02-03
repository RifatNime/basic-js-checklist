function countNumberDivideBy3(){
    let countFoober = 0;
    let countFoo= 0;
    let countBer = 0;
    let sum = 0;
    for(let i = 1; i <= 50; i++){
        if(i % 5 == 0 && i % 3 == 0) {
            console.log('Foobar',i);
            countFoober++;
        }
        else if(i % 3 == 0){
            console.log('Foo',i);
            countFoo++;
        }
        else if(i % 5 == 0){
            console.log('bar',i);
            countBer++;
        }
        
        else{
            console.log(i);
        }
    }
    console.log('Count: Foobar', countFoober);
    console.log('Count: Foo', countFoo);
    console.log('Count: Bar', countBer);
    // return;
}

countNumberDivideBy3();
// console.log('Count: ', countFoober);
