import './RegistrationForm.css';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUpload, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const RegistrationForm = () => {
  return (
    <div className="regform-container">
      <div className="regform-form">
        <header className="regform-form-header">
          <img src={logo} alt="Netraya Logo" className="regform-form-logo" />
          <h1>Welcome </h1>
          <p>Let us know more about yourself</p>
        </header>

        <section className="regform-form-section">
          <h2>Personal Information</h2>
          <div className="regform-form-group">
            <div className="regform-input-icon">
              <FaUser className="icon" />
              <input type="text" placeholder="Full name" className="regform-form-input" />
            </div>
            <div className="regform-input-icon">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email address" className="regform-form-input" />
            </div>
            <div className="regform-input-icon">
              <FaPhone className="icon" />
              <input type="tel" placeholder="Phone number" className="regform-form-input" />
            </div>
            <div className="regform-input-icon">
  <FaCalendarAlt className="icon" />
  <input
    type="text"
    placeholder="Date of Birth (dd-mm-yyyy)"
    className="regform-form-input"
    onFocus={(e) => (e.target.type = 'date')}
    onBlur={(e) => (e.target.type = 'text')}
  />
</div>

            <div className="regform-gender-group">
              <label className="regform-radio">
                <input type="radio" name="gender" value="male" />
                <span className="regform-radio-circle"></span>
                Male
              </label>
              <label className="regform-radio">
                <input type="radio" name="gender" value="female" />
                <span className="regform-radio-circle"></span>
                Female
              </label>
              <label className="regform-radio">
                <input type="radio" name="gender" value="other" />
                <span className="regform-radio-circle"></span>
                Other
              </label>
            </div>

            <div className="regform-input-icon">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Personal address" className="regform-form-input" />
            </div>
          </div>
        </section>

        <section className="regform-form-section">
          <h2>Medical Information</h2>
          <div className="regform-form-group">
            <input type="text" placeholder="Specialization" className="regform-form-input" />
            <input type="text" placeholder="License number" className="regform-form-input" />
            <input type="text" placeholder="Length of practice" className="regform-form-input" />
            <input type="text" placeholder="Hospital/clinic affiliation" className="regform-form-input" />
          </div>
        </section>

        <section className="regform-form-section">
          <h2>Identification and Verification</h2>
          <div className="regform-form-group">
            <select className="regform-form-input">
              <option>Board Certificate</option>
              <option>License</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="Identification Number" className="regform-form-input" />
            <div className="regform-file-upload">
              <FaUpload className="regform-upload-icon" />
              <p>Click to upload or drag and drop</p>
              <small>PDF, JPG, or PNG file. Max size: 800×400px</small>
            </div>
          </div>
        </section>

        <section className="regform-form-section">
          <h2>Consent and Privacy</h2>
          <div className="regform-form-group regform-consent-group">
            <label className="regform-checkbox">
              <input type="checkbox" />
              <span className="regform-checkbox-custom"></span>
              I consent to receive treatment for my health condition.
            </label>
            <label className="regform-checkbox">
              <input type="checkbox" />
              <span className="regform-checkbox-custom"></span>
              I consent to the use and disclosure of my health information for treatment purposes.
            </label>
            <label className="regform-checkbox">
              <input type="checkbox" />
              <span className="regform-checkbox-custom"></span>
              I acknowledge that I have reviewed and agree to the privacy policy.
            </label>
          </div>
        </section>

        <button type="submit" className="regform-submit-button">Submit and continue</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
