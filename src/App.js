import Intro from './components/Intro';
import './App.scss';
import SkillSet from './components/SkillSet';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="portfolio-main">
      <Intro />
      <SkillSet />
    </div>
  );
}

export default App;
