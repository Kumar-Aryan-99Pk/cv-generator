import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import EducationForm from './components/Editor/EducationForm.jsx'
import ExperienceForm from './components/Editor/ExperienceForm.jsx';
import PersonalInfoForm from './components/Editor/PersonalInfoForm.jsx';
import ProjectsForm from './components/Editor/ProjectsForm.jsx';
import SkillsForm from './components/Editor/SkillsForm.jsx';
import CVPreview from './components/Preview/CVPreview.jsx';
function App() {
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");

  const [cvData, setCvData] = useState({
    personal: {},
    education: [],
    experience: [],
    skills: [],
    projects: []
  });

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="editor">

          <h4 className='editor-title'>EDITOR</h4>
          <PersonalInfoForm
            value={personalInfo}
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
          <CVPreview
            personalinfo={personalInfo}
            education={education}
            skills={skills}
            experience={experience}
            projects={projects}
          />

        </div>
      </div>

    </>
  );
}

export default App
