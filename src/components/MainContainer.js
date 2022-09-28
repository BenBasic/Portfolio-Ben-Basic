import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Spritesheet from 'react-responsive-spritesheet';

export default function MainContainer() {

    // Setting currentPage to an empty value, will have a value set when a page is selected
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

    // Event handler for changing page content
    const handlePageChange = (page) => setCurrentPage(page);

    // Array of objects containing values required for top navigation icons
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

    // Assigning clickedState a value of false, will be set to true once user clicks on one of the home page icons
    const [clickedState, setClickedState] = useState(false);

    /* Assigning fadeState an array of false values, will set values of unselected pages to true when a page is selected,
    this will control which icons are invisible/fade away and which ones are set to visible/fade in
    */
    const [fadeState, setFadeState] = useState([false, false, false, false]);

    /* Assigning removeItemState an empty value, once a timer finishes counting down it will be set to a
    class name which will make any element containing removeItemState to have a display value of none
    which will make that element not interfere with positioning of other elements
    */
    const [removeItemState, setRemoveItemState] = useState("");

    /* Assigning fadeInState an empty value, once a timer finishes counting down it will be set to a
    class name which will make any element containing fadeInState to play a fading in animation.
    This is currently used for fading in the top navigation icons
    */
    const [fadeInState, setFadeInState] = useState("");

    /* Assigning transitionState an empty value, once a timer finishes counting down it will be set to a
    class name which will make any element containing transitionState to play a fading in animation.
    This is currently used for fading in the main icon spritesheets when a matching top navigation icon is clicked
    */
    const [transitionState, setTransitionState] = useState("");

    /* Assigning bottomRowSmoothState a class name value which will make the bottom 2 homepage icons
    have a bouncier and less janky looking animation when they move to the center of the screen after being
    selected from the home page. Will be set to an empty value after the animation finishes to
    avoid CSS related conflicts
    */
    const [bottomRowSmoothState, setBottomRowSmoothState] = useState("bottomRowSmooth");

    /* Assigning aboutSmoothState a class name value which will make the About homepage icon
    have a bouncier animation when moving to the center of the screen after being
    selected from the home page. Will be set to an empty value after the animation finishes to
    avoid CSS related conflicts
    */
    const [aboutSmoothState, setAboutSmoothState] = useState("aboutSmooth");

    /* Assigning portfolioSmoothState a class name value which will make the Portfolio homepage icon
    have a bouncier animation when moving to the center of the screen after being
    selected from the home page. Will be set to an empty value after the animation finishes to
    avoid CSS related conflicts
    */
    const [portfolioSmoothState, setPortfolioSmoothState] = useState("portfolioSmooth");

    /* Assigning testStates to a null value, will be set to the value of the spritesheet instances for
    the icon spritesheets and be referenced in a function which prevents errors relating to the spritesheets
    not playing their animations
    */
    const [testState1, setTestState1] = useState();
    const [testState2, setTestState2] = useState();
    const [testState3, setTestState3] = useState();
    const [testState4, setTestState4] = useState();

    /* Assigning transitionButtonClassState a class name value which will be referenced in a function
    which prevents errors relating to the spritesheets not playing their animations
    */
    const [transitionButtonClassState, setTransitionButtonClassState] = useState("buttonTransition");
    
    // Assigning count a value of 80, this time is required to have CSS animations trigger at correct times
    var count = 80;

    // Assigning counter to run the timer function, setting a value of 10 which will run the timer every 100th of a second
    var counter = setInterval(timer, 10);


    // Function which counts down the count value, this is used to trigger CSS classes and animations at intended time
    function timer()
    {
        // Checking if one of the main home page icons has been clicked on
        if (clickedState) {

            /* Checking if countdown has finished, if it has then the counter interval will be cleared
            and the appropriate elements will be set to a display of none or play a fade in animation,
            the count value is then set back to its original value
            */
            if (count <= 0)
            {
                clearInterval(counter);
                setRemoveItemState("removedItem")
                setFadeInState("fadeInIcon")
                count = 80
                return;
            }
            // Decrements the value of count by 1
            count--; 
        }
    }


    /* Function that prevents animation playback errors from occuring on main icon spritesheets if resizing occurs,
    also prevents main icon spritesheets from being invisible due to errors causing their scale/height to be a value of 0
    */
    function scaleFix(value) {
        
        // Assigning variables to elements matching the spritesheet classnames
        const color = document.getElementsByClassName("react-responsive-spritesheet-container")
        const spriteHeights = document.getElementsByClassName("react-responsive-spritesheet")
    
        // Assigning variables to empty arrays, values in the array will be defined by the for loops below
        const cssValueArray = [];
        const cssHeightArray = [];
        
        // For loop which cycles through the array to add the transform scale value into the cssValueArray
        for (let i = 0; i < color?.length; i++) {
            cssValueArray.push(
                parseFloat(color[i]?.style.transform.replaceAll("scale(", "").slice(0, -1))
            )
        }
    
        // For loop which cycles through the array to add the height value into the cssHeightArray
        for (let i = 0; i < spriteHeights?.length; i++) {
            cssHeightArray.push(
                parseFloat(spriteHeights[i]?.style.height.replaceAll("px", ""))
            )
        }
    
        // Assigning variables to a value if the numbers within the arrays are greater than 0
        var greaterThanArray = cssValueArray.filter(function(scaleValue) {
            return scaleValue > 0;
        });
    
        var greaterThanHeightArray = cssHeightArray.filter(function(scaleValue) {
            return scaleValue > 0;
        });
        
        // Assigning variables to the style property of their elements, using ? to prevent errors if ran before value is grabbed
        let newValueYay = color[value]?.style
        let newHeightYay = spriteHeights[value]?.style

        // Assigning new css style values for transform scale and height, overwriting any value which was previously 0
        newValueYay.transform = `scale(${greaterThanArray[0]})`
        newHeightYay.height = `${greaterThanHeightArray[0]}px`

        // Sets transitionButtonClassState to an empty value, and then setting the value to a class name after setTimeout finishes
        setTransitionButtonClassState("")
        setTimeout(function(){
            setTransitionButtonClassState("buttonTransition")
        },500);

    }


    return (
        <>
        <div className='row topNavButtons mt-3'>
            <h1 className={clickedState ?
            `instructions hiddenInstructions ${removeItemState}` :
            `instructions invisibleIcon`
            }>Select an icon</h1>
            {buttonArray.map((icon, index) => (
                <img 
                src={require(`./assets/images/${icon.image}.webp`)}
                alt={icon.title}
                key={"button" + index}
                className={fadeState[index] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon clickable hoverFX ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                onClick={index === 0 && clickedState ? () => {
                    handlePageChange('About')
                    setFadeState([false, true, true, true])
                    testState1.goToAndPlay(1);
                    setTransitionState("fadeInIcon")
                    if (aboutSmoothState === "aboutSmooth") {
                        setAboutSmoothState("")
                    }
                    } :
                    index === 1 && clickedState ? () => {
                        handlePageChange('Portfolio')
                        setFadeState([true, false, true, true])
                        testState2.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                        if (portfolioSmoothState === "portfolioSmooth") {
                            setPortfolioSmoothState("")
                        }
                    } :
                    index === 2 && clickedState ? () => {
                        handlePageChange('Contact')
                        setFadeState([true, true, false, true])
                        testState3.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                        if (bottomRowSmoothState === "bottomRowSmooth") {
                            setBottomRowSmoothState("")
                        }
                    } :
                    index === 3 && clickedState ? () => {
                        handlePageChange('Resume')
                        setFadeState([true, true, true, false])
                        testState4.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                        if (bottomRowSmoothState === "bottomRowSmooth") {
                            setBottomRowSmoothState("")
                        }
                    } :
                    null
                }
                ></img>
            ))}

            <div className='row topNavButtons topButtonText'>
                <p className={fadeState[0] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                >
                    About
                </p>
                <p className={fadeState[1] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                >
                    Portfolio
                </p>
                <p className={fadeState[2] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                >
                    Contact
                </p>
                <p className={fadeState[3] && clickedState ?
                    `navIcon col-3 col-sm-3 col-md-3 invisibleIcon ${fadeInState}` :
                    !clickedState ?
                    'navIcon col-3 col-sm-3 col-md-3 invisibleIcon' :
                    'navIcon col-3 col-sm-3 col-md-3 hiddenIcon'
                }
                >
                    Resume
                </p>
            </div>

        </div>


        
        <div className={fadeState[0] && fadeState[1] ?
        `hiddenRow row mainButtonContainer ${removeItemState}` :
        "row mt-3 mainButtonContainer"}>
            <div
            className={fadeState[0] ?
                `hiddenItem aboutMeAnimation col-md-5 ${removeItemState}` :
                (!fadeState[0] && clickedState ? `aboutMeAnimation col-md-5 ${transitionButtonClassState} ${transitionState} ${aboutSmoothState}` :
                `aboutMeAnimation col-md-5 iconStartAppear hoverFX`)
            }
            onAnimationEnd={ !fadeState[0] &&
                aboutSmoothState === "aboutSmooth" && removeItemState === "removedItem" ?
                () => {
                    setAboutSmoothState("")
                } :
                () => null
            }
            >
            <Spritesheet

                image={require('./assets/images/PortfolioArtAboutMe.webp')}
                widthFrame={351}
                heightFrame={351}
                steps={26}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    // Assigning variable to the scale value from the spritesheet instance
                    let scaleChecking = spritesheet.getInfo('scale')

                    // If the scale value is 0, then the scaleFix function will trigger, preventing errors from occuring
                    if (scaleChecking === 0)  {
                        scaleFix(0);
                    }
                }}
                getInstance={!clickedState && testState1 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState1(spritesheet); // Also cant use the fadeState to check all without additional check cause it also breaks it
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
            <div className={ !fadeState[0] && clickedState ?
                `relativeText iconTextFadeAway ${removeItemState}` :
                clickedState ?
                `relativeText ${removeItemState}` :
                'relativeText'
            }
            >
            <h1 className='iconText'>About</h1>
            </div>
            </div>

            <div
            className={fadeState[1] ?
                `hiddenItem portfolioAnimation col-md-5 ${removeItemState}` :
                (!fadeState[1] && clickedState ? `portfolioAnimation col-md-5 ${transitionButtonClassState} ${transitionState} ${portfolioSmoothState}` :
                `portfolioAnimation col-md-5 iconStartAppear hoverFX`)
            }
            onAnimationEnd={ !fadeState[1] &&
                portfolioSmoothState === "portfolioSmooth" && removeItemState === "removedItem" ?
                () => {
                    setPortfolioSmoothState("")
                } :
                () => null
            }
            >
            <Spritesheet

                image={require('./assets/images/PortfolioArtPortfolio.webp')}
                widthFrame={351}
                heightFrame={351}
                steps={34}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    // Assigning variable to the scale value from the spritesheet instance
                    let scaleChecking = spritesheet.getInfo('scale')
                    
                    // If the scale value is 0, then the scaleFix function will trigger, preventing errors from occuring
                    if (scaleChecking === 0)  {
                        scaleFix(1);
                    }
                }}
                getInstance={!clickedState && testState2 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState2(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
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

            <div className={ !fadeState[1] && clickedState ?
                `relativeText iconTextFadeAway ${removeItemState}` :
                clickedState ?
                `relativeText ${removeItemState}` :
                'relativeText'
            }
            >
            <h1 className='iconText'>Portfolio</h1>
            </div>

            </div>
            </div>

            <div className={fadeState[2] && fadeState[3] ?
            `hiddenRow row mainButtonContainer ${removeItemState}` :
            fadeState[0] && fadeState[1] ? `row mt-3 mainButtonContainer ${bottomRowSmoothState}` :
            "row mainButtonContainer"}
            onAnimationEnd={ fadeState[0] && fadeState[1] &&
                bottomRowSmoothState === "bottomRowSmooth" && removeItemState === "removedItem" ?
                () => {
                    setBottomRowSmoothState("")
                } :
                () => null
            }
            >

            <div
            className={fadeState[2] ?
                `hiddenItem contactAnimation col-md-5 ${removeItemState}` :
                (!fadeState[2] && clickedState ? `contactAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` :
                `contactAnimation col-md-5 iconStartAppear hoverFX`)
            }
            >
            <Spritesheet

                image={require('./assets/images/PortfolioArtContact.webp')}
                widthFrame={351}
                heightFrame={351}
                steps={22}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    // Assigning variable to the scale value from the spritesheet instance
                    let scaleChecking = spritesheet.getInfo('scale')

                    // If the scale value is 0, then the scaleFix function will trigger, preventing errors from occuring
                    if (scaleChecking === 0)  {
                        scaleFix(2);
                    }
                }}
                getInstance={!clickedState && testState3 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState3(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
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

            <div className={ !fadeState[2] && clickedState ?
                `relativeText iconTextFadeAway ${removeItemState}` :
                clickedState ?
                `relativeText ${removeItemState}` :
                'relativeText'
            }
            >
            <h1 className='iconText'>Contact</h1>
            </div>

            </div>

            <div
            className={fadeState[3] ?
                `hiddenItem resumeAnimation col-md-5 ${removeItemState}` :
                (!fadeState[3] && clickedState ? `resumeAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` :
                `resumeAnimation col-md-5 iconStartAppear hoverFX`)
            }
            >
            <Spritesheet

                image={require('./assets/images/PortfolioArtResume.webp')}
                widthFrame={351}
                heightFrame={351}
                steps={19}
                fps={24}
                autoplay={false}
                loop={false}
                onPlay={spritesheet => {
                    // Assigning variable to the scale value from the spritesheet instance
                    let scaleChecking = spritesheet.getInfo('scale')

                    // If the scale value is 0, then the scaleFix function will trigger, preventing errors from occuring
                    if (scaleChecking === 0)  {
                        scaleFix(3);
                    }
                }}
                getInstance={
                    !clickedState && testState4 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState4(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
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

            <div className={ !fadeState[3] && clickedState ?
                `relativeText iconTextFadeAway ${removeItemState}` :
                clickedState ?
                `relativeText ${removeItemState}` :
                'relativeText'
            }
            >
            <h1 className='iconText'>Resume</h1>
            </div>

            </div>
            </div>
            <div className="mainContainer">
                {renderPage()}
            </div>
        </>
    );
};
