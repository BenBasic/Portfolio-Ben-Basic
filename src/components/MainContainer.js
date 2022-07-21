import React, { useState } from 'react';
import NavBar from './NavBar';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
    }
}
