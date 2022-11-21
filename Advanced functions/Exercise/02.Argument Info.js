function solve(...input) {
    console.log(arguments); // shows all the input
    // let arrOFInput = []
    // arrOFInput.push(...input)
    // arrOFInput.forEach(element => {
    //     console.log(`${typeof element}: ${element}`);
    // });

    // arrOFInput.forEach(element => {
    //     let type = arrOFInput.filter(el => el == element);
    //     console.log(`${typeof element} = ${type.length}`);
    // });
// REDUCE 
    let arrOFInput = []
    arrOFInput.push(...input);
    let obj = {};

    let typeCounter = arrOFInput.reduce((acc, el) => {
        let type = typeof el;
       if (!acc.hasOwnProperty(type)) {
        acc[type] = 0;

       } 
       acc[type] += 1;
       console.log(`${type}: ${el}`);
       return acc
    },obj);
    Object.keys(obj)
    .sort((a,b) =>  b - a)
    .forEach(el=> console.log(`${el} = ${typeCounter[el]}`))
}
solve('cat','dog', 42, function () { console.log('Hello world!'); })