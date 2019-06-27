import React from 'react';
import './sorts.css';

export default class FrontButton extends React.Component {

    render(){
        
        return(
            <button className="frontButton" style={{backgroundImage:(`url(${this.props.img}`)}}></button>
        )
    }
}