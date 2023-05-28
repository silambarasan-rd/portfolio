import React from 'react';
import '../styles/Education.scss';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,
  faUniversity} from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';

const educationRows = [
  // {
  //   key: 'master-of-computer-applications',
  //   field_of_study: 'Master of Computer Applications (DDE)',
  //   institution_name: `Annamalai University`,
  //   startYear: '2023',
  //   endYear: '-',
  //   location: 'Chidambaram, Tamilnadu, India',
  // },
  {
    key: 'bachelor-of-computer-applications',
    field_of_study: 'Bachelor of Computer Applications',
    institution_name: `St. Joseph\'s College of Arts & Science (Autonomous)`,
    startYear: '2014',
    endYear: '2017',
    location: 'Cuddalore, Tamilnadu, India',
  },
  {
    key: 'higher-secondary-education',
    field_of_study: 'High School (HSC) - Biology',
    institution_name: 'St. Joseph\'s Higher Secondary School',
    startYear: '2006',
    endYear: '2014',
    location: 'Cuddalore, Tamilnadu, India',
  },
];

const Technology = ({technology}) => {
  return (<span className="tech-row badge bg-secondary ms-1">
    {technology}
  </span>);
};

Technology.propTypes = {
  technology: PropTypes.string,
};

const EducationRow = ({educationRow}) => {
  return (
    <div className="education-row">
      <div className="education-duration">
        <h2 className="start-year">
          { educationRow.startYear }
        </h2>
        <div className="year-separator"></div>
        <h2 className="end-year">
          { educationRow.endYear }
        </h2>
      </div>
      <div className="education-detail">
        <h2 className="education-title">
          {educationRow.field_of_study}
        </h2>
        <div className="education-company-detail">
          <h5 className="company-title">
            <FontAwesomeIcon className="company-icon" icon={faUniversity} />
            {educationRow.institution_name}
          </h5>
          <div>
            <h5 className="company-location">
              <FontAwesomeIcon className="location-icon"
                icon={faMapMarkerAlt} />
              {educationRow.location}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

EducationRow.propTypes = {
  educationRow: PropTypes.shape({
    key: PropTypes.string,
    field_of_study: PropTypes.string,
    institution_name: PropTypes.string,
    short_description: PropTypes.string,
    startYear: PropTypes.string,
    endYear: PropTypes.string,
    location: PropTypes.string,
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
