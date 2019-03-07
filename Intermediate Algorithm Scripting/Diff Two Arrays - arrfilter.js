function diffArray(arr1, arr2) {
    var newArr = [...arr1, ...arr2];

    // newArr = newArr.filter((x, i) => newArr.every(function (x2, i2) {
    //     if ((i == i2) || (x !== x2)) {
    //         return x;
    //     }
    // }))
    // return newArr;


    newArr = newArr.filter((x, i) => newArr.every((x2, i2) => ((i == i2) || (x !== x2))));

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));