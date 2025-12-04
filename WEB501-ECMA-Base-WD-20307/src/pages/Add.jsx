import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function Add() {
  const [name, setName] = useState('')
  const [cagetory, setCatory] = useState('')
  // const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})
  const validateData = () => {
    let message
    if (!name || !cagetory) {
      message = 'dien thong name, category'
    }
    if (name && name.length < 6) {
      message = 'name lon hon 6'
    }
    if (price && pirce < 0) {
      message = 'name lon hon 6'
    }
    return message
  }
  const handleTourNameChange = e => {
    const value = e.target.value
    setName(value)
    // if (errors.tourName) {
    //   const newErrors = validateTourName(value)
    //   setErrors(newErrors)
    // }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // const newErrors = validateTourName(name)
    // console.log(newErrors)
    // if (Object.keys(newErrors).length === 0) {
    //   console.log('Tour Name:', name)
    // } else {
    //   setErrors(newErrors)
    // }
    const message = validateData()

    if (message) {
      toast.error(message)
      return
    }
    // await axios.post('http://localhost:3000/tours', { name, cagetory })
    toast.success('Add done ')
  }

  // const validateTourName = name => {
  //   const newErrors = {}

  //   if (!name.trim()) {
  //     newErrors.tourName = 'Tour name is required'
  //   }
  //   return newErrors
  // }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Text input */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Tour Name *
          </label>
          <input
            value={name}
            onChange={handleTourNameChange}
            type="text"
            id="name"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.tourName ? 'border-red-500' : ''
            }`}
          />
          {errors.tourName && (
            <p className="text-red-500 text-sm mt-1">{errors.tourName}</p>
          )}
        </div>

        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Select - option
          </label>
          <select
            id="selectOption"
            value={cagetory}
            onChange={e => setCatory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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

export default Add
