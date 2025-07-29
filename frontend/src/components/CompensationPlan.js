import React from "react";
import { compensationPlan } from "../mockData";
import { DollarSign, TrendingUp, Award, Users, Star, Trophy } from "lucide-react";

const CompensationPlan = () => {
  return (
    <section id="plan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plan de Compensación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un sistema de compensación justo y transparente que premia tu esfuerzo 
            y el desarrollo de tu equipo.
          </p>
        </div>

        {/* Membership Cost */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <DollarSign size={32} />
              <span className="text-4xl font-bold">
                {compensationPlan.membership.cost}
              </span>
            </div>
            <p className="text-lg opacity-90">Inversión Inicial</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-orange-500" size={28} />
              Beneficios de Socios
            </h3>
            <ul className="space-y-4">
              {compensationPlan.membership.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commission Levels */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-green-500" size={28} />
              Niveles de Comisión
            </h3>
            <div className="space-y-4">
              {compensationPlan.commissionLevels.map((level, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold text-gray-900">{level.level}</span>
                    <p className="text-sm text-gray-600">{level.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{level.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivational Message Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 rounded-lg p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <Star size={64} className="text-orange-400" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Trophy size={64} className="text-orange-400" />
            </div>
            <div className="absolute top-20 right-20">
              <Users size={48} className="text-orange-400" />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
              {compensationPlan.motivationalMessage.title}
            </h3>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              {compensationPlan.motivationalMessage.subtitle}
            </p>
            
            <div className="my-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h4 className="text-3xl md:text-4xl font-black mb-4 text-orange-300 tracking-wide">
                {compensationPlan.motivationalMessage.mainMessage}
              </h4>
              <p className="text-xl md:text-2xl font-semibold text-white">
                {compensationPlan.motivationalMessage.callToAction}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => {
                  const element = document.getElementById('unete');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ¡ÚNETE AHORA!
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Descargar Plan Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompensationPlan;