// project f1 : 100 টাকা নিয়ে গিয়ে দোকানদার মামার কাছে পটেটো চাওয়ার function লিখতে হবে

let taka = 100;
function takaAse(taka) {
    console.log(`ami  : ei nen mama ${taka} tk, ar potato den?`);
}
takaAse(taka);


// project f2 : টাকা নিয়ে গিয়ে দোকানদার মামার কাছে পটেটো চাওয়ার function লিখতে হবে আর কয়টা পটেটো দিবে তাও জানতে হবে একপিচ ৫ টাকা

function takaHave(taka){
    console.log("Ami  : ei nen mama", taka, "tk, ar potato den?");
    let potatoPacketPrice = 5;
    let potatoQuantity = taka / potatoPacketPrice;
    
    let totalPakectTaka = 0;
    totalPakectTaka = parseInt(potatoQuantity) * parseInt(potatoPacketPrice);
    console.log("Amakr Khoroch hoyeche ", totalPakectTaka, "tk");
    let totalRemaingTaka = 0;
    totalRemaingTaka = taka - totalPakectTaka;
    console.log("Amake ferot dibe ", totalRemaingTaka, "tk");
    return potatoQuantity

}
let potatoPieceQty = takaHave(101);
console.log("Dokandar  : Ai nen mama ", parseInt(potatoPieceQty),"ta potato packet nen.");


