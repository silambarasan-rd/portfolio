import React from 'react';
import '../styles/Experience.scss';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

import BinaryTechResonanceLogo from '../images/companies/1519887552228.jpeg';
import ManurevaLogo from '../images/companies/manureva.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faBuilding} from '@fortawesome/free-solid-svg-icons';

const experienceRows = [
  {
    key: 'manureva-digital-solutions',
    position: 'Sr. Software Dev. / Technical Lead',
    company_name: 'Manureva Digital Solutions India Pvt. Ltd.',
    startYear: '2020',
    startMonth: 'April',
    endYear: '2020',
    current: true,
    location: 'Puducherry, India',
    image: ManurevaLogo,
    technologies: [
      'HTML5',
      'CSS3',
      'JS (ES6)',
      'Node JS',
      'Express',
      'Mongo DB',
      'React JS',
      'Redux',
      'React Native',
      'Angular',
      'TypeScript',
      'Sass',
      'Ionic',
      'PHP',
      'MySQL',
      'Symfony',
      'Slim PHP',
      'AWS S3',
      'AWS EC2',
      'AWS Cognito',
      'AWS Dynamo DB',
      'CI/CD',
      'Postman',
      'GitHub',
      'Jira',
    ],
    // child: [] // TODO: To display Different roles within a same company
  },
  {
    key: 'binary-tech-resonance',
    position: 'Senior PHP Developer',
    company_name: 'Binary Tech Resonance Pvt. Ltd.',
    startYear: '2017',
    startMonth: 'June',
    endYear: '2020',
    current: false,
    location: 'Chennai, Tamilnadu, India',
    image: BinaryTechResonanceLogo,
    technologies: [
      'HTML5',
      'CSS3',
      'JS',
      'jQuery',
      'Angular',
      'TypeScript',
      'Sass',
      'Ionic',
      'PHP',
      'MySQL',
      'Codeigniter 3',
      'Laravel',
      'WordPress',
      'Magento',
      'cPanel',
    ],
    // child: [] // TODO: To display Different roles within a same company
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

const ExperienceRow = ({experienceRow}) => {
  return (
    <div className="experience-row">
      <div className="experience-duration">
        <h2 className="start-year">
          <span className="start-month">{ experienceRow.startMonth }</span>
          { experienceRow.startYear }
        </h2>
        { experienceRow.startYear === experienceRow.endYear && (
          <h6 className="till-date">Till date</h6>
        ) }
      </div>
      <div className="experience-tech-icon">
        <img src={experienceRow.image}
          className="experience-tech-image" alt={experienceRow.company_name}/>
      </div>
      <div className="experience-detail">
        <h2 className="experience-title">
          {experienceRow.position}
        </h2>
        <div className="experience-company-detail">
          <h5 className="company-title">
            <FontAwesomeIcon className="company-icon" icon={faBuilding} />
            {experienceRow.company_name}
          </h5>
          <h5 className="company-location">
            <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
            {experienceRow.location}
          </h5>
        </div>
        <div className="experience-tech-detail">
          <div className="technologies-list">
            {
              experienceRow.technologies.map((techRow) => (
                <Technology
                  key={`${experienceRow.key}_${techRow.toLowerCase()}`}
                  technology={techRow} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceRow.propTypes = {
  experienceRow: PropTypes.shape({
    key: PropTypes.string,
    position: PropTypes.string,
    company_name: PropTypes.string,
    startYear: PropTypes.string,
    startMonth: PropTypes.string,
    endYear: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.array,
  }).isRequired,
};

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionTitle sectionType="experience" />

            <div className="experience-container">
              <div className="row">
                {
                  experienceRows.map((experienceItem) => (
                    <ExperienceRow key={experienceItem.key}
                      experienceRow={experienceItem} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
