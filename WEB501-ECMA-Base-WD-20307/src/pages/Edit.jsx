import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function EditPage() {
  const { id } = useParams()
  console.log(id)
  const [name, setName] = useState('')
  const [cagetory, setCatory] = useState('')

  const [errors, setErrors] = useState({})
  useEffect(() => {
    const getTour = async id => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours/' + id)
        setName(data.name)
        setCatory(data.cagetory)
      } catch (error) {
        console.log(error)
      }
    }
    getTour(id)
  }, [id])

  const handleTourNameChange = e => {
    const value = e.target.value
    setName(value)
    if (errors.tourName) {
      const newErrors = validateTourName(value)
      setErrors(newErrors)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newErrors = validateTourName(name)
    console.log(newErrors)
    if (Object.keys(newErrors).length === 0) {
      console.log('Tour Name:', name)
    } else {
      setErrors(newErrors)
    }
    await axios.put('http://localhost:3000/tours/' + id, { name, cagetory })
    toast.success('Add done ')
  }

  const validateTourName = name => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.tourName = 'Tour name is required'
    }
    return newErrors
  }
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

export default EditPage
