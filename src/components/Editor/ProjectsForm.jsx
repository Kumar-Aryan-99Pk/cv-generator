export default function ProjectsForm({ value, onChange }) {
  return (
    <>
      <label>Projects</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
