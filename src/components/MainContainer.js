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

    const [pageNameState, setPageNameState] = useState(
        {about: "nameDissappear",
        portfolio: "nameDissappear",
        contact: "nameDissappear",
        resume: "nameDissappear",
        instructions: ""}
    );

    // Function which triggers the reappearing of the instruction text if mouse is not hovered on a main icon
    function instructionReappear() {
        // Timeout required to avoid fadein and fadeout transitions jumping between full and zero opacity values
        setTimeout(function () {
            if (
                pageNameState.about === "nameDissappear" &&
                pageNameState.portfolio === "nameDissappear" &&
                pageNameState.contact === "nameDissappear" &&
                pageNameState.resume === "nameDissappear" &&
                pageNameState.instructions === "instructionsFadeOut"
                
                ) {
                    setPageNameState({ ...pageNameState, instructions: "instructionsFadeIn"})
                    console.log("good")
                } else {
                    console.log("goodbutBAD")
            }
        }, 300);
    }



    const [testState1, setTestState1] = useState();
    const [testState2, setTestState2] = useState();
    const [testState3, setTestState3] = useState();
    const [testState4, setTestState4] = useState();

    const [transitionButtonClassState, setTransitionButtonClassState] = useState("buttonTransition");
    
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

        setTransitionButtonClassState("")
        setTimeout(function(){
            setTransitionButtonClassState("buttonTransition")
        },500);

    }

    console.log("SPRITE STATE UNDEFINED CHECK%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(spriteState[3])
    console.log(spriteState[3] == null)
    console.log("truthy check")
    console.log(!fadeState[3])
    console.log(spriteState.length < 4)
    console.log("NEW STATE ATTEMPT CHECKING")
    console.log([testState1, testState2, testState3, testState4])

    return (
        <>
        <div className='row topNavButtons mt-3'>
            <h1 className={clickedState ?
            `instructions hiddenInstructions ${removeItemState}` :
            `instructions invisibleIcon ${pageNameState.instructions}`
            }>Select an icon</h1>

            <h1 className={clickedState ?
            `namePreview hiddenInstructions ${removeItemState}` :
            `namePreview invisibleIcon ${pageNameState.about}`
            }
            onTransitionEnd={ () => {
                instructionReappear()
            }}
            
            >
                About Me
            </h1>

            <h1 className={clickedState ?
            `namePreview hiddenInstructions ${removeItemState}` :
            `namePreview invisibleIcon ${pageNameState.portfolio}`
            }
            onTransitionEnd={ () => {
                instructionReappear()
            }}
            
            >
                Portfolio
            </h1>

            <h1 className={clickedState ?
            `namePreview hiddenInstructions ${removeItemState}` :
            `namePreview invisibleIcon ${pageNameState.contact}`
            }
            onTransitionEnd={ () => {
                instructionReappear()
            }}
            
            >
                Contact
            </h1>

            <h1 className={clickedState ?
            `namePreview hiddenInstructions ${removeItemState}` :
            `namePreview invisibleIcon ${pageNameState.resume}`
            }
            onTransitionEnd={ () => {
                instructionReappear()
            }}
            
            >
                Resume
            </h1>

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
                    } :
                    index === 1 && clickedState ? () => {
                        handlePageChange('Portfolio')
                        setFadeState([true, false, true, true])
                        testState2.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                    } :
                    index === 2 && clickedState ? () => {
                        handlePageChange('Contact')
                        setFadeState([true, true, false, true])
                        testState3.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
                    } :
                    index === 3 && clickedState ? () => {
                        handlePageChange('Resume')
                        setFadeState([true, true, true, false])
                        testState4.goToAndPlay(1);
                        setTransitionState("fadeInIcon")
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
            <Spritesheet
                className={fadeState[0] ?
                    `hiddenItem aboutMeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[0] && clickedState ? `aboutMeAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` : `aboutMeAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtAboutMe.webp')}
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
                        // setTransitionButtonClassState("")
                        // setTimeout(function(){
                        //     setTransitionButtonClassState("buttonTransition")
                        // },500);
                        // newValueYay.transform = `scale(${greaterThanArray[1]})`
                        // newHeightYay.height = `${greaterThanHeightArray[1]}px`
                        // console.log("New Scale check is")
                        // console.log(scaleChecking)
                        // console.log(newValueYay)
                    }
                }}
                getInstance={!clickedState && testState1 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState1(spritesheet); // Also cant use the fadeState to check all without additional check cause it also breaks it
                    console.log("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")
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
                    }
                }
                onMouseOver={ () => {
                    setPageNameState({ ...pageNameState,
                        about: "nameAppear",
                        portfolio: "nameDissappear",
                        contact: "nameDissappear",
                        resume: "nameDissappear",
                        instructions: "instructionsFadeOut"})
                    }
                }
                onMouseOut={ () => {
                setPageNameState({ ...pageNameState, about: "nameDissappear"})
                }}
                    
            />
            <Spritesheet
                className={fadeState[1] ?
                    `hiddenItem portfolioAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[1] && clickedState ? `portfolioAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` : `portfolioAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtPortfolio.webp')}
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
                getInstance={!clickedState && testState2 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState2(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
                    console.log("22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222")
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
                    }
                }
                onMouseOver={ () => {
                    setPageNameState({ ...pageNameState,
                        about: "nameDissappear",
                        portfolio: "nameAppear",
                        contact: "nameDissappear",
                        resume: "nameDissappear",
                        instructions: "instructionsFadeOut"})
                    }
                }
                onMouseOut={ () => {
                setPageNameState({ ...pageNameState, portfolio: "nameDissappear"})
                }}
            />
            </div>
            {/* <div className='row mainButtonContainer justify-content-center'>
            <h1 className='iconText col-md-5'>Test</h1>
            <h1 className='iconText col-md-5'>Test</h1>
            </div> */}
            <div className={fadeState[2] && fadeState[3] ?
            `hiddenRow row mainButtonContainer ${removeItemState}` :
            fadeState[0] && fadeState[1] ? "row mt-3 mainButtonContainer" :
            "row mainButtonContainer"}>
            <Spritesheet
                className={fadeState[2] ?
                    `hiddenItem contactAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[2] && clickedState ? `contactAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` : `contactAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtContact.webp')}
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
                getInstance={!clickedState && testState3 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState3(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
                    console.log("3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333")
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
                    }
                }
                onMouseOver={ () => {
                    setPageNameState({ ...pageNameState,
                        about: "nameDissappear",
                        portfolio: "nameDissappear",
                        contact: "nameAppear",
                        resume: "nameDissappear",
                        instructions: "instructionsFadeOut"})
                    }
                }
                onMouseOut={ () => {
                setPageNameState({ ...pageNameState, contact: "nameDissappear"})
                }}
            />
            <Spritesheet
                className={fadeState[3] ?
                    `hiddenItem resumeAnimation col-md-5 ${removeItemState}` :
                    (!fadeState[3] && clickedState ? `resumeAnimation col-md-5 ${transitionButtonClassState} ${transitionState}` : `resumeAnimation col-md-5 iconStartAppear hoverFX`)
                }
                image={require('./assets/images/PortfolioArtResume.webp')}
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
                getInstance={
                    !clickedState && testState4 == null ? spritesheet => { // For some reason using clickedState check with this for multiple doesnt work
                    setTestState4(spritesheet); // Using ...current caused items to be added twice, current[0] etc fixed this
                    console.log("44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444")
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
                    }
                }
                onMouseOver={ () => {
                    setPageNameState({ ...pageNameState,
                        about: "nameDissappear",
                        portfolio: "nameDissappear",
                        contact: "nameDissappear",
                        resume: "nameAppear",
                        instructions: "instructionsFadeOut"})
                    }
                }
                onMouseOut={ () => {
                setPageNameState({ ...pageNameState, resume: "nameDissappear"})
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
