import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import axios from 'axios';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Container} from "reactstrap";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import Modal from 'react-bootstrap/Modal';

const Proposal = () => {

    const {state} = useLocation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Use useEffect to load any saved state from localStorage on component mount
    useEffect(() => {
        const savedState = localStorage.getItem('proposalState');
        if (savedState) {
            const {firstName, lastName, email, phone, termsAccepted, message} = JSON.parse(savedState);
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setPhone(phone);
            setTermsAccepted(termsAccepted);
            setMessage(message)
        }
    }, []);


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/address');
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        axios
            .post("https://solargen-questionn.onrender.com/api/send-email", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                termsAccepted: termsAccepted,
                message: message,
                state: state
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log('Email sent successfully');
                setShowModal(true);

            })
            .catch((error) => {
                console.log('Error sending email: ', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    // Use useEffect to save the current state to localStorage whenever it changes
    useEffect(() => {
        const currentState = JSON.stringify({firstName, lastName, email, phone, termsAccepted, message});
        localStorage.setItem('proposalState', currentState);
    }, [firstName, lastName, email, phone, termsAccepted, message]);

    return (



        <Container className="custom-container">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="Imię:">
                            <Form.Label>Imię:</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name"
                                          onChange={(e) => setFirstName(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Nazwisko:">
                            <Form.Label>Nazwisko:</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name"
                                          onChange={(e) => setLastName(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="email">
                    <Form.Label>Adres e-mail:</Form.Label>
                    <Form.Control type="email" placeholder="Adres e-mail:" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Numer telefonu:</Form.Label>
                    <PhoneInput
                        name='phone'
                        id='phone'
                        type="tel"
                        defaultCountry="PL"
                        placeholder="Numer telefonu:"
                        value={phone}
                        onChange={setPhone}
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Dodatkowe informacje, pytanie?"
                                  onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>

                <input type='checkbox' id='termsAccepted' name='termsAccepted' checked={termsAccepted}
                       onChange={(e) => setTermsAccepted(e.target.checked)} className='justify-content-center'
                       required/>
                <br/>
                <label htmlFor='termsAccepted'>Akceptuję warunki.</label>
                <p className='justify-content-lg-around'>
                <b>
                    Akceptuję ogólne warunki i potwierdzam, że zapoznałem się z przepisami o ochronie danych firmy
                    SOLARGEN. W każdej chwili możesz odwołać swoją zgodę na wykorzystanie danych, wysyłając wiadomość
                    e-mail na adres info@solargen.pl
                </b>
                </p>
                <div className='text-center'>
                    <Button className={"m-1 mt-2"} variant={"primary"} type='button'
                            onClick={() => handleClick("Dom")}>Powrót</Button>

                    <Button className={"m-1 mt-2"} type='submit'           disabled={isSubmitting}>{isSubmitting ? 'Wysyłanie...' : 'Wyślij'}</Button>

                    {showModal && (
                        <div>
                            Email sent successfully
                        </div>
                    )}
                </div>
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Formularz został wysłany</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Dziękuję! Twój formularz został pomyślnie przesłany.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Zamknąć
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>

    );
};

export {Proposal};
