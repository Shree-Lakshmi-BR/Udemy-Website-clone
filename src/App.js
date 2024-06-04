// import logo from './logo.svg';
import Carousel from './components/Carousel';
import './App.css';
import Navbar from './components/Navbar';
import SkillHeadPart from './components/SkillHeadPart';
import CourseList from './components/CourseList';
import CoursesCarts from './components/CoursesCarts';
import Companies from './components/Companies';
import Containerization from './components/Containerization';
import PricePlan from './components/PricePlan';
import LeftOut from './components/LeftOut';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <SkillHeadPart/>
      <CourseList/>
      <CoursesCarts/>
      <Companies/>
      <Containerization/>
      <PricePlan/>
      <LeftOut/>  
    </div>
  );
}

export default App;
