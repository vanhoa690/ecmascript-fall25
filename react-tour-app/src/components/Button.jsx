export default function Button({ label = 'Default Lable' }) {
  // destructring object props : {label}
  return (
    <button className="bg-amber-300 px-2 border-0 rounded-2xl">{label}</button>
  );
}
