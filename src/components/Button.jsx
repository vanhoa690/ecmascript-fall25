export default function Button({ label = 'Ten button mac dinh', onClick }) {
  return (
    // props.label
    <button
      onClick={onClick}
      className="bg-amber-400 p-2 font-bold rounded-2xl"
    >
      {label}
    </button>
  )
}
