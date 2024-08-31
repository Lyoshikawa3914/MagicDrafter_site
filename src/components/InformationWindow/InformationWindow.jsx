import React from 'react';

export const InformationWindow =() => {
    return (
        <div className='bg-white border rounded'>
            <h1>Ratings</h1>
            <p className='mb-10'>
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