import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //console.log(this.props.todos1)    //Test to ensure state was passed down from App.js to Todos component
        return this.props.todos1.map((todo) => (
        <TodoItem key={todo.id} todo2={todo}/>
        ));
    }
}

// PropTypes (this is good practice for any Components that are getting passed props)
Todos.propTypes = {
    todos1: PropTypes.array.isRequired
}

export default Todos;





