import React, {useContext} from 'react';
import '../styles/Home/Experience.scss';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';
import BinaryTechResonanceLogo from '../images/companies/1519887552228.jpeg';
import ManurevaLogo from '../images/companies/manureva.png';
import LtiMindtreeLogo from '../images/companies/LTIM.NS.png';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faBuilding} from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';
import {ThemeContext} from '../providers/Context';

const experienceRows = [
  {
    key: 'lti-mindtree',
    position: 'Specialist - Software Engineering - Product Engineer',
    company_name: 'LTIMindtree',
    startYear: '2023',
    startMonth: 'July',
    endYear: '2023',
    current: true,
    short_description: 'Work with the team to build versatile and ' +
      'highly scalable applications using latest/in-demand technologies by ' +
      'writing the code clean/concise and re-usable. Writing Unit test cases ' +
      'to avoid regresssion bugs and fucntional issues.',
    location: 'Bengaluru, Karnataka, India',
    image: LtiMindtreeLogo,
    technologies: [
      'Angular',
      'TypeScript',
      'Sass',
      'Python',
      'Symfony',
      'MySQL',
      'Docker',
      'AWS S3',
      'AWS EC2',
      'AWS Lambda',
      'AWS Step Functions',
      'CI/CD',
      'Swagger',
      'GitHub',
      'Jira',
      'AI',
      'MCP Server',
      'RAG',
      'AI Agents',
      'GitHub Copilot',
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
    short_description: 'Entered Manureva as a "Senior Software Developer" ' +
      'with hands-on coding experience. Worked on both web & mobile ' +
      'application(s) development and finished each project within the ' +
      'timeline given which then helped me to get promoted as a ' +
      '"Technical Lead".',
    location: 'Puducherry, India',
    image: ManurevaLogo,
    technologies: [
      'Node JS',
      'Express',
      'React',
      'Redux',
      'React Native',
      'Angular',
      'Ionic',
      'TypeScript',
      'Sass',
      'PHP',
      'MySQL',
      'Mongo DB',
      'Symfony',
      'Slim PHP',
      'AWS S3',
      'AWS EC2',
      'AWS Cognito',
      'AWS Dynamo DB',
      'AWS SNS',
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
    position: 'Software Developer',
    company_name: 'Binary Tech Resonance Pvt. Ltd.',
    startYear: '2017',
    startMonth: 'June',
    endYear: '2020',
    current: false,
    short_description: 'Started my journey in the software industry ' +
      'as a "Junior PHP Developer". For the first 2-3 months I struggled to ' +
      'adapt myself but I worked hard to learn new technologies then ' +
      'gradually everything changed and it became second nature.',
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

  return (
    <span
      className={`tech-row badge ${
        currentTheme === 'light' ? 'bg-secondary' : 'bg-light text-dark'
      } ms-1`}
    >
      {technology}
    </span>
  );
};

Technology.propTypes = {
  technology: PropTypes.string.isRequired,
};

const ExperienceRow = ({experienceRow}) => {
  return (
    <motion.div
      className='experience-row'
      initial={{x: -20, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.6, ease: 'easeOut'}}
    >
      <motion.div
        className='experience-duration'
        initial={{scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        <h2 className='start-year'>
          <span className='start-month'>{experienceRow.startMonth}</span>
          {experienceRow.startYear}
        </h2>
        {experienceRow.startYear === experienceRow.endYear && (
          <h6 className='till-date'>Till date</h6>
        )}
      </motion.div>
      <motion.div
        className='experience-tech-icon'
        initial={{scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.3}}
      >
        <img
          src={experienceRow.image}
          className='experience-tech-image'
          alt={experienceRow.company_name}
        />
      </motion.div>
      <motion.div
        className='experience-detail'
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.4}}
      >
        <h2 className='experience-title'>{experienceRow.position}</h2>
        <div className='experience-company-detail'>
          <h5 className='company-title'>
            <FontAwesomeIcon className='company-icon' icon={faBuilding} />
            {experienceRow.company_name}
          </h5>
          <h5 className='company-location'>
            <FontAwesomeIcon className='location-icon' icon={faMapMarkerAlt} />
            {experienceRow.location}
          </h5>
        </div>
        <div className='experience-description-container'>
          <p className='short-description'>{experienceRow.short_description}</p>
        </div>
        <motion.div
          className='experience-tech-detail'
          initial={{y: 10, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.5}}
        >
          <div className='technologies-list'>
            {experienceRow.technologies.map((techRow, index) => (
              <motion.div
                key={`${experienceRow.key}_${techRow.toLowerCase()}`}
                initial={{scale: 0.9, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.3, delay: 0.6 + (index * 0.05)}}
              >
                <Technology technology={techRow} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

ExperienceRow.propTypes = {
  experienceRow: PropTypes.shape({
    key: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    startMonth: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
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
