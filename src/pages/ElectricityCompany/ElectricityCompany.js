import React, {useState} from 'react';

import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const ElectricityCompany = () => {

    const { state } = useLocation();


    const [energy, setEnergy] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const navigate  = useNavigate();

    const handleClickBack = () => {
        if (state && state.roofCover) {
            navigate('/roof-cover-company');
        } else {
            navigate('/commercial');
        }

    };
    const isEnergyValid = energy.trim() !== '';

    return (
<>
    <Form onSubmit={handleSubmit} className="mx-auto" style={{ width: '200px' }}>
        <Form.Group>
            <Form.Label htmlFor="energy">
                <b>Podaj roczne zużycie energii elektrycznej (kWh):</b>

            </Form.Label>
            <div className="d-flex justify-content-evenly">
                {energy ? null : <span style={{ color: 'red', marginRight: '1px' }}>*</span>}
                <Form.Control
                    type="text"
                    id="energy"
                    name="energy"
                    placeholder="np. 5000"
                    value={energy}
                    onChange={(event) => setEnergy(event.target.value)}
                />
            </div>
            <br />
        </Form.Group>
        <Button className={'m-2'} variant={'primary'} onClick={() => handleClickBack('Dom')}>
            Powrót
        </Button>
        <Button
            type="submit"
            className={'m-1'}
            variant={'primary'}
            disabled={!isEnergyValid}
        >
            {isEnergyValid ? (
                <Link
                    to="/financing-company"
                    state={{ ...state, energy: energy }}
                    className="text-decoration-none link-light"
                >
                    Wyślij
                </Link>
            ) : (
                'Wyślij'
            )}
        </Button>
    </Form>

</>
    );
};

export {ElectricityCompany};