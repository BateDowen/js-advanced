function solution() {
    
    let objOfMacros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    return function (input) {
        let [command, ingredient, quantity] = input.split(' ');
        if (command === 'restock') {
            objOfMacros[ingredient] += Number(quantity);
            return 'Success'
           
        } else if (command === 'prepare') {

           for(let i = 1; i <= Number(quantity); i++){

              switch (ingredient) {
                  case 'apple': 
                  objOfMacros.carbohydrate -= 1;
                  if (objOfMacros.carbohydrate < 0) {
                    objOfMacros.carbohydrate = 0;
                    return `Error: not enough carbohydrate in stock`
                  }
                  objOfMacros.flavour -= 2
                  if (objOfMacros.flavour < 0) {
                    objOfMacros.flavour = 0;
                    return `Error: not enough flavour in stock`
                  }
                  break
                  case 'lemonade':
                    objOfMacros.carbohydrate -= 10;
                    if (objOfMacros.carbohydrate < 0) {
                            objOfMacros.carbohydrate = 0;
                            return `Error: not enough carbohydrate in stock`
                          }
                    objOfMacros.flavour -= 20;
                    if (objOfMacros.flavour < 0) {
                            objOfMacros.flavour = 0;
                            return `Error: not enough flavour in stock`
                          }
                  break
                  case 'burger':
                    objOfMacros.carbohydrate -= 5;
                    if (objOfMacros.carbohydrate < 0) {
                      objOfMacros.carbohydrate = 0;
                      return `Error: not enough carbohydrate in stock`
                          }
                    objOfMacros.flavour -= 3;
                    if (objOfMacros.flavour < 0) {
                      objOfMacros.flavour = 0;
                      return `Error: not enough flavour in stock`
                          }
                    objOfMacros.fat -= 7;
                    if (objOfMacros.fat < 0) {
                        objOfMacros.fat = 0;
                        return `Error: not enough fat in stock`
                      }
                    
                  break
                  case 'eggs': 
                  objOfMacros.protein -= 5;
                    if (objOfMacros.protein < 0) {
                            objOfMacros.protein = 0;
                            return `Error: not enough protein in stock`
                          }
                    objOfMacros.flavour -= 1;
                    if (objOfMacros.flavour < 0) {
                      objOfMacros.flavour = 0;
                      return `Error: not enough flavour in stock`
                          }
                    objOfMacros.fat -= 1;
                    if (objOfMacros.fat < 0) {
                      objOfMacros.fat = 0;
                      return `Error: not enough fat in stock`
                      }
                  break
                  case 'turkey': 
                  objOfMacros.protein -= 10;
                    if (objOfMacros.protein < 0) {
                      objOfMacros.protein = 0;
                      return `Error: not enough protein in stock`
                          }
                    objOfMacros.flavour -= 10;
                    if (objOfMacros.flavour < 0) {
                      objOfMacros.flavour = 0;
                      return `Error: not enough flavour in stock`
                          }
                    objOfMacros.fat -= 10;
                    if (objOfMacros.fat < 0) {
                      objOfMacros.fat = 0;
                      return `Error: not enough fat in stock`
                      }
                      objOfMacros.carbohydrate -= 10;
                      if (objOfMacros.carbohydrate < 0) {
                        objOfMacros.carbohydrate = 0;
                        return `Error: not enough carbohydrate in stock`
                        }
                  break
              }
            }
            return 'Success'
          
        }else if (command === 'report') {
          return `protein=${objOfMacros.protein} carbohydrate=${objOfMacros.carbohydrate} fat=${objOfMacros.fat} flavour=${objOfMacros.flavour}`
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));