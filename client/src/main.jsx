import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import HeroSection from './components/HeroSection'
import SermonCard from './components/SermonCard'
import EventList from './components/EventList'
import './css/main.css'

// Initialize AOS for scroll animations
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  // Sample data - replace with your actual content
  const sermons = [
    {
      title: "Walking in Faith",
      date: "March 15, 2024",
      scripture: "Hebrews 11:1",
      image: "/images/sermon-1.jpg"
    },
    {
      title: "The Power of Prayer",
      date: "March 22, 2024",
      scripture: "Philippians 4:6-7",
      image: "/images/sermon-2.jpg"
    }
  ]

  const events = [
    {
      day: "20",
      month: "MAR",
      title: "Community Prayer Night",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary"
    },
    {
      day: "24",
      month: "MAR",
      title: "Sunday Morning Worship",
      time: "10:00 AM - 12:00 PM",
      location: "Fellowship Hall"
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="ministry-app">
      <HeroSection />
      
      <section className="section" data-aos="fade-up">
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl text-center mb-12">Latest Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sermons.map((sermon, index) => (
              <SermonCard
                key={index}
                title={sermon.title}
                date={sermon.date}
                scripture={sermon.scripture}
                image={sermon.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto">
            <EventList events={events} />
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Frank Cooper Ministries</p>
          <div className="flex justify-center space-x-6">
            <a href="/about" className="hover:text-secondary transition-colors">
              About Us
            </a>
            <a href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
            <a href="/give" className="hover:text-secondary transition-colors">
              Give
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Create root and render
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)