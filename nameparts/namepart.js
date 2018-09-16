/* Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
Hint: use indexOf and substring (avoid substr, it is being deprecated).
Expect the name to be a const - you can’t modify it. */

"use strict";

const fullName = "Magnus Bergstrøm Carlsen";

const firstSpace = fullName.indexOf(" ");
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

const firstName = fullName.substring(0, firstSpace);
const secondName = fullName.substring(firstSpace, secondSpace).trim();
const lastName = fullName.substring(secondSpace + 1, );


console.log(firstName);
console.log(secondName);
console.log(lastName);

function myName() {
    console.log(fullName);
}



