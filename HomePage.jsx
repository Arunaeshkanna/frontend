import bdImage from '../assets/logo.jpg';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to the Blood Report Management Portal</h1>
        <p>Your one-stop platform for accessing blood donors' information and patients' blood reports.</p>
        <a href="/appointment" className="cta-button">Make an Appointment</a>
      </header>

      <section className="info-section">
        <h2>Why Donate Blood?</h2>
        <p>Every donation can save up to three lives. Blood donation is crucial for patients in need.</p>
        <p>Join our community of heroes and make a difference today!</p>

        {/* Floating image directly under this section */}
        <aside className="floating-image">
          <img src={bdImage} alt="Blood Donation" />
        </aside>
      </section>

      <footer className="footer">
        <p>Contact us through:</p>
        <div className="contact-icons">
          <a href="tel:+1234567890" className="icon-link">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="mailto:info@bloodreport.com" className="icon-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://wa.me/1234567890" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
