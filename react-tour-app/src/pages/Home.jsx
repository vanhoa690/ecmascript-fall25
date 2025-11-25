import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Home = () => {
  // Sample data for movies and combos
  const [movies] = useState([
    { id: 1, title: 'Avengers: Endgame', price: 85000, quantity: 2 },
    { id: 2, title: 'Spider-Man: No Way Home', price: 90000, quantity: 1 },
  ])

  const [combos] = useState([
    { id: 1, name: 'Combo A: Bắp + Coca', price: 65000, quantity: 1 },
    { id: 2, name: 'Combo B: 2 Bắp + 2 Coca', price: 120000, quantity: 1 },
  ])

  const [paymentInfo, setPaymentInfo] = useState({
    customerName: '',
    email: '',
    phone: '',
    paymentMethod: 'vnpay',
  })

  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate totals
  const movieTotal = movies.reduce(
    (sum, movie) => sum + movie.price * movie.quantity,
    0
  )
  const comboTotal = combos.reduce(
    (sum, combo) => sum + combo.price * combo.quantity,
    0
  )
  const totalAmount = movieTotal + comboTotal

  const handleInputChange = e => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePayment = () => {
    setIsProcessing(true)
    toast.success('OK ')
    setTimeout(() => {
      setIsProcessing(false)

      // window.location.href = vnpayPaymentUrl;
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">Thanh Toán VNPay</h1>
          <p className="mt-2">Hoàn tất đơn hàng của bạn</p>
        </div>

        <div className="p-6">
          {/* Order Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Thông Tin Đơn Hàng
            </h2>

            {/* Movie Tickets */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Vé Xem Phim
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {movies.map(movie => (
                  <div
                    key={movie.id}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium">{movie.title}</p>
                      <p className="text-sm text-gray-500">
                        Số lượng: {movie.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {movie.price.toLocaleString('vi-VN')} VND
                    </p>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-300">
                  <p className="font-medium">Tổng tiền vé</p>
                  <p className="font-medium">
                    {movieTotal.toLocaleString('vi-VN')} VND
                  </p>
                </div>
              </div>
            </div>

            {/* Combo Items */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Combo Bắp Nước
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {combos.map(combo => (
                  <div
                    key={combo.id}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium">{combo.name}</p>
                      <p className="text-sm text-gray-500">
                        Số lượng: {combo.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {combo.price.toLocaleString('vi-VN')} VND
                    </p>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-300">
                  <p className="font-medium">Tổng tiền combo</p>
                  <p className="font-medium">
                    {comboTotal.toLocaleString('vi-VN')} VND
                  </p>
                </div>
              </div>
            </div>

            {/* Total Amount */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-gray-800">
                  Tổng Thanh Toán
                </p>
                <p className="text-xl font-bold text-blue-600">
                  {totalAmount.toLocaleString('vi-VN')} VND
                </p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Thông Tin Khách Hàng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và Tên *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={paymentInfo.customerName || 'hoadv'}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={paymentInfo.email || 'hoadv@gmail.com'}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số Điện Thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={paymentInfo.phone || '0987654321'}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Phương Thức Thanh Toán
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="vnpay"
                  name="paymentMethod"
                  value="vnpay"
                  checked={paymentInfo.paymentMethod === 'vnpay'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="vnpay"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Thanh toán qua VNPay
                </label>
              </div>
              <div className="mt-2 ml-7">
                <img src="/vnpay-logo.png" alt="VNPay" className="h-8" />
                <p className="text-sm text-gray-500 mt-1">
                  Thanh toán an toàn và bảo mật với VNPay
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="zalopay"
                  name="paymentMethod"
                  value="zalopay"
                  checked={paymentInfo.paymentMethod === 'zalopay'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="zalopay"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Thanh toán qua ZaloPay
                </label>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="flex justify-end">
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`px-6 py-3 rounded-md font-medium text-white ${isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors duration-200 flex items-center`}
            >
              {isProcessing ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Đang xử lý...
                </>
              ) : (
                `Thanh Toán ${totalAmount.toLocaleString('vi-VN')} VND`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
