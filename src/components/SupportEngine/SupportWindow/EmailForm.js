import React, {useState} from "react";
import {styles} from "../StylesSupportEngine"

import {LoadingOutlined} from  "@ant-design/icons"
import Avatar from "../Avatar";
import axios from "axios";


const EmailForm = props => {
    const [email, setEmail] = useState("")
    const [loading, setloading] = useState(false)

    function getOrCreateUser(callback) {
        axios.put(
            "https://api.chatengine.io/users/",
            {
                "username": email,
                "secret": email,
                "email" : email,
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}

        )
        .then(r => callback(r.data))
        .catch(e=> console.log("Get or create user error", e))


    }

    function getOrCreateChat (callback) {
        axios.put(
            "https://api.chatengine.io/chats/",
            {
                "usernames": ["Aintzane", email],
                "is_direct_chat": true
            },
            {headers: {
                "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                "User-Name": email,
                "User-Secret": email}}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create chat error', e))

    }

   function handleSubmit (event) {
       event.preventDefault();
       setloading(true)
       console.log("sending email", email)

       getOrCreateUser(
           user => {
               props.setUser(user)
               getOrCreateChat(
                   chat => props.setChat(chat)
               )
           }
           
       )
   }

    return (
        <div className="emailFormWindow"
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? "100%" : "0%",
                    opacity: props.visible ? "1" : "0",
                }
            }}
        >
            <div style={{ height: "0px" }}>
                <div style={styles.stripe}></div>

            </div>
            <div
                className="transition-5"
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? "10" : "-1",
                        opacity: loading ? "0.33" : "0",
                    }
                }}
            />
                <LoadingOutlined
                    className="transition-5"
                    style={{
                        ...styles.loadingIcon,
                        ...{
                            zIndex: loading ? "10" : "-1",
                            opacity: loading ? "0.33" : "0",
                            fontSize: "82px",
                            top: "calc(50% - 41px)",
                            left: "calc(50% - 41px)",

                        }

                    }}
                />
                <div style={{ position: "absolute", height: "100%", width: "100%", textAlign: "center"}}>
                    <Avatar
                        style = {{
                            position: "relative",
                            left:"calc(50% - 44px)",
                            top: "10%",
                        }}
                    />
                    <div style= {styles.topText}>
                        Welcome to my <br/> support page
                    </div>

                    <form
                        onSubmit={e => handleSubmit(e)}
                        style={{position: "relative", width: "100%", top: "20%"}}
                    >
                        <input
                        style={styles.emailInput}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email"
                        />
                    </form>

                    <div style={styles.bottomText}>
                        Let's talk! <br/> Enter your email <br/> to get started
                    </div>

                </div>
        </div>
    )
}

export default EmailForm