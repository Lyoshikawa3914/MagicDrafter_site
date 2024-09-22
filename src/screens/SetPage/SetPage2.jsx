import react, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavigationBar } from '../../components/NavigationBar/navigationBar.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import './SetPage2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { InformationWindow } from '../../components/InformationWindow/InformationWindow.jsx';
import { RatingComponent } from '../../components/RatingComponent/RatingComponent.jsx';
import { CallGetAllCardsFromSet } from '../../ScryfallApi/CallGetAllCardsFromSet.js';

/**
 * This page contains contains the card ratings of cards that will be accessed from aws relational db. 
 * Each card will be categorized by their rating ranging from 'S, A, B, C, D, and F', 'S' being the best and 'F' being the worst
 * 
 * This page will use Express middleware to get data from db.
 * 
 * 'visible' prop/useState will allow popup windows to be visible or invisible after clicking buttons.
 * The 'handleButtonClick' function will control the visiblity functionality by 
 * @returns 
 */
export const SetPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mtgCards = [], mtgSetName, mtgCode } = location.state || {};
  
  const [rate, setRate] = useState(null);
  const [aRate, setARate] = useState(null);
  const [bRate, setBRate] = useState(null);
  const [cPlusRate, setCPlusRate] = useState(null);
  const [cRate, setCRate] = useState(null);
  const [dRate, setDRate] = useState(null);
  const [fRate, setFRate] = useState(null);

  const [loading, setLoading] = useState(true);
  const [Pic7, setPic7] = useState(null);
  const [Pic1, setPic1] = useState(null);
  const [Pic2, setPic2] = useState(null);
  const [Pic3, setPic3] = useState(null);
  const [Pic4, setPic4] = useState(null);
  const [Pic5, setPic5] = useState(null);
  const [Pic6, setPic6] = useState(null);

  const [visible, setVisible] = useState({
    ratingsAllPopUp: false,
    infoPopUp: false,
    ratingsPopUp: false,
  });

  
  useEffect(() => {
    if (!mtgSetName) {
      // If mtgSetName is not available, go back to the previous page
      navigate(-1);
    } else {
      setLoading(false);
    }
  }, [mtgSetName, navigate]);

  useEffect(() =>{
    if (mtgCode) {
      const fetchImage = async () => {
        try {
          const basePath = `../../img/${mtgCode}_images`;
          const possibleExtenstions = ['jpg','jpeg', 'png', 'webp'];
          const imageStates = [
            setPic1, setPic2, setPic3, 
            setPic4, setPic5, setPic6, 
            setPic7
          ];

          for (let i = 0; i < imageStates.length; i++) {
            for (const ext of possibleExtenstions) {
              let imageSet = false;
              const url = `${basePath}/${mtgCode}_${i + 1}.${ext}`;
              console.log(url)
              const response = await fetch(url);

              if (response.ok) {
                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                imageStates[i](objectUrl);
                console.log(imageStates[i](objectUrl))
                imageSet = true;
                break;
              }
            }
          }


        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImage();
    }
    
  }, [mtgCode]);

  useState(() => {
    const fetchData = async () => {
      try {
        const fetchRating = async (mtgCode, rating) => {
          const response = await fetch(`http://localhost:3001/api/GetAllCardsByRating/${mtgCode}/${rating}`);
          
          if (!response.ok) {
            // Handle non-200 responses (e.g., 404, 500)
            const errorMessage = await response.json();
            console.error(`Error fetching cards: ${errorMessage.message}`);
            return null;  // or handle the error as needed
        }
        
          const result = await response.json();
          return result;
        };
        // console.log("mtgCards");
        // console.log(mtgCards);
  
        // const scryfallCards = await CallGetAllCardsFromSet(mtgCode);
        //console.log("scryfall cards: ");
  
        // relevant keys: 
        // 'name', 'image_uris.small', 'image_uris.normal', 'image_uris.large',
        // 'image_uris.art_crop', 'colors', 'rarity', 'cmc', 'artist', 'type_line'

        // scryfallCards.map((card, index) => (
        //   console.log(card.artist)
        // ));

        // Fetch the cards by rating
        const aCards = await fetchRating(mtgCode, 'A');
        
        const bCards = await fetchRating(mtgCode, 'B');
        const cPlusCards = await fetchRating(mtgCode, 'C+');
        const cCards = await fetchRating(mtgCode, 'C');
        const dCards = await fetchRating(mtgCode, 'D');
        const fCards = await fetchRating(mtgCode, 'F');

        // Set the state after fetching the data
        setARate(aCards);
        
        setBRate(bCards);
        setCRate(cCards);
        setCRate(cPlusCards);
        setDRate(dCards);
        setFRate(fCards);

        // Log the results after they are set
        console.log('B cards: ', bCards);
        console.log('A cards: ', aCards);
        
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
fetchData();
    
  }, [mtgCode]);

  const handleButtonClick = (popName) => {
    setVisible((prev) => {
      const newVisibility = !prev.infoPopUp;
      if (newVisibility) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return {
        ...prev,
        infoPopUp: newVisibility,
      };
    });
  };

  const handleRatingButtonClick = (popName) => {
    setVisible((prev) => {
      const newVisibility = !prev.ratingsPopUp;
      if (newVisibility) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return {
        ...prev,
        ratingsPopUp: newVisibility,
      };
    });
  };

  const handleLetterGradeArray = (letter) => {
    if (letter === 'A') {
      return setRate(aRate);
    } 
    else if (letter === 'B') {
      return setRate(bRate);
    } 
    else if (letter === 'C+') {
      return setRate(cPlusRate);
    } 
    else if (letter === 'C') {
      return setRate(cRate);
    }
    else if (letter === 'D') {
      return setRate(dRate);
    }
    else if (letter === 'F') {
      return setRate(fRate);
    }
    return [];
  };
  
  if (loading) {
    return (
      <div className="spinwheel flex absolute justify-center align-middle items-center self-center">
        <svg className="animate-spin h-20 w-20 text-blue-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.21.895 4.21 2.344 5.656l1.656-1.365z"></path>
        </svg>
      </div>
    )
    }

     
    return (
      <div className={`setPageBody ${visible.infoPopUp ? 'modalActive' : ''} `}
     >
          <div className='upperContainer gap-6 flex-col w-full flex content-center justify-center align-middle bg-white'>
              <NavigationBar/>
          </div>

          <div className='flex flex-col border border-solid-black rounded-3xl justify-around align-middle items-center 
          xs:ml-3 xs:mr-3 
          sm:ml-7 sm:mr-7 
          md:ml-10 md:mr-10 
          lg:ml-20 lg:mr-20
          xl:ml-48 xl:mr-48
          '
          style={{ backgroundImage: `url(${Pic6 })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '740px',
         }}
          >
              
              <div className='mtgSetNameTitle text-5xl font-medium' >
                {console.log(mtgSetName)}
                {mtgSetName ? (`${mtgSetName}`) : ('')}
              </div>
                
              <div className='flex border border-solid-black h-12 w-5 justify-center align-middle items-center'>
                  <button className='setButton bg-black text-white text-xl'> Archetypes</button>
              </div>
          </div>

          <div className='ratingsContainer gap-y-5 mb-64'>
              <div className='flex justify-around align-middle xl:gap-x-44'>
                  <div className='flex self-center text-3xl font-medium xl:mr-28'>
                    Ratings
                    
                    <div className='infoIcon flex pt-2 self-center ml-3' onClick={() => handleButtonClick('infoPopUp')}>
                      <FontAwesomeIcon
                        icon={faCircleInfo} 
                        size='xs' 
                        style={{color:"86D2F9"}}>

                      </FontAwesomeIcon>
                    </div>
                  </div>

                  
                  {visible.infoPopUp && 
                  <div className='infoContainer absolute z-10 '>
                    <InformationWindow onClose={() => handleButtonClick('infoPopUp')}/>
                  </div>
                  
                  }
                  
                  
                  <div>
                      <button className='setButton text-xl bg-black text-white'
                      onClick={() => { handleRatingButtonClick('ratingsPopUp'); }}>See All</button>
                  </div>
              </div>

              <div className='grid justify-center align-middle items-center lg:grid-cols-2 xl:grid-cols-3  gap-16 ml-40 mr-40 mt-10'
              >

                  {visible.ratingsPopUp && 
                  <div className='ratingComponentContainer'>
                    <RatingComponent onClose={() => {handleRatingButtonClick('ratingsPopUp')} } word = {rate} />
                  </div>}
                  
                  <div className='ratingContainer sContainer drop-shadow-xl flex rounded-lg bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic1})`,}}
                  onClick={() => { handleRatingButtonClick('ratingsPopUp'); handleLetterGradeArray('A')}}>
                    <div className=''></div>
                  </div>

                  

                  <div className='ratingContainer aContainer drop-shadow-xl flex rounded-lg bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic2})`,}}
                  onClick={() => {handleRatingButtonClick('ratingsPopUp'); handleLetterGradeArray('B')}} >
                    <div className=''></div>
                  </div>

                  <div className='ratingContainer bContainer flex rounded-lg drop-shadow-xl bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic3})`,}}
                  onClick={() => handleRatingButtonClick('ratingsPopUp')}>
                    <div className=''></div>
                  </div>

                  <div className='ratingContainer cContainer flex rounded-lg drop-shadow-xl bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic4})`,}}
                  onClick={() => handleRatingButtonClick('ratingsPopUp')}>
                    <div className=''></div>
                  </div>

                  <div className='ratingContainer dContainer flex rounded-lg drop-shadow-xl bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic5})`,}}
                  onClick={() => handleRatingButtonClick('ratingsPopUp')}>
                    <div className=''></div>
                  </div>

                  <div className='ratingContainer fContainer flex rounded-lg drop-shadow-xl bg-white justify-self-center align-center items-center h-96 w-96'
                  style={{backgroundImage:`url(${Pic6})`,}}
                  onClick={() => handleRatingButtonClick('ratingsPopUp')}>
                    <div className=''></div>
                  </div>
                    
                </div>
                
            </div>
            
            

            
            <Footer/>
            
        </div>
    )
}