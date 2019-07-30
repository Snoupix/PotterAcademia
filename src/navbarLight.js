import React, { Component } from 'react';
import LightNavbutton from './buttonlightstyle';
import './navbar.css';

export default class NavbarLight extends Component{

    constructor(props){
        super(props);
        this.state = {condition: false};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(state => {
            return {condition: !this.state.condition};
        })
    }

    

    render(){
        return(
            <nav>
                <LightNavbutton className="navbar">
                    <span className="inkSpan">Accueil</span>
                    <a href="#acceuil"><button className="inkButton">Accueil</button></a>
                </LightNavbutton>
                <LightNavbutton className="navbar">
                    <span className="inkSpan">Personnages</span>
                    <a href="#personnages"><button className="inkButton">Personnages</button></a>
                </LightNavbutton>
                <LightNavbutton className="navbar">
                    <span className="inkSpan">Potions</span>
                    <a href="#potions"><button  className="inkButton">Potions</button></a>
                </LightNavbutton>
                <LightNavbutton className="navbar">
                    <span className="inkSpan">Sorts</span>
                    <a href="#sorts"><button className="inkButton">Sorts</button></a>
                </LightNavbutton>
                <LightNavbutton className="navbar">
                    <span className="inkSpan">Maisons</span>
                    <a href="#maisons"><button className="inkButton">Maisons</button></a>
                </LightNavbutton>
                <div onClick={this.handleClick} className= { this.state.condition ? "change responsive icon container" : "responsive icon container" }>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={this.state.condition ? "toggled" : ""}>
                    <a href="#acceuil"><button>Accueil</button></a>
                    <a href="#personnages"><button>Personnages</button></a>
                    <a href="#potions"><button>Potions</button></a>
                    <a href="#sorts"><button>Sorts</button></a>
                    <a href="#maisons"><button>Maisons</button></a>
                </div>
            </nav>
        )
    }
}