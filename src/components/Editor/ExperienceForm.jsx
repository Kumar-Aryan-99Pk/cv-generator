export default function ExperienceForm({ value, onChange }) {
  return (
    <>
      <label>Experience</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
