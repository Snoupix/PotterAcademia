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
                   <a href="#potions"><button  className="inkButton">Potions</button></a>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Sorts</span>
                    <a href="#sorts"><button className="inkButton">Sorts</button></a>
                </LightNavbutton>
                <LightNavbutton>
                    <span className="inkSpan">Maisons</span>
                    <a href="#maisons"><button className="inkButton">Maisons</button></a>
                </LightNavbutton>
            </nav>
        )
    }
}