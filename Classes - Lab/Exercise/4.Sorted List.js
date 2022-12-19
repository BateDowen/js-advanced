class List{
    constructor(){
        this.collection = [];
        this.size = this.collection.length;

    }
    
    add(element){
        this.collection.push(element);
        this.size = this.collection.length;
        this.collection.sort((a,b) => a - b);
    };

    remove(index){
        if (index > this.size) {
            throw Error `Index shouldn't be larger rhan length`
        } else {
            let element = this.collection[index]
            this.collection.splice(this.collection.indexOf(element),1);
            this.size = this.collection.length;
            this.collection.sort((a,b) => a - b);
        }
    };
    get(index){
        if (index > this.size) {
            throw Error `Index shouldn't be larger rhan length`
        } else {
            let value = this.collection[index];
            this.size = this.collection.length;
            this.collection.sort((a,b) => a - b);
        return value;
    }
    };

}

let list = new List();
// list.add(5);
list.add(5);
console.log(list.get(0)); 

list.add(3);
console.log(list.get(0)); 
list.remove(0);
console.log(list.get(0));
console.log(list.size); 

