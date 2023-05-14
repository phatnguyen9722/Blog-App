import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../asset/img/logo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo Here" />
                </Link>
            </div>
            <span>Created by Phat Nguyen</span>
        </div>
    );
}

export default Footer;
