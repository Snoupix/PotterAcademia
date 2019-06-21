import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Card from './card_perso'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const styleButtonPrev={
    display:"flex",
    position: "absolute",
    top: "150px",
    left: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"blue",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
}
const styleButtonNext={
    display:"flex",
    position: "absolute",
    top: "150px",
    right: "10px",
    cursor:"pointer",
    borderRadius:"50%",
    color:"blue",
    backgroundColor : "transparent",
    width : "36px",
    height : "36px",
    justifyContent : "center",
    alignItems : "center",
    boxShadow: "2px 2px 2px 1px rgba(55, 55, 55, 55)",
}
const styleCarou={
    paddingLeft: "70px",
    paddingRight: "55px",
    paddingTop: "15px",
    paddingRight: "70px",

}
class Gallery extends React.Component {
  state = {
    galleryItems: [1, 2, 3, 4].map((i) => (<Card key={i}>{i}</Card>)),
  }

  responsive = {
    600: { items: 1 },
    800: { items: 2 },
    1200:{ items: 3 },
    1500: {items: 4 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
 
  render() {
    return (
        <div style={styleCarou}>
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={false}
        buttonsDisabled={true}
        fadeOutAnimation={true}
        keysControlDisabled={false}
        dotsDisabled={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        disableAutoPlayOnAction={true}
        items={this.state.galleryItems}
        ref={(el) => (this.Carousel = el)}
      ></AliceCarousel>
        <div onClick={() => this.Carousel._slidePrev()} style={styleButtonPrev}><FontAwesomeIcon icon={faAngleLeft}/></div>
        <div onClick={() => this.Carousel._slideNext()} style={styleButtonNext}><FontAwesomeIcon icon={faAngleRight}/></div>
      </div>
    )
  }
}
export default Gallery