/*** Example 1 Destructuring props ***/

// class Person extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     state = {
//         details: {
//             name: "Arizona",
//             residence: {
//                 city: "Tucson",
//                 country: "USA",
//             },
//             profession: "Developer",
//         },
//     };

//     render() {
//         return <Details person={this.state} />;
//     }
// }

// const Details = (
//     {
//         person: 
//             { 
//                 details: { name } 
//             }, 
//         person: 
//             { 
//                 details: 
//                     { 
//                         residence: { city } 
//                     } 
//             }, 
//         person: 
//             { 
//                 details: 
//                     { 
//                         residence: { country } 
//                     } 
//             }, 
//         person: 
//             { 
//                 details: { profession } 
//             } 
//     }
// ) => {
//     // TODO: destructure props

//     return (
//         <div style={{ margin: "1em" }}>
//             <div id="name">Name: {name}</div>
//             <div id="city">City: {city}</div>
//             <div id="country">Country: {country}</div>
//             <div id="profession">Profession: {profession}</div>
//         </div>
//     );
// };

/*** Example 2 Rendering Object Properties With React Hooks ***/

// const App = () => {
//     const { useState } = React;
  
//     let [state, setState] = useState({
//       initialized: false,
//       productName: null,
//       productDescription: null,
//       productPrice: null,
//     });
  
//     const initializeState = () => {
//       console.log('initializing state...');
//       // TODO: Here you will set the state object to have values according to the instructions
//       setState({
//         initialized: true,
//         productName: "Kix",
//         productDescription: "Kid tested Mother approved",
//         productPrice: "$3.50"
//       })
  
//       return state;
//     };
//     // you may use this log if needed to ensure you have the correct values in your state
//     console.log('State: ', state);
//     const { initialized, productName, productDescription, productPrice } = state;
  
//     // use string interpolation to construct this
//     const stringToReturn = `The product name is ${productName}, product description is ${productDescription}, and product price is ${productPrice}.`;
  
//     if (initialized) {
//       return stringToReturn;
//     }
  
//     return React.createElement(
//       'button',
//       { id: 'initial-button', onClick: () => initializeState() },
//       'Click here to initialize your state'
//     );
//   };

// ReactDOM.render(<App />, document.getElementById('jsx-container'));

/*** Example 3 TODO List Delete ***/

// class TodoApp extends React.Component {
//     state = {
//       tasks: ["task 1", "task 2", "task 3"],
//     };
  
//     handleSubmit = (task) => {
//       this.setState({ tasks: [...this.state.tasks, task] });
//     };
  
//     // TODO: Add handleDelete to remove the index from the state
  
//     handleDelete = task => {
  
//       this.state.tasks.splice(task, 1);
  
//       this.setState({ tasks : [...this.state.tasks] });
      
//     }
  
//     render() {
//       return (
//         <div className="wrapper">
//           <div className="card frame">
//             <SubmitForm onFormSubmit={this.handleSubmit} />
//             <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class SubmitForm extends React.Component {
//     state = { item: "" };
  
//     handleSubmit = (e) => {
//       e.preventDefault();
//       if (this.state.item === "") return;
//       this.props.onFormSubmit(this.state.item);
//       this.setState({ item: "" });
//     };
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             className="input"
//             placeholder="Enter Item"
//             value={this.state.item}
//             onChange={(e) => this.setState({ item: e.target.value })}
//           />
//           <button className="button">Add</button>
//         </form>
//       );
//     }
//   }
  
//   const TodoList = (props) => {
//     const todos = props.tasks.map((todo, index) => {
//       return (
//         <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
//       );
//     });
//     return <div className="list-wrapper">{todos}</div>;
//   };
  
//   const Todo = (props) => {
//     return (
//       <div id={props.id * 10} className="list-item test-item">
//         {props.content}
//         <button
//           id={props.id}
//           className="delete is-pulled-right"
//           onClick={() => {
//             props.onDelete(props.id);
//           }}
//         >
//           X
//         </button>
//       </div>
//     );
//   };
  
//   ReactDOM.render(React.createElement(TodoApp), document.getElementById("root"));