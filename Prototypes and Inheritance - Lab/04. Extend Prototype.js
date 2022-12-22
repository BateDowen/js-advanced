function extendProrotype(classToExtend) {

    Object.defineProperty(classToExtend.prototype, 'species', { value: 'Human'});
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
}
extendProrotype(class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
})
