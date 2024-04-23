// This script demonstrates various string manipulation techniques in JavaScript

// Concatenating strings using the + operator
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Using the concat() method to combine strings
// const str1 = "hello";
// const str2 = "world";
const combined = str1.concat(" ", str2);
console.log(combined);

// Converting string case
const lowerCaseStr = "Hello, world";
const upperCaseResult = lowerCaseStr.toUpperCase();
const lowerCaseResult = lowerCaseStr.toLowerCase();
console.log(upperCaseResult);
console.log(lowerCaseResult);

// Comparing strings ignoring case
const str1 = "javascript";
const str2 = "JAVASCRIPT";
if (str1.toLowerCase() === str2.toUpperCase()) {
  console.log("The strings are equal");
} else {
  console.log("The strings are not equal");
}

// Validating string length
const username = "jhondsflksdhfsdh";
if (username.length >= 6) {
  console.log("Valid username");
} else {
  console.log("Invalid username");
}

// Slicing strings
const greeting1 = "hello world";
const word = greeting1.slice(6, 11);
console.log(word);

// Splitting strings
// const str1 = "I love coding in JavaScript";
const wordsArray = str1.split(" ");
console.log(wordsArray);

// Trimming whitespace
// const str2 = "  barash1311@gmail.com ";
const trimmedStr = str2.trim();
console.log(trimmedStr);

// Replacing substrings
const originalStr = "i have a red ball and red";
const replacement = "blue";
const replacedStr = originalStr.replace(/red/g, replacement);
console.log(replacedStr);

// Finding the last index of a substring
const text = "apple orange,Apple banana";
const lastIndex = text.lastIndexOf("apple", 12);
console.log(lastIndex);

// Checking if a string contains a substring
console.log(text.includes("Apple"));

// Converting a number to string
const num = String(43);
const num2 = String(num);
console.log(num + num2);
