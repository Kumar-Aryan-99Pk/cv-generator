export default function ProjectsSection({ data }) {
  if (!data) return null;

  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <p>{data}</p>
    </div>
  );
}
