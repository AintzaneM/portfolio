import React from "react";






function Contact() {
    return (
        <div className="container-contact">
            
            <p className="title-contact"><strong>Contact</strong></p>
            <div className="container-images-home">
                <a href='https://www.linkedin.com/in/aintzanemorales/'>
                    <img src='./linkedin.png' alt=""/>
                </a>
                
                <a href='https://github.com/AintzaneM' className = "btn-gitHub">
                        <img src='./github.png'alt=""/>
                </a>
            </div>

            <br/>

            <p className = "email-contact"><strong>aintzane.morales@gmail.com</strong></p>
            <button className="btn-contact">
                <a className="mailto" href="mailto:aintzane.morales@gmail.com"><strong>Send an email</strong></a>
            </button> 
            
        </div>
    )
}

export default Contact;