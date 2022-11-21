function solution(num) {
   return function (num2) {
     return num + num2
   }
   // return add.bind(this, num)
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(5));