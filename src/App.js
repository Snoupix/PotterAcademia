import React from 'react';
import './App.css';
import Test from './test';
import NavbarLight from './navbarLight';
// import NavbarDark from './navbarDark';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <NavbarLight/>
      </header>

      <Test txt={"salut"}/>
     
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and test update.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */      
      }
    </div>
  );
}

export default App;