import React, { useState } from 'react';

const Proposal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // tutaj dodaj logikę do przetworzenia formularza
        console.log(`Imię: ${firstName}`);
        console.log(`Nazwisko: ${lastName}`);
        console.log(`E-mail: ${email}`);
        console.log(`Telefon: ${phone}`);
        console.log(`Zaakceptowane warunki: ${termsAccepted}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">Imię:</label>
            <br />
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <br />
            <label htmlFor="lastName">Nazwisko:</label>
            <br />
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <br />
            <label htmlFor="email">Adres e-mail:</label>
            <br />
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <label htmlFor="phone">Numer telefonu:</label>
            <br />
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <br />
            <input type="checkbox" id="termsAccepted" name="termsAccepted" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} required />
            <label htmlFor="termsAccepted">Akceptuję warunki.</label>
            <p>Akceptuję  ogólne  warunki i potwierdzam, że zapoznałem się z przepisami o  ochronie
                danych  firmy SOLARGEN. W każdej chwili możesz odwołać swoją zgodę na wykorzystanie
                danych, wysyłając wiadomość e-mail na adres info@solargen.pl</p>

            <br />
            <button type="submit">Wyślij</button>
        </form>
    );
};

export {Proposal};
