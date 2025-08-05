import React from 'react';
import '../styles/Home/Education.scss';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faUniversity} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import Scroll from 'react-scroll';

const educationRows = [
  {
    key: 'master-of-computer-science',
    field_of_study: 'Master of Computer Science (DDE)',
    institution_name: 'Annamalai University',
    startYear: '2023',
    endYear: '2025',
    completed: false,
    location: 'Chidambaram, Tamilnadu, India',
  },
  {
    key: 'bachelor-of-computer-applications',
    field_of_study: 'Bachelor of Computer Applications',
    institution_name: 'St. Joseph\'s College of Arts & Science (Autonomous)',
    startYear: '2014',
    endYear: '2017',
    completed: true,
    location: 'Cuddalore, Tamilnadu, India',
  },
  {
    key: 'higher-secondary-education',
    field_of_study: 'High School (HSC) - Biology',
    institution_name: 'St. Joseph\'s Higher Secondary School',
    startYear: '2006',
    endYear: '2014',
    completed: true,
    location: 'Cuddalore, Tamilnadu, India',
  },
];


const EducationRow = ({educationRow}) => {
  return (
    <motion.div
      className='education-row'
      initial={{y: 30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
    >
      <motion.div
        className='education-duration'
        initial={{scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.2}}
      >
        <h2 className='start-year'>
          {educationRow.startYear}
        </h2>
        <motion.div
          className='year-separator'
          initial={{scaleY: 0}}
          whileInView={{scaleY: 1}}
          viewport={{once: true}}
          transition={{duration: 0.3, delay: 0.3}}
        />
        <h2 className='end-year'>
          {educationRow.endYear}
        </h2>
      </motion.div>
      <motion.div
        className='education-detail'
        initial={{x: 20, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.4}}
      >
        <motion.h2
          className='education-title'
          initial={{y: 10, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.5}}
        >
          {educationRow.field_of_study}
          <motion.span
            className='ms-2'
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.6}}
            title={
              educationRow.completed ?
                `Completed in ${educationRow.endYear}` :
                'Pursuing'
            }
          >
            {educationRow.completed ?
              <i className='fa fa-2xs fa-graduation-cap text-success'/> :
              <i className='fa fa-2xs fa-arrow-trend-up text-secondary'/>
            }
          </motion.span>
        </motion.h2>
        <motion.div
          className='education-company-detail'
          initial={{y: 10, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.7}}
        >
          <h5 className='company-title'>
            <FontAwesomeIcon className='company-icon' icon={faUniversity}/>
            {educationRow.institution_name}
          </h5>
          <div>
            <h5 className='company-location'>
              <FontAwesomeIcon
                className='location-icon'
                icon={faMapMarkerAlt}
              />
              {educationRow.location}
            </h5>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

EducationRow.propTypes = {
  educationRow: PropTypes.shape({
    key: PropTypes.string.isRequired,
    field_of_study: PropTypes.string.isRequired,
    institution_name: PropTypes.string.isRequired,
    short_description: PropTypes.string,
    startYear: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const Education = () => {
  return (
    <Scroll.Element name="education-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="education-section">
              <SectionTitle sectionType="education" />

              <div className="education-container">
                {
                  educationRows.map((educationItem) => (
                    <EducationRow key={educationItem.key}
                      educationRow={educationItem} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Education;
