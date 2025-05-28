import React from 'react';
import { Link } from 'react-router-dom';
import CarWidget from './CarWidget';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">Dream's</div>
            <div className="navbar-right">
                <Link to="/">Inicio</Link>
                {/*<Link to="/tipos">Tipos</Link>
                <Link to="/modelos">Modelo</Link>*/}
                <Link to="/category/Panty">Panty</Link>
                <Link to="/category/Brasier">Brasier</Link>
                <Link to="/category/Boxer">Boxer</Link>
                <Link to="/category/Conjunto">Conjuntos</Link>
                <CarWidget />
            </div>
        </nav>
    );
};

export default Navbar;
