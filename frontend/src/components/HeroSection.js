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
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construí tu negocio global 
            <span className="text-orange-400 block">QNET desde Argentina</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Únete a la red de marketing multinivel más exitosa del mundo. 
            Sin inventario, sin límites geográficos, con productos premiados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection("productos")}
              className="hero-btn-primary bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Descubrí Más
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection("unete")}
              className="hero-btn-secondary border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300"
            >
              Únete Hoy
              <Play size={16} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">25+</div>
              <div className="text-gray-300">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">20+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">1M+</div>
              <div className="text-gray-300">Distribuidores Activos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;