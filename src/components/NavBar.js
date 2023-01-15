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
import {useEffect} from 'react';

const resumePdf = require('../resume/silambarasan-resume-2023.pdf');

const scrollSpy = Scroll.scrollSpy;

const NavBar = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <Navbar variant="dark"
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
