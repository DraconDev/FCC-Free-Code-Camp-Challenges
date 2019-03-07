function convertHTML(str) {
    let html = {
        "&": "&​amp;",
        "<": "&​lt;",
        ">": "&​gt;",
        '"': "&​quot;",
        "'": "&​apos;"
    };

    // str = str.replace(/\&/g, html["&"]);
    // str = str.replace(/\>/g, html[">"]);
    // str = str.replace(/\</g, html["<"]);
    // str = str.replace(/\"/g, html["'"]);
    // str = str.replace(/\'/g, html['"']);
    // return str;

    return str.split("").map(e => html[e] || e).join("");

}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("<>"));