export default function EducationSection({ data }) {
  if (!data) return null;

  return (
    <div className="section education-section">
      <h2>Education</h2>
      <p>{data}</p>
    </div>
  );
}
