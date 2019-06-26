import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

//style face de la carte
const FrontStyle = {
    boxShadow:'none',
    
}

//style du texte
const txtStyle={
  verticalAlign:"center",
  margin: "auto",
  fontFamily: "MedievalSharp",
  color:"#ECD849",
  fontSize:"22px",
  width: "54%",
}

//style arrière carte
const BackStyle = {
    backgroundImage: "url(/img/Backside.png)",
    boxShadow:'none',
    display:"flex",
}
class Card extends React.Component {
      render() {    
        return (
          console.log(this.props.children),
            <Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
        style={{ width: '300px', height: '287px', boxShadow:'none'}} /// these are optional style, it is not necessary
          >
          {/* avant de la carte */}
            <FrontSide style={FrontStyle}>
              <div>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              {this.props.children[1]}
              </div>
            </FrontSide>
            {/* arrière de la carte */}
            <BackSide
              style={BackStyle}>
              <div></div>
              <div style={txtStyle}>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              <p>{this.props.children[2]}</p></div>
            </BackSide>
          </Flippy>
        )
        }
        }
        export default Card