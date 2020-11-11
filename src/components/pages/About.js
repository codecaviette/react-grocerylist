import React from 'react';

function About() {
    return (
        <div style={aboutStyle}>            
            <h3> How to use this page: </h3>
            <p> Step 1: Add your desired grocery item at the top of the page and tap 'Submit' <br/>
                Step 2. Once you've aquired an item, mark it through by tapping the checkbox to the left of the item. < br/>
                Step 3. Fully remove any items you no longer need on your list by tapping the X button to the right of the item. < br/>
                Step 4: Enjoy your grocery items!     </p>
        </div>
    )
}

const aboutStyle = {
    padding: '10px',
}

export default About;