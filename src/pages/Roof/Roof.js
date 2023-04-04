import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

import roof1 from "../../image/roof/roof-0.png";
import roof2 from "../../image/roof/roof-15.png";
import roof3 from "../../image/roof/roof30.png";
import {Button} from "react-bootstrap";

const Roof = () => {

    const {state} = useLocation()

    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/private');
    };

    return (

        <div className={'text-main'}>

            <br/>

            <h4>Nachylenie dachu:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Płaski</b></p>
                    <Link  to="/cover" state={{...state, roof: "Płaski"}}>
                        <img width={250} className={'dom-firma-img'} src={roof1} alt={'Płaski'}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Nachylony(≤15*)</b></p>
                    <Link  to="/cover" state={{...state, roof: "Nachylony(≤15*)"}}>
                        <img width={250} className={'dom-firma-img'} src={roof2} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Nachylony(≥15*)</b></p>
                    <Link to="/cover" state={{...state, roof: "Nachylony(>15*)>"}}>
                        <img width={250} className={'dom-firma-img'} src={roof3} alt="Firma"/>
                    </Link>
                </div>
            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleClick("Dom")}>Powrót</Button>


        </div>



    );
};

export {Roof};