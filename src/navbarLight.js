import React, { Component } from 'react';
import LightNavbutton from './buttonlightstyle';

export default class NavbarLight extends Component{

    render(){
        return(
            <nav>
                <LightNavbutton>
                    <span className="inkSpan">Accueil</span>
                    <button className="inkButton">Accueil</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Personnages</span>
                    <button className="inkButton">Personnages</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Potions</span>
                    <button className="inkButton">Potions</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Sorts</span>
                    <button className="inkButton">Sorts</button>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Maisons</span>
                    <button className="inkButton">Maisons</button>
                </LightNavbutton>
            </nav>
        )
    }
}