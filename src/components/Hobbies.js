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
  return <div className="col-lg-3 col-md-3 col-sm-6 col-6 px-1">
    <div className="hobby-row"
      title={`${hobbyRow.label} | ${hobbyRow.subTitle}`}
    >
      <div className="hobby-icon">
        <img src={hobbyRow.image}
          className="hobby-image" alt={hobbyRow.label}/>
      </div>
      <div className="hobby-detail">
        <h2 className="hobby-title">{hobbyRow.label}</h2>
        { hobbyRow.subTitle &&
           <p className="hobby-sub-title">{hobbyRow.subTitle}</p> }
      </div>
    </div>
  </div>;
};

HobbyRow.propTypes = {
  hobbyRow: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    subTitle: PropTypes.string,
    image: PropTypes.string,
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

              <div className="hobbies-container">
                <div className="row">
                  {
                    hobbyInterests.map((skillRow, i) => {
                      return <HobbyRow hobbyRow={skillRow}
                        key={skillRow.key} />;
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Hobbies;
