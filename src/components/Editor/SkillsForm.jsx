export default function SkillsForm({ value, onChange }) {
  return (
    <>
      <label>Skills</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
