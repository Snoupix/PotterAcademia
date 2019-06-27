import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Card_perso_sombre from './card_perso_sombre'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

//style bouton previous
const styleButtonPrev2={
    display:"flex",
    position: "absolute",
    left: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"white",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
    top : "294px"

}

//style bouton next
const styleButtonNext2={
    display:"flex",
    position: "absolute",
    right: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"white",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
    top : "294px"
}
//style du carousel ( taille, position, etc...)
const styleCarou={
    paddingLeft: "70px",
    paddingRight: "55px",
    paddingTop: "15px",
    paddingRight: "70px",
    zIndex:"300",

}

//style des cartes avec la propriété this.props.children, chaque id définie une carte
const datas = [
    {
        id:0,
        txt_perso_sombre : 'Tom Elvis Jedusor "Lord Voldemort"',
        imagefront_perso_sombre : 'img/voldemort.png',
    },
    {
        id:1,
        txt_perso_sombre : 'Nagini',
        imagefront_perso_sombre : 'img/FondNagini.png'
    },
    {
        id:2,
        txt_perso_sombre : 'Gellert Grindelwald',
        imagefront_perso_sombre : 'img/grindelwald.png'
    },
    {
        id:3,
        txt_perso_sombre : 'Bellatrix Lestrange',
        imagefront_perso_sombre: 'img/fondBellatrix.png'
    },
    {
        id:4,
        txt_perso_sombre : 'Rodolphus Lestrange',
        imagefront_perso_sombre : 'img/rodolphus.png'
    },
    {
        id:5,
        txt_perso_sombre : 'Quirinus Quirrell',
        imagefront_perso_sombre : 'img/quirrell.png'
    },
    {
        id:6,
        txt_perso_sombre : 'Fenrir Greyback',
        imagefront_perso_sombre : 'img/Fenrir.png'
    },
    {
        id:7,
        txt_perso_sombre : 'Peter Pettigrow',
        imagefront_perso_sombre : 'img/PeterPetitgrow.png'
    },
    {
        id:8,
        txt_perso_sombre : 'Barty Croupton Junior',
        imagefront_perso_sombre : 'img/Barty_Croupton_Jr2.png'
    },
    {
        id:9,
        txt_perso_sombre : 'Igor Karkaroff',
        imagefront_perso_sombre : 'img/karkaroff.png'
    },
    {
        id:10,
        txt_perso_sombre : 'Lucius Malefoy',
        imagefront_perso_sombre : 'img/Lucius-Malfoy.png'
    },
    {
        id:11,
        txt_perso_sombre : 'Drago Malefoy',
        imagefront_perso_sombre : 'img/Draco.png'
    }
]

class Carou_perso_sombre extends React.Component {

  state = {
    galleryItems: datas.map((i) => /* défini l'imagefront et le txt sur chaque id de carte (i+1)*/
    (<Card_perso_sombre  key={i}> <img src={i.imagefront_perso_sombre}></img>{i.txt_perso_sombre}</Card_perso_sombre>)),
    isLoading : false
  }

  componentDidMount() {
  
  }

  //définie le nombre de slide apparente par rapport à la taille de l'écran
  responsive = {
    600: { items: 1 },
    800: { items: 2 },
    1200:{ items: 3 },
    1500: {items: 4 },
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
        <div onClick={() => this.Carousel._slidePrev()} style={styleButtonPrev2}><FontAwesomeIcon icon={faAngleLeft}/></div>
        <div onClick={() => this.Carousel._slideNext()} style={styleButtonNext2}><FontAwesomeIcon icon={faAngleRight}/></div>
      </div>
    )
  }
}
export default Carou_perso_sombre