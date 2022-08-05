/*** Example 1 Array & Object Destructuring ***/

// const books = ["fiction", ["horror", "literary"], "science"];

// var [fiction, [horror, literary], science] = books;

// console.log(fiction);
// console.log(horror);
// console.log(literary);
// console.log(science);

// const Student = {
//   firstName: "Joe",
//   university: "MIT",
//   studentInfo: {
//     studentid: 555,
//   },
// };

// var { studentInfo: { studentid } } = Student;
// var { studentid }  = Student.studentInfo; 

// console.log(firstName);
// console.log(university);
// console.log(studentid);

/*** Example 2 Spread and Rest Operators ***/

// Spreading array example

// const terrestrials = ["fox", "lion", "elephant"];
// const aquatics = ["shark", "whale", "octopus"];

// const allAnimals = [...terrestrials, ...aquatics];

// console.log(allAnimals);

// // Rest paramaters example

// function sumAll(...args) {
//     // console.log(args);
//     let total = 0;

//     for (let i = 0; i < args.length; i++) {
//         total = total + args[i];
//     }

//     return total;
// }

// // function sumAll(...args) {
// //     // console.log(args);

// //     return args.reduce((previous, current) => {
// //         return previous + current;
// //     });
// // }
  
// console.log(sumAll(1, 2)); // expected output: 3
// console.log(sumAll(1, 2, 3)); // expected output: 6
// console.log(sumAll(1, 2, 3, 4)); // expected output: 10

/*** Example 3 Closures and Scope ***/

// function defineClosure() {
//     function BookObject(name = "The Count of Monte Cristo", currentPage = 873) {
//         console.log(`\n\nCreating new Book Object with name: ${name} and currentPage: ${currentPage}`);
//         var currentPageNumber = currentPage;
//         var bookName = name;

//         return {
//             "getBookTitle": function () {
//                 return bookName;
//             },
//             "turnPage": function () {
//                 currentPageNumber++;
//             },
//             "getPage": function () {
//                 return currentPageNumber;
//             }
//         };
//     }

//     var myBook = BookObject('Reckless', 28);
//     console.log(`The book name is: ${myBook.getBookTitle()}`);
//     console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
//     console.log(`Initial Page Number is: ${myBook.getPage()}`);
//     myBook.turnPage();
//     console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

//     // creating a new instance of myBook, this resets all inner variables as its completely different object and scope
//     myBook = BookObject();
//     console.log(`The book name is: ${myBook.getBookTitle()}`);
//     console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
//     console.log(`Initial Page Number is: ${myBook.getPage()}`);
//     myBook.turnPage();
//     console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

//     return BookObject();
// }

// defineClosure();

/*** Example 4 Word Count ***/

// let lorem =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// const words = str => {
//   var cleanedString = str.replace(/[,.]/g, "");
//   return cleanedString.split(" ");
// }

// // This should print the length of the words array returned
// console.log(words(lorem).length);

// const wordFrequency = words => {

//   let allWords = {}

//   words.forEach(word => {
//     if (word in allWords) {
//       allWords[word]++;
//     } else {
//       allWords[word] = 1;
//     }
//   })

//   return allWords;
// }

// // This should print an object containing all words and their occurrences
// console.log(wordFrequency(words(lorem)));