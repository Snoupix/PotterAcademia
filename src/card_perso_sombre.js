import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

//style face de la carte
const FrontStyle2 = {
    boxShadow:'none',
    
}

//style du texte
const txtStyle2={
  verticalAlign:"center",
  textAlign:"center",
  margin: "auto",
  fontFamily: "IM Fell DW Pica SC",
  color:"black",
  fontSize:"28px",
  width: "54%",
  marginLeft:"40px"
}

//style arrière carte
const BackStyle2 = {
    backgroundImage: "url(/img/DosWanted.png)",
    boxShadow:'none',
    display:"flex",
    backgroundRepeat:"no-repeat",
    height: "371px",
  marginLeft: "27px",
}
class Card_perso_sombre extends React.Component {
      render() {    
        return (
            
            <Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="vertical" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: 300,height: 287, boxShadow:'none'}} /// these are optional style, it is not necessary
          >
          {/* avant de la carte */}
            <FrontSide style={FrontStyle2}>
              <div>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              {this.props.children[1]}
              </div>
            </FrontSide>
            {/* arrière de la carte */}
            <BackSide
              style={BackStyle2}>
              <div></div>
              <div style={txtStyle2}>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              <p>{this.props.children[2]}</p></div>
            </BackSide>
          </Flippy>
        )
        }
        }
        export default Card_perso_sombre