// তো মার বয়স কি odd নাকি even সংখ্ যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কো ন সংখ্ যা প্ যারামিটার হিসেবে দিলে, সেই সংখ্ যা Even হলে ফাংশন true রিটার্ ন করবে আর Odd হলে false রিটার্ ন করবে।
// /*
let myAge = 25;
OddEvenCheck(myAge);
function OddEvenCheck(valueInDigit) {
    if (valueInDigit % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let resultOfMyAge = OddEvenCheck(myAge);
console.log(`I am ${myAge} years old. and its an odd number : ${resultOfMyAge}`);
let yourAge = prompt("Type Your Age");
let resultOfYourAge = OddEvenCheck(yourAge);
console.log(`I am ${yourAge} years old. prit true for even and false for odd : ${resultOfYourAge}`);

// এক্তা FUNCtion লিখতে হবে যেখানে কোন value input দিল তা উল্টোক্রমে ১ পর্যন্ত গিন ফলএর যোগফল দেখাবে

let n = 12;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
}
console.log("Output = " + sum);