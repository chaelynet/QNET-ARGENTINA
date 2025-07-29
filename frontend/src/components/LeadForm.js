import React, { useState } from "react";
import { Send, User, Mail, Phone, Target } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    interest: "productos",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Debes aceptar el consentimiento para continuar");
      return;
    }

    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          interest: "productos",
          consent: false
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="unete" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Gracias por tu Interés!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Hemos recibido tu información. Un líder QNET se contactará contigo en las próximas 24 horas.
            </p>
            <p className="text-orange-600 font-semibold">
              Revisa tu WhatsApp para recibir información adicional
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="unete" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Únete a QNET Argentina!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Completa el formulario y recibe información personalizada sobre 
            cómo empezar tu camino hacia la libertad financiera
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Información de Contacto</h3>
            <p className="text-blue-100">Tu información está 100% protegida</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Target size={16} className="inline mr-2" />
                  ¿Qué te interesa más? *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="productos">Productos QNET</option>
                  <option value="negocio">Oportunidad de Negocio</option>
                  <option value="ambos">Productos y Negocio</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600 leading-relaxed">
                Acepto que QNET Argentina se contacte conmigo vía WhatsApp, email o teléfono 
                para brindarme información sobre productos y oportunidades de negocio. 
                Mis datos serán tratados conforme a la 
                <a href="#" className="text-blue-600 hover:underline"> Política de Privacidad</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Quiero Empezar Ahora
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500">
              Al enviar este formulario, un líder QNET se contactará contigo en menos de 24 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;