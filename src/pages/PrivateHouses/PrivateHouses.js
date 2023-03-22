import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import '../HomePage/HomePage.css'
import dom from "..//../image/house/house-1.png";
import dom2 from "..//../image/house/house-2.png";
import dom3 from "..//../image/house/house-3.png";
import dom34 from "..//../image/house/house-3-4.png";
import {Button} from "react-bootstrap";

const PrivateHouses = () => {

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

            <h4>planowane miejsce montażu instalacji fotowoltaicznej:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Dom jednorodzinny</b></p>
                    <Link to="/roof">
                        <img className={'dom-firma-img'} src={dom}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
                <div className={'firma'}>
                <p><b>Dom bliźniak</b></p>
                    <Link to="/roof">
                        <img className={'dom-firma-img'} src={dom2} alt="Firma"/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Dom
                        wielorodzinny/
                        blok/kamienica</b></p>
                    <Link to="/roof">
                        <img className={'dom-firma-img'} src={dom3} alt="Firma"/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Na gruncie

                        (pominąć 2 i 3.
                        przejść do pkt4)</b></p>
                    <Link to="/roof">
                        <img className={'dom-firma-img'} src={dom34} alt="Firma"/>
                    </Link>

                </div>
            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>

    )
};
export {PrivateHouses}