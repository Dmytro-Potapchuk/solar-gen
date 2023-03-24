import {Link, useLocation} from "react-router-dom";
import firma1 from "../../image/companyBuild/factory.png";
import none from "../../image/companyBuild//png-tr-removebg-preview.png";
import firma2 from "../../image/companyBuild/office-computer-removebg-preview.png";


function CommercialBuildings() {
    const {state} = useLocation();
    console.log(state);


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
                        <img className={'dom-firma-img'} src={firma1} alt={''} />
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
                <div className={'firma'}>
                    <p><b>Budynek biurowy</b></p>
                    <Link to="/roof-company" state={{...state, type: "Budynek biurowy"}}>
                        <img className={'dom-firma-img'} src={firma2} alt="Firma"/>
                    </Link>

                </div>
                <div className={'firma'}>
                    <p><b>Na gruncie
                        (pominąć 1 i 2.
                        przejść do pkt3)</b></p>
                    <Link to="/roof-company" state={{...state, type: "Na gruncie 1 i 2 "}}>
                        <img className={'dom-firma-img'} src={none} alt="Firma"/>
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
}
export {CommercialBuildings}