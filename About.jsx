import React from "react";
import {NavLink} from 'react-router-dom'
function About()
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
          <span>Hey! The Show Is Starting In 5 Days.</span>
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
              Gayatri Sound &amp;<em>Exibition</em>
            </NavLink>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About" className="active">
                  About Us
                </NavLink>
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
  {/* ***** About Us Page ***** */}
  <div className="page-heading-about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Ahmedabad</h2>
          <span>September 24-28, 2021 Gujarat</span>
        </div>
      </div>
    </div>
  </div>
  <div className="about-item">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="left-image">
            <img src="assets/images/about-image.jpg" alt="party time" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-content">
            <div className="about-map-image">
              <img
                src="assets/images/about-map-image.jpg"
                alt="party location"
              />
            </div>
            <div className="down-content">
              <h4>S.G.Highway,Ahmedabad</h4>
              <ul>
                <li>August 24 Friday</li>
                <li>09:30 AM - 07:00 PM</li>
              </ul>
              <span>
                <i className="fa fa-ticket" />
              </span>
              <div className="main-dark-button">
                <NavLink to="/Sounddetails">Know More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-upcoming-shows">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <h2>About The Upcoming Show</h2>
          <p />
          <p>
            ArtXibition Event Template is brought to you by Tooplate website and
            it included total 7 HTML pages. These are{" "}
            <NavLink to="/Home">Homepage</NavLink>, <NavLink to="/About">About</NavLink>,
            {" "}
            <NavLink to="/Shows">Shows</NavLink>,
            <NavLink to="/Booking">Booking</NavLink>,{" "}
            , and{" "}
            <NavLink to="/Sounddetails">Sounddetails</NavLink>. You can feel free
            to modify any page as you like. If you have any question, please
            visit our{" "}
            <NavLink to="https://www.tooplate.com/contact" target="_blank">
              Contact page
            </NavLink>
            .
          </p>
          <p />
          <h4>Items That Are Restricted</h4>
          <ul>
            <li>* Don't Make Opreator Videos</li>
            <li>* Don't Come Near Machine With Food &amp; Drinks</li>
            <li>* Any kind of Issues Call Opreator</li>
          </ul>
          <h4>Organizer &amp; Owner </h4>
          <p>
            Art party vegan mixtape before they sold out raclette, cliche banh
            mi mumblecore ugh hell of. Art party kene ugh umami, readymade tbh
            small batch austin distillery aesthetic.Shoreditch narwhal livers
            edge actually godar affogato sartorial waistcoat ugh raw denim
            stumptown.
          </p>
          <div className="text-button">
            <NavLink to="/Booking">
              Need Directions? <i className="fa fa-arrow-right" />
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="next-shows">
            <h4>
              <i className="fa fa-clock-o" /> The Next Show Soon
            </h4>
            <ul>
              <li>
                <h5>Copacabana Festival</h5>
                <span>
                  Sep 24 Fri
                  <br />
                  08:30 AM - 11:00 PM
                </span>
                <div className="icon-button">
                  <NavLink to="/Sounddetails">
                    <i className="fa fa-shopping-cart" />
                  </NavLink>
                </div>
              </li>
              <li>
                <h5>Rock Music Festival</h5>
                <span>
                  Sep 22 Wed
                  <br />
                  11:00 AM - 09:00 PM
                </span>
                <div className="icon-button">
                  <NavLink to="/Sounddetails">
                    <i className="fa fa-shopping-cart" />
                  </NavLink>
                </div>
              </li>
              <li>
                <h5>Water Splash Festival</h5>
                <span>
                  July 18 Friday
                  <br />
                  10:00 AM - 11:00 PM
                </span>
                <div className="icon-button">
                  <NavLink to="/Sounddetails">
                    <i className="fa fa-shopping-cart" />
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="also-like">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Founder &amp; Organizer</h2>
        </div>
        <div className="col-lg-4">
          <div className="like-item">
            <div className="thumb">
              <NavLink to="/Booking">
                <img src="assets\images\event-02 (2).jpg" alt="" />
              </NavLink>
              <div className="icons">
                <ul>
                  <li>
                    <NavLink to="/Booking">
                      <i className="fa fa-arrow-right" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Sounddetails">
                      <i className="fa fa-ticket" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down-content">
              
              <NavLink to="/Booking">
                <img src="assets/images/founder.jpg" alt=""/>
                <span>Founder Or Owner</span>
                <h4>Dushyant Prajapati</h4>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="like-item">
            <div className="thumb">
              <NavLink to="/Booking">
                <img src="assets/images/like-02.jpg" alt="" />
              </NavLink>
              <div className="icons">
                <ul>
                  <li>
                    <NavLink to="/Booking">
                      <i className="fa fa-arrow-right" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Sounddetails">
                      <i className="fa fa-ticket" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down-content">
              <span>2nd Owner</span>
              <NavLink to="/Booking">
                <h4>
                  Jignesh Prajapati
                </h4>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="like-item">
            <div className="thumb">
              <NavLink to="/Booking">
                <img src="assets/images/like-03.jpg" alt="" />
              </NavLink>
              <div className="icons">
                <ul>
                  <li>
                    <NavLink to="/Booking">
                      <i className="fa fa-arrow-right" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Sounddetails">
                      <i className="fa fa-ticket" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down-content">
              <span>Mangement &amp; Key Board Player</span>
              <NavLink to="/Booking">
                <h4>Shailesh Prajapati</h4>
              </NavLink>
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
            <h4>Address</h4>
            <span>78,Shree Nagar Soceity
            Gayatri Temple Behind, <br />
              Patan, U.G. 384265
              <br />
              India
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
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="under-footer">
            <div className="row">
              <div className="col-lg-6">
                <p></p>
              </div>
              <div className="col-lg-6">
                <p className="copyright">
                  Copyright 2021 Gayatri Sound 
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
                      <NavLink to="/Booking">Tickets</NavLink>
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
export default About;