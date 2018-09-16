"use strict";

const domList = document.querySelector("div ul");
const gryButton = document.querySelector("#gry");
const hufButton = document.querySelector("#huf");
const ravButton = document.querySelector("#rav");
const slyButton = document.querySelector("#sly");
const firstButton = document.querySelector("#o-first");
const lastButton = document.querySelector("#o-last");

let students = [];

document.addEventListener("DOMContentLoaded", init);

//Initialize with a fetch
function init() {
  fetch("students.json")
    .then(result => result.json())
    .then(json => createList(json));
}

// Use fetched data to add each student as an object to the array
function createList(data) {
  console.log(data);

  /*    1. Object.keys(data) returns all properties from an object as an array
        2. By accessing the data object with the current forEach property, we access its array
        3. E.g. first forEach loop uses Gryffindor as elem
        4. By calling data.Gryffindor, we get the Gryffindor array of students
  */
  Object.keys(data).forEach(house => {
    data[house].forEach(student => {
      // Split the name into an array of firstname and lastname
      const studentNames = student.split(" ");
      // Create a new student object based on the constructor
      const newStudent = new Student(studentNames[0], studentNames[1], house);
      students.push(newStudent);
    });
  });
  displayStudents(students);
  console.log(students);
}

// Constructor which is the object prototype
function Student(first, last, house) {
  this.firstName = first;
  this.lastName = last;
  this.house = house;
}

// Adding the toString method to the constructor
Student.prototype.toString = function() {
  return this.firstName + " " + this.lastName + " : " + this.house;
};

//display students on the HTML
function displayStudents(toDisplay) {
  domList.innerHTML = "";
  toDisplay.forEach(elem => {
    domList.innerHTML += "<li>" + elem.toString() + "</li>";
  });
}

// Add eventlisteners to each button and give it an argument to use with the function
gryButton.addEventListener("click", function() {
  filterHouse("Gryffindor");
});

hufButton.addEventListener("click", function() {
  filterHouse("Hufflepuff");
});

slyButton.addEventListener("click", function() {
  filterHouse("Slytherin");
});

ravButton.addEventListener("click", function() {
  filterHouse("Ravenclaw");
});

// Filter the list based on the choice passed by the eventlistener
function filterHouse(choice) {
  const filteredStudents = students.filter(student => {
    return student.house === choice;
  });
  displayStudents(filteredStudents);
}

// Eventlistener First Name sorting button
firstButton.addEventListener("click", function() {
  orderByName("firstName");
});

lastButton.addEventListener("click", function() {
  orderByName("lastName");
});

function orderByName(nameChoice) {
  const sortedStudent = students.sort(sortName(nameChoice));
  displayStudents(sortedStudent);
  console.log(students);
}

function sortName(nameChoice) {
  return function(a, b) {
    return a[nameChoice] > b[nameChoice] ? 1 : -1;
  };
}
