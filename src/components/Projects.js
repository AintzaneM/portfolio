import React from "react";
import {Link} from "react-router-dom";
export const myProjects = [
    {
        id: "1a",
        name: "Who invent what?",
        about:"",
        img:"",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, DOM Manipulation",
        type: "Game project",
        deployment: "GitHub",
        web: "https://aintzanem.github.io/Who-invent-what/"
    },
    {
        id: "1b",
        name: "Tetris",
        about:"",
        img:"",
        year: 2021,
        technologies_tools: "React, JavaScript, HTML, CSS, Styled-Components, React Hooks",
        type: "Computer project",
        deployment: "Netlify",
        web: "https://tetris-game-aintzanem.netlify.app/"
    },
    {
        id: "1c",
        name: "AboutSkills",
        about:"",
        img:"",
        year: 2021,
        technologies_tools: "React, Express, Moongose, REST API, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "MERN Stack application",
        deployment: "Netlify",
        web: "https://about-skills.netlify.app/"
    },
    {
        id: "1d",
        name: "SurfOn",
        about:"",
        img:"",
        year: 2021,
        technologies_tools: "Express, Moongose, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "Full Stack application",
        deployment: "Heroku",
        web:"https://surf-on.herokuapp.com/",
    }
    
   
]

export const projects = () => {
    return (
        <div className="container-projects">
            <p>My Projects:</p>
            {myProjects.map((eachProject, index) => {
                return (
                    <div className="item-projects" key={eachProject.id}>
                        <p>
                        {/* {console.log(eachProject.id)} */}
                            <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
                        </p>
                        {/* <img>{eachProject.img}</img> */}
                        <p><strong>About: </strong> <br/>{eachProject.about}</p>
                        <p><strong>Built with: </strong> <br/>{eachProject.technologies_tools}</p>
                        <p><strong>Deployment: </strong> <br/>{eachProject.deployment}</p>
                        <button>
                            <a href={eachProject.web}>Play!</a>
                        </button>

                    </div> 
                )
            })}
        </div>
    )
}

