import React from "react";
import Resurrection from "./assets/img/resurrection.jpg";
import Cape from "./assets/img/Cape.jpg";
import Baguettesureau from "./assets/img/baguettesurreau.png";
import Leftfeet from "./assets/img/leftfeet.png";
import Rightfeet from "./assets/img/rightfeet.png"




const Divreliques = {
    borderStyle : "solid",
    width : "33%",
    height : "500px",
    borderRadius : "20%",
    margin : "0 auto",
    display : "flex"
}
const Imgreliques = {
    maxWidth : "90%",
    margin : "auto",
}
const Divempty = {
    width : "50%",
}


class Sectionrelique extends React.Component {
    state = {
        x : 1
    };
    
    Mvfeet() {
        while(this.state.x===2){
            if(this.state.x===0){ setTimeout( function(){this.state.x=1;}, 1000)}
            else{ setTimeout( function(){this.state.x=0;}, 1000)};
            console.log("ok")
        }
    }
    render() {
        return (
            this.Mvfeet(),
            <div>
            <div style={{display : "flex"}}>
            <div style={Divreliques}>
            <img style={Imgreliques} src={Resurrection}></img>
            <div>Relique 1</div>
            </div>
            <div style={Divempty}>
                <img className={this.state.x? "Stylefeetbase": "Stylefeetmv"} src={Leftfeet}></img>
                <img className={this.state.x? "Stylefeetbase" : "Stylefeetmv"} src={Rightfeet}></img>
            </div>
            </div>
            <div style={{display : "flex"}}>
            <div style={Divempty}></div>
            <div style={Divreliques}><img src={Cape} style={Imgreliques} ></img>
            <div>Relique 2</div>
            </div>
            </div>
            <div style={{display : "flex"}}>
            <div style={Divreliques}><img style={Imgreliques} src={Baguettesureau}></img>
            <div>Relique 3</div>
            </div>
            <div style={Divempty}></div>
            </div>
            </div>
        );
    }

}
export default Sectionrelique;