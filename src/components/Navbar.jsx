import React from 'react';
import { Link } from 'react-router-dom';
import CarWidget from './CarWidget';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">Dream's</div>
            <div className="navbar-right">
                <Link to="/">Inicio</Link>
                <Link to="/tipos">Tipos</Link>
                <Link to="/modelos">Modelo</Link>
                <CarWidget />
            </div>
        </nav>
    );
};

export default Navbar;
