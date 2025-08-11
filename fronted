@@ -1,78 +1,176 @@
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
    <section id="inicio" className="hero-section relative min-h-screen flex items-center">
      {/* Background overlay - Much darker for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-blue-900/90 to-black/80"></div>
      
      {/* Secondary overlay for extra darkness */}
      <div className="absolute inset-0 bg-black/40"></div>
    <section id="inicio" style={heroSectionStyle}>
      {/* Force dark overlay */}
      <div style={overlayStyle}></div>

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div style={contentStyle} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
          <h1 style={titleStyle}>
            Construí tu negocio global 
            <span className="text-orange-400 block text-shadow-lg">QNET desde Argentina</span>
            <span style={{color: '#FB923C', display: 'block', textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}>
              QNET desde Argentina
            </span>
          </h1>

          <p className="hero-subtitle text-2xl md:text-3xl mb-10 text-white font-semibold max-w-3xl mx-auto drop-shadow-xl leading-relaxed">
          <p style={subtitleStyle}>
            Únete a la red de marketing multinivel más exitosa del mundo. 
            <span className="block mt-2 text-orange-300">Sin inventario, sin límites geográficos, con productos premiados.</span>
            <span style={{display: 'block', marginTop: '0.5rem', color: '#FED7AA'}}>
              Sin inventario, sin límites geográficos, con productos premiados.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection("productos")}
              className="hero-btn-primary bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
              className="hero-btn-secondary border-3 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-3 transition-all duration-300 shadow-2xl"
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

          {/* Stats - Enhanced visibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-10 border-t-2 border-white/30">
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 drop-shadow-lg">25+</div>
              <div className="text-white font-semibold text-lg">Países</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 drop-shadow-lg">20+</div>
              <div className="text-white font-semibold text-lg">Años de Experiencia</div>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2 drop-shadow-lg">1M+</div>
              <div className="text-white font-semibold text-lg">Distribuidores Activos</div>
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

