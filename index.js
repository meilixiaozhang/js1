// const read = 4;
// const write = 2;
// const exec = 1;

// let mine = 0;
// mine = read | write;
// console.log(mine);
// let message = mine & read ? "yes" : "no";
// console.log(message);
// console.log(1 == 1);
// let x = 1 == true;
// console.log(x);
// console.log(1 == true);

// let a = "red";
// let b = "blue";
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);

// var hour = new Date().getHours();
// if (hour >= 6 && hour < 12) {
//   console.log("Good morning");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good evening");
// }

// let role = "ss";
// switch (role) {
//   case "admin":
//     console.log("You are admin");
//     break;
//   case "guest":
//     console.log("You are guest");
//     break;
//   case "anybody":
//     console.log("You are anybody");
//     break;
//   default:
//     console.log("Who are you");
//     break;
// }

// function returnMax(a, b) {
//   //   return Math.max(a, b);
//   return a > b ? a : b;
// }
// console.log(returnMax(0, 3));

// function isLandscape(width, height) {
//   //   return width > height ? "Landscape" : "Portrait";
//   return width > height;
// }
// console.log(isLandscape(5, 5));

// function fizzBuzz(input) {
//   if (isNaN(input)) {
//     console.log(input + " is not a number.");
//   } else {
//     if (input % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if (input % 3 == 0) {
//       console.log("Fizz");
//     } else if (input % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(input);
//     }
//   }
// }
// fizzBuzz(3);

// function checkSpeed(speed) {
//   if (speed <= 70) {
//     console.log("Ok");
//   } else {
//     var overspeed = speed - 70;
//     var point = Math.floor(overspeed / 5);
//     if (point >= 12) {
//       console.log("License suspended.");
//     } else {
//       console.log("Point: " + point);
//     }
//   }
// }
// checkSpeed(80);

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 == 0) {
//       console.log(i, "EVEN");
//     } else {
//       console.log(i, "ODD");
//     }
//   }
// }
// showNumbers(10);

// function countTruthy(array) {
//   var count = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i]) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }
// countTruthy([false, null, 3, 999, "amy", ""]);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }
// showProperties({ title: "a", year: 2019, author: "b" });

// function sum(limit) {
//   var count = 0;
//   for (i = 0; i <= limit; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       count += i;
//     }
//   }
//   console.log(count);
// }
// sum(10);

// function calculateGrade(marks) {
//   var sum = 0;
//   for (i = 0; i < marks.length; i++) {
//     sum += marks[i];
//   }
//   var averageMark = sum / marks.length;
//   if (averageMark < 60) {
//     console.log("F");
//   } else if (averageMark < 70) {
//     console.log("D");
//   } else if (averageMark < 80) {
//     console.log("C");
//   } else if (averageMark < 90) {
//     console.log("B");
//   } else {
//     console.log("A");
//   }
// }
// calculateGrade([80, 80, 90]);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     var pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// showStars(5);

// function showPrimes(limit) {
//   for (var i = 0; i <= limit; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;

//   var sqrt = Math.sqrt(num);

//   for (var i = 2; i <= sqrt; i++) if (num % i === 0) return false;
//   return true;
// }
// showPrimes(20);

// Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     }
//   }
// }
// const circle = createCircle(1);

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);
