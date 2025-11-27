import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import About from "./pages/About";
import VNPayPaymentPage from "./pages/Payment";
import CheckPayment from "./pages/CheckPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<VNPayPaymentPage />} />
        <Route path="/checkpayment" element={<CheckPayment />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
export default App;
