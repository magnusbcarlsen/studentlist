"use strict";


/* const animal = ["Cat", "Dog", "Dog", "Cat", "Cat"];

function onlyCats( item ) {
    if ( item === "cat") {
        return true;
    } else {
        return false;
    }
}

const cats = animals.filter (onlyCats);

console.log(animal); */


const weasley = ["Arthur", "Molly", "Bill", "Charlie", "Percey", 
"fred", "George", "Ron", "Ginny"];

function allInfo( item, index, arr ) {
    console.log(`${item} is the ${index}st element in:`);
    console.log(arr);
}

weasley.forEach( allInfo );