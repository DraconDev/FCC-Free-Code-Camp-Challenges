function truthCheck(collection, pre) {
    // Is everyone being true?

    // for (let i in collection) {
    //     // console.log(collection[i].hasOwnProperty(pre));
    //     console.log(collection[i][pre]);
    // }

    // console.log(collection.every(x => x[pre]));

    console.log(collection);
    console.log("pre " + pre);

    return collection.every(x => x[pre]);
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");