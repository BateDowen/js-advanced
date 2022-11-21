function solve() {
    function add(a) {
        let res = 0;

        function inner(number) {
           res += number
           return inner
        }
        inner.toString =() => {
            return res
        }
        return inner(a)
    }
    
    
 console.log(add(1)(6)(-3).toString())
}
solve()