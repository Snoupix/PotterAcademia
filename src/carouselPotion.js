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
const styleCarou3={
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
      txt_description :'Aide la personne qui la boit à y voir plus clair dans ses pensées.',
      ingredient : '-Scarabées pilés',
      ingredient1: '-Racines de gingembre coupées',
      ingredient2: '-Bile de tatou',
  },
  {
      id:1,
      txt_potion : 'Potion d\'amnésie',
      txt_description :'Provoque une perte de mémoire chez celui qui en boit.',
      ingredient:'-Eau du fleuve Léthée',
      ingredient1:'-Brins de valériane',
      ingredient2:'-Baies de gui',
  },
  {
      id:2,
      txt_potion : 'Potion d\'Amortentia',
      txt_description :'L\'Amortentia est le plus puissant philtre d\'amour au monde. Malgré ça, étant un philtre d\'amour, ses effets restent temporaire.',
      ingredient:'-Oeufs gelés de serpencendre',
      ingredient1:'-Poudre rouge sombre',
      ingredient2:'-Poudre bleue',
      ingredient3:'-Poudre jaune',
      ingredient4:'-Poudre verte',
  },
  {
      id:3,
      txt_potion : 'Potion de babillage',
      txt_description :'Breuvage magique qui force le buveur à dire des propos insensés.',
      ingredient :'Inconnus'
    },
  {
      id:4,
      txt_potion : 'Philtre calmant',
      txt_description :'Permet de détendre le buveur face au stress.',
      ingredient:'-Lavande',
      ingredient1:'-Cœur de crocodile',
      ingredient2:'-Menthe poivrée',
  },
  {
      id:5,
      txt_potion : 'Philtre de confusion',
      txt_description :'Provoque la confusion du buveur et le pousse à avoir un comportement téméraire.',
      ingredient:'-Cranson officinal',
      ingredient1:'-Livèche',
      ingredient2:'-Achillée sternutatoire',
    },
  {
      id:6,
      txt_potion : 'Elixir cérébral de Baruffio',
      txt_description :'Potion qui permet d\'augmenter la concentration et l\'agilité mentale et de diminuer le besoin de sommeil.',  
      ingredient:'-Œufs de Runespoor',
      ingredient1:'-Champignon vénéneux sauteur',
      ingredient2:'-Cerveau de grenouille',
      ingredient3:'-Poudre de griffe de dragon'
    },
  {
      id:7,
      txt_potion : 'Potion d\'enflure',
      txt_description :'Fait grossir celui qui la boit, ou fait grossir une partie du corps ayant été en son contact.',
      ingredient:'Yeux de poissons',
      ingredient1:'Orties séchées',
      ingredient2:'Foies de chauve-souris',
    },
  {
    id:8,
    txt_potion : 'Felix Felicis',
    txt_description :'Procure temporairement au buveur une chance exceptionnelle mais est toxique si consommée en trop grande quantité.',
    ingredient:'-Œuf de Cendrier',
    ingredient1:'-Bulbe de squill',
    ingredient2:'-Tentacule de Murtlap',
    ingredient3:'-Teinture de thym',
    ingredient4:'-Coquille d\'œuf Occamie',
    ingredient5:'-Rue commune en poudre',
},
{
  id:9,
  txt_potion : 'Goutte du mort-vivant',
  txt_description :'Somnifère très puissant.',
  ingredient:'-Racine d\'asphodèle',
  ingredient1:'-Infusion d\'armoise',
  ingredient2:'-Racines de valériane',
  ingredient3:'-Fève soporifique',
},
{
  id:10,
  txt_potion : 'Philtre de Paix',
  txt_description :'Calme l\'anxiété et l\'agitation',
  ingredient:'-Sirop d\'ellébore',
  ingredient1:'-Poudre de pierre de lune',
  ingredient2:'-Mandragore'
},
{
  id:11,
  txt_potion : 'Pimentine',
  txt_description :'Soigne les rhumes et la grippe, mais a pour effet secondaire de faire fumer les oreilles pendant plusieurs heures.',
  ingredient:'Inconnus'
},
{
  id:12,
  txt_potion : 'Polynectar',
  txt_description :'Permet de prendre l\'apparence de quelqu\'un d\'autre.',
  ingredient:'-Chrysopes cuits',
  ingredient1:'-Sangsues',
  ingredient2:'-Poudre de corde de Bicorne',
  ingredient3:'-Polygonum',
  ingredient4:'-Sisymbre',
  ingredient5:'-Peau de serpent d\'arbre', 
  ingredient6:'-Partie du corps de la victime',
},
{
  id:13,
  txt_potion : 'Potion poussoss',
  txt_description :'Potion qui fait repousser les os. Il lui faut environ huit heures pour faire effet et cela peut-être douloureux.',
  ingredient:'-Scarabées',
  ingredient1:'-Chou mordeur de Chine',
  ingredient2:'-Trois yeux de poisson-hérisson',

},
{
  id:14,
  txt_potion : 'Potion de ratatinage',
  txt_description :'Fait rapetisser son buveur.',
  ingredient:'-Racines de marguerites coupées',
  ingredient1:'-Figues pelées',
  ingredient2:'-Chenilles en tranche',
  ingredient3:'-Rates de rat',
  ingredient4:'-Sangsues',
},
{
  id:15,
  txt_potion : 'Potion Tue-loup',
  txt_description :'Empêche la démence lors de la transformation d\'un humain en loup-garou.',
  ingredient : '-Aconit',
  ingredient1:'- Le reste des ingrédients est inconnus'
},
{
  id:16,
  txt_potion : 'Veritaserum',
  txt_description :'Le Veritaserum est le plus puissant des sérums de vérité. Il provoque une incapacité à mentir.',
  ingredient:'Inconnus',
},
{
  id:17,
  txt_potion : 'Potion de Vieillissement',
  txt_description :'La personne qui en boit vieillit. Plus on en boit, plus on vieillit.',
  ingredient:'Inconnus',
}
]
class Carou_potion extends React.Component {
  state = {
    galleryItems: datas.map((i) => /* défini l'imagefront et le txt sur chaque id de carte (i+1)*/
    (<Card_potion key={i}>{i.txt_potion}{i.txt_description}{i.ingredient}{i.ingredient1}{i.ingredient2}{i.ingredient3}{i.ingredient4}{i.ingredient5}{i.ingredient6}</Card_potion>)),
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
        <div style={styleCarou3}>
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