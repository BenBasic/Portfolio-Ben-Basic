import React from 'react';

export default function About() {
    return (
        <div className='container aboutContainer'>
            <div className='mx-5 mt-5 p3 aboutPage'>
                <h1 className='text-center'>About Me</h1>
                <div className='row'>
                <div className="col-md-2">
                    <img className='profilePicture' src={require('./assets/images/me.png')} alt='Benjamin Basic smiling' />
                </div>
                <div className="col-md-10 bioContainer">
                    <p className='bio'>My name is Ben Basic. Im 27 years old and I've been a 2D animator for 17 of those years. Animation might not seem too similar to programming, but they both involve staying up until 4 in the morning fixing something that almost nobody is going to notice, so programming fits right in my comfort zone.  I'm currently attending the University of Toronto's programming bootcamp, where I hope to create things that both my peers and potential employers find value in by the time I graduate.</p>
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
                                <a href='https://drive.google.com/file/d/1FPnrSS36yMK0BbkWNatFhyYkPHFnJDBG/view?usp=sharing' rel="noreferrer" className='resumeButton' target='_blank'>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};