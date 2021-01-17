import React from 'react'
import myPicture from '../../images/myPicture.png';
import './contact.css'


const Contact = () => {
    return (
        <div className="resume">
        <div className="container-resume">
           <div className="resume-blue">
               <h1>Contact</h1>
           </div>
           <div className="contact-light">
               <div className="locate">
                   <h2>Locate <span>me</span></h2>
                  
                   <div className="Locate-child">
                       <ul>
                           <li> <img style={{width:'150px'}} src={myPicture} alt="my picture" /></li>
                       </ul>
                       <ul>
                           <li> Kharkiv, Ukraine.</li>
                           <li> +3806 31 87 09 47</li>
                           <li> bouya.ayoub1@gmail.com </li>
                       </ul>
                   </div>
                    
               </div>
               <div className="get">
                    <h2>Get in <span>touch</span></h2>
                    <p>New projects, freelance inquiry or even a coffee.</p>
                     <form className="get">
                        <label for="fname">Your Name:</label>
                        <input type="text" id="name" name="name"  ></input>
                        <label for="email">Your Email:</label>
                        <input type="email" id="email" name="email" ></input>
                        <label for="fname">Your Message:</label>
                        <textarea id="msg" name="message" rows="3" cols="30"  > </textarea>
                     </form>
               </div>         
           </div>
       </div>
   </div>
    )
}

export default Contact
