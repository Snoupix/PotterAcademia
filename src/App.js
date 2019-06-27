import React from 'react';
import './App.css';
import Section from './Section';
import Sorts from './sorts';

import NavbarLight from './navbarLight';
import NavbarDark from './navbarDark';
// import Mouse from './cursorDarkside';

class App extends React.Component {
  state = {
    Visible : 1,
  }
  changeState () {
 
    this.setState({
      Visible : !this.state.Visible
    })
  }

  render (){
  
  return(
  
    <div className="App">
      

    <header className="Header">
   { this.state.Visible ? <NavbarLight/>:<NavbarDark/>}
    
    </header>
    <Section changeState={(e)=>this.changeState()} ></Section>

    <Sorts/>
    {/* <Gallery></Gallery> */}
    
    </div>
       
      
  );
  }
}

export default App;