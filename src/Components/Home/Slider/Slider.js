import React from 'react';
import img1 from '../../Assets/images/2d-animation.jpg'
import img2 from '../../Assets/images/3D_anim.jpg'
import img3 from '../../Assets/images/animated_logo.gif'
import img4 from '../../Assets/images/AnimFFilm.jpg'
import img5 from '../../Assets/images/storyB.jpg'
import img6 from '../../Assets/images/VE.jpg'
import SliderItems from './SliderItems';

const Slider = () => {
    const bannerData = [
        {
            image: img1,
            text: '2D Animation',
            id: 1,
            previous: 6,
            next: 2
        },
        {
            image: img2,
            text: '3D Animation',
            id: 2,
            previous: 1,
            next: 3
        },
        {
            image: img3,
            text: 'Animated Logo',
            id: 3,
            previous: 2,
            next: 4
        },
        {
            image: img4,
            text: 'Animated Film',
            id: 4,
            previous: 3,
            next: 5
        },
        {
            image: img5,
            text: 'Story Boards',
            id: 5,
            previous: 4,
            next: 6
        },
        {
            image: img6,
            text: 'Visual Effect',
            id: 6,
            previous: 5,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <SliderItems
                    key={slide.id}
                    slide={slide}
                ></SliderItems>)
            }
        </div>
    );
};

export default Slider;