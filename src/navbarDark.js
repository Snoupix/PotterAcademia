import React, { Component } from 'react';
import DarkNavbutton from './buttondarkstyle';
import Section from './Section'

export default class NavbarDark extends Component{



    render(){
        return(
            <nav style={{zIndex : "10"}}>
                <DarkNavbutton>
                    <span className="inkSpan">Home</span>
                    <button className="inkButton" >Home</button>
                </DarkNavbutton>
                <DarkNavbutton>
                    <span className="inkSpan">Personnages</span>
                    <button className="inkButton">Personnages</button>
                </DarkNavbutton>
                <DarkNavbutton>
                    <span className="inkSpan">Potions</span>
                    <button className="inkButton">Potions</button>
                </DarkNavbutton>
                <DarkNavbutton>
                    <span className="inkSpan">Sorts</span>
                    <button className="inkButton">Sorts</button>
                </DarkNavbutton>
                <DarkNavbutton>
                    <span className="inkSpan reliques">Reliques de la mort</span>
                    <button className="inkButton">Reliques de la mort</button>
                </DarkNavbutton>
            </nav>
        )
    }
}
