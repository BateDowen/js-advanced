function solve(input) {
    let arrOfStr = [];

    input.forEach(element => {
        let [command, string] = element.split(' ');
        let obj = {
            add : (string) => {
                arrOfStr.push(string)
            },
            remove : (string) => {
               let newArr = arrOfStr.filter(el => el != string);
               return arrOfStr = newArr
            },
            print : () => {
                console.log(arrOfStr.join(','));
            }
        };
    
        return obj[command](string)
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])