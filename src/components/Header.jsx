import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-bottom">
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none text-dark">
          <h1 className="h5 m-0">Casa Pame</h1>
        </Link>

        <nav className="d-flex gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? 'fw-semibold' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `text-decoration-none ${isActive ? 'fw-semibold' : ''}`
            }
          >
            Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  )
}