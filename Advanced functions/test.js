function introduce(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName} my name is ${this.name}`);
}
introduce()// global scope
//Hello, undefined undefined my name is undefined
const obj = {
    name: 'Pesho'
}
introduce.call(obj, 'Gosho', 'Ivanov');//works with spread list
//Hello, Gosho Ivanov my name is Pesho

let arr = ['Ivan', 'Ivanov'];//Hello, Ivan Ivanov my name is Pesho

introduce.apply(obj,arr)// works with array
introduce.apply(obj, ['Pencho', 'Penchov']);//Hello, Pencho Penchov my name is Pesho

//bind() create new function
let superhuman ={
    name: 'Superman'
}
let superIntroduction = introduce.bind(superhuman, 'Luis', 'Lane');
superIntroduction()// Hello, Luis Lane my name is Superman