function toStringExtension() {
    function Person(name,email){
        this.name = name;
        this.email = email;

     };
   
    function Teacher(name,email,subject){
        Person.call(this,name,email)
        this.subject = subject
    };

    function Student (name,email,subject,course){
        Person.call(this,name,email,subject);
        this.course = course;

    }
   
   Teacher.prototype = Object.create(Person.prototype)
   Student.prototype = Object.create(Person.prototype)

   Person.prototype.toString = function (){
    if (this.subject) {
    return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        
    }
    if (this.course) {
    return `Student (name: ${this.name}, email: ${this.email}, subject: ${this.course})`
        
    }
    return `Person (name: ${this.name}, email: ${this.email})`
   };
  
    return {
        Person,
        Teacher,
        Student
    }
}
toStringExtension()
