import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header: React.FC = () => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
  }}>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      <img src="/assets/logo.webp" alt="Logo" />
    </div>
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
        {['Home', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}-section`} style={{ color: 'white', textDecoration: 'none' }}>{item}</a>
          </li>
        ))}
      </ul>

    </nav>
  </header>
);

const HeroSection: React.FC = () => (
  <section className="hero-section" id="home-section">
    <div className="hero-content">
      <h1>Enjoy instant face swaps</h1>
      <p>Create amusing videos and photos using our advanced AI face swap tool</p>
    </div>
    <img src="/assets/swap_face.webp" alt="AI App" />
  </section>
);

const ProjectsSection1: React.FC = () => (
  <section style={{ padding: '2rem 1rem', textAlign: 'center' }} >
    <h2>Our Products</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <img className="project-logo" src="/assets/face_swap_logo.png" alt="AI App" />
      <h3 style={{ fontSize: '1.5rem' }}>AI Face Swap: Swap faces, unlock fun!</h3>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
      {[1, 2, 3, 4].map((index) => (
        <img key={index} src={`/assets/iPhone${index}${index}.png`} alt={`Project ${index}`} style={{
          width: 'calc(100% - 4rem)',
          maxWidth: '360px',
          height: 'auto',
          borderRadius: '10px',
          objectFit: 'cover',
        }} />
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
      <a href="https://apps.apple.com/app/id6737044577">
        <img src="/assets/appstore.svg" alt="App Store" style={{ width: '150px', height: 'auto' }} />
      </a>
      <a href="https://apps.apple.com/app/id6737044577">
        <img src="/assets/googleplay.svg" alt="Google Play" style={{ width: '150px', height: 'auto' }} />
      </a>
    </div>
  </section>
);

const ProjectsSection2: React.FC = () => (
  <section style={{ padding: '2rem 1rem', textAlign: 'center' }} >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <img className="project-logo" src="/assets/meme_maker_logo.png" alt="AI App" />
      <h3 style={{ fontSize: '1.5rem' }}>Meme Maker: Unleash Your Creativity, One Meme at a Time!</h3>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
      {[1, 2, 3].map((index) => (
        <img key={index} src={`/assets/mememaker${index}.png`} alt={`Project ${index}`} style={{
          width: 'calc(100% - 4rem)',
          maxWidth: '360px',
          height: 'auto',
          borderRadius: '10px',
          objectFit: 'cover',
        }} />
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
      <a href="https://apps.apple.com/app/id6677020081">
        <img src="/assets/appstore.svg" alt="App Store" style={{ width: '150px', height: 'auto' }} />
      </a>
      <a href="https://apps.apple.com/app/id6677020081">
        <img src="/assets/googleplay.svg" alt="Google Play" style={{ width: '150px', height: 'auto' }} />
      </a>
    </div>
  </section>
);

const Separator: React.FC = () => (
  <div style={{ width: '100%', height: '50vw', maxHeight: '586px', background: 'url(/assets/separate-div.svg) no-repeat center center', backgroundSize: 'cover' }}></div>
);


const AboutUsSection: React.FC = () => (
  <section style={{ padding: '2rem 1rem' }} id="about-section">
    <h2 >About Us</h2>
    <p >
      Team of product and brand designers passionate about technology and good design. We advocate for better product experience and common sense.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
      {['manson.jpg', 'brony.jpeg', 'lesly.jpg', 'eric.jpeg'].map((i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <img className="team-member-icon" src={`/assets/${i}`} alt={`Team Member ${i}`} />
          <h3 style={{ fontSize: '1rem' }}>{i.split('.')[0]}</h3>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="contact-section">
    <h2 >Contact Us</h2>
    <p >
      For further assistance, please contact us via:
    </p>
    <a href="mailto:support@beart.ai" style={{
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '1rem',
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      backgroundColor: 'blue',
      borderRadius: '5px',
      width: '200px'
    }}>
      support@beart.ai
    </a>
  </section>
);

const Footer: React.FC = () => (
  <footer style={{ padding: '1rem 0', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
    <p>&copy; 2024 Beart. All rights reserved.</p>
    <p>
      <Link to="/privacy/" style={{ color: '#888', textDecoration: 'none' }}>
        Privacy Policy
      </Link>
    </p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      overflowX: 'hidden',
    }}>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection1 />
        <ProjectsSection2 />
        <Separator />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
