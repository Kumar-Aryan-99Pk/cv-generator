import PersonalInfoSection from "./PersonalInfoSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";

export default function CVPreview({
  personalinfo,
  education,
  experience,
  skills,
  projects
}) {
  return (
    <div className="cv-preview">
      <PersonalInfoSection data={personalinfo} />
      <EducationSection data={education} />
      <ExperienceSection data={experience} />
      <SkillsSection data={skills} />
      <ProjectSection data={projects} />
    </div>
  );
}
