import React from 'react';
import {Link } from "react-router-dom";

import "./Navbar.scss"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
            <div>
            <Link className="navbar-brand text-light " to="/">Hotels</Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <button type="button" className="btn btn-success m-1">ورود</button>
                    <button type="button" className="btn btn-secondary">ثبت نام</button>
                  
                </div>
               
                </div>
            </div>
            </nav>

        </>
    );
};

export default Navbar;