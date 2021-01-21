import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <header className="header-bar">
            <h1>Quiz App</h1>
            <nav className="navbar">
                <NavLink
                    className="main-nav-item"
                    activeClassName="main-nav-item-active"
                    to="/" exact
                >
                    Játék
                </NavLink>
                <NavLink
                    className="main-nav-item"
                    activeClassName="main-nav-item-active"
                    to="/question-manager" exact
                >
                    Kérdés kezelő
                </NavLink>
            </nav>
        </header >
    );
};

export default NavBar;