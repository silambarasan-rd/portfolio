import Intro from './components/Intro';
import './App.scss';
import SkillSet from './components/SkillSet';
import Experience from './components/Experience';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="portfolio-main">
      <Intro />
      <SkillSet />
      <Experience />
    </div>
  );
}

export default App;
