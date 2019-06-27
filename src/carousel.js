import React, {Fragment} from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Card from './card_perso'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

//style bouton previous
const styleButtonPrev={
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
    top: "1436px"

}

//style bouton next
const styleButtonNext={
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
    top: "1436px"

}
//style du carousel ( taille, position, etc...)
const styleCarou={
    paddingLeft: "70px",
    paddingTop: "15px",
    paddingRight: "70px",
    zIndex:"300",

}

//style des cartes avec la propriété this.props.children, chaque id définie une carte
const datas = [
    {
        id:0,
        txt : 'Albus Perceval Wulfric Brian Dumbledore',
        imagefront : 'img/frontsidedolby.png',
    },
    {
        id:1,
        txt : 'Minerva McGonagall',
        imagefront : 'img/McGonagall.png'
    },
    {
        id:2,
        txt : 'Rubeus Hagrid',
        imagefront : 'img/Hagrid.png'
    },
    {
        id:3,
        txt : 'Alastor Maugrey "Fol Œil"',
        imagefront: 'img/Maugrey.png'
    },
    {
        id:4,
        txt : 'Remus John Lupin',
        imagefront : 'img/Lupin.png'
    },
    {
        id:5,
        txt : 'Garrick Ollivander',
        imagefront : 'img/Olivander.png'
    },
    {
        id:6,
        txt : 'Harry James Potter',
        imagefront : 'img/HarryPotter.png'
    },
    {
        id:7,
        txt : 'Hermione Jean Granger',
        imagefront : 'img/HermioneGranger.png'
    },
    {
        id:8,
        txt : 'Ronald Bilius Weasley',
        imagefront : 'img/Ron.png'
    },
    {
        id:9,
        txt : 'Ginny Weasley/Potter',
        imagefront : 'img/Ginny.png'
    },
    {
        id:10,
        txt : 'Fred et George Weasley',
        imagefront : 'img/FredGeorge.png'
    },
    {
        id:11,
        txt : 'Luna Dragonneau /Lovegood',
        imagefront : 'img/LunaLovegood.png'
    },
    {
        id:12,
        txt : 'Neville Londubat',
        imagefront : 'img/Longbottom.png'
    },
    {
        id:13,
        txt : 'Dobby',
        imagefront: 'img/Dobby.png'
    },
    {
        id : 14,
        txt : 'Severus Rogue',
        imagefront : 'img/SeverusRogue.png'
    }
]

class Gallery extends React.Component {
  state = {
    galleryItems: datas.map((i) => /* défini l'imagefront et le txt sur chaque id de carte (i+1)*/
    (<Card key={i}> <img alt="" src={i.imagefront}></img>{i.txt}</Card>)),
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
        <Fragment>
        <div id="personnages" style={{position : "absolute", top : "1000px", }}></div>
        <div  style={{margin: "-21px"}}>
            <h1 style={{fontFamily : "IM Fell DW Pica SC", fontSize : "55px", marginTop : "0"}}>Personnages</h1>
        </div>
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
        <div onClick={() => this.Carousel._slidePrev()} style={styleButtonPrev}><FontAwesomeIcon icon={faAngleLeft}/></div>
        <div onClick={() => this.Carousel._slideNext()} style={styleButtonNext}><FontAwesomeIcon icon={faAngleRight}/></div>
      </div>
      </Fragment>
    )
  }
}
export default Gallery