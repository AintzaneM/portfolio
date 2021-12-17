// document.addEventListener('DomContentLoaded', () => {})
import React from "react";


function Home() {
    return (
        <>
        <div className = "presentation">
            <div className="letter-home">
            <p className ="hi-there">HI THERE! 👋 , I'M</p>
            <h1 className="name"><strong>Aintzane.</strong></h1>
            <br/>

            <h3 className = "profession"><strong>FULL STACK DEVELOPER</strong></h3>
            <br/>
            <p>💛 My drivers are <strong>Education</strong> | <strong>Innovation</strong> | <strong>Technology</strong> </p>
            <p>🎯 My goal is focused on solving <strong>technological challenges</strong> that help transform <strong>people's life</strong> and <strong>business opportunities</strong> into <strong>realities</strong>. </p>
            </div>
            <br/>

            <div className="container-btn-cv">
                <button className = "btn-cv">
                    <a className = "btn-link-cv" href = "https://drive.google.com/file/d/1bSM96eNm0aOk2cQ-7WIvcPg7-AZNYlVV/view?usp=sharing" download = "CVAintzane Morales"><strong>Check my CV</strong></a>
                </button>
            </div>
        </div>

       
        <br/>
        <div className = "container-logos">
            <p className="text-work"><strong>I work with:</strong></p>
            <img className= "img-logos" src="./logos.png" alt=""></img>

        </div>
        </>
    )
}

export default Home;