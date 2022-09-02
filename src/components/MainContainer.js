import React, { useState } from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Spritesheet from 'react-responsive-spritesheet';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('');

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
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const buttonArray = [
        {
            title: "About Me",
            image: "PortfolioArtAboutMeSingle"
        },
        {
            title: "Portfolio",
            image: "PortfolioArtPortfolioSingle"
        },
        {
            title: "Contact",
            image: "PortfolioArtContactSingle"
        },
        {
            title: "Resume",
            image: "PortfolioArtResumeSingle"
        },
    ]

    const [clickedState, setClickedState] = useState(false);

    const [fadeState, setFadeState] = useState([false, false, false, false]);

    const [removeItemState, setRemoveItemState] = useState("");

    const [fadeInState, setFadeInState] = useState("");

    const [transitionState, setTransitionState] = useState("");

    const [spriteState, setSpriteState] = useState([]);
    
    console.log("CLICKED IS");
    console.log(clickedState);
    console.log("FADE IS");
    console.log(fadeState);
    console.log("FADESTATE ARRAY CHECK IS");
    console.log(fadeState[0]);

    let removedItem;

    var count = 80;

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
                setFadeInState("fadeInIcon")
                console.log("INSIDE IF REMOVE ITEM IS-----")
                console.log(removeItemState)
                removedItem = "removedItem"
                count = 80
                //console.log("COUNT WITHIN IF")
                //console.log(count)
                return;
            }
            count--; 
            //console.log("COUNT ELSE")
            //console.log(count)

        }
    }

    console.log("RETURN COUNT CHECK")
    console.log(count)

    console.log("++++++++++++++++++++++++ INSTANCE CHECK +++++++++++++++++++++++++++")
    console.log(spriteState)

    console.log("NULL CHECK")
    console.log(!spriteState[2])

    if (spriteState[3] === undefined) {
        console.log("UNDEFINED CHECK")
    }

    // Consider adding col-sm-3 and col-3 to the main 4 grid buttons as it made the animation look less jank for the contact button
    // on smaller screens, but test it out a bit, make sure it doesnt conflict with anything as I remember the
    // margin between top and bottom rows was smaller after adding those. Maybe try only adding it to the bottom 2 buttons instead
    // of all of them? Or just look into adjusting margins for bottom 2 buttons if adding the col-sm and col

    // ADD ANOTHER SET STATE TO THE TIMER FUNCTION could do this for adding a class for the navbar icons to fade in after the countdown
    // ends so that the fading times smoothly, pairing this with an if statement for the className would likely solve the weird
    // behaviour with full opacity icons appearing and then performing an animation in a delayed way.

    // Maybe consider adding shadows to the main grid buttons

    // NEED TO WORK ON SPRITESHEET CSS WHEN CLICKED FROM THE TOP NAV ROW OF ICONS AS IT WILL BRIEFLY SHOW THE LAST FRAME OF THE ANIMATION
    // BEFORE STARTING THE ANIMATION AT ITS INTENDED FRAME. CAN FIX THIS WITH 0 OPACITY ANIMATION WITH CSS, WILL BE FINE BECAUSE IM
    // PLANNING TO DO A SLIDE IN FROM LEFT/ SLIDE OUT TO RIGHT ANIMATION FOR THESE ANYWAY


    return (
        <>
        <div className='row topNavButtons mt-3'>
            <h1 className={clickedState ?
            `instructions hiddenInstructions ${removeItemState}` :
            `instructions invisibleIcon`
            }>Select an icon</h1>
            {buttonArray.map((icon, index) => (
                <img 
                src={require(`./assets/images/${icon.image}.png`)}
                alt={icon.title}
                key={"button" + index}
                className={fadeState[index] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon clickable ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                onClick={index === 0 && clickedState ? () => {
                    handlePageChange('About')
                    setFadeState([false, true, true, true])
                    spriteState[0].goToAndPlay(1);
                    setTransitionState("fadeInIcon")
                    } :
                    index === 1 && clickedState ? () => {
                        handlePageChange('Portfolio')
                        setFadeState([true, false, true, true])
                        spriteState[1].goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                    } :
                    index === 2 && clickedState ? () => {
                        handlePageChange('Contact')
                        setFadeState([true, true, false, true])
                        spriteState[2].goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                    } :
                    index === 3 && clickedState ? () => {
                        handlePageChange('Resume')
                        setFadeState([true, true, true, false])
                        spriteState[3].goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                    } :
                    null
                }
                ></img>
            ))}
        </div>
        
        <div className={fadeState[0] && fadeState[1] ?
        `hiddenRow row mt-3 mainButtonContainer ${removeItemState}` :
        "row mt-3 mainButtonContainer"}>
            <Spritesheet
                className={fadeState[0] ?
                    `hiddenItem aboutMeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[0] && clickedState ? `aboutMeAnimation col-md-5 buttonTransition ${transitionState}` : `aboutMeAnimation col-md-5 iconStartAppear`)
                }
                image={require('./assets/images/PortfolioArtAboutMe.png')}
                widthFrame={351}
                heightFrame={351}
                steps={26}
                fps={24}
                autoplay={false}
                loop={false}
                getInstance={!fadeState[0] && (typeof spriteState[0] === 'undefined' || spriteState[0] === undefined) && spriteState.length === 0 ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setSpriteState([spritesheet]); // Also cant use the fadeState to check all without additional check cause it also breaks it
                } :
                null}
                onClick={clickedState ?
                    () => null
                    :
                    spritesheet => {
                        setClickedState(true);
                        setFadeState([false, true, true, true]);
                        timer();
                        setTimeout(function(){
                            spritesheet.play();
                            handlePageChange('About')
                        },500);
                    }}
            />
            <Spritesheet
                className={fadeState[1] ?
                    `hiddenItem portfolioAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[1] && clickedState ? `portfolioAnimation col-md-5 buttonTransition ${transitionState}` : `portfolioAnimation col-md-5 iconStartAppear`)
                }
                image={require('./assets/images/PortfolioArtPortfolio.png')}
                widthFrame={351}
                heightFrame={351}
                steps={34}
                fps={24}
                autoplay={false}
                loop={false}
                getInstance={!fadeState[1] && (typeof spriteState[1] === 'undefined' || spriteState[1] === undefined) && spriteState.length < 2 ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setSpriteState(current => [current[0], spritesheet]); // Using ...current caused items to be added twice, current[0] etc fixed this
                } :
                null}
                onClick={clickedState ?
                    () => null
                    :
                    spritesheet => {
                        setClickedState(true);
                        setFadeState([true, false, true, true]);
                        timer();
                        setTimeout(function(){
                            spritesheet.play();
                            handlePageChange('Portfolio')
                        },500);
                    }}
            />
            </div>
            <div className={fadeState[2] && fadeState[3] ?
            `hiddenRow row mainButtonContainer ${removeItemState}` :
            "row mainButtonContainer"}>
            <Spritesheet
                className={fadeState[2] ?
                    `hiddenItem contactAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[2] && clickedState ? `contactAnimation col-md-5 buttonTransition ${transitionState}` : `contactAnimation col-md-5 iconStartAppear`)
                }
                image={require('./assets/images/PortfolioArtContact.png')}
                widthFrame={351}
                heightFrame={351}
                steps={22}
                fps={24}
                autoplay={false}
                loop={false}
                getInstance={!fadeState[2] && (typeof spriteState[2] === 'undefined' || spriteState[2] === undefined) && spriteState.length < 3 ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setSpriteState(current => [current[0], current[1], spritesheet]); // Using ...current caused items to be added twice, current[0] etc fixed this
                } :
                null}
                onClick={clickedState ?
                    () => null
                    :
                    spritesheet => {
                        setClickedState(true);
                        setFadeState([true, true, false, true]);
                        timer();
                        setTimeout(function(){
                            spritesheet.play();
                            handlePageChange('Contact')
                        },500);
                    }}
            />
            <Spritesheet
                className={fadeState[3] ?
                    `hiddenItem resumeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[3] && clickedState ? `resumeAnimation col-md-5 buttonTransition ${transitionState}` : `resumeAnimation col-md-5 iconStartAppear`)
                }
                image={require('./assets/images/PortfolioArtResume.png')}
                widthFrame={351}
                heightFrame={351}
                steps={19}
                fps={24}
                autoplay={false}
                loop={false}
                getInstance={!fadeState[3] && (typeof spriteState[3] === 'undefined' || spriteState[3] === undefined) && spriteState.length < 4 ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setSpriteState(current => [current[0], current[1], current[2], spritesheet]); // Using ...current caused items to be added twice, current[0] etc fixed this
                } :
                null}
                onClick={clickedState ?
                    () => null
                    :
                    spritesheet => {
                        setClickedState(true);
                        setFadeState([true, true, true, false]);
                        timer();
                        setTimeout(function(){
                            spritesheet.play();
                            handlePageChange('Resume')
                        },500);
                    }}
            />
            </div>
            <div className="mainContainer">
                {/* 
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                <NavBarMobile currentPage={currentPage} handlePageChange={handlePageChange} />
                */}
                {renderPage()}
            </div>
        </>
    );
};
