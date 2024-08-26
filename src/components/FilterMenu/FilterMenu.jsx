import {React, useState} from 'react';
import "./FilterMenu.css"

import { TypeDropdown} from '../Dropdown/TypeDropDown';
import { ColorDropdown } from '../Dropdown/ColorDropdown';
import { RarityDropdown } from '../Dropdown/RarityDropdown';

export const FilterMenu = ({isOpen, toggleVisibility}) => {
    
    

    return (
        <div className={`body ${isOpen ? 'active' : ''}`}>
            <div className={`close`} onClick={toggleVisibility}>
                <div className='closeLine'></div>
                <div className='closeLine'></div>
            </div>
            <div className='mainContainer'>
                <div className='filterContainer'>
                    <ul className=''>
                        <li className='pl-5 pr-5 pb-3'><RarityDropdown/></li>
                        <li className='pl-5 pr-5 pb-3'><ColorDropdown/></li>
                        <li className='pl-5 pr-5 pb-3'><TypeDropdown/></li>
                        <li></li>
                    </ul>

                </div>

                <div className='buttonContainer flex space-x-9'>
                    <div>
                        <button className='w-15'>
                            Submit
                        </button>
                    </div>
                    <div>
                        <button className='w-15 pl-7 pr-7'>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}