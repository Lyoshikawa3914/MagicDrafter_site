import React, {useState} from "react";
import "./SearchBar.css";

export const SearchBar = () => {
    const [searchItem, setSearchItem] = useState('');

    const handleInputChange = (event) => {
        setSearchItem(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(searchItem);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='flex justify-center items-center w-full'>
                <input className="search border-solid border-2 border-slate-400 rounded-l-lg"
                    type='text'
                    placeholder=".."
                    value={searchItem}
                    onChange={handleInputChange}
                >
                </input>
                <div className="flex">
                    <button type="submit" title="Search" className="searchButton flex justify-center items-center">
                        Search 
                    </button>
                </div>
            </form>
            
            
        </div>
    )
}