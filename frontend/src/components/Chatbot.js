import React, { useState, useRef, useEffect } from "react";
import { 
  MessageCircle, X, Send, User, Bot, 
  ShoppingBag, Briefcase, Phone, Calendar 
} from "lucide-react";
import { chatbotResponses } from "../mockData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: chatbotResponses.greeting,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlow, setCurrentFlow] = useState("menu");
  const [userInfo, setUserInfo] = useState({ name: "", whatsapp: "" });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type, content, options = null) => {
    const newMessage = {
      id: Date.now(),
      type,
      content,
      options,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleMenuOption = (optionId) => {
    const option = chatbotResponses.menu.find(m => m.id === optionId);
    addMessage("user", option.text);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage("bot", chatbotResponses.responses[optionId]);
      
      if (optionId === "contacto") {
        setCurrentFlow("contact");
        setTimeout(() => {
          addMessage("bot", "Para conectarte con un líder, necesito algunos datos:", [
            { id: "name", text: "👤 Ingresar nombre", type: "input" },
            { id: "whatsapp", text: "📱 Ingresar WhatsApp", type: "input" }
          ]);
        }, 1000);
      } else {
        setTimeout(() => {
          addMessage("bot", "¿Te puedo ayudar con algo más?", chatbotResponses.menu);
        }, 2000);
      }
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage("user", inputValue);
    const userMessage = inputValue.toLowerCase();
    setInputValue("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      if (currentFlow === "contact") {
        if (!userInfo.name) {
          setUserInfo(prev => ({ ...prev, name: inputValue }));
          addMessage("bot", `Perfecto ${inputValue}! Ahora necesito tu número de WhatsApp:`);
        } else if (!userInfo.whatsapp) {
          setUserInfo(prev => ({ ...prev, whatsapp: inputValue }));
          addMessage("bot", `¡Excelente! Un líder QNET se contactará contigo al ${inputValue} en las próximas 2 horas.`);
          setTimeout(() => {
            addMessage("bot", "¿Hay algo más en lo que pueda ayudarte?", chatbotResponses.menu);
            setCurrentFlow("menu");
          }, 2000);
        }
      } else {
        // Basic keyword matching
        if (userMessage.includes("producto") || userMessage.includes("catálogo")) {
          addMessage("bot", chatbotResponses.responses.productos);
        } else if (userMessage.includes("negocio") || userMessage.includes("ganar") || userMessage.includes("dinero")) {
          addMessage("bot", chatbotResponses.responses.negocio);
        } else if (userMessage.includes("evento") || userMessage.includes("webinar")) {
          addMessage("bot", chatbotResponses.responses.eventos);
        } else {
          addMessage("bot", "No estoy seguro de cómo ayudarte con eso. ¿Puedes elegir una de estas opciones?", chatbotResponses.menu);
        }
      }
    }, 1000);
  };

  const getIcon = (optionId) => {
    const iconMap = {
      productos: <ShoppingBag size={16} />,
      negocio: <Briefcase size={16} />,
      contacto: <Phone size={16} />,
      eventos: <Calendar size={16} />
    };
    return iconMap[optionId] || null;
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-600 hover:bg-blue-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Asistente QNET</h3>
              <p className="text-xs text-blue-100">En línea</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-lg rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm'
                } p-3`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  
                  {/* Options buttons */}
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleMenuOption(option.id)}
                          className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors duration-200"
                        >
                          {getIcon(option.id)}
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Soporte 24/7 • Respuesta inmediata
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;