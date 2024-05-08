import React, {useState} from 'react';
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const DeliveryRow = ({item}) => {
    const [status,setStatus]=useState(false)
    return (
        <>
            <div className='delivery__question' style={status?{borderRadius:'10px 10px 0 0'}:{borderRadius:'10px'}} onClick={() => setStatus(prev => !prev)}>
                <p>{item.title}</p>
                {status ? <FiChevronUp/> : <FiChevronDown/>}
            </div>
            <div className='delivery__answer'
                 style={status ? {display: 'flex'} : {display: 'none'}}>
                <p>{item.answer}</p>
            </div>
        </>
    );
};

export default DeliveryRow;