
import {Link, useLocation} from "react-router-dom";
import one from "../../image/energy/one.png";
import two from "../../image/energy/two.png";
import there from "../../image/energy/three.png";
import foo from "../../image/energy/foo.png";
import five from "../../image/energy/five.png";
import {Button} from "react-bootstrap";
import axios from "axios";

const EnergyConsumption = () => {

    const {state} = useLocation()
    console.log(state);


    // const [selectedOption, setSelectedOption] = useState("");
    //
    // const handleOptionSelect = (option) => {
    //     setSelectedOption(option);
    // };
    //
    //
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //
    //     const formData = { selectedOption };
    //     axios.post("/api/send-email", formData)
    //         .then((response) => {
    //             console.log("Email sent successfully");
    //         })
    //         .catch((error) => {
    //             console.log("Error sending email: ", error);
    //         });
    // };

    return (

        <div className={'text-main'}>

            <br/>

            <h4>Roczne zużycie energii elektrycznej:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>1 osoba ~1700kWh</b></p>
                    <Link to="/storage" state={{...state, energy: "1 osoba ~1700kWh"}}>
                        <img className={'dom-firma-img'} src={one}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>2 osoby
                        ~2500kWh</b></p>
                    <Link to="/storage" state={{...state, energy: "2 osoby ~2500kWh"}}>
                        <img className={'dom-firma-img'} src={two} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>3 osoby
                        - 3300kWh</b></p>
                    <Link to="/storage" state={{...state, energy: "3 osoby - 3300kWh"}}>
                        <img className={'dom-firma-img'} src={there} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>4 osoby
                        ~4100kWh</b></p>
                    <Link to="/storage" state={{...state, energy: "4 osoby ~4100kWh"}}>
                        <img className={'dom-firma-img'} src={foo} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>≥5 osób
                        ≥ 5000kWh</b></p>
                    <Link to="/storage" state={{...state, energy: "≥5 osób ≥ 5000kWh"}}>
                        <img className={'dom-firma-img'} src={five} alt="Firma"/>
                    </Link>
                </div>
            </div>
            <br/>
            <br/>




            {/*<Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>*/}

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>



    );
};

export {EnergyConsumption};