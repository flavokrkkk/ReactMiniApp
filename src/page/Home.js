//Компонент со слайдером
import React from 'react';
import CarouselBox from '../components/CarouselBox';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{background: 'red'}}>
        <CarouselBox/>
        <Container >
                <h2 className='text-center m-4' style={{color: '#fff'}}>Popular film's</h2>
                <CardGroup className='d-flex gap-3'>
                    <Card >
                        <Card.Img
                         variant='top'
                         src='https://images.hdqwalls.com/download/spider-verse-miles-2020-hi-320x240.jpg'
                         />
                         <Card.Body style={{border: '1px solid black'}}>
                                <Card.Title>Человек-паук: Через вселенные</Card.Title>
                                <Card.Text>
                                           Приготовьтесь к тому,
                                           что в разных вселенных могут быть разные
                                           Люди-пауки и однажды им придется собраться вместе
                                </Card.Text>
                                <Button variant='outline-danger'>Watch</Button>
                         </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                         variant='top'
                         src='https://images.hdqwalls.com/download/spider-man-artwork-2020-q5-320x240.jpg'
                         />
                         <Card.Body style={{border: '1px solid black'}}>
                                <Card.Title>Человек-паук: Паутина вселенных</Card.Title>
                                <Card.Text>
                                Майлз сталкивается с Пауками из других вселенных. Настаёт момент, когда ему необходимо решить, что значит быть героем
                                </Card.Text>
                                <Button variant='outline-danger'>Watch</Button>
                         </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                         variant='top'
                         src='https://images.hdqwalls.com/download/miles-morales-up-r5-320x240.jpg'
                         />
                         <Card.Body style={{border: '1px solid black'}}>
                                <Card.Title>Человек-паук: За пределами вселенных</Card.Title>
                                <Card.Text>
                                    Мультфильм станет продолжением прошлых частей действие будет происходить в мультивселенной, известной как «Паучьи миры»
                                </Card.Text>
                                <Button variant='outline-danger'>Watch</Button>
                         </Card.Body>
                         
                    </Card>
                </CardGroup>
        </Container>
        </div>
    );
};

export default Home;