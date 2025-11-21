export default function Button({ label = 'Default Lable', onClick }) {
  // destructring object props : {label}
  return (
    <button
      onClick={onClick}
      className="bg-amber-300 px-2 border-0 rounded-2xl"
    >
      {label}
    </button>
  );
}
