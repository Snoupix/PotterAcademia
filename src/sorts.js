import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 
const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
}

export default class SectionSorts extends React.Component {

    render() {
        return (
            <AliceCarousel mouseDragEnabled >
                <img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />
            </AliceCarousel>
        )
    }
}
