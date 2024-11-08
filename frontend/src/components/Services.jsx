import './Services.css';
import serviceIcon from '/src/assets/serviceIcon.png'; // Adjust path as needed

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src={serviceIcon} alt="Service Icon" className="service-icon" />
          <h3>AI-Powered Research Analysis for Eye Care</h3>
          <p>Utilize our AI model to analyze vast datasets, uncovering insights that drive better patient outcomes.</p>
          <div className="service-actions">
            <button className="service-btn">Learn More</button>
            <a href="#contact" className="sign-up-link">Sign Up &gt;</a> {/* Link to contact section */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon} alt="Service Icon" className="service-icon" />
          <h3>Request a Demo to Experience Our Solutions</h3>
          <p>See how our innovative tool can transform your practice.</p>
          <div className="service-actions">
            <button className="service-btn">Learn More</button>
            <a href="#contact" className="sign-up-link">Sign Up &gt;</a> {/* Link to contact section */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
