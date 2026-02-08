export default function EducationForm({ value, onChange }) {
  return (
    <>
      <label>Education</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
