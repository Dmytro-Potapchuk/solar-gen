import React, {useState} from 'react';

import {Link, useLocation} from "react-router-dom";

const ElectricityCompany = ({onSubmit}) => {
    const { state } = useLocation();
    console.log(state);

    const [energy, setEnergy] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(energy);
    };


    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="energy">Podaj swoje roczne zużycie energii elektrycznej (kWh):</label>
            <br />
            <input
                type="text"
                id="energy"
                name="energy"
                placeholder="np. 5000"
                value={energy}
                onChange={(event) => setEnergy(event.target.value)}
            />
            <br />
            <button type="submit">
                <Link to="/financing" state={{ ...state, energy: energy }}>
                    Wyślij
                </Link>
            </button>
        </form>

    );
};

export {ElectricityCompany};