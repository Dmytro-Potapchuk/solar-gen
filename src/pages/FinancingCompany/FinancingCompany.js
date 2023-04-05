
import {Link, useLocation, useNavigate} from "react-router-dom";

import cash from "../../image/finanse/cech.png";
import kredyt from "../../image/finanse/kredyt.png";
import {Button} from "react-bootstrap";


const FinancingCompany = () => {

    const {state} = useLocation()


    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/electricity-company');
    };

    return (

        <div className={'text-main'}>

            <br/>

            <h4>Jesteś zainteresowany dodatkowym finansowaniem instalacji fotowoltaicznej?</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Nie, dziękuję</b></p>
                    <Link to="/address-company" state={{...state, financing: "zakup za gotówkę"}}>
                        <img width={200} className={'dom-firma-img'} src={cash} alt={''}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Tak, proszę o ofertę</b></p>
                    <Link to="/address-company" state={{...state, financing: "kredyt, proszę o ofertę"}}>
                        <img width={200} className={'dom-firma-img'} src={kredyt} alt="Firma"/>
                    </Link>
                </div>

            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleClick("Dom")}>Powrót</Button>


        </div>



    );
};

export {FinancingCompany};