function Person(name,age) {
    this.name = name;
    this.age = age;
    // this will create function for each intance(to much memory use)
    // this.greet = function () {
    //     console.log(`Hello my name is ${this.name}`);
    // }
}
//The correct way to add method;
Person.prototype.greed = function () {
    console.log(`Hello my name is ${this.name}`);
};

let person = new Person('Pesho', 22);
let person2 = new Person('Gosho', 25);

console.log(person instanceof Person);
person.greed();
person2.greed();

console.log(person.greed == person2.greed);