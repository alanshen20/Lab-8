import React from 'react';
import logo from './logo.svg';
import pic from './Eric-Fuller.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src ={pic} className = "Dr-Fuller" alt="Bazinga" />
        <p>
          Edit: <code>Alan Shen</code> made this app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
