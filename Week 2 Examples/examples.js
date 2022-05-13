/*** Example 1 Working with Variables ***/

// // 1.1
// var myFriend = "Tony";

// function greetings() {
//   return 'Greetings ' + myFriend + '.';
// }

// console.log('results: ', greetings());

// // 1.2
// let currentYear = 2022

// console.log('current year result: ', currentYear); //should be the value of the currentYear variable

// //1.3
// const lacroix1 = 'grapefruit'

// function testBestFlavor() {
//   // TODO: declare a const names lacroix2 and initialized it to the value 'orange'

//   const lacroix2 = 'orange'
//   return 'Ana says, lacroix ' + lacroix2 + 'is a better flavor than lacroix ' + lacroix1;
// }

// console.log('result: ', testBestFlavor());

/*** Example 2 Working with Arrays ***/

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let elementAtIndexFive = numArray[5];

// console.log('The array element with index 5 is: ', elementAtIndexFive);

/*** Example 3 Working with Conditionals ***/

// let response;

// function isOldEnoughToVote(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('results: ', isOldEnoughToVote(18));

/*** Example 4 Working with Functions ***/

// // 4.1
// function add(x, y) {
//   return x + y;
// }

// console.log('results: ', add(3,2));

// // 4.2
// function greet(name) {
//   return 'Hey there ' + name;
// }

// console.log('results: ', greet('Dani'));

// // 4.3
// function isString(a, b, c) {
//   if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(c) === 'string') {
//     return 'strings';
//   } else {
//     return 'not strings'
//   }
// }

// console.log('results: ', isString('a', 'b', 'c'));

/*** Example 5 Working with Objects ***/

// 5.1
// function getProduct(productId) {

//   return {
//     id: productId,
//     serialNumber: 'WD579000',
//     manufacturer: 'Apple',
//     price: 1500
//   }
// }

// console.log('getProduct result: ' + JSON.stringify(getProduct(1)));

// 5.2

// let bike = {
//   model: 'marin',
//   wheels: 2,
//   speed: 8,
//   authorizedBikers: ['Beatrice', 'Alan'],
//   hasHadAccident: false,
//   // getSpeed() {
//   //   this.speed = 12;
//   //   return this.speed;
//   // }
// };

// function getBikeSpeed() {
//   bike.speed = 12;
//   //bike['speed'] = 12;
//   return bike.speed;
// }

//console.log('getBikeSpeed result: ' + JSON.stringify(getBikeSpeed()));
//console.log('getBikeSpeed result: ' + JSON.stringify(bike.getSpeed()))

/*** Example 6 Scheduling Computations ***/
// function helloWorld() {
//   console.log("Hello World");
// }

// function delayHelloWorld() {
//   setTimeout(helloWorld, 3000);
// }

// helloWorld();
// delayHelloWorld();

/*** Example 7 Repeating Computations ***/
// function helloWorld(){
//   console.log('Hello World');
// };

// function repeatHelloWorld() {
//   setInterval(helloWorld, 3000);
// }

// repeatHelloWorld();

/*** Example 8 Maintaining Info on a Page ***/
// var counter = 0;

// function incrementCounter() {
//   counter++;
//   console.log(counter);
// }

// setInterval(incrementCounter, 3000);


/*** Example 9 Simulating Ball Movement ***/
//Set global variable that would contain the position, velocity and the html element "ball"
// var reverseX = false;
// var reverseY = false;
// var positionX = 0;
// var positionY = 200;
// var velocity = 100;
// var ball = document.getElementById('ball');

// //write a function that can change the position of the html element "ball"
// function moveBall() {

//   console.log('firing');
//   // two fixed x-axis coordinates (you will use these variable in step 3)
//   var Xmin = 0;
//   var Xmax = 400;
//   var Ymin = 200;
//   var Ymax = 500;

//   if (reverseX === false) {
//     positionX = positionX + velocity;
//   } else {
//     positionX = positionX - velocity;
//   }

//   if (reverseY === false) {
//     positionY = positionY + velocity;
//   } else {
//     positionY = positionY - velocity;
//   }

//   ball.style.left = positionX + 'px';
//   ball.style.top = positionY + 'px';

//   if (positionX > Xmax || positionX === Xmin) {
//     reverseX = !reverseX;
//   } 

//   if (positionY > Ymax || positionY === Ymin) {
//     reverseY = !reverseY;
//   }

// }

// // This call the moveBall function every 100ms
// setInterval(moveBall, 100);