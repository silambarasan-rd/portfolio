import React, {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import '../styles/BackToTop.scss';
import {ThemeContext} from '../providers/Context';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const currentTheme = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="back-to-top-container">
      {visible ? <button
        className={
          `back-to-top btn btn-${currentTheme === 'dark' ? 'light' : 'dark'}`}
        onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowCircleUp}
          color={currentTheme === 'dark' ? '#000' : '#fff'}/>
      </button> : null}
    </div>
  );
};

export default BackToTop;
