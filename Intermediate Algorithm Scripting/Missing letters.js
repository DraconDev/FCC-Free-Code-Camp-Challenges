// function fearNotLetter(str) {
//     return str
//         .split("")
//         .reduce(function (accu, curr) {
//             // console.log(curr.charCodeAt(), accu.charCodeAt());
//             if (curr.charCodeAt() - accu.charCodeAt() !== 1) {
//                 return String.fromCharCode(accu.charCodeAt() + 1);
//             }
//             if (curr.charCodeAt() == 122) {
//                 return undefined;
//             }
//             return accu = curr;
//         })
// }

// function fearNotLetter(str) {
//     return str
//         .split("")
//         .find(function (x, i) {
//             if (x.charCodeAt() == 122) {
//                 return undefined;
//             }
//             // console.log(str[i], str[i + 1]);
//             console.log(x.charCodeAt());
//             if (x.charCodeAt() - str[i + 1].charCodeAt() !== 1) {
//                 return String.fromCharCode(x.charCodeAt() + 1);
//             }
//         })
// }

function fearNotLetter(str) {
    let result = str
        .split("")
        .find(function (e, i, arr) {
            if (e.charCodeAt() == 122) {
                return undefined;
            }
            // console.log(str[i], str[i + 1]);
            // console.log(x.charCodeAt(), arr[i + 1].charCodeAt());
            if ((arr[i + 1].charCodeAt() - e.charCodeAt()) > 1) {
                return e;
            }

        })
    if (result) {
        result = String.fromCharCode(result.charCodeAt() + 1);
    }
    return result;
}

// fearNotLetter("abcefjk");
console.log(fearNotLetter("abce"));