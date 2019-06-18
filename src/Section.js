import React, { Component,Fragment } from 'react'
import Background from './assets/img/431.jpg';
import Quote from './assets/img/quote.png';
import Tache from './assets/img/ink_corner.svg'
import './Section.css'

const sectionStyle = {
  width: "100%",
  height: "auto",
  minHeight:"1077px",
  backgroundImage: 'url('+Background+')',
  padding: "0"
};
const quoteStyle = {
  marginTop : "15%",
  transform: "scale(1.3)"
};
const tacheStyle = {
  position : "absolute",
  right: "-600px",
  top: "-500px",
  transform: "scale(0.5)",
  position : "fixed"
}
const opening = {
/*   animation: "cd-sequence 0.8s steps(24)",
  animation-fill-mode: forwards, */

}
const closing = {
 /* animation: "cd-sequence-reverse 0.8s steps(24)",*/
  
}

class Section extends React.Component {
    state = {
      isVisible : 2,
      classDiv : "cd-transition-layer visible",
    }

    Clickopen(e) {
      e.preventDefault()
      if(this.state.isVisible=== 2){
      this.setState({isVisible : 1})}
      if(this.state.isVisible=== 0){
        this.setState({isVisible : 2})}
      if(this.state.isVisible=== 1){
        this.setState({isVisible : 0})
        this.TransitionEvent()
        setInterval(this.setState({isVisible : 2}), 2000)
      }
      this.TransitionEvent()
    }

    TransitionEvent() {
      if(this.state.isVisible==2) this.state.classDiv = "cd-transition-layer visible"
      if(this.state.isVisible==1) this.state.classDiv = "cd-transition-layer visible opening"
      if(this.state.isVisible==0) this.state.classDiv = "cd-transition-layer visible closing"
    }

    render() {
      console.log(this.state.isVisible)
      return (
        <div className={this.state.classDiv}>
          <div className="section1" style={ sectionStyle }>
            <img src={Background} /> 
            {/* <img src={Quote} style={ quoteStyle }></img> */}
            <img src={Tache} style={tacheStyle}></img>
            <div onClick={(e)=>this.Clickopen(e)} className="cd-btn cd-modal-trigger">APPUIE</div>
          </div>
        <div className="bg-layer"></div>
         </div>
      );
    }
  }

  export default Section