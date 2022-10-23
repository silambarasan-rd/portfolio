import React from 'react';
import SkillsIcon from '../images/section-title/skills-icon.png';
import ExperienceIcon from '../images/section-title/experience-icon.png';
import HobbiesIcon from '../images/section-title/hobbies-icon.png';
import ContactIcon from '../images/section-title/contact-icon.png';
import '../styles/SectionTitle.scss';
import PropTypes from 'prop-types';

const sections = {
  'skills': {
    title: 'Skills',
    sub_title: 'Find all the professional skills',
    icon: SkillsIcon,
    alt: 'Ratatouille (2007) rat clipart for visual representation',
  },
  'experience': {
    title: 'Experience',
    sub_title: 'Know more about the previous work history!',
    icon: ExperienceIcon,
    alt: 'God of War - Kratos clipart for visual representation',
  },
  'hobbies': {
    title: 'Hobbies',
    sub_title: 'More on the Hobbies & Interests',
    icon: HobbiesIcon,
    alt: 'Wall-E - Robot clipart for visual representation',
  },
  'contact': {
    title: 'Contact',
    sub_title: 'Get in touch with me!',
    icon: ContactIcon,
    alt: 'Boss Baby - Baby clipart for visual representation',
  },
};

const SectionTitle = ({sectionType}) => {
  const currentSectionDetail = sections[sectionType];

  return (
    <>
      <div className={`section-title ${sectionType}`}>
        <h2>{ currentSectionDetail.title }</h2>
        <p>{ currentSectionDetail.sub_title }</p>
        <img src={ currentSectionDetail.icon }
          alt={ currentSectionDetail.alt }/>
      </div>
    </>
  );
};

SectionTitle.propTypes = {
  sectionType: PropTypes.oneOf(
      ['skills', 'experience', 'hobbies', 'contact'],
  ).isRequired,
};

export default SectionTitle;
