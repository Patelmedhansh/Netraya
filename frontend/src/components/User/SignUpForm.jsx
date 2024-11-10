import './SignUpForm.css';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import doctorImage1 from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/doctorImage1.png';
import logo from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/logo.png';

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src={logo} alt="Netraya Logo" className="logo-top" />
      </div>
      <div className="form-section">
        <h1>Hi there, ....</h1>
        <form>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Full name" />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input type="tel" placeholder="Phone number" />
          </div>
          <button type="submit" className="submit-button">Get Started</button>
        </form>
      </div>
      <div className="image-section">
        <img src={doctorImage1} alt="Doctor" className="doctor-image" />
      </div>
    </div>
  );
};

export default SignUpForm;
