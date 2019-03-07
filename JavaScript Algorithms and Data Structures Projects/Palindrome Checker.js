function palindrome(str) {

    return str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").every((e, i, a) => (e == a[a.length - 1 - i]));
}



console.log(palindrome("eye"));
console.log(palindrome("not a palinDrome"));
console.log(palindrome("race car"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));