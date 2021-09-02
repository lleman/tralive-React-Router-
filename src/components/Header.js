import React from "react"
import { NavLink, Link } from "react-router-dom";
import logo from '../images/logo.webp'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/"><img src={logo} /></NavLink>
            <ul>
                <li>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li><NavLink className="navlink" to="/events">Events</NavLink></li>
                <li><NavLink className="navlink" to="/about">About</NavLink></li>
                <li><NavLink className="navlink" to="/blog">Blog</NavLink></li>
                <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
                <li><NavLink className="button" to="/contact"> +10 (67) 678 2567</NavLink></li>
            </ul>
                       
        </div>

    );
}

export default Header 