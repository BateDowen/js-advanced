function solve(input) {
  let obj ={};
  for(let i = 0; i < input.length; i+=2){
    let name = input[i];
    let cal = Number(input[i+1])
    obj[name] = cal;

  }
  console.log(obj);

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])