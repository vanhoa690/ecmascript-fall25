// tham so props
// {title: tieu de tour,
// image: hinh anh tour }
function TourCard(props) {
  //   const { title, image } = props;  // desctructing
  return (
    <div>
      <img src={props.image} alt={props.title} width={500} />
      <h3 className="font-semibold">{props.title}</h3>
      {/* goi component Button */}
      {/* button Xem them */}
      {/* button Dat tour */}
    </div>
  );
}

export default TourCard;
