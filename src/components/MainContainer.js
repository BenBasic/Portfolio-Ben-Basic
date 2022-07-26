import React, { useState } from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="mainContainer">
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            <NavBarMobile />
            {renderPage()}
        </div>
    );
};
