import React, {useState} from 'react';
import {Link} from "react-router-dom";

import roof1 from "../../image/roof/roof-0.png";
import roof2 from "../../image/roof/roof-15.png";
import roof3 from "../../image/roof/roof30.png";
import {Button} from "react-bootstrap";
import axios from "axios";

const EnergyStorage = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = { selectedOption };
        axios.post("/api/send-email", formData)
            .then((response) => {
                console.log("Email sent successfully");
            })
            .catch((error) => {
                console.log("Error sending email: ", error);
            });
    };

    return (

        <div className={'text-main'}>

            <br/>

            <h4>Magazyn energii zwiększa oszczędności – jestem zainteresowany również?</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Nie</b></p>
                    <Link to="/financing">
                        <img className={'dom-firma-img'} src={roof1}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Magazyn 5kW</b></p>
                    <Link to="/financing">
                        <img className={'dom-firma-img'} src={roof2} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Magazyn 10kW</b></p>
                    <Link to="/financing">
                        <img className={'dom-firma-img'} src={roof3} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Proszę o poradę.</b></p>
                    <Link to="/financing">
                        <img className={'dom-firma-img'} src={roof3} alt="Firma"/>
                    </Link>
                </div>
            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>



    );
};

export {EnergyStorage};