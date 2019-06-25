import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

//style face de la carte
const FrontStyle2 = {
    boxShadow:'none',
    
}

//style du texte
const txtStyle2={
  verticalAlign:"center",
  margin: "auto",
  fontFamily: "IM Fell DW Pica SC",
  color:"black",
  fontSize:"22px",
  width: "54%",
  margin: "auto",
}

//style arrière carte
const BackStyle2 = {
    backgroundImage: "url(/img/DosWanted.png)",
    boxShadow:'none',
    display:"flex",
    width: "165%",
}
class CardPersoSombre extends React.Component {
      render() {    
        return (
          console.log(this.props.children),
            <Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="vertical" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
        style={{ width: '150px', height: '287px', boxShadow:'none'}} /// these are optional style, it is not necessary
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
        export default CardPersoSombre