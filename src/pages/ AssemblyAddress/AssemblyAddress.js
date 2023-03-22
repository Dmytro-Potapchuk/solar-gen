import React, { useState } from 'react';
import next from "../../image/png/next.png";
import {Link} from "react-router-dom";
import roof2 from "../../image/roof/roof-15.png";

const AssemblyAddress = () => {
    const [address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // tutaj dodaj logikę do wysłania adresu na email



        console.log(`Adres: ${address}`);
    };

    return (
        <div>
            <div className={"dom-firma"}>
                <div className={'firma'}>
                    <p><b>Tak, proszę o ofertę.</b></p>
                    <Link to="/proposal">
                        <img className={'dom-firma-img'} src={next} alt="Firma"/>
                    </Link>
                </div>

            </div>


        <form onSubmit={handleSubmit}>


            <label htmlFor="address">Adres montażu elektrowni fotowoltaicznej:</label>
            <br />
            <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ul. Nr Kod pocztowy, miejscowość" />
            <br />

            <button type="submit">Wyślij</button>
        </form>
        </div>
    );
};

export {AssemblyAddress};