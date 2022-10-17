function rectangle(width,height,color) {
    let uper = color[0].toUpperCase();
    let colored = uper + color.substring(1,color.length)
    let obj = {
        width,
        height,
        color : colored,
        calcArea(){
            return this.width * this.height;

        }
    }
    return obj

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
