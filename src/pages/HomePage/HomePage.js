
import { Link } from "react-router-dom";
import './HomePage.css'


import dom from '../../image/dom.png'
import firma from '../../image/firma-removebg-preview.png'
const HomePage = () => {

    const handleLinkClick = (value) => {
        const dataToStore = { in: value };
        localStorage.setItem('data', JSON.stringify(dataToStore));
    }



    return (
        <div className={'text-main'}>

            <br/>

            <h1 className={'oferta'}>Szukam oferty dla:</h1>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>DOMU</b></p>
                    <Link to="/private" state={{in: "dom" }}>

                        <img className={'dom-firma-img'} src={dom} alt={'dom'}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>FIRMY</b></p>
                    <Link to="/commercial"  state={{in: "firma"}}>
                        <img className={'dom-firma-img'} src={firma} alt="Firma"/>

                    </Link>

                </div>
            </div>

        </div>
    );
};
export {HomePage};