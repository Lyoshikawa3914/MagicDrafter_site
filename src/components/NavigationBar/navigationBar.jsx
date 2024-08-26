import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger.jsx';
import {Link} from 'react-router-dom';
import "./style.css";

/**
 * This component creates a navigation bar that helps people navigate to different pages of the website
 * @returns 
 */
export const NavigationBar = () => {
    return (
        
        <div className='mainBody'>
            <div className="main flex justify-between content-center">
                <div className='title flex self-center'>
                    <Link to="/" style={{ color:'inherit', textDecoration:'none'}}>Magic Drafter</Link>
                </div>

                <Hamburger className=""/>

                <div className='listContainer  justify-center self-center'>
                        <ul className='list  justify-center self-center align-middle'>
                            <li><Link to="/sets" style={{ color:'inherit', textDecoration:'none'}}>Sets</Link></li>
                            <li><Link to='/articles' style={{ color:'inherit', textDecoration:'none'}}>Articles</Link></li>
                            <li>Draft Simulator</li>

                        </ul>
                </div>
            </div>

        </div>
        
    );
};