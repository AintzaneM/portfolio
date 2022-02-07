import React , {useState, useRef, useEffect} from "react";
import Avatar from "./Avatar"
import SupportWindow from "./SupportWindow/SupportWindow";

const SupportEngine = () => {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target)){
                console.log(ref.current)
                console.log(event.target)
                setVisible(false)

            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [ref])

    return (

        <div className="support-container"ref={ref}>
            <SupportWindow 
                visible = {visible}
            />
            
            <Avatar
                onClick = {() => setVisible(true)}
                style={{position:"fixed", bottom: "24px", right: "24px"}}
                
            />
        </div>
        
        
    )
}

export default SupportEngine;

