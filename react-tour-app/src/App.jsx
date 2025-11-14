function App() {
  const greeting = 'Chào mừng đến với React!'
  const name = 'Nguyễn Văn A'
  const age = 20

  const studentId = 'SV001'
  const major = 'Công nghệ Thông tin'

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-red-400">{greeting}</h1>
      <p>Đây là component đầu tiên của bạn</p>
      <h1 className="my-2">Xin chào {name}</h1>
      <p>Tuổi: {age + 1}</p>
      <p>Là học viên: {true ? 'Có' : 'Không'}</p>
      <h2>Thông tin sinh viên</h2>
      <p>
        <strong>Họ tên:</strong> {name}
      </p>
      <p>
        <strong>Mã SV:</strong> {studentId}
      </p>
      <p className="text-blue-500 font-semibold">
        <strong>Ngành học:</strong> {major}
      </p>
    </div>
  )
}

export default App
