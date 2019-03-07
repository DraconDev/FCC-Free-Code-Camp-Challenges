// For trickier challenges better no use arrow functions
// Shifts letters by 13

function rot13(str) {
    return str
        .split("")
        .map(function (e) {
            // console.log(e);
            if ((65 <= e.charCodeAt()) && (e.charCodeAt() <= 90)) {
                if ((e.charCodeAt() + 13 <= 90)) {
                    e = String.fromCharCode(e.charCodeAt() + 13)
                } else {
                    e = String.fromCharCode(65 + e.charCodeAt() + 13 - 91)
                }
            }
            return e;
        })
        .join("");
};

// console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));