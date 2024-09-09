import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import { LandingPage } from './screens/LandingPage/LandingPage.jsx'
import { LandingPage2 } from './screens/LandingPage/LandingPage2.jsx';
import { SetPage } from './screens/SetPage/SetPage.jsx';
import { SetPage2 } from './screens/SetPage/SetPage2.jsx';
import {SetsPage} from './screens/SetsPage/SetsPage.jsx';
import { ArticlePage } from './screens/ArticlePage/ArticlePage.jsx';
import { ArticlesPage } from './screens/ArticlesPage/ArticlesPage.jsx';


//import {SetPageRating} from './screens/SetPageRating/SetPageRating.jsx'

import { TestScreen } from './TestScreen.jsx'
import { SetSymbol } from './SetSymbol.jsx'
import './index.css'
import './styleguide.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      {/* <Route path="/practice" element ={<practiceApp/>}/> */}

        <Route path="/landing" element ={<LandingPage/>}/>

        <Route path="/" element={<LandingPage2/>}/>

        <Route path="/articles" element ={<ArticlesPage/>}/>
        <Route path="/article" element ={<ArticlePage/>}/>

        <Route path="/set2" element ={<SetPage2/>}/>
        <Route path="/set" element ={<SetPage/>}/>
        
        {/* <Route path="/rating" element ={<SetPageRating/>}/> */}
        <Route path="/sets" element ={<SetsPage/>}/>
        <Route path="/test" element ={<TestScreen/>}/>

        <Route path="/symbol" element ={<SetSymbol/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
  
)
