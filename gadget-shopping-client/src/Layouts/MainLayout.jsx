import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Shared/NavBar'
import { Footer } from '../components/Shared/Footer'

export const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
