import {Link, useLocation, useNavigate} from "react-router-dom";


import '../HomePage/HomePage.css'
import dom from "..//../image/house/house-1.png";
import dom2 from "..//../image/house/house-2.png";
import dom3 from "..//../image/house/house-3.png";
import dom34 from "..//../image/house/house-3-4.png";
import {Button} from "react-bootstrap";


const PrivateHouses = () => {

    const {state} = useLocation();


    // const storedData = localStorage.getItem('data');
    // if (storedData) {
    //     const data = JSON.parse(storedData);
    //     console.log(data.in);
    // }

    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/');
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
                    <Link to="/roof" state={{...state, type: "Dom jednorodzinny"}}>
                        <img width={'250'} className={'dom-firma-img'} src={dom} alt={''} />
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
                <div className={'firma'}>
                <p><b>Dom bliźniak</b></p>
                    <Link to="/roof" state={{...state, type: "Dom bliźniak"}}>
                        <img width={'250'} className={'dom-firma-img'} src={dom2} alt="Firma"/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Dom
                        wielorodzinny/
                        blok/kamienica</b></p>
                    <Link to="/roof" state={{...state, type: "Dom wielorodzinny/ blok/kamienica"}}>
                        <img width={'250'}  className={'dom-firma-img'} src={dom3} alt="Firma"/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Na gruncie</b></p>
                    <Link to="/roof" state={{...state, type: "Na gruncie (pominąć 2 i 3. przejść do pkt4)"}}>
                        <img width={'250'} className={'dom-firma-img'} src={dom34} alt="Firma"/>
                    </Link>

                </div>
            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleClick("Dom")}>Powrót</Button>


        </div>

    )
};
export {PrivateHouses}