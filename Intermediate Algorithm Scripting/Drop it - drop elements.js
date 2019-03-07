// Return the array from the first element that passes it

function dropElements(arr, func) {
    // Drop them elements.
    let index = arr.findIndex(func);
    // if (index >= 0) {
    //     return arr.slice(index);
    // } else {
    //     return [];
    // }
    return (index >= 0 ? arr.slice(index) : []);
}

console.log(dropElements([1, 2, 3, 4], function (n) {
    return n < 3;
}));
console.log(dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
}));