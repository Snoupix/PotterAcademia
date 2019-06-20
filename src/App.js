import React from 'react';
import './App.css';
import Section from './Section'

import Test from './test';
import NavbarLight from './navbarLight';
import NavbarDark from './navbarDark';

function App() {
  return (
    <div className="App">

      <header className="Header">
        <NavbarLight/>
      </header>
      <div className="follower">
        <div className="lumos"></div>
      </div>

    <Section/>

      <Test txt={"salut"}/>
    </div>
  );
}

export default App;