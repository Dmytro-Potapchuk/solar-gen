import {Link, useLocation, useNavigate} from "react-router-dom";
import firma1 from "../../image/companyBuild/factory.png";
import none from "../../image/house/house-3-4.png";
import firma2 from "../../image/companyBuild/office-computer-removebg-preview.png";
import {Button} from "react-bootstrap";


function CommercialBuildings() {
    const {state} = useLocation();



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
                    <p><b>Hala zakładowa
                        /magazyn</b></p>
                    <Link to="/roof-company" state={{...state, type: "Hala zakładowa/magazyn"}}>
                        <img className={'dom-firma-img'} src={firma1} alt={''}  width={200}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
                <div className={'firma'}>
                    <p><b>Budynek biurowy</b></p>
                    <Link to="/roof-company" state={{...state, type: "Budynek biurowy"}}>
                        <img className={'dom-firma-img'} src={firma2} alt="Firma" width={200}/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Na gruncie</b></p>
                    <Link to="/roof-company" state={{...state, type: "Na gruncie 1 i 2 "}}>
                        <img className={'dom-firma-img'} src={none} alt="Firma" width={200}/>
                    </Link>

                </div>

            </div>
            <Button className={'m-5'} variant={"primary"} onClick={() => handleClick("Dom")}>Powrót</Button>


        </div>


    );
}
export {CommercialBuildings}