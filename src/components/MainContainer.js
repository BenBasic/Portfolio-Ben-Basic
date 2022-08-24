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

    const [removeItemState, setRemoveItemState] = useState("");
    
    console.log("CLICKED IS");
    console.log(clickedState);
    console.log("FADE IS");
    console.log(fadeState);
    console.log("FADESTATE ARRAY CHECK IS");
    console.log(fadeState[0]);

    let removedItem;

    var count = 700;

    var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

    console.log("removedItem check")
    console.log(removeItemState)


    function timer()
    {
        if (clickedState) {

            if (count <= 0)
            {
                console.log("COUNTDOWN FINISHED")
                clearInterval(counter);
                setRemoveItemState("removedItem")
                console.log("INSIDE IF REMOVE ITEM IS-----")
                console.log(removeItemState)
                removedItem = "removedItem"
                count = 700
                console.log("COUNT WITHIN IF")
                console.log(count)
                return;
            }
            count--; 
            console.log("COUNT ELSE")
            console.log(count)

        }
    }

    console.log("RETURN COUNT CHECK")
    console.log(count)


    // Dont this this commented code was doing anything, still keeping around just in case though

    // function changeBGColor(containerName) {
    //     var cols = document.getElementsByClassName(containerName);
    //     console.log("---------------------COLS CHECK COLS")
    //     console.log(cols)
    //     for(let i = 0; i < cols.length; i++) {
    //       //cols[i].style.paddingTop = "200px";
    //       cols[i].style.transition = "1s";
    //       console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFOR")
    //       console.log(cols[i])
    //     }
    // }

    // THE SOLUTION IS PROBABLY TO MAKE THE TOP AND BOTTOM ROW SEPARATE, THIS WOULD LIKELY MAKE IS SO I CAN
    // SHRINK THE HEIGHT OF EITHER ROW DEPENDING ON WHICH BUTTON IS CLICKED AND THAT WAY IT WONT HAVE ALL THE
    // JITTERY MOVEMENT WHEN THE ROWS JOIN INTO ONE LINE
    // EXAMPLE, BUTTON ON ROW 1 MAKES ROW 2 SHRINK HEIGHT AND MAKES THE UPWARD MOTION NATURAL AND AVOIDS JITTERING
    // WOULDNT HAVE TO WORRY ABOUT TIMING WIDTH SHRINKING EITHER SINCE THEYRE TWO SEPERATE ROWS, SO IT CAN BE SAME TIMING


    return (
        <>
        <div className={fadeState[0] && fadeState[1] ?
        `hiddenRow row mt-5 mainButtonContainer ${removeItemState}` :
        "row mt-5 mainButtonContainer"}>
            <Spritesheet
                className={fadeState[0] ?
                    `hiddenItem aboutMeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[0] && clickedState ? `aboutMeAnimation col-md-5 buttonTransition` : `aboutMeAnimation col-md-5`)
                }
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
                        //changeBGColor('mainButtonContainer')
                        spritesheet.play();
                        setClickedState(true);
                        setFadeState([false, true, true, true]);
                        timer();
                    }}
            />
            <Spritesheet
                className={fadeState[1] ?
                    `hiddenItem portfolioAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[1] && clickedState ? `portfolioAnimation col-md-5 buttonTransition` : `portfolioAnimation col-md-5`)
                }
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
                        timer();
                    }}
            />
            </div>
            <div className={fadeState[2] && fadeState[3] ?
            `hiddenRow row mainButtonContainer ${removeItemState}` :
            "row mainButtonContainer"}>
            <Spritesheet
                className={fadeState[2] ?
                    `hiddenItem contactAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[2] && clickedState ? `contactAnimation col-md-5 buttonTransition` : `contactAnimation col-md-5`)
                }
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
                        timer();
                    }}
            />
            <Spritesheet
                className={fadeState[3] ?
                    `hiddenItem resumeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[3] && clickedState ? `resumeAnimation col-md-5 buttonTransition` : `resumeAnimation col-md-5`)
                }
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
                        timer();
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
