export default function Header() {
  return (
    <div className="border-b-2 border-gray-200">
      <nav className="flex justify-between items-center p-4">
        <div className="flex space-x-8">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="mr-2">🏠</span>
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="mr-2">📋</span>
            <span>Tours</span>
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="mr-2">🗺️</span>
            <span>Destinations</span>
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="mr-2">🎫</span>
            <span>Bookings</span>
          </a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Đăng nhập
        </button>
      </nav>
    </div>
  );
}
