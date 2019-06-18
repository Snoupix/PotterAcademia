import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const flechestyle ={
  display:"flex",
  cursor:"pointer",
  borderRadius:"50%",
  color:"blue",
  backgroundColor : "black",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    transition: "bottom .2s,opacity .2s",
}

class fleche1 extends React.Component {

  state={
    price : 1
  }

  _onClick(e){
    this.setState({price:1})
  }

    render() {

      return (
        this.state.price ?
        <div style={flechestyle}>
        <div>{this.props.txt}</div>
        <div>{this.props.color}</div>
        </div>
        :
        <button onClick={
            (e)=> this._onClick(e)
        }>je m'abonne</button>

       /*  <div> hello {this.props.children}</div> */
     /*    <div id="back-to-top" className="hidden" className="fleche1" style={ flechestyle}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </div> */
        
      );
    }
  }
  export default fleche1