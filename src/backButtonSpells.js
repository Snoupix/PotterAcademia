import React from 'react';
import './sorts.css';

export default class BackButton extends React.Component {

    render(){
        return(
            <button className="backButton" >{this.props.txt}</button>
        )
    }
}