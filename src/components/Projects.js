import React from "react";
import Card from "react-bootstrap/Card";
 <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export const myProjects = [
    {
        id: "1a",
        name: "Who invent what?",
        about:"The project inspired by the game known as '3 in a row' or 'noughts and crosses'. The idea was born to give visibility to 👩‍🔬 women and their 💡 inventions created throughout history.",
        img:"./tic-tac1.png",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, DOM Manipulation",
        type: "Game project",
        deployment: "GitHub",
        web: "https://aintzanem.github.io/Who-invent-what/",
        gitHub: "https://github.com/AintzaneM/Who-invent-what",
    },
    {
        id: "1b",
        name: "Tetris",
        about:"The project based on the traditional game Tetris. Use the ⬆️ up arrow to change the shape of the item, and the ⬇️ down, ➡️ right, and ⬅️ left arrows to move the item.",
        img:"./tetris1.png",
        year: 2021,
        technologies_tools: "React, JavaScript, HTML, CSS, Styled-Components, React Hooks",
        type: "Computer project",
        deployment: "Netlify",
        web: "https://tetris-game-aintzanem.netlify.app/",
        gitHub: "https://github.com/AintzaneM/tetrisgame",
    },
    {
        id: "1c",
        name: "AboutSkills",
        about:"The project with the aim of 🔎 sharing professional experiences in different areas and 🤝 matching them with people looking for a new job or deciding which studies to choose.",
        img:"./aboutSkills1.png",
        year: 2021,
        technologies_tools: "React, Express, Moongose, REST API, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "MERN Stack application",
        deployment: "Netlify",
        web: "https://about-skills.netlify.app/",
        gitHub: "https://github.com/AintzaneM/hookup-server"
    },
    {
        id: "1d",
        name: "SurfOn",
        about:"The project addressed to 🏄‍♀️ surfer lovers where users can find and learn different surf tricks to 🧐 improve their technique.",
        img:"./surfOn1.png",
        year: 2021,
        technologies_tools: "Express, Moongose, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "Full Stack application",
        deployment: "Heroku",
        web:"https://surf-on.herokuapp.com/",
        gitHub: "https://github.com/AintzaneM/surf-education"
    }
    
   
]

export const projects = () => {
    return (
        <>
        
        <div className="container-projects">
        <p className="title-projects"><strong>Projects</strong></p>
            {myProjects.map((eachProject, index) => {
                return (
                    <div className="item-projects" key={eachProject.id}>
                        
                        {/* <Card className="card" style={{ width: '30rem' }}> */}
                        <div className="card">
                            <Card.Img className="card-body-img" variant="top" src={eachProject.img}/>
                            <div className="card-body">
                                <div className="card-title"><strong> {eachProject.name}</strong></div>
                                    <br/>
                                <div className="card-text">
                                    <p><strong>About: </strong>{eachProject.about}</p>
                                    <br/>
                                    <p><strong>Built with: </strong>{eachProject.technologies_tools}</p>
                                    <br />
                                    <p><strong>Deployment: </strong>{eachProject.deployment}</p>
                                
                                    <br />
                                    <div className="container-buttons-project">

                                        <button className="btn-projects">
                                            <a href={eachProject.web}><strong>Check it out!</strong></a>
                                        </button> 

                                        <button className="btn-projects-github">
                                            <a href={eachProject.gitHub}><strong>GitHub</strong></a>
                                        </button> 
                                    </div> 
                               
                                </div>
                               
                            </div>
                        </div>                      
                    </div> 
                )
            })}
        </div>
        </>
    )
}

