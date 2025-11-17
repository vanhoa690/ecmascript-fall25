import Button from './Button'

export default function TourCard(props) {
  return (
    <div>
      <img src={props.image} width={500} alt="" height={300} />
      <h2 className="text-3xl font-bold text-orange-300">{props.title}</h2>
      <div className="flex justify-around">
        <Button label="Xem chi tiet" />
        <Button label="Dat tour" />
      </div>
    </div>
  )
}
