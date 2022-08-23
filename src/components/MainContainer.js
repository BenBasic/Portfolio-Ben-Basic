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

    // const canvas = document.getElementsByClassName("spritesheetCanvas");
    // const context = canvas.getContext("2d");
    // const width = 351;
    // const height = 351;
    // const spriteRow = 0;
    // const spriteColumn = 0;
    // const spriteFrameSize = 351;
    // const spritesheetWidth = 2106;
    // const spritesheetHeight = 1755;
    // const fps = 24;
    // const xPos = 351;
    // const yPos = 351;
    // const scale = 1;
    // const timeToUpdate = 1 * fps;
    // let frameNumber = 0;

    // const spritesheet = new Image();
    // spritesheet.src = "./assets/images/PortfolioArtAboutMe.png"

    // function animate() {
    //     context.drawImage(
    //         spritesheet,
    //         0, // First pixel on x axis
    //         0, // First pixel on y axis
    //         spriteFrameSize, // Frame width
    //         spriteFrameSize, // Frame height
    //         xPos, // x position to draw on canvas
    //         yPos, // y position to draw on canvas
    //         spriteFrameSize * scale, // Desired width to draw on canvas (size of frame multiplied be desired scale)
    //         spriteFrameSize * scale, // Desired height to draw on canvas (size of frame multiplied be desired scale)

    //     )
    // }

    // function frame() {
    //     context.clearRect(0, 0, width, height);
    //     animate();
    //     requestAnimationFrame(frame);
    // }

    // frame();

    const [clickedState, setClickedState] = useState(false);
    //let clicked = false;
    console.log("CLICKED IS")
    console.log(clickedState)


    return (
        <>
        <div className="row mt-5 mainButtonContainer">
            <Spritesheet
                className={`aboutMeAnimation col-md-5`}
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
                    }}
            />
            <Spritesheet
                className={`portfolioAnimation col-md-5`}
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
                    }}
            />
            <Spritesheet
                className={`contactAnimation col-md-5`}
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
                    }}
            />
            <Spritesheet
                className={`resumeAnimation col-md-5`}
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
