import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

function List() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours')
        setTours(data)
      } catch (error) {
        console.log(error)
      }
    }
    getTours()
  }, [])
  const handleDelete = async id => {
    if (window.confirm('Delete')) {
      try {
        await axios.delete('http://localhost:3000/tours/' + id)
        setTours(tours.filter(tour => tour.id !== id))
        toast.success('Delete successfull')
      } catch (error) {
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
                Last
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Handle
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map(tour => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt="" width={300} />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    className="bg-red-400 px-2 rounded-2xl text-white font-bold"
                    onClick={() => handleDelete(tour.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List
