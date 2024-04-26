import React from "react";
import {NavLink} from 'react-router-dom'
function Home()
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
  {/* ***** Main Banner Area Start ***** */}
  <div className="main-banner">
    <div className="counter-content">
      <ul>
        <li>
          Days
          <span id="days" />
        </li>
        <li>
          Hours
          <span id="hours" />
        </li>
        <li>
          Minutes
          <span id="minutes" />
        </li>
        <li>
          Seconds
          <span id="seconds" />
        </li>
      </ul>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-content">
            <div className="next-show">
              <i className="fa fa-arrow-up" />
              <span>Next Show</span>
            </div>
            <h6>Since 2001</h6>
            <h2>GAYATRI SOUND </h2>
            <div className="main-white-button">
              <NavLink to="/Sounddetails">Know More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Main Banner Area End ***** */}
  {/* *** Owl Carousel Items ****/}
  <div className="show-events-carousel">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-show-events owl-carousel">
            <div className="item">
              
                <img src="assets/images/show-events-01.jpg" alt="" />
              
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-02.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-03.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-04.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="D:\react js\myapp\public\assets\images\1.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-02.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-03.jpg" alt="" />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="event-details.html">
                <img src="assets/images/show-events-04.jpg" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* *** Amazing Venus ****/}
  <div className="amazing-venues">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="left-content">
            <h4>Three Amazing Venues for events</h4>
            <p>
              ArtXibition Event Template is brought to you by Tooplate website
              and it included total 7 HTML pages. These are{" "}
              <NavLink to="/Home">Homepage</NavLink>, 
              <NavLink to="/About">About</NavLink>,
             ,{" "}
              <NavLink to="/Show">Shows</NavLink>,
             ,{" "}
              <NavLink to="/Booking">tickets</NavLink>, and{" "}
              <NavLink to="/Sounddetails">Price</NavLink>. You can feel
              free to modify any page as you like. If you have any question,
              please visit our{" "}
              <NavLink to="https://www.tooplate.com/contact" target="_blank">
                Contact page
              </NavLink>
              .
            </p>
            <br />
            <p>
              You can use this event template for your commercial or business
              website. You are not permitted to redistribute this template ZIP
              file on any template download website. If you need the latest HTML
              templates, you may visit{" "}
              <NavLink to="https://www.toocss.com/" target="_blank">
                Too CSS
              </NavLink>{" "}
              website that features a great collection of templates in different
              categories.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="right-content">
            <h5>
              <i className="fa fa-map-marker" /> Visit Us
            </h5>
            <span>
              78,Shree Nagar Society <br />
              Gayatri Temple Behind, Patan U.G 384265
              <br />
              INDIA
            </span>
            <div className="text-button">
              <NavLink to="/Shows">
                Need Directions? <i className="fa fa-arrow-right" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* *** Map ****/}
  <div className="map-image">
    <img src="assets/images/map-image.jpg" alt="Maps of 3 Venues" />
  </div>
  {/* *** Venues & Tickets ****/}
  <div className="venue-tickets">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our Shows</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="venue-item">
            <div className="thumb">
              <img src="assets\images\set up.jpg" alt="" />
            </div>
            <div className="down-content">
              <div className="left-content">
                <div className="main-white-button">
                  <NavLink to="/Shows">Know More</NavLink>
                </div>
              </div>
              <div className="right-content">
                <h4>Full JBL Set-up </h4>
                <p>
                  Including Stage Lights And extremely Effect With JBL Sound 
                  Systems.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-sitemap" />
                    250
                  </li>
                  <li>
                    <i className="fa fa-user" />
                    500
                  </li>
                </ul>
                <div className="price">
                  <span>
                    
                    <br />
                    Price <em>3,00,000</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="venue-item">
            <div className="thumb">
              <img src="assets\images\jbl3.jpeg" alt="" />
            </div>
            <div className="down-content">
              <div className="left-content">
                <div className="main-white-button">
                  <NavLink to="/Shows">Know More</NavLink>
                </div>
              </div>
              <div className="right-content">
                <h4>Ran ki Vav Set-up </h4>
                <p>
                  Only Line Array.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-sitemap" />
                    450
                  </li>
                  <li>
                    <i className="fa fa-user" />
                    650
                  </li>
                </ul>
                <div className="price">
                  <span>
                    
                    <br />
                    Price <em>50,000</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="venue-item">
            <div className="thumb">
              <img src="assets\images\dave.jpg" alt="" />
            </div>
            <div className="down-content">
              <div className="left-content">
                
              </div>
              <div className="right-content">
                <h4>SaiRam Dave At Sankheshvar</h4>
                <p>
                <div className="main-white-button">
                  <NavLink to="/Shows">Know More</NavLink>
                </div>
                </p>
                <ul>
                  <li>
                    <i className="fa fa-sitemap" />
                  
                  </li>
                  <li>
                    <i className="fa fa-user" />
                    
                  </li>
                </ul>
                <div className="price">
                  <span>
                  
                    <br />
                     
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* *** Coming Events ****/}
  <div className="coming-events">
    <div className="left-button">
      <div className="main-white-button">
        <NavLink to="/Shows-events">Discover More</NavLink>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="event-item">
            <div className="thumb">
              <NavLink to="event-details.html">
                <img src="assets\images\set up.jpg" alt="" />
              </NavLink>
            </div>
            <div className="down-content">
              <NavLink to="event-details.html">
                <h4>Full JBL Set-up</h4>
              </NavLink>
              <ul>
                <li>
                  <i className="fa fa-clock-o" /> Tuesday: 15:30-19:30
                </li>
                <li>
                  <i className="fa fa-map-marker" /> Patan Gopi Party Plot.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-item">
            <div className="thumb">
              <NavLink to="event-details.html">
                <img src="assets\images\set up-2.jpg" alt="" />
              </NavLink>
            </div>
            <div className="down-content">
              <NavLink to="event-details.html">
                <h4>Ran ki vav Set-up</h4>
              </NavLink>
              <ul>
                <li>
                  <i className="fa fa-clock-o" /> Wednesday: 08:00-14:00
                </li>
                <li>
                  <i className="fa fa-map-marker" />Only Line Array
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-item">
            <div className="thumb">
              <NavLink to="event-details.html">
                <img src="assets\images\dave.jpg" alt="" />
              </NavLink>
            </div>
            <div className="down-content">
              <NavLink to="event-details.html">
                <h4>Sairam Dave Sankheshvar</h4>
              </NavLink>
              <ul>
                <li>
                  <i className="fa fa-clock-o" /> Thursday: 09:00-23:00
                </li>
                <li>
                  <i className="fa fa-map-marker" /> With Sairam Dave At Sankhesvar
                </li>
              </ul>
            </div>
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
            <h4>Contact Us</h4>
            <span>
              <br/>
              Email:virenprajapati28603@gmail.com
              <br/>
              Phone No:9313735802,9723713526
            </span>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <NavLink to="Info">Info</NavLink>
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
              <div className="col-lg-6 col-sm-6">
                <p>Patan,Gujarat</p>
              </div>
              <div className="col-lg-6 col-sm-6">
                <p className="copyright">
                  Copyright 2021 Gayatri Sound Company
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
                    Gayatri Sound&amp;<em>Exibition</em>
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
export default Home;