import {React, useState} from 'react';
import Select from 'react-select';

export const TypeDropdown = () => {
/**Multi Select Dropdown for rarity */
  const TypeOptions = [
    { value: 'Creature', label: 'Creature' },
    { value: 'Enchantment', label: 'Enchantment' },
    { value: 'Artifact', label: 'Artifact' },
    { value: 'Planeswalker', label: 'Planeswalker' },
    { value: 'Land', label: 'Land' },
];

  const [selectType, setSelectType] = useState([])
  const handleChangeType = (selectType) => {
    setSelectType(selectType);
  }
    return (
        <div>
            <Select
                options={TypeOptions} // Options to display in the dropdown
                value={selectType}
                onChange = {handleChangeType}
                isMulti={true}
                placeholder='Type'
            />
        </div>
        
    );
}