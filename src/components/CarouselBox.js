import React from 'react';
import { Carousel } from 'react-bootstrap';
import bmwOne from '../assets/Spider-man_28690.jpg'
import bmwTwo from '../assets/1c226885feb154f1caf3fd8fde3ef4ef.jpeg'
import bmwThree from '../assets/scale_1200.jpg'

const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                    <img
                     className='d-block w-100'
                     src={bmwOne}
                     alt='Bmw'
                     height='900'
                    />
                    <Carousel.Caption>
                            <h3>The Best Comicks!</h3>
                            <p>Человек-паук
                Супергерой, появляющийся в комиксах издательства Marvel Comics</p>
                    </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img
                     className='d-block w-100'
                     src={bmwTwo}
                     alt='Bmw'
                     height='900'
                    />
                    <Carousel.Caption>
                            <h3>The Best Comicks!</h3>
                            <p>Майлз Моралес
                    Супергерой комиксов издательства Marvel Comics.
                    Майлз стал вторым персонажем, известным под псевдонимом Человек-паук во вселенной Ultimate Marvel.</p>
                    </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img
                     className='d-block w-100'
                     src={bmwThree}
                     alt='Bmw'
                     height='900'
                    />
                    <Carousel.Caption>
                            <h3>The Best Comicks!</h3>
                            <p>Майлз Моралес
                    Супергерой комиксов издательства Marvel Comics.
                    Майлз стал вторым персонажем, известным под псевдонимом Человек-паук во вселенной Ultimate Marvel.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselBox;