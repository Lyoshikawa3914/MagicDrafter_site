
import { React, useState } from 'react';
import './CloseIcon.css';

/**
 * This is a component that, once clicked will close the 'InformationWindow' component
 * @param {Function} - the function  to close the 'InformationWindow'
 * @returns 
 */
export const CloseIcon = ({ onClose }) => {
    
    return (
        <button className='CloseContainer' onClick={onClose}>
            
            <div className='Line'></div>
            
            <div className='Line'></div>
        </button>
    )
}