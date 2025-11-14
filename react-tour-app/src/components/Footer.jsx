export default function Footer() {
  return (
    <div className="mt-12 bg-linear-to-r from-blue-500 to-green-500 rounded-xl p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Sẵn sàng cho chuyến phiêu lưu tiếp theo?
      </h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Khám phá hàng trăm tour du lịch hấp dẫn với giá cả hợp lý và dịch vụ
        chất lượng
      </p>
      <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Xem tất cả tour
      </button>
    </div>
  );
}
