import React from "react";
import { compensationPlan } from "../mockData";
import { DollarSign, TrendingUp, Award, Users } from "lucide-react";

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
              <span className="text-lg opacity-80">
                {compensationPlan.membership.period}
              </span>
            </div>
            <p className="text-lg opacity-90">Membresía Anual</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-orange-500" size={28} />
              Beneficios Incluidos
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

        {/* Rank Bonuses */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Users className="text-purple-500" size={28} />
            Bonos por Rango de Liderazgo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compensationPlan.rankBonuses.map((rank, index) => {
              const colors = ['bg-amber-100 border-amber-300', 'bg-gray-100 border-gray-300', 'bg-yellow-100 border-yellow-300', 'bg-blue-100 border-blue-300'];
              return (
                <div key={index} className={`${colors[index]} border-2 rounded-lg p-6 text-center`}>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{rank.rank}</h4>
                  <div className="text-3xl font-bold text-green-600 mb-3">{rank.bonus}</div>
                  <p className="text-sm text-gray-600">{rank.requirements}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            Descargar Plan Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompensationPlan;