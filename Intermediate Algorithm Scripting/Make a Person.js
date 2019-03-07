// var Person = function (firstAndLast) {
//     // Complete the method below and implement the others similarly
//     this.getFullName = function () {
//         return firstAndLast;
//     };
//     return firstAndLast;
// };

class Person {
    constructor(firstAndLast) {
        this.getFullName = function () {
            return firstAndLast;
        };
        this.getFirstName = function () {
            return firstAndLast.split(" ")[0];
        }
        this.getLastName = function () {
            return firstAndLast.split(" ")[1];
        }
        this.setLastName = function (x) {
            firstAndLast = [firstAndLast.split(" ")[0], x].join(" ");
        }
        this.setFirstName = function (x) {
            firstAndLast = [x, firstAndLast.split(" ")[1]].join(" ");
        }
        this.setFullName = function (x) {
            firstAndLast = x;
        }
    }
};




var bob = new Person('Bob Ross');
console.log(bob);

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setLastName("Bob"));
console.log(bob.getFullName());
console.log(bob.setFirstName("Tea"));
console.log(bob.getFullName());
console.log(bob.setFullName("Little Bob"));
console.log(bob.getFullName());