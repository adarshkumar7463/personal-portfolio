import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'Node.js/Express', level: 85, category: 'Backend' },
    { name: 'MongoDB/PostgreSQL', level: 80, category: 'Backend' },
    { name: 'CSS/SCSS/Tailwind', level: 92, category: 'Frontend' },
    { name: 'Python/Django', level: 75, category: 'Backend' },
    { name: 'AWS/Deployment', level: 70, category: 'DevOps' },
    { name: 'Git/GitHub', level: 88, category: 'Tools' },
    { name: 'Docker', level: 65, category: 'DevOps' },
    { name: 'UI/UX Design', level: 78, category: 'Design' }
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">My technical proficiency across different domains</p>
        </div>

        <div className="skills-container">
          {categories.map(category => (
            <div key={category} className="skill-category glass card-3d">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 50px 0;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-category {
          padding: 1.25rem;
          transition: all 0.3s ease;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--light);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--primary);
          display: inline-block;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .skill-item {
          padding: 0.75rem;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          transform: translateY(-2px);
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          color: var(--light);
          font-size: 0.9rem;
        }

        .skill-percent {
          font-weight: 600;
          font-size: 0.85rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skill-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
          transition: width 1s ease-in-out;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Make cards more compact on smaller screens */
        @media (max-width: 768px) {
          .skills-container {
            gap: 1rem;
          }

          .skill-category {
            padding: 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .skill-item {
            padding: 0.5rem;
          }

          .category-title {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
          }

          .skill-name {
            font-size: 0.85rem;
          }

          .skill-percent {
            font-size: 0.8rem;
          }

          .skill-bar {
            height: 4px;
          }
        }

        @media (max-width: 480px) {
          .skill-category {
            padding: 0.75rem;
          }

          .skill-item {
            padding: 0.5rem 0.4rem;
          }

          .category-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills