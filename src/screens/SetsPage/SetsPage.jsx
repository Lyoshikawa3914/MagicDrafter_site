import React from 'react';
import "./SetsPage.css";
import {NavigationBar} from "../../components/NavigationBar/navigationBar.jsx";
import { SearchBar } from '../../components/SearchBar/SearchBar.jsx';
import { SetsContainer } from '../../components/SetsContainer/SetsContainer.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


export const SetsPage = () => {
    return (
    <div className='setsPageBody bg-white fade-in-element absolute left-0 top-0 flex mb-64 gap-16 content-center justify-between align-middle'>
        
        <div className='upperContainer gap-6 flex-col w-full flex content-center justify-center align-middle bg-white'>
            <div className=''>
                <NavigationBar/>
            </div>
            

            <div className='searchBarContainer flex self-center bg-white shadow-sm'>
                <SearchBar/>
            </div>
            
        </div>
        
        <div className='sticky w-full flex justify-center align-middle items-center mb-40 mt-2'>
            <SetsContainer />
        </div>
        
        <div className='absolute left-0 bottom-0 w-full '>
            <Footer/>
        </div>
        
    </div>
    );
};