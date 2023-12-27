//Компонент Type-bar
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

const About = () => {

    return (
            <Container>
                    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={3}>
                                <Nav variant='underline' className='flex-column mt-2 '>
                                    <Nav.Item >
                                        <Nav.Link eventKey="first">Frames</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Poster</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Games</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane eventKey="first">
                                            <img src='https://gamebomb.ru/files/galleries/001/1/1b/414148.jpg' alt='' height={600}/>
                                            <p style={{border: '2px solid black', marginTop: '20px', padding: '15px', borderRadius: '15px'}}> 
                                                После воссоединения с Гвен Стейси дружелюбный сосед Человек-Паук попадает
                                                из Бруклина в Мультивселенную, где встречает команду Паучков,
                                                защищающих само её существование. Пытаясь справиться с новой угрозой,
                                                Майлз сталкивается с Пауками из других вселенных.
                                            </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                            <img src='https://avatars.dzeninfra.ru/get-zen_doc/9676276/pub_6491b6ce584cca03fc3179ec_6491b8715208a65c041381a1/scale_1200' alt='' height={600}/>
                                            <p style={{border: '2px solid black', marginTop: '20px', padding: '15px', borderRadius: '15px'}}> 
                                                Афиша к этому фильму подвергла всех в восторг, в первую очередь своей красочностью и неверотяной интригой к ожиданию фильма!
                                            </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                            <img src='https://w.forfun.com/fetch/ec/ec6c474c1f5c0bb43775166ce872f06f.jpeg' alt='' height={600}/>
                                            <p style={{border: '2px solid black', marginTop: '20px', padding: '15px', borderRadius: '15px'}}> 
                                               Команда пауков почти во всем своем сборе!
                                            </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                            <img src='http://iamag.co/wp-content/uploads/2020/12/spiderman-miles-morales-concept-art-022-scaled.jpg' alt='' height={600}/>
                                            <p style={{border: '2px solid black', marginTop: '20px', padding: '15px', borderRadius: '15px'}}> 
                                                Так выглядит игра Человек-паук паутина вселенных на Playstation 5 !
                                            </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                            <img src='https://w.forfun.com/fetch/5c/5c6bd55ddea1fab42d33af770ea24ac1.jpeg' alt=''  height={600}/>
                                            <p style={{border: '2px solid black', marginTop: '20px', padding: '15px', borderRadius: '15px'}}> 
                                            В мае 2020 года Sony заключила рекламное сотрудничество с компанией Hyundai Motor, чтобы продемонстрировать свои новые модели и технологии в фильме!
                                            </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
            </Container>
    );
};

export default About;