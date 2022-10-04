import React, { useState } from "react";

export default function About() {

    // Assigning state to class name values, these will make the page content fade in when triggered to appear
    const [finishPageAppearState, setFinishPageAppearState] = useState("invisibleIcon fadeInPage")

    // After the set time interval finishes, state is set to an empty value to prevent CSS conflicts
    setTimeout(function(){
        setFinishPageAppearState('')
    },490);

    return (
        <div className={`container aboutContainer ${finishPageAppearState}`}>
            <div className='mx-5 mt-md-5 mt-3 p3 aboutPage'>
                <h1 className='text-center aboutTitle'>About Me</h1>
                <div className='row'>
                <div className="col-md-2">
                    <img className='profilePicture' src={require('./assets/images/me.webp')} alt='Benjamin Basic smiling' />
                </div>
                <div className="col-md-10 bioContainer">
                    <p className='bio'>My name is Ben Basic, I'm a full stack web developer with a background in animation and hotel management driven by a passion to learn and expand my skill set. Certified in Full Stack Web Development from the University of Toronto Coding Boot Camp. An adaptive and quick learner with proficiencies for creative thinking, effective communication and collaborative teamwork.
                    <br></br>
                    <br></br>
                    <u>My technical skills</u>
                    <br></br>
                    JavaScript, CSS, HTML, React, MySQL, GraphQL, MongoDB, Express, Node, UI/UX, Bootstrap, jQuery, Handlebars, Heroku, and GitHub
                    </p>
                    <div className='row'>
                        <div className='col-md-6 contactDetails'>
                            
                            <h2>Contact Details</h2>

                            <p className='contactDetailList'>
                            <span>Benjamin Basic</span>
                            <br />
                            <span>905-348-8223</span>
                            <br />
                            <span>BenjaminYBasic@gmail.com</span>
                            <br />
                            <span>Toronto, Ontario</span>
                            </p>

                        </div>
                        <div className='col-md-6 resumeDownload'>
                            <p>
                                <a href='https://docs.google.com/document/d/11R4EKIcuLiq21gNKZl-miMzTM2Ezkj7Y/edit?usp=sharing&ouid=102663915874628547290&rtpof=true&sd=true' rel="noreferrer" className='resumeButton' target='_blank'>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};