function translatePigLatin(str) {
    if (str.match(/^[aeiuo]/)) {
        return str + "way";
    } else {
        return str.replace(/(^[^aeiuo]+)(.*)/, '$2$1ay');
    }

}
// Looks nice
// function translatePigLatin(str) {
//     return str
//         .replace(/^([aeiou])(.*)/, '$1$2way')
//         .replace(/^([^aeiou]+)(.*)/, '$2$1ay');
// };




translatePigLatin("consonant");
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("llklklkllk"));