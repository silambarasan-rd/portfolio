import React from 'react';
import SkillsIcon from '../images/section-title/skills-icon.png';
import ExperienceIcon from '../images/section-title/experience-icon.png';
import EducationIcon from '../images/section-title/education-icon.png';
import HobbiesIcon from '../images/section-title/hobbies-icon.png';
import ContactIcon from '../images/section-title/contact-icon.png';
import '../styles/SectionTitle.scss';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

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
  'education': {
    title: 'Education',
    sub_title: 'Basic detail about of educational history',
    icon: EducationIcon,
    alt: 'Zootopia - Sheep with books',
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

// Text morphing animation component
const TextMorphing = ({text, delay = 0}) => {
  return (
    <motion.div
      initial={{
        scaleX: 0.3,
        scaleY: 1.5,
        skewX: 15,
        opacity: 0,
        filter: 'blur(8px)',
      }}
      whileInView={{
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      viewport={{once: true}}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        scaleX: {duration: 0.8, ease: 'backOut'},
        scaleY: {duration: 0.6, ease: 'easeOut'},
        skewX: {duration: 1, ease: 'easeInOut'},
        filter: {duration: 0.5, delay: delay + 0.3},
      }}
      style={{
        display: 'inline-block',
        transformOrigin: 'center',
      }}
    >
      {text}
    </motion.div>
  );
};

TextMorphing.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

// Letter-by-letter animation component
const LetterByLetter = ({text, delay = 0}) => {
  const letters = text.split('');

  return (
    <motion.div
      variants={{
        hidden: {opacity: 0},
        visible: {
          opacity: 1,
          transition: {staggerChildren: 0.05, delayChildren: delay},
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      style={{display: 'inline-block'}}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {opacity: 1, y: 0},
          }}
          style={{display: 'inline-block'}}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

LetterByLetter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const SectionTitle = ({sectionType}) => {
  const currentSectionDetail = sections[sectionType];

  return (
    <>
      <motion.div
        className={`section-title ${sectionType}`}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6}}
      >
        <h2>
          <TextMorphing
            text={currentSectionDetail.title}
            delay={0.3}
          />
        </h2>
        <p>
          <TextMorphing
            text={currentSectionDetail.sub_title}
            delay={0.7}
          />
        </p>
        <motion.img
          src={ currentSectionDetail.icon }
          alt={ currentSectionDetail.alt }
          initial={{
            x: -80,
            opacity: 0,
            scale: 0.3,
            filter: 'blur(4px)',
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          viewport={{once: true}}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: 'backOut',
            scale: {duration: 0.6, ease: 'backOut'},
            filter: {duration: 0.5},
          }}
        />
      </motion.div>
    </>
  );
};

SectionTitle.propTypes = {
  sectionType: PropTypes.oneOf(
      ['skills', 'experience', 'education', 'hobbies', 'contact'],
  ).isRequired,
};

export default SectionTitle;
