import React from 'react'
import Flippy, { FrontSide} from 'react-flippy';

//style face de la carte
const FrontStyle3 = {
    boxShadow:'none',
    backgroundImage: "url(/img/fond_potion.png)"
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

class Card_potion extends React.Component {
      render() {    
        return (
            <Flippy
            flipOnHover={false}
            flipOnClick={false}
        style={{ width: '300px', height: '287px', boxShadow:'none'}} /// these are optional style, it is not necessary
          >
          {/* avant de la carte */}
            <FrontSide style={FrontStyle3}>
              <div>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              {this.props.children}
              </div>
            </FrontSide>            
          </Flippy>
        )
        }
        }
        export default Card_potion