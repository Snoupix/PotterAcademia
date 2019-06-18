import React from 'react';
import './App.css';
import Test from './test';
import Cursor from './Cursor'
import Bouton_fleche from './Bouton_fleche'



function App() {
  return (
    <div className="App">
    <Bouton_fleche txt={'hrutrtydgdfg'} color={"yellow"}> 
      <p>groiy</p>
    </Bouton_fleche>

     <Bouton_fleche txt={'reterterterte'} color={12}> 
      <p>groiy</p>
    </Bouton_fleche>
    {/*<Cursor></Cursor>
      <Test txt={"salut"}/> */}
     
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and test update.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;