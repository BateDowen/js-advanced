function solve(arr, command) {
    let sorted = []
    if (command === 'asc') {
       sorted = arr.sort((a,b) => a-b);

    } else {
      sorted =  arr.sort((a,b) => b-a);

    }
    return sorted
}
solve([14, 7, 17, 6, 8], 'desc');

//fancy way :D
function sorter(arr, order) {
    return arr.sort((a, b) => order === 'asc' ? a - b : b - a)
}
