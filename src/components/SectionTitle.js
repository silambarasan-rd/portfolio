import React from 'react';
import SkillsIcon from '../images/section-title/skills-icon.png';
import '../styles/SectionTitle.scss';
import PropTypes from 'prop-types';

const sections = {
  'skills': {
    title: 'Skills',
    sub_title: 'Find all the professional skills',
    icon: SkillsIcon,
    alt: 'Ratatouille (2007) rat clipart for visual representation',
  },
};

const SectionTitle = ({sectionType}) => {
  const currentSectionDetail = sections[sectionType];

  return (
    <>
      <div className="section-title">
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
