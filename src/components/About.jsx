import React, { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('journey')

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'resume', label: 'My Resume', icon: '📄' },
  ]

  const journeyCards = [
    {
      title: "The Beginning",
      description: "Started my coding journey with HTML, CSS, and JavaScript. Built my first website and fell in love with web development.",
      year: "2024",
      level: "BEGINNER",
      color: "var(--primary)"
    },
    {
      title: "Full Stack Discovery",
      description: "Dived into React, Node.js, and databases. Built full-stack applications and learned about APIs, authentication, and deployment.",
      year: "2025",
      level: "INTERMEDIATE",
      color: "var(--secondary)"
    },
    {
      title: "Professional Growth",
      description: "Started working on real-world projects, collaborated with teams, and learned agile methodologies and best practices.",
      year: "2025-Present",
      level: "ADVANCED",
      color: "var(--accent)"
    },
    {
      title: "Current Focus",
      description: "Mastering modern frameworks, performance optimization, and scalable architecture. Exploring Devops & Cloud.",
      year: "2025-Present",
      level: "EXPERT",
      color: "#00d4ff"
    }
  ]

  const educationCards = [
    {
      title: "Bachelor of Technology (BTech)",
      subtitle: "Computer Science & Engineering",
      institution: "Uttarakhand Technical University",
      session: "2021 - 2025",
      details: "Specialized in software development, algorithms, and web technologies.",
      level: "  BACHELOR DEGREE"
    },
    {
      title: "Full Stack Web Development(MERN)",
      subtitle: "Advanced Certification",
      institution: "Apna College",
      period: "2024",
      details: "Comprehensive training in modern web development including React, Node.js, databases",
      highlights: ["React Mastery", "Backend Development", "Project Management"],
      level: "CERTIFICATION"
    }
    // {
    //   title: "",
    //   subtitle: "Design Specialization",
    //   institution: "Design Academy",
    //   period: "2022",
    //   details: "Learned user-centered design, prototyping, and accessibility standards for modern web applications.",
    //   highlights: ["Figma", "User Research", "Prototyping"],
    //   level: "SPECIALIZATION"
    // }
  ]

  const experienceCards = [
    {
      title: "Software Developer",
      company: "Slog Solutions Pvt. Ltd.",
      period: "May 2025 - Present",
      details: "Develop and maintain web applications using React, Node.js, and modern JavaScript frameworks and Django. Collaborate with cross-functional teams.",
      technologies: ["MERN Stack", "Django", "Vercel"],
      level: "FULL-TIME"
    },
    {
      title: "Frontend Developer Intern",
      company: "CodSoft.",
      period: "2023",
      details: "Built responsive web applications and participated in code reviews. Gained experience with modern development workflows.",
      technologies: ["JavaScript", "CSS", "Git"],
      level: "INTERNSHIP"
    },
    {
      title: "Frontend Web Developer",
      company: "InternPe",
      period: "2024",
      details: "Developed websites and web applications for various clients. Managed projects from concept to deployment.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "SEO"],
      level: "INTERNSHIP"
    }
  ]

  const resumeSections = [
    {
      title: "Professional Summary",
      icon: "📋",
      content: "Passionate software developer with 1+ years of experience building modern Softwares. Specialized in MERN Stack & Django.",
      color: "#4ecdc4"
    },
    {
      title: "Technical Skills",
      icon: "💻",
      content: "Frontend: React, Next.js, JavaScript/TypeScript, HTML5, CSS3, Bootstrap\nBackend: Node.js, Express.js, Python, REST APIs\nDatabases: MongoDB, MySQL\nTools: Git, Docker, AWS, CI/CD, Figma",
      color: "#ff6b6b"
    },
    // {
    //   title: "Achievements",
    //   icon: "🏆",
    //   content: "• Successfully delivered 5+ projects with 100% client satisfaction\n• Reduced application load time by 40% through optimization\n• Implemented CI/CD pipeline reducing deployment time by 60%\n• Mentored 2 junior developers in best practices",
    //   color: "#ffd166"
    // },
    // {
    //   title: "Certifications",
    //   icon: "📜",
    //   content: "• Full Stack Web Development Certification (2023)\n• AWS Certified Cloud Practitioner\n• React Developer Certification\n• Git & GitHub Mastery Certificate",
    //   color: "#06d6a0"
    // }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'journey':
        return (
          <div className="about-cards-grid">
            {journeyCards.map((card, index) => (
              <div key={index} className="about-content-card glass card-3d" style={{ borderLeft: `4px solid ${card.color}` }}>
                <div className="about-card-header">
                  <div>
                    <h3 className="about-card-title">{card.title}</h3>
                    <span className="about-card-year">{card.year}</span>
                  </div>
                  <span className="about-expertise-level" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                    {card.level}
                  </span>
                </div>
                <p className="about-card-description">{card.description}</p>
                <div className="about-progress-indicator">
                  <div className="about-progress-line" style={{ backgroundColor: card.color }}></div>
                  <div className="about-progress-dots">
                    {journeyCards.map((_, i) => (
                      <div 
                        key={i} 
                        className={`about-progress-dot ${i === index ? 'active' : ''}`}
                        style={{ backgroundColor: i === index ? card.color : 'var(--glass-border)' }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'education':
        return (
          <div className="about-cards-grid">
            {educationCards.map((card, index) => (
              <div key={index} className="about-content-card glass card-3d">
                <div className="about-card-header">
                  <div>
                    <h3 className="about-card-title">{card.title}</h3>
                    <span className="about-card-subtitle">{card.subtitle}</span>
                  </div>
                  <span className="about-card-level">{card.level}</span>
                </div>
                <div className="about-card-meta">
                  <span className="about-meta-item">🏫 {card.institution}</span>
                  <span className="about-meta-item">📅 {card.period}</span>
                </div>
                <p className="about-card-description">{card.details}</p>
                <div className="about-highlights">
                  {card.highlights.map((highlight, i) => (
                    <span key={i} className="about-highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case 'experience':
        return (
          <div className="about-cards-grid">
            {experienceCards.map((card, index) => (
              <div key={index} className="about-content-card glass card-3d">
                <div className="about-card-header">
                  <div>
                    <h3 className="about-card-title">{card.title}</h3>
                    <span className="about-card-company">{card.company}</span>
                  </div>
                  <span className="about-card-period">{card.period}</span>
                </div>
                <p className="about-card-description">{card.details}</p>
                <div className="about-technologies">
                  {card.technologies.map((tech, i) => (
                    <span key={i} className="about-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="about-experience-level">
                  <span className="about-level-tag">{card.level}</span>
                </div>
              </div>
            ))}
          </div>
        )

case 'resume':
  return (
    <div className="about-resume-container">
      {/* Resume Header */}
      <div className="about-resume-header glass card-3d">
        <div className="about-resume-header-content">
          <h2 className="about-resume-title">Adarsh Kumar</h2>
          <p className="about-resume-subtitle">Software Developer</p>
          <div className="about-resume-contact">
            {/* Email from environment variable */}
            <span className="about-contact-item">
              ✉️ {import.meta.env.VITE_CONTACT_EMAIL}
            </span>
            
            {/* Phone from environment variable */}
            <span className="about-contact-item">
              📱 {import.meta.env.VITE_CONTACT_PHONE}
            </span>
            
            {/* Location (optional - can also be moved to env if needed) */}
            <span className="about-contact-item">
              📍 Dehradun, India
            </span>
            
            {/* LinkedIn - consider adding to env if it changes */}
            <span className="about-contact-item">
              🔗 {import.meta.env.VITE_LINKEDIN_URL}
            </span>
          </div>
        </div>
        <a href="/adarsh_resume.pdf" download>
          <button className="about-download-btn">
            📥 Download Resume
          </button>
        </a>
      </div>
    
            

            {/* Resume Sections */}
            <div className="about-resume-sections">
              {resumeSections.map((section, index) => (
                <div key={index} className="about-resume-section-card glass card-3d">
                  <div className="about-section-header" style={{ borderLeft: `4px solid ${section.color}` }}>
                    <div className="about-section-icon" style={{ backgroundColor: `${section.color}20` }}>
                      {section.icon}
                    </div>
                    <h3 style={{ color: section.color }}>{section.title}</h3>
                  </div>
                  <div className="about-section-content">
                    {section.content.split('\n').map((line, i) => (
                      <p key={i} className="about-content-line">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="about-resume-stats glass card-3d">
              <h3>Quick Stats</h3>
              <div className="about-stats-grid">
                <div className="about-stat-item">
                  <div className="about-stat-value">5+</div>
                  <div className="about-stat-label">Projects</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-value">1+</div>
                  <div className="about-stat-label">Years Exp</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-value">10+</div>
                  <div className="about-stat-label">Technologies</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-value">100%</div>
                  <div className="about-stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">Passionate developer creating innovative digital solutions</p>
        </div>

        {/* Tab Navigation */}
        <div className="about-tabs-container">
          <div className="about-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`about-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="about-tab-icon">{tab.icon}</span>
                <span className="about-tab-label">{tab.label}</span>
                {activeTab === tab.id && <div className="about-active-indicator"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="about-content-area">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 50px 0;
        }

        /* Tab Navigation */
        .about-tabs-container {
          margin: 2rem 0 3rem;
        }

        .about-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
        }

        .about-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-light);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: var(--radius);
          transition: all 0.3s ease;
          position: relative;
        }

        .about-tab-btn:hover {
          background: rgba(var(--primary-rgb), 0.1);
          transform: translateY(-2px);
        }

        .about-tab-btn.active {
          background: rgba(var(--primary-rgb), 0.15);
          color: var(--primary);
        }

        .about-tab-icon {
          font-size: 1.2rem;
        }

        .about-active-indicator {
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
        }

        /* Content Area */
        .about-content-area {
          min-height: 400px;
          margin-bottom: 3rem;
        }

        /* Cards Grid */
        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        /* Content Cards */
        .about-content-card {
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .about-content-card:hover {
          transform: translateY(-5px);
        }

        .about-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .about-card-title {
          font-size: 1.2rem;
          color: var(--light);
          margin-bottom: 0.25rem;
        }

        .about-card-year,
        .about-card-subtitle,
        .about-card-company {
          font-size: 0.9rem;
          color: var(--text-light);
          opacity: 0.8;
        }

        .about-expertise-level,
        .about-card-level,
        .about-card-period {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-expertise-level {
          background: rgba(var(--primary-rgb), 0.1);
        }

        .about-card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-light);
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        /* Progress Indicator */
        .about-progress-indicator {
          margin-top: 1.5rem;
        }

        .about-progress-line {
          height: 2px;
          background: var(--primary);
          margin-bottom: 0.5rem;
        }

        .about-progress-dots {
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
        }

        .about-progress-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .about-progress-dot.active {
          transform: scale(1.5);
        }

        /* Meta and Tags */
        .about-card-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .about-meta-item {
          font-size: 0.85rem;
          color: var(--text-light);
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .about-highlights,
        .about-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .about-highlight-tag,
        .about-tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(var(--primary-rgb), 0.1);
          border-radius: 1rem;
          color: var(--primary);
        }

        .about-experience-level {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        .about-level-tag {
          font-size: 0.75rem;
          padding: 0.25rem 1rem;
          background: rgba(var(--secondary-rgb), 0.1);
          border-radius: 1rem;
          color: var(--secondary);
          font-weight: 600;
        }

        /* Resume Container */
        .about-resume-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Resume Header */
        .about-resume-header {
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .about-resume-header-content {
          flex: 1;
        }

        .about-resume-title {
          font-size: 2.5rem;
          color: var(--light);
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-resume-subtitle {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .about-resume-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .about-contact-item {
          font-size: 0.9rem;
          color: var(--text-light);
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .about-download-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          border-radius: var(--radius);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .about-download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.3);
        }

        /* Resume Sections */
        .about-resume-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .about-resume-section-card {
          padding: 1.5rem;
        }

        .about-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1rem;
        }

        .about-section-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .about-section-header h3 {
          font-size: 1.3rem;
          margin: 0;
        }

        .about-section-content {
          line-height: 1.8;
        }

        .about-content-line {
          margin-bottom: 0.75rem;
          color: var(--text-light);
          opacity: 0.9;
        }

        /* Resume Stats */
        .about-resume-stats {
          padding: 2rem;
        }

        .about-resume-stats h3 {
          font-size: 1.5rem;
          color: var(--light);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .about-stat-item {
          text-align: center;
          padding: 1rem;
        }

        .about-stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .about-stat-label {
          font-size: 0.9rem;
          color: var(--text-light);
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .about-tab-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .about-cards-grid,
          .about-resume-sections {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .about-content-card,
          .about-resume-section-card {
            padding: 1rem;
          }

          .about-resume-header {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }

          .about-resume-contact {
            justify-content: center;
          }

          .about-resume-title {
            font-size: 2rem;
          }

          .about-section-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .about-tab-btn {
            padding: 0.5rem 0.75rem;
          }

          .about-tab-icon {
            font-size: 1rem;
          }

          .about-tab-label {
            font-size: 0.85rem;
          }

          .about-resume-title {
            font-size: 1.8rem;
          }

          .about-resume-subtitle {
            font-size: 1rem;
          }

          .about-contact-item {
            font-size: 0.8rem;
          }

          .about-stat-value {
            font-size: 2rem;
          }

          .about-section-header {
            padding-left: 0;
            border-left: none;
            border-top: 4px solid;
            padding-top: 1rem;
          }

          .about-card-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .about-card-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About