import react from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


/**
 * This component renders and displays the footer, containing links to social media accounts and copyright information
 * @returns 
 */
export const Footer = () => {
    return (
        <div className='footerBody flex flex-col justify-between absolute bottom-0 left-0 w-full'>
            <div className='footerTitle flex mt-4 text-xl mb-5'>Magic Drafter</div>
            
            <div className='lowerFooterContainer flex '>
                <div className='mediaPlatforms flex pb-4 items-center'>
                    <li className='flex gap-x-5 '>
                        <ul><FontAwesomeIcon icon={faInstagram} size="lg" style={{color:"#ff0000",}}/></ul>
                        <ul><FontAwesomeIcon icon={faPatreon} size="lg"  style={{color:"#ff0000",}}/></ul>
                        <ul><FontAwesomeIcon icon={faTwitch} size="lg" style={{color:"#d400ff",}}/></ul>
                        <ul><FontAwesomeIcon icon={faYoutube} size="lg"  style={{color:"#ff0000",}}/></ul>
                    </li>
                </div>

                

                <div className='copyrightText text-justify lg:ml-4 lg:mr-4 lg:border-l '>
                    <div className='lg:ml-4'>
                        This is a fan made website. Magic Drafter is unofficial Fan Content permited under the 
                        <a href="https://company.wizards.com/en/legal/fancontentpolicy"> Fan Content Policy</a>. Not approved/endorsed by Wizards. Images used are proeprty of Wizards of the Coast. 
                        Wizards of the Coast LLC.

                    </div>
                </div>
            </div>
            

            
        </div>
    )
}