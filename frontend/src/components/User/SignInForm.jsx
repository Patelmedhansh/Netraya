import './SignInForm.css';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import doctorImage2 from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/doctorImage2.png'; 
import logo from 'C:/Users/DELL/Desktop/netraya/frontend/src/assets/logo.png';

const SignInForm = () => {
  return (
    <div className="signin-container">
      <div className="logo-container">
        <img src={logo} alt="Netraya Logo" className="logo-top" />
      </div>
      <div className="form-section">
        <h1>Sign In</h1>
        <form>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-group">
            <FaKey className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="submit-button">Sign In</button>
        </form>
        <p className="signup-link"> Don&apos;t have an account? <a href="/signup">Create</a></p>
      </div>
      <div className="image-section">
        <img src={doctorImage2} alt="Doctor" className="doctor-image" />
      </div>
    </div>
  );
};

export default SignInForm;
