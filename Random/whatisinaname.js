// function whatIsInAName(collection, source) {
//     let attributes = Object.getOwnPropertyNames(source);
//     // console.log(attributes);
//     return collection.filter(x => attributes.every(x2 => x[x2] == source[x2]));
// }

function whatIsInAName(collection, source) {
    let attributes = Object.getOwnPropertyNames(source);
    // console.log(attributes);
    return collection.filter(collectionElement => attributes.every(attributesElement => collectionElement[attributesElement] == source[attributesElement]));
}

// Doesn't work

// function whatIsInAName(collection, source) {
//     let attributes = Object.getOwnPropertyNames(source);
//     // console.log(attributes);
//     // console.log(collection.filter(x => attributes.every(x2 => x[x2])));
//     return collection.filter(x => attributes.every(x2 => x[x2]));
// }


// whatIsInAName([{
//             first: "Romeo",
//             last: "Montague"
//         }, {
//             first: "Mercutio",
//             last: null
//         }, {
//             first: "Tybalt",
//             last: "Capulet"
//             last: "Capulet"
//         });



console.log(
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
    })

);

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