import React from 'react';
import { CloseIcon } from "../CloseIcon/CloseIcon.jsx";
import {SearchBar} from "../SearchBar/SearchBar.jsx";
import { ColorDropdown } from "../Dropdown/ColorDropdown.jsx";
import { RarityDropdown } from "../Dropdown/RarityDropdown.jsx";
import { TypeDropdown } from "../Dropdown/TypeDropDown.jsx";
import { ManaValueDropdown } from '../Dropdown/ManaValueDropdown.jsx';

import "./RatingComponent.css";


export const RatingComponent = ({onClose}) => {
    return (
        <div className='ratingComponentBody z-30'>
            <div className='ratingUpperContainer'>
                <div className='ratingTitleContainer'>
                    <div className='flex'>
                        <div className='ratingSetname'>Set Name</div>
                        <div className='tierContainer'>#-Tier</div>
                    </div>
                    

                    <div className='closeIconContainer'>
                        <CloseIcon onClose={onClose}/>
                    </div>
                </div>

                <div className='searchBarContainer'>
                    <SearchBar/>
                </div>
            </div>

            <div className='dropDownContainer'>
                
                <div className='dropDownBar'><ColorDropdown/></div>
                <div className='dropDownBar'><ManaValueDropdown/></div> 
                <div className='dropDownBar'><RarityDropdown/></div>
                <div className='dropDownBar'><TypeDropdown/></div>
            </div>

            <div className='ratingContentContainer'>
                <div className='plusContainer'></div>
                <div className='regularContainer'></div>
                <div className='minusContainer'></div>
            </div>
        </div>
    )
}