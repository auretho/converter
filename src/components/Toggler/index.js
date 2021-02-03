import React, { useState } from 'react';
import './style.scss';

const Toggler = ({open, setOpen}) => {
    const classToApply = open ? 'toggler-button-open' : 'toggler-button-closed'; 
    const handleClick = () => {
        setOpen(!open);
    }
    
    return(
    <div className="toggler">
        <button className={classToApply} onClick={handleClick}>
            =
        </button>
    </div>
)}

export default Toggler;