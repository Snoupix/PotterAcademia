import React from 'react';
import './App.css';
// import './App.scss';
import Test from './test';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Test txt={"salut"}/>
     
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and test update.
        </p>
        <
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      <header className="Header">
        <Navbar/>


      </header>
      
      }
    </div>
  );
}

export default App;