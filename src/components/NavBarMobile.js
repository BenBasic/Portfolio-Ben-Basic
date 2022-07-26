import React from 'react';

export default function NavBarMobile({ currentPage, handlePageChange }) {
    return (
        <div className="dropdown">
            <a className="btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-list"></i>
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About Me</a></li>
                <li><a className="dropdown-item" href="#">Portfolio</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
                <li><a className="dropdown-item" href="#">Resume</a></li>
            </ul>
        </div>
    )
}


