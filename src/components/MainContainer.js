import React, { useState } from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // Running if statements within the renderPage function to check for what page the user is on, then returning the appropriate component based on that
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
            <NavBarMobile currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};
