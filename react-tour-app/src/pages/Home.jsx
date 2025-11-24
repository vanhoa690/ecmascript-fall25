import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'

function Home() {
  // mock data
  const [tours, setTours] = useState([])

  useEffect(() => {
    console.log('Chạy 1 lần khi mount')
    const getTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/tours')
        setTours(data)
      } catch (error) {
        console.log(error)
      }
    }
    getTours()
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main>
        <Heading title="Tour Nội Địa" />
        <p className="text-xl font-medium my-2 px-2">
          Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biêt, luôn
          sẵn sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách,
          giúp mang đến những chuyến hành trình tuyệt vời.
        </p>
        <div className="flex gap-2">
          {tours.map(tour => (
            <TourCard key={tour.id} title={tour.name} image={tour.image} />
          ))}
        </div>
        <Heading title="Tour Quoc Te" />
      </main>

      <Footer />
    </div>
  )
}

export default Home
