import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const greeting = 'Chào mừng đến với React!'
  const name = 'Nguyễn Văn A'
  const age = 20

  const studentId = 'SV001'
  const major = 'Công nghệ Thông tin'

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <p>Đây là component đầu tiên của bạn</p>
      <h1>Xin chào {name}</h1>
      <p>Tuổi: {age + 1}</p>
      <p>Là học viên: {true ? 'Có' : 'Không'}</p>
      <h2>Thông tin sinh viên</h2>
      <p>
        <strong>Họ tên:</strong> {name}
      </p>
      <p>
        <strong>Mã SV:</strong> {studentId}
      </p>
      <p>
        <strong>Ngành học:</strong> {major}
      </p>
    </div>
  )
}

export default App
