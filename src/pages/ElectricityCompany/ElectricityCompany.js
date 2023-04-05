import React, {useState} from 'react';

import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const ElectricityCompany = ({onSubmit}) => {

    const { state } = useLocation();


    const [energy, setEnergy] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(energy);
    };

    const navigate  = useNavigate();

    const handleClickBack = () => {
        if (state && state.roofCover) {
            navigate('/roof-cover-company');
        } else {
            navigate('/commercial');
        }

    };




    return (
<>
        <Form onSubmit={handleSubmit}  className="mx-auto" style={{width: "200px"}}>
            <Form.Group htmlFor="energy"><b>Podaj swoje roczne zużycie energii elektrycznej (kWh):</b>
            </Form.Group>
            <br />
            <Form.Control
                type="text"
                id="energy"
                name="energy"
                placeholder="np. 5000"
                value={energy}
                onChange={(event) => setEnergy(event.target.value)}
            />
            <br />
    <Button className={'m-1'} variant={"primary"} onClick={() =>  handleClickBack("Dom")}>Powrót</Button>
            <Button type="submit" className={'m-1'} variant={"primary"}>
                <Link to="/financing-company" state={{ ...state, energy: energy }} className="text-decoration-none link-light">
                    Wyślij
                </Link>
            </Button>
        </Form>

</>
    );
};

export {ElectricityCompany};