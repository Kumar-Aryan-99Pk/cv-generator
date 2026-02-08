import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import EducationForm from './components/Editor/EducationForm.jsx'
import ExperienceForm from './components/Editor/ExperienceForm.jsx';
import PersonalInfoForm from './components/Editor/PersonalInfoForm.jsx';
import ProjectsForm from './components/Editor/ProjectsForm.jsx';
import SkillsForm from './components/Editor/SkillsForm.jsx';
function App() {
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [personalinfo, setPersonalInfo] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");
   return (
    <>
    <Header/>
    <div className="main-container">
        <div className="editor">

      <h4 className='editor-title'>EDITOR</h4>
      <PersonalInfoForm
          value={personalinfo}
          onChange={setPersonalInfo}
        />
      <EducationForm
        value={education}
        onChange={setEducation}
      />
      <SkillsForm
        value={skills}
        onChange={setSkills}
      />
      <ExperienceForm
        value={experience}
        onChange={setExperience}
      />
      
      <ProjectsForm
        value={projects}
        onChange={setProjects}
      />
      </div>

      <div className="preview">
        
      </div>
    </div>
      
    </>
  );
}

export default App
