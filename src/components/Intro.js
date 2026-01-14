import React, {useEffect, useState} from 'react';
import SilambarasanPicture from
  './../images/silambarasan-rd-senior-software-engineer.png';
import '../styles/Home/Intro.scss';
import '../styles/Home/IntroHighlights.scss';
import Scroll from 'react-scroll';
import {Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useStaggerAnimation} from '../hooks/useScrollAnimation';

const TYPES_OF_ENGINEER = [
  {
    label: 'Passionate',
    value: 'passionate',
  },
  {
    label: 'Creative',
    value: 'creative',
  },
  {
    label: 'Dedicated',
    value: 'dedicated',
  },
];
const DEFAULT_TYPE_OF_ENGINEER = 3; // 1 based Index

const ENGINEER_TYPE_CHANGE_INTERVAL = 3500; // milliseconds (seconds * 1000)

const EngineerType = () => {
  // Current type of the Engineer text
  const [engineerType, setEngineerType] = useState(DEFAULT_TYPE_OF_ENGINEER);

  useEffect(() => {
    const typeEngineerInterval = setInterval(() => {
      setEngineerType((prevEngineerType) => {
        return (prevEngineerType % TYPES_OF_ENGINEER.length) + 1;
      });
    }, ENGINEER_TYPE_CHANGE_INTERVAL);

    return () => {
      clearInterval(typeEngineerInterval);
    };
  }, []);

  return <div className="d-inline engineer-type-container">
    <motion.span
      className="position-absolute fw-bolder engineer-type-text"
      key={engineerType}
      initial={{
        opacity: 0,
        rotateX: -90,
        transformOrigin: 'center bottom',
      }}
      animate={{
        opacity: 1,
        rotateX: 0,
        transformOrigin: 'center bottom',
      }}
      exit={{
        opacity: 0,
        rotateX: 90,
        transformOrigin: 'center top',
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        rotateX: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
        },
      }}
    >
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </motion.span>
    <div className="invisible d-inline pe-2 pe-md-3">
      {TYPES_OF_ENGINEER[engineerType-1].label}
    </div>
  </div>;
};

const Intro = () => {
  return (
    <Scroll.Element name="intro-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="intro-container">
              <div className="row">
                <div className="col-md-4">
                  <motion.div
                    className="intro-picture-wrapper"
                    {...useStaggerAnimation(0.2)}
                  >
                    <Image
                      src={SilambarasanPicture}
                      className="intro-picture"
                    />
                  </motion.div>
                </div>
                <div className="col-md-8">
                  <div
                    className="d-flex flex-column
                    justify-content-center h-100"
                  >
                    <motion.div
                      className="intro-greetings"
                      {...useStaggerAnimation(0.4)}
                    >
                      <motion.h1
                        className="greeting-text"
                        {...useStaggerAnimation(0.6)}
                      >
                        Hi, I&apos;m Silambarasan
                      </motion.h1>
                      <motion.h4
                        className="greeting-sub-text"
                        {...useStaggerAnimation(0.8)}
                      >
                        <span>Glad you&apos;re here!</span>
                        <span>&nbsp;Please take a look around</span>
                      </motion.h4>
                    </motion.div>
                    <motion.h1
                      className="intro-description"
                      {...useStaggerAnimation(1.0)}
                    >
                      <motion.div
                        className="position-relative"
                        {...useStaggerAnimation(0.8)}
                      >
                        <motion.span>A </motion.span>
                        <EngineerType />
                      </motion.div>
                      <motion.span {...useStaggerAnimation(0.8)}>
                        Software Engineer from India, specializing in full-stack
                        web and mobile application development.
                      </motion.span>
                      <br/>
                      <motion.span {...useStaggerAnimation(0.8)}>
                        Passionate about adventure books, sketching, music, and
                        gaming. Always curious to discover something new daily.
                      </motion.span>
                      <br/>
                      <motion.div
                        className="intro-highlights mt-3"
                        {...useStaggerAnimation(1.0)}
                      >
                        <motion.span className="highlight-item me-4">
                          💼 8+ Years Experience
                        </motion.span>
                        <motion.span className="highlight-item me-4">
                          🤖 AI-Powered Full-Stack Engineer
                        </motion.span>
                        <motion.span className="highlight-item">
                          🚀 End-to-End Product Engineering
                        </motion.span>
                      </motion.div>
                      <motion.span
                        className={
                          'quotation d-flex align-items-center ' +
                          'align-items-md-start flex-column flex-md-row ' +
                          'justify-content-center'
                        }
                        {...useStaggerAnimation(0.8)}
                      >
                        Believes in
                        <blockquote>
                          <span className="fa fa-quote-left"/>
                          Earth is not for Humans only
                          <span className="fa fa-quote-right"/>
                        </blockquote>
                      </motion.span>
                    </motion.h1>
                    <motion.div
                      className="d-flex justify-content-end"
                      {...useStaggerAnimation(1.2)}
                    >
                      <NavLink
                        className={`text-secondary
                          text-decoration-none
                          d-flex
                          align-items-center`}
                        title="Read more about Silambarasan R
                          (Specialist Software Engineer)"
                        to="/about"
                      >
                        <span className="ms-1">🤔 Hmm... Read more</span>
                      </NavLink>
                    </motion.div>
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

export default Intro;
