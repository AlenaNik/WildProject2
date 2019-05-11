import React, {Component} from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="ph3 ph5-ns pv4 nowrap overflow-x-auto">
            <NavLink to="/" className="link dim gray f5 f4-ns dib mr3">🌕Home page</NavLink>
            <NavLink to="/AboutUs" className="link dim gray f5 f4-ns dib mr3">🌗About</NavLink>
            <NavLink to="/Contact" className="link dim gray f5 f4-ns dib mr3">🌘Contact</NavLink>
        </div>
    );
};

export default Navigation;