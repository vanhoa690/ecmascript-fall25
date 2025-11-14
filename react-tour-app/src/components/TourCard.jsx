export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
        <div className="flex justify-between text-gray-600 mb-3">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {tour.duration}
          </span>
          <span className="font-bold text-blue-600">{tour.price}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Đặt ngay
        </button>
      </div>
    </div>
  );
}
