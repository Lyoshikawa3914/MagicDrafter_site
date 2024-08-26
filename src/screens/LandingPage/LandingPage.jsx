import React from "react";
import {Link} from 'react-router-dom';
import { useWindowWidth } from "../../../public/breakpoints";
import {Hamburger} from "../../components/Hamburger/Hamburger.jsx"
import { NavigationBar } from "../../components/NavigationBar/navigationBar.jsx";
import "./style.css";

export const LandingPage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="landing-page">
      <div
        className="div"
        style={{
          height:
            (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
              ? "2484px"
              : (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
              ? "2077px"
              : undefined,
          overflow:
            (screenWidth >= 640 && screenWidth < 768) || (screenWidth >= 768 && screenWidth < 1064) || screenWidth < 640
              ? "hidden"
              : undefined,
          width:
            screenWidth < 640
              ? "455px"
              : screenWidth >= 640 && screenWidth < 768
              ? "640px"
              : screenWidth >= 768 && screenWidth < 1064
              ? "768px"
              : screenWidth >= 1064 && screenWidth < 1240
              ? "1064px"
              : screenWidth >= 1240
              ? "1240px"
              : undefined,
        }}
      >
        {((screenWidth >= 1064 && screenWidth < 1240) ||
          screenWidth >= 1240 ||
          (screenWidth >= 768 && screenWidth < 1064)) && (
          <>
            <div
              className="overlap-group"
              style={{
                alignItems:
                  (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "flex-start" : undefined,
                display: (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "flex" : undefined,
                flexDirection:
                  (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "column" : undefined,
                gap: (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "10px" : undefined,
                left:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "-51px"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "97px"
                    : screenWidth >= 1240
                    ? "191px"
                    : undefined,
                padding: (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "10px" : undefined,
              }}
            >
              {screenWidth >= 768 && screenWidth < 1064 && (
                <>
                  <div className="frame">
                    <div className="copy">
                      <p className="master-your-draft">
                        Master Your Draft: The Ultimate MTG Card Ratings &amp; Archetypes
                      </p>
                      <p className="text-wrapper">New to drafting? Click the button below</p>
                    </div>
                  </div>
                  <button className="button">
                    <div className="text-wrapper-2">Learn</div>
                  </button>
                </>
              )}

              {((screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240) && (
                <div className="copy">
                  <p className="p">
                    <span className="span">M</span>
                    <span className="text-wrapper-3">aster Your </span>
                    <span className="span">D</span>
                    <span className="text-wrapper-3">raft: </span>
                    <span className="text-wrapper-4">The Ultimate MTG Card Ratings &amp; Archetypes</span>
                  </p>
                  <p className="text-wrapper">New to drafting? Click the button below</p>
                  <button className="button-2">
                    <div className="text-wrapper-2">Learn</div>
                  </button>
                </div>
              )}
            </div>
            <div
              className="image-drag-in-to"
              style={{
                left:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "30px"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "81px"
                    : screenWidth >= 1240
                    ? "70px"
                    : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "707px"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "902px"
                    : screenWidth >= 1240
                    ? "1100px"
                    : undefined,
              }}
            >
              <img
                className="image"
                style={{
                  width:
                    (screenWidth >= 1064 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1064)
                      ? "1297px"
                      : screenWidth >= 1240
                      ? "1100px"
                      : undefined,
                }}
                alt="Image"
                src="/img/mh3-image-1.png"
              />
            </div>
            <div
              className="heading"
              style={{
                top:
                  (screenWidth >= 1064 && screenWidth < 1240) || (screenWidth >= 768 && screenWidth < 1064)
                    ? "1381px"
                    : screenWidth >= 1240
                    ? "1392px"
                    : undefined,
              }}
            >
              <div className="text-wrapper-5">Recent Sets</div>
              {/* <div className="text-wrapper-6">Subheading to introduce testimonials</div> */}
            </div>

            <div
              className="navigation"
              style={{
                alignItems:
                  (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "flex-start" : undefined,
                backgroundColor: screenWidth >= 768 && screenWidth < 1064 ? "#ffffff" : undefined,
                display: (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "flex" : undefined,
                gap:
                  (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "var(--variable-collection-spacing-SM)"
                    : undefined,
                height:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "164px"
                    : (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "277px"
                    : undefined,
                left:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "0"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "58px"
                    : screenWidth >= 1240
                    ? "76px"
                    : undefined,
                top:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "0"
                    : (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "1501px"
                    : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "768px"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "933px"
                    : screenWidth >= 1240
                    ? "1088px"
                    : undefined,
              }}
            >
              <Hamburger/>
              {screenWidth >= 768 && screenWidth < 1064 && <div className="text-wrapper-7"><Link to="/">Magic Drafter</Link></div>}

              {((screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240) && (
                <>
                  <div className="customer-quote">
                    <p className="text-wrapper-8">“A terrific piece of praise”</p>
                  </div>
                  <div className="customer-quote-2">
                    <p className="text-wrapper-8">“A fantastic bit of feedback”</p>
                  </div>
                  <div className="customer-quote-2">
                    <div className="text-wrapper-8">“A genuinely glowing review”</div>
                  </div>
                </>
              )}
            </div>
            <div
              className="cards"
              style={{
                alignItems: screenWidth >= 768 && screenWidth < 1064 ? "flex-start" : undefined,
                backgroundColor:
                  (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240 ? "#ffffff" : undefined,
                display: screenWidth >= 768 && screenWidth < 1064 ? "flex" : undefined,
                gap: screenWidth >= 768 && screenWidth < 1064 ? "var(--variable-collection-spacing-SM)" : undefined,
                height:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "277px"
                    : (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "164px"
                    : undefined,
                left:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "42px"
                    : (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "0"
                    : undefined,
                top:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "1501px"
                    : (screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240
                    ? "0"
                    : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 1064
                    ? "674px"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "1064px"
                    : screenWidth >= 1240
                    ? "1240px"
                    : undefined,
              }}
            >
              {screenWidth >= 768 && screenWidth < 1064 && (
                <>
                  <div className="customer-quote">
                    <p className="text-wrapper-8">“A terrific piece of praise”</p>
                  </div>
                  <div className="customer-quote-2">
                    <p className="text-wrapper-8">“A fantastic bit of feedback”</p>
                  </div>
                  <div className="customer-quote-2">
                    <div className="text-wrapper-8">“A genuinely glowing review”</div>
                  </div>
                </>
              )}

              {((screenWidth >= 1064 && screenWidth < 1240) || screenWidth >= 1240) && (
                <>
                  <div
                    className="items"
                    style={{
                      left:
                        screenWidth >= 1064 && screenWidth < 1240 ? "626px" : screenWidth >= 1240 ? "802px" : undefined,
                    }}
                  >
                    <div className="text-wrapper-9"><Link to={"/sets"}>Sets</Link></div>
                    <div className="text-wrapper-9">Articles</div>
                    <div className="text-wrapper-9">Draft Simulator</div>
                  </div>
                  <div className="text-wrapper-10"><Link to="/">Magic Drafter</Link></div>
                </>
              )}
              
            </div>
            
          </>
        )}
        
        
        <div
          className="navigation-2"
          style={{
            height:
              (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                ? "164px"
                : (screenWidth >= 1064 && screenWidth < 1240) ||
                  screenWidth >= 1240 ||
                  (screenWidth >= 768 && screenWidth < 1064)
                ? "264px"
                : undefined,
            top:
              (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                ? "0"
                : (screenWidth >= 1064 && screenWidth < 1240) ||
                  screenWidth >= 1240 ||
                  (screenWidth >= 768 && screenWidth < 1064)
                ? "1813px"
                : undefined,
            width:
              screenWidth < 640
                ? "455px"
                : screenWidth >= 640 && screenWidth < 768
                ? "640px"
                : screenWidth >= 768 && screenWidth < 1064
                ? "768px"
                : screenWidth >= 1064 && screenWidth < 1240
                ? "1064px"
                : screenWidth >= 1240
                ? "1240px"
                : undefined,
          }}
        >
          
          
          <div
            className="text-wrapper-11 mt-5"
            style={{
              fontFamily:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-font-family)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-font-family)"
                  : undefined,
              fontSize:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-font-size)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-font-size)"
                  : undefined,
              fontStyle:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-font-style)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-font-style)"
                  : undefined,
              fontWeight:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-font-weight)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-font-weight)"
                  : undefined,
              height:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "36px"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "30px"
                  : undefined,
              left:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "80px"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "53px"
                  : undefined,
              letterSpacing:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-letter-spacing)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-letter-spacing)"
                  : undefined,
              lineHeight:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "var(--subheading-line-height)"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "var(--body-text-line-height)"
                  : undefined,
              top:
                (screenWidth >= 1064 && screenWidth < 1240) ||
                screenWidth >= 1240 ||
                (screenWidth >= 768 && screenWidth < 1064)
                  ? "51px"
                  : (screenWidth >= 640 && screenWidth < 768) || screenWidth < 640
                  ? "66px"
                  : undefined,
            }}
          >
            <Link to="/">Magic Drafter</Link>
           
            
          </div>
          <div className="md:hidden">
            <Hamburger className=""/>
          </div>
          
          
          {((screenWidth >= 1064 && screenWidth < 1240) ||
            screenWidth >= 1240 ||
            (screenWidth >= 768 && screenWidth < 1064)) && (
            <>
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
                  width:
                    screenWidth >= 768 && screenWidth < 1064
                      ? "688px"
                      : screenWidth >= 1064 && screenWidth < 1240
                      ? "984px"
                      : screenWidth >= 1240
                      ? "1160px"
                      : undefined,
                }}
                alt="Divider"
                src={
                  screenWidth >= 768 && screenWidth < 1064
                    ? "/img/divider-4.svg"
                    : screenWidth >= 1064 && screenWidth < 1240
                    ? "/img/divider-3-2.svg"
                    : screenWidth >= 1240
                    ? "/img/divider-5.svg"
                    : undefined
                }
              />
            </>
          )}
        </div>
        
        {((screenWidth >= 640 && screenWidth < 768) || screenWidth < 640) && (
          <>
            <div
              className="cards-2"
              style={{
                left: screenWidth < 640 ? "43px" : screenWidth >= 640 && screenWidth < 768 ? "122px" : undefined,
                width: screenWidth < 640 ? "369px" : screenWidth >= 640 && screenWidth < 768 ? "397px" : undefined,
              }}
            >
              <div className="customer-quote-3">
                <p className="text-wrapper-8">“A terrific piece of praise”</p>
              </div>
              <div className="customer-quote-3">
                <p className="text-wrapper-8">“A fantastic bit of feedback”</p>
              </div>
              <div className="customer-quote-3">
                <div className="text-wrapper-8">“A genuinely glowing review”</div>
              </div>
            </div>
            <div
              className="navigation-footer"
              style={{
                left: screenWidth < 640 ? "9px" : screenWidth >= 640 && screenWidth < 768 ? "13px" : undefined,
                width: screenWidth < 640 ? "455px" : screenWidth >= 640 && screenWidth < 768 ? "640px" : undefined,
              }}
            >
              <div className="text-wrapper-12"><Link to="/">Magic Drafter</Link></div>
              <div className="social-icons">
                <div className="buttons-icon">
                  <div className="icon">
                    <img
                      className="img"
                      alt="Icon"
                      src={
                        screenWidth < 640
                          ? "/img/icon-4.svg"
                          : screenWidth >= 640 && screenWidth < 768
                          ? "/img/icon-8.svg"
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img
                      className="icon-2"
                      alt="Icon"
                      src={
                        screenWidth < 640
                          ? "/img/icon-5.svg"
                          : screenWidth >= 640 && screenWidth < 768
                          ? "/img/icon-1.svg"
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img
                      className="icon-3"
                      alt="Icon"
                      src={
                        screenWidth < 640
                          ? "/img/icon-6.svg"
                          : screenWidth >= 640 && screenWidth < 768
                          ? "/img/icon-2-2.svg"
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div className="buttons-icon">
                  <div className="icon">
                    <img
                      className="img"
                      alt="Icon"
                      src={
                        screenWidth < 640
                          ? "/img/icon-7.svg"
                          : screenWidth >= 640 && screenWidth < 768
                          ? "/img/icon-11.svg"
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>
              <img
                className="divider-2"
                style={{
                  width: screenWidth < 640 ? "366px" : screenWidth >= 640 && screenWidth < 768 ? "547px" : undefined,
                }}
                alt="Divider"
                src={
                  screenWidth < 640
                    ? "/img/divider-1-2.svg"
                    : screenWidth >= 640 && screenWidth < 768
                    ? "/img/divider-2-3.svg"
                    : undefined
                }
              />
            </div>
            <div
              className="overlap"
              style={{
                borderRadius: screenWidth >= 640 && screenWidth < 768 ? "8px" : undefined,
                left: screenWidth < 640 ? "26px" : screenWidth >= 640 && screenWidth < 768 ? "36px" : undefined,
                width: screenWidth < 640 ? "404px" : screenWidth >= 640 && screenWidth < 768 ? "568px" : undefined,
              }}
            >
              <div
                className="overlap-group-wrapper"
                style={{
                  backgroundImage:
                    screenWidth < 640
                      ? "url(/img/ModernHorizons3Image.webp)"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "url(/img/ModernHorizons3Image.webp)"
                      : undefined,
                  width: screenWidth < 640 ? "403px" : screenWidth >= 640 && screenWidth < 768 ? "568px" : undefined,
                }}
              >
                <div className="button-wrapper">
                  <button
                    className="button-3"
                    style={{
                      height: screenWidth < 640 ? "46px" : undefined,
                      left: screenWidth < 640 ? "158px" : screenWidth >= 640 && screenWidth < 768 ? "238px" : undefined,
                      top: screenWidth < 640 ? "472px" : screenWidth >= 640 && screenWidth < 768 ? "466px" : undefined,
                      width: screenWidth < 640 ? "87px" : screenWidth >= 640 && screenWidth < 768 ? "92px" : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-13"
                      style={{
                        marginBottom: screenWidth < 640 ? "-2.00px" : undefined,
                        marginLeft: screenWidth < 640 ? "-2.50px" : undefined,
                        marginRight: screenWidth < 640 ? "-2.50px" : undefined,
                        marginTop:
                          screenWidth < 640
                            ? "-4.00px"
                            : screenWidth >= 640 && screenWidth < 768
                            ? "-1.00px"
                            : undefined,
                      }}
                    >
                      Learn
                    </div>
                  </button>
                </div>
              </div>
              <p
                className="master-your-draft-2"
                style={{
                  fontSize: screenWidth < 640 ? "37px" : screenWidth >= 640 && screenWidth < 768 ? "46px" : undefined,
                  left: screenWidth < 640 ? "39px" : screenWidth >= 640 && screenWidth < 768 ? "55px" : undefined,
                  letterSpacing:
                    screenWidth < 640 ? "-0.74px" : screenWidth >= 640 && screenWidth < 768 ? "-0.92px" : undefined,
                  width: screenWidth < 640 ? "326px" : screenWidth >= 640 && screenWidth < 768 ? "458px" : undefined,
                }}
              >
                Master Your Draft: The Ultimate MTG Card Ratings &amp; Archetypes
              </p>
              <div
                className="new-to-drafting"
                style={{
                  fontFamily:
                    screenWidth < 640
                      ? "'Inter', Helvetica"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "var(--subheading-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth < 640
                      ? "22px"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "var(--subheading-font-size)"
                      : undefined,
                  fontStyle: screenWidth >= 640 && screenWidth < 768 ? "var(--subheading-font-style)" : undefined,
                  fontWeight:
                    screenWidth < 640
                      ? "400"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "var(--subheading-font-weight)"
                      : undefined,
                  height: screenWidth < 640 ? "66px" : screenWidth >= 640 && screenWidth < 768 ? "36px" : undefined,
                  letterSpacing:
                    screenWidth < 640
                      ? "0"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "var(--subheading-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth < 640
                      ? "33px"
                      : screenWidth >= 640 && screenWidth < 768
                      ? "var(--subheading-line-height)"
                      : undefined,
                  top: screenWidth < 640 ? "339px" : screenWidth >= 640 && screenWidth < 768 ? "380px" : undefined,
                  width: screenWidth < 640 ? "404px" : screenWidth >= 640 && screenWidth < 768 ? "568px" : undefined,
                }}
              >
                {screenWidth < 640 && (
                  <p className="text-wrapper-41">
                    New to drafting?
                    <br /> Click the button below
                  </p>
                )}

                {screenWidth >= 640 && screenWidth < 768 && (
                  <p className="text-wrapper-41">New to drafting? Click the button below</p>
                )}
              </div>
            </div>
            <div
              className="text-wrapper-14"
              style={{
                left: screenWidth < 640 ? "111px" : screenWidth >= 640 && screenWidth < 768 ? "204px" : undefined,
              }}
            >
              Recent Sets
            </div>
          </>
        )}
      </div>
    </div>
  );
};
