import './RegistrationForm.css';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUpload } from 'react-icons/fa';
import logo from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/logo.png';
import sideImage from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/sideImage.png';

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <img src={sideImage} alt="Side decoration" className="side-image left" />
      <div className="registration-form">
        <header className="form-header">
          <img src={logo} alt="Netraya Logo" className="form-logo" />
          <h1>Welcome <span role="img" aria-label="wave">👋</span></h1>
          <p>Let us know more about yourself</p>
        </header>

        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <input type="text" placeholder="Full name" className="form-input" />
            <div className="input-icon">
              <FaEnvelope />
              <input type="email" placeholder="Email address" className="form-input" />
            </div>
            <div className="input-icon">
              <FaPhone />
              <input type="tel" placeholder="Phone number" className="form-input" />
            </div>
            <div className="input-icon">
              <FaCalendarAlt />
              <input type="date" placeholder="Date of birth" className="form-input" />
            </div>
            <div className="gender-group">
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
              <label><input type="radio" name="gender" value="other" /> Other</label>
            </div>
            <input type="text" placeholder="Personal address" className="form-input" />
          </div>
        </section>

        <section className="form-section">
          <h2>Medical Information</h2>
          <div className="form-group">
            <input type="text" placeholder="Specialization" className="form-input" />
            <input type="text" placeholder="License number" className="form-input" />
            <input type="text" placeholder="Length of practice" className="form-input" />
            <input type="text" placeholder="Hospital/clinic affiliation" className="form-input" />
          </div>
        </section>

        <section className="form-section">
          <h2>Identification and Verification</h2>
          <div className="form-group">
            <select className="form-input">
              <option>Board Certificate</option>
              <option>License</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="Identification Number" className="form-input" />
            <div className="file-upload">
              <FaUpload className="upload-icon" />
              <p>Click to upload or drag and drop</p>
              <small>PDF, JPG, or PNG file. Max size: 800×400px</small>
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Consent and Privacy</h2>
          <div className="form-group consent-group">
            <label><input type="checkbox" /> I consent to receive treatment for my health condition.</label>
            <label><input type="checkbox" /> I consent to the use and disclosure of my health information for treatment purposes.</label>
            <label><input type="checkbox" /> I acknowledge that I have reviewed and agree to the privacy policy.</label>
          </div>
        </section>

        <button type="submit" className="submit-button">Submit and continue</button>
      </div>
      <img src={sideImage} alt="Side decoration" className="side-image right" />
    </div>
  );
};

export default RegistrationForm;
