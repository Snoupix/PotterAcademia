import React from 'react';
import './App.css';
import Section from './Section'

import Test from './test';
import NavbarLight from './navbarLight';
import NavbarDark from './navbarDark';


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

    <header className="Header">
   { this.state.Visible ? <NavbarLight/>:<NavbarDark/>}
    
    </header>
    <Section changeState={(e)=>this.changeState()} ></Section>
    </div>
       
      
  );
  }
}

export default App;