import React, { useState } from 'react'
import { useApp } from '../contexts/AppContext'

const TechStack = () => {
  const { activeTech, setActiveTech } = useApp()
  const [selectedCategory, setSelectedCategory] = useState('frontend')

  const techStackData = {
    frontend: [
      { 
        name: 'React', 
        level: 'Expert',
        description: 'Advanced React with Hooks, Context API, and Performance Optimization',
        projects: ['E-commerce Platform', 'Task Management App', 'Weather Dashboard'],
        notes: 'Specialized in React 18 features, custom hooks, and state management'
      },
      { 
        name: 'JavaScript', 
        level: 'Expert',
        description: 'ES6+, Modern JavaScript, Async/Await, Functional Programming',
        projects: ['All Projects'],
        notes: 'Strong foundation in modern JavaScript patterns and best practices'
      },
      { 
        name: 'TypeScript', 
        level: 'Advanced',
        description: 'TypeScript for type-safe applications and better developer experience',
        projects: ['Enterprise Applications'],
        notes: 'Implementing TypeScript in large-scale applications'
      }
    ],
    backend: [
      { 
        name: 'Node.js', 
        level: 'Advanced',
        description: 'Server-side JavaScript, Express.js, REST APIs, Microservices',
        projects: ['E-commerce Backend', 'API Services'],
        notes: 'Building scalable backend systems with Node.js'
      },
      { 
        name: 'Python', 
        level: 'Intermediate',
        description: 'Django, Flask, Data Analysis, Automation Scripts',
        projects: ['Data Processing Tools'],
        notes: 'Python for backend and data-related tasks'
      }
    ],
      database: [
     { 
        name: 'MySql', 
        level: 'Advanced',
        description: 'NoSQL Database, Mongoose ODM, Database Design',
        projects: ['User Management Systems'],
        notes: 'Expert in MongoDB aggregation and optimization'
      },   
     { 
        name: 'MongoDB', 
        level: 'Intermediate',
        description: 'NoSQL Database, Mongoose ODM, Database Design',
        projects: ['User Management Systems'],
        notes: 'Expert in MongoDB aggregation and optimization'
      }
    ],

    tools: [
      { 
        name: 'Git', 
        level: 'Expert',
        description: 'Version Control, GitHub, GitLab, CI/CD Pipelines',
        projects: ['All Projects'],
        notes: 'Proficient in Git workflows and team collaboration'
      },
      { 
        name: 'Docker', 
        level: 'Intermediate',
        description: 'Containerization, Docker Compose, Deployment',
        projects: ['Production Applications'],
        notes: 'Containerizing applications for deployment'
      },
      { 
        name: 'AWS', 
        level: 'Intermediate',
        description: 'EC2, S3, Lambda, CloudFront, Deployment',
        projects: ['Web Applications'],
        notes: 'Deploying and managing applications on AWS'
      }
    ],
    analytics: [
      { 
        name: 'powerBI', 
        level: 'Expert',
        description: 'Graphs, Charts, Data Visualization, Dashboards',
        projects: ['IPL Dahboard'],
        notes: 'Creating interactive dashboards and reports'
      },
      { 
        name: 'Tableau', 
        level: 'Intermediate',
        description: 'Graphs, Charts, Data Visualization, Dashboards',
        projects: ['NA'],
        notes: 'Creating interactive dashboards and reports'
      }
    ]
  }

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Database', icon: '⚙️' },
    { id: 'tools', name: 'Tools & DevOps', icon: '🛠️' },
    { id: 'analytics', name: 'Data Analysis', icon: '🛠️' }
  ]

  return (
    <section id="techstack" className="tech-stack-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with and my expertise level</p>
        </div>

        <div className="tech-categories-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {techStackData[selectedCategory].map((tech, index) => (
            <div 
              key={tech.name} 
              className={`tech-card glass card-3d ${activeTech === tech.name ? 'active' : ''}`}
              onClick={() => setActiveTech(tech.name === activeTech ? null : tech.name)}
            >
              <div className="tech-header">
                <h3>{tech.name}</h3>
                <span className={`tech-level ${tech.level.toLowerCase()}`}>
                  {tech.level}
                </span>
              </div>
              <p className="tech-description">{tech.description}</p>
              
              {activeTech === tech.name && (
                <div className="tech-details">
                  <div className="tech-projects">
                    <h4>Projects:</h4>
                    <ul>
                      {tech.projects.map(project => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-notes">
                    <h4>Notes:</h4>
                    <p>{tech.notes}</p>
                  </div>
                </div>
              )}
              
              <div className="tech-progress">
                <div 
                  className="progress-bar" 
                  style={{ 
                    width: tech.level === 'Expert' ? '90%' : 
                           tech.level === 'Advanced' ? '75%' : '60%' 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-stack-section {
          padding: 50px 0;
        }

        .tech-categories-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 1rem 2rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .category-tab:hover,
        .category-tab.active {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .tech-card {
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .tech-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .tech-card.active {
          border-color: var(--primary);
          background: rgba(123, 97, 255, 0.1);
        }

        .tech-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .tech-header h3 {
          font-size: 1.5rem;
          color: var(--light);
          margin: 0;
        }

        .tech-level {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .tech-level.expert {
          background: rgba(76, 175, 80, 0.2);
          color: #4caf50;
          border: 1px solid #4caf50;
        }

        .tech-level.advanced {
          background: rgba(33, 150, 243, 0.2);
          color: #2196f3;
          border: 1px solid #2196f3;
        }

        .tech-level.intermediate {
          background: rgba(255, 152, 0, 0.2);
          color: #ff9800;
          border: 1px solid #ff9800;
        }

        .tech-description {
          opacity: 0.8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .tech-projects h4,
        .tech-notes h4 {
          color: var(--light);
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .tech-projects ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
        }

        .tech-projects li {
          padding: 0.3rem 0;
          opacity: 0.8;
          position: relative;
          padding-left: 1rem;
        }

        .tech-projects li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .tech-notes p {
          opacity: 0.8;
          line-height: 1.6;
          margin: 0;
        }

        .tech-progress {
          width: 100%;
          height: 6px;
          background: var(--glass);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 1rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
          transition: width 1s ease-in-out;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }

          .tech-categories-tabs {
            flex-direction: column;
            align-items: center;
          }

          .category-tab {
            width: 200px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default TechStack