import React, {useState} from 'react';
import { CloseIcon } from "../CloseIcon/CloseIcon.jsx";
import {SearchBar} from "../SearchBar/SearchBar.jsx";
import { ColorDropdown } from "../Dropdown/ColorDropdown.jsx";
import { RarityDropdown } from "../Dropdown/RarityDropdown.jsx";
import { TypeDropdown } from "../Dropdown/TypeDropDown.jsx";
import { ManaValueDropdown } from '../Dropdown/ManaValueDropdown.jsx';


import "./RatingComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommonsZero } from '@fortawesome/free-brands-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const RatingComponent = ({onClose}) => {
    const [visible, setVisible] = useState(false);
    const [visibleFilterMenu, setVisibleFilterMenu] = useState(false);

    const [visibleColor, setVisibleColor] = useState(false);
    const [visibleCost, setVisibleCost] = useState(false);
    const [visibleType, setVisibleType] = useState(false);
    const [visibleRarity, setVisibleRarity ] = useState(false);

    const [activeFilter, setActiveFilter] = useState('');

    const closeButtonFunction = () => {
        setVisibleFilterMenu(!visibleFilterMenu);
        setVisible(false);
        setVisibleColor(false);
        setVisibleCost(false);
        setVisibleRarity(false);
        setVisibleRarity(false);
        setActiveFilter('')
    }
    const colorFilterFunction = () => {
        setVisibleColor(!visibleColor);
        setActiveFilter('color');
    }
    const costFilterFunction = () => {
        setVisibleCost(!visibleCost);
        setActiveFilter('cost');
    }
    const typeFilterFunction = () => {
        setVisibleType(!visibleType);
        setActiveFilter('type');
    }
    const rarityFilterFunction = () => {
        setVisibleRarity(!visibleRarity);
        setActiveFilter('rarity');
    }


    
    const toggleFilterVisibility = () => {
        // setVisible(!visible);
        setVisible(true);
    }
    const hideDropdown = () => {
        setVisible(false);
        
    } 


    return (
        <div className='ratingComponentBody z-30 mt-1'>
            <div className='ratingUpperContainer bg-white shadow-slate-300'>
                    <div className='flex gap-x-3 pb-1'>
                        <div className='ratingSetname '>Set Name</div>
                        <div className='tierContainer '>#-Tier</div>
                    </div>

                    <div className='dropDownContainer'>
                
                        {/* <div className='dropDownBar'><ColorDropdown/></div>
                        <div className='dropDownBar'><ManaValueDropdown/></div> 
                        <div className='dropDownBar'><RarityDropdown/></div>
                        <div className='dropDownBar'><TypeDropdown/></div> */}

                    </div>
                    

                    <div className='closeIconContainer'>
                        <CloseIcon onClose={onClose}/>
                    </div>
                  
            </div>
            <div className='ratinglowerContainer'>
                <div className={`filterMenuContainer ${visible ? 'expanded': ''}`}>

                    {console.log(visible)}

                    <div>
                        <div
                        className={`ratingBackButtonContainer ${visible ? 'appear' : ''}`}
                        onClick={closeButtonFunction}>
                            <FontAwesomeIcon icon={faCircleXmark} size='2xl'></FontAwesomeIcon>
                        </div>

                        {/* <div className={`filterTitleContainer ${visible ? 'appear': ''}`}>Filter</div> */}
                    </div>
                   
                    <div className='Color'>
                        <div
                            className='filterName drop-shadow-md'
                            onClick={() => {toggleFilterVisibility(); colorFilterFunction();}}
                        >
                            <FontAwesomeIcon icon={faPalette} size='2xl'></FontAwesomeIcon> 
                            <div className={`filterWords ${activeFilter === 'colors' ? 'visible' : ''}`}>
                                <div>Colors</div>

                            </div>
                            
                            <div className='iconArrowContainer' >
                                <FontAwesomeIcon icon={faPlay} size='sm'/>
                            </div>
                            {console.log(activeFilter)}
                            
                        </div>

                        <div className={`dropDownContainer ${visibleColor ? 'visible': ''}`}>
                            <ColorDropdown/>
                        </div> 
                    </div>
                    
                    

                    <div className='Mana'>
                        <div className='filterName drop-shadow-sm'
                            onClick={() =>{toggleFilterVisibility(); costFilterFunction();}}
                        >
                            <FontAwesomeIcon icon={faCreativeCommonsZero} size='2xl'></FontAwesomeIcon>
                            <div className='filterWords'>
                                <div>Mana Value</div>
                                
                                
                            </div>

                            <div className='iconArrowContainer'>
                                    <FontAwesomeIcon icon={faPlay} size='sm'/>
                            </div>
                        </div>
                        <div className={`dropDownContainer ${visibleCost ? 'visible': ''}`}>
                            <ManaValueDropdown/>
                        </div> 
                    </div>
                    

                    <div className='Type'>
                        <div className='filterName drop-shadow-sm'
                            onClick={() => {toggleFilterVisibility(); typeFilterFunction();}}
                        >
                            <FontAwesomeIcon icon={faTableCells} size='2xl'></FontAwesomeIcon> 
                            <div className='filterWords'>
                                <div>Type</div>
                                
                            </div>

                            <div className='iconArrowContainer'>
                                <FontAwesomeIcon icon={faPlay} size='sm'/>
                            </div>
                        </div>
                        <div className={`dropDownContainer ${visibleType ? 'visible': ''}`}>
                            <TypeDropdown/>
                        </div> 
                    </div>
                    

                    <div className='Rarity'>
                        <div className='filterName drop-shadow-sm'
                            onClick={() => {toggleFilterVisibility(); rarityFilterFunction();}}
                        >
                            <FontAwesomeIcon icon={faCrown} size='2xl'></FontAwesomeIcon> 
                            <div className='filterWords'>
                                <div>Rarity</div>
                                
                            </div>
                            <div className='iconArrowContainer'>
                                <FontAwesomeIcon icon={faPlay} size='sm'/>
                            </div>
                        </div>
                        <div className={`dropDownContainer ${visibleRarity ? 'visible': ''}`}>
                            <RarityDropdown/>
                        </div> 
                    </div>
                    


                     { visible ?
                        <div className='ratingButtonContainer'>
                            <div><button>Enter</button></div>
                            <div><button>Clear All</button></div>
                        </div>
                        :
                        ''
                     }
                </div>

                <div className='cardImagesContainer'>

                </div>
            </div>
            

            
        </div>
    )
}