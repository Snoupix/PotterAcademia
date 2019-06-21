import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Frontside from './img/frontsidedolby.png'
import Backside from './img/Backside.png'


const FrontStyle = {
  backgroundImage:"url("+Frontside+")",
    boxShadow:'none',
}

const txtStyle={
  verticalAlign:"center",
  margin: "auto",
  fontFamily: "MedievalSharp",
  color:"#ECD849",
  fontSize:"22px",
  width: "54%",
  margin: "auto",
}
const BackStyle = {
    backgroundImage: "url(" +Backside+ ")",
    boxShadow:'none',
    display:"flex",
}
class Card extends React.Component {
    componentDidMount() {
        window.addEventListener("hover", this.nomdelafonction);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("hover", this.nomdelafonction);
      }
      render() {    
        return (
            
            <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
        style={{ width: '300px', height: '287px', boxShadow:'none'}} /// these are optional style, it is not necessary
          >
            <FrontSide style={FrontStyle}>
              <div></div>
            </FrontSide>
            <BackSide
              style={BackStyle}>
              <div></div>
              <div style={txtStyle}><p>Albus Perceval Wulfric Brian Dumbledore</p></div>
            </BackSide>
          </Flippy>
        )
        }
        }
        export default Card