export default function PersonalInfoForm({ value, onChange }) {
  return (
    <>
      <label>Personal Info</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
