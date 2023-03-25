import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button, Form} from "react-bootstrap";

const ProposalCompany = () => {
    const { state } = useLocation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Use useEffect to load any saved state from localStorage on component mount
    useEffect(() => {
        const savedState = localStorage.getItem('proposalState');
        if (savedState) {
            const { firstName, lastName, email, phone, termsAccepted } = JSON.parse(savedState);
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setPhone(phone);
            setTermsAccepted(termsAccepted);
        }
    }, []);

    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/address-company');
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:5100/api/send-email', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                termsAccepted: termsAccepted,
                state: state
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log('Email sent successfully');

                // Clear the saved state from localStorage on successful submit
                // localStorage.removeItem('proposalState');
            })
            .catch((error) => {
                console.log('Error sending email: ', error);
            });
    };

    // Use useEffect to save the current state to localStorage whenever it changes
    useEffect(() => {
        const currentState = JSON.stringify({ firstName, lastName, email, phone, termsAccepted });
        localStorage.setItem('proposalState', currentState);
    }, [firstName, lastName, email, phone, termsAccepted]);
    return (
        <Form onSubmit={handleSubmit} className="mx-auto" style={{width: "200px"}}>
            <div className='form-group'>
                <label htmlFor='firstName'>Imię:</label>
                <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='form-control' required />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Nazwisko:</label>
                <input type='text' id='lastName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} className='form-control' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Adres e-mail:</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' required />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Numer telefonu:</label>
                <input type='tel' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control' required />
            </div>
            <div className=' justify-content-center'>
                <input type='checkbox' id='termsAccepted' name='termsAccepted' checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className='justify-content-center' required />
                <br/>
                <label htmlFor='termsAccepted' >Akceptuję warunki.</label>
                <p className='justify-content-lg-around'>
                    Akceptuję ogólne warunki i potwierdzam, że zapoznałem się z przepisami o ochronie danych firmy SOLARGEN. W każdej chwili możesz odwołać swoją zgodę na wykorzystanie danych, wysyłając wiadomość e-mail na adres info@solargen.pl
                </p>
            </div>
            <div className='text-center'>
                <Button className={"m-1 mt-2"} variant={"primary"} onClick={() => handleClick("Dom")} >Cofni</Button>
                <Button className={"m-1 mt-2"} type='submit' >Wyślij</Button>
            </div>
        </Form>
    );
};

export {ProposalCompany};
