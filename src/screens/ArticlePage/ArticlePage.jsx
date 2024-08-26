import {React} from 'react';

import { NavigationBar } from '../../components/NavigationBar/navigationBar';
import './ArticlePage.css';

export const ArticlePage = () => {
    return (
        <div className='articlePageContainer'>
            <NavigationBar/>

            <div className='upperContainer'>
                <div className='articleTitle text-4xl flex'>
                        Lorem Ipsum
                </div>

                <div className='articleAuthorContainer '>
                    <div className='authorName flex '>
                        John Smith
                    </div>

                    <div className='dateTimeContainer flex'>
                        November 5th, 2024
                    </div>
                </div>
            </div>
            

            <div className='imageContainer'>

            </div>

            
        </div>
    )
}