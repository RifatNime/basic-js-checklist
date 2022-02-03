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