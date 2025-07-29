import React from "react";
import { upcomingEvents } from "../mockData";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const EventsSection = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Webinars & Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capacitación continua y networking con los líderes más exitosos de QNET
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-2 ${event.type === 'Virtual' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'Virtual' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {event.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={16} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={16} />
                    <span>{event.type}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300">
                  Inscribirme Gratis
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-center text-white">
          <Users size={64} className="mx-auto mb-6 text-white/80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para el Siguiente Nivel?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Únete a nuestros eventos exclusivos y aprende de los líderes más exitosos. 
            Networking, capacitación y estrategias probadas te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Ver Todos los Eventos
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Agendar Llamada 1:1
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;