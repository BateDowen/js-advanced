function getFibonator() {
    let n = 0;
    let n2 = 1;
    let nextterm 
    return function () {
       nextterm = n + n2
       n = n2;
       n2 = nextterm;
       return n
    }
}

let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 