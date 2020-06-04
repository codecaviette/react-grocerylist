import React from 'react'
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
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


