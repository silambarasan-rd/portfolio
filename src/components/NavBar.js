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
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Scroll from 'react-scroll';
import {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../providers/Context';

const resumePdf = require('../resume/silambarasan-resume-2023.pdf');

const scrollSpy = Scroll.scrollSpy;

const NavBar = ({changeCurrentTheme}) => {
  const currentTheme = useContext(ThemeContext);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const onThemeChange = (event) => {
    // Checked - Dark, Not Checked - Light
    if (event.target.checked) {
      changeCurrentTheme('dark');
    } else {
      changeCurrentTheme('light');
    }
  };

  return (
    <Navbar variant={currentTheme}
      fixed='top'
      expand="lg">
      <Container className="position-relative">
        <Navbar.Toggle aria-controls="rds-toggle-navbar" />
        <Navbar.Collapse id="rds-toggle-navbar">
          <Nav className="justify-content-center flex-grow-1">
            <Nav.Link as={Scroll.Link} to='intro-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faHomeUser} />
                <span className="ms-2">Intro</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Scroll.Link} to='skills-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faLaptopCode} />
                <span className="ms-2">Skills</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Scroll.Link} to='experience-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faBuildingUser} />
                <span className="ms-2">Experience</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Scroll.Link} to='education-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faUserGraduate} />
                <span className="ms-2">Education</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Scroll.Link} to='hobbies-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faPuzzlePiece} />
                <span className="ms-2">Hobbies</span>
              </div>
            </Nav.Link>
            <Nav.Link as={Scroll.Link} to='contact-section'
              activeClass="active" spy={true}>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon size="xs" icon={faContactCard} />
                <span className="ms-2">Contact</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href={resumePdf} target="_blank" download
          className="download-resume"
          title={'Download Silambarasan Resume'}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon size="xs" icon={faFilePdf} />
            <span className="ms-2">Download Resume</span>
          </div>
        </Nav.Link>
        <Nav.Item target="_blank"
          className="change-theme"
          title={'Change Dark/Light theme'}>
          <label htmlFor='appThemeSwitch'>
            <input type='checkbox' checked={currentTheme === 'dark'}
              id='appThemeSwitch'
              onChange={onThemeChange} />
            <span className={`checkmark ${currentTheme}`}>
            </span>
          </label>
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  currentTheme: PropTypes.oneOf(['dark', 'light']),
  changeCurrentTheme: PropTypes.func,
};

export default NavBar;
