import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
 
const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
}

console.log(Gallery);

export default class SectionSorts extends React.Component {

    render() {
        return (
            <AliceCarousel mouseDragEnabled >
                
            </AliceCarousel>
        )
    }
}