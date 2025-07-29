import React from "react";
import { 
  Facebook, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, ExternalLink 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="https://via.placeholder.com/150x50/FFFFFF/0058A3?text=QNET" 
              alt="QNET Logo" 
              className="h-12 mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              QNET es una empresa de marketing multinivel con más de 20 años de experiencia, 
              presente en más de 25 países. Construye tu negocio global desde Argentina.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                <span className="text-gray-300">info@qnet.com.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("productos")}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("plan")}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Plan de Compensación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonios")}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                >
                  Catálogo de Productos
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6">Síguenos</h3>
            <div className="space-y-4 mb-6">
              <a 
                href="https://instagram.com/qnetargentina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <Instagram size={20} />
                <span>@qnetargentina</span>
              </a>
              <a 
                href="https://facebook.com/qnetargentina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <Facebook size={20} />
                <span>QNET Argentina</span>
              </a>
              <a 
                href="https://linkedin.com/company/qnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span>QNET</span>
              </a>
              <a 
                href="https://youtube.com/qnetargentina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <Youtube size={20} />
                <span>QNET Argentina</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/5491112345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} QNET Argentina. Todos los derechos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Políticas QNET
              </a>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Patrocinador Oficial
              </div>
              <div className="text-gray-400 text-xs mt-1">Manchester City FC</div>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Fundación RYTHM
              </div>
              <div className="text-gray-400 text-xs mt-1">Responsabilidad Social</div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Certificado ISO
              </div>
              <div className="text-gray-400 text-xs mt-1">Calidad Internacional</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;