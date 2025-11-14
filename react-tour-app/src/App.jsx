function App() {
  // JSX: HTML + JS nam trong return boc trong 1 the bat ky <></>
  const name = 'hoadv';
  const age = 20;
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
        ✈️ TOUR MANAGEMENT SYSTEM
      </h1>
      <h2 className="uppercase text-center text-2xl font-semibold">
        Khám phá sản phẩm vietravel
      </h2>
      <p className="text-md font-medium text-center">
        Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những
        khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết mang đến
        những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo
        nhất.
      </p>
      <div className="flex gap-2 my-4">
        <div>
          <img
            src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp"
            alt=""
          />
          <h3>TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG</h3>
        </div>
        <div>
          <img
            src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp"
            alt=""
          />
          <h3>TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG</h3>
        </div>
        <div>
          <img
            src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp"
            alt=""
          />
          <h3>TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
