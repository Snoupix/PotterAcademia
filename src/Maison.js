import React, { Component, Fragment } from 'react';

const MaisonsStyle={
  alignItems: "center",
  justifyContent:"space-around",
  display:"flex",
  flexDirection:"horizontal",
  width:"100%",

}

class Maisons extends Component{
  render(){
    return(
      <Fragment>
      <div id="maisons" style={{paddingTop : "150px", paddingBottom : 70}}>
        <h1 style={{fontFamily : "IM Fell DW Pica SC", fontSize : "55px", marginTop : "0"}}>Maisons</h1>
      </div>
      <div style={MaisonsStyle}>
      <div className="gryffondor transitioncolor">
        <img src="img/gryffindor.png" alt="banniere"/>
        <h2 style={{fontFamily : "IM Fell DW Pica SC", letterSpacing : 10}}>Gryffondor</h2>
      </div>
      <div className="Serpentar transitioncolor">
      <img src="img/SerpentarNB.png"/>
      <h2 style={{fontFamily : "IM Fell DW Pica SC", letterSpacing : 10}}>Serpentard</h2>
      </div>
        <div className="RavenClaw transitioncolor">
        <img src="img/RavenClaw.png"/>
        <h2 style={{fontFamily : "IM Fell DW Pica SC", letterSpacing : 10}}>Serdaigle</h2>
        </div>
        <div className="HufflePuff transitioncolor">
        <img src="img/HufflePuff2.png"/>
        <h2 style={{fontFamily : "IM Fell DW Pica SC", letterSpacing : 10}}>Poufsouffle</h2>
        </div>
      </div>
      </Fragment>
    )
  }
}
export default Maisons