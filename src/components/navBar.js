import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className= "home-page">
            <div className= "page-header">
                &#10094; / &#10095;
            </div>
            <nav className= "nav-bar">
                <ul className= "nav-menu">
                    <Link to= '/' className= "nav-link">
                        <li>Display-List</li>
                    </Link>
                    <Link to= '/update-list' className= "nav-link">
                        <li>Update-List</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
