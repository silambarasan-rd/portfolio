import './App.scss';
import {useState} from 'react';
import {ThemeContext} from './providers/Context';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import PageLayout from './layouts/PageLayout';

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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
