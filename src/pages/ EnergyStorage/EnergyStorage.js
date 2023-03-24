
import {Link, useLocation} from "react-router-dom";

import kw from "../../image/store/0kw.png";
import kw5 from "../../image/store/5kw.png";
import kw10 from "../../image/store/10kw.png";
import help from "../../image/store/pomoc.png";


//
// import {Button} from "react-bootstrap";
// import axios from "axios";

const EnergyStorage = () => {

    // const [selectedOption, setSelectedOption] = useState("");
    //
    // const handleOptionSelect = (option) => {
    //     setSelectedOption(option);
    // };
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

    const {state} = useLocation()
    console.log(state);






    return (

        <div className={'text-main'}>

            <br/>

            <h4>Magazyn energii zwiększa oszczędności – jestem zainteresowany również?</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Nie</b></p>
                    <Link to="/financing" state={{...state, storage: "Nie"}}>
                        <img className={'dom-firma-img'} src={kw} alt={''}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Magazyn 5kW</b></p>
                    <Link to="/financing" state={{...state, storage: "Magazyn 5kW"}}>
                        <img className={'dom-firma-img'} src={kw5} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Magazyn 10kW</b></p>
                    <Link to="/financing" state={{...state, storage: "Magazyn 10kW"}}>
                        <img className={'dom-firma-img'} src={kw10} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Proszę o poradę.</b></p>
                    <Link to="/financing" state={{...state, storage: "Proszę o poradę."}}>
                        <img className={'dom-firma-img'} src={help} alt="Firma"/>
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

export {EnergyStorage};