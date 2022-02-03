function centimeterToMeter(cm){
    let meter = cm / 100;
    console.log("Value in meter is: " , meter);
}
let cmToMeter = centimeterToMeter(1000);
console.log("And Value in meter is: " ,cmToMeter);
// // ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInches(feet) {
    var inches = feet * 12;
    return inches;
}

let myFeet = 5;
let result = feetToInches(myFeet);
console.log('The result is ' + result + ' inches');