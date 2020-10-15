import React from 'react';

function About() {
    return (
        <React.Fragment>        {/* If you don't need a div tag, you can use this "ghost element" which won't actually show in DOM */}
            <h1> About Page </h1>
            <p> This is the GroceryList app v1.0.0. </p>
        </React.Fragment>
    )
}

export default About;