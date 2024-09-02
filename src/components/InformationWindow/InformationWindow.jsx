import React from 'react';
import { CloseIcon } from '../CloseIcon/CloseIcon';
import "./InformationWindow.css"

/**
* Information window that dissplays how to determine the rating of a card.
* @param {Object} props - The component props.
* @param {Function} props.onClose - Function to close the window.
* @returns {JSX.Element} The rendered component.
*/
export const InformationWindow =({ onClose }) => {
    

    return (
        <div className='infoContainer bg-white border rounded p-5 z-20'>
            <div className='closeIconButton '>
                <CloseIcon onClose={onClose}/>
            </div>
            
            <div className='ratingHeader text-4xl mb-3'>Ratings</div>
            <p className='ratingPara mb-10'>
                These ratings serve as guidelines that will help players decide on what cards to take during the draft.
                All cards are rated in a vacuum. 
            </p>
            <ul className='ratingList'>
                <li>S: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur porro et amet dolorem, </li>
                <li>A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur porro et amet dolorem, </li>
                <li>B: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur porro et amet dolorem, </li>
                <li>C: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur porro et amet dolorem, </li>
                <li>D: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur porro et amet dolorem, </li>
                <li>F: These are unplayable cards. Don't waste your picks.</li>
            </ul>
        </div>
    )
}