import React, {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import '../styles/BackToTop.scss';
import {ThemeContext} from '../providers/Context';
import {motion, AnimatePresence} from 'framer-motion';

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
    <div className='back-to-top-container'>
      <AnimatePresence>
        {visible && (
          <motion.button
            className={`back-to-top btn btn-${
              currentTheme === 'dark' ? 'light' : 'dark'
            }`}
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: 180,
              y: 30,
              x: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.5,
              ease: 'backOut',
              rotate: {
                duration: 0.6,
                ease: 'easeInOut',
              },
            }}
            whileHover={{
              scale: 1.15,
              y: -5,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FontAwesomeIcon
              icon={faArrowCircleUp}
              color={currentTheme === 'dark' ? '#000' : '#fff'}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTop;
