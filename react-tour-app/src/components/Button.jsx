export default function Button({ label = 'Ten button mac dinh' }) {
  return (
    // props.label
    <button className="bg-amber-400 p-2 font-bold rounded-2xl">{label}</button>
  )
}
