document.addEventListener('DomContentLoaded', () => {
    
})
import React from "react";

function Home() {
    return (
        <div className = "presentation">
            <p className ="hi-there">HI THERE! 👋 , I'M</p>
            <h1 className="name">Aintzane.</h1>

            <h3 className = "profession"><strong>FULL STACK DEVELOPER</strong></h3>
            <p>🎯 My goal is focused on solving <strong>technological challenges</strong> that help transform <strong>people's life</strong> and <strong>business opportunities</strong> into <strong>realities</strong>. </p>
            <p>💛 My drivers are <strong>Education</strong> | <strong>Innovation</strong> | <strong>Technology</strong> </p>
            <button className = "btn-cv">
                <a className = "btn-link-cv" href = "https://drive.google.com/file/d/1bSM96eNm0aOk2cQ-7WIvcPg7-AZNYlVV/view?usp=sharing" download = "CVAintzane Morales">Check my CV</a>
            </button>
        </div>
    )
}

export default Home;