import { useState } from 'react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import './PopupForm.css';

const PopupForm = ({ isOpen, onClose, type }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const isDemo = type === 'demo';
  const title = isDemo ? 'Request Demo' : 'Contact Us';
  const successMessage = isDemo 
    ? 'Thank you! We will get back to you soon.'
    : 'Message sent successfully!';

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2 className="popup-title">{title}</h2>

        {!submitted ? (
          <form className="popup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="popup-input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="popup-input"
              placeholder="Email"
              required
            />
            {isDemo ? (
              <>
                <input
                  type="text"
                  className="popup-input"
                  placeholder="Organization"
                  required
                />
                <input
                  type="text"
                  className="popup-input"
                  placeholder="Role"
                  required
                />
              </>
            ) : (
              <textarea
                className="popup-input popup-textarea"
                placeholder="Message"
                required
              />
            )}
            <button type="submit" className="popup-submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupForm;