import React from 'react'
import './index.css'
import { FaTwitter , FaLinkedinIn, FaGithub, FaFacebook, FaInstagram,FaCodepen } from "react-icons/fa";
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import js from '../../images/js.png';

const Home = () => {
    return (
        <div className="home">
             <div className="container">
                <div className="part-blue">
                    <h1 className="myName">Ayoub Bouya</h1>
                    <p>Front-End Developer</p>
                    <ul>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaCodepen /></a></li>
                    </ul>
                </div>
                <div className="part-light">
                    <div className="part1">
                        <h2> About <span>Me</span></h2>
                        <p>Hello I’m <span>Ayoub</span>, Nice to meet you. </p>
                        <p>I describe myself as a passionate Front End Developer who loves <span>coding</span>, <span>open-source</span>, and <span>web platform</span>. </p>
                        <p>I'm <span>confident</span>, naturally <span>curious</span>, and perpetually working on improving my <span>skills</span>. </p>
                        <h2>My <span>Skills</span></h2>
                        <ul>
                            <li><a href="#"><img style={{width:'70px'}} src={html5} alt="html5" /></a></li>
                            <li><a href="#"><img style={{width:'70px'}} src={css3} alt="css3" /></a></li>
                            <li><a href="#"><img style={{width:'70px'}} src={js} alt="js" /></a></li>
                        </ul>
                    </div>
                    <div className="part2">
                        <button>
                            <a href="#">KNOW MORE</a>
                            <h4 href="#">ABOUT ME</h4>
                        </button>
                        <button>
                            <a href="#">GOT A PROJECT?</a>
                            <h4 href="#">CONTACT ME</h4>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
