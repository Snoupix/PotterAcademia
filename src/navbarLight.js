import React, { Component } from 'react';
import Navbutton from './buttonstyles';

export default class NavbarLight extends Component{

    render(){
        return(
            <nav>
                <Navbutton>
                    <span className="inkSpan">Home</span>
                    <button className="inkButton">Home</button>
                </Navbutton>
                <Navbutton>
                    <span className="inkSpan">Personnages</span>
                    <button className="inkButton">Personnages</button>
                </Navbutton>
                <Navbutton>
                    <span className="inkSpan">Potions</span>
                    <button className="inkButton">Potions</button>
                </Navbutton>
                <Navbutton>
                    <span className="inkSpan">Sorts</span>
                    <button className="inkButton">Sorts</button>
                </Navbutton>
                <Navbutton>
                    <span className="inkSpan">École</span>
                    <button className="inkButton">École</button>
                </Navbutton>
            </nav>
        )
    }
}
