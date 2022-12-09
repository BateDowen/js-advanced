class Person{
    constructor(firstname,lastname,age,email){
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
        this.email = email;
    }
    toString(){
        let personalInfo = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return personalInfo
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
