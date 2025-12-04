import React from 'react';
import '../styles/Home/Hobbies.scss';
import ListenMusicIcon from '../images/hobbies/listen-music.jpg';
import GuitarIcon from '../images/hobbies/playing-guitar.jpg';
import PencilSketchIcon from '../images/hobbies/pencil-sketch.jpg';
import YogaIcon from '../images/hobbies/yoga.jpg';
import ExerciseIcon from '../images/hobbies/exercise.jpg';
import PcGamingIcon from '../images/hobbies/pc-gaming.jpg';
import BookReadingIcon from '../images/hobbies/read-books.jpg';
import CraftWorksIcon from '../images/hobbies/craft-works.jpg';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Scroll from 'react-scroll';
import {motion} from 'framer-motion';

const hobbyInterests = [
  {
    key: 'pencil-sketching',
    label: 'Pencil Sketch',
    subTitle: 'Drawing outlines and adding higlights/shadows to it',
    image: PencilSketchIcon,
  },
  {
    key: 'guitar-playing-learning',
    label: 'Guitar',
    subTitle: 'Playing guitar by learning thru Online',
    image: GuitarIcon,
  },
  {
    key: 'listening-music',
    label: 'Listening Music',
    subTitle: 'Listening to music',
    image: ListenMusicIcon,
  },
  {
    key: 'yoga',
    label: 'Yoga',
    subTitle: 'Pranayama, Butterfly pose, Cat-cow stretch, etc.,',
    image: YogaIcon,
  },
  {
    key: 'exercise',
    label: 'Exercise',
    subTitle: 'Push-ups, Skipping, Running',
    image: ExerciseIcon,
  },
  {
    key: 'pc-gaming',
    label: 'PC Gaming',
    subTitle: 'Prince of Persia, NFS, RDR2, GOW and etc.,',
    image: PcGamingIcon,
  },
  {
    key: 'reading-books',
    label: 'Book Reading',
    subTitle: 'Loves to read adventure books, Ex: Alchemist',
    image: BookReadingIcon,
  },
  {
    key: 'craft-works',
    label: 'Art & Craft',
    subTitle: 'Making own Bday cards, etc.,',
    image: CraftWorksIcon,
  },
];

const HobbyRow = ({hobbyRow}) => {
  return (
    <motion.div
      className='col-lg-3 col-md-3 col-sm-6 col-6 px-1'
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
    >
      <motion.div
        className='hobby-row'
        title={`${hobbyRow.label} | ${hobbyRow.subTitle}`}
        whileHover={{y: -5}}
        transition={{type: 'spring', stiffness: 300}}
      >
        <motion.div
          className='hobby-icon'
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.2}}
        >
          <motion.img
            src={hobbyRow.image}
            className='hobby-image'
            alt={hobbyRow.label}
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
          />
        </motion.div>
        <motion.div
          className='hobby-detail'
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.4, delay: 0.2}}
        >
          <motion.h2
            className='hobby-title'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.2}}
          >
            {hobbyRow.label}
          </motion.h2>
          {hobbyRow.subTitle && (
            <motion.p
              className='hobby-sub-title'
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 0.3, delay: 0.2}}
            >
              {hobbyRow.subTitle}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

HobbyRow.propTypes = {
  hobbyRow: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const Hobbies = () => {
  return (
    <Scroll.Element name="hobbies-section">
      <div className="hobbies-section">
        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <SectionTitle sectionType="hobbies" />

              <motion.div
                className='hobbies-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
              >
                <div className='row'>
                  {hobbyInterests.map((hobbyRow, index) => (
                    <motion.div
                      key={hobbyRow.key}
                      initial={{opacity: 0, scale: 0.9}}
                      whileInView={{opacity: 1, scale: 1}}
                      viewport={{once: true}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                      }}
                      className='col-lg-3 col-md-3 col-sm-6 col-6 px-1'
                    >
                      <motion.div
                        className='hobby-row'
                        title={`${hobbyRow.label} | ${hobbyRow.subTitle}`}
                        whileHover={{y: -5}}
                        transition={{type: 'spring', stiffness: 300}}
                      >
                        <motion.div
                          className='hobby-icon'
                          initial={{opacity: 0, scale: 0.8}}
                          whileInView={{opacity: 1, scale: 1}}
                          viewport={{once: true}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.2,
                          }}
                        >
                          <motion.img
                            src={hobbyRow.image}
                            className='hobby-image'
                            alt={hobbyRow.label}
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.2}}
                          />
                        </motion.div>
                        <motion.div
                          className='hobby-detail'
                          initial={{opacity: 0}}
                          whileInView={{opacity: 1}}
                          viewport={{once: true}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.2,
                          }}
                        >
                          <motion.h2
                            className='hobby-title'
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.2,
                              ease: 'easeOut',
                            }}
                          >
                            {hobbyRow.label}
                          </motion.h2>
                          {hobbyRow.subTitle && (
                            <motion.p
                              className='hobby-sub-title'
                              initial={{opacity: 0, x: -20}}
                              whileInView={{opacity: 1, x: 0}}
                              viewport={{once: true}}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.2 + 0.2,
                                ease: 'easeOut',
                              }}
                            >
                              {hobbyRow.subTitle}
                            </motion.p>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Hobbies;
