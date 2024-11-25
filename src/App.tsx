import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adding a background color to ensure readability
    backdropFilter: 'blur(10px)', // Adding a blur effect for better aesthetics
  }}>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      <img src="/assets/logo.webp" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
    </div>
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li>
          <a href="#hero-section" style={{ color: 'white', textDecoration: 'none', scrollBehavior: 'smooth' }}>Home</a>
        </li>
        <li>
          <a href="#about-section" style={{ color: 'white', textDecoration: 'none', scrollBehavior: 'smooth' }}>About</a>
        </li>
        <li>
          <a href="#contact-section" style={{ color: 'white', textDecoration: 'none', scrollBehavior: 'smooth' }}>Contact</a>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const HeroSection: React.FC = () => (
  <section style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '100px',
  }} id="hero-section">

    <h1 style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      textAlign: 'justify',
      height: '100%',
      fontSize: '4rem',
      marginBottom: '1rem',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '2rem 2rem',
    }}>Enjoy instant
      < br /> face swaps
      < p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#888', zIndex: 1 }}> Create amusing videos and photos  <br /> using our advanced AI face swap tool
      </p >
    </h1 >
    <img src="/assets/swap_face.webp" alt="AI App" style={{ width: '100', height: '254', }} />
  </section >
);

const ProjectsSection: React.FC = () => (
  <section style={{ padding: '0rem 2rem' }}>
    <h2 style={{ fontSize: '4rem', textAlign: 'center' }}>our products</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}><img src="/assets/face_swap_logo.png" alt="AI App" style={{ width: '150px', height: '150px', borderRadius: '20px' }} /></div>
    <h3 style={{ fontSize: '2rem', textAlign: 'center' }}>AI Face Swap: Swap faces, unlock fun!</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '3rem' }}>
      <img src="/assets/iPhone11.png" alt="Project 1" style={{ width: '390px', height: '844px', borderRadius: '10px', objectFit: 'fill' }} />
      <img src="/assets/iPhone22.png" alt="Project 1" style={{ width: '390px', height: '844px', borderRadius: '10px', objectFit: 'fill' }} />
      <img src="/assets/iPhone33.png" alt="Project 1" style={{ width: '390px', height: '844px', borderRadius: '10px', objectFit: 'fill' }} />
      <img src="/assets/iPhone44.png" alt="Project 1" style={{ width: '390px', height: '844px', borderRadius: '10px', objectFit: 'fill' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
      <a href="https://apps.apple.com/app/id6737044577">
        <img src="/assets/appstore.svg" alt="App Store" />
      </a>
      <a href="https://apps.apple.com/app/id6737044577">
        <img src="/assets/googleplay.svg" alt="Google Play" />
      </a>
    </div>
  </section>
);

const Separator: React.FC = () => (
  <div style={{ width: '100%', height: '586px', background: 'url(/assets/separate-div.svg) no-repeat center center', backgroundSize: 'cover' }}></div>
);

const HelpSection: React.FC = () => (
  <section style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute',
      left: '-25%',
      bottom: '-25%',
      width: '50%',
      height: '50%',
      background: 'linear-gradient(45deg, #00ff00, #0000ff)',
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.5,
    }}></div>
    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', width: '100%', textAlign: 'center' }}>How we can help grow</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>Product clarity</li>
        <li style={{ marginBottom: '1rem' }}>UX/UI design</li>
        <li style={{ marginBottom: '1rem' }}>Maintain process</li>
      </ul>
      <img src="/assets/help01.jpg" alt="Help Section" />
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.5rem', textAlign: 'right' }}>
        <li style={{ marginBottom: '1rem' }}>product goal&vision  </li>
        <li style={{ marginBottom: '1rem' }}>brand voice.</li>
        <li style={{ marginBottom: '1rem' }}>product positioning </li>
      </ul>
    </div>
    <div style={{
      position: 'absolute',
      right: '-25%',
      bottom: '-25%',
      width: '50%',
      height: '50%',
      background: 'linear-gradient(45deg, #00ff00, #0000ff)',
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.5,
    }}></div>
  </section>
);

const AboutUsSection: React.FC = () => (
  <section style={{ padding: '4rem 2rem' }} id="about-section">
    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', width: '100%', textAlign: 'center' }}>About Us</h2>
    <p style={{ marginBottom: '2rem', color: '#888', fontSize: '1.5rem' }}>
      Team of product and brand designers that are really passionate about technology and good design. We are not just UI freaks! We advocate users for better product experience and common sense.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8rem' }}>
      {['manson.jpg', 'brony.jpeg', 'lesly.jpg', 'eric.jpeg'].map((i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <img src={`/assets/${i}`} alt={`Team Member ${i}`} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.2rem' }}>{i.split('.')[0]}</h3>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section style={{ padding: '4rem 2rem' }} id="contact-section">
    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', width: '100%', textAlign: 'center' }}>Contact Us</h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <p style={{ marginBottom: '2rem', color: '#888', fontSize: '1.5rem' }}>
        For further assistance, please contact us via:
      </p>
      <a href="mailto:jim507735@gmail.com" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', marginLeft: '1rem' }}>
        jim507735@gmail.com
        <img src="/assets/right-arrow.svg" alt="Email" />
      </a>
    </div>

  </section>
);

const Footer: React.FC = () => (
  <footer style={{ padding: '2rem 0', textAlign: 'center', color: '#888' }}>
    <p> @2024 Beart. All rights reserved.</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      width: '100vw',
      overflowX: 'hidden',
      overflowY: 'hidden', // Hide the vertical scrollbar
    }}>
      <Header />
      <main style={{ maxWidth: '100%' }}>
        <HeroSection />
        <ProjectsSection />
        <Separator />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;