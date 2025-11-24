import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TourCard from '../components/TourCard';

function Home() {
  // mock data
  const [tours, setTours] = useState([]);

  useEffect(() => {
    console.log("Chạy 1 lần khi mount");
    const getTours = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/tours")
      setTours(res.data)
    } catch (error) {
      console.log(error);
    }
    }
    getTours()
}, []); // chay 1 lan duy nhat khi truyen []
 
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {/* <Button label="Load data" onClick={handleLoadData} /> */}
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
            <TourCard key={tour.id} title={tour.name} image={tour.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
