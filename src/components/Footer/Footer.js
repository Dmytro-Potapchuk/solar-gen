import React from 'react';
import './Footer.css'
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
                            <a href="https://www.facebook.com/genoszczedzania/" target={"_blank"}>   <img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png'}/></a>
                            <a href="https://twitter.com" target={"_blank"}> < img width={50} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}/></a>
                            <a href="https://telegram.com" target={"_blank"}> < img width={50} src={'https://user-images.githubusercontent.com/49933115/139837223-bf23d3a9-4638-4e17-994a-ac8678d5f517.png'}/> </a>
                            <a href="https://www.instagram.com" target={"_blank"}>  < img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'}/></a>
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