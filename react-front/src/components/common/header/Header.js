import React from 'react';
import Sign from "./Sign";
import '../../../styles/header/header.css';
import {Link} from "react-router-dom";
import LogoutButton from "../../LogoutButton";

const Header = (authenticated, logout) => {
    return (
        <nav className="header" style={{position: 'fixed', zIndex: 5, width: '100%'}}>
            <div className="header_logo">
                <Link href="/" style={{color: 'black'}}>GAMSUNG</Link>
            </div>
            <div className="header_container">
                <div className="sign_menu">
                    <Link to="/login">
                        <Sign mode="horizontal" authenticated={authenticated} logout={logout}/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;