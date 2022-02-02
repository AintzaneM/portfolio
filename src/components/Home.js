// document.addEventListener('DomContentLoaded', () => {})
import React from "react";


function Home() {
    return (
        <>
        <div className = "presentation">
            {/* <div className="letter-home"> */}
                <p className ="hi-there">HI THERE!👋, I'm <strong>Aintzane.</strong></p>
                <h3 className = "profession"><strong>FULL-STACK WEB DEVELOPER</strong></h3>
                <br/>
                <p className="drivers">💛 My drivers are <strong><span className="drivers-items"></span></strong></p>
                <hr/>
                <p className="goal">🎯 My goal is focused on solving <strong>technological challenges</strong> <br/> that help transform <strong>people's life</strong> and <strong>business <br/> opportunities</strong> into <strong>realities</strong>. </p>
            {/* </div> */}
            <br/>
            <div className="container-btn-cv">
                    <a className = "btn-link-cv" href = "https://drive.google.com/file/d/1MdZXL743-RBMMdidlCFOTr7R66gWFteI/view?usp=sharing" download = "CVAintzaneMorales">
                        <span>Check my CV</span>
                        <img src= "/images/download2.png" alt=""></img>
                    </a>
                
            </div>
        </div>

       
        {/* <br/>
        <div className = "container-logos">
            <p className="text-work"><strong>I work with:</strong></p>
            <img className= "img-logos" src="./logos.png" alt=""></img>

        </div> */}
        </>
    )
}

export default Home;