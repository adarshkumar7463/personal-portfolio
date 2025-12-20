import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const roles = [
    "Software Developer (SDE 1)",
    "Data Analyst",
    "IT Trainer",
    "Full Stack Developer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const techStack = [
    {
      name: 'React',
      icon: '⚛️',
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      icon: '⚡',
      color: '#339933'
    },
    {
      name: 'JavaScript',
      icon: '💻',
      color: '#F7DF1E'
    },
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776AB'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url:import.meta.env.VITE_LINKEDIN_URL,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: import.meta.env.VITE_GITHUB_URL,
        icon:(<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.91 1.235 3.221 0 4.609 -2.807 5.624 -5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .218 .694 .825 .576C20.565 21.796 24 17.3 24 12c0 -6.627 -5.373 -12 -12 -12z"/>    
        </svg>
        ),
        color: '#333333'

    },
    {
      name: 'WhatsApp',
      url: import.meta.env.VITE_WHATSAPP_URL,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.5z"/>
        </svg>
      ),
      color: '#25D366'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: '#1DA1F2'
    }
  ]

const handleLetsTalkClick = () => {
    const appointmentSection = document.querySelector('#appointment')
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

const handleScheduleClick = () => {
    const appointmentSection = document.querySelector('#appointment')
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const resumeUrl = '/public/adarsh_resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Adarsh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <section className="hero">
      <div className="container">

              {/* Floating Resume Button */}
        <button className="floating-resume-btn" onClick={handleDownloadResume}>
          <div className="resume-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div className="resume-text">
            <span className="resume-label">Download</span>
            {/* <a href="/adarsh_resume.pdf" download></a> */}
            <span className="resume-title">My Resume</span>
            
          </div>
          <div className="resume-glow"></div>
        </button>


                

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-main gradient-text hover-name">Adarsh Kumar</span>
              <span className="title-sub role-changer">
                <span className={`role-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  {roles[currentRole]}
                </span>
              </span>
            </h1>
            
            <p className="hero-description">
              I create digital experiences that blend innovative design 
              with cutting-edge technology. Let's build something amazing together.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-glow">
                View My Work
              </Link>
              <button onClick={handleLetsTalkClick} className="btn-outline">
                Let's Talk
              </button>
            </div>

            {/* Social Links with Real Icons */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual"> 
            <div className="profile-card glass-3d ">
              <div className="profile-orb ">
                <div className="orb-glow"></div>
                <div className="profile-image-container">
                  <img 
                    src="/profile.jpg" 
                    alt="Adarsh Kumar"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="profile-fallback">
                    <span className="initials">AK</span>
                  </div>
                </div>
                <div className="orb-ring"></div>
                
                {/* Tech Stack around profile */}
                {/* {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`tech-orb tech-${index + 1}`}
                    style={{ '--tech-color': tech.color }}
                    title={tech.name}
                  >
                    <span className="tech-orb-icon">{tech.icon}</span>
                  </div>
                ))} */}
              </div>
              <div className="profile-shine"></div>
            </div>

                {/* Schedule Appointment Button on Image */}
            <button className="schedule-overlay-btn" onClick={handleScheduleClick}>
              <div className="schedule-icon">📅</div>
              <div className="schedule-text">
                <span>Schedule</span>
                <span>Appointment</span>
              </div>
            </button>

          </div>
        </div> 

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }


        
        /* Floating Resume Button */
        .floating-resume-btn {
          position: absolute;
          top: 120px;
          right: 40px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          border-radius: 16px;
          padding: 0.8rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
          z-index: 100;
          overflow: hidden;
          min-width: 160px;
        }

        .floating-resume-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
        }

        .resume-icon {
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .resume-icon svg {
          width: 20px;
          height: 20px;
        }

        .resume-text {
          display: flex;
          flex-direction: column;
          color: white;
          text-align: left;
        }

        .resume-label {
          font-size: 0.75rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .resume-title {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .resume-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s;
        }

        .floating-resume-btn:hover .resume-glow {
          left: 100%;
        }

        /* Schedule Appointment Button on Image */
        .schedule-overlay-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(16, 185, 129, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 0.8rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
          animation: pulse 2s infinite;
        }

        .schedule-overlay-btn:hover {
          transform: translateY(-3px);
          background: #10b981;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
          animation: none;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .schedule-icon {
          font-size: 1.2rem;
          color: white;
        }

        .schedule-text {
          display: flex;
          flex-direction: column;
          color: white;
          text-align: left;
          line-height: 1.2;
        }

        .schedule-text span:first-child {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .schedule-text span:last-child {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .title-line {
          display: block;
          font-size: 1.5rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .title-main {
          display: block;
          font-size: clamp(3rem, 6vw, 5rem);
          margin: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .hover-name {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          cursor: pointer;
        }

        .hover-name:hover {
          transform: translateY(-2px);
          text-shadow: 0 5px 15px rgba(123, 97, 255, 0.3);
        }

        .title-sub {
          display: block;
          font-size: 1.5rem;
          color: var(--light);
          opacity: 0.8;
          margin-top: 0.5rem;
          height: 2.5rem;
        }

        .role-changer {
          display: block;
          position: relative;
          overflow: value;
        }

        .role-text {
          display: inline-block;
          position: absolute;
          left: 0;
          right: 0;
          text-align: left;
        }

        .fade-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .fade-out {
          animation: slideOutUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
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
          cursor: pointer;
          font-family: inherit;
        }

        .btn-outline:hover {
          background: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(123, 97, 255, 0.3);
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
          background: var(--social-color);
          box-shadow: 0 10px 25px color-mix(in srgb, var(--social-color) 30%, transparent);
        }

        .social-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon svg {
          width: 100%;
          height: 100%;
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

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .profile-card {
          width: 400px;
          height: 400px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 0px solid var(--glass-border);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .profile-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(123, 97, 255, 0.15),
            0 0 80px rgba(123, 97, 255, 0.1);
        }

        .profile-orb {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            var(--primary) 0%,
            transparent 70%
          );
          opacity: 0.1;
          filter: blur(20px);
          animation: gentlePulse 4s ease-in-out infinite;
        }

        @keyframes gentlePulse {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        .profile-image-container {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
          border: 3px solid transparent;
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .profile-card:hover .profile-image-container {
          transform: scale(1.05);
          box-shadow: 
            0 0 30px rgba(123, 97, 255, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: all 0.5s ease;
          filter: grayscale(0.1);
        }

        .profile-card:hover .profile-image {
          filter: grayscale(0);
          transform: scale(1.1);
        }

        .profile-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: none;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: 700;
        }

        .orb-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid transparent;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary), transparent, var(--accent));
          background-size: 400% 400%;
          animation: rotateRing 8s linear infinite;
          opacity: 0.7;
        }

        @keyframes rotateRing {
          0% { 
            transform: rotate(0deg);
            background-position: 0% 50%;
          }
          100% { 
            transform: rotate(360deg);
            background-position: 400% 50%;
          }
        }

        .tech-orb {
          position: absolute;
          width: 50px;
          height: 50px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: floatTech 6s ease-in-out infinite;
          z-index: 3;
        }

        .tech-orb:hover {
          transform: scale(1.3);
          background: var(--tech-color, var(--primary));
          box-shadow: 0 0 20px var(--tech-color, var(--primary));
        }

        .tech-orb-1 { top: 10%; left: 20%; animation-delay: 0s; }
        .tech-orb-2 { top: 10%; right: 20%; animation-delay: 1.5s; }
        .tech-orb-3 { bottom: 20%; left: 10%; animation-delay: 3s; }
        .tech-orb-4 { bottom: 10%; right: 25%; animation-delay: 4.5s; }

        @keyframes floatTech {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
          50% { 
            transform: translateY(-10px) scale(1.1);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
          }
        }

        .profile-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }

        .profile-card:hover .profile-shine {
          opacity: 1;
          transform: rotate(45deg) translate(50%, 50%);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--light);
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .scroll-line {
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, var(--primary), transparent);
          border-radius: 1px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

/* Add this for light/dark mode toggle */
.light-dark-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.light-dark-toggle:hover {
  transform: scale(1.1);
  background: var(--primary);
}

/* Adjust hero padding for mobile */
@media (max-width: 968px) {
  .hero {
    padding-top: 70px;
    min-height: auto;
    padding-bottom: 40px;
  }

  /* Light/dark toggle mobile */
  .light-dark-toggle {
    top: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem; /* Reduced gap */
    display: flex;
    flex-direction: column;
  }

  /* Image container - appear first */
  .hero-visual {
    order: 1;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
  }

  /* Resume button - keep at original right position but make it mobile friendly */
  .floating-resume-btn {
    position: absolute;
    top: -15px;
    right: -10px;
    left: auto;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 0.5rem 0.8rem;
    z-index: 10;
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    min-width: 140px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: none !important;
  }

  /* Keep resume text visible */
  .resume-text {
    display: flex !important;
    flex-direction: column;
    color: white;
    text-align: left;
  }

  .resume-label {
    font-size: 0.65rem;
    opacity: 0.9;
    font-weight: 500;
  }

  .resume-title {
    font-size: 0.75rem;
    font-weight: 600;
  }

  .resume-icon {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .resume-icon svg {
    width: 14px;
    height: 14px;
  }

  /* Schedule button - keep at bottom right */
  .schedule-overlay-btn {
    position: absolute;
    bottom: -15px;
    right: -10px;
    background: rgba(16, 185, 129, 0.95);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
    min-width: 130px;
    animation: none; /* Remove pulse on mobile */
  }

  .schedule-text {
    display: flex !important;
    flex-direction: column;
    color: white;
    text-align: left;
    line-height: 1.2;
  }

  .schedule-text span:first-child {
    font-size: 0.7rem;
    font-weight: 600;
  }

  .schedule-text span:last-child {
    font-size: 0.6rem;
    opacity: 0.9;
  }

  .schedule-icon {
    font-size: 0.9rem;
  }

  /* Text content */
  .hero-text {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }

  /* Reduce spacing in title */
  .hero-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin-bottom: 0.8rem;
  }

  .title-line {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .title-main {
    font-size: clamp(2.2rem, 6vw, 3rem);
    margin: 0.3rem 0;
  }

  .title-sub {
    font-size: 1.1rem;
    margin-top: 0.3rem;
    height: 1.8rem;
  }

  .role-changer {
    display: flex;
    justify-content: center;
  }

  .role-text {
    position: static;
    text-align: center !important;
  }

  /* Reduce description spacing */
  .hero-description {
    margin: 0.5rem auto 1.2rem;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0 1rem;
  }

  /* Button adjustments */
  .hero-buttons {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Social links */
  .social-links {
    gap: 0.8rem;
    margin-top: 1rem;
  }

  /* Profile card sizing */
  .profile-card {
    width: 260px;
    height: 260px;
    margin: 0 auto;
  }

  .profile-orb {
    width: 200px;
    height: 200px;
  }

  .profile-image-container {
    width: 150px;
    height: 150px;
  }

  /* Adjust scroll indicator to not overlap */
  .scroll-indicator {
    bottom: 1.5rem;
    font-size: 0.8rem;
  }

  .scroll-line {
    height: 40px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 60px;
    min-height: calc(100vh - 60px); /* Ensure fits on one screen */
  }

  .hero-content {
    gap: 1rem;
  }

  .floating-resume-btn {
    min-width: 130px;
    padding: 0.45rem 0.7rem;
  }

  .schedule-overlay-btn {
    min-width: 120px;
    padding: 0.45rem 0.7rem;
  }

  .profile-card {
    width: 240px;
    height: 240px;
  }

  .profile-orb {
    width: 180px;
    height: 180px;
  }

  .profile-image-container {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .light-dark-toggle {
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  /* Ensure everything fits on one screen */
  .hero-content {
    gap: 0.8rem;
    min-height: calc(100vh - 120px);
    justify-content: center;
  }

  /* Reduce button sizes further */
  .floating-resume-btn {
    min-width: 120px;
    padding: 0.4rem 0.6rem;
    top: 80px;
    right: 5px;
  }

  .resume-label {
    font-size: 0.6rem;
  }

  .resume-title {
    font-size: 0.7rem;
  }

  .schedule-overlay-btn {
    min-width: 110px;
    padding: 0.4rem 0.6rem;
    bottom: -12px;
    right: -5px;
  }

  .schedule-text span:first-child {
    font-size: 0.65rem;
  }

  .schedule-text span:last-child {
    font-size: 0.55rem;
  }

  /* Title sizing for small screens */
  .hero-title {
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    margin-bottom: 0.5rem;
  }

  .title-line {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  .title-main {
    font-size: clamp(2rem, 6vw, 2.5rem);
    margin: 0.2rem 0;
  }

  .title-sub {
    font-size: 1rem;
    margin-top: 0.2rem;
    height: 1.6rem;
  }

  .hero-description {
    font-size: 0.9rem;
    margin: 0.4rem auto 1rem;
    padding: 0 0.5rem;
  }

  /* Stack buttons vertically */
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 280px;
    margin: 0 auto 1rem;
  }

  .btn-glow, .btn-outline {
    width: 100%;
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  /* Smaller social icons */
  .social-links {
    gap: 0.6rem;
  }

  .social-link {
    width: 42px;
    height: 42px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }

  /* Smaller profile image */
  .profile-card {
    width: 220px;
    height: 220px;
  }

  .profile-orb {
    width: 160px;
    height: 160px;
  }

  .profile-image-container {
    width: 130px;
    height: 130px;
  }

  /* Adjust scroll indicator */
  .scroll-indicator {
    bottom: 1rem;
    font-size: 0.75rem;
  }

  .scroll-line {
    height: 30px;
  }
}

/* Extra small screens */
@media (max-width: 360px) {
  .hero {
    padding-top: 45px;
    padding-bottom: 25px;
  }

  .hero-content {
    gap: 0.6rem;
  }

  .floating-resume-btn {
    min-width: 110px;
    padding: 0.35rem 0.5rem;
    top: -10px;
    right: 0;
  }

  .schedule-overlay-btn {
    min-width: 100px;
    padding: 0.35rem 0.5rem;
    bottom: -10px;
    right: 0;
  }

  .profile-card {
    width: 200px;
    height: 200px;
  }

  .profile-orb {
    width: 150px;
    height: 150px;
  }

  .profile-image-container {
    width: 120px;
    height: 120px;
  }

  .hero-title {
    font-size: clamp(1.6rem, 5vw, 2rem);
  }

  .title-main {
    font-size: clamp(1.8rem, 6vw, 2.2rem);
  }

  .hero-description {
    font-size: 0.85rem;
  }
}

/* Ensure no overlapping on mobile */
@media (max-width: 968px) {
  .profile-card {
    margin-top: 20px; /* Space for resume button */
  }
  
  .hero-text {
    padding-bottom: 20px; /* Space for scroll indicator */
  }
}

/* Remove hover effects on mobile touch devices */
@media (hover: none) and (pointer: coarse) {
  .floating-resume-btn:hover,
  .schedule-overlay-btn:hover,
  .social-link:hover,
  .profile-card:hover {
    transform: none !important;
  }
  
  .floating-resume-btn:active,
  .schedule-overlay-btn:active {
    transform: scale(0.95) !important;
  }
}
      `}</style>
    </section>
  )
}

export default Hero