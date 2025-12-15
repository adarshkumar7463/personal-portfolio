import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      )
      
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  return (
    <section id="contact" className="contact-section">
      {/* Success Message Popup at Top */}
      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <div className="success-text">
              <h3>Message Sent Successfully!</h3>
              <p>I'll get back to you within 24 hours.</p>
            </div>
            <button 
              className="close-btn"
              onClick={() => setShowSuccess(false)}
            >
              ×
            </button>
          </div>
          <div className="progress-bar"></div>
        </div>
      )}

      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </div>

        <div className="contact-content">
          {/* Contact Cards - Left Side */}
          <div className="contact-info">
            <div className="contact-card glass card-3d">
              <div className="contact-icon email-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>your.email@domain.com</p>
                <a href="mailto:your.email@domain.com" className="contact-link">
                  Send Email
                </a>
              </div>
            </div>

            <div className="contact-card glass card-3d">
              <div className="contact-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.5 21 12 19.5 8 15.5C4 11.5 2.5 7 3 4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H7.08C7.28 2 7.47 2.09 7.59 2.25C7.7 2.41 7.75 2.61 7.71 2.81L6.75 7.21C6.71 7.39 6.59 7.55 6.41 7.64C6.24 7.73 6.04 7.74 5.86 7.68C4.9 7.34 4.13 8.11 4.87 9.12C6.57 11.43 9.07 13.93 11.38 15.63C12.39 16.37 13.16 15.6 12.82 14.64C12.76 14.46 12.77 14.26 12.86 14.09C12.95 13.91 13.11 13.79 13.29 13.75L17.69 12.79C17.89 12.75 18.09 12.8 18.25 12.91C18.41 13.02 18.5 13.21 18.5 13.41V16.92C18.5 17.22 18.68 17.5 18.96 17.59C19.24 17.68 19.55 17.56 19.71 17.31C20.1 16.71 20.5 16.1 20.88 15.5C21.04 15.24 21.33 15.08 21.63 15.08C21.76 15.08 21.89 15.11 22 15.18C22.32 15.35 22.5 15.68 22.5 16.04C22.5 16.42 22.5 16.67 22 16.92Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 9876543210</p>
                <a href="tel:+919876543210" className="contact-link">
                  Call Now
                </a>
              </div>
            </div>

            <div className="contact-card glass card-3d">
              <div className="contact-icon whatsapp-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 14.5C17.255 14.5 17.02 14.5 16.79 14.43C16.56 14.36 16.35 14.23 16.17 14.06L13.75 12.5C13.31 12.16 12.8 11.98 12.29 11.98C11.77 11.98 11.26 12.16 10.82 12.5L8.37 14.06C8.19 14.23 7.98 14.36 7.75 14.43C7.52 14.5 7.28 14.5 7.04 14.5C6.45 14.5 5.88 14.27 5.45 13.86C5.02 13.45 4.77 12.9 4.77 12.31V7.69C4.77 7.1 5.02 6.55 5.45 6.14C5.88 5.73 6.45 5.5 7.04 5.5H17.5C18.09 5.5 18.65 5.73 19.08 6.14C19.51 6.55 19.77 7.1 19.77 7.69V12.31C19.77 12.9 19.51 13.45 19.08 13.86C18.65 14.27 18.09 14.5 17.5 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.29 10.5C13.37 10.5 14.25 9.62 14.25 8.54C14.25 7.46 13.37 6.58 12.29 6.58C11.21 6.58 10.33 7.46 10.33 8.54C10.33 9.62 11.21 10.5 12.29 10.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>WhatsApp</h3>
                <p>Available 9AM - 6PM IST</p>
                <a href="https://wa.me/919876543210" className="contact-link">
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-card glass card-3d">
              <div className="contact-icon location-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Based in India</p>
                <p className="availability">Available Worldwide</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <form className="contact-form glass card-3d" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'll respond within 24 hours</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 30px 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          background: #f8fafc;
        }

        /* Success Popup */
        .success-popup {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 450px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          z-index: 1000;
          animation: slideDown 0.3s ease-out;
          overflow: hidden;
        }

        @keyframes slideDown {
          from {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        .success-content {
          display: flex;
          align-items: center;
          padding: 1rem 1.25rem;
          gap: 0.75rem;
        }

        .success-icon {
          width: 32px;
          height: 32px;
          background: white;
          color: #059669;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .success-text h3 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .success-text p {
          margin: 0.15rem 0 0 0;
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 1.25rem;
          cursor: pointer;
          margin-left: auto;
          padding: 0;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .close-btn:hover {
          opacity: 1;
        }

        .progress-bar {
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: white;
          animation: progress 5s linear forwards;
        }

        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        /* Layout */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          align-items: start;
        }

        .contact-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        /* Contact Cards */
        .contact-card {
          padding: 1rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          transition: all 0.2s ease;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0.5rem;
        }

        .contact-icon svg {
          width: 20px;
          height: 20px;
        }

        .email-icon {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .phone-icon {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
        }

        .whatsapp-icon {
          background: linear-gradient(135deg, #059669, #10b981);
          color: white;
        }

        .location-icon {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: white;
        }

        .contact-details h3 {
          color: #1e293b;
          margin-bottom: 0.15rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .contact-details p {
          color: #64748b;
          margin: 0.1rem 0;
          font-size: 0.8rem;
          line-height: 1.3;
        }

        .contact-link {
          display: inline-block;
          margin-top: 0.3rem;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.8rem;
          transition: color 0.2s;
        }

        .contact-link:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        .availability {
          color: #f59e0b;
          font-weight: 600;
          font-size: 0.75rem;
        }

        /* Contact Form */
        .contact-form {
          padding: 1.5rem;
          border-radius: 12px;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .form-header h3 {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: #1e293b;
          font-weight: 600;
        }

        .form-header p {
          color: #64748b;
          margin: 0;
          font-size: 0.85rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.35rem;
          font-weight: 600;
          color: #475569;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          color: #1e293b;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          background: white;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
          max-height: 120px;
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.75rem 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 0.5rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
          margin-right: 6px;
          vertical-align: middle;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .contact-info {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-form {
            padding: 1.25rem;
          }
          
          .contact-section {
            min-height: auto;
            padding: 40px 0;
          }
        }

        @media (max-width: 768px) {
          .contact-info {
            grid-template-columns: 1fr;
          }
          
          .contact-section {
            padding: 30px 0;
          }
          
          .success-popup {
            width: 95%;
            top: 10px;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 0.85rem;
          }
          
          .contact-icon {
            width: 36px;
            height: 36px;
          }
          
          .contact-form {
            padding: 1rem;
          }
          
          .form-header h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact