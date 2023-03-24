import React from 'react';
import {Link, useLocation} from "react-router-dom";

import roof1 from "../../image/roof/roof-0.png";
import roof2 from "../../image/roof/roof-15.png";
import roof3 from "../../image/roof/roof30.png";

const RoofCompany = () => {

    const {state} = useLocation()
    console.log(state)


    return (

        <div className={'text-main'}>

            <br/>

            <h4>Nachylenie dachu:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Płaski</b></p>
                    <Link to="/roof-cover-company" state={{...state, roof: "Płaski"}}>
                        <img className={'dom-firma-img'} src={roof1} alt={'Płaski'}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Nachylony(&lt;15*)</b></p>
                    <Link to="/roof-cover-company" state={{...state, roof: "Nachylony(<15*)"}}>
                        <img className={'dom-firma-img'} src={roof2} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Nachylony(&gt;15*)</b></p>
                    <Link to="/roof-cover-company" state={{...state, roof: "Nachylony(>15*)>"}}>
                        <img className={'dom-firma-img'} src={roof3} alt="Firma"/>
                    </Link>
                </div>
            </div>
            {/*<Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>*/}

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>



    );
};

export {RoofCompany};