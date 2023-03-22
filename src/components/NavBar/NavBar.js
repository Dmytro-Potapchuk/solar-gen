import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import '../Header/Header.css'
import logo from "../../image/log-removebg-preview.png";

const NavBar = () => {
    return (
        <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/*<img className={'header-logo'} src={logo} alt={'logo'} width={'100px'}/>*/}

                <Navbar.Brand>
                    <h1 className="m-3">
                        <span className={'Solar'}>
                            SOLAR
                        </span>
                        <span className={'Gen'}>
                            GEN
                        </span>


                    </h1>

                </Navbar.Brand>
                <Navbar.Toggle  arial-controls="responsive-navbar-nav"/>

                <Navbar.Collapse className={"justify-content-end"}>
                    <Nav className="me-4">
                        <Nav.Link>
                            <Link to={'/'}/>
                            Strefa wiedzy
                        </Nav.Link>

                        <Nav.Link >Kontakt</Nav.Link>
                    </Nav>



                </Navbar.Collapse>


            </Navbar>


        </>
    );
};

export {NavBar};