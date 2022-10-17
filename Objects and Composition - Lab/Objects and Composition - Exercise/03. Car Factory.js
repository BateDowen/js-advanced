function solve(object) {
    let carObj = {};
    let engine = {};
    let carriage = {};

    carObj.model = object.model;

    if (object.power <= 90) {
        engine.power =  90
        engine.volume = 1800 
    }else if (object.power <= 120) {
        engine.power =  120
        engine.volume = 2400
    }else if (object.power <= 200) {
        engine.power =  200
        engine.volume = 3500
    }
    carObj.engine = engine;
    carriage.type = object.carriage;
    carriage.color = object.color;
    carObj.carriage = carriage;
   if (object.wheelsize % 2 === 0) {
    object.wheelsize--;

   }
   carObj.wheels = [object.wheelsize,object.wheelsize,object.wheelsize,object.wheelsize]
   return carObj;

}
solve({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
})