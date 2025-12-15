import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Web App Award 2023",
      organization: "Tech Innovation Summit",
      date: "December 2023",
      description: "Awarded for developing an innovative e-commerce platform with cutting-edge features and excellent user experience.",
      icon: "🏆",
      category: "Award"
    },
    {
      id: 2,
      title: "Google Cloud Certification",
      organization: "Google Cloud",
      date: "October 2023",
      description: "Certified Google Cloud Professional Developer with expertise in cloud architecture and deployment.",
      icon: "☁️",
      category: "Certification"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "Ongoing",
      description: "Active contributor to multiple open-source projects with 500+ commits and 50+ pull requests merged.",
      icon: "💻",
      category: "Community"
    },
    {
      id: 4,
      title: "Hackathon Winner",
      organization: "MLH Local Hack Day",
      date: "August 2023",
      description: "First place in 48-hour hackathon for building a real-time collaborative coding platform.",
      icon: "⚡",
      category: "Competition"
    },
    {
      id: 5,
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "June 2023",
      description: "Certified in designing distributed systems on AWS with focus on scalability and security.",
      icon: "🔗",
      category: "Certification"
    },
    {
      id: 6,
      title: "Tech Speaker",
      organization: "React Conference 2023",
      date: "May 2023",
      description: "Invited speaker discussing modern React patterns and performance optimization techniques.",
      icon: "🎤",
      category: "Speaking"
    }
  ]

  const categories = [...new Set(achievements.map(ach => ach.category))]

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Achievements & Certifications</h2>
          <p className="section-subtitle">Recognition and accomplishments throughout my career journey</p>
        </div>

        <div className="achievements-filters">
          <button className="filter-btn active">All</button>
          {categories.map(category => (
            <button key={category} className="filter-btn">
              {category}
            </button>
          ))}
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card glass card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <div className="achievement-meta">
                  <span className="organization">{achievement.organization}</span>
                  <span className="date">{achievement.date}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              <div className="achievement-glow"></div>
            </div>
          ))}
        </div>

        <div className="achievements-stats">
          <div className="stat-card glass">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <h3>15+</h3>
              <p>Awards Won</p>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon">📜</div>
            <div className="stat-content">
              <h3>8</h3>
              <p>Certifications</p>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
          padding: 50px 0;
        }

        .achievements-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.8rem 1.5rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 25px;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .achievement-card {
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .achievement-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .achievement-icon {
          font-size: 2.5rem;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          flex-shrink: 0;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .achievement-header h3 {
          font-size: 1.3rem;
          color: var(--light);
          margin: 0;
          line-height: 1.3;
        }

        .achievement-category {
          background: rgba(123, 97, 255, 0.2);
          color: var(--primary);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .achievement-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .organization {
          font-weight: 600;
          color: var(--secondary);
        }

        .date {
          color: var(--light);
        }

        .achievement-description {
          line-height: 1.6;
          opacity: 0.9;
          margin: 0;
        }

        .achievement-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .achievement-card:hover .achievement-glow {
          opacity: 0.1;
        }

        .achievements-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .stat-content h3 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-content p {
          opacity: 0.8;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .achievement-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .achievement-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .achievement-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .achievements-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .achievements-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements