import React from 'react';
import './SliderItems.css'

const SliderItems = ({ slide }) => {
    const { image, previous, next, id, text } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carosel-image mx-auto'>
                <img alt='' src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-3/4 bottom-1/2 ">
                <h1 className='lg:text-6xl md:text-2xl text-md  w-1/4 text-white font-bold'>
                    {text}
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 md:right-3/4 sm:right-1/2 bottom-2 ">
                <a href={`#slide${previous}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItems;