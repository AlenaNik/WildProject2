import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';


const Navigation = () => {
    return (
        <nav className="pa3 pa4-ns code">
            <Particles />
        <div className="tc pb3">
            <a className="code link dim b f1 f-headline-ns tc db mb3 mb4-ns yellow" href="https://www.n2yo.com/space-station/" title="Home">Satellite Tracker</a>
            <NavLink to="/AboutUs" className="link dim light-yellow f5 f4-ns dib mr3">About</NavLink>
            <NavLink to="/Contact" className="link dim light-yellow f5 f4-ns dib mr3">Contact</NavLink>
        </div>
        </nav>
    );
};

export default Navigation;