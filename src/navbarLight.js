import React, { Component } from 'react';
import LightNavbutton from './buttonlightstyle';

export default class NavbarLight extends Component{

    render(){
        return(
            <nav>
                <LightNavbutton>
                    <span className="inkSpan">Accueil</span>
                    <a href="#acceuil"><button className="inkButton">Accueil</button></a>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Personnages</span>
                    <a href="#personnages"><button className="inkButton">Personnages</button></a>
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
                    <span className="inkSpan">Écoles</span>
                    <button className="inkButton">Écoles</button>
                </LightNavbutton>
            </nav>
        )
    }
}
