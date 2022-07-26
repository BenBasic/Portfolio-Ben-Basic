import React from 'react';

export default function NavBarMobile({ currentPage, handlePageChange }) {
    return (
        <div className="dropdown">
            <a className="btn btn-secondary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-list"></i>
            </a>

            <ul className="dropdown-menu">
                <li><a
                className="dropdown-item"
                href="#about"
                onClick={() => handlePageChange('About')}
                >
                    About Me
                    </a>
                </li>
                <li><a
                className="dropdown-item"
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                    </a>
                </li>
                <li><a
                className="dropdown-item"
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                    Contact
                    </a>
                </li>
                <li><a
                className="dropdown-item"
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                >
                    Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}


