import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

//style face de la carte
const FrontStyle3 = {
  boxShadow:'none',
  backgroundImage: "url(/img/fond_potion1.png)"
}

//style du texte
const TitreFace={
  verticalAlign:"center",
  textAlign:"center",
  margin: "auto auto 25px",
  fontFamily: "IM Fell DW Pica SC",
  color:"black",
  fontSize:"28px",
  width: "54%",
  paddingTop:"88px",
  textDecoration:"underline",
  paddingBottom:"10px",
}
const DescriptionFace={
  fontFamily: "IM Fell DW Pica",
  fontSize:"24px",
  margin: "50px",
  verticalAlign:"center",
  textAlign:"center",
  paddingTop:"15px",
}
const titreRecette={
  textDecoration:"underline",
  fontFamily: "IM Fell DW Pica SC",
  fontSize:"28px",
}
const CompoRecette={
  verticalAlign:"center",
  textAlign:"center",
  margin: "0 auto",
  fontFamily: "IM Fell DW Pica ",
  color:"black",
  fontSize:"20px",
  width: "54%",
  paddingTop:"37px",
}

//style arrière carte
const BackStyle3 = {
    backgroundImage: "url(/img/fond_potion1.png)",
    boxShadow:'none',
    display:"flex",
    backgroundRepeat:"no-repeat",
  marginLeft: "27px",
}
class Card_potion extends React.Component {
      render() {    
        return (

            <Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: 450,height: 548, boxShadow:'none'}} /// these are optional style, it is not necessary
          >
          {/* avant de la carte */}
            <FrontSide style={FrontStyle3}>
              <div style={TitreFace}>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              {this.props.children[0]}
              </div>
              <div style={DescriptionFace}>{this.props.children[1]}</div>
            </FrontSide>
            {/* arrière de la carte */}
            <BackSide
              style={BackStyle3}>
              <div></div>
              
              <div style={CompoRecette}>
              <p style={titreRecette}>Ingrédients</p>
              {/* appel de la propriété parente pour éviter de faire chaque carte une par une */}
              <p>{this.props.children[2]}</p>
              <p>{this.props.children[3]}</p>
              <p>{this.props.children[4]}</p>
              <p>{this.props.children[5]}</p>
              <p>{this.props.children[6]}</p>
              <p>{this.props.children[7]}</p>
              <p>{this.props.children[8]}</p></div>
            </BackSide>
          </Flippy>
        )
        }
        }
        export default Card_potion