import React, {useContext} from 'react';
import '../styles/Home/SkillSet.scss';
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
import RubyIcon from '../images/skills/ruby-logo.png';
import PythonIcon from '../images/skills/python-logo.png';
import IonicIcon from '../images/skills/ionic-logo.svg';
import ReduxIcon from '../images/skills/redux-logo.svg';
import ReactNativeIcon from '../images/skills/react-native-logo.svg';
import MySQLIcon from '../images/skills/mysql-logo.svg';
import AWSIcon from '../images/skills/aws-logo.svg';
import GitIcon from '../images/skills/git-logo.svg';
import SassIcon from '../images/skills/sass-logo.svg';
import TypeScriptIcon from '../images/skills/typescript-logo.svg';
import PhotoShopIcon from '../images/skills/adobe-photoshop-logo.svg';
import AfterEffectsIcon from '../images/skills/adobe-after-effects-logo.svg';
import GolangIcon from '../images/skills/golang.svg';
import JavaIcon from '../images/skills/java.png';
import SpringBootIcon from '../images/skills/spring.svg';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Scroll from 'react-scroll';
import SingleSkill from '../styled-components/SkillSet/SingleSkill';
import {ThemeProvider} from 'styled-components';
import {ThemeContext} from '../providers/Context';

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
    key: 'sass',
    label: 'Sass',
    image: SassIcon,
    capacity: 78,
    capacityPercent: '78%',
    stopper: 'proud',
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
    key: 'ionic-framework',
    label: 'Ionic',
    image: IonicIcon,
    capacity: 88,
    capacityPercent: '88%',
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
    key: 'redux',
    label: 'Redux',
    image: ReduxIcon,
    capacity: 75,
    capacityPercent: '75%',
    stopper: 'learning',
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
    key: 'mysql',
    label: 'MySQL',
    image: MySQLIcon,
    capacity: 90,
    capacityPercent: '90%',
    stopper: 'proud',
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
    key: 'aws',
    label: 'AWS',
    image: AWSIcon,
    capacity: 66,
    capacityPercent: '66%',
    stopper: 'learning',
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
    key: 'adobe-photoshop',
    label: 'Adobe Photoshop',
    image: PhotoShopIcon,
    capacity: 78,
    capacityPercent: '78%',
    stopper: 'proud',
  },
  {
    key: 'adobe-after-effects',
    label: 'Adobe After Effects',
    image: AfterEffectsIcon,
    capacity: 72,
    capacityPercent: '72%',
    stopper: 'proud',
  },
  {
    key: 'modern-c++',
    label: 'Modern C++',
    image: CppIcon,
    capacity: 21,
    capacityPercent: '21%',
    stopper: 'interested',
  },
  {
    key: 'python',
    label: 'Python',
    image: PythonIcon,
    capacity: 25,
    capacityPercent: '25%',
    stopper: 'learning',
  },
  {
    key: 'ruby-on-rails',
    label: 'Ruby on Rails',
    image: RubyIcon,
    capacity: 8,
    capacityPercent: '8%',
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
