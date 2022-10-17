function solve(input) {
    let products = [];
    
    for(let line of input){
        let [name,prod,price] = line.split(' | ');
        price = Number(price);
       if (products.filter(x => x.prod === prod).length > 0) {
        
            let obj = products.find(x => x.prod === prod);

            if (obj.price > Number(price)) {
                obj.price = price;
                obj.name = name;
            }
        }else {
            let obj = {prod,name,price};
            products.push(obj);

    }
        
    }
    for(let line of products){
        console.log(`${line.prod} -> ${line.price} (${line.name})`);
    }
   
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])