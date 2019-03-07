function uniteUnique(...args) {
    // let newArr = [];
    let arr = [].concat(...args);

    // Array of non duplicates
    // newArr = arr.filter((x, i) => arr.every((x2, i2) => x != x2 || i == i2));

    // Array of duplicates
    // arr = arr.filter((x, i) => (arr.indexOf(x) != i));

    // Removes Duplicates
    // arr = arr.filter((x, i) => (arr.indexOf(x) == i));

    // return arr.concat(newArr);

    // Creates a new array of every value only once, not sorted
    return [...new Set(arr)];
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));