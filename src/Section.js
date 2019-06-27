import React from "react";
import Background from "./assets/img/431.jpg";
import Quote from "./assets/img/quote.png";
import Tache from "./assets/img/ink_corner.png";
import TacheWhite from "./assets/img/ink_corner_white.png";
import Sectionrelique from './Sectionrelique'
import "./Section.css";
import Gallery from './carousel'

const divStyle = {
  backgroundImage : "url(" + Background + ")",
  width : "100%",
  height : "1100px",
}
const quoteStyle = {
  transform: "scale(1.3)",
};
const tacheStyle = {
  right: "-600px",
  top: "-500px",
  transform: "scale(0.5)",
  zIndex : 0,
  position : "absolute"
};
const tacheStyleWhite = {
  right: "-600px",
  top: "-500px",
  transform: "scale(0.5)",
  zIndex : 4,
  position : "absolute"
};
const Pavu = {
  display : "none",

}
const Vu = {
  display : "",
}
const divStyle2 = {
  backgroundImage : "url(" + Background + ")",
  width : "100%",
  height: "600px",
  margin: "auto",
  paddingTop: "100px"

}


const transitionLayer = document.getElementsByClassName("cd-transition-layer")

class Section extends React.Component {



  state = {
    isVisible: 2,
    animationisplaying: 0,
    classDiv: "cd-transition-layer visible",
    x : 1,
   
  };

  componentDidMount() {
    console.log(transitionLayer)
    document.getElementsByClassName('bg-layer')[0].addEventListener('animationend', function(){
      transitionLayer[0].classList.remove('closing', 'opening',);})
      document.getElementsByClassName('cd-modal')[0].addEventListener('animationend', function(){
        transitionLayer[0].classList.add('visible');
      console.log("end");
     })
  }


  Clickopen(e) {
    e.preventDefault();
    this.props.changeState()
    this.setState({ animationisplaying: 1 })

  }

  Clickclose(e) {
    e.preventDefault();
    this.props.changeState()
    this.setState({ animationisplaying: 2 });
  }

  render() {

    return (
    
      <div className="App" animation={this.state.animationisplaying}>
      <div className={this.state.animationisplaying===0? "cd-modal" : this.state.animationisplaying===1? "cd-modal visible" : this.state.animationisplaying===2? "cd-modal" : ""} style={this.state.animationisplaying===0? Pavu : Vu  }>
	<div className="modal-content">
		<img alt="" className={this.state.animationisplaying===1? "imgwhite visible" : "imgwhite invisible"} src={TacheWhite} style={tacheStyleWhite} />
    <div
          style={{position:"absolute"}}
            onClick={e => this.Clickclose(e)}
            className={this.state.animationisplaying===1? "cd-btn cd-modal-trigger visible" : "cd-btn cd-modal-trigger"}
          >
    </div>
    <Sectionrelique></Sectionrelique>
	</div>
  </div>
      <div
        className={
          this.state.animationisplaying===0
            ? "cd-transition-layer visible" :  this.state.animationisplaying===1
            ? "cd-transition-layer visible opening" :   this.state.animationisplaying===2
            ? "cd-transition-layer visible opening closing" : ""
        } style={{opacity : this.state.animationisplaying===0? "" :  this.state.x}}
      >
      <div style={{marginTop : "18%", display : "flex", position : "absolute", width : "100%", justifyContent : "center"}}>
      <img alt="" src={Quote} style={ quoteStyle }></img>
      </div>
        <div className="section1light">
          <div id="acceuil" style={divStyle}/>
          <div style={divStyle2}> <Gallery></Gallery></div>
          <div style={divStyle} />
          <img alt="" className={this.state.animationisplaying===1? " imgblack invisible" : "imgblack visible"} src={Tache} style={tacheStyle} />
          <div style={{position:"absolute"}}
            onClick={e => this.Clickopen(e)}
            className={this.state.animationisplaying===1? "cd-btn cd-modal-trigger" : "cd-btn cd-modal-trigger visible"}
          > 
          </div>
          </div>
        <div className="bg-layer"/>
      </div>
      </div>
    );
  }
}

export default Section;
