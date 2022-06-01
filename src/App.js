import './App.css';
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillList';

function App() {
  
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList></SkillList>
      <hr></hr>
      <NewSkillForm></NewSkillForm>
    </div>
  );
}

export default App;
