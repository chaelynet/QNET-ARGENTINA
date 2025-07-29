import React from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="hero-section relative min-h-screen flex items-center">
      {/* Background overlay - Much darker for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-blue-900/90 to-black/80"></div>
      
      {/* Secondary overlay for extra darkness */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
            Construí tu negocio global 
            <span className="text-orange-400 block text-shadow-lg">QNET desde Argentina</span>
          </h1>
          
          <p className="hero-subtitle text-2xl md:text-3xl mb-10 text-white font-semibold max-w-3xl mx-auto drop-shadow-xl leading-relaxed">
            Únete a la red de marketing multinivel más exitosa del mundo. 
            <span className="block mt-2 text-orange-300">Sin inventario, sin límites geográficos, con productos premiados.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection("productos")}
              className="hero-btn-primary bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Descubrí Más
              <ArrowRight size={24} />
            </button>
            
            <button 
              onClick={() => scrollToSection("unete")}
              className="hero-btn-secondary border-3 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-3 transition-all duration-300 shadow-2xl"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;