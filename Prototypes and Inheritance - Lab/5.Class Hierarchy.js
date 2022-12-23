function solve() {

    function Figure(units = 'cm'){
        this.units = units;
        let multiplayer = 1;
    };
    
    Object.defineProperty(Figure.prototype, 'area', {
        get: function (){
            if (this.constructor.name === 'Circle') {
            this.changeUnits(this.units);
            return Math.PI * ((this.multiplayer * this.radius) ** 2);
        };
        if (this.constructor.name === 'Rectangle') {
            this.changeUnits(this.units);
            return (this.width * this.multiplayer) * (this.heigth * this.multiplayer);
        };
        }
        
    })
    Figure.prototype.changeUnits = function (units){
        this.units = units
            if (units === 'mm') {
            return this.multiplayer = 10;
            };
            if (units === 'm') {
              return  this.multiplayer = 0.01;
            };
            if (units === 'cm') {
              return  this.multiplayer = 1;
            };
        };
    Figure.prototype.toString = function (){

        if (this.constructor.name === 'Circle') {
            let radius = this.radius * this.multiplayer;
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
        };
        if (this.constructor.name === 'Rectangle') {
            let width = this.width * this.multiplayer;
            let height = this.heigth * this.multiplayer;
            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
        };

            return `Figures units: ${this.units}`
        }

    function Circle(radius){
        Figure.call(this);
        this.radius = radius;
        
    };
    Circle.prototype = Object.create(Figure.prototype,{
        constructor: {value: Circle, configurable: true}
    });

    function Rectangle(width,height,units){
    Figure.call(this,units);
    this.width = width ;
    this.heigth = height;
    };
    Rectangle.prototype = Object.create(Figure.prototype, {
        constructor: {value: Rectangle, configurable:true}
    });

return {
    Figure, Circle, Rectangle
}
}
    
//     let c = new Circle(5);
//     console.log(c.area); // 78.53981633974483
//     console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
    
//     let r = new Rectangle(3, 4, 'mm');
//     console.log(r.area); // 1200 
//     console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
    
//     r.changeUnits('cm');
//     console.log(r.area); // 12
//     console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
    
//     c.changeUnits('mm');
//     console.log(c.area); // 7853.981633974483
//     console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
// }
// solve()
