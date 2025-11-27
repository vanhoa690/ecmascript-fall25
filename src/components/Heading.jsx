// title= Tour Nội Địa
// in dam, viet hoa, mau xanh, co border o duoi
export default function Heading({ title }) {
  return (
    <div className="text-center">
      <span className="text-4xl font-bold text-blue-500 border-b-2 border-blue-500 uppercase inline-block">
        {title}
      </span>
    </div>
  )
}
