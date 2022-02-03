function buyBurger(wantTo, enoughTaka){
    if(wantTo == true && enoughTaka >= 110){
        return 'Yes,I will have burger today.';
    }
    else{
        return 'No,Not today,burger sorry';
    }
}
var buy = buyBurger(false, 180);
console.log(buy);
var taka =200;
var want = true;
var abarKinbo = buyBurger(want,taka);
console.log(abarKinbo);