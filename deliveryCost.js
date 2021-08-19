function deliveryCost(deliveryQuantity) {
    const oneToHundredPerDeliveryCharge = 100;
    const oneHundredoneToTwoHundredPerDeliveryCharge = 80;
    const twoHundredoneoneToAbovePerDeliveryCharge = 50;
    // if deliveryQuantity is less than or equal zero
    if (deliveryQuantity <= 0) {
        return "pleaase give something for delivery!!!"
    }
    // or deliveryQuantity is greater than or equal 100
    else if (deliveryQuantity <= 100) {
        const firstDeliveryCharge = oneToHundredPerDeliveryCharge * deliveryQuantity;
        return firstDeliveryCharge;
    }
    // or deliveryQuantity is greater than or equal 200
    else if (deliveryQuantity <= 200) {
        // first 1 - 100 quantity delivery charge = 100tk and 101 - 200 quantity delivery charge = 80tk
        const firstDeliverd = 100 * oneToHundredPerDeliveryCharge;
        const restdeliveryQuantity = deliveryQuantity - 100;
        const restDeliveryCharge = restdeliveryQuantity * oneHundredoneToTwoHundredPerDeliveryCharge;
        const secondDeliveryCharge = firstDeliverd + restDeliveryCharge;
        return secondDeliveryCharge;
    }
    else {
        // 201 to above deliveryCharge is 50tk
        const firstDeliverd = 100 * oneToHundredPerDeliveryCharge;
        const secondDeliverd = 100 * oneHundredoneToTwoHundredPerDeliveryCharge;
        const restdeliveryQuantity = deliveryQuantity - 200;
        const restDeliveryCharge = restdeliveryQuantity * twoHundredoneoneToAbovePerDeliveryCharge;
        const fullDeliveryCharge = firstDeliverd + secondDeliverd + restDeliveryCharge;
        return fullDeliveryCharge;
    }
}
// declear tshirtQuantity
const tshirtQuantity = deliveryCost(201);
console.log(tshirtQuantity);