//Компонент со слайдером
import React from 'react';
import CarouselBox from '../components/CarouselBox';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
        <CarouselBox/>
        <Container>
                <h2 className='text-center m-4'>Popular film's</h2>
                <CardGroup>
                    <Card>
                        <Card.Img
                         variant='top'
                         src='https://images.hdqwalls.com/download/spider-verse-miles-2020-hi-320x240.jpg'
                         />
                    </Card>
                </CardGroup>
        </Container>
        </>
    );
};

export default Home;