function seerToMon(seer) {
    // if seer is greater than or equal zero- 
    if (seer >= 0) {
        const mon = seer / 40;
        return mon;
    }
    // if seer is less than zero
    else {
        return 'Please give a positive seer for calculate Mon!!!';
    }
}
// declear the quantity of seer
let seerQuantity = seerToMon(60);
console.log(seerQuantity);