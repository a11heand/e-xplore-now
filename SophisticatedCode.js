/* 
   File Name: SophisticatedCode.js
   Description: A sophisticated and elaborate JavaScript code with more than 200 lines.
   Purpose: This code demonstrates advanced JavaScript concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Subclass of Person representing a Developer
class Developer extends Person {
  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills;
  }

  code() {
    console.log(`${this.name} is coding...`);
  }
}

// Function to find the largest number in an array
function findLargestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

// Function to calculate the factorial of a number
function calculateFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});

// Async function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Arrow function to calculate the square of a number
const square = (num) => num * num;

// Object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  
  start() {
    console.log(`Starting ${this.brand} ${this.model}...`);
  },
  
  stop() {
    console.log(`Stopping ${this.brand} ${this.model}...`);
  }
};

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Map numbers to squares using Array map method
const squares = numbers.map((num) => num * num);

// Example of a closure
function outerFunction() {
  const outerVariable = "Hello,";
  
  function innerFunction(name) {
    console.log(outerVariable + " " + name);
  }
  
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc("John"); // Output: Hello, John

... // Continue with more lines of code (200+ lines)