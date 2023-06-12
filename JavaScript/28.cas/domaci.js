// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 2. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function numbersInRange(num1, num2) {
  let inRange1 = (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100);
  let inRange2 = (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100);
  if (inRange1 && inRange2) {
    return "Both numbers are in range";
  } else if (inRange1) {
    return "Number one is in the specified range";
  } else if (inRange2) {
    return "Number two is in the specified range";
  } else {
    ("Both numbers are not in the specified ranges.");
  }
}
console.log(numbersInRange(20, 40));

// 2.

function findLargerNumber(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both numbers are equal.";
    }
  } else {
    return "Both numbers should be within the range of 40 to 60.";
  }
}

console.log(findLargerNumber(40, 46));
