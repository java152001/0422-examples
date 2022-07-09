// Toggled Boxes Exercise

// let position = 1; // The starting position of the grid
// const gridSize = 100; // The total number of the grid cells

// function createGrid() {
//   for (let i = position; i <= gridSize; i++) {
//     const createdDiv = document.createElement('div');
//     createdDiv.innerHTML = i;
//     createdDiv.id = i;
//     document.getElementById('target').appendChild(createdDiv);
//   }
// }

// function move() {
//   setTimeout(function() {
//     toggle(position);
//     if (position === gridSize) {
//       position = 1;
//     } else {
//       position++;
//     }
//     move();
//   }, 100)
// }

// function toggle(position) {
//   const currentEle = document.getElementById(position);
//   const previousEle = document.getElementById(position - 1);

//   currentEle.classList.add('on');

//   if (position === 1 && document.getElementById('100').classList.contains('on')) {
//     document.getElementById('100').classList.remove('on');
//   }

//   if (position - 1 > 0) {
//     previousEle.classList.remove('on');
//   }
// }


// Eyes Exercise 

const balls = document.getElementsByClassName('ball');

const turnOffBtn = document.getElementsByClassName('turnOffCreepiness');

turnOffBtn[0].addEventListener('click', function (event) {
  event.preventDefault();

  document.removeEventListener('mousemove', trackEyes);
  
})

document.addEventListener('mousemove', trackEyes);

function trackEyes (event) {
  console.log(event);
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
}