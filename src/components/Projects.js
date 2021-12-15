import React from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
export const myProjects = [
    {
        id: "1a",
        name: "Who invent what?",
        about:"",
        img:"./tic-tac1.png",
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
        img:"./tetris1.png",
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
        img:"./aboutSkills1.png",
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
        img:"./surfOn1.png",
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
                        
                        <Card className="" style={{ width: '30rem' }}>
                            <Card.Img className="card-body-img" variant="top" src={eachProject.img}/>
                            <Card.Body className="card-body">
                                <Card.Title><Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link></Card.Title>
                                <Card.Text>
                                    <p><strong>About: </strong> <br />{eachProject.about}</p>
                                    <p><strong>Built with: </strong> <br />{eachProject.technologies_tools}</p>
                                    <p><strong>Deployment: </strong> <br />{eachProject.deployment}</p>
                                </Card.Text>
                                <button className="btn-projects">
                                <a href={eachProject.web}>Check it out!</a>
                                </button> 
                            </Card.Body>
                        </Card>
                        
                        
                            {/* <p>
                            {console.log(eachProject.id)}
                                <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
                            </p> */}
                            
                            
                        
                           
                        

                    </div> 
                )
            })}
        </div>
    )
}

