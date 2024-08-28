// SetsContainer.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import './SetsContainer.css';

/**
 * This component will display magic the gathering set images.
 * This will be done by using Express middleware that will access data from aws relation db.
 * 
 * the 'error' state will store errors that are encountered when fetching data
 * the 'mtgSets' will store data from the sql table that is access from aws db
 * 
 * the useEffect will fetch the data using Express routes that get the data from aws db, then will store data to mtgSets 
 * 
 * if there is data found in 'mtgSets', the .map function will loop through each row and create 
 * "set-container's" that will display the mtg set symbols that are linked to 'SetPage.jsx'
 * the 'fetchAllCards' function will fetch cards from the aws db using 'setCode', the code that represents the mtg set
 * 
 * @returns 
 */
export const SetsContainer = () => {
    const [error, setError] = useState(null);
    const [mtgSets, setMtgSets] = useState(null);
    const [mtgSetName, setMtgSetName] = useState(null);
    const [mtgCards, setMtgCards] = useState(null);
    const [mtgImages, setMtgImages] = useState(null);
    const [count, setCount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/NameSymbolCode');
                const response_count = await fetch('http://localhost:3001/api/count');

                if (!response.ok || !response_count.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                const data_count = await response_count.json();

                setMtgSets(data);
                setCount(data_count);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

    const fetchAllCards = async (setCode, setname) => {
        try {
            console.log(setname)

            // This will get a list of all cards from the db based on the setCode
            console.log('called fetchallcards')
            console.log(`Getting cards for ${setCode}`)
            const response = await fetch(`http://localhost:3001/api/GetAllCards/${setCode}`);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            // This will get a list of all images from the db based on the setCode
            console.log(`Getting images for ${setCode}`)
            const otherResponse = await fetch(`http://localhost:3001/api/SetImages/${setCode}`);
            
            if (!otherResponse.ok) {
                throw new Error(`Network response was not ok: ${otherResponse.statusText}`);
            }

            const data = await response.json();
            console.log(data);
            setMtgCards(data);

            const otherData = await otherResponse.json();
            console.log(otherData)
            setMtgImages(otherData);

            // This will navigate to SetPage2 with mtgCards and mtgImages as state
            navigate('/set2', {state: {mtgCards: data, mtgSetName: setname} });
            
        } catch (err) {
            console.error("Error fetching all cards:", err);
            setError(err);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='setsBody fade-in-element flex flex-col justify-center align-center w-full'>
            <div className="text-5xl mb-10 font-bold">Discover Magic: the Gathering's rich history</div>

            {mtgSets ? (
                <div className="outerContainer">
                    {mtgSets.map((set, index) => (
                        <div 
                            key={index}
                            className="set-container drop-shadow-md rounded-lg justify-center items-center content-center self-center"
                            id={set.set_code}
                            onClick={() => fetchAllCards(set.set_code, set.name)}
                        >
                            
                                <div className="setIcon  flex flex-col drop-shadow-md pb-7 rounded-lg ">
                                    
                                    <img 
                                        className="image flex self-center "
                                        src={set.iconUrl}
                                        style={{
                                            height: "200px",
                                            // width: "200px",
                                            filter: "invert(80%) sepia(20%) saturate(3000%) hue-rotate(300deg) brightness(100%) contrast(90%)",

                                            
                                            
                                        }}
                                    />
                                    <div className="setCode text-center font-bold  mt-3">{set.name}</div>
                                </div>
                                 
                            
                        </div>
                    ))}
                </div>
            ) : (
                <div className="spinwheel flex absolute justify-center align-middle items-center self-center">
                    <svg className="animate-spin h-20 w-20 text-blue-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.21.895 4.21 2.344 5.656l1.656-1.365z"></path>
                    </svg>
                </div>
            )}
        </div>
    );
};
