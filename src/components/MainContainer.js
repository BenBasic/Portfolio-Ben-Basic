import React, { useState } from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Spritesheet from 'react-responsive-spritesheet';

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

    const [clickedState, setClickedState] = useState(false);

    const [fadeState, setFadeState] = useState([false, false, false, false]);
    
    console.log("CLICKED IS");
    console.log(clickedState);
    console.log("FADE IS");
    console.log(fadeState);
    console.log("FADESTATE ARRAY CHECK IS");
    console.log(fadeState[0]);


    return (
        <>
        <div className="row mt-5 mainButtonContainer">
            <Spritesheet
                className={fadeState[0] ?
                    `hiddenItem aboutMeAnimation col-md-5`
                :
                `aboutMeAnimation col-md-5`}
                image={require('./assets/images/PortfolioArtAboutMe.png')}
                widthFrame={351}
                heightFrame={351}
                steps={26}
                fps={24}
                autoplay={false}
                loop={false}
                onClick={clickedState ?
                    spritesheet => {
                        spritesheet.pause();
                    }
                    :
                    spritesheet => {
                        spritesheet.play();
                        setClickedState(true);
                        setFadeState([false, true, true, true]);
                    }}
            />
            <Spritesheet
                className={fadeState[1] ?
                    `hiddenItem portfolioAnimation col-md-5`
                :
                `portfolioAnimation col-md-5`}
                image={require('./assets/images/PortfolioArtPortfolio.png')}
                widthFrame={351}
                heightFrame={351}
                steps={34}
                fps={24}
                autoplay={false}
                loop={false}
                onClick={clickedState ?
                    spritesheet => {
                        spritesheet.pause();
                    }
                    :
                    spritesheet => {
                        spritesheet.play();
                        setClickedState(true);
                        setFadeState([true, false, true, true]);
                    }}
            />
            <Spritesheet
                className={fadeState[2] ?
                    `hiddenItem contactAnimation col-md-5`
                :
                `contactAnimation col-md-5`}
                image={require('./assets/images/PortfolioArtContact.png')}
                widthFrame={351}
                heightFrame={351}
                steps={22}
                fps={24}
                autoplay={false}
                loop={false}
                onClick={clickedState ?
                    spritesheet => {
                        spritesheet.pause();
                    }
                    :
                    spritesheet => {
                        spritesheet.play();
                        setClickedState(true);
                        setFadeState([true, true, false, true]);
                    }}
            />
            <Spritesheet
                className={fadeState[3] ?
                    `hiddenItem resumeAnimation col-md-5`
                :
                `resumeAnimation col-md-5`}
                image={require('./assets/images/PortfolioArtResume.png')}
                widthFrame={351}
                heightFrame={351}
                steps={19}
                fps={24}
                autoplay={false}
                loop={false}
                onClick={clickedState ?
                    spritesheet => {
                        spritesheet.pause();
                    }
                    :
                    spritesheet => {
                        spritesheet.play();
                        setClickedState(true);
                        setFadeState([true, true, true, false]);
                    }}
            />
            </div>
            <div className="mainContainer">
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                <NavBarMobile currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        </>
    );
};
