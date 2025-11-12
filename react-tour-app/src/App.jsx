import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const greeting = 'Chào mừng đến với React!'
  const name = 'Nguyễn Văn A'
  const age = 20
  return (
    <div className="container">
      <h1>{greeting}</h1>
      <p>Đây là component đầu tiên của bạn</p>
      <h1>Xin chào {name}</h1>
      <p>Tuổi: {age + 1}</p>
      <p>Là học viên: {true ? 'Có' : 'Không'}</p>
      <button>Xem chi tiet tour</button>
      {/* Tour Card */}
    </div>
  )
}

export default App
