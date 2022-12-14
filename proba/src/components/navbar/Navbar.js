import {NavLink} from "react-router-dom";

import "./style.css"


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/"className="logo"><strong>Egypt Travel</strong> best excursions</NavLink>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__item">Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/trips" className="nav-list__item">Trips</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__item">About us</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className="nav-list__item">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;