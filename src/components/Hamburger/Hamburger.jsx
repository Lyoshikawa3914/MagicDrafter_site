import React, {useState} from 'react';
import "./Hamburger.css";
import { SideMenu } from '../SideMenu/SideMenu';

/**
 * This will display a hamburger menu that display the side menu when clicked.
 * the hamburger menu will appear and disappear based on the size of the screen.
 * @returns 
 */
export const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleHambuger = () => {
        setIsOpen(!isOpen);
        
    }
    return (
        <div>
            <div className={`hamburger ${isOpen ? 'active' : ''}`}  onClick={toggleHambuger}>
                <div className='burger'></div>
                <div className='burger'></div>
                <div className='burger'></div>
                
                
            </div>

            <SideMenu isOpen={isOpen} />
            
        </div>
    )
}