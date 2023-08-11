import React, {useContext} from 'react';
import '../styles/Experience.scss';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';
import BinaryTechResonanceLogo from '../images/companies/1519887552228.jpeg';
import ManurevaLogo from '../images/companies/manureva.png';
import LtiMindtreeLogo from '../images/companies/LTIM.NS.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faBuilding} from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';
import {ThemeContext} from '../providers/Context';

const experienceRows = [
  {
    key: 'lti-mindtree',
    position: 'Specialist - Software Engineering',
    company_name: 'LTIMindtree',
    startYear: '2023',
    startMonth: 'July',
    endYear: '2023',
    current: true,
    short_description: `Work with the team to build versatile and 
    highly scalable applications using latest/in-demand technologies by
    writing the code clean/concise and re-usable. Writing Unit test cases
    to avoid regresssion bugs and fucntional issues.
    `,
    location: 'Bengaluru, Karnataka, India',
    image: LtiMindtreeLogo,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6)',
      'Angular',
      'TypeScript',
      'Sass',
      'PHP',
      'MySQL',
      'Symfony',
      'Docker',
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
    key: 'manureva-digital-solutions',
    position: 'Technical Lead',
    company_name: 'Manureva Digital Solutions India Pvt. Ltd.',
    startYear: '2020',
    startMonth: 'April',
    endYear: '2023',
    current: false,
    short_description: `Entered Manureva as a "Senior Software Developer" with 
    hands-on coding experience. Worked on both web & mobile application(s) 
    development and finished each project within the timeline given which then 
    helped me to get promoted as a "Technical Lead".`,
    location: 'Puducherry, India',
    image: ManurevaLogo,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6)',
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
      'Slack',
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
    short_description: `Started my journey in the software industry 
    as a "Junior PHP Developer", For the first 2-3 months I struggled to 
    adapt myself but I worked hard to learn new technologies then gradually
    everything changed and it became second nature.`,
    location: 'Chennai, Tamilnadu, India',
    image: BinaryTechResonanceLogo,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
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
  const currentTheme = useContext(ThemeContext);

  return (<span
    className={
      `tech-row badge 
      ${currentTheme === 'light' ? 'bg-secondary' : 'bg-light text-dark'} 
      ms-1`
    }>
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
        <div className="experience-description-container">
          <p className="short-description">{experienceRow.short_description}</p>
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
    short_description: PropTypes.string,
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
    <Scroll.Element name="experience-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="experience-section">
              <SectionTitle sectionType="experience" />

              <div className="experience-container">
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
    </Scroll.Element>
  );
};

export default Experience;
