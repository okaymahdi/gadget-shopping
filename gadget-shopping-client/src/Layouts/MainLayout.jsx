import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Shared/NavBar'

export const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
