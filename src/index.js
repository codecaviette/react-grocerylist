// THIS FILE IS THE ENTRY POINT TO REACT 

// The main parent App component wraps around everything
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// React DOM is rendering the App component into the index.html file with the ID of 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

