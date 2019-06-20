import React from 'react';
import './App.css';
import Section from './Section'

import NavbarLight from './navbarLight';
import NavbarDark from './navbarDark';
import Application from './cursorDarkside';


class App extends React.Component {
  state = {
    Visible : 1
  }

 

  changeState () {
 
    this.setState({
      Visible : !this.state.Visible
    })
  }

  render (){
  
  return(
  
    <div className="App">

      <div className="follower">
        <div className="lumos"></div>
      </div>

      <Application/>

    <header className="Header">
   { this.state.Visible ? <NavbarLight/>:<NavbarDark/>}
    
    </header>
    <Section changeState={(e)=>this.changeState()} ></Section>
    </div>
       
      
  );
  }
}

export default App;

/*
font-family: 'IM Fell DW Pica', serif;
font-family: 'IM Fell DW Pica SC', serif;
*/