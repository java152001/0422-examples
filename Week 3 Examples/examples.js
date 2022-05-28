// Example 1 Basic Data Types

// let myFirstName = `Ash`;
// let cities = ['Pallet Town', 'Viridian City', 'Cerulean City', 'Pewter City', 'Lavender Town', 'Celadon City', 'Fuschia City', 'Cinnabar Island', 'Victory Road']
// let numberOfCities = cities.length;
// let havingFun = 'true';
// console.log('havingFun1: ', havingFun)
// havingFun = true;
// console.log('havingFun2: ', havingFun)

// let areWeHavingFun = function (caughtEmAll) {
//     if (caughtEmAll) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log('myFirstName: ', myFirstName);
// console.log('numberOfCities: ', numberOfCities);

// console.log('stillHavingFun: ', areWeHavingFun(false));

// Example 2 Variable Scope

// var starter = "Pikachu";

// function myStarter() {
//     return starter;
// }

// function yourStarter() {
//     var starter = 'squirtle';
//     starter = starter.toUpperCase();
//     return starter;
// }

// console.log('myStarter result: ', myStarter());

// console.log('yourStarter result: ', yourStarter());

// Example 3 Equal Operator
// 3.1 Re-assignment

let kantoCity = [{city: "Vermillion City", population: 10000}, {city: "Cerulean City", population: 5000}];

let newKantoCities = kantoCity.map(function(town) {
    if (town.population > 8000) {
        return 'New ' + town.city
    } else {
        return town.city
    }
})

console.log(newKantoCities);
console.log(kantoCity);

// let johtoCity = kantoCity;

// johtoCity[0] = 'New ' + kantoCity;

// console.log(kantoCity);

// console.log(johtoCity);

// 3.2 Re-assigment

// function getMoveSet() {
//     let firstMoves = ["Earthquake", "Knock Off", "Substitute", "Dragon Dance"];

//     let secondMoves = firstMoves;

//     firstMoves[0] = "Dragon Claw";
//     firstMoves[1] = "Trick Room";
//     firstMoves[2] = "Curse";
//     firstMoves[3] = "Shadow Claw";

//     return secondMoves;
// }

// console.log('moveset = ' + getMoveSet());

// Example 4 Walking Around Exercise
// const area = {
//     element: document.getElementById('area'),
//     width: 600,
//     height: 400,
//   };
  
//   // No need to change the following code
//   // The initialize function creates the area div on the Html page
//   function initialize() {
//     area.element.style.width = area.width + 'px';
//     area.element.style.height = area.height + 'px';
//   }
  
//   // No need to change the following code
//   // The moveTo function moves a given ball to a set x and y coordinates on the page
//   function moveTo(ball, x, y) {
//     ball.element.style.left = x + 'px';
//     ball.element.style.top = y + 'px';
//   }

//   function startTimer() {
//       setTimeout(function() {
//         startRickRoll();
//       }, 180000)
//   }

//   document.body.addEventListener('mousemove', function() {
//     console.log('mouse moved');  function startTimer() {
//         setTimeout(function() {
//           startRickRoll();
//         }, 180000)
//     }  
//   })
  
//   // No need to change the following code
//   // The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
//   function changeDirectionIfNecessary(ball, x, y) {
//     if (x < 0 || x > area.width - ball.width) {
//       ball.dx = -ball.dx;
//     }
//     if (y < 0 || y > area.height - ball.height) {
//       ball.dy = -ball.dy;
//     }
//   }
  
//   // TODO: implement the create function

//   function create(color, dx, dy) {
//     const newBall = Object.create(this);
  
//     // TODO: Set newBall properties: dx, dy, width, height

//     newBall.dx = dx;
//     newBall['dy'] = dy;
//     newBall.width = 50;
//     newBall.height = 50;
  
//     // TODO: set the newBall.element property and initialize it to a Html element "div"

//     newBall.element = document.createElement('div');
  
//     // TODO: set the backgroundColor, width and height style properties for newBall.element

//     newBall.element.style.width = newBall.width + 'px';
//     newBall.element.style.height = newBall.height + 'px';
//     newBall.element.style.backgroundColor = color;
  
//     // This line set the CSS class for newBall.element. No need to change this line

//     newBall.element.className += ' ball';
  
//     // TODO: set the width and height of newBall based on newBall.element
//     // Hint: use the Javascript parseInt() function to convert a string value to integer

//     newBall.width = parseInt(newBall.element.style.width);
//     newBall.height = parseInt(newBall.element.style.height);
  
//     // TODO: use the Javascript appendChild() function to add newBall.element to the area element

//     area.element.appendChild(newBall.element);

//     console.log(newBall);
  
//     return newBall;
//   }
  
//   // TODO: implement the update function
//   function update(ball, x, y) {

//     x = x + ball.dx;
//     y = y + ball.dy;

//     // TODO: use the moveTo() function to move the ball

//     moveTo(ball, x, y);

//     // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms

//     setTimeout(function() {
//       changeDirectionIfNecessary(ball, x, y);
//       update(ball, x, y);
//     }, 16)
//   }
  
//   // Uncomment these lines for step 1 of the activity
//   // This is expected to create 3 balls within the area div
  
//   initialize();
//   const ball1 = create('blue', 4, 3);
//   const ball2 = create('red', 1, 5);
//   const ball3 = create('green', 2, 2);
//   const ball4 = create('goldenrod', 3, 4);
//   // moveTo(ball1, 1, 1);
//   // moveTo(ball2, 10, 10);
//   // moveTo(ball3, 20, 20);
  
//   // Uncomment these lines for step 2 of the activity
//   // This is expected to make the 3 balls move around the area div
  
//   update(ball1, 70, 0);
//   update(ball2, 20, 200);
//   update(ball3, 300, 330);
//   update(ball4, 150, 250);