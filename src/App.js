import Intro from './components/Intro';
import './App.scss';
import SkillSet from './components/SkillSet';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import BackToTop from './components/BackToTop';
import Education from './components/Education';
import {useState} from 'react';
import {ThemeContext} from './providers/Context';

const APP_THEME_STORAGE_KEY = 'APP_THEME';

// eslint-disable-next-line require-jsdoc
function App() {
  const getSystemTheme = () => {
    const storedTheme = localStorage.getItem(APP_THEME_STORAGE_KEY);

    if (storedTheme) {
      return storedTheme;
    }

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      // Theme set to dark.
      localStorage.setItem(APP_THEME_STORAGE_KEY, 'dark');
      return 'dark';
    } else {
      // Theme set to light.
      localStorage.setItem(APP_THEME_STORAGE_KEY, 'light');
      return 'light';
    }
  };

  const changeCurrentTheme = (chosenTheme) => {
    localStorage.setItem(APP_THEME_STORAGE_KEY, chosenTheme);
    setTheme(chosenTheme);
  };

  const [theme, setTheme] = useState(() => {
    return getSystemTheme();
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`portfolio-main ${theme}`}>
        <NavBar changeCurrentTheme={changeCurrentTheme} />
        <Intro />
        <SkillSet />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
