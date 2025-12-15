import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time inventory", "Secure payments", "Admin dashboard", "User auth"],
      status: "Completed",
      category: "fullstack",
      year: "2023"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and drag-and-drop.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Firebase", "SCSS", "PWA", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time collab", "Drag & drop", "Team management", "Notifications"],
      status: "Live",
      category: "frontend",
      year: "2023"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather dashboard with interactive maps and detailed forecasts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Interactive maps", "7-day forecast", "Location tracking", "Alerts"],
      status: "Completed",
      category: "frontend",
      year: "2023"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics platform with AI-powered insights and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Python", "PostgreSQL", "Redis", "ML", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["AI insights", "Auto reporting", "Multi-platform", "Real-time data"],
      status: "In Progress",
      category: "fullstack",
      year: "2024"
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness app with workout tracking and nutrition planning.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Workout tracking", "Nutrition planning", "Progress analytics", "Social"],
      status: "Completed",
      category: "mobile",
      year: "2023"
    },
    {
      id: 6,
      title: "API Management System",
      description: "Enterprise API management with rate limiting, analytics, and portal.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Rate limiting", "API analytics", "Dev portal", "Monitoring"],
      status: "Live",
      category: "backend",
      year: "2023"
    }
  ]

  const categories = [
    { id: 'all', name: 'All', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title gradient-text">My Projects</h1>
          <p className="page-subtitle">A collection of my recent work across different technologies</p>
        </div>

        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => {
                setFilter(category.id)
                setCurrentProject(0)
              }}
            >
              {category.name}
              <span className="project-count">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="projects-carousel">
          <button className="carousel-arrow prev" onClick={prevProject}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="carousel-arrow next" onClick={nextProject}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="project-display">
            {filteredProjects.map((project, index) => (
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
                      <div className="project-year">{project.year}</div>
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveUrl} className="project-link live">
                          <span>Live Demo</span>
                        </a>
                        <a href={project.githubUrl} className="project-link github">
                          <span>GitHub</span>
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
                      <span className="project-counter">
                        {currentProject + 1} / {filteredProjects.length}
                      </span>
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
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a href={project.liveUrl} className="btn-glow">
                      View Live
                    </a>
                    <a href={project.githubUrl} className="btn-outline">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="project-indicators">
            {filteredProjects.map((_, index) => (
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

        <div className="all-projects-grid">
          <h2 className="grid-title">All Projects</h2>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-grid-card glass card-3d">
                <div className="grid-card-header">
                  <h3>{project.title}</h3>
                  <div className="grid-card-meta">
                    <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                    <span className="year">{project.year}</span>
                  </div>
                </div>
                <p className="grid-card-description">{project.description}</p>
                <div className="grid-card-technologies">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag-more">+{project.technologies.length - 4} more</span>
                  )}
                </div>
                <div className="grid-card-actions">
                  <a href={project.liveUrl} className="btn-glow small">
                    Demo
                  </a>
                  <a href={project.githubUrl} className="btn-outline small">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-cta glass">
          <div className="cta-content">
            <h2>Start Your Project</h2>
            <p>Let's work together to bring your ideas to life.</p>
            <Link to="/#appointment" className="btn-glow">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          padding: 80px 0 60px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .page-subtitle {
          font-size: 1rem;
          opacity: 0.8;
          max-width: 500px;
          margin: 0 auto;
        }

        .projects-filters {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.7rem 1.5rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 40px;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          transform: translateY(-1px);
        }

        .project-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.15rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .projects-carousel {
          position: relative;
          margin: 2rem 0 3rem;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
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
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 8px 20px rgba(123, 97, 255, 0.3);
        }

        .carousel-arrow.prev {
          left: -25px;
        }

        .carousel-arrow.next {
          right: -25px;
        }

        .project-display {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .project-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(80px);
          transition: all 0.5s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
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
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--glass) 0%, rgba(123, 97, 255, 0.1) 100%);
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .project-image:hover {
          transform: scale(1.01);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
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
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.25;
        }

        .project-status {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          background: var(--primary);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .project-year {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          background: var(--secondary);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .project-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.08;
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
          gap: 0.8rem;
        }

        .project-link {
          padding: 0.8rem 1.5rem;
          border: 2px solid var(--glass-border);
          border-radius: 40px;
          color: var(--light);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }

        .project-link.live {
          background: var(--primary);
          border-color: var(--primary);
        }

        .project-link.github {
          background: transparent;
        }

        .project-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 15px rgba(123, 97, 255, 0.25);
        }

        .project-content {
          padding: 1rem 0;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--light);
          flex: 1;
        }

        .project-nav-mobile {
          display: none;
          align-items: center;
          gap: 0.8rem;
        }

        .project-counter {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .nav-btn {
          width: 36px;
          height: 36px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .nav-btn:hover {
          background: var(--primary);
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .project-features,
        .project-technologies {
          margin-bottom: 1.5rem;
        }

        .project-features h4,
        .project-technologies h4 {
          color: var(--light);
          margin-bottom: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
        }

        .features-list,
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .feature-tag,
        .tech-tag {
          padding: 0.4rem 0.8rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 15px;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .feature-tag:hover,
        .tech-tag:hover {
          background: var(--primary);
          transform: translateY(-1px);
        }

        .project-actions {
          display: flex;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .btn-outline {
          padding: 0.7rem 1.5rem;
          border: 2px solid var(--primary);
          border-radius: 40px;
          color: var(--light);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          background: transparent;
          font-size: 0.9rem;
        }

        .btn-outline:hover {
          background: var(--primary);
          transform: translateY(-1px);
        }

        .btn-glow.small,
        .btn-outline.small {
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }

        .project-indicators {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        .indicator {
          width: 40px;
          height: 3px;
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

        .all-projects-grid {
          margin: 4rem 0 3rem;
        }

        .grid-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--light);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .project-grid-card {
          padding: 1.5rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          border-radius: 12px;
        }

        .project-grid-card:hover {
          border-color: var(--primary);
          transform: translateY(-3px);
        }

        .grid-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 0.75rem;
        }

        .grid-card-header h3 {
          font-size: 1.1rem;
          color: var(--light);
          margin: 0;
          flex: 1;
          line-height: 1.3;
        }

        .grid-card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: flex-end;
          min-width: 80px;
        }

        .status {
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status.completed {
          background: rgba(76, 175, 80, 0.2);
          color: #4caf50;
          border: 1px solid #4caf50;
        }

        .status.live {
          background: rgba(33, 150, 243, 0.2);
          color: #2196f3;
          border: 1px solid #2196f3;
        }

        .status.in-progress {
          background: rgba(255, 152, 0, 0.2);
          color: #ff9800;
          border: 1px solid #ff9800;
        }

        .year {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .grid-card-description {
          opacity: 0.8;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
        }

        .grid-card-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .tech-tag-more {
          padding: 0.2rem 0.6rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-size: 0.65rem;
          opacity: 0.7;
        }

        .grid-card-actions {
          display: flex;
          gap: 0.6rem;
        }

        .projects-cta {
          margin-top: 3rem;
          padding: 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .cta-content h2 {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
          color: var(--light);
        }

        .cta-content p {
          font-size: 0.95rem;
          opacity: 0.8;
          margin-bottom: 1.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 968px) {
          .project-card {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }

          .project-image {
            height: 250px;
          }

          .carousel-arrow {
            display: none;
          }

          .project-nav-mobile {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }

          .project-header {
            flex-direction: column;
            gap: 1rem;
          }

          .project-title {
            font-size: 1.6rem;
          }

          .project-display {
            height: 650px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .projects-page {
            padding: 60px 0 40px;
          }

          .page-title {
            font-size: 2rem;
          }

          .projects-cta {
            padding: 2rem;
          }

          .cta-content h2 {
            font-size: 1.6rem;
          }

          .project-actions {
            flex-direction: column;
          }

          .filter-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-grid-card {
            padding: 1.25rem;
          }

          .grid-card-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .grid-card-meta {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            margin-top: 0.5rem;
          }

          .project-display {
            height: 700px;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectsPage