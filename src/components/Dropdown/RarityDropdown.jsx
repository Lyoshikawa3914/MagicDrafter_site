import {React, useState} from 'react';
import Select from 'react-select';

export const RarityDropdown = () => {
/**Multi Select Dropdown for rarity */
  const rarityOptions = [
    { value: 'mythic', label: 'Mythic' },
    { value: 'rare', label: 'Rare' },
    { value: 'uncommon', label: 'Uncommon' },
    { value: 'common', label: 'Common' },
];

  const [selectRarity, setSelectRarity] = useState([])
  const handleChangeRarity = (selectRarity) => {
    setSelectRarity(selectRarity);
  }
    return (
        <div>
            <Select
                options={rarityOptions} // Options to display in the dropdown
                value={selectRarity}
                onChange = {handleChangeRarity}
                isMulti={true}
                placeholder='Rarity'
            />
        </div>
        
    );
}
