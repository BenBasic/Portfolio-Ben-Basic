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

    const [resizeState, setResizeState] = useState("");
    
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


    // NEED TO LOOK INTO HOW TO USE onPlay WITH SPRITESHEET PROPERTIES, COULD MAYBE USE THAT TO CHECK FOR CSS VALUE OF THE
    // SPRITE CONTAINER CLASS THE PACKAGE USES TO THEN CHECK FOR IF ITS AT A 0 VALUE FOR SCALE AND MAKE IT MATCH ANOTHER
    // SCALE VALUE WHICH IS GREATER THAN 0 SO THAT WAY IT CAN STOP SHOWING UP WITH 0 SCALE AND BEING INVISIBLE WHEN
    // RESIZING THE WINDOW

    // var spriteFind = document.querySelector(".aboutMeAnimation .react-responsive-spritesheet-container")
    // var cssChecking = window.getComputedStyle(spriteFind);
    // console.log("CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- ")
    // console.log(cssChecking)

    function scaleFix(value) {
        
        const color = document.getElementsByClassName("react-responsive-spritesheet-container")
        const spriteHeights = document.getElementsByClassName("react-responsive-spritesheet")
        console.log("CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- ");
    
        const cssValueArray = [];
        const cssHeightArray = [];
        
        for (let i = 0; i < color?.length; i++) {
            cssValueArray.push(
                parseFloat(color[i]?.style.transform.replaceAll("scale(", "").slice(0, -1))
            )
        }
    
        for (let i = 0; i < spriteHeights?.length; i++) {
            cssHeightArray.push(
                parseFloat(spriteHeights[i]?.style.height.replaceAll("px", ""))
            )
        }
    
        var greaterThanArray = cssValueArray.filter(function(scaleValue) {
            return scaleValue > 0;
        });
    
        var greaterThanHeightArray = cssHeightArray.filter(function(scaleValue) {
            return scaleValue > 0;
        });
    
        console.log(greaterThanArray)
        console.log(greaterThanHeightArray)
        
    
        let newValueYay = color[value]?.style
        let newHeightYay = spriteHeights[value]?.style
    
        console.log(newValueYay)
        console.log(cssValueArray)
        console.log(cssHeightArray)
        console.log(newHeightYay?.height)

        newValueYay.transform = `scale(${greaterThanArray[0]})`
        newHeightYay.height = `${greaterThanHeightArray[0]}px`
        console.log("New Scale check is")
        // console.log(scaleChecking)
        console.log(newValueYay)

    }

    // const color = document.getElementsByClassName("react-responsive-spritesheet-container")
    // const spriteHeights = document.getElementsByClassName("react-responsive-spritesheet")
    // console.log("CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- CSS --- ");

    // const cssValueArray = [];
    // const cssHeightArray = [];
    
    // for (let i = 0; i < color?.length; i++) {
    //     cssValueArray.push(
    //         parseFloat(color[i]?.style.transform.replaceAll("scale(", "").slice(0, -1))
    //     )
    // }

    // for (let i = 0; i < spriteHeights?.length; i++) {
    //     cssHeightArray.push(
    //         parseFloat(spriteHeights[i]?.style.height.replaceAll("px", ""))
    //     )
    // }

    // var greaterThanArray = cssValueArray.filter(function(scaleValue) {
    //     return scaleValue > 0;
    // });

    // var greaterThanHeightArray = cssHeightArray.filter(function(scaleValue) {
    //     return scaleValue > 0;
    // });

    // console.log(greaterThanArray)
    // console.log(greaterThanHeightArray)
    

    // let newValueYay = color[0]?.style
    // let newHeightYay = spriteHeights[0]?.style

    // console.log(newValueYay)
    // console.log(cssValueArray)
    // console.log(cssHeightArray)
    // console.log(newHeightYay?.height)

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
                    (!fadeState[0] && clickedState ? `aboutMeAnimation col-md-5 buttonTransition ${transitionState}` : `aboutMeAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtAboutMe.png')}
                widthFrame={351}
                heightFrame={351}
                steps={26}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    console.log("SCAAAAAAAAAAAAAAAAAAALLLLLEEEEEE")
                    let scaleChecking = spritesheet.getInfo('scale')
                    console.log(scaleChecking)
                    if (scaleChecking === 0)  {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                        scaleFix(0);
                        // newValueYay.transform = `scale(${greaterThanArray[1]})`
                        // newHeightYay.height = `${greaterThanHeightArray[1]}px`
                        // console.log("New Scale check is")
                        // console.log(scaleChecking)
                        // console.log(newValueYay)
                    }
                }}
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
                    (!fadeState[1] && clickedState ? `portfolioAnimation col-md-5 buttonTransition ${transitionState}` : `portfolioAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtPortfolio.png')}
                widthFrame={351}
                heightFrame={351}
                steps={34}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    console.log("SCAAAAAAAAAAAAAAAAAAALLLLLEEEEEE")
                    let scaleChecking = spritesheet.getInfo('scale')
                    console.log(scaleChecking)
                    if (scaleChecking === 0)  {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                        scaleFix(1);
                    }
                }}
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
                    (!fadeState[2] && clickedState ? `contactAnimation col-md-5 buttonTransition ${transitionState}` : `contactAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtContact.png')}
                widthFrame={351}
                heightFrame={351}
                steps={22}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    console.log("SCAAAAAAAAAAAAAAAAAAALLLLLEEEEEE")
                    let scaleChecking = spritesheet.getInfo('scale')
                    console.log(scaleChecking)
                    if (scaleChecking === 0)  {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                        scaleFix(2);
                    }
                }}
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
                    (!fadeState[3] && clickedState ? `resumeAnimation col-md-5 buttonTransition ${transitionState}` : `resumeAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtResume.png')}
                widthFrame={351}
                heightFrame={351}
                steps={19}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    console.log("SCAAAAAAAAAAAAAAAAAAALLLLLEEEEEE")
                    let scaleChecking = spritesheet.getInfo('scale')
                    console.log(scaleChecking)
                    if (scaleChecking === 0)  {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                        scaleFix(3);
                    }
                }}
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
