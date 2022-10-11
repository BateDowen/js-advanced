function solve(input) {
    let obj = {}
    for(let line of input){
        line = line.split(' <-> ');
        let city = line[0];
        let population = Number(line[1]);
        if (obj.hasOwnProperty(city)) {
            obj[city] += population
            
        } else{
            obj[city] = population;

        }
        
    }
    for(let line in obj){
       console.log(`${line} : ${obj[line]}`); 
    }
    
}
solve(['Istanbul <-> 100000',
'Istanbul <-> 1000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',])