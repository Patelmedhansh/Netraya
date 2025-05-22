import './Hero.css';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Revolutionizing Eye Health with AI-Powered Diagnostic</h1>
        <p>Unleash the power of deep learning technology to detect diabetic retinopathy and optimize ophthalmology research.</p>
        <a 
          href="https://www.perlego.com/book/1011064/handbook-of-retinal-screening-in-diabetes-diagnosis-and-management-pdf" 
          className="learn-more-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Eye health illustration" />
      </div>
    </section>
  );
};

export default Hero;
