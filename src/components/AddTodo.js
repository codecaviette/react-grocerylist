import React, { Component } from 'react'

export class AddTodo extends Component {
    // Below is component-level state because it's only used in this AddTodo component, no others
    state = {               // When you have an input field, you usu want to have your field as a piece of state in that component. 
        title: ''           // If we had additional input fields (ex. First name, Last name, etc) they would go here as well.
    }

    onChangeMethod = (e) => this.setState({
        //title: e.target.value             // e.target.value gives us access to whatever value is entered into the input text field, and sets the value to be the new state's title property
        [e.target.name]: e.target.value     // Changing title to e.target.name allows us to reuse this method if we had multiple input elements needing this method, as long as the name within the input is equal to a prop name in the state
    });

    onSubmitMethod = (e) => {
        e.preventDefault();                     // Just like with vanilla JS, submit will try to submit to the actual file, and we prevent that with this function
        this.props.addTodo1(this.state.title);  // Bc we want to edit the parent state (just like with delTodos) by adding a Todo, we use props method. And we're passing this component's state title up. Go to App.js to define the addTodo fxn and pass to this component as prop addTodo1
        this.setState({ title: ''});            // When this method is called, we want to re-render the state with a blank title
    }

    render() {
        return (
            // HTML form:
            <form onSubmit={this.onSubmitMethod} style={{ display: 'flex' }}>        {/* In-line styling requires {{}} */}
                <input                                    // = input element
                    type="text" 
                    name="title"                          // name attribute must match a state property name so that it can be used in onChangeMethod event handler
                    placeholder="Add To-do..." 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}              // The state object's property is assigned here. As a viewer types into this text field,the value (and state) 
                    onChange={this.onChangeMethod}        // will change; so, we need an event handler (onChangeMethod) to handle what happens when value/state changes
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />  
            </form>
        )
    }
}

export default AddTodo
