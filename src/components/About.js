import React from 'react';

export default function About() {
    return (
        <div className='container'>
            <div className='mx-5 mt-5 p3 aboutPage'>
                <h1 className='text-center'>About Me</h1>
                <div className='row'>
                <div className="col-md-2">
                    <img className='profilePicture' src={require('./assets/images/me.png')} alt='Benjamin Basic smiling' />
                </div>
                <div className="col-md-10 testClass">
                    <p className='testClass2'>test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at test at </p>
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