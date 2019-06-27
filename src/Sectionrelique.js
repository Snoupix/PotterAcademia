import React from "react";
import Resurrection from "./assets/img/resurrection.png";
import Cape from "./assets/img/Cape.png";
import Baguettesureau from "./assets/img/baguettesurreau.png";
import Whitefeet from "./assets/img/feets.png";
import Whitefeet2 from "./assets/img/feets2.png"


const Divreliques = {
    width : "33%",
    height : "500px",
    margin : "0 auto",
    display : "flex",
    flexDirection: "column",
}
const Divreliques2 = {
    width : "33%",
    height : "900px",
    margin : "0 auto",
    display : "flex",
    marginTop : "160px",
    marginLeft : "140px",
    flexDirection: "column",

}
const Imgreliques = {
    maxWidth : "90%",
    margin : "auto",
    boxShadow : "0px 0px 20px 10px #666666"
}
const Divempty = {
    width : "50%",
}


class Sectionrelique extends React.Component {

    render() {
        return (
            <div id="reliques" style={{marginTop : "-40px",paddingTop : "200px", fontFamily : "IM Fell DW Pica SC"}}>
            <h1 style={{fontSize : "55px"}} href="reliques">Les Reliques de la Mort</h1>
            <div style={{display : "flex"}}>
            <div style={Divreliques}>
            <img alt="" style={Imgreliques} src={Resurrection}></img>
            <div>
                <h1>La pierre de Resurrection</h1>
            </div>
            </div>
            <div style={Divempty}>
                
            </div>
            </div>
            <div style={{display : "flex"}}>
            <div style={Divempty}>
            <img alt="" style={{    width: "63%", marginLeft: "694px", marginTop: "286px"}} src={Whitefeet}></img>
            </div>
            <div style={Divreliques}><img alt="" src={Cape} style={Imgreliques} ></img>
            <div>
            <h1>La Cape d'Invisibilité</h1>
            </div>
            </div>
            </div>
            <div style={{display : "flex"}}>
            <div style={Divreliques2}><img alt="" style={Imgreliques} src={Baguettesureau}></img>
            <div>
                <h1>La Baguette de Sureau</h1>
            </div>
            </div>
            <div style={Divempty}>
            <img alt="" style={{width : "63%", marginLeft: "-945px", marginTop: "-40px"}} src={Whitefeet2}></img>
            </div>
            </div>
            </div>
        );
    }

}
export default Sectionrelique;