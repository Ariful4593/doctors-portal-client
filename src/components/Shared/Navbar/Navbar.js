import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Link to="/" className="nav-link mr-5">
                        <li className="nav-item active">
                            Home
                        </li>
                    </Link>
                    <Link to="/about" className="nav-link mr-5">
                        <li className="nav-item">
                            About
                        </li>
                    </Link>
                    <Link to="dashboard-page" className="nav-link mr-5">
                        <li className="nav-item">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/adminpanel" className="nav-link mr-5">
                        <li className="nav-item">
                            Admin
                        </li>
                    </Link>
                    <Link to="/blogs" className="nav-link mr-5">
                        <li className="nav-item">
                            Blogs
                        </li>
                    </Link>
                    <Link to="/contact-us" className="nav-link mr-5">
                        <li className="nav-item">
                            Contact Us
                        </li>
                    </Link>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;