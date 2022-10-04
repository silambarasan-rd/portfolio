import React from 'react';
import '../styles/SkillSet.scss';
import Html5Icon from '../images/skills/html5-logo.png';
import Css3Icon from '../images/skills/css3-logo.png';
import JavascriptIcon from '../images/skills/javascript-logo.png';
import JqueryIcon from '../images/skills/jquery-logo.png';
import AngularIcon from '../images/skills/angular-logo.png';
import ReactIcon from '../images/skills/react-logo.svg';
import NodeIcon from '../images/skills/nodejs-logo.png';
import MongoDbIcon from '../images/skills/mongodb-logo.png';
import PhpIcon from '../images/skills/php-logo.png';
import CodeigniterIcon from '../images/skills/codeigniter-logo.png';
import LaravelIcon from '../images/skills/laravel-logo.png';
import SymfonyIcon from '../images/skills/symfony-logo.png';
import CppIcon from '../images/skills/c++-logo.svg';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';

const skills = [
  {
    key: 'html5',
    label: 'HTML5',
    image: Html5Icon,
    capacity: 90,
    capacityPercent: '90%',
    stopper: 'proud',
  },
  {
    key: 'css3',
    label: 'CSS3',
    image: Css3Icon,
    capacity: 80,
    capacityPercent: '80%',
    stopper: 'proud',
  },
  {
    key: 'javascript',
    label: 'Javascript',
    image: JavascriptIcon,
    capacity: 85,
    capacityPercent: '85%',
    stopper: 'proud',
  },
  {
    key: 'jquery',
    label: 'jQuery',
    image: JqueryIcon,
    capacity: 78,
    capacityPercent: '78%',
    stopper: 'proud',
  },
  {
    key: 'angular',
    label: 'Angular',
    image: AngularIcon,
    capacity: 90,
    capacityPercent: '90%',
    stopper: 'proud',
  },
  {
    key: 'react-js',
    label: 'React js',
    image: ReactIcon,
    capacity: 85,
    capacityPercent: '85%',
    stopper: 'learning',
  },
  {
    key: 'node-js',
    label: 'Node js',
    image: NodeIcon,
    capacity: 68,
    capacityPercent: '68%',
    stopper: 'curious',
  },
  {
    key: 'mongo-db',
    label: 'Mongo DB',
    image: MongoDbIcon,
    capacity: 35,
    capacityPercent: '35%',
    stopper: 'curious',
  },
  {
    key: 'php',
    label: 'PHP',
    image: PhpIcon,
    capacity: 90,
    capacityPercent: '90%',
    stopper: 'not_interested',
  },
  {
    key: 'codeigniter',
    label: 'Codeigniter 3',
    image: CodeigniterIcon,
    capacity: 88,
    capacityPercent: '88%',
    stopper: 'proud',
  },
  {
    key: 'laravel',
    label: 'Laravel',
    image: LaravelIcon,
    capacity: 45,
    capacityPercent: '45%',
    stopper: 'not_interested',
  },
  {
    key: 'symfony',
    label: 'Symfony',
    image: SymfonyIcon,
    capacity: 82,
    capacityPercent: '82%',
    stopper: 'proud',
  },
  {
    key: 'modern-c++',
    label: 'Modern C++',
    image: CppIcon,
    capacity: 25,
    capacityPercent: '25%',
    stopper: 'interested',
  },
  // TODO: Below skill list should need to be displayed in the future.
  // Adobe Photoshop, Adobe Illustrator, After Effects, Premiere Pro
  // AWS - S3, EC2, Cognito, Dynamo DB
  // React Native, Ionic, MySQL, WordPress, Sass, TypeScript, Git
];

const SkillRow = ({skillRow}) => {
  return <div className="col-md-6 col-12">
    <div className="skill-row">
      <div className="skill-tech-icon">
        <img src={skillRow.image}
          className="skill-tech-image" alt={skillRow.label}/>
      </div>
      <div className="skill-detail">
        <h2 className="skill-title">{skillRow.label}</h2>
        <div className="progress skill-progress">
          <div className="progress-bar skill-progress-filled"
            role="progressbar"
            style={{width: skillRow.capacityPercent}}
            aria-valuenow={skillRow.capacity}
            aria-valuemin="0"
            aria-valuemax="100">
          </div>
          <div className={
            // eslint-disable-next-line max-len
            `progress-bar-stop skill-progress-stop ${skillRow?.stopper}`
          }
          style={{width: skillRow.capacityPercent}}
          ></div>
        </div>
      </div>
    </div>
  </div>;
};

SkillRow.propTypes = {
  skillRow: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.string,
    capacity: PropTypes.number,
    capacityPercent: PropTypes.string,
    stopper: PropTypes.oneOf(
        ['curious', 'proud', 'interested', 'not_interested', 'learning'],
    ),
  }).isRequired,
};

const SkillSet = () => {
  return (
    <div className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionTitle sectionType="skills" />

            <div className="skills-container">
              <div className="row">
                {
                  skills.map((skillRow, i) => {
                    if (i !== 0 && i % 2 === 0) {
                      return (
                        <React.Fragment key={skillRow.key}>
                          <div className="clearfix"></div>
                          <SkillRow skillRow={skillRow} />
                        </React.Fragment>
                      );
                    }

                    return <SkillRow skillRow={skillRow} key={skillRow.key} />;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
