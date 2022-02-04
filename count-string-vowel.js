const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
    let counter = 0;
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    console.log('Printed Vowels: ',vowels);
    return counter
}
const totalVowel = vowelsCounter('Nime Mahabook Ali');
console.log('Total Vowel: ', totalVowel);


/////new one
function countVowel(sentance){
    let count = 0;
    for (let i = 0; i < sentance.length; i++){
        let letter = sentance[i].toLowerCase();
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
            count = count + 1;
        }
    }
    return count;
}
let string = "Quick Plus Ai SEarCh";
console.log(countVowel(string));