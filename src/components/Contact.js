import React, {useContext} from 'react';
import '../styles/Home/Contact.scss';
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
import {ThemeContext} from '../providers/Context';
import {motion} from 'framer-motion';

const Contact = () => {
  const currentTheme = useContext(ThemeContext);

  return (
    <Scroll.Element name="contact-section">
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <SectionTitle sectionType="contact" />

              <motion.div
                className='contact-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
              >
                <div className='row justify-content-center'>
                  <motion.div
                    className='col-md-3 col-12'
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                  >
                    <div className='contact-left-container'>
                      <motion.div
                        className='map-container'
                        initial={{scale: 0.9, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4}}
                        whileHover={{scale: 1.05}}
                      >
                        <a
                          href='https://maps.app.goo.gl/whyRTVnJt4YTGHAi9'
                          target='_blank'
                          rel='noreferrer'
                          title='View Cuddalore District on Google Maps'
                        >
                          <img
                            src={CuddaloreMap}
                            className='img-fluid'
                            alt='Cuddalore District Map'
                          />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className='col-md-9 col-12'
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                  >
                    <div className='contact-right-container'>
                      <motion.div
                        className='contact-details-wrapper'
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{
                          duration: 0.5,
                          staggerChildren: 0.2,
                          delayChildren: 0.4,
                        }}
                      >
                        <motion.div
                          className='contact-row'
                          initial={{y: 30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.5}}
                          whileHover={{scale: 1.02}}
                        >
                          <motion.div
                            className='contact-image-container'
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                          >
                            <img
                              src={MobileIcon}
                              className='contact-image dark-invert'
                              alt='Mobile'
                            />
                          </motion.div>
                          <motion.div
                            className='contact-detail'
                            initial={{x: 20, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                          >
                            <a
                              href='tel: +91 77088 63236'
                              target='_blank'
                              rel='noreferrer'
                              title='Call me at +91 77088 63236'
                            >
                              <h1>+91 77088 63236</h1>
                            </a>
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className='contact-row'
                          initial={{y: 30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.5}}
                          whileHover={{scale: 1.02}}
                        >
                          <motion.div
                            className='contact-image-container'
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                          >
                            <img
                              src={GmailIcon}
                              className='contact-image'
                              alt='Gmail'
                            />
                          </motion.div>
                          <motion.div
                            className='contact-detail'
                            initial={{x: 20, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                          >
                            <a
                              href='mailto: silambu1821944@gmail.com'
                              target='_blank'
                              rel='noreferrer'
                              title='Send me a mail to silambu1821944@gmail.com'
                            >
                              <h1>silambu1821944</h1>
                            </a>
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className='contact-row'
                          initial={{y: 30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.5}}
                          whileHover={{scale: 1.02}}
                        >
                          <motion.div
                            className='contact-image-container'
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                          >
                            <img
                              src={GitHubIcon}
                              className='contact-image dark-invert'
                              alt='GitHub'
                            />
                          </motion.div>
                          <motion.div
                            className='contact-detail'
                            initial={{x: 20, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                          >
                            <a
                              href='https://github.com/silambarasan-rd'
                              target='_blank'
                              rel='noreferrer'
                              title='Visit my GitHub Profile'
                            >
                              <h1>silambarasan-rd</h1>
                            </a>
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className='contact-row'
                          initial={{y: 30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.5}}
                          whileHover={{scale: 1.02}}
                        >
                          <motion.div
                            className='contact-image-container'
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                          >
                            <img
                              src={StackOverflowIcon}
                              className='contact-image'
                              alt='Stack Overflow'
                            />
                          </motion.div>
                          <motion.div
                            className='contact-detail'
                            initial={{x: 20, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                          >
                            <a
                              href='https://stackoverflow.com/users/8192354/silambarasan-r-d'
                              target='_blank'
                              rel='noreferrer'
                              title='Check out my Stack Overflow Profile'
                            >
                              <h1>silambarasan-r-d</h1>
                            </a>
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className='contact-row'
                          initial={{y: 30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.5}}
                          whileHover={{scale: 1.02}}
                        >
                          <motion.div
                            className='contact-image-container'
                            initial={{scale: 0.8, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                          >
                            <img
                              src={LinkedInIcon}
                              className='contact-image'
                              alt='LinkedIn'
                            />
                          </motion.div>
                          <motion.div
                            className='contact-detail'
                            initial={{x: 20, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                          >
                            <a
                              href='https://www.linkedin.com/in/silambarasan-rd'
                              target='_blank'
                              rel='noreferrer'
                              title='Visit my LinkedIn Profile'
                            >
                              <h1>silambarasan-rd</h1>
                            </a>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className='contact-recommend-wrapper'
                        initial={{y: 30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.5}}
                      >
                        <motion.h2
                          className='recommend-caption'
                          initial={{opacity: 0}}
                          whileInView={{opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.4, delay: 0.6}}
                        >
                          Wanna give kudos to him ?
                        </motion.h2>
                        <motion.a
                          href='https://www.linkedin.com/in/silambarasan-rd/details/recommendations/'
                          rel='noreferrer'
                          target='_blank'
                          className={`btn btn-lg ${
                            currentTheme === 'light' ?
                              'btn-outline-dark' :
                              'btn-outline-light'
                          } recommend-btn`}
                          initial={{scale: 0.9, opacity: 0}}
                          whileInView={{scale: 1, opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 0.4, delay: 0.7}}
                          whileHover={{scale: 1.05}}
                          whileTap={{scale: 0.95}}
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                          <span className='ms-2'>
                            Recommend <strong>Silambarasan R</strong>
                          </span>
                        </motion.a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Contact;
