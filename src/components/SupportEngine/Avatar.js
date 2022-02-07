import React, {useState} from "react";
import {styles} from "./StylesSupportEngine"

const Avatar = props => {
    const [hovered, setHovered] = useState(false)




    return (
        <div style ={props.style}>
            <div
            className="transition-3"
            style={{
                ...styles.avatarHello,
                ...{opacity:  hovered ? "1":"0"}
            }}>
                Hey it's Aintzane👋
            </div>
            
            
            <div 
            className="transition-3"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={()=> props.onClick && props.onClick()}
            
            style={{
                ...styles.chatWithMeButton,
                ...{ border: hovered ? "1px solid #f9f0ff ":"4px solid #fed330"}
                }}>
                    
            </div>
        </div>
    )
}

export default Avatar;