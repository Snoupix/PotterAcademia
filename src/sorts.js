import React from 'react';
import Buttonstyle from './sortsbuttonstyle';
import FrontButton from './frontButtonSpells';
import BackButton from './backButtonSpells';

const buttons = {
  sort1: "Accio",
  sort2: "Allohomora",
  sort3: "Amplificatum",
  sort4: "Crache Limce",
  sort5: ""
};

const bg = {
  background1: "",
  background2: "",
  background3: "",
  background4: "",
  background5: "",
};
export default class Sorts extends React.Component {

    

    render() {
      return (
        <table style={{margin: "auto"}}>
          <th>
            Sortilèges
          </th>
          
          <tr>
            <Buttonstyle>
              <BackButton img={bg.backgound1}/>
              <FrontButton txt={buttons.sort1}/>
            </Buttonstyle>
            <Buttonstyle>
              <BackButton img={bg.backgound2}/>
              <FrontButton txt={buttons.sort2}/>
            </Buttonstyle>
            <Buttonstyle>
              <BackButton img={bg.backgound3}/>
              <FrontButton txt={buttons.sort3}/>
            </Buttonstyle>
            <Buttonstyle>
              <BackButton img={bg.backgound4}/>
              <FrontButton txt={buttons.sort4}/>
            </Buttonstyle>
            <Buttonstyle>
              <BackButton img={bg.backgound5}/>
              <FrontButton txt={buttons.sort5}/>
            </Buttonstyle>
          </tr>
          <tr>

          </tr>
        </table>
      )
    }
  }



/*export default function Sorts(){
    

    render() {
        return (
             <ul>
                 <li>button</li>
             </ul>
        );
    }
}*/