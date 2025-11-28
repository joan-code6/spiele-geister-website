import React, { useState, useEffect } from 'react';
import { FaTrophy, FaDice , FaSchool, FaBook, FaChild, FaGlassCheers, FaGraduationCap, FaChurch, FaEnvelope, FaMapMarkerAlt, FaUsers, FaGamepad } from 'react-icons/fa';
import './App.css';
import { FiTarget } from 'react-icons/fi';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is currently in view
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:Brettspielgeister@web.de?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\n\nNachricht:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              Über uns
            </button>
            <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
              Angebote
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Kontakt
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="section hero">
          <div className="hero-content">
            <img src="/logo.svg" alt="Spiele Geister Logo" className="hero-logo" />
            <h1 className="hero-h1">Brettspielgeister GbR</h1>
            <h2 className="hero-h2">Fachkräfte für Gesellschaftsspiele</h2>
            <p className="hero-subtitle">
              Weg vom Digitalen - hin zum Analogen
            </p>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <h2>Über uns</h2>
            <div className="quote">
              <p>"Beim Spiel kann man einen Menschen in einer Stunde besser kennenlernen als im Gespräch in einem Jahr."</p>
              <cite>– Plato</cite>
            </div>
            
            <div className="intro-text">
              <div className="intro-card">
                <div className="intro-icon"><FiTarget style={{ color: 'white' }} /></div>
                <p>
                  Wir haben es uns zur Aufgabe gemacht Gesellschaftsspiele in der Pädagogik einzusetzen.
                  Auf <strong>10 Jahre Erfahrung</strong> im Bereich Spiele können wir zurückgreifen. Spiele eignen sich nicht 
                  nur als reine Freizeitbeschäftigung, sondern sind Fördermöglichkeit im Bereich Gefühlskontrolle, 
                  Emotionale Entwicklung, Sozialkompetenz und vieles mehr.
                </p>
              </div>

              <div className="intro-highlights">
                <div className="intro-highlight">
                  <div className="intro-icon"><FaTrophy style={{ color: 'white' }} /></div>
                  <div className="highlight-content">
                    <h4>UNESCO Kulturerbe 2025</h4>
                    <p>Die Aufnahme in die Liste zum UNESCO Immaterielles Kulturerbe zeigt, wie wichtig Spiele und das Spielen ist.</p>
                  </div>
                </div>

                <div className="intro-highlight">
                  <div className="intro-icon"><FaDice style={{ color: 'white' }} /></div>
                  <div className="highlight-content">
                    <h4>Fast 800 Spiele</h4>
                    <p>Unser Bestand wächst regelmäßig - wir sind immer auf dem neusten Stand und es ist für jede Gelegenheit etwas dabei.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="team">
              <h3>Julia und Marco Dornburg</h3>
              
              <div className="team-member">
                <h4>Julia Dornburg</h4>
                <p>
                  Arbeitet seit über 25 Jahren in einer Stadtbibliothek und beschäftigt sich neben Büchern, 
                  viel mit Gesellschaftsspielen. Regelmäßige Spieleveranstaltungen für Kinder sind ihr wichtig. 
                  Seit einiger Zeit durchläuft sie Fortbildung zum Einsatz von Spielen als Bildungsmedium. 
                  2024 hat sie die zertifizierte Fortbildung zur <strong>Fachkraft für Gesellschaftsspiele</strong> absolviert.
                </p>
              </div>

              <div className="team-member">
                <h4>Marco Dornburg</h4>
                <p>
                  War 20 Jahre lang Store Manager in einem Spielwarenfachhandel, wo er unter anderem für die 
                  Spiele zuständig war. Er hatte hier Kontakt zu den großen Spieleverlagen und hat sich in dieser 
                  Zeit eingehend mit dem Thema spielen beschäftigt. Genau wie seine Frau Julia hat er den 
                  zertifizierten Lehrgang zur <strong>Fachkraft für Gesellschaftsspiele</strong> absolviert. 
                  Mittlerweile als Betreuer an einer Grundschule, hat er hier erste Versuche unternommen, 
                  Kinder an das Medium Spiele heran zu führen.
                </p>
              </div>

              <p className="team-mission">
                Gemeinsam teilen sie den Traum, Spiele als pädagogisches Lernmittel an Kindergärten, 
                Schulen und Betreuung zu bringen. Denn sie haben an ihren eigenen Kindern feststellen dürfen 
                wie fördernd Spiele für das Leben sein können.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <h2>Unsere Angebote</h2>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaSchool style={{ color: 'white' }} /></div>
                <h3>Schulen & Betreuung</h3>
                <p>Wir kommen zu euch an Schulen und bringen spielerisches Lernen direkt ins Klassenzimmer.</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaBook style={{ color: 'white' }} /></div>
                <h3>Bibliotheken</h3>
                <p>Spieleveranstaltungen in Bibliotheken für Kinder, Familien und Senioren oder für alle Altergruppen, von jung bis alt.</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaChild style={{ color: 'white' }} /></div>
                <h3>Kindergärten</h3>
                <p>Altersgerechte Spiele zur Förderung der kindlichen Entwicklung.</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaGlassCheers style={{ color: 'white' }} /></div>
                <h3>Events</h3>
                <p>Unterschiedlichste Events und Veranstaltungen rund um Gesellschaftsspiele.</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaGraduationCap style={{ color: 'white' }} /></div>
                <h3>VHS-Kurse</h3>
                <p>Wir geben Kurse an der VHS zum Thema Gesellschaftsspiele.</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaChurch style={{ color: 'white' }} /></div>
                <h3>Kirchen-Events</h3>
                <p>Mehrmals pro Jahr ein Spiele-Event mit der evangelischen Kirche Heusenstamm.</p>
              </div>
            </div>

            <div className="highlights">
              <div className="highlight-box">
                <h3>Fast 800 Spiele</h3>
                <p>Unser Bestand wächst regelmäßig - für jede Gelegenheit ist etwas dabei!</p>
              </div>
              <div className="highlight-box">
                <h3>10 Jahre Erfahrung</h3>
                <p>Langjährige Expertise im Bereich Gesellschaftsspiele.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2>Kontakt aufnehmen</h2>
            <p className="contact-intro">
              Interesse an unseren Angeboten? Schreibt uns eine Nachricht und wir melden uns zeitnah bei euch!
            </p>
            
            <div className="contact-wrapper">
              <div className="contact-form-container">
                <h3>Nachricht senden</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Betreff *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Nachricht *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Ihre Nachricht an uns..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    Nachricht senden
                  </button>

                  {formStatus === 'success' && (
                    <p className="form-success">Ihr E-Mail-Programm wurde geöffnet!</p>
                  )}
                </form>
              </div>

              <div className="contact-info-side">
                <h3>Kontaktinformationen</h3>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="detail-icon"><FaEnvelope style={{ color: 'white' }} /></div>
                    <div>
                      <h4>E-Mail</h4>
                      <a href="mailto:Brettspielgeister@web.de">Brettspielgeister@web.de</a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon"><FaMapMarkerAlt style={{ color: 'white' }} /></div>
                    <div>
                      <h4>Standort</h4>
                      <p>Heusenstamm, Deutschland</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon"><FaUsers style={{ color: 'white' }} /></div>
                    <div>
                      <h4>Ansprechpartner</h4>
                      <p>Julia und Marco Dornburg</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon"><FaDice  style={{ color: 'white' }} /></div>
                    <div>
                      <h4>Unsere Expertise</h4>
                      <p>Zertifizierte Fachkräfte für Gesellschaftsspiele</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/Logo_Farbverlauf.svg" alt="Spiele Geister Logo" className="footer-logo" />

          </div>

          <div className="footer-section">
            <h3>Kontakt</h3>
            <p>Julia und Marco Dornburg</p>
            <a href="mailto:Brettspielgeister@web.de">Brettspielgeister@web.de</a>
            <p>Heusenstamm, Deutschland</p>
          </div>

          <div className="footer-section">
            <h3>Unsere Mission</h3>
            <p>10 Jahre Erfahrung</p>
            <p>Fast 800 Spiele im Bestand</p>
            <p>Zertifizierte Fachkräfte</p>
          </div>

          <div className="footer-section">
            <h3>Angebote</h3>
            <p>Schulen & Betreuung</p>
            <p>Bibliotheken</p>
            <p>Kindergärten</p>
            <p>VHS-Kurse</p>
            <p>Events & Veranstaltungen</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Brettspielgeister GbR - Alle Rechte vorbehalten</p>
          <p>Julia und Marco Dornburg</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
