import React, {useEffect} from 'react';
import Intro from '../../components/Intro';
import SkillSet from '../../components/SkillSet';
import Experience from '../../components/Experience';
import Hobbies from '../../components/Hobbies';
import Contact from '../../components/Contact';
import Education from '../../components/Education';

// eslint-disable-next-line require-jsdoc
function Home() {
  useEffect(() => {
    // Ensure we start at the top on component mount
    window.scrollTo(0, 0);

    return () => {
      // Reset the scroll bar to top, while redirecting to other pages.
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Intro />
      <SkillSet />
      <Experience />
      <Education />
      <Hobbies />
      <Contact />
    </>
  );
}

export default Home;
