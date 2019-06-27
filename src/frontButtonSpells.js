import React from 'react';
import './sorts.css';

export default class FrontButton extends React.Component {

    render(){
        return(
            <button className="frontButton">{this.props.txt}</button>
        )
    }
}