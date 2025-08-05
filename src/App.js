import './App.scss';
import {useState, useEffect} from 'react';
import {ThemeContext} from './providers/Context';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import PageLayout from './layouts/PageLayout';
import {motion, AnimatePresence} from 'framer-motion';

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

  const [theme, setTheme] = useState(() => {
    return getSystemTheme();
  });
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const changeCurrentTheme = (chosenTheme) => {
    setIsThemeChanging(true);

    // Small delay to show transition effect
    setTimeout(() => {
      localStorage.setItem(APP_THEME_STORAGE_KEY, chosenTheme);
      setTheme(chosenTheme);

      // Reset transition state after theme change
      setTimeout(() => {
        setIsThemeChanging(false);
      }, 300);
    }, 150);
  };

  // Prevent browser scroll restoration on page refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Ensure page starts at top
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <motion.div
        className={`portfolio-main ${theme}`}
        key={theme}
        initial={{opacity: 0.8}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <AnimatePresence mode="wait">
          {isThemeChanging && (
            <motion.div
              className="theme-transition-overlay"
              initial={{opacity: 0}}
              animate={{opacity: 0.1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: theme === 'dark' ? '#0b1115' : '#9EB3C2',
                zIndex: 9999,
                pointerEvents: 'none',
              }}
            />
          )}
        </AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route element={
              <PageLayout pageType="home"
                changeTheme={changeCurrentTheme} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={
              <PageLayout pageType="others"
                changeTheme={changeCurrentTheme} />}>
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </motion.div>
    </ThemeContext.Provider>
  );
}

export default App;
