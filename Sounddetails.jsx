import React from "react";
import {NavLink} from 'react-router-dom'

const Sounddetails = () => 
{
    return(
        <>

      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
  
  {/* ***** Preloader End ***** */}
  {/* ***** Pre HEader ***** */}
  <div className="pre-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <span></span>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="text-button">
            
              Contact Us Now! <i className="fa fa-arrow-right" />
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <NavLink to="/Home" className="logo">
              Gayatri Sound&amp;<em>Exibition</em>
            </NavLink>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About Us</NavLink>
              </li>
             
              <li>
                <NavLink to="/Shows">Shows</NavLink>
              </li>
              <li>
                <NavLink to="/Booking">Booking</NavLink>
              </li>
              <li>
                <NavLink to="/Sounddetails"className="active">Sounddetails</NavLink>
              </li>
            </ul>
            <NavLink className="menu-trigger">
              <span>Menu</span>
            </NavLink>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  {/* ***** About Us Page ***** */}
  <div className="page-heading-Shows">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          
          <h2>Sound&amp;Amplifier</h2>
          <span>
            Show Our New Set-up  
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="shows-events-schedule">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Sound Systems Listing</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <ul>
            <li>
              <div className="row">
                <div className="col-lg-3">
                  <div className="title">
                    <h4>2 Way Sound</h4>
                    <img url="assets\images\jbl 1.jpeg" alt="" />
                    <span>2 Speakers With 1 Amplifier</span>
                    
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="time">
                    <span>
                      <i className="fa fa-clock-o" /> Depends On Event
                      <br />
                      
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="place">
                    <span>
                      <i className="fa fa-map-marker" />
                      100*200 Square Feet Area
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="main-dark-button">
                    <NavLink to="Sounddetails">Price</NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-lg-3">
                  <div className="title">
                    <h4>3 Ways Sound</h4>
                    <span>3 Coloums 3 base with Different Amplifier And One Mixer</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="time">
                    <span>
                      <i className="fa fa-clock-o" /> Sep 18, 2021
                      <br />
                      24*7 Available
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="place">
                    <span>
                      <i className="fa fa-map-marker" />
                     Depends On Event
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="main-dark-button">
                    <NavLink to="Sounddetails">Price</NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-lg-3">
                  <div className="title">
                    <h4>4 Ways Sound</h4>
                    <span>4Coloums 4Base With Same As In 3ways </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="time">
                    <span>
                      <i className="fa fa-clock-o" /> Sep 20, 2021
                      <br />
                      24*7 Available
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="place">
                    <span>
                      <i className="fa fa-map-marker" />
                     Depends On Event  <br />
                      
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="main-dark-button">
                    <NavLink to="Sounddetails">Price</NavLink>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="row">
                <div className="col-lg-3">
                  <div className="title">
                    <h4>Superb Line Array Flying Sounds</h4>
                    <span>These are different from above and use heavy machines with this sounds</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="time">
                    <span>
                      <i className="fa fa-clock-o" /> Oct 20, 2021
                      <br />
                      24*7 Available
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="place">
                    <span>
                      <i className="fa fa-map-marker" />
                      Depends On Event
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="main-dark-button">
                    <NavLink to="Sounddetails">Price</NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-lg-3">
                  <div className="title">
                    <h4>Bump &amp; Bass</h4>
                    <span>168 Tickets Available</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="time">
                    <span>
                      <i className="fa fa-clock-o" /> Oct 22, 2021
                      <br />
                      18:00 to 22:00
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="place">
                    <span>
                      <i className="fa fa-map-marker" />
                      Copacabana Beach, <br />
                      Rio de Janeiro
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="main-dark-button">
                    <NavLink to="/Sounddetails">Price</NavLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-12">
          <div className="pagination">
            <ul>
              
             
              <li className="active">
                <NavLink to="#">1</NavLink>
              </li>
              
                
           </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* *** Subscribe *** */}
  <div className="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h4>Subscribe Our Newsletter:</h4>
        </div>
        <div className="col-lg-8">
          <form id="subscribe" action="" method="get">
            <div className="row">
              <div className="col-lg-9">
                <fieldset>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email Address"
                    required=""
                  />
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    className="main-dark-button"
                  >
                    Submit
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* *** Footer *** */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="address">
            <h4>Sunny Hill Festival Address</h4>
            <span>
              5 College St NW, <br />
              Norcross, GA 30071
              <br />
              United States
            </span>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <NavLink to="/about">Info</NavLink>
              </li>
              <li>
                <NavLink to="#">Venues</NavLink>
              </li>
              <li>
                <NavLink to="#">Guides</NavLink>
              </li>
              <li>
                <NavLink to="#">Videos</NavLink>
              </li>
              <li>
                <NavLink to="#">Outreach</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="hours">
            <h4>Open Hours</h4>
            <ul>
              <li>Mon to Fri: 10:00 AM to 8:00 PM</li>
              <li>Sat - Sun: 11:00 AM to 4:00 PM</li>
              <li>Holidays: Closed</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="under-footer">
            <div className="row">
              <div className="col-lg-6">
                <p>São Conrado, Rio de Janeiro</p>
              </div>
              <div className="col-lg-6">
                <p className="copyright">
                  Copyright 2021 ArtXibition Company
                  <br />
                  Design:{" "}
                  <NavLink
                    rel="nofollow"
                    to="https://www.tooplate.com"
                    target="_parent"
                  >
                    Tooplate
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="sub-footer">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <span>
                    Gayatri Sound &amp;<em>Exibition</em>
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menu">
                  <ul>
                    <li>
                      <NavLink to="/Home" className="active">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">About Us</NavLink>
                    </li>
                    
                    <li>
                      <NavLink to="/Shows">Shows</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Booking">Booking</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Sounddetails">Sounddetails</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Blog">Blog</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="social-links">
                  <ul>
                    <li>
                      <NavLink to="#">
                        <i className="fa fa-twitter" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fa fa-facebook" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fa fa-behance" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fa fa-instagram" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* jQuery */}
  {/* Bootstrap */}
  {/* Plugins */}
  {/* Global Init */}
</>

    )
}
export default Sounddetails;