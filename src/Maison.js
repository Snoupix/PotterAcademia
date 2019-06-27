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
      <div style={MaisonsStyle}>
      <div className="gryffondor transitioncolor">
        <img src="img/gryffindor.png" alt="banniere" style={{width: '150px'}}/>
      </div>
      <div className="Serpentar transitioncolor">
      <img src="img/SerpentarNB.png" style={{width: '150px'}}/>
      </div>
        <div className="RavenClaw transitioncolor">
        <img src="img/RavenClaw.png" style={{width: '150px'}}/>
        </div>
        <div className="HufflePuff transitioncolor">
        <img src="img/HufflePuff2.png" style={{width: '150px'}}/>
        </div>
      </div>
    )
  }
}
export default Maisons