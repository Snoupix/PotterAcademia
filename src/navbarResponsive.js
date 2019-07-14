import React from 'react';
import './navbar.css';

export default class Responsiveicon extends React.Component{
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
      console.log(this.state.condition);
      return (
        <div condition={this.state.condition} onClick={this.handleClick} className= { this.state.condition ? "change responsive icon container" : "responsive icon container" }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
      )    
    }
  }

