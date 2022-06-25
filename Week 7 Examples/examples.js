/*** Example 1 DOM manipulation and property fetching ***/


// function expects just the id of a DOM element as a string

// function getElementWidth(ele) {
//   let domEle = document.getElementById(ele);
//   // why do we have access to this property?
//   // what does it return by default and what did we change it too below?
//   // lastly, are there many other ways we could do this?
//   return domEle.offsetWidth + ' px';
// }

// window.onload = () => {
//   //where does the mainDiv and areaWidth value we use below come from?
//   document.getElementById('areaWidth').innerHTML = getElementWidth('mainDiv');
// }

/*** Example 2 DOM input and insertion ***/

// function addTodo() {

//   // what is this line doing?
//   let todoName = document.getElementById('todoName').value;

//   let newItem = document.createElement('li');

//   newItem.innerHTML = todoName;

//   let todoList = document.getElementById('todoList');

//   todoList.appendChild(newItem);

// }

// // Event Listeners are another way we can make our browser listen for things and execute code when they happen
// let btn = document.getElementById('addBtn');

// btn.addEventListener('click', addTodo);

/*** Bonus Fetch Example ***/

// fetch('https://random.dog/woof.json')
//   .then(response => response.json())
//   .then(data => {
//     const parent = document.getElementById('pupperDiv');
//     let pupperImg = document.createElement('img');
//     pupperImg.src = data.url;
//     parent.appendChild(pupperImg);
//   });

/*** Example 3 PacMen Factory ***/

//Only showing code for makePac(), update() and checkCollision()
// Move over to NextTech to see in action.

// let pos = 0;
// const pacArray = [
//   ['./images/PacMan1.png', './images/PacMan2.png'],
//   ['./images/PacMan3.png', './images/PacMan4.png'],
// ];
// let direction = 0;
// const pacMen = []; // This array holds all the pacmen

// // This function returns an object with random values
// function setToRandom(scale) {
//   return {
//     x: Math.random() * scale,
//     y: Math.random() * scale,
//   };
// }

// function makePac() {
//   // returns an object with random values scaled {x: 33, y: 21}
//   let velocity = setToRandom(10); // {x:?, y:?}
//   let position = setToRandom(200);
//   // why are these needed;
//   let reverseX = false;
//   let reverseY = false;

//   // Add image to div id = game
//   let game = document.getElementById('game');
//   let newimg = document.createElement('img');
//   newimg.style.position = 'absolute';
//   newimg.src = './PacMan1.png';
//   newimg.width = 100;

//   // TODO: set position here

//   // TODO add new Child image to game
//   game.appendChild(newimg);

//   // return details in an object
//   return {
//     position,
//     velocity,
//     newimg,
//     reverseX,
//     reverseY
//   };
// }

// function update() {
//   // loop over pacmen array and move each one and move image in DOM
//   pacMen.forEach((item) => {
//     checkCollisions(item);

//     // need to check both planes independently
//     if (item.reverseX) {
//       item.position.x -= item.velocity.x;
//     } else {
//       item.position.x += item.velocity.x;
//     }

//     if (item.reverseY) {
//       item.position.y -= item.velocity.y;
//     } else {
//       item.position.y += item.velocity.y;
//     }

//     item.newimg.style.left = item.position.x + 'px';
//     item.newimg.style.top = item.position.y + 'px';
//   });
//   setTimeout(update, 20);
// }

// function checkCollisions(item) {
//   // How can we use JS to get the actual bound of the container?
//   let rightBound = window.innerWidth - item.newimg.width;
//   let leftBound = 0;
//   let topBound = 0;
//   let bottomBound = window.innerHeight - item.newimg.height;
//   // TODO: detect collision with all walls and make pacman bounce

//   if (item.position.x >= rightBound || item.position.x <= leftBound) {
//     item.reverseX = !item.reverseX;
//   }

//   if (item.position.y >= bottomBound || item.position.y <= topBound) {
//     item.reverseY = !item.reverseY;
//   }
// }

// function makeOne() {
//   pacMen.push(makePac()); // add a new PacMan
// }