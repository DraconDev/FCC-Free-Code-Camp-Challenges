function sumFibs(num) {
    if (num <= 1) {

        return 1;
    }

    var prev = 1;
    var prev2 = 1;
    var curr = 0;
    var result = 2;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            result += curr;
        }
        console.log(curr, curr % 2);
        curr = (prev + prev2);
        prev2 = prev;
        prev = curr;

    }
    return result;

}


// function sumFibs(num) {
//     var prevNumber = 0;
//     var currNumber = 1;
//     var result = 0;
//     while (currNumber <= num) {
//         if (currNumber % 2 !== 0) {
//             result += currNumber;
//         }

//         currNumber += prevNumber;
//         prevNumber = currNumber - prevNumber;
//     }

//     return result;
// }

// test here



console.log(sumFibs(10));