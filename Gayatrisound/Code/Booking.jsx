import React from "react";
import {NavLink} from 'react-router-dom'

function Booking()
{
  
    return(
        <>

      <span className="dot"/>
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
                <NavLink to="/Booking" className="active">
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/Sounddetails"> Sounddetails</NavLink>
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
  <div className="page-heading-shows-events">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Booking Now For New</h2>
          <span>
            Check out upcoming and past Shows and grab your Booking
            right now.
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="ticket-details-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="left-image">
            <img src="assets/images/ticket-details.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-content">
            <h4>Coming Soon Events</h4>
            <span>With Huge Line Array</span>
            <ul>
              <li>
                <i className="fa fa-clock-o" /> Thursday 18:00 to 01:00
              </li>
              <li>
                <i className="fa fa-map-marker" />
                Ahmedabad
              </li>
            </ul>
            <div className="quantity-content">
              <div className="left-content">
                <h6>Standard Ticket</h6>
                <p></p>
              </div>
              <div className="right-content">
                <div className="quantity buttons_added">
                  <input type="button" defaultValue="-" className="minus" />
                  <input
                    type="number"
                    step={1}
                    min={1}
                    max=""
                    name="quantity"
                    defaultValue={1}
                    title="Qty"
                    className="input-text qty text"
                    size={4}
                    pattern=""
                    inputMode=""
                  />
                  <input type="button" defaultValue="+" className="plus" />
                </div>
              </div>
            </div>
            <div className="total">
              <h4></h4>
              <div className="main-dark-button">
                <NavLink to="#">Availabel</NavLink>
              </div>
            </div>
            <div className="warn">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4>Booking Now</h4>
          
          <div className="contact-form">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your Name*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="phone-number"
                      type="text"
                      id="phone-number"
                      placeholder="Phone Number*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="company-organization"
                      type="text"
                      id="company-organization"
                      placeholder="Company / Organization*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="venue-requested"
                      type="text"
                      id="venue-requested"
                      placeholder="Venue Requested*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="type-event"
                      type="text"
                      id="type-event"
                      placeholder="Type Of Event*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="date-requested-first"
                      type="text"
                      id="date-requested-first"
                      placeholder="Date Requested (Primary Date)*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="date-requested-second"
                      type="text"
                      id="date-requested-second"
                      placeholder="Date Requested (Secondary Date)*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="about-event-hosting"
                      rows={6}
                      id="about-event-hosting"
                      placeholder="About The Sound System You Are Hosting"
                      required=""
                      defaultValue={""}
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-dark-button"
                    >
                      Submit Request
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
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
                <NavLink to="#">Info</NavLink>
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
export default Booking;