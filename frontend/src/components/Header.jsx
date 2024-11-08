import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">netraya.</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#articles">Articles</a></li>
        </ul>
      </nav>
      <button className="contact-btn">Contact Us</button>
    </header>
  );
};

export default Header;
