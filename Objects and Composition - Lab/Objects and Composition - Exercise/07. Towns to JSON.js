function solve(input) {
    let reg = /[A-Za-z]+/gm
    let col = input.shift()
    let [town,latitude,longitude] = col.match(reg);
    
    let arr = []

    for(let line of input){
        let obj = {};
        obj[town] = town
        obj[latitude] = latitude
        obj[longitude] = longitude;
        line = line.split('|');
        let city = line[1].match(reg).join(' ')
        obj[town] = city;
        let lat = Number(line[2]).toFixed(2);
        let long = Number(line[3]).toFixed(2);
        obj[latitude]= Number(lat);
        obj[longitude] = Number(long);
        arr.push(obj)
        console.log();
    }
    console.log(JSON.stringify(arr));
    
         
}
// solve(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'])
solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])