import React from "react";
import { featuredProducts } from "../mockData";
import { ExternalLink, Star } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Productos premiados internacionalmente que se venden solos. 
            Calidad excepcional respaldada por certificaciones globales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300">
                  Ver Catálogo
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;