import React from "react";
import {Link} from "react-router-dom";
import './SideMenu.css';


export const SideMenu = ({isOpen}) => {
    return (
        <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sets">Sets</Link></li>
                <li>Articles</li>
                <li>Draft Simulator</li>
            </ul>
        </div>
    )
}