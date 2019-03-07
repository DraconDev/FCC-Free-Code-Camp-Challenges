function pairElement(str) {
    return str
        .split("")
        .map(function (e) {
            if (e == "G") {
                return [e, "C"]
            }
            if (e == "C") {
                return [e, "G"]
            }
            if (e == "A") {
                return [e, "T"]
            }
            if (e == "T") {
                return [e, "A"]
            }
        });
};


pairElement("GCG");
console.log(pairElement("GCG"));