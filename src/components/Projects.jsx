import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time inventory management", "Secure payment processing", "Admin dashboard", "User authentication", "Order tracking"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Firebase", "SCSS", "PWA", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time collaboration", "Drag & drop interface", "Team management", "Offline support", "Notifications"],
      status: "Live"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with interactive maps, detailed forecasts, and location-based recommendations using modern APIs.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "API Integration", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Interactive maps", "7-day forecast", "Location tracking", "Weather alerts", "Historical data"],
      status: "Completed"
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work and creative endeavors</p>
        </div>

        <div className="projects-carousel">
          <button className="carousel-arrow prev" onClick={prevProject}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="carousel-arrow next" onClick={nextProject}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="project-display">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index === currentProject ? 'active' : ''}`}
              >
                <div className="project-visual">
                  <div className="project-image">
                    <div className="image-placeholder">
                      <div className="project-number">0{index + 1}</div>
                      <div className="project-glow"></div>
                      <div className="project-status">{project.status}</div>
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveUrl} className="project-link live">
                          <span>Live Demo</span>
                          <div className="link-glow"></div>
                        </a>
                        <a href={project.githubUrl} className="project-link github">
                          <span>GitHub</span>
                          <div className="link-glow"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-nav-mobile">
                      <button onClick={prevProject} className="nav-btn">
                        ‹
                      </button>
                      <button onClick={nextProject} className="nav-btn">
                        ›
                      </button>
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="indicator-progress"></div>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn-glow">
            View All Projects
          </Link>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 50px 0;
        }

        .projects-carousel {
          position: relative;
          margin: 4rem 0;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 70px;
          height: 70px;
          background: var(--glass);
          backdrop-filter: var(--blur);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          color: var(--light);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .carousel-arrow:hover {
          background: var(--primary);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(123, 97, 255, 0.4);
        }

        .carousel-arrow.prev {
          left: -35px;
        }

        .carousel-arrow.next {
          right: -35px;
        }

        .project-display {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .project-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.6s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .project-card.active {
          opacity: 1;
          transform: translateX(0);
        }

        .project-visual {
          position: relative;
        }

        .project-image {
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
          background: linear-gradient(135deg, var(--glass) 0%, rgba(123, 97, 255, 0.1) 100%);
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .project-image:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .image-placeholder {
          position: relative;
          text-align: center;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-number {
          font-size: 6rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
        }

        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.1;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 15, 31, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .project-image:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          padding: 12px 24px;
          border: 2px solid var(--glass-border);
          border-radius: 50px;
          color: var(--light);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-link.live {
          background: var(--primary);
          border-color: var(--primary);
        }

        .project-link.github {
          background: transparent;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(123, 97, 255, 0.3);
        }

        .link-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .project-link:hover .link-glow {
          left: 100%;
        }

        .project-content {
          padding: 2rem 0;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--light);
          flex: 1;
        }

        .project-nav-mobile {
          display: none;
          gap: 0.5rem;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: var(--primary);
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .project-features,
        .project-technologies {
          margin-bottom: 2rem;
        }

        .project-features h4,
        .project-technologies h4 {
          color: var(--light);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .features-list,
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .feature-tag,
        .tech-tag {
          padding: 8px 16px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .feature-tag:hover,
        .tech-tag:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .project-indicators {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
        }

        .indicator {
          width: 60px;
          height: 4px;
          background: var(--glass);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
        }

        .indicator-progress {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transition: left 0.3s ease;
        }

        .indicator.active .indicator-progress {
          left: 0;
        }

        .projects-cta {
          text-align: center;
          margin-top: 3rem;
        }

        @media (max-width: 968px) {
          .project-card {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .project-image {
            height: 300px;
          }

          .carousel-arrow {
            display: none;
          }

          .project-nav-mobile {
            display: flex;
          }

          .project-header {
            flex-direction: column;
            gap: 1rem;
          }

          .project-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .project-display {
            height: 700px;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects