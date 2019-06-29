/*  /!\ IMPORTANT /!\
*   In this page, Back and front buttons are
*   inverted, so the front is at the back
*   and back is at the front.
*   Dans cette page, les boutons front et
*   back sont inversés donc le frontbutton 
*   est à l'arrière et vice-versa.
*/


import React, {Fragment} from 'react';
import Buttonstyle from './sortsbuttonstyle';
import FrontButton from './frontButtonSpells';
import BackButton from './backButtonSpells';
import './sorts.css';

/* Backgrounds */


const buttons = {
  sort1: "Accio",
  sort2: "Aguamenti",
  sort3: "Alohomora",
  sort4: "Amplificatrum",
  sort5: "Arania exumai",
  sort6: "Arresto momentum",
  sort7: "Ascendio",
  sort8: "Diffindo",
  sort9: "Expelliarmus",
  sort10: "Expecto patronum",
  sort11: "Finite incantatem",
  sort12: "Imobilus",
  sort13: "Incendio",
  sort14: "Oubliettes",
  sort15: "Protego",
  sort16: "Reparo",
  sort17: "Rictus sempra",
  sort18: "Riddikulus",
  sort19: "Sectum sempra",
  sort20: "Stupefix",
  sort21: "Wingardium leviosa",
};

const bg = {
  background1: "img/sorts/bigthunder.png",
  background2: "img/sorts/lines.png",
  background3: "img/sorts/purpleline.png",
  background4: "img/sorts/thunder.png",
  background5: "img/sorts/bigthunder.png",
  background6: "img/sorts/purpleline.png",
  background7: "img/sorts/lines.png",
  background8: "img/sorts/thunder.png",
  background9: "img/sorts/flashthunder.png",
  background10: "img/sorts/orbe.png",
  background11: "img/sorts/thunder.png",
  background12: "img/sorts/purpleline.png",
  background13: "img/sorts/fire.png",
  background14: "img/sorts/flashthunder.png",
  background15: "img/sorts/lines.png",
  background16: "img/sorts/thunder.png",
  background17: "img/sorts/orangeline.png",
  background18: "img/sorts/flashthunder.png",
  background19: "img/sorts/lines.png",
  background20: "img/sorts/purpleline.png",
  background21: "img/sorts/orangeline.png",
};
export default class Sorts extends React.Component {

    

    render() {
      return (
        <Fragment>
          <div style={{marginBottom: "100px", paddingTop: "100px", fontSize: "30px", fontFamily: "IM Fell DW Pica SC, serif"}}>Sortilèges utilisés</div>
          <table className="tableSorts">
            <tbody>
              <tr>
                <Buttonstyle>
                  <BackButton txt={buttons.sort1}/>
                  <FrontButton img={bg.background1}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort2}/>
                  <FrontButton img={bg.background2}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort3}/>
                  <FrontButton img={bg.background3}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort4}/>
                  <FrontButton img={bg.background4}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort5}/>
                  <FrontButton img={bg.background5}/>
                </Buttonstyle>
              </tr>
              <tr>
                <Buttonstyle>
                  <BackButton txt={buttons.sort6}/>
                  <FrontButton img={bg.background6}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort7}/>
                  <FrontButton img={bg.background7}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort8}/>
                  <FrontButton img={bg.background8}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort9}/>
                  <FrontButton img={bg.background9}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort10}/>
                  <FrontButton img={bg.background10}/>
                </Buttonstyle>
              </tr>
              <tr>
                <Buttonstyle>
                  <BackButton txt={buttons.sort11}/>
                  <FrontButton img={bg.background11}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort12}/>
                  <FrontButton img={bg.background12}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort13}/>
                  <FrontButton img={bg.background13}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort14}/>
                  <FrontButton img={bg.background14}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort15}/>
                  <FrontButton img={bg.background15}/>
                </Buttonstyle>
              </tr>
              <tr>
                <Buttonstyle>
                  <BackButton txt={buttons.sort16}/>
                  <FrontButton img={bg.background16}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort17}/>
                  <FrontButton img={bg.background17}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort18}/>
                  <FrontButton img={bg.background18}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort19}/>
                  <FrontButton img={bg.background19}/>
                </Buttonstyle>
                <Buttonstyle>
                  <BackButton txt={buttons.sort20}/>
                  <FrontButton img={bg.background20}/>
                </Buttonstyle>
              </tr>
              <tr>
                <th></th><th></th>
                <Buttonstyle>
                  <BackButton txt={buttons.sort21}/>
                  <FrontButton img={bg.background21}/>
                </Buttonstyle>
                <th></th><th></th>
              </tr>
            </tbody>
          </table>
        </Fragment>
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