import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function ListPage() {
  const [tours, setTours] = useState([])
  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours')
        setTours(data)
      } catch (error) {
        toast.error(error)
      }
    }
    getTours()
  }, [])

  const handleDelete = async id => {
    if (confirm('Delete')) {
      try {
        await axios.delete('http://localhost:30000/tours/' + id)
        setTours(tours.filter(tour => tour.id !== id))
      } catch (error) {
        toast.error(error.message) // error: {} -> message
        console.log(error)
      }
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                First
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Toogle Active
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map(tour => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">Mark</td>
                <td className="px-4 py-2 border border-gray-300">Otto</td>
                <td>
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" id="switch1" />
                    <div class="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-200"></div>
                    <span class="ml-3 text-sm font-medium text-gray-700">
                      Bật / Tắt
                    </span>
                  </label>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-2">
                    <button onClick={() => handleDelete(tour.id)}>
                      Delete
                    </button>
                    <Link to={`/edit/${tour.id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListPage
