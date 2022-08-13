import logo from './logo.svg';
import './App.css';
import Person from './components/example1/Person';
import React, { useState } from 'react';
import TodoApp from './components/example3/TodoApp';

function App() {
  // Example 1 Return
  // return (
  //   <div className="App">
  //     <Person />
  //   </div>
  // );

  // Example 2 Return & Code
    // const { useState } = React;
  
    // let [state, setState] = useState({
    //   initialized: false,
    //   productName: null,
    //   productDescription: null,
    //   productPrice: null,
    // });
  
    // const initializeState = () => {
    //   console.log('initializing state...');
    //   // TODO: Here you will set the state object to have values according to the instructions
    //   setState({
    //     initialized: true,
    //     productName: "Kix",
    //     productDescription: "Kid tested Mother approved",
    //     productPrice: "$3.50"
    //   })
  
    //   return state;
    // };
    // // you may use this log if needed to ensure you have the correct values in your state
    // console.log('State: ', state);
    // const { initialized, productName, productDescription, productPrice } = state;
  
    // // use string interpolation to construct this
    // const stringToReturn = `The product name is ${productName}, product description is ${productDescription}, and product price is ${productPrice}.`;
  
    // if (initialized) {
    //   return stringToReturn;
    // }
  
    // return React.createElement(
    //   'button',
    //   { id: 'initial-button', onClick: () => initializeState() },
    //   'Click here to initialize your state'
    // );

    // Example 3 Return

    // return (
    //   <TodoApp />
    // )
}

export default App;
