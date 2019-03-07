// function spinalCase(str) {
//     return str
//         .replace(/([A-Z])/g, ' $1')
//         .trim()
//         .split(/[\s|_]+/g)
//         .join("-")

//         .toLowerCase();
// }

// function spinalCase(str) {
//     return str
//         .replace(/([A-Z])/g, ' $1')
//         .trim()
//         .replace(/[\s|_]+/g, "-")
//         .toLowerCase();
// }

function spinalCase(str) {
    return str
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
}


// PRO
// function spinalCase(str) {
//     // "It's such a fine line between stupid, and clever."
//     // --David St. Hubbins

//     return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
//   }

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));