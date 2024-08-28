import React from 'react';
import { NavigationBar } from '../../components/NavigationBar/navigationBar';
import { Footer } from '../../components/Footer/Footer';
import "./LandingPage2.css"

export const LandingPage2 = () => {
    return (
        <div className='landingPageMain fade-in-element flex flex-col absolute top-0 left-0 w-full h-full '>
            <div className='navContainer bg-white text-black flex sticky z-10 top-0 gap-6 flex-col w-full content-center justify-center align-middle pb-3'>
                <NavigationBar/>
            </div>

            <div className='landingPageContainer'>
                <div className='headerContainer '>
                    <div className='header '>Master Your Draft</div>
                    <div className='subheaderContainer'>
                        <div className='subheader upperSub flex '>Ready to take your game to the next level?</div>
                        <div className='subheader lowerSub flex '>Review the newest set here</div>
                    </div>
                    
                    <div className='buttonsContainer'>
                        <button className='button'>Explore Here</button>
                        <button className='button'>Learn To Draft</button>
                    </div>
                </div>

                <div className='landingImageContainer'>
                    <div className='landingImage'></div>
                </div>

            </div>

            <div className='bg-white'>
                <Footer/>
            </div>
        </div>
    )
};