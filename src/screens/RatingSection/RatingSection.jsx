import {React, useState} from "react";
import Select from 'react-select';
import Multiselect from 'multiselect-react-dropdown';

import "./style.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { RarityDropdown } from "../../components/Dropdown/RarityDropdown";
import { TypeDropdown } from "../../components/Dropdown/TypeDropDown";
import { ColorDropdown } from "../../components/Dropdown/ColorDropdown";
import { FilterMenu } from "../../components/FilterMenu/FilterMenu";

export const RatingSection = ({togglePanel}) => {
  const [isVisible, setVisible] = useState(false);
 
  
  const toggleVisibility = () => {
    setVisible(!isVisible);
  }

  const toggleRatingVisibility = () => {
    
    togglePanel();
  }

 

  return (
    <div className="rating-section">
      <div className="div">
        <div className="filter-nav">
          
          

        </div>
        <div className="rating-nav-section">
          <div className="upperContainer">
            <div className="frame">
              <div className="setName">Set Name:</div>
              <div className="tierRating">Tier</div>
            </div>
            
            <div className={`close `} onClick={toggleRatingVisibility}>
              <div className="text-wrapper-2"></div>
              <div className="text-wrapper-2"></div>
            </div>
          </div>

          <div className="lowerContainer flex space-x-5">
              <SearchBar/>

              <button className={` border border-solid border-slate-500 pt-1 pb-1
                ${isVisible ? 'active': ''}`
              } onClick={toggleVisibility}
              style={{ backgroundColor: isVisible ? 'lightcyan' : 'white'}}>
                Filter
              </button>

              
          </div>

          
          
          
        </div>
        <FilterMenu isOpen={isVisible} toggleVisibility={toggleVisibility}/>
      </div>
    </div>
  );
};
