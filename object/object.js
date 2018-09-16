"use strict";

const student1 = {
    firstName: "Harry",
    lastName: "Potter",
    toString: function() {
        return this.firstName+" "+this.lastName;
    }
}

const student2 = {
    firstName: "Ron",
    lastName: "Weasley",
  /*   toString() {
        return this. firstName+" "+this.lastName;
    } */
}



student1.sayHi = function() {
    return "Hi, " + this.firstName;
}



function sortIntoHouse( student, house ) {
    student.house = house;
};

function printStudentInfo ( student ) {
    console.log(`first name: ${student.firstName}
last name: ${student.lastName}`);
}

sortIntoHouse(student1, "Gryffindor");
sortIntoHouse(student2, "Gryffindor");


function ourToString() {
    return this.firstName + " " + this.lastName;
}




/* student1.toString = ourToString;
student2.toString = ourToString; */

console.log( student1.firstName + " " + student1.lastName );
console.log( student2.firstName );

console.log("---Before---");
console.log("Student is: " + student1);
console.log("Student is: " + student2);

Object.setPrototypeOf(student2, student1);

console.log("---After---");
console.log("Student is: " + student1);
console.log("Student is: " + student2);