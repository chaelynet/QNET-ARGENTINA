import React from "react";
import { whyQnetFeatures } from "../mockData";
import { ShoppingCart, Globe, Heart, Award } from "lucide-react";

const WhyQnet = () => {
  const getIcon = (index) => {
    const icons = [ShoppingCart, Award, Globe, Heart];
    const IconComponent = icons[index];
    return <IconComponent size={48} className="text-orange-500" />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegir QNET?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más que una oportunidad de negocio, QNET es tu puerta de entrada 
            a la libertad financiera con respaldo internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyQnetFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-6">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-lg">
            <Award size={24} />
            <span className="font-semibold text-lg">
              Patrocinador Oficial del Manchester City FC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyQnet;