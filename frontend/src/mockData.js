// Mock data for QNET Argentina website

export const whyQnetFeatures = [
  {
    icon: "🛒",
    title: "#1 Ventas Online sin Inventario",
    description: "Vende productos de calidad mundial sin necesidad de mantener stock. El modelo dropshipping perfecto para emprendedores."
  },
  {
    icon: "⚽",
    title: "Patrocinador Manchester City",
    description: "Respaldados por uno de los clubes más prestigiosos del mundo. Confianza y credibilidad internacional."
  },
  {
    icon: "🌍",
    title: "Comunidad Global 25+ Países",
    description: "Forma parte de una red multinacional con presencia en más de 25 países. Oportunidades sin fronteras."
  },
  {
    icon: "❤️",
    title: "RSE con Fundación RYTHM",
    description: "Compromiso social real. Contribuye al desarrollo comunitario mientras construyes tu negocio."
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: "Nutrición & Bienestar",
    description: "Suplementos nutricionales premium con certificaciones internacionales",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Salud"
  },
  {
    id: 2,
    name: "Cuidado Personal",
    description: "Productos de belleza y cuidado personal con ingredientes naturales",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Belleza"
  },
  {
    id: 3,
    name: "Tecnología & Lifestyle",
    description: "Dispositivos innovadores y productos para un estilo de vida moderno",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Tecnología"
  },
  {
    id: 4,
    name: "Hogar & Jardín",
    description: "Soluciones inteligentes para el hogar y espacios exteriores",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Hogar"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Líder Diamante",
    location: "Buenos Aires, Argentina",
    quote: "En 3 años con QNET logré la libertad financiera que siempre busqué. El sistema funciona si trabajas con constancia.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Líder Oro",
    location: "Córdoba, Argentina",
    quote: "Los productos se venden solos. La calidad es excepcional y mis clientes siempre vuelven por más.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Ana López",
    role: "Líder Plata",
    location: "Rosario, Argentina",
    quote: "El apoyo del equipo es increíble. Nunca me sentí sola en este camino hacia el éxito.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const compensationPlan = {
  membership: {
    originalCost: "USD $40",
    currentCost: "GRATIS",
    promotion: "Aprovecha inscripción gratis por apertura",
    benefits: [
      "Acceso a todos los productos con descuento",
      "Comisiones por ventas directas",
      "Bonos por desarrollo de equipo",
      "Capacitación y soporte 24/7"
    ]
  },
  commissionLevels: [
    { level: "Nivel 1", percentage: "25%", description: "Ventas directas" },
    { level: "Nivel 2", percentage: "15%", description: "Segundo nivel" },
    { level: "Nivel 3", percentage: "10%", description: "Tercer nivel" },
    { level: "Nivel 4+", percentage: "8%", description: "Niveles adicionales" }
  ],
  motivationalMessage: {
    title: "Conoce el Plan de Carrera",
    subtitle: "Te sorprenderás lo espectacular que es, binario por derrame",
    mainMessage: "EL MOMENTO ES AHORA, TOMA TU LUGAR EN LA RED",
    callToAction: "Únete ahora y ten un lugar de privilegio en AMÉRICA"
  }
};

export const upcomingEvents = [
  {
    id: 1,
    title: "Webinar: Introducción a QNET Argentina",
    date: "2024-02-15",
    time: "20:00 ARS",
    type: "Virtual",
    description: "Conoce los fundamentos del negocio QNET y cómo empezar tu camino al éxito."
  },
  {
    id: 2,
    title: "Encuentro Presencial Buenos Aires",
    date: "2024-02-22",
    time: "18:00 ARS",
    type: "Presencial",
    description: "Networking con líderes exitosos y presentación de nuevos productos."
  },
  {
    id: 3,
    title: "Masterclass: Estrategias de Ventas Digitales",
    date: "2024-03-01",
    time: "19:00 ARS",
    type: "Virtual",
    description: "Aprende las mejores técnicas para vender online y construir tu red."
  }
];

export const chatbotResponses = {
  greeting: "¡Hola! Soy el asistente virtual de QNET Argentina. ¿En qué puedo ayudarte hoy?",
  menu: [
    { id: "productos", text: "Conocer productos" },
    { id: "negocio", text: "Oportunidad de negocio" },
    { id: "contacto", text: "Hablar con un líder" },
    { id: "eventos", text: "Próximos eventos" }
  ],
  responses: {
    productos: "Tenemos 4 líneas principales: Nutrición & Bienestar, Cuidado Personal, Tecnología & Lifestyle, y Hogar & Jardín. ¿Te interesa alguna en particular?",
    negocio: "Con QNET puedes generar ingresos desde $500 a $5000+ USD mensuales. El plan de compensación incluye comisiones directas y bonos por desarrollo de equipo. ¿Quieres más detalles?",
    contacto: "Te conecto con uno de nuestros líderes. Por favor, déjame tu nombre y WhatsApp para coordinar una llamada.",
    eventos: "Tenemos webinars semanales y encuentros presenciales mensuales. El próximo webinar es el 15 de febrero a las 20:00 ARS. ¿Te interesa participar?"
  }
};