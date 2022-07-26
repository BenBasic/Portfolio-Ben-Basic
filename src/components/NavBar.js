import React from 'react';

// NavBar functionality will make it so that when an item is clicked, the page content and highlighted button will change accordingly
export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <nav className='navigationBar'>
        <ul className="nav nav-tabs navBar justify-content-center">
            <li className="nav-item">
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            
            <li className="nav-item">
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            <li className="nav-item">
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>

            <li className="nav-item">
                <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
        </nav>
    );
};