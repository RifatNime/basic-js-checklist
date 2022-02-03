//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArrayElements = myArray.length; // Array এর উপাদান সংখ্যা বলবে
console.log(myArrayElements);

myArray[3] = "hello"; // ৪র্থ পজিশন অথবা ৩য় ইনডেক্সের মধ্যে যোগ করবে। (Index = Position - 1)
console.log(myArray);

myArray.push("world"); //শেষে যোগ করবে
console.log(myArray);

myArray.unshift("Javascript"); // শুরুতে যোগ করবে
console.log(myArray);

myArray.pop(); //শেষে বাদ দিবে
console.log(myArray);

myArray.shift(); // শুরুতে বাদ দিবে
console.log(myArray);