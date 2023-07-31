import React from 'react';
import '../styles/Contact.scss';
import SectionTitle from './SectionTitle';
import GmailIcon from '../images/contact/contact-gmail-logo.svg';
import GitHubIcon from '../images/contact/contact-github.svg';
import StackOverflowIcon from '../images/contact/contact-stack-overflow.svg';
import LinkedInIcon from '../images/contact/contact-linkedin.svg';
import MobileIcon from '../images/contact/contact-mobile.png';
// eslint-disable-next-line max-len
import CuddaloreMap from '../images/contact/India_Tamil_Nadu_Cuddalore_district.png';
import Scroll from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <Scroll.Element name="contact-section">
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <SectionTitle sectionType="contact" />

              <div className="contact-container">
                <div className="row justify-content-center">
                  <div className="col-md-3 col-12">
                    <div className="contact-left-container">
                      <div className="map-container">
                        <img src={CuddaloreMap}
                          className="img-fluid"
                          alt="Cuddalore District Map" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-12">
                    <div className="contact-right-container">
                      <div className="contact-details-wrapper">
                        <div className="contact-row">
                          <div className="contact-image-container">
                            <img src={MobileIcon}
                              className="contact-image" alt="Mobile" />
                          </div>
                          <div className="contact-detail">
                            <a href="tel: +91 77088 63236"
                              target="_blank"
                              rel="noreferrer"
                              title="Send me a mail to
                          silambu1821944@gmail.com">
                              <h1>+91 77088 63236</h1>
                            </a>
                          </div>
                        </div>
                        <div className="contact-row">
                          <div className="contact-image-container">
                            <img src={GmailIcon}
                              className="contact-image" alt="Gmail" />
                          </div>
                          <div className="contact-detail">
                            <a href="mailto: silambu1821944@gmail.com"
                              target="_blank"
                              rel="noreferrer"
                              title="Send me a mail to
                          silambu1821944@gmail.com">
                              <h1>silambu1821944</h1>
                            </a>
                          </div>
                        </div>
                        <div className="contact-row">
                          <div className="contact-image-container">
                            <img src={GitHubIcon}
                              className="contact-image" alt="GitHub" />
                          </div>
                          <div className="contact-detail">
                            <a href="https://github.com/silambarasan-rd"
                              target="_blank"
                              rel="noreferrer"
                              title="Visit my GitHub Profile">
                              <h1>silambarasan-rd</h1>
                            </a>
                          </div>
                        </div>
                        <div className="contact-row">
                          <div className="contact-image-container">
                            <img src={StackOverflowIcon}
                              className="contact-image" alt="Stack Overflow" />
                          </div>
                          <div className="contact-detail">
                            <a href="https://stackoverflow.com/users/8192354/silambarasan-r-d"
                              target="_blank"
                              rel="noreferrer"
                              title="Check out my Stack Overflow Profile">
                              <h1>silambarasan-r-d</h1>
                            </a>
                          </div>
                        </div>
                        <div className="contact-row">
                          <div className="contact-image-container">
                            <img src={LinkedInIcon}
                              className="contact-image" alt="LinkedIn" />
                          </div>
                          <div className="contact-detail">
                            <a href="https://www.linkedin.com/in/silambarasan-rd"
                              target="_blank"
                              rel="noreferrer"
                              title="Visit my LinkedIn Profile">
                              <h1>silambarasan-rd</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="contact-recommend-wrapper">
                        <h2 className="recommend-caption">
                      Wanna give kudos to him ?
                        </h2>
                        <a href="https://www.linkedin.com/in/silambarasan-rd/details/recommendations/"
                          rel="noreferrer"
                          target="_blank"
                          className="btn btn-lg btn-outline-dark recommend-btn">
                          <FontAwesomeIcon icon={faLinkedin} />
                          <span className="ms-2">
                        Recommend <strong>Silambarasan R</strong>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Contact;
