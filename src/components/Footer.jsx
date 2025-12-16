import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: import.meta.env.VITE_GITHUB_URL, icon: '💻' },
    { name: 'LinkedIn', url:import.meta.env.VITE_LINKEDIN_URL, icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' }
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/#techstack', label: 'TechStack' },
    { path: '/projects', label: 'Projects' },
    { path: '/#achievements', label: 'Achievements' },
    { path: '/blog', label: 'Blog' }
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Technical Consultation',
    'Project Review',
    'Career Guidance'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="logo-3d">
                <span className="gradient-text">Adarsh Kumar</span>
                <div className="logo-glow"></div>
              </div>
              <p className="footer-description">
                Full Stack Developer creating digital experiences that inspire and innovate. 
                Let's build something amazing together.
              </p>
              <div className="social-links">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <div className="social-glow"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <p>Email</p>
                <a 
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} 
                  className="contact-link"
                >
                  {import.meta.env.VITE_CONTACT_EMAIL }
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <p>Phone</p>
                <a 
                  href={`tel:${import.meta.env.VITE_CONTACT_PHONE }`} 
                  className="contact-link"
                >
                  {import.meta.env.VITE_CONTACT_PHONE }
                </a>
              </div>
            </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p>Location</p>
                  <span>Based in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p>&copy; {currentYear} Adarsh Kumar. All rights reserved.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(8, 8, 16, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid var(--glass-border);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          color: var(--light);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-description {
          opacity: 0.8;
          line-height: 1.6;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          position: relative;
          width: 50px;
          height: 50px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--light);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .social-link:hover {
          transform: translateY(-3px);
          background: var(--primary);
          box-shadow: 0 10px 25px rgba(123, 97, 255, 0.3);
        }

        .social-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .social-link:hover .social-glow {
          left: 100%;
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          color: var(--light);
          opacity: 0.8;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--secondary);
          padding-left: 10px;
        }

        .footer-link::before {
          content: '›';
          position: absolute;
          left: -10px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .footer-link:hover::before {
          left: 0;
          opacity: 1;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .contact-item:hover {
          opacity: 1;
        }

        .contact-icon {
          font-size: 1.1rem;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--glass);
          border-radius: 50%;
        }

        .contact-item p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .contact-link {
          color: var(--light);
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .contact-link:hover {
          color: var(--secondary);
        }

        .footer-bottom {
          margin-top: 2rem;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
          margin-bottom: 2rem;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        .legal-links a {
          color: var(--light);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-links a:hover {
          color: var(--secondary);
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .legal-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer