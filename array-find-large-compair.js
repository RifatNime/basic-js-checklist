// / তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
const findMax = [18, 20, 84, 54, 66, 99, 83, 33, 90];
let maxThan = 0;
let comparValue = 80;
for (let i = 0; i < findMax.length; i++){
    const element = findMax[i];
    if(element > comparValue){
        maxThan = element;
        console.log(maxThan);
    }
}

///
const ageList = [13, 34, 5, 75, 27, 23, 32, 11, 28, 30, 46];
// for(let i = 0; i < ageList.length; i++){
//     console.log(ageList[i]);
// }
for(const list of ageList){
    console.log(list);
}