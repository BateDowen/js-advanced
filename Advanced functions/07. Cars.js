// НЕЗАВЪРШЕНА!!!
function solve(input) {
    input.forEach(element => {
        // let [command,name] = element.split(' ');
        let [command,childName, inherit, parentName] = element.split(' ')
        if (command === 'create') {
        let obj ={};
        obj[childName] = {};
        if (inherit === 'inherit') {
            obj[childName] = obj[parentName];
            console.log(obj[childName]);
        }
       }
    });
}
solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)