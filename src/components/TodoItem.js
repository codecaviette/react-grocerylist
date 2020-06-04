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
    
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo2.title}</p>
            </div>
        )
    }
}

// PropTypes (this is good practice for any components that are getting passed props)
TodoItem.propTypes = {
    todo2: PropTypes.object.isRequired
}

export default TodoItem


