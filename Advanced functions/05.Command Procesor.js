function solution() {
    let string = '';
    let obj = {
        append : (inputStr) => {  
           string += inputStr;
        },
        removeStart : (numToRemove) => {
            string = string.substring(numToRemove);
        },
        removeEnd : (numToRemove) => {
            string = string.substring(0,string.length - numToRemove)
        }, 
        print : () =>{
            console.log(string);
        }
    }
    return obj
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();