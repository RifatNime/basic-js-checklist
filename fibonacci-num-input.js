/* function fibonacciseries(num){
    if (typeof num != "number"){
        return "Please give a number.";
    }
    else if(num < 0){
        return 'please provide positive number';
    }
    const fibo= [0, 1];
    for (i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var total = fibonacciseries(20);
// var total = fibonacciseries('fghf');
console.log(total); */

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(dateString);
var dayName = days[d.getDay()];
function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = '05/23/2014';
var day = getDayName(dateStr, "nl-NL");