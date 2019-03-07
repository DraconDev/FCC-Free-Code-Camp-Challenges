function destroyer(arr, ...args) {


    // return arr.filter(x => args.every(x2 => x !== x2));
    return arr.filter(x => !args.includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));