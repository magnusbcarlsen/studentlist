/* function myFunc() {
    console.log("function runs")
}

setTimeout( myFunc, 5000 );

const firstName = "Magnus";
 */

 function writeFullName( firstName, middleName, lastName ) {
     console.log(`full name is ${firstName} ${middleName} ${lastName}`);
 }

 const firstName = "Magnus";
 const middleName = "Bergstrøm";
 const lastName = "Carlsen";


 writeFullName(firstName, middleName, lastName);

 function splitName( fullName ) {
     const space = fullName.indexOf(" ");
     const firstName = fullName.substring(0, space);
 }

 