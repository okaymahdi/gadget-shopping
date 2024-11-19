import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-medium text-Blue">
          Gadget<span className="text-Red">Shoppping</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <Link to="/login">
            <button
              type="submit"
              className="btn bg-black text-gray-50 py-2 px-4 rounded-md border border-black hover:border-black outline-none hover:bg-gray-50 hover:text-black transition-all duration-1000 delay-75 ease-in-out"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="submit"
              className="btn bg-Red text-gray-50 py-2 px-4 rounded-md border border-Red hover:border-Red outline-none hover:bg-gray-50 hover:text-Red transition-all duration-1000 delay-75 ease-in-out"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
