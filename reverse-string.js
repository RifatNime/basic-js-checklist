function reverseString(sentence){
    console.log(sentence);
    // console.log(sentence.length);
    var reverseWord = '';
    for(var i = sentence.length-1 ; i >= 0; i--){
        // console.log(sentence[i]);
        reverseWord = reverseWord + sentence[i];
        // console.log(reverseWord);
    }
    console.log(reverseWord);
}
reverseString('Hello Dear World!');
/////////////////
const greetings = "Hello, how are you?";
function reverseString1(text){
    console.log(text);
    let reverse = '';
    for (const letter of text){
        // console.log(letter);
        reverse = letter + reverse;
        // console.log(reverse)
    }
    return reverse;
}
const reversed = reverseString1(greetings);
console.log(reversed);