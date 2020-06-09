// This is the parent component that passes state and functions as props to child comp (Todos), then grandchild (TodoITem)

import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';


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

  // Toggle Complete: To modify the parent state from a child/grandchild, you must pass down a function as a prop to the child component, then grandchild.
  markComplete = (id) => {      // ID is passed as the parameter since each array item already has an id; grandchild's fxn identifies the id of the item being marked
    this.setState({
      todos: this.state.todos.map(todo => {     // New todos array will be created via Map array method, which iterates through each item/object and when the id matches, 
        if(todo.id === id) {                    // the completed property will be updated; otherwise the todo item will be returned as is
          todo.completed = !todo.completed
        }
        return todo;  
      }) 
    });
  }

  // Delete TodoItem: To modify state from child/grandchild, we want a new array that only includes items with id's that do not match what was clicked, as that item is the one we want to delete.
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>      // To copy everything that's already there, use the spread operator: ...
        todo.id !== id)] })
  }

  // Render is the only required lifecycle method for class component:
  render() {
    //console.log(this.state.todos);   //Test to ensure component is working
    return (
      <div className="App">
        <div clasName="container">
          <Header />
          <AddTodo />
          <Todos todos1={this.state.todos} markComplete1={this.markComplete} delTodo1={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
