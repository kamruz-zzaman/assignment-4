function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    // if shirt, pant and shoe quantity is greater than zero
    if ((shirtQuantity && pantQuantity && shirtQuantity) > 0) {
        const totalPantPrice = pantPrice * pantQuantity;
        const totalShoePrice = shoePrice * shoeQuantity;
        const totalShirtPrice = shirtPrice * shirtQuantity;

        const totalSales = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalSales;
    }
    // /if shirt, pant and shoe quantity is less than zero
    else {
        return 'You enter a negative number!!!';
    }
}
// declear the productQuantity
let productQuantity = totalSales(5, 10, 15);
console.log(productQuantity);