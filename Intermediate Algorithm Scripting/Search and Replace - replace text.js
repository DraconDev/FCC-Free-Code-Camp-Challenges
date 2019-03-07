function myReplace(str, before, after) {
    if (before.match(/^[A-Z]/)) {
        return str.replace(before, after[0].toUpperCase() + after.slice(1));
    }
    return str.replace(before, after);
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));