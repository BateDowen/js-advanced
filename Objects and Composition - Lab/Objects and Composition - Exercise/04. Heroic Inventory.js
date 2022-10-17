function solve(input) {
    let resultArr = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        resultArr.push({name,level,items});

    }
    console.log(JSON.stringify(resultArr));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])