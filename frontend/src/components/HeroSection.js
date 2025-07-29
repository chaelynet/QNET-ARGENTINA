import React from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Inline styles to force contrast - this ensures styles persist
  const heroSectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(30,64,175,0.8), rgba(0,0,0,0.85))',
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    color: 'white',
    textAlign: 'center',
    width: '100%'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '900',
    marginBottom: '2rem',
    lineHeight: '1.1',
    textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
    color: '#ffffff'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
    fontWeight: '600',
    marginBottom: '3rem',
    lineHeight: '1.4',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    color: '#ffffff',
    maxWidth: '800px',
    margin: '0 auto 3rem'
  };

  return (
    <section id="inicio" style={heroSectionStyle}>
      {/* Force dark overlay */}
      <div style={overlayStyle}></div>
      
      <div style={contentStyle} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 style={titleStyle}>
            Construí tu negocio global 
            <span style={{color: '#FB923C', display: 'block', textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}>
              QNET desde Argentina
            </span>
          </h1>
          
          <p style={subtitleStyle}>
            Únete a la red de marketing multinivel más exitosa del mundo. 
            <span style={{display: 'block', marginTop: '0.5rem', color: '#FED7AA'}}>
              Sin inventario, sin límites geográficos, con productos premiados.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection("productos")}
              style={{
                backgroundColor: '#F97316',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: '1.25rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#EA580C'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#F97316'}
            >
              Descubrí Más
              <ArrowRight size={24} />
            </button>
            
            <button 
              onClick={() => scrollToSection("unete")}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '0.75rem',
                fontWeight: '700',
                fontSize: '1.25rem',
                border: '3px solid white',
                cursor: 'pointer',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#1E3A8A';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Únete Hoy
              <Play size={18} />
            </button>
          </div>

          {/* Stats with forced dark background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t-2 border-white/30">
            {[
              { number: '25+', label: 'Países' },
              { number: '20+', label: 'Años de Experiencia' },
              { number: '1M+', label: 'Distribuidores Activos' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 6vw, 3rem)',
                  fontWeight: '900',
                  color: '#FB923C',
                  marginBottom: '0.5rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;