
import { React, useState } from 'react';
import './CloseIcon.css';

export const CloseIcon = ({ onClose }) => {
    
    

    return (
        <div className='CloseContainer' onClick={onClose}>
            
            <div className='Line'></div>
            
            <div className='Line'></div>
        </div>
    )
}