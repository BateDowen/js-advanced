function solve(input) {
    let sortedProducts = input.sort((a , b) => a.localeCompare(b))
    let obj = [];

    for(let line of sortedProducts){
        let [product, price] = line.split(' : ');
        price = Number(price);
        let initial = product[0];

        if (!obj[initial]) {
            obj[initial] = [];

        }
        let data = {product,price}
        obj[initial].push(data);
    }

    for(let initial in obj){
        console.log(initial);
        let groupData = obj[initial];
        for (let data of groupData) {
            console.log(`  ${data.product}: ${data.price}`);
        }
    }

}
solve(['Appricot : 20.4',
'Apple : 1.25',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)