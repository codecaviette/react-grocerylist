import React from 'react'
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    // Style each item - Use ternary operator (could use if/else but its more convoluted)
    getStyle = () => {
        return {
            textDecoration: this.props.todo2.completed ? 
            'line-through' : 'none',
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px'
        }    
    }
    
    /*  We cannot update parent state from a grandchild or child; instead, we create a fxn in parent comp and pass down to components as prop to child (Todos) then grandchild (TodoItem)
    markComplete2 = () => {
        this.setState... 
    }
    */

    render() {
        const {id, title} = this.props.todo2;       // Destructuring so you can use shorter variables in the return statement
        return (
            // Call getStyle function with () so it's automatically run, whereas with markComplete fxn you only want it to take effect when event happens
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete2.bind(this, id)} />      {/* To access passed down prop (fxn markComplete2) you need prop keyword. Bind keyword allows state to know which item is being marked complete */}
                    {' '}   
                    {title}
                    <button onClick={this.props.delTodo2.bind(this, id)} style={btnStyle}> x </button>       {/* Style defined below */}
                </p>
            </div>
        )
    }
}

// PropTypes (this is good practice for any components that are getting passed props)
TodoItem.propTypes = {
    todo2: PropTypes.object.isRequired
}

// Used in top-level return
const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '6px 10.5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem


