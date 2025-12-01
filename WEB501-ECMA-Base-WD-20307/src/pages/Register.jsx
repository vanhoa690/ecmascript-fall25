import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    await axios.post('http://localhost:3000/register', { email, password })
    toast.success('Add done ')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email *
          </label>
          <input
            value={email}
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password *
          </label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
