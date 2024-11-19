import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
