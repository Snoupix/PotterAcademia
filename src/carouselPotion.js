import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Card_potion from './card_potion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

//style bouton previous
const styleButtonPrev3={
    display:"flex",
    position: "absolute",
    left: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"black",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
}

//style bouton next
const styleButtonNext3={
    display:"flex",
    position: "absolute",
    right: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"black",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
}
//style du carousel ( taille, position, etc...)
const styleCarou={
    paddingLeft: "70px",
    paddingRight: "55px",
    paddingTop: "15px",
    paddingRight: "70px",
    zIndex:"300",

}
const datas = [
  {
      id:0,
      txt_potion : 'Potion d\'aiguise-méninges',
  },
  {
      id:1,
      txt_potion : 'Potion d\'amnésie',
  },
  {
      id:2,
      txt_potion : 'Potion d\'Amortentia',
  },
  {
      id:3,
      txt_potion : 'Potion de babillage'
  },
  {
      id:4,
      txt_potion : 'Philtre calmant'
  },
  {
      id:5,
      txt_potion : 'Philtre de confusion'
  },
  {
      id:6,
      txt_potion : 'Elixir cérébral de Baruffio'   
  },
  {
      id:7,
      txt_potion : 'Elixir éternels'
  },
  {
      id:8,
      txt_potion : 'Philtre d\'embrouille'
  },
  {
      id:9,
      txt_potion : 'Potion d\'enflure',
  },
  {
    id:10,
    txt_potion : 'Felix Felicis',
},
{
  id:11,
  txt_potion : 'Goutte du mort-vivant',
},
{
  id:12,
  txt_potion : 'Philtre de Paix',
},
{
  id:13,
  txt_potion : 'Pimentine',
},
{
  id:14,
  txt_potion : 'Polynectar',
},
{
  id:15,
  txt_potion : 'Potion poussoss',
},
{
  id:16,
  txt_potion : 'Potion de ratatinage',
},
{
  id:17,
  txt_potion : 'Potion Tue-loup',
},
{
  id:18,
  txt_potion : 'Veritaserum',
},
{
  id:19,
  txt_potion : 'Potion de Vieillissement',
}
]
class Carou_potion extends React.Component {
  state = {
    galleryItems: datas.map((i) => /* défini l'imagefront et le txt sur chaque id de carte (i+1)*/
    (<Card_potion key={i}>{i.txt_potion}</Card_potion>)),
  }

  //définie le nombre de slide apparente par rapport à la taille de l'écran
  responsive = {
    600: { items: 1 },
    800: { items: 1 },
    1200:{ items: 1 },
    1500: {items: 1 },
  }

 
  render() {
    return (
        //div qui défini le nom de la variable où le style sera paramètrable
        <div style={styleCarou}>
      <AliceCarousel
      //Certains des paramètres que permet la librairie AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        buttonsDisabled={true}
        fadeOutAnimation={true}
        keysControlDisabled={false}
        dotsDisabled={true}
        mouseDragEnabled={true}
        ref={(el) => (this.Carousel = el)}
      ></AliceCarousel>
      {/*bouton previous et next, on peut définir leur image ici et leur objet de style */}
        <div onClick={() => this.Carousel._slidePrev()} style={styleButtonPrev3}><FontAwesomeIcon icon={faFlask}/></div>
        <div onClick={() => this.Carousel._slideNext()} style={styleButtonNext3}><FontAwesomeIcon icon={faFlask}/></div>
      </div>
    )
  }
}
export default Carou_potion