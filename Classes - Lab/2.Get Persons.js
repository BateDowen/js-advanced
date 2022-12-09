function makePersons() {
    class Person{
        constructor(firstname,lastname,age,email){
            if (firstname == undefined) {
                delete this.firstName;
            } else {
                this.firstName = firstname;
            };
            if (lastname == undefined) {
                delete this.lastName;
            } else {
                this.lastName = lastname;
            };
            
            if (age == undefined) {
                delete this.age;
            } else {
                this.age = age;
            };
            
            if (email == undefined) {
                delete this.email;
            }else {
                this.email = email;
            };

        }
       
    }
    let arrOfPersons = [];
    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('Softuni');
    let person3 = new Person('Stephan', 'Johnson','25');
    let person4 = new Person('Gabriel',	'Peterson',	24,	'g.p@gmail.com');
    arrOfPersons.push(person1,person2,person3,person4);
    console.log(arrOfPersons);

}
makePersons()