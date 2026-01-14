import React, {useContext} from 'react';
import '../styles/Home/SkillSet.scss';
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
import PythonIcon from '../images/skills/python-logo.png';
import IonicIcon from '../images/skills/ionic-logo.svg';
import ReactNativeIcon from '../images/skills/react-native-logo.svg';
import MySQLIcon from '../images/skills/mysql-logo.svg';
import AWSIcon from '../images/skills/aws-logo.svg';
import GitIcon from '../images/skills/git-logo.svg';
import TypeScriptIcon from '../images/skills/typescript-logo.svg';
import GolangIcon from '../images/skills/golang.svg';
import JavaIcon from '../images/skills/java.png';
import DjangoIcon from '../images/skills/django-logo.png';
import FastApiIcon from '../images/skills/fast-api-logo.svg';
import ArtificialIntelligenceIcon
  from '../images/skills/artificial-intelligence-logo.svg';
import SpringBootIcon from '../images/skills/spring.svg';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Scroll from 'react-scroll';
import SingleSkill from '../styled-components/SkillSet/SingleSkill';
import {ThemeProvider} from 'styled-components';
import {ThemeContext} from '../providers/Context';

const skills = [
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
    label: 'React',
    image: ReactIcon,
    capacity: 85,
    capacityPercent: '85%',
    stopper: 'learning',
  },
  {
    key: 'javascript',
    label: 'Javascript',
    image: JavascriptIcon,
    capacity: 86,
    capacityPercent: '86%',
    stopper: 'proud',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    image: TypeScriptIcon,
    capacity: 84,
    capacityPercent: '84%',
    stopper: 'proud',
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
    key: 'ionic-framework',
    label: 'Ionic',
    image: IonicIcon,
    capacity: 88,
    capacityPercent: '88%',
    stopper: 'proud',
  },
  {
    key: 'react-native',
    label: 'React Native',
    image: ReactNativeIcon,
    capacity: 85,
    capacityPercent: '85%',
    stopper: 'proud',
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
    key: 'jquery',
    label: 'jQuery',
    image: JqueryIcon,
    capacity: 78,
    capacityPercent: '78%',
    stopper: 'proud',
  },
  {
    key: 'mysql',
    label: 'MySQL',
    image: MySQLIcon,
    capacity: 90,
    capacityPercent: '90%',
    stopper: 'proud',
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
    key: 'laravel',
    label: 'Laravel',
    image: LaravelIcon,
    capacity: 45,
    capacityPercent: '45%',
    stopper: 'not_interested',
  },
  {
    key: 'codeigniter',
    label: 'Codeigniter 3',
    image: CodeigniterIcon,
    capacity: 72,
    capacityPercent: '72%',
    stopper: 'proud',
  },
  {
    key: 'git',
    label: 'Git',
    image: GitIcon,
    capacity: 89,
    capacityPercent: '89%',
    stopper: 'proud',
  },
  {
    key: 'aws',
    label: 'AWS',
    image: AWSIcon,
    capacity: 66,
    capacityPercent: '66%',
    stopper: 'learning',
  },
  {
    key: 'ai',
    label: 'Artificial Intelligence',
    image: ArtificialIntelligenceIcon,
    capacity: 45,
    capacityPercent: '45%',
    stopper: 'learning',
  },
  {
    key: 'python',
    label: 'Python',
    image: PythonIcon,
    capacity: 70,
    capacityPercent: '70%',
    stopper: 'proud',
  },
  {
    key: 'fast-api',
    label: 'Fast API',
    image: FastApiIcon,
    capacity: 69,
    capacityPercent: '69%',
    stopper: 'proud',
  },
  {
    key: 'django',
    label: 'Django',
    image: DjangoIcon,
    capacity: 54,
    capacityPercent: '54%',
    stopper: 'interested',
  },
  {
    key: 'modern-c++',
    label: 'Modern C++',
    image: CppIcon,
    capacity: 31,
    capacityPercent: '31%',
    stopper: 'interested',
  },
  {
    key: 'java',
    label: 'Java',
    image: JavaIcon,
    capacity: 26,
    capacityPercent: '26%',
    stopper: 'interested',
  },
  {
    key: 'springboot',
    label: 'Spring Boot',
    image: SpringBootIcon,
    capacity: 28,
    capacityPercent: '28%',
    stopper: 'interested',
  },
  {
    key: 'golang',
    label: 'Golang (Gin)',
    image: GolangIcon,
    capacity: 22,
    capacityPercent: '22%',
    stopper: 'interested',
  },
];

const SkillRow = ({skillRow, index}) => {
  const currentTheme = useContext(ThemeContext);

  return <div className="col-md-3 col-12">
    <ThemeProvider theme={{currentTheme}}>
      <SingleSkill skillRow={skillRow} index={index} />
    </ThemeProvider>
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
  index: PropTypes.number.isRequired,
};

const SkillSet = () => {
  return (
    <Scroll.Element name="skills-section">
      <div className="skills-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <SectionTitle sectionType="skills" />

              <div className="skills-container">
                <div className="row g-1 justify-content-center">
                  {skills.map((skillRow, i) => (
                    <SkillRow
                      skillRow={skillRow}
                      key={skillRow.key}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default SkillSet;
