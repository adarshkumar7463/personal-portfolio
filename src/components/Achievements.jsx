import React, { useState } from 'react'

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('all');

  const achievements = [
    {
      id: 1,
      title: "Full Stack Web Development Certification",
      organization: "Apna College",
      date: "2024",
      description: "Mastered MERN stack development including React, Node.js, MongoDB, Express.js with hands-on projects.",
      image: "/certificates/full-stack.jpg",
      icon: "💻",
      category: "Certification",
      verified: true
    },
    {
      id: 2,
      title: "Best Web Project Award",
      organization: "Slog Solutions",
      date: "2025",
      description: "Recognized for developing innovative web solutions with excellent performance and user experience.",
      image: "/certificates/best-project.jpg",
      icon: "🏆",
      category: "Award",
      verified: true
    },
    {
      id: 3,
      title: "Frontend Development Internship",
      organization: "CodSoft",
      date: "2023",
      description: "Completed intensive internship focusing on modern JavaScript, React, and responsive web design.",
      image: "/certificates/internship.jpg",
      icon: "🎓",
      category: "Internship",
      verified: true
    },
    {
      id: 4,
      title: "Web Development Internship",
      organization: "InternPe",
      date: "2024",
      description: "Developed multiple client websites with focus on performance, SEO, and responsive design.",
      image: "/certificates/web-dev.jpg",
      icon: "⚡",
      category: "Internship",
      verified: true
    },
    {
      id: 5,
      title: "JavaScript Mastery Certification",
      organization: "Online Platform",
      date: "2024",
      description: "Advanced JavaScript concepts including ES6+, async/await, and modern frameworks.",
      image: "/certificates/js-mastery.jpg",
      icon: "📜",
      category: "Certification",
      verified: true
    },
    {
      id: 6,
      title: "Git & GitHub Expertise",
      organization: "GitHub",
      date: "2024",
      description: "Version control mastery with collaborative workflows and best practices for team development.",
      image: "/certificates/git-github.jpg",
      icon: "🔗",
      category: "Skill",
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Achievements', count: achievements.length },
    { id: 'Certification', label: 'Certifications', count: achievements.filter(a => a.category === 'Certification').length },
    { id: 'Award', label: 'Awards', count: achievements.filter(a => a.category === 'Award').length },
    { id: 'Internship', label: 'Internships', count: achievements.filter(a => a.category === 'Internship').length },
    { id: 'Skill', label: 'Skills', count: achievements.filter(a => a.category === 'Skill').length }
  ];

  const filteredAchievements = activeTab === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeTab);

  const stats = [
    { label: "Certifications", value: "5+", icon: "📜", color: "#6366f1" },
    { label: "Projects Completed", value: "10+", icon: "🚀", color: "#10b981" },
    { label: "Client Satisfaction", value: "100%", icon: "⭐", color: "#f59e0b" },
    { label: "Years Experience", value: "1+", icon: "⏳", color: "#8b5cf6" }
  ];

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        {/* Header with Navigation */}
        <div className="section-header">
          <h2 className="section-title gradient-text">Achievements & Certifications</h2>
          <p className="section-subtitle">Professional recognition and verified accomplishments</p>
          
          {/* Navigation to Other Sections */}
          <div className="section-navigation">
            <button onClick={() => navigateToSection('about')} className="nav-btn">
              <span className="nav-icon">👤</span>
              {/* About */}
            </button>
            <button onClick={() => navigateToSection('techstack')} className="nav-btn">
              <span className="nav-icon">💻</span>
              {/* Tech Stack */}
            </button>
            <button onClick={() => navigateToSection('projects')} className="nav-btn">
              <span className="nav-icon">🚀</span>
              {/* Projects */}
            </button>
            <button onClick={() => navigateToSection('contact')} className="nav-btn">
              <span className="nav-icon">📞</span>
              {/* Contact */}
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className="category-icon">{achievements.find(a => a.category === category.id)?.icon || '🎯'}</span>
              <span className="category-label">{category.label}</span>
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {filteredAchievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              {/* Achievement Image */}
              <div className="achievement-image-container">
                <div className="achievement-image">
                  <div className="image-placeholder">
                    <span className="image-icon">{achievement.icon}</span>
                    <span className="image-text">View Certificate</span>
                  </div>
                  {achievement.image && (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="achievement-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.querySelector('.image-placeholder').style.display = 'flex';
                      }}
                    />
                  )}
                </div>
                {achievement.verified && (
                  <div className="verified-badge">
                    <span className="verified-icon">✓</span>
                    Verified
                  </div>
                )}
              </div>

              {/* Achievement Content */}
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className={`achievement-category ${achievement.category.toLowerCase()}`}>
                    {achievement.category}
                  </span>
                </div>
                <div className="achievement-meta">
                  <span className="organization">
                    <span className="meta-icon">🏢</span>
                    {achievement.organization}
                  </span>
                  <span className="date">
                    <span className="meta-icon">📅</span>
                    {achievement.date}
                  </span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                
                {/* Action Buttons */}
                <div className="achievement-actions">
                  <button className="view-btn">
                    <span className="btn-icon">👁️</span>
                    View Details
                  </button>
                  <button className="share-btn">
                    <span className="btn-icon">📤</span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <h3 className="stats-title">Quick Stats</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                <div className="stat-content">
                  <h4 style={{ color: stat.color }}>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to Next Section */}
        <div className="next-section">
          <p>Explore my technical skills</p>
          <button onClick={() => navigateToSection('techstack')} className="next-btn">
            View Tech Stack
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
          padding: 40px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header with Navigation */
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 1.1rem;
          margin-bottom: 25px;
        }

        .section-navigation {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          color: #475569;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: #6366f1;
          color: white;
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .nav-icon {
          font-size: 1.2rem;
        }

        /* Category Filters */
        .category-filters {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-filter {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          color: #475569;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-filter:hover {
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .category-filter.active {
          background: #6366f1;
          color: white;
          border-color: #6366f1;
        }

        .category-icon {
          font-size: 1.2rem;
        }

        .category-count {
          background: rgba(99, 102, 241, 0.1);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .category-filter.active .category-count {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .achievement-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
        }

        /* Achievement Image */
        .achievement-image-container {
          position: relative;
          height: 200px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          overflow: hidden;
        }

        .achievement-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #6b7280;
        }

        .image-icon {
          font-size: 3rem;
        }

        .image-text {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .achievement-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .achievement-card:hover .achievement-img {
          transform: scale(1.05);
        }

        .verified-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #10b981;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .verified-icon {
          font-size: 0.9rem;
          font-weight: bold;
        }

        /* Achievement Content */
        .achievement-content {
          padding: 20px;
        }

        .achievement-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          gap: 10px;
        }

        .achievement-header h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          line-height: 1.4;
          flex: 1;
        }

        .achievement-category {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .achievement-category.certification {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
        }

        .achievement-category.award {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .achievement-category.internship {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .achievement-category.skill {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .achievement-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .organization, .date {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .meta-icon {
          font-size: 1rem;
        }

        .achievement-description {
          color: #4b5563;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        /* Action Buttons */
        .achievement-actions {
          display: flex;
          gap: 10px;
        }

        .view-btn, .share-btn {
          flex: 1;
          padding: 8px 15px;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.85rem;
        }

        .view-btn {
          background: #6366f1;
          color: white;
        }

        .view-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }

        .share-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: 1px solid #e5e7eb;
        }

        .share-btn:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1rem;
        }

        /* Quick Stats */
        .quick-stats {
          margin: 40px 0;
        }

        .stats-title {
          text-align: center;
          font-size: 1.8rem;
          color: #1f2937;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-content h4 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 5px 0;
        }

        .stat-content p {
          color: #6b7280;
          margin: 0;
          font-size: 0.9rem;
        }

        /* Next Section */
        .next-section {
          text-align: center;
          margin-top: 40px;
          padding: 30px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .next-section p {
          color: #6b7280;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        .next-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .next-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .next-btn:hover .arrow {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-navigation {
            flex-wrap: wrap;
          }
          
          .nav-btn {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
          
          .category-filters {
            overflow-x: auto;
            padding-bottom: 10px;
            justify-content: flex-start;
          }
          
          .category-filter {
            white-space: nowrap;
          }
          
          .achievement-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .achievement-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.6rem;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .achievement-actions {
            flex-direction: column;
          }
          
          .view-btn, .share-btn {
            width: 100%;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .category-filters {
            flex-direction: column;
          }
          
          .category-filter {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements