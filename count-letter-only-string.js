// hello everyon | helloeverryone
var sentance = "Hello  Everyone,  Programming Hero";
function wordCount(sentanceLength){
    var count = 0;
    for (var i = 0; i < sentanceLength.length; i++){
        if(sentanceLength[i] == " " && sentanceLength[i-1] != " "){
            count = count + 1;
        }
    }
    count++ //ses a 1ta extra space dite

    return count;
}
var firstCount = wordCount(sentance);
console.log(firstCount);
////
