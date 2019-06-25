import React, {Fragment} from 'react';
import './sorts.css';
import Buttonstyle from './sortsbuttonstyle';

export default class Sorts extends React.Component {

    render() {
      return (
        <Buttonstyle>
          <button>toggle</button>
          <button style={{color: "#000"}}>toggle2</button>
        </Buttonstyle>
      )
    }
  }



/*export default class Sorts extends React {
    

    render() {
        return (
             <ul>
                 <li>button</li>
             </ul>
        );
    }
}*/