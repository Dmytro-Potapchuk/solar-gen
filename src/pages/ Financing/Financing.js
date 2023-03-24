
import {Link, useLocation} from "react-router-dom";

import cash from "../../image/finanse/cech.png";
import kredyt from "../../image/finanse/kredyt.png";

// import {Button} from "react-bootstrap";
// import axios from "axios";

const Financing = () => {

    const {state} = useLocation()
    console.log(state);



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

    return (

        <div className={'text-main'}>

            <br/>

            <h4>Czy potrzebujesz finansowania?:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Nie, zakup za gotówkę</b></p>
                    <Link to="/address" state={{...state, financing: "zakup za gotówkę"}}>
                        <img className={'dom-firma-img'} src={cash} alt={''}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Tak, proszę o ofertę</b></p>
                    <Link to="/address" state={{...state, financing: "kredyt, proszę o ofertę"}}>
                        <img className={'dom-firma-img'} src={kredyt} alt="Firma"/>
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

export {Financing};