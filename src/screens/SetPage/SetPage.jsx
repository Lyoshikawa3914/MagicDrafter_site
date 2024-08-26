import {React, useState} from "react";
import { Link } from 'react-router-dom'
import { useWindowWidth } from "../../../public/breakpoints";
import {Hamburger} from "../../components/Hamburger/Hamburger.jsx"
import "./style.css";
import { RatingSection } from "../RatingSection/RatingSection.jsx";



export const SetPage = () => {
  const screenWidth = useWindowWidth();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log('visible');
  }

  console.log('backgroundImage:', screenWidth < 640
    ? "url(/img/mh3-image-1.png)"
    : screenWidth >= 640 && screenWidth < 768
    ? "url(/img/mh3-image-1.png)"
    : screenWidth >= 768 && screenWidth < 1060
    ? "url(/img/mh3-image-1.png)"
    : screenWidth >= 1060 && screenWidth < 1240
    ? "url(/img/mh3-image-1.png)"
    : "url(/img/mh3-image-1.png)");

  return (
    <div className="setpage">
      <div
        className="div"
        style={{
          height:
            (screenWidth >= 640 && screenWidth < 768) || (screenWidth >= 768 && screenWidth < 1060) || screenWidth < 640
              ? "3515px"
              : screenWidth >= 1060 && screenWidth < 1240
              ? "2669px"
              : screenWidth >= 1240
              ? "2492px"
              : undefined,
          width:
            screenWidth < 640
              ? "455px"
              : screenWidth >= 640 && screenWidth < 768
              ? "640px"
              : screenWidth >= 768 && screenWidth < 1060
              ? "768px"
              : screenWidth >= 1060 && screenWidth < 1240
              ? "1060px"
              : screenWidth >= 1240
              ? "1240px"
              : undefined,
        }}
      >
        {((screenWidth >= 640 && screenWidth < 768) || screenWidth < 640) && (
          <div
            className="overlap-group"
            style={{
              left: screenWidth < 640 ? "-122px" : screenWidth >= 640 && screenWidth < 768 ? "-30px" : undefined,
            }}
          >
            <div className="cards-row">
              
              <div className={`slidingPanel ${isVisible ? 'visible' : ''} z-50`}>
                  <RatingSection togglePanel={toggleVisibility}/>
              </div>
              
              <div className="card bg-black" onClick={toggleVisibility}>
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-6.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-12.svg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="card">
                <div
                  className="image-2"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-7.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-13.svg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div
                  className="image-3"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-8.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-14.svg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div
                  className="image-4"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-9.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-15.svg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="image-wrapper" onClick={toggleVisibility}>
                <div
                  className="image-5"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-10.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-16.svg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="image-wrapper" onClick={toggleVisibility}>
                <div
                  className="image-6"
                  style={{
                    backgroundImage:
                      screenWidth < 640
                        ? "url(/img/image-11.svg)"
                        : screenWidth >= 640 && screenWidth < 768
                        ? "url(/img/image-17.svg)"
                        : undefined,
                  }}
                />
              </div>
            </div>
            <div
              className="navigation-footer"
              style={{
                left: screenWidth < 640 ? "122px" : screenWidth >= 640 && screenWidth < 768 ? "30px" : undefined,
                width: screenWidth < 640 ? "455px" : screenWidth >= 640 && screenWidth < 768 ? "640px" : undefined,
              }}
            >
              <div className="text-wrapper">Magic Drafter</div>
              <div className="social-icons">
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="img" alt="Icon" src="/img/icon.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="icon-2" alt="Icon" src="/img/icon-1.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon"> 
                    <img className="icon-3" alt="Icon" src="/img/icon-2-2.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="img" alt="Icon" src="/img/icon-3.svg" />
                  </div>
                </div>
              </div>
              <img
                className="divider"
                style={{
                  width: screenWidth < 640 ? "375px" : screenWidth >= 640 && screenWidth < 768 ? "560px" : undefined,
                }}
                alt="Divider"
                src={
                  screenWidth < 640
                    ? "/img/divider-1.svg"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "/img/divider-2-2.svg"
                    : undefined
                }
              />
            </div>
          </div>
        )}

        {((screenWidth >= 1060 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1060)) && (
          <div
            className="cards-row-2"
            style={{
              alignItems:
                screenWidth >= 768 && screenWidth < 1060
                  ? "center"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "flex-start"
                  : undefined,
              flexDirection: screenWidth >= 768 && screenWidth < 1060 ? "column" : undefined,
              flexWrap: screenWidth >= 1060 && screenWidth < 1240 ? "wrap" : undefined,
              height:
                screenWidth >= 768 && screenWidth < 1060
                  ? "2168px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "1042px"
                  : undefined,
              left:
                screenWidth >= 768 && screenWidth < 1060
                  ? "97px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "117px"
                  : undefined,
              top:
                screenWidth >= 768 && screenWidth < 1060
                  ? "1083px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "1095px"
                  : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1060
                  ? "574px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "832px"
                  : undefined,
            }}
          >
            <div
              className="div-wrapper"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "460px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-7"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-24.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-18.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-28.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-28.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "453px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="card-2"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "465px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-8"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-25.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-19.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-30.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-30.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "461px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="card-3"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "449px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-9"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-26.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-20.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-39.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-39.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "464px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="card-4"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "445px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-10"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-27.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-21.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-39.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-39.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "459px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="card-5"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "457px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-11"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-28.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-22.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-34.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-34.50px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "462px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="card-6"
              onClick={toggleVisibility}
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "449px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "399.67px"
                    : undefined,
              }}
            >
              <div
                className="image-12"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "url(/img/image-29.svg)"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "url(/img/image-23.svg)"
                      : undefined,
                  marginLeft:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-36.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  marginRight:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "-36.00px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "-32.17px"
                      : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 1060
                      ? "457px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "400px"
                      : undefined,
                }}
              />
            </div>
            <div className={`slidingPanel ${isVisible ? 'visible' : ''} z-50`}>
                <RatingSection togglePanel={toggleVisibility}/>
            </div>
          </div>
        )}

        {((screenWidth >= 1060 && screenWidth < 1240) ||
          (screenWidth >= 640 && screenWidth < 768) ||
          (screenWidth >= 768 && screenWidth < 1060) ||
          screenWidth < 640) && (
          <div
            className="navigation"
            style={{
              left:
                (screenWidth >= 1060 && screenWidth < 1240) ||
                (screenWidth >= 640 && screenWidth < 768) ||
                screenWidth < 640
                  ? "0"
                  : screenWidth >= 768 && screenWidth < 1060
                  ? "-1px"
                  : undefined,
              width:
                screenWidth < 640
                  ? "455px"
                  : screenWidth >= 640 && screenWidth < 768
                  ? "640px"
                  : screenWidth >= 768 && screenWidth < 1060
                  ? "768px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "1060px"
                  : undefined,
            }}
          > 
            
            {screenWidth >= 1060 && screenWidth < 1240 && (
              <div className="items">
                <div className="text-wrapper-2">Sets</div>
                <div className="text-wrapper-2">Articles</div>
                <div className="text-wrapper-2">Draft Simulator</div>
              </div>
            )}

            <div
              className="text-wrapper-3"
              style={{
                left:
                  (screenWidth >= 1060 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1060)
                    ? "70px"
                    : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                    ? "36px"
                    : undefined,
              }}
            >
              Magic Drafter
            </div>

            <div className="hamburgerContainer">
              <Hamburger/>
            </div>

          </div>
        )}

        {((screenWidth >= 1060 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1060)) && (
          <div
            className="navigation-footer-2"
            style={{
              left:
                screenWidth >= 768 && screenWidth < 1060
                  ? "-5px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "-13px"
                  : undefined,
              top:
                screenWidth >= 768 && screenWidth < 1060
                  ? "3251px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "2397px"
                  : undefined,
              width:
                screenWidth >= 768 && screenWidth < 1060
                  ? "768px"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "1060px"
                  : undefined,
            }}
          >
            <div className="text-wrapper">Magic Drafter</div>
            <div className="social-icons">
              <div className="buttons-icon">
                <div className="icon">
                  <img
                    className="img"
                    alt="Icon"
                    src={
                      screenWidth >= 768 && screenWidth < 1060
                        ? "/img/icon.svg"
                        : screenWidth >= 1060 && screenWidth < 1240
                        ? "/img/icon-12.svg"
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className="buttons-icon">
                <div className="icon">
                  <img className="icon-2" alt="Icon" src="/img/icon-1.svg" />
                </div>
              </div>
              <div className="buttons-icon">
                <div className="icon">
                  <img className="icon-3" alt="Icon" src="/img/icon-2-2.svg" />
                </div>
              </div>
              <div className="buttons-icon">
                <div className="icon">
                  <img className="img" alt="Icon" src="/img/icon-3.svg" />
                </div>
              </div>
            </div>
            <img
              className="divider-2"
              style={{
                width:
                  screenWidth >= 768 && screenWidth < 1060
                    ? "688px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "980px"
                    : undefined,
              }}
              alt="Divider"
              src={
                screenWidth >= 768 && screenWidth < 1060
                  ? "/img/divider-4.svg"
                  : screenWidth >= 1060 && screenWidth < 1240
                  ? "/img/divider-3-2.svg"
                  : undefined
              }
            />
          </div>
        )}

        {((screenWidth >= 1060 && screenWidth < 1240) ||
          (screenWidth >= 640 && screenWidth < 768) ||
          (screenWidth >= 768 && screenWidth < 1060) ||
          screenWidth < 640) && (
          <>
            <div
              className="header-with-image"
              style={{
                backgroundImage: "url(/img/mh3-image-1.png)",
                  // screenWidth < 640
                  //   ? "url(../../public/img/mh3-image-1.png)"
                  //   : screenWidth >= 640 && screenWidth < 768
                  //   ? "url(../../public/img/mh3-image-1.png)"
                  //   : screenWidth >= 768 && screenWidth < 1060
                  //   ? "url(../../public/img/mh3-image-1.png)"
                  //   : screenWidth >= 1060 && screenWidth < 1240
                  //   ? "url(../../public/img/mh3-image-1.png)"
                  //   : "url(../../public/img/mh3-image-1.png)",
                left:
                  screenWidth < 640
                    ? "25px"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "36px"
                    : screenWidth >= 768 && screenWidth < 1060
                    ? "31px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "59px"
                    : undefined,
                top:
                  (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                    ? "164px"
                    : (screenWidth >= 1060 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1060)
                    ? "199px"
                    : undefined,
                width:
                  screenWidth < 640
                    ? "403px"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "568px"
                    : screenWidth >= 768 && screenWidth < 1060
                    ? "681px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "940px"
                    : undefined,
                    
              }}
              
            >
              <div
                className="copy"
                style={{
                  left:
                    screenWidth >= 640 && screenWidth < 768
                      ? "99px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "119px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "164px"
                      : screenWidth < 640
                      ? "71px"
                      : undefined,
                  position:
                    (screenWidth >= 1060 && screenWidth < 1240) ||
                    (screenWidth >= 640 && screenWidth < 768) ||
                    (screenWidth >= 768 && screenWidth < 1060)
                      ? "relative"
                      : screenWidth < 640
                      ? "absolute"
                      : undefined,
                  top:
                    (screenWidth >= 1060 && screenWidth < 1240) ||
                    (screenWidth >= 640 && screenWidth < 768) ||
                    (screenWidth >= 768 && screenWidth < 1060)
                      ? "192px"
                      : screenWidth < 640
                      ? "298px"
                      : undefined,
                  width:
                    screenWidth >= 640 && screenWidth < 768
                      ? "374px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "449px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "620px"
                      : screenWidth < 640
                      ? "266px"
                      : undefined,
                }}
              >
                {((screenWidth >= 1060 && screenWidth < 1240) ||
                  (screenWidth >= 640 && screenWidth < 768) ||
                  (screenWidth >= 768 && screenWidth < 1060)) && (
                  <>
                    <div className="text-wrapper-4">Modern Horizons 3</div>
                    <p className="p">Click the button below to read the archetypes</p>
                  </>
                )}

                {screenWidth < 640 && <p className="text-wrapper-5">Click the button below to read the archetypes</p>}

                <button className="button">
                  <div className="text-wrapper-6">Archetypes</div>
                </button>
              </div>
              {screenWidth < 640 && <div className="text-wrapper-7">Modern Horizons 3</div>}
            </div>
            <div
              className="header-button"
              style={{
                left:
                  screenWidth < 640
                    ? "0"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "-30px"
                    : screenWidth >= 768 && screenWidth < 1060
                    ? "-12px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "80px"
                    : undefined,
                top:
                  (screenWidth >= 1060 && screenWidth < 1240) ||
                  (screenWidth >= 640 && screenWidth < 768) ||
                  screenWidth < 640
                    ? "796px"
                    : screenWidth >= 768 && screenWidth < 1060
                    ? "855px"
                    : undefined,
                width:
                  screenWidth < 640
                    ? "455px"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "686px"
                    : screenWidth >= 768 && screenWidth < 1060
                    ? "768px"
                    : screenWidth >= 1060 && screenWidth < 1240
                    ? "899px"
                    : undefined,
              }}
            >
              <div
                className="heading"
                style={{
                  left:
                    (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                      ? "50px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "70px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "20px"
                      : undefined,
                  top:
                    (screenWidth >= 1060 && screenWidth < 1240) ||
                    (screenWidth >= 640 && screenWidth < 768) ||
                    screenWidth < 640
                      ? "50px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "54px"
                      : undefined,
                }}
              >
                <div
                  className="text-wrapper-8"
                  style={{
                    fontFamily:
                      screenWidth < 640
                        ? "'Inter', Helvetica"
                        : (screenWidth >= 1060 && screenWidth < 1240) ||
                          (screenWidth >= 640 && screenWidth < 768) ||
                          (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth < 640
                        ? "37px"
                        : (screenWidth >= 1060 && screenWidth < 1240) ||
                          (screenWidth >= 640 && screenWidth < 768) ||
                          (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-font-size)"
                        : undefined,
                    fontStyle:
                      (screenWidth >= 1060 && screenWidth < 1240) ||
                      (screenWidth >= 640 && screenWidth < 768) ||
                      (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth < 640
                        ? "600"
                        : (screenWidth >= 1060 && screenWidth < 1240) ||
                          (screenWidth >= 640 && screenWidth < 768) ||
                          (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-font-weight)"
                        : undefined,
                    letterSpacing:
                      screenWidth < 640
                        ? "0"
                        : (screenWidth >= 1060 && screenWidth < 1240) ||
                          (screenWidth >= 640 && screenWidth < 768) ||
                          (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth < 640
                        ? "40.7px"
                        : (screenWidth >= 1060 && screenWidth < 1240) ||
                          (screenWidth >= 640 && screenWidth < 768) ||
                          (screenWidth >= 768 && screenWidth < 1060)
                        ? "var(--heading-line-height)"
                        : undefined,
                  }}
                >
                  Ratings
                </div>
              </div>
              <div
                className="element-button"
                style={{
                  left:
                    screenWidth < 640
                      ? "310px"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "566px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "620px"
                      : screenWidth >= 1060 && screenWidth < 1240
                      ? "779px"
                      : undefined,
                  top:
                    screenWidth < 640
                      ? "44px"
                      : (screenWidth >= 1060 && screenWidth < 1240) || (screenWidth >= 640 && screenWidth < 768)
                      ? "50px"
                      : screenWidth >= 768 && screenWidth < 1060
                      ? "58px"
                      : undefined,
                }}
              >
                <div className="text-wrapper-9">See All</div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1240 && (
          <>
            <div className="heading-2">
              <div className="text-wrapper-10">Ratings</div>
            </div>
            <div className="navigation-2">
              <div className="items-2">
                <div className="text-wrapper-2"><Link to={"/sets"}>Sets</Link></div>
                <div className="text-wrapper-2">Articles</div>
                <div className="text-wrapper-2">Draft Simulator</div>
              </div>
              <div className="text-wrapper-11">Magic Drafter</div>
            </div>
            <div className="navigation-footer-3">
              <div className="text-wrapper">Magic Drafter</div>
              <div className="social-icons">
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="img" alt="Icon" src="/img/icon-2.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="icon-2" alt="Icon" src="/img/icon-1.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="icon-3" alt="Icon" src="/img/icon-2-2.svg" />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img className="img" alt="Icon" src="/img/icon-3.svg" />
                  </div>
                </div>
              </div>
              <img className="divider-3" alt="Divider" src="../../public/img/mh3-image-1.png" />
            </div>
            <div className="copy-wrapper">
              <div className="copy-2">
                <div className="text-wrapper-4">Modern Horizons 3</div>
                <p className="p">Click the button below to read the archetypes</p>
                <button className="button">
                  <div className="text-wrapper-6">Archetypes</div>
                </button>
              </div>
            </div>
            <div className="element-button-2">
              <div className="text-wrapper-9">See All</div>
            </div>
            <div className="cards-row-3">
              <div className="card" onClick={toggleVisibility}>
                <div className="image-13" />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div className="image-14" />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div className="image-15" />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div className="image-16" />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div className="image-17" />
              </div>
              <div className="card" onClick={toggleVisibility}>
                <div className="image-18" />
              </div>
              
              <div className={`slidingPanel ${isVisible ? 'visible' : ''}`}>
                <RatingSection togglePanel={toggleVisibility}/>
              </div>
            </div>
          </>
        )}

        
      </div>
    </div>
  );
};
