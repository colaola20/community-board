import React from "react";
import { useNavigate } from "react-router-dom";
import '/Users/olha/community-board/src/components/event.css'

const Event = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/menu/${encodeURIComponent(props.eventName)}`);
    };
    return (
        <div className='event'>
            <img className='eventImg' src={props.imgURL} alt="Remote" />
            <h2>{props.eventName}</h2>
            <h3>{props.eventDetails}</h3>
            <div>
                <button className="button" onClick={handleClick}>View Menu</button>
            </div>
        </div>
    )
}

export default Event;