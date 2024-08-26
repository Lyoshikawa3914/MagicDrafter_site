import React from 'react';
import { NavigationBar } from '../../components/NavigationBar/navigationBar';
import { ArticlePage } from '../ArticlePage/ArticlePage';


export const ArticlesPage = () => {
    return (
        <div>
            <NavigationBar/>
            
            <div>
                This is the articles page
            </div>


            <ArticlePage/>
        </div>
    )
}