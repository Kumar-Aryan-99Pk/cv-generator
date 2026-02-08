export default function ExperienceSection({ data }) {
  if (!data) return null;

  return (
    <div className="section experience-section">
      <h2>Experience</h2>
      <p>{data}</p>
    </div>
  );
}
