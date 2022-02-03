//একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
 ///////

let myPc = {
    name: 'asus',
    harddisk: "toshiba",
    ssd: 250,

};
console.log(myPc);
myPc.ssd=500;
// let gcard = 500;
// myPc.push(gcard);
// console.log(myPc);

// তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let bookList = ['bangla', 'english', 'math', 'sosial', 'islam sikkha'];
console.log('Book length: ',bookList.length);
bookList[3] = 'somaj';
console.log(bookList);
bookList.push('biggan', 'sarir sikkha');
console.log(bookList);
bookList.pop();
console.log(bookList);

// তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

function gunFol2(gunSongkha) {
    let gun = 1;
   for (let i = 0; i < gunSongkha.length; i++) {
       const element = gunSongkha[i];
       gun = gun * element;
   }
   return gun;
}
const gunShongkha = [5, 6, 2];
const inputFuntion = gunFol2(gunShongkha);
console.log(inputFuntion);
