import React from 'react';
import logo from '../../image/log-removebg-preview.png'
import './Header.css'
const Header = () => {
    return (
        <div className={'logo'}>

{/*<h1><span className={'Solar'}>*/}
            <img className={'header-logo'} src={logo} alt={'logo'} width={'200px'}/>

{/*    SOLAR*/}
{/*</span>*/}

{/*    <span className={'Gen'}>GEN</span></h1>*/}

        </div>
    );
};

export {Header};