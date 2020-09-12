// This is the parent component that passes state and functions as props to child comp (Todos), then grandchild (TodoITem)

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid'; 

import './App.css';


class App extends Component {
  // Below is app-level state bc it's shared between components
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'A dozen eggs', 
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Salmon', 
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Blueberry yogurt', 
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
        todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),              // Generate random id's by installing UUID (in terminal, enter: npm install uuid). This allows us to create unlimited number of todo's without having to specify specific unique id #s
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]       // Combine arrays (newTodo defined as variable above)
    })
  }

  // Render is the only required lifecycle method for class component:
  render() {
    //console.log(this.state.todos);   //Test to ensure component is working
    return (
      <Router>
        <div className="App">           {/* Styling defined in App.css */}
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (      // This URL will go display AddTodo and Todos components. Use render so we can pass props thru components
              <React.Fragment>
                <AddTodo addTodo1={this.addTodo}/>
                <Todos todos1={this.state.todos} markComplete1={this.markComplete} delTodo1={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
