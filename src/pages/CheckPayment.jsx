import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CheckPayment() {
  const location = useLocation();
  const [status, setStatus] = useState("success");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(300); // 5 phút = 300 giây
  const [orderCode, setOrderCode] = useState("");
  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);

        const { data } = await axios.get(
          `http://localhost:3000/api/payment/check-payment?${queryParams.toString()}`
        );
        console.log(data);

        if (data.RspCode == "00") {
          setStatus("success");
          setTitle("Thanh toán thành công");
          setMessage(
            "Cảm ơn bạn đã thanh toán. Đơn hàng của bạn đã được xử lý thành công."
          );
          setOrderCode(data.Order || "N/A");
        } else if (data.RspCode == "24") {
          setStatus("error");
          setTitle("Khách hàng hủy thanh toán");
          setMessage("Giao dịch đã bị hủy. Bạn có thể thử thanh toán lại.");
          setOrderCode(data.Order || "N/A");
          startCountdown();
        } else {
          setStatus("error");
          setTitle("Thanh toán thất bại");
          setMessage(
            "Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại."
          );
          setOrderCode(data.Order || "N/A");
          startCountdown();
        }
      } catch (error) {
        console.error("Error checking payment:", error);
        setStatus("error");
        setTitle("Lỗi hệ thống");
        setMessage("Đã có lỗi xảy ra khi kiểm tra trạng thái thanh toán.");
        startCountdown();
      }
    };

    checkPaymentStatus();
  }, [location.search]);

  // Hàm bắt đầu đếm ngược
  const startCountdown = () => {
    setCountdown(300);
  };

  // Effect cho countdown
  useEffect(() => {
    let timer;

    if (status === "error" && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, status]);

  // Định dạng thời gian đếm ngược
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Hàm xử lý thanh toán lại
  const handleRetryPayment = () => {
    if (countdown === 0) {
      window.location.href = `/payment?orderCode=${orderCode}`;
    }
  };

  // Hàm xử lý quay về trang chủ
  const handleGoHome = () => {
    window.location.href = "/";
  };

  // Hàm in hóa đơn
  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div
          className={`${status === "success" ? "bg-green-500" : "bg-red-500"} py-6 px-8`}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="flex-shrink-0">
              {status === "success" ? (
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              <p className="text-white/90 mt-1">
                {status === "success"
                  ? "Giao dịch hoàn tất"
                  : "Vui lòng thử lại"}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-8 px-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">{message}</p>

            {orderCode && (
              <div className="mt-4 inline-block bg-gray-100 rounded-lg px-4 py-2">
                <span className="text-sm text-gray-500">Mã đơn hàng: </span>
                <span className="text-sm font-mono font-bold text-gray-800">
                  {orderCode}
                </span>
              </div>
            )}
          </div>

          {/* Countdown section - chỉ hiển thị khi thất bại */}
          {status === "error" && (
            <div className="mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-yellow-800">
                    Thời gian còn lại để thanh toán lại
                  </span>
                </div>
                <div className="text-3xl font-bold text-yellow-600 font-mono">
                  {formatTime(countdown)}
                </div>
                <p className="text-xs text-yellow-600 mt-2">
                  Sau thời gian này, đơn hàng sẽ tự động hủy
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            {status === "success" ? (
              <>
                <button
                  onClick={handleGoHome}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                  Về trang chủ
                </button>
                <button
                  onClick={handlePrintInvoice}
                  className="w-full border-2 border-green-500 text-green-500 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  In hóa đơn
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleRetryPayment}
                  disabled={countdown > 0}
                  className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform ${
                    countdown > 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner"
                      : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                  }`}
                >
                  {countdown > 0
                    ? `Thử lại sau ${formatTime(countdown)}`
                    : "Thanh toán lại ngay"}
                </button>

                <button
                  onClick={handleGoHome}
                  className="w-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Về trang chủ
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 py-4 px-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Cần hỗ trợ? Liên hệ chúng tôi:
            </p>
            <div className="flex justify-center space-x-6 mt-2">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm text-blue-500 font-medium">
                  1900 1234
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm text-blue-500 font-medium">
                  support@company.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckPayment;
