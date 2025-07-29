import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://via.placeholder.com/120x40/0058A3/FFFFFF?text=QNET" 
              alt="QNET Logo" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("inicio")}
                className={`nav-link ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("productos")}
                className={`nav-link ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection("plan")}
                className={`nav-link ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Plan de Compensación
              </button>
              <button 
                onClick={() => scrollToSection("testimonios")}
                className={`nav-link ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className={`nav-link ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Contacto
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection("unete")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Únete Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("productos")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection("plan")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Plan de Compensación
              </button>
              <button 
                onClick={() => scrollToSection("testimonios")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection("unete")}
                className="block w-full text-left px-3 py-2 bg-orange-500 text-white rounded-lg mt-2"
              >
                Únete Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;