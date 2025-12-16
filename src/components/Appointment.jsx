import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "emailjs-com";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode on component mount
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const checkDarkMode = () => {
      setIsDarkMode(darkModeMediaQuery.matches);
    };
    
    checkDarkMode();
    darkModeMediaQuery.addEventListener('change', checkDarkMode);
    
    return () => darkModeMediaQuery.removeEventListener('change', checkDarkMode);
  }, []);

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Technical Consultation",
    "Project Review",
    "Career Guidance",
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date ? date.toISOString().split("T")[0] : "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID_appoinment,  // From .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_appoinment, // From .env
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          to_email: import.meta.env.VITE_ADMIN_EMAIL || import.meta.env.VITE_CONTACT_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_API_KEY_appoinment 
      );

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // Determine colors based on mode
  const colors = isDarkMode ? {
    bg: "#0f172a",
    cardBg: "#1e293b",
    cardBorder: "#334155",
    textPrimary: "#f1f5f9",
    textSecondary: "#94a3b8",
    inputBg: "#0f172a",
    inputBorder: "#475569",
    inputFocus: "#334155",
    successBg: "#10b981",
    primary: "#6366f1",
    secondary: "#8b5cf6",
    lightBg: "#1e293b"
  } : {
    bg: "#f8fafc",
    cardBg: "#ffffff",
    cardBorder: "#e2e8f0",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    inputBg: "#f8fafc",
    inputBorder: "#e2e8f0",
    inputFocus: "#ffffff",
    successBg: "#10b981",
    primary: "#6366f1",
    secondary: "#8b5cf6",
    lightBg: "#ffffff"
  };

  return (
    <section id="appointment" className="appointment-section" style={{ backgroundColor: colors.bg }}>
      {showSuccess && (
        <div className="success-popup" style={{ background: `linear-gradient(135deg, ${colors.successBg}, #059669)` }}>
          <div className="success-content">
            <div className="success-icon">✓</div>
            <div className="success-text">
              <h3>Appointment Booked!</h3>
              <p>Confirmation email sent.</p>
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
          <h2 className="section-title gradient-text">Book an Appointment</h2>
          <p className="section-subtitle">Schedule a consultation</p>
        </div>

        <div className="appointment-content">
          {/* Left Side - Very Compact Info Cards */}
          <div className="appointment-info">
            <div className="info-card" style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.cardBorder,
              color: colors.textPrimary
            }}>
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h3 style={{ color: colors.textPrimary }}>30 Min</h3>
                <p style={{ color: colors.textSecondary }}>Free</p>
              </div>
            </div>

            <div className="info-card" style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.cardBorder,
              color: colors.textPrimary
            }}>
              <div className="info-icon">💬</div>
              <div className="info-content">
                <h3 style={{ color: colors.textPrimary }}>Video</h3>
                <p style={{ color: colors.textSecondary }}>Call</p>
              </div>
            </div>

            <div className="info-card" style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.cardBorder,
              color: colors.textPrimary
            }}>
              <div className="info-icon">📋</div>
              <div className="info-content">
                <h3 style={{ color: colors.textPrimary }}>Plan</h3>
                <p style={{ color: colors.textSecondary }}>After</p>
              </div>
            </div>

            <div className="info-card" style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.cardBorder,
              color: colors.textPrimary
            }}>
              <div className="info-icon">⚡</div>
              <div className="info-content">
                <h3 style={{ color: colors.textPrimary }}>Fast</h3>
                <p style={{ color: colors.textSecondary }}>2 Hrs</p>
              </div>
            </div>
          </div>

          {/* Right Side - Broad Form */}
          <form className="appointment-form" onSubmit={handleSubmit} style={{ 
            backgroundColor: colors.cardBg,
            borderColor: colors.cardBorder 
          }}>
            <div className="form-header">
              <h3 style={{ color: colors.textPrimary }}>Schedule Consultation</h3>
              <p style={{ color: colors.textSecondary }}>Fill form & get confirmation</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label style={{ color: colors.textSecondary }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={{
                    backgroundColor: colors.inputBg,
                    borderColor: colors.inputBorder,
                    color: colors.textPrimary
                  }}
                />
              </div>

              <div className="form-group">
                <label style={{ color: colors.textSecondary }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={{
                    backgroundColor: colors.inputBg,
                    borderColor: colors.inputBorder,
                    color: colors.textPrimary
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label style={{ color: colors.textSecondary }}>Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: colors.inputBg,
                  borderColor: colors.inputBorder,
                  color: colors.textPrimary
                }}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Horizontal Date & Time Section */}
            <div className="datetime-section">
              <div className="calendar-column">
                <label style={{ color: colors.textSecondary }}>Date *</label>
                <div className="calendar-container" style={{ 
                  backgroundColor: colors.inputBg,
                  borderColor: colors.inputBorder 
                }}>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()}
                    className={`custom-calendar ${isDarkMode ? 'dark-calendar' : ''}`}
                  />
                </div>
              </div>

              <div className="time-column">
                <label style={{ color: colors.textSecondary }}>Time *</label>
                <div className="time-slots">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`time-slot ${
                        formData.time === time ? "selected" : ""
                      }`}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          time,
                        })
                      }
                      style={{
                        backgroundColor: formData.time === time 
                          ? colors.primary 
                          : colors.inputBg,
                        borderColor: formData.time === time 
                          ? colors.primary 
                          : colors.inputBorder,
                        color: formData.time === time 
                          ? '#ffffff' 
                          : colors.textPrimary
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label style={{ color: colors.textSecondary }}>Details *</label>
              <textarea
                name="message"
                value={formData.message}
                required
                onChange={handleChange}
                rows="2"
                placeholder="Project details..."
                style={{
                  backgroundColor: colors.inputBg,
                  borderColor: colors.inputBorder,
                  color: colors.textPrimary
                }}
              ></textarea>
            </div>

            <button className="submit-btn" disabled={isSubmitting} style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
            }}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Scheduling...
                </>
              ) : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .appointment-section {
          padding: 30px 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
          position: relative;
          transition: background-color 0.3s ease;
        }

        /* Success Popup */
        .success-popup {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 380px;
          color: white;
          border-radius: 10px;
          padding: 0;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
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
          padding: 0.8rem 1rem;
          gap: 0.6rem;
        }

        .success-icon {
          width: 28px;
          height: 28px;
          background: white;
          color: #059669;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .success-text h3 {
          margin: 0;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .success-text p {
          margin: 0.1rem 0 0 0;
          font-size: 0.7rem;
          opacity: 0.9;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          margin-left: auto;
          padding: 0;
          width: 18px;
          height: 18px;
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

        /* Layout - Very Compact Sidebar, Broad Form */
        .appointment-content {
          display: grid;
          grid-template-columns: 280px 1fr; /* Fixed narrow sidebar, broad form */
          gap: 1.5rem;
          align-items: start;
        }

        /* Left Side - Very Compact Cards */
        .appointment-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          width: 100%;
        }

        .info-card {
          padding: 0.7rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.2s ease;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          min-height: 60px;
          width: 100%;
        }

        .info-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
        }

        .info-icon {
          font-size: 1rem;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .info-card:nth-child(2) .info-icon {
          background: linear-gradient(135deg, #10b981, #34d399);
        }

        .info-card:nth-child(3) .info-icon {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
        }

        .info-card:nth-child(4) .info-icon {
          background: linear-gradient(135deg, #ec4899, #f472b6);
        }

        .info-content h3 {
          font-size: 0.8rem;
          margin-bottom: 0.1rem;
          font-weight: 600;
          line-height: 1;
        }

        .info-content p {
          margin: 0;
          font-size: 0.7rem;
          line-height: 1.1;
          opacity: 0.8;
        }

        /* Right Side - Broad Form */
        .appointment-form {
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          width: 100%;
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .form-header h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .form-header p {
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
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          font-family: inherit;
          border: 1.5px solid;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 70px;
          max-height: 100px;
        }

        /* Horizontal Date & Time Section */
        .datetime-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1rem;
          align-items: start;
        }

        .calendar-column,
        .time-column {
          display: flex;
          flex-direction: column;
        }

        .calendar-column label,
        .time-column label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .calendar-container {
          border-radius: 10px;
          padding: 0.75rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid;
        }

        /* Calendar Styling */
        :global(.custom-calendar) {
          width: 100% !important;
          border: none !important;
          background: transparent !important;
          font-family: inherit !important;
          font-size: 0.85rem !important;
        }

        :global(.custom-calendar .react-calendar__tile) {
          padding: 0.5em 0.3em !important;
          font-size: 0.8rem !important;
          min-height: 36px !important;
          border-radius: 6px !important;
          transition: all 0.2s !important;
        }

        :global(.custom-calendar .react-calendar__tile:hover) {
          background: rgba(99, 102, 241, 0.1) !important;
        }

        :global(.custom-calendar .react-calendar__tile--active) {
          background: #6366f1 !important;
          color: white !important;
        }

        :global(.dark-calendar) {
          color: #f1f5f9 !important;
        }

        :global(.dark-calendar .react-calendar__tile) {
          color: #cbd5e1 !important;
        }

        :global(.dark-calendar .react-calendar__tile:hover) {
          background: rgba(99, 102, 241, 0.2) !important;
        }

        :global(.dark-calendar .react-calendar__tile--active) {
          background: #6366f1 !important;
          color: white !important;
        }

        /* Time Slots */
        .time-slots {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          height: 100%;
        }

        .time-slot {
          padding: 0.7rem 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          border: 1.5px solid;
        }

        .time-slot:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .time-slot.selected {
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
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
        @media (max-width: 1024px) {
          .appointment-content {
            grid-template-columns: 240px 1fr;
          }
          
          .datetime-section {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .appointment-content {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          .appointment-info {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
          }
          
          .info-card {
            flex-direction: column;
            text-align: center;
            padding: 0.6rem;
            min-height: 70px;
          }
          
          .info-icon {
            margin-bottom: 0.3rem;
          }
          
          .appointment-section {
            padding: 25px 0;
            min-height: auto;
          }
          
          .success-popup {
            width: 95%;
            top: 10px;
            max-width: 320px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .datetime-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .time-slots {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .appointment-info {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          
          .time-slots {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .appointment-info {
            grid-template-columns: 1fr;
          }
          
          .appointment-form {
            padding: 1.25rem;
          }
          
          .form-header h3 {
            font-size: 1.2rem;
          }
          
          .datetime-section {
            gap: 1rem;
          }
          
          .time-slots {
            grid-template-columns: 1fr;
          }
          
          .time-slot {
            padding: 0.6rem;
            font-size: 0.75rem;
          }
          
          .info-card {
            flex-direction: row;
            text-align: left;
            min-height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Appointment;