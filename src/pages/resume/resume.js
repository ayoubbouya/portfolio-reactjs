import React from 'react';
import './resumeStyle.css';

const Resume = () => {
    return (
        <div className="resume">
             <div className="container-resume">
                <div className="resume-blue">
                    <h1>Resume</h1>
                </div>
                <div className="resume-light">
                    <div className="education">
                        <h2>education</h2>
                        <div className="education-child">
                            <ul>
                                <li>
                                    <h4>Bachelor's - Computer Engenieering</h4>
                                    <p>Kharkiv National University of Radio Electronics</p>
                                    <a>2018-2022</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Higher School of Technology (ESTM)</h4>
                                    <p>Sales techniques and Customer Service</p>
                                    <a>2014-2015</a>
                                </li>
                            </ul>
                        </div>
                         
                    </div>
                    <div className="certification">
                         <h2>certifications</h2>
                         <div className="certification-child">
                            <ul>
                                <li>
                                    <h4>SoloLearn</h4>
                                    <p>HTML</p>
                                    <a>2020</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>SoloLearn</h4>
                                    <p>CSS</p>
                                    <a>2020</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills">
                         <h2>skills</h2>
                         <div className="skills-child">
                            <ul>
                                <li className="html">HTML5</li>
                                <li className="css">CSS3</li>
                                <li className="css">FLEXBOX</li>
                                <li className="css">GRID</li>
                                <li className="css">BOOTSTRAP4</li>
                                <li className="js">JAVASCRIPT</li>
                                <li className="js">REACTJS</li>
                                <li className="design">UI/UX Design</li>
                                <li className="design">PHOTOSHOP</li>
                                <li className="design">FIGMA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
