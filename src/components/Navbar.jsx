import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    
    { path: '/', label: 'About', hash: '#about' },
    { path: '/', label: 'Achievements', hash: '#achievements' },
    { path: '/', label: 'TechStack', hash: '#techstack' },
    { path: '/', label: 'Contact', hash: '#contact' },
    { path: '/blog', label: 'Blog & Notes', hash: '' }
  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('light-mode')
  }

  const handleNavClick = (path, hash) => {
    if (path === '/blog') {
      // Navigate to blog page
      navigate('/blog')
    } else if (hash) {
      // Scroll to section on home page
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // Navigate to home
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const isActive = (path, hash) => {
    if (path === '/blog') {
      return location.pathname === '/blog'
    }
    if (hash) {
      return location.pathname === '/' && window.location.hash === hash
    }
    return location.pathname === path && !window.location.hash
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo - Acts as Home button */}
        <div 
          className="navbar-brand" 
          onClick={() => handleNavClick('/', '')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-3d">
            <span className="gradient-text">ADARSH</span>
            <div className="logo-glow"></div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-link ${isActive(item.path, item.hash) ? 'active' : ''}`}
              onClick={() => handleNavClick(item.path, item.hash)}
            >
              <span className="nav-text">{item.label}</span>
              <div className="nav-underline"></div>
            </button>
          ))}
        </div>

        {/* Right Side - Dark/Light Mode Toggle */}
        <div className="nav-right">
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="toggle-circle"></div>
              <span className="moon">🌙</span>
              <span className="sun">☀️</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`mobile-nav-link ${isActive(item.path, item.hash) ? 'active' : ''}`}
            onClick={() => handleNavClick(item.path, item.hash)}
          >
            {item.label}
          </button>
        ))}
        <div className="mobile-theme-toggle">
          <button 
            className="dark-mode-toggle mobile"
            onClick={toggleDarkMode}
          >
            <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="toggle-circle"></div>
              <span className="moon">🌙</span>
              <span className="sun">☀️</span>
            </div>
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar