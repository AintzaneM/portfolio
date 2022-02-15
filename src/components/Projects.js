import React from "react";
 <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export const myProjects = [

    {
        id: "1a",
        name: "Expenser",
        about:"Track your expenses with this web app.",
        img:"/expenser.jpg",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, Hooks, NodeJS, ReactJS, Hooks, Redux, Firebase",
        type: "Front-End web application",
        deployment: "Netlify",
        web: "https://620bdf87ae52d736ea346fa9--goofy-yonath-1d4331.netlify.app/",
        gitHub: "https://github.com/AintzaneM/expenser-webapp",
    },
    {
        id: "1b",
        name: "Disney+ Web Clone",
        about:"Inspired by Disney+ web application.",
        img:"/images/disney+.png",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, Styled Components, NodeJS, ReactJS, Hooks, Redux, Firebase",
        type: "Full Stack web application",
        deployment: "Firebase",
        web: "https://films-clone.web.app/",
        gitHub: "https://github.com/AintzaneM/films-clone",
    },
    {
        id: "1c",
        name: "Tetris",
        about:"The project based on the traditional game Tetris. Use the ⬆️ up arrow to change the shape of the item, and the ⬇️ down, ➡️ right, and ⬅️ left arrows to move the item.",
        img:"./tetris1.png",
        year: 2021,
        technologies_tools: "React, JavaScript, HTML, CSS, Styled-Components, React Hooks",
        type: "Front End web application",
        deployment: "Netlify",
        web: "https://tetris-game-aintzanem.netlify.app/",
        gitHub: "https://github.com/AintzaneM/tetrisgame",
    },
    {
        id: "1d",
        name: "AboutSkills",
        about:"The project with the aim of 🔎 sharing professional experiences in different areas and 🤝 matching them with people looking for a new job or deciding which studies to choose.",
        img:"./aboutSkills1.png",
        year: 2021,
        technologies_tools: "ReactJS, Express, NodeJS, MongoDB, Moongose, REST API, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "Full Stack web application",
        deployment: "Netlify",
        web: "https://about-skills.netlify.app/",
        gitHub: "https://github.com/AintzaneM/hookup-server",
    },
    {
        id: "1e",
        name: "SurfOn",
        about:"The project addressed to 🏄‍♀️ surf lovers where users can find and learn different surf tricks to 🧐 improve their technique.",
        img:"./surfOn1.png",
        year: 2021,
        technologies_tools: "Express, NodeJS, MongoDB, Moongose, JavaScript, HTML, CSS, Authorization and Authentication",
        type: "Full Stack web application",
        deployment: "Heroku",
        web:"https://surf-on.herokuapp.com/",
        gitHub: "https://github.com/AintzaneM/surf-education"
    },
    {
        id: "1f",
        name: "Who invent what?",
        about:"Inspired by the game known as '3 in a row' or 'noughts and crosses' with the objective of giving visibility to 👩‍🔬 women and their 💡 inventions created throughout history.",
        img:"./tica-tac1.png",
        year: 2021,
        technologies_tools: "JavaScript, HTML, CSS, DOM Manipulation",
        type: "Front End web application",
        deployment: "GitHub",
        web: "https://aintzanem.github.io/Who-invent-what/",
        gitHub: "https://github.com/AintzaneM/Who-invent-what",
    }
    
   
]

export const projects = () => {
    return (
        <>
            {/* <p className="title-proj"><strong>Projects</strong></p> */}
        <p className="title-proj"><strong>Projects <br/><span className="title-proj-items"></span></strong></p>
        
        <div className="container-projects">
           {myProjects.map((eachProject, index) => {
                return (
                    <div className="item-projects" key={eachProject.id}>
                        <div className="card">
                            <img src={eachProject.img}/>
                            <div className="card-body">
                                <div className="card-title"><strong> {eachProject.name}</strong></div>
                                

                                    <br/>
                                <div className="card-text">
                                    <p><strong>{eachProject.type}</strong></p>
                                    <p><strong>About: </strong>{eachProject.about}</p>
                                    <p><strong>Built with: </strong>{eachProject.technologies_tools}</p>
                                    <p><strong>Deployment: </strong>{eachProject.deployment}</p>
                                </div>
                            </div>
                            <div className="container-btns-project">
                                <a href={eachProject.web}>Check out</a>
                                <a href={eachProject.gitHub}>GitHub</a>
                            </div> 
                        </div>                      
                    </div> 
                )
            })}
        </div>
        </>
    )
}

