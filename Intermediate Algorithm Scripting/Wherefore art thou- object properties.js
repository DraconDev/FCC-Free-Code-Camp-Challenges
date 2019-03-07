function whatIsInAName(collection, source) {
    let attributes = Object.keys(source);
    return collection.filter(x => attributes.every(x2 => x[x2] == source[x2]));
}


whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});



// console.log(
//     whatIsInAName([{
//         first: "Romeo",
//         last: "Montague"
//     }, {
//         first: "Mercutio",
//         last: null
//     }, {
//         first: "Tybalt",
//         last: "Capulet"
//     }], {
//         last: "Capulet"
//     })

// );

console.log(whatIsInAName([{
    "apple": 1,
    "bat": 2
}, {
    "apple": 1
}, {
    "apple": 1,
    "bat": 2,
    "cookie": 2
}, {
    "bat": 2
}], {
    "apple": 1,
    "bat": 2
}));