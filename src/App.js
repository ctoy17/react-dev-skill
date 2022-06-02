import './App.css';
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillList';

function App() {
  const skills = [
    {name: "HTML", level: 5},
    {name: "CSS", level: 3},
    {name: "JavaScript", level: 4},
    {name: "Python", level: 2},
  ];
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr></hr>
      <NewSkillForm/>
    </div>
  );
}

export default App;
