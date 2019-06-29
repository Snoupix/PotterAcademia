import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const flechestyle ={
  display:"flex",
  marginTop: "150%",
  cursor:"pointer",
  borderRadius:"50%",
  color:"blue",
  backgroundColor : "transparent",
  width : "36px",
  height : "36px",
  justifyContent : "center",
  alignItems : "center",
  transition: "bottom .2s,opacity .2s",
  boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
}

class fleche1 extends React.Component {

  testA(e) {
      ('html, body').animate({ scrollTop: (((this.e).attr('href')).offset().top, 500, 'linear')
    });
  }
   // Adds an event listener when the component is mount.
   componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  //configure un état par défaut
  state={
    vu : 1
  }

  handleScroll =e => {
    this.fleche =e.target
    //si la position Y de la barre de scroll est supérieur à 24 alors vu prend l'état 0 sinon 1
    if(window.pageYOffset>24) {
        this.setState({vu:0})
    } else {
      this.setState({vu:1})
    } 
    
  }
 
    render() {    
      return (
       this.state.vu ? 
       //fais apparaitre un bouton flèche
       <section href="2">
       <div  onClick={e => this.testA(e)} className="parentfl1" style={{position:'fixed',visibility : this.state.vu}}>
    <div id="back-to-top" className="fleche1" onScroll={this.handleScroll} style={ flechestyle}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </div> 
    </div></section>/*ou ne le fais pas apparaitre si c'est faux*/ 
    : null
      );
    }
  }
  export default fleche1