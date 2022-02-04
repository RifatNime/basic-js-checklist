// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function friendsArray(inputArray){
    let largestName = '';
    for (var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > largestName.length){
            largestName = inputArray[i];
        }
    }
    return largestName;
}
let friendList = ['Md Rifat Nime','Md Jamil Haque','Rakibul Hasan','ABS Siddik','Tanziul Hakkani Nayak','Rafik Zabbar'];
console.log(friendsArray(friendList));
//
// function largestElement(array){
//     let largest = array[0];
//     for (const element of array){
//         if(element>largest){
//             largest = element;
//         }
//     }
//     return largest
// }
// let array = [3,5,7,8,9,10];
// console.log(largestElement(array));

