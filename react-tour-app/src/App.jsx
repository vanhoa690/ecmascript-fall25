import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VNPayPaymentPage from './pages/Payment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<VNPayPaymentPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
