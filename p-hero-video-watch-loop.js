// project:প্রতিদিন তোমার কাজ কি? ১) রাত ৮ টা বাজে মডিউল আনলক করো  ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো ৩) ভিডিও দেখতে দেখতে নোটস নাও ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো .এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 

/*
let myDailyTask = ["১) রাত ৮ টা বাজে মডিউল আনলক করো", "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "৩) ভিডিও দেখতে দেখতে নোটস নাও", "৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো"];
// to see all the element in console as a list
console.log(myDailyTask);
for (let index = 0; index < myDailyTask.length; index++) {
    const element = myDailyTask[index];
    console.log(element);
}
*/

// solve of the math

/*
for (let i = 0; i < myDailyTask.length; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(myDailyTask[i]);
        // console.log(j);
    }
}
*/

// while loop: সব same just structure টা ভিন্ন

// to print 1 to 10 by both for and while

/*
for (i = 1; i <= 10; i++){
    console.log(i);
}
// assignment,conditin & increment or decrement সব এক লাইনেই হবে‌
*/

/*
let initial = 1;
while (initial <= 10 ) {
    console.log(initial);
    
    initial++;
}
// assignment টা  উপরে চলে এসেছে condition টা মাঝে increment or decrement টা সবার নিচে হবে
*/


// do while loop condition true or false whatever first time programm will do run.
/*
let do_i = 100;
do {
    console.log(do_i);
    do_i++; 
}while (do_i <= 10)
*/