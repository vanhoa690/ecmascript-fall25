export default function TourCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
    </div>
  )
}
