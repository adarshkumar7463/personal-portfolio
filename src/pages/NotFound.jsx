import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="error-animation">
            <div className="error-number gradient-text">404</div>
            <div className="error-glow"></div>
          </div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn-glow">
              Go Home
            </Link>
            <Link to="/#contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
          <div className="suggestions">
            <h3>You might be looking for:</h3>
            <div className="suggestion-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/#contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 0 80px;
          text-align: center;
        }

        .not-found-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .error-animation {
          position: relative;
          margin-bottom: 2rem;
        }

        .error-number {
          font-size: 8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }

        .error-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.3;
          filter: blur(40px);
          z-index: -1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }

        .not-found h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--light);
        }

        .not-found p {
          font-size: 1.2rem;
          opacity: 0.8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .not-found-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-outline {
          padding: 12px 30px;
          border: 2px solid var(--primary);
          border-radius: 50px;
          color: var(--light);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          background: transparent;
        }

        .btn-outline:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .suggestions {
          margin-top: 3rem;
          padding: 2rem;
          background: var(--glass);
          border-radius: var(--radius);
          border: 1px solid var(--glass-border);
        }

        .suggestions h3 {
          color: var(--light);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .suggestion-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .suggestion-links a {
          color: var(--light);
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
        }

        .suggestion-links a:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .error-number {
            font-size: 6rem;
          }

          .not-found h1 {
            font-size: 2rem;
          }

          .not-found p {
            font-size: 1.1rem;
          }

          .not-found-actions {
            flex-direction: column;
            align-items: center;
          }

          .suggestion-links {
            gap: 1rem;
          }

          .suggestion-links a {
            padding: 0.8rem 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .error-number {
            font-size: 4rem;
          }

          .not-found h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default NotFound