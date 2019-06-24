import React, { Component } from 'react';
import LightNavbutton from './buttonlightstyle';
import Backgroundbtn from "./assets/img/Backgroundbtn.png";

const BackgoundbtnStyle = {
    backgroundImage: "url(" + Backgroundbtn + ")",
    OverflowEvent : "hidden"
  }
export default class NavbarLight extends Component{

    render(){
        return(
            console.log(BackgoundbtnStyle),
            <nav>
                <LightNavbutton>
                    <span className="inkSpan">Accueil</span>
                    <button className="inkButton">Accueil</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Personnages</span>
                    <button className="inkButton" style={BackgoundbtnStyle}>Personnages</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Potions</span>
                    <button className="inkButton" style={BackgoundbtnStyle}>Potions</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Sorts</span>
                    <button className="inkButton" style={BackgoundbtnStyle}>Sorts</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Écoles</span>
                    <button className="inkButton">Écoles</button>
                </LightNavbutton>
            </nav>
        )
    }
}
