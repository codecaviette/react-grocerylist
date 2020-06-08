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
    ],  
  }


  // To modify the parent state from a child/grandchild, you must pass down a function as a prop to the child component, then grandchild.
  markComplete = (id) => {      // ID is passed as the parameter since each array item already has an id; grandchild's fxn identifies the id of the item being marked
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;  
      }) 
    });
  }

  // Render is the only required lifecycle method for class component:
  render() {
    console.log(this.state.todos);   //Test to ensure component is working
    
    return (
      <div className="App">
        <Todos todos1={this.state.todos} markComplete1={this.markComplete}/>
      </div>
    );
  }
}

export default App;
