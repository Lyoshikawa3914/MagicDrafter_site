import {React, useState} from 'react';
import Select from 'react-select';

export const ColorDropdown = () => {
/**Multi Select Dropdown for rarity */
  const ColorOptions = [
    { value: 'Red', label: 'Red' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
    { value: 'White', label: 'White' },
    { value: 'Black', label: 'Black' },
];

  const [selectColor, setSelectColor] = useState([])
  const handleChangeColor = (selectColor) => {
    setSelectColor(selectColor);
  }
    return (
        <div>
            <Select
                options={ColorOptions} // Options to display in the dropdown
                value={selectColor}
                onChange = {handleChangeColor}
                isMulti={true}
                placeholder='Color'
            />
        </div>
        
    );
}