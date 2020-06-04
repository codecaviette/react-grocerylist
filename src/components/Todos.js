import React, { Component } from 'react'

class Todos extends Component {
    render() {
        //console.log(this.props.todos1)    //Test to ensure state was passed down from App.js to Todos component
        return this.props.todos1.map((todo) => (
        <h3> {todo.title} </h3>
        ));
    }
}

export default Todos;





