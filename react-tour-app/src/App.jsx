import Footer from './components/Footer';
import Header from './components/Header';
import TourCard from './components/TourCard';

function App() {
  const featuredTours = [
    {
      id: 1,
      name: 'Đảo Phú Quốc',
      price: '4.500.000 VND',
      duration: '3 ngày 2 đêm',
      image:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Hạ Long Bay',
      price: '3.200.000 VND',
      duration: '2 ngày 1 đêm',
      image:
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Phố Cổ Hội An',
      price: '2.800.000 VND',
      duration: '2 ngày 1 đêm',
      image:
        'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
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
            <TourCard tour={featuredTours[0]} />
            <TourCard tour={featuredTours[1]} />
            <TourCard tour={featuredTours[2]} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
