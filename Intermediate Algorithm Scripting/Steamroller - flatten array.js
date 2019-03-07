function steamrollArray(arr) {
    // I'm a steamroller, baby

    while (arr.findIndex(x => Array.isArray(x)) >= 0) {
        arr = [].concat(...arr);
    }
    return arr;
}

// Recursive solution

// function steamrollArray(arr) {
//     let flat = [].concat(...arr);
//     return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
//   }

//   flattenArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));