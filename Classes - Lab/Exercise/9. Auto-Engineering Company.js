function solve(input) {
   let cars = {};

    for(let line of input){
        let [car,model,producedCars] = line.split(' | ');
        if (!cars.hasOwnProperty(car)) {
            cars[car] = {};

        };
        if (!cars[car].hasOwnProperty(model)) {
            cars[car][model] = 0;

        };
        cars[car][model] += Number(producedCars);
    };
    for(let car in cars){
        console.log(car);
        for(let model in cars[car]){
            console.log(`###${model} -> ${cars[car][model]}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)