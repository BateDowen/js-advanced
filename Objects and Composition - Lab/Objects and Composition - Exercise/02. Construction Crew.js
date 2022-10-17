function solve(input) {
    let personObj = input;
    if (personObj.dizziness === true) {
        let waterNeed = (personObj.weight * 0.1) * personObj.experience;
        personObj.levelOfHydrated += waterNeed;

        personObj.dizziness=false;

    }
    return personObj
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })
solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })