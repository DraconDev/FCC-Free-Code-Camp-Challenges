function addTogether(...args) {
    if (args.every(x => Number.isInteger(x))) {
        if (args.length > 1) {
            return args.reduce((a, b) => a + b);
        }
        return function (y) {
            if (Number.isInteger(y)) {
                return args[0] + y;
            }
        }
    }
}

console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2, 3));
console.log("S " + addTogether(2)(3));
console.log(addTogether(2)([3]));



// function addTogether(...args) {
//     // if (args.every(x => Number.isInteger(x))) {
//     //     return args.reduce((a, b) => a + b);
//     // }
//     return function (y) {
//         if (args.every(x => Number.isInteger(x))) {
//             return parseInt(args) + y;
//         }
//     }