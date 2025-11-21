import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TourCard from '../components/TourCard';
import Button from '../components/Button';

function Home() {
  // mock data
  const [tours, setTours] = useState([]);
  const handleLoadData = () => {
    setTours([
      {
        id: 1,
        title: 'TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG',
        image:
          'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp',
      },
      {
        id: 2,
        title: 'Du lịch thăm thân tại Úc - Mỹ - Canada',
        image:
          'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250528_statue-liberty-large-american-flag-new-york-skyline-background-162323735.webp',
      },
      {
        id: 3,
        title: 'Tự hào nét Việt - Ưu đãi kích cầu du lịch nội địa',
        image:
          'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg',
      },
      {
        id: 4,
        title: 'Tự hào nét Việt 4',
        image:
          'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg',
      },
    ]);
  };

  // click button => show danh sach tours
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {/* <Button label="Load data" onClick={handleLoadData} /> */}
      <button onClick={handleLoadData}>Load data</button>
      <main>
        <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
          Khám phá sản phẩm ECMA-WD20306
        </h1>
        <p className="text-md font-medium text-center">
          Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn
          những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết
          mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo
          cách hoàn hảo nhất.
        </p>
        <div className="flex gap-2 my-4">
          {tours.map(tour => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
