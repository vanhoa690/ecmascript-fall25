// tham so props
// {title: tieu de tour,

import Button from './Button';

// image: hinh anh tour }
function TourCard(props) {
  //   const { title, image } = props;  // desctructing
  return (
    <div>
      <img src={props.image} alt={props.title} width={500} />
      <h3 className="font-semibold">{props.title}</h3>
      {/* goi component Button */}
      <div className="flex justify-around">
        <Button label="Xem chi tiet" />
        <Button label="Dat tour" />
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default TourCard;
