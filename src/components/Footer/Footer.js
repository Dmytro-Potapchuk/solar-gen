import React from 'react';
import './Footer.css'
import {Link} from "react-router-dom";
const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Kontakt</h3>
                        <p>Dział handlowy: 881 611 411</p>
                        <p>Wsparcie techniczne: 695 585 58 35</p>

                        <p>napisz do nas: </p>
                        <p>info@solargen.pl</p>
                        <p>solargen.pl</p>


                    </div>


                    <div className="col-md-6">
                        <h3>biuro Zielona Góra</h3>
                        <p>Adres: ul.Zjednoczenia 92,65-120 Zielona Góra</p>
                        <p>NIP: 9291549800        Regon:  970661070</p>



                        <h3>
                            Znajdź nas na</h3>
                        <ul className="social-icons">
                            <Link   target={"_blank"} rel="noreferrer" to={"https://www.facebook.com/genoszczedzania"}>   <img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png'} alt={'facebook'}/></Link>
                            <Link  target={"_blank"} rel="noreferrer" to={"https://twitter.com"}>> < img width={50} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'} alt={'twitter'}/></Link>
                            <Link  target={"_blank"} rel="noreferrer" to={"https://telegram.com"}>> < img width={50} src={'https://user-images.githubusercontent.com/49933115/139837223-bf23d3a9-4638-4e17-994a-ac8678d5f517.png'} alt={'telegram'}/> </Link>
                            <Link  target={"_blank"} rel="noreferrer" to={"https://www.instagram.com"}>>  < img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'} alt={'instagram'}/></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>© 2023 SOLARGEN. Wszelkie prawa zastrzeżone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>




    );
};

export {Footer};