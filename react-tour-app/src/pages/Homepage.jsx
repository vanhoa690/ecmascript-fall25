import { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../components/Footer';
import Header from '../components/Header';
import TourCard from '../components/TourCard';

function Homepage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const { data } = await axios.get(' http://localhost:3000/tours');
      setTours(data);
    };
    getAll();
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <Header />
      </div>
      <div className="p-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="mr-3">✈️</span>
            TOUR MANAGEMENT SYSTEM
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những điểm đến tuyệt vời với các tour du lịch chất lượng
            cao và dịch vụ đặt trước dễ dàng
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Tour Nổi Bật
          </h2>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
