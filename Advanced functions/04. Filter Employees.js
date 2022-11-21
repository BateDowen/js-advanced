function solve(data, criteria) {
    let arrayOfData = JSON.parse(data);
    let counter = 0;

    for (const person of arrayOfData) {
        let sex = criteria.split('-');
        let isTrueKey = Object.keys(person).some(el=>el === sex[0]);
        let isTrueValue = Object.values(person).some(el => el === sex[1]);

        if (isTrueKey && isTrueValue || criteria === 'all') {
            console.log(`${counter}. ${person.first_name} ${person.last_name} - ${person.email}`);
            counter++
        }
    }
    
}
// Fancy code 
function solve2(data, criteria) {
    let employes = JSON.parse(data);
    let [preperty, value] = criteria.split('-');

    employes
    .filter(x => x[preperty] === value)
    .map((x, index) => `${index}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .forEach(element => {console.log(element);});

}

solve2(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all')