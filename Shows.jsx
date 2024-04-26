import React from "react";
import {NavLink} from 'react-router-dom'
function Shows()
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
                <NavLink to="/Shows" className="active">
                  Shows 
                </NavLink>
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
  <div className="page-heading-Shows">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Are You Looking Sound For Events?</h2>
          <span>
            Check out our Page, pick your choice and fill the reservation
            application.
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="Shows-tabs">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row" id="tabs">
            <div className="col-lg-12">
              <div className="heading-tabs">
                <div className="row">
                  <div className="col-lg-8">
                    <ul>
                     
                     
                      
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <div className="main-dark-button">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <section className="tabs-content">
                <article id="tabs-1">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="right-content">
                        <h4>Gayatri Temple Road</h4>
                        <p>
                          This is Main Office 
                          These are <NavLink to="/Home">Homepage</NavLink>,{" "}
                          <NavLink to="/About">About</NavLink>,
                          ,{" "}
                          <NavLink to="/Shows">Shows</NavLink>,
                          <NavLink to="/Booking">Booking</NavLink>, and{" "}
                          <NavLink to="/Sounddetails">Sounddetails</NavLink>. You
                          can feel free to modify any page as you like. If you
                          have any question, please visit our{" "}
                          <NavLink
                            to="https://www.tooplate.com/contact"
                            target="_blank"
                          >
                            Contact page
                          </NavLink>
                          .
                          <br />
                          <br />
                          If you need the latest HTML templates, you may visit{" "}
                          <NavLink to="https://www.toocss.com/" target="_blank">
                            Too CSS
                          </NavLink>{" "}
                          website that features a great collection of templates
                          in different categories.
                        </p>
                        <ul className="list">
                          <li>Madison Square Garden</li>
                          <li>$2,840 per day</li>
                          <li>860 Guests</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7405.690436500271!2d-43.289281240686606!3d-23.00173786750551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd6d13e950037%3A0x2c49dc1b12837f3f!2sPedra%20da%20G%C3%A1vea!5e1!3m2!1sen!2sth!4v1630941277488!5m2!1sen!2sth"
                          width="100%"
                          height="240px"
                          frameBorder={0}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                        <h5>Any Question?</h5>
                        <p>
                          Tumeric air affogato sare torial waistcoat denim
                          stumber.
                        </p>
                        <div className="text-button">
                          <NavLink to="/Sounddetails">
                            Need Direction? <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article id="tabs-2">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="right-content">
                        <h4>Radio City Musical Hall</h4>
                        <p>
                          {" "}
                          Aliquam tempor, purus vitae ullamcorper rhoncus, quam
                          nunc imperdiet sem, sed placerat purus dui in lorem.
                          Donec ornare at risus in varius. In at magna ante.
                          Curabitur at metus sed purus pretium ullamcorper. Cras
                          vitae sapien bibendum urna pulvinar faucibus. Aliquam
                          sed dui in orci tincidunt cursus quis non tellus.
                          Vestibulum a placerat ex, ac cursus dui.
                        </p>
                        <ul className="list">
                          <li>Radio City Musical Hall</li>
                          <li>$4,750 per day</li>
                          <li>1,100 Guests</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14678.414668643849!2d-43.19038460753291!3d-22.96913839717705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd54579a5956b%3A0xa102deeaffcb3e3!2sCopacabana%20Beach!5e1!3m2!1sen!2sth!4v1630941170951!5m2!1sen!2sth"
                          width="100%"
                          height="240px"
                          frameBorder={0}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                        <h5>Any Question?</h5>
                        <p>
                          Tumeric air affogato sare torial waistcoat denim
                          stumber.
                        </p>
                        <div className="text-button">
                          <NavLink to="/Sounddetails">
                            Need Direction? <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article id="tabs-3">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="right-content">
                        <h4>Royce Hall</h4>
                        <p>
                          {" "}
                          Maecenas ut pharetra felis. Interdum et malesuada
                          fames ac ante ipsum primis in faucibus. Sed ut nisi
                          quis tellus vulputate posuere. Aenean consectetur quam
                          et quam fringilla, nec aliquam diam congue. Nulla dui
                          arcu, aliquam sed mattis non, euismod vitae libero.{" "}
                        </p>
                        <ul className="list">
                          <li>Madison Square Garden</li>
                          <li>$5,860 per day</li>
                          <li>1,250 Guests</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.724034173435!2d-43.27685374322357!3d-23.003403908758767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd6cbe74edde3%3A0x14e89f87adc702cc!2sMirante%20Ciclovia%20Sao%20Conrado!5e1!3m2!1sen!2sth!4v1630941324692!5m2!1sen!2sth"
                          width="100%"
                          height="240px"
                          frameBorder={0}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                        <h5>Any Question?</h5>
                        <p>
                          Tumeric air affogato sare torial waistcoat denim
                          stumber.
                        </p>
                        <div className="text-button">
                          <NavLink to="/Sounddetails">
                            Need Direction? <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
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
export default Shows;