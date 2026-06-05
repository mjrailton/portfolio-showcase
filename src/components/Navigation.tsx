import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="MJR Studio" className="logo-image" />
          <span className="logo-text">MJR Studio</span>
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/case-study/elevate-dance-academy" 
              className={`nav-link ${isActive('/case-study/elevate-dance-academy') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Elevate Dance
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/case-study/blush-and-bloom" 
              className={`nav-link ${isActive('/case-study/blush-and-bloom') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Blush & Bloom
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
