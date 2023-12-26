//Компонент формы обратной связи
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container style={{width: '500px'}}>
            <h1 className='text-center'>Contact us</h1>
            <Form>
                <Form.Group controlId='formBasicEmail' className='mb-3'>
                    <Form.Label>
                        Email adress
                    </Form.Label>
                    <Form.Control type='email' placeholder='Enter e-mail'/>
                    <Form.Text>
                        We'll never share your e-mail with anyone else!
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword' className='mb-3'>
                    <Form.Label>
                        Example textarea
                    </Form.Label>
                    <Form.Control as='textarea' rows='3'/>
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox' className='mb-3'>
                    <Form.Check type='checkbox' label='Check me out'/>
                </Form.Group >
                    <Button variant='outline-danger' type='submit'>Submit</Button>
            </Form>
        </Container>
    );
};

export default Contacts;