import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash', 
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with Bingyune', 
        completed: false
      },
      {
        id: 3,
        title: 'Call with family', 
        completed: false
      }
    ]
  }
  
  // render is the only required lifecycle method for class component
  render() {
    //console.log(this.state.todos)   //Test to ensure component is working
    return (
      <div className="App">
        <Todos todos1={this.state.todos}/>
      </div>
    );
  }
}

export default App;
