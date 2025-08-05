import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.scss';
import {faHomeUser,
  faUserGraduate,
  faLaptopCode,
  faPuzzlePiece,
  faBuildingUser,
  faContactCard,
  faFilePdf,
  faHouse,
  faInfoCircle,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Scroll from 'react-scroll';
import {useEffect, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../providers/Context';
import {NavLink} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

const resumePdf = require('../resume/silambarasan-r-resume.pdf');

const ThemeToggle = ({currentTheme, onThemeChange}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeChange = (event) => {
    onThemeChange(event);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const iconVariants = {
    initial: (direction) => ({
      scale: 0,
      rotate: direction === 'sun' ? -180 : 180,
      opacity: 0,
    }),
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: (direction) => ({
      scale: 0,
      rotate: direction === 'sun' ? 180 : -180,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const containerVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: isAnimating ? [1, 1.1, 1] : 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="theme-toggle-container">
      <label htmlFor='appThemeSwitch' className="theme-toggle-label">
        <input
          type='checkbox'
          checked={currentTheme === 'dark'}
          id='appThemeSwitch'
          onChange={handleThemeChange}
        />
        <motion.span
          className={`checkmark ${currentTheme}`}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence mode="wait">
            {currentTheme === 'dark' ? (
              <motion.div
                key="moon"
                custom="moon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="theme-icon"
              >
                <FontAwesomeIcon icon={faMoon} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                custom="sun"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="theme-icon"
              >
                <FontAwesomeIcon icon={faSun} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.span>
      </label>
    </div>
  );
};

ThemeToggle.propTypes = {
  currentTheme: PropTypes.oneOf(['dark', 'light']),
  onThemeChange: PropTypes.func,
};

const scrollSpy = Scroll.scrollSpy;

const HomeMenu = ({onCloseNav}) => {
  return (
    <>
      <Nav className="justify-content-center flex-grow-1">
        <Nav.Link as={Scroll.Link} to='intro-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faHomeUser} />
            <span className="ms-2">Intro</span>
          </div>
        </Nav.Link>
        <Nav.Link as={Scroll.Link} to='skills-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faLaptopCode} />
            <span className="ms-2">Skills</span>
          </div>
        </Nav.Link>
        <Nav.Link as={Scroll.Link} to='experience-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faBuildingUser} />
            <span className="ms-2">Experience</span>
          </div>
        </Nav.Link>
        <Nav.Link as={Scroll.Link} to='education-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faUserGraduate} />
            <span className="ms-2">Education</span>
          </div>
        </Nav.Link>
        <Nav.Link as={Scroll.Link} to='hobbies-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faPuzzlePiece} />
            <span className="ms-2">Hobbies</span>
          </div>
        </Nav.Link>
        <Nav.Link as={Scroll.Link} to='contact-section'
          onClick={onCloseNav}
          activeClass="active" spy={true}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faContactCard} />
            <span className="ms-2">Contact</span>
          </div>
        </Nav.Link>
      </Nav>
    </>
  );
};

HomeMenu.propTypes = {
  onCloseNav: PropTypes.func,
};

const OthersMenu = ({onCloseNav}) => {
  return (
    <>
      <Nav className="justify-content-center flex-grow-1">
        <Nav.Link as={NavLink} to='/'
          onClick={onCloseNav}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faHouse} />
            <span className="ms-2">Home</span>
          </div>
        </Nav.Link>
        <Nav.Link as={NavLink} to='/about'
          onClick={onCloseNav}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faInfoCircle} />
            <span className="ms-2">About</span>
          </div>
        </Nav.Link>
      </Nav>
    </>
  );
};

OthersMenu.propTypes = {
  onCloseNav: PropTypes.func,
};

const NavBar = ({changeCurrentTheme, pageType}) => {
  const currentTheme = useContext(ThemeContext);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    // Delay scroll spy update to prevent initial scroll jump
    const timer = setTimeout(() => {
      scrollSpy.update();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const onThemeChange = (event) => {
    // Checked - Dark, Not Checked - Light
    if (event.target.checked) {
      changeCurrentTheme('dark');
    } else {
      changeCurrentTheme('light');
    }
  };

  const onNavToggle = (expand) => {
    setNavExpanded(expand);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  return (
    <Navbar variant={currentTheme}
      onToggle={onNavToggle}
      expanded={navExpanded}
      fixed='top'
      expand="lg">
      <Container className="position-relative">
        <Navbar.Toggle aria-controls="rds-toggle-navbar" />
        <Navbar.Collapse id="rds-toggle-navbar">
          {
            pageType === 'home' ?
              <HomeMenu onCloseNav={closeNav} /> :
                <OthersMenu onCloseNav={closeNav} />
          }
        </Navbar.Collapse>
        <Nav.Link href={resumePdf} target="_blank" download
          className="download-resume"
          title={'Download Silambarasan Resume'}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faFilePdf} />
            <span className="ms-2">Download Resume</span>
          </div>
        </Nav.Link>
        <Nav.Item
          className={`change-theme ${currentTheme}`}
          title={'Change Dark/Light theme'}>
          <ThemeToggle
            currentTheme={currentTheme}
            onThemeChange={onThemeChange}
          />
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  currentTheme: PropTypes.oneOf(['dark', 'light']),
  changeCurrentTheme: PropTypes.func,
  pageType: PropTypes.oneOf(['home', 'others']),
};

export default NavBar;
