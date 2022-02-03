import React from "react";






function Contact() {
    return (
        <div className="contact-page">
            <p className="title-contact"><strong>Contact</strong></p>
            <div className="container-contact">
        
            
            <div class="type-contact">
                <p>If you find interesting my profile, please,</p> 
                <p> do not hesitate to contact me!</p>
            </div>
            <br/>
            <div className="container-images-contact">
                <a href='https://www.linkedin.com/in/aintzanemorales/'>  
                    <img src='./linkedin.png' alt=""/>
                </a>
                <a href='https://github.com/AintzaneM' className = "btn-gitHub">
                    <img src='./github.png'alt=""/>
                </a>
            </div>
            <br/>
            <p className = "email-contact"><strong>aintzane.morales@gmail.com</strong></p>
            <div className="container-email">
                <a className="mailto" href="mailto:aintzane.morales@gmail.com">
                    <span>Send an email</span>
                    <img src="/images/email.png"></img>
                </a>
            </div>
           
            
            
        </div>
        </div>
    )
}

export default Contact;