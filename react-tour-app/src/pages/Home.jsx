import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'

function Home() {
  // mock data
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Ky',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhat Ban',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ]
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main>
        {/* <h1 className="text-3xl text-blue-600 text-center font-bold border-b-2 border-b-orange-400 uppercase">
          Tour Nội Địa
        </h1> */}
        <Heading title="Tour Nội Địa" />
        <p className="text-xl font-medium my-2 px-2">
          Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biêt, luôn
          sẵn sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách,
          giúp mang đến những chuyến hành trình tuyệt vời.
        </p>
        <div className="flex gap-2">
          {tours.map(tour => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
          ))}
        </div>
        <Heading title="Tour Quoc Te" />
      </main>

      <Footer />
    </div>
  )
}

export default Home
