// Example 1.1 First Array
//This is your starting array
const arr = [10, 10, 16, 12];

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers(numbers), Increment all items in the array by
  // return the array

  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }

  return arr;
}

function addItemToArray(arr, item) {
  // add the parameter item to the end of the array arr
  // return the array

  arr.push(item);

  return arr;
}

function addItemToFront(arr, item) {
  // add the parameter item to the front of the array arr
  // return the array
  // hint: use the array method .unshift

  arr.unshift(item);
  return arr;
}

console.log("returnFirst result:" + returnFirst(arr))
console.log("returnLast result:" + returnLast(arr))
console.log("getArrayLength result:" + getArrayLength(arr))
console.log("incrementByOne result:" + incrementByOne(arr))
console.log("addItemToArray result:" + addItemToArray(arr, 10))
console.log("addItemToFront result:" + addItemToFront(arr, 10))

// Example 1.2 
// function wordsToSentence(words) {
  
//     return words.join(" ");
//   }
  
//   //console log results
//   console.log('results', wordsToSentence(['hey', 'there']));
  
// Example 2.1

// function comparePokes(object1, object2) {
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
  
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
  
//     for (let key of keys1) {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
 
// console.log(comparePokes({}, {}));
// console.log(comparePokes({ name: "Pikachu" }, { name: "Pikachu" }));
// console.log(comparePokes({ name: "Squirtle" }, { otherkey: "Squirtle" }));

// Example 2.2
// function calculator(value1, operator, value2) {
//     switch (operator) {
//       case "+":
//         return value1 + value2;
//         break;
//       case "-":
//         return value1 - value2;
//         break;
//       case "*":
//         return value1 * value2;
//         break;
//       case "/":
//         return value1 / value2;
//         break;
//       default:
//         console.log(`Sorry, operator not supported`);
//     }
//   }
  
//   //uncomment next lines one by one, then check the console for results
//   console.log(calculator(1, "+", 1));
//   console.log(calculator(3, "-", 2));
//   console.log(calculator(3, "*", 2));
//   console.log(calculator(30, "/", 2));
//   console.log(calculator(5, "/", 0));

// Example 3
// function arrayFlattener(arr) {
//     var newArr = [];
  
//     for (var i = 0; i < arr.length; i++) {
//       newArr = newArr.concat(arr[i]);
//     }
  
//     return newArr;
//   }
  
//   //uncomment next line one by one, then check the console for results
//   console.log(arrayFlattener([1, [2, 3], 4, 5]));

// Example 4
// var pos = 0;
// let pageWidth = window.innerWidth;
// const pacArray = [
//   ["./PacMan1.png", "./PacMan2.png"],
//   ["./PacMan3.png", "./PacMan4.png"],
// ];
// var direction = 0;
// var focus = 0;

// function Run() {
//   let img = document.getElementById("PacMan");
//   let imgWidth = img.width;
//   focus = (focus + 1) % 2;
//   direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
//   img.src = pacArray[direction][focus];
//   if (direction) {
//     pos -= 20;
//     img.style.left = pos + "px";
//   } else {
//     pos += 20;
//     img.style.left = pos + "px";
//   }
// }
// setInterval(Run, 200);

// function checkPageBounds(direction, imgWidth, pos, pageWidth) {
//   if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
//   if (direction == 1 && pos < 0) direction = 0;

//   return direction;
// }
  