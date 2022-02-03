//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 


let mark = 59;
let cgpa = 2;
if(mark >= 40 && cgpa >= 3){
    console.log('mark is greater than 50 Passed');

}
else if((mark == 40 || cgpa >= 2)){
    console.log('mark is greater than 40 passed');
}
else (
    console.log('mark is not greater than 39 Fail')
)
