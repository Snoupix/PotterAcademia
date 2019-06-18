import React, { Component,Fragment } from 'react'
import Cursor from './Cursor.gif';

//Régler les dimensions de l'image;
let Cursorstyle ={
    width:"32px",
    height:"32px",
    maxheight:"32px",
    maxwidth:"32px",
}
//mettre une image
class Cursor1 extends React.Component {

    render() {

      return (
        <div className="Cursor1" style={ Cursorstyle}>
          {/* <img src={Background} /> */}
          <img src={Cursor}></img>
        </div>
      );
    }
  }

  export default Cursor1