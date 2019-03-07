function smallestCommons(arr) {
    let newArr = [];

    //Fill array starting with the lowest and ending with highest element in arguments

    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        newArr.push(i);
    }

    //Find the lowest I element that can divide by all elements in newArr without any remainders

    var i = Math.max(...arr);
    // console.log(newArr.every(x => i % x == 0));
    while ((newArr.every(x => i % x == 0)) == false) {
        i++;
    }
    return i;
}
smallestCommons([1, 13]);
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));