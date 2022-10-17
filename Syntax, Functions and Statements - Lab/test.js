function solve(params) {
    

let obj = {};
obj.name = 'Pesho';
console.log(obj);
obj = {
    ...obj,
     age: 30, 
     city: 'Plovdiv',
     run : function() {console.log(`${this.name} Run`)} 
    };
obj.run()
obj.name = 'Miro'
obj.run()

let stop = {
    name: 'Kras'
}
stop.city = obj.city
stop.stopRun = obj.run;
stop.stopRun()
obj.run()
console.log(stop);
stop.city = "Varna"
console.log(stop);
obj.city = stop.city
console.log(obj);
}
solve()