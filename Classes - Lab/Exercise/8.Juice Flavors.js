function solve(input) {
    let arrOfJuices = {};
    let arrOfBottles = {};

    for (const line of input) {
        let [juice, quantity] = line.split(' => ');
        
        if (!arrOfJuices.hasOwnProperty(juice)) {
            arrOfJuices[juice] = 0
                
        } 
         arrOfJuices[juice] += Number(quantity);
         if (arrOfJuices[juice] > 1000) {
            arrOfBottles[juice] = arrOfJuices[juice]
         }

    }
    for(let key in arrOfBottles){
           let bottles = Math.floor(arrOfBottles[key] / 1000);
           console.log(`${key} => ${bottles.toFixed(0)}`);
        
    }

}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)