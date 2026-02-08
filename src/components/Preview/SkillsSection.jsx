export default function SkillsSection({ data }) {
  if (!data) return null;

  return (
    <div className="section skills-section">
      <h2>Skills</h2>
      <p>{data}</p>
    </div>
  );
}
