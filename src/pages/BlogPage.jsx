import React, { useState } from 'react'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: "React 18 Features and Best Practices",
      excerpt: "Exploring the latest features in React 18 including concurrent rendering, automatic batching, and new hooks.",
      content: "React 18 brings exciting new features that enhance performance and developer experience...",
      category: "react",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Frontend"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Node.js Applications",
      excerpt: "Architecture patterns and best practices for building scalable and maintainable Node.js applications.",
      content: "When building Node.js applications that need to scale, architecture decisions become crucial...",
      category: "nodejs",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Node.js", "Backend", "Architecture"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Modern CSS with Grid and Flexbox",
      excerpt: "Mastering modern CSS layout techniques with Grid and Flexbox for responsive designs.",
      content: "CSS Grid and Flexbox have revolutionized how we create layouts on the web...",
      category: "css",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["CSS", "Frontend", "Design"],
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "TypeScript Tips for React Developers",
      excerpt: "Advanced TypeScript patterns and tips specifically for React developers.",
      content: "TypeScript can significantly improve your React development experience...",
      category: "typescript",
      date: "2024-01-02",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Frontend"],
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Database Design Best Practices",
      excerpt: "Essential database design principles and patterns for modern applications.",
      content: "Good database design is crucial for application performance and maintainability...",
      category: "database",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["Database", "Backend", "Architecture"],
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "DevOps for Frontend Developers",
      excerpt: "A practical guide to DevOps concepts and tools for frontend developers.",
      content: "Understanding DevOps can help frontend developers deploy better applications...",
      category: "devops",
      date: "2023-12-20",
      readTime: "11 min read",
      tags: ["DevOps", "Frontend", "Deployment"],
      image: "/api/placeholder/400/250",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'react', name: 'React', count: blogPosts.filter(post => post.category === 'react').length },
    { id: 'nodejs', name: 'Node.js', count: blogPosts.filter(post => post.category === 'nodejs').length },
    { id: 'css', name: 'CSS', count: blogPosts.filter(post => post.category === 'css').length },
    { id: 'typescript', name: 'TypeScript', count: blogPosts.filter(post => post.category === 'typescript').length },
    { id: 'database', name: 'Database', count: blogPosts.filter(post => post.category === 'database').length },
    { id: 'devops', name: 'DevOps', count: blogPosts.filter(post => post.category === 'devops').length }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="blog-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title gradient-text">Blog & Notes</h1>
          <p className="page-subtitle">Technical insights, tutorials, and notes from my development journey</p>
        </div>

        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
              <span className="post-count">({category.count})</span>
            </button>
          ))}
        </div>

        {selectedCategory === 'all' && featuredPosts.length > 0 && (
          <div className="featured-posts">
            <h2 className="section-title">Featured Posts</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post glass card-3d">
                  <div className="post-image">
                    <div className="image-placeholder">
                      <div className="post-category">{post.category}</div>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="read-more-btn">
                      Read More ›
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="blog-posts">
          <h2 className="section-title">
            {selectedCategory === 'all' ? 'All Posts' : `${categories.find(c => c.id === selectedCategory)?.name} Posts`}
          </h2>
          <div className="posts-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="blog-post glass card-3d">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <span className="post-category-tag">{post.category}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <div className="post-tags">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="tag-more">+{post.tags.length - 2}</span>
                    )}
                  </div>
                  <button className="read-more-btn">
                    Read More ›
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts glass">
            <h3>No posts found</h3>
            <p>There are no blog posts in this category yet. Check back soon!</p>
          </div>
        )}

        <div className="blog-cta glass">
          <div className="cta-content">
            <h2>Want to learn together?</h2>
            <p>I regularly share insights and tutorials. Subscribe to stay updated with the latest content.</p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="subscribe-input"
              />
              <button className="btn-glow">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          padding: 120px 0 80px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        .blog-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 1rem 1.5rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .post-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--light);
          text-align: center;
        }

        .featured-posts {
          margin-bottom: 4rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
        }

        .featured-post {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .featured-post:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .post-image {
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
          background: linear-gradient(135deg, var(--glass) 0%, rgba(123, 97, 255, 0.1) 100%);
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .post-category {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: var(--primary);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .post-content {
          display: flex;
          flex-direction: column;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .post-title {
          font-size: 1.3rem;
          color: var(--light);
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .post-excerpt {
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1rem;
          flex: 1;
        }

        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          padding: 0.3rem 0.6rem;
          background: rgba(123, 97, 255, 0.2);
          border: 1px solid var(--primary);
          border-radius: 12px;
          font-size: 0.7rem;
          color: var(--primary);
        }

        .tag-more {
          padding: 0.3rem 0.6rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-size: 0.7rem;
          opacity: 0.7;
        }

        .read-more-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .read-more-btn:hover {
          color: var(--secondary);
          transform: translateX(5px);
        }

        .blog-posts {
          margin-bottom: 4rem;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-post {
          padding: 2rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .blog-post:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .post-category-tag {
          background: var(--secondary);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
        }

        .no-posts {
          text-align: center;
          padding: 3rem;
          margin: 2rem 0;
        }

        .no-posts h3 {
          color: var(--light);
          margin-bottom: 1rem;
        }

        .no-posts p {
          opacity: 0.8;
          margin: 0;
        }

        .blog-cta {
          margin-top: 4rem;
          padding: 3rem;
          text-align: center;
        }

        .blog-cta h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--light);
        }

        .blog-cta p {
          opacity: 0.8;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .subscribe-form {
          display: flex;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .subscribe-input {
          flex: 1;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          color: var(--light);
          font-size: 1rem;
        }

        .subscribe-input:focus {
          outline: none;
          border-color: var(--primary);
        }

        @media (max-width: 968px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .featured-post {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .post-image {
            height: 200px;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .subscribe-form {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .blog-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }

          .post-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .featured-post,
          .blog-post {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogPage