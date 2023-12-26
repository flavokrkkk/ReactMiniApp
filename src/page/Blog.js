//Компонент блог
import React from 'react';
import { Card, CardBody, CardFooter,CardHeader,CardText,CardTitle,Col, Container, ListGroup, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={9}>
                     <CardBody className='d-flex m-5'>
                        <CardHeader>
                        <img 
                            src='https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/fc062952-dd6d-4dec-a75d-68b072cf504c/300x450'
                            alt=''
                            width={130}
                            height={150}
                            className='mr-3'
                        />
                        </CardHeader>
                        <CardFooter className='m-lg-3'>
                            <h5>Человек-паук: За пределами Вселенной (2024)</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                            </p>
                        </CardFooter>
                    </CardBody> 
                    <CardBody className='d-flex m-5'>
                        <CardHeader>
                        <img 
                            src='https://papik.pro/grafic/uploads/posts/2023-04/1681339675_papik-pro-p-plakat-chelovek-pauk-43.jpg'
                            alt=''
                            width={130}
                            height={150}
                            className='mr-3'
                        />
                        </CardHeader>
                        <CardFooter className='m-lg-3'>
                            <h5>Человек-паук: Вдали от дома</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                            </p>
                        </CardFooter>
                    </CardBody>  

                     <CardBody className='d-flex m-5'>
                        <CardHeader>
                        <img 
                            src='https://viasat-small.cdnvideo.ru/viasat/production/contents/5ce60b2c-fe91-4661-8c94-136596de8c23/posters/5qkupnizwmhfef3rnnsagofl5e14'
                            alt=''
                            width={130}
                            height={150}
                            className='mr-3'
                        />
                        </CardHeader>
                        <CardFooter className='m-lg-3'>
                            <h5>Человек-паук: Через вселенные</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                            </p>
                        </CardFooter>
                    </CardBody>  

                     <CardBody className='d-flex m-5'>
                        <CardHeader>
                        <img 
                            src='https://images.justwatch.com/poster/291887297/s718/grandioznyi-chelovek-pauk.%7Bformat%7D'
                            alt=''
                            width={130}
                            height={150}
                            className='mr-3'
                        />
                        </CardHeader>
                        <CardFooter className='m-lg-3'>
                            <h5>Человек Паук: (1994)</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                                Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                            </p>
                        </CardFooter>
                    </CardBody>   
                </Col>
                <Col md={3}>
                    <h5 className='text-center mt-4'>
                        Marvel Blog
                    </h5>
                    <Card>
                        <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    Мстители
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Стражи галактики
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Веном
                                </ListGroup.Item>
                                <ListGroup.Item>
                                     Черная Пантера
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Железный человек
                                </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className='mt-3' bg='light' >
                        <CardBody>
                            <CardTitle>
                                Info
                            </CardTitle>
                            <CardText>
                               Здесь представлены ваши любимые категории фильмов и посты о них!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;