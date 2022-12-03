import Intro from './components/Intro';
import './App.scss';
import SkillSet from './components/SkillSet';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import NavBar from './components/NavBar';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="portfolio-main">
      <NavBar/>
      <Intro />
      <SkillSet />
      <Experience />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
