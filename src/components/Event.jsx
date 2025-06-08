import React from "react";
const Event = (props) => {
    const handleClick = () => {
        alert(`Viewing menu for ${props.eventName}`);
        // You can add more logic here, like opening a modal or navigating
    }
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