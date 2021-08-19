const products = [
    { name: "i-phone 6", price: 15000 },
    { name: "Asus laptop", price: 25000 },
    { name: "samsung smart tv", price: 20000 },
    { name: "apple watch", price: 10000 },
    { name: "i-phone 12 pro max", price: 115000 },
    { name: "hp laptop", price: 35000 },
    { name: "dell watch", price: 5000 },
    { name: "xowami phone", price: 18000 },
    { name: "samsung monitor", price: 8000 },
]

function searchElement(products, search) {
    const searchResult = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(search) != -1) {
            searchResult.push(product);
        }
    }
    return searchResult;

}

const searching = searchElement(products, 'calculaor');
console.log(searching);