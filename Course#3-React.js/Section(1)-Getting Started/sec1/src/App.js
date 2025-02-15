//App.js is our react component (Function Component)
// import React, { Component } from "react"; //React.createElement() is from here.also setState()
import "./App.css";
import React, { Component } from "react"; //We need this line for building a 'class compnonet'
import Person from "./components/Person"; //App.js is Person.js's parent.
//-------------------------Class Componenet------------------------------------
class App extends Component {
  //Class Component
  state = {
    //State is an JS object
    persons: [
      //persons is array of objects (JSON format: JSON is basically a data structure)
      { name: "Mike", age: 20 },
      { name: "Jenny", age: 32 },
      { name: "Niel", age: 40 }
    ],
    otherState: "Other type of state",
  };
  styles = {
    fontFamily:'monospace',
    backgroundColor: "lightblue",
    borderRadius: "10px",
    border: "none",
    padding:'15px',
    cursor:'pointer'
  };
  //-----------------Event Handlers <start>---------------------
  buttonHandler = (newName) => {
    console.log("You clicked the button!");
    //DO NOT DO THIS : this.state.persons[0].name="Fojan"
    this.setState({
      //setState() is a method in 'Component' class and App inheret it.
      persons: [
        { name: newName, age: 20 }, //Instead of hard-coding I passed a parameter to buttonHandler()
        { name: "Jenny", age: 40 },
        { name: "Niel", age: 40 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      //setState() is a method in 'Component' class and App inheret it.
      persons: [
        { name: "Fojan", age: 20 }, //Instead of hard-coding I passed a parameter to buttonHandler()
        { name: event.target.value, age: 40 },
        { name: "Niel", age: 40 },
      ],
    });
  };
  //-----------------Event Handlers <finish>---------------------

  render() {
    //Method #1 :
    return (
      <div className="app">
        {/* We used arrow function to pass parameter to our buttonHandler function */}
        <button style={this.styles} onClick={() => this.buttonHandler("Fojan")}> 
        {/* //or :onClick = {this.buttonHandler.bind(this, "Fojan")} */}
          Switch Name
        </button>
        <h1>Hi, I am a react app</h1>
        <Person
        //We used bind() for passing parameter to our buttonHandler function
          click={this.buttonHandler.bind(this, "Foji!")} 
          // or click = {() => this.buttonHandler("Foji!")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobby : Chess
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeNameHandler}//When working with <input/> tag
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //Method#2 :
    // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
  }
}
export default App;

//----------------------Function Component --------------------------------
// import "./App.css";
// import React, { useState} from "react"; //We need this line for building a 'function compnonet'
// import Person from "./components/Person";
// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       //persons is array of objects (JSON format)
//       { name: "Mike", age: 20 },
//       { name: "Jenny", age: 32 },
//       { name: "Niel", age: 40 },
//     ],
//     otherState :'Other type of state'
//   });
//   console.log(personState);
//   // console.log(setPersonState);

//   const buttonHandler = () => {
//     console.log("You clicked the button!");
//     //DO NOT DO THIS : this.state.persons[0].name="Fojan"
//     setPersonState({
//       //Note :setState() is a method in Component class and App inheret it.
//       persons: [
//         { name: "Fojan", age: 20 },
//         { name: "Jenny", age: 40 },
//         { name: "Niel", age: 40 },
//       ],
//       otherState :'Other type of state' //or otherState :personState.otherState

//     });
//   };

//   //Method #1 :
//   return (
//     <div className="app">
//       <button onClick={buttonHandler}>Swith Name</button>
//       <h1>Hi, I am a react app</h1>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       >
//         My hobby : Chess
//       </Person>
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
//   //Method#2 :
//   // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
// };
// export default app;

// --------------------other notation of Function Component :--------------------------
// function App(props) { //Function Component
//   return (
//     <div className="app">
//       <h3>Name: {props.name}</h3>
//       <p>Age : {props.age}</p>
//     </div>

//   );
// }

// export default App;
