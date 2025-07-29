import React, { useState } from "react";
import { testimonials } from "../mockData";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonios" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Testimonios de Líderes
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Conoce las historias reales de éxito de líderes QNET en Argentina
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Quote size={48} className="text-orange-500" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <img 
                src={current.avatar} 
                alt={current.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                <p className="text-orange-600 font-semibold">{current.role}</p>
                <p className="text-gray-600">{current.location}</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
                <Play size={16} />
                Ver Video
              </button>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-orange-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* All testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${
                index === currentTestimonial ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-orange-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                "{testimonial.quote.substring(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;