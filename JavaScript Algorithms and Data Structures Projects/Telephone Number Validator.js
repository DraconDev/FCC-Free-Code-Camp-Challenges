// Don't try to be too efficient, it leads to mistakes
function telephoneCheck(str) {
    // let valid = ["(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)", '(^[(][0-9]{3}[)][ ]?[0-9]{3}-[0-9]{4}$)', "(^[0-9]{3} [0-9]{3} [0-9]{4}$)",
    //     "(^1 [0-9]{3} [0-9]{3} [0-9]{4}$)", "(^[0-9]{10}$)"
    let valid = ["(^[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}$)", '((^[(][0-9]{3}[)][ ]?[0-9]{3}-[0-9]{4}$))', "(^1[ ][0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}$)", '((^1 ?[(][0-9]{3}[)][ ]?[0-9]{3}-[0-9]{4}$))'];

    // best solution ^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$;

    // console.log(valid[0]);
    // console.log(var e = new RegExp(valid[0]));
    for (let e of valid) {
        if (str.match(new RegExp(e, "g"))) {
            return true;
        }
    }
    return false;
    // console.log(new RegExp(valid[0], "g"));
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));

//  555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555