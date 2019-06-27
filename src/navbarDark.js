import React, { Component } from 'react';
import DarkNavbutton from './buttondarkstyle';
export default class NavbarDark extends Component{



    render(){
        return(
            <nav style={{zIndex : "10"}}>
                <DarkNavbutton>
                    <span className="inkSpan">Accueil</span>
                    <a href="#accueildark"><button className="inkButton">Accueil</button></a>
                </DarkNavbutton>
                <DarkNavbutton>
                    <span className="inkSpan">Personnages</span>
                    <a href="#personnagessombres"><button className="inkButton">Personnages</button></a>
                </DarkNavbutton>
                {/* <DarkNavbutton>
                    <span className="inkSpan">Potions</span>
                    <a href="#potionsdark"><button className="inkButton">Potions</button></a>
                </DarkNavbutton> */}
               {/*  <DarkNavbutton>
                    <span className="inkSpan">Sorts</span>
                    <a href="#sortsdark"><button className="inkButton">Sorts</button></a>
                </DarkNavbutton> */}
                <DarkNavbutton>
                    <span className="inkSpan reliques">Reliques de la mort</span>
                    <a href="#reliques"><button className="inkButton">Reliques de la mort</button></a>
                </DarkNavbutton>
            </nav>
        )
    }
}
