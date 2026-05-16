import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Heart, X, MapPin, BedDouble, Bath, Square, Search, Filter, MessageSquare, Bot, Send, Star, Award, Sparkles, ExternalLink } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import SellProperty from './SellProperty';
import './ClientDashboard.css';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "1825 Stay",
    type: "Casa",
    location: "Cochabamba, Bolivia • La Recoleta",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    score: 8.9,
    ratingText: "Excelente",
    reviews: 94,
    oldPrice: "BOB 534",
    price: "BOB 374",
    priceValue: 374,
    badge: "Match IA",
    description: "Un espacio único en el corazón de la ciudad. Completamente remodelado con toques modernos manteniendo su arquitectura clásica. Cuenta con todas las comodidades modernas en un entorno patrimonial inigualable.",
    amenities: ["Wi-Fi gratis", "Cocina equipada", "Balcón", "Mascotas permitidas"],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 85,
    lat: -17.3780,
    lng: -66.1550
  },
  {
    id: 2,
    title: "Skyline Apart",
    type: "Departamento",
    location: "Cochabamba, Bolivia • Zona Central",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    score: 9.2,
    ratingText: "Excepcional",
    reviews: 128,
    oldPrice: "BOB 871",
    price: "BOB 522",
    priceValue: 522,
    badge: "Match IA",
    description: "Apartamento de lujo con piscina en la azotea y vistas panorámicas de la ciudad. Ubicado en la zona más exclusiva y de mayor crecimiento de la ciudad.",
    amenities: ["Piscina", "Gimnasio", "Parqueo", "Seguridad 24/7"],
    bedrooms: 1,
    bathrooms: 1,
    sqft: 60,
    lat: -17.3910,
    lng: -66.1580
  },
  {
    id: 3,
    title: "Villa Minimalista",
    type: "Casa",
    location: "Cochabamba, Bolivia • Zona Norte",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
    score: 8.1,
    ratingText: "Muy Bien",
    reviews: 49,
    oldPrice: "BOB 473",
    price: "BOB 378",
    priceValue: 378,
    badge: "Recomendado",
    description: "Casa independiente con un jardín amplio y diseño minimalista. Ideal para familias que buscan tranquilidad sin alejarse de la ciudad.",
    amenities: ["Jardín", "Parrillero", "Parqueo doble", "Aire acondicionado"],
    bedrooms: 3,
    bathrooms: 3,
    sqft: 210,
    lat: -17.3550,
    lng: -66.1700
  },
  {
    id: 4,
    title: "Luxstone Suites",
    type: "Suite",
    location: "Cochabamba, Bolivia • Cala Cala",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    score: 8.8,
    ratingText: "Excelente",
    reviews: 821,
    oldPrice: "BOB 802",
    price: "BOB 441",
    priceValue: 441,
    badge: "Match IA",
    description: "Suites ejecutivas en la zona sur, perfectas para viajes de negocios o estadías prolongadas. Incluye servicio de limpieza y atención personalizada.",
    amenities: ["Wi-Fi alta velocidad", "Desayuno incluido", "Limpieza diaria", "Lavandería"],
    bedrooms: 1,
    bathrooms: 1,
    sqft: 45,
    lat: -17.3700,
    lng: -66.1650
  }
];

const MOCK_AGENTS = [
  {
    id: 1,
    name: "Carlos Mendoza",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
    rating: 4.9,
    reviews: 142,
    specialty: "Ventas Rápidas",
    description: "Especialista en cerrar tratos rápidos al mejor precio del mercado.",
    badge: "Top Seller"
  },
  {
    id: 2,
    name: "Ana Sofía Ríos",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    rating: 4.8,
    reviews: 98,
    specialty: "Propiedades de Lujo",
    description: "Encuentra compradores ideales para propiedades de alto estándar.",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Luis Fernando",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    rating: 4.7,
    reviews: 215,
    specialty: "Zonas Comerciales",
    description: "Experto analista de inversiones comerciales y terrenos.",
    badge: "Inversiones"
  }
];

function AgentDirectory() {
  return (
    <div className="dashboard-content animate-fade-in">
      <header className="dashboard-header mb-6">
        <div>
          <h1 className="font-bold text-primary mb-1">Directorio de Agentes 🤝</h1>
          <p className="text-muted">Encuentra al agente ideal con las mejores calificaciones para vender tu propiedad.</p>
        </div>
      </header>

      <div className="agent-grid">
        {MOCK_AGENTS.map(agent => (
          <div key={agent.id} className="agent-card hover-lift">
            <div className="agent-header">
              <img src={agent.photo} alt={agent.name} className="agent-avatar" />
              <div className="agent-info">
                <h3 className="font-bold text-primary mb-1">{agent.name}</h3>
                <div className="agent-rating-wrapper">
                  <Star size={16} className="text-warning" style={{fill: "var(--color-warning)"}} />
                  <span className="agent-rating-score font-bold">{agent.rating}</span>
                  <span className="agent-rating-reviews text-muted">({agent.reviews} reseñas)</span>
                </div>
              </div>
            </div>
            
            <div className="agent-body">
              {agent.badge && <span className="agent-badge"><Award size={14} /> {agent.badge}</span>}
              <p className="agent-specialty font-semibold mt-3 mb-1">{agent.specialty}</p>
              <p className="agent-desc text-muted text-sm">{agent.description}</p>
            </div>
            
            <div className="agent-footer mt-auto pt-4 border-t">
              <Button variant="primary" fullWidth size="md">Contactar para Vender</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientOverview() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Todos');
  const [filterPrice, setFilterPrice] = useState('Todos');

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: '¡Hola María! Soy tu Copiloto IA 🏡\n\nDime tu presupuesto o qué características buscas y te recomendaré las mejores opciones.\n\nPuedes preguntarme cosas como:\n• "Busco algo menor a 400 BOB"\n• "Quiero algo económico"\n• "Necesito algo para familia"\n• "Tengo un presupuesto de 500"' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  const openModal = (property) => {
    setSelectedProperty(property);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProperty(null);
    document.body.style.overflow = 'auto';
  };

  const handlePropertyClickFromChat = (property) => {
    openModal(property);
  };

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === 'Todos' || p.type === filterType;
    let matchPrice = true;
    if (filterPrice === 'Menos de 400') matchPrice = p.priceValue < 400;
    if (filterPrice === 'Más de 400') matchPrice = p.priceValue >= 400;
    
    return matchSearch && matchType && matchPrice;
  });

  // Smart price extraction from user input
  const extractBudget = (text) => {
    const lower = text.toLowerCase();
    // Match explicit numbers like "500", "BOB 400", "400 bob", "presupuesto de 500"
    const numberMatch = lower.match(/(\d{2,})/g);
    if (numberMatch) {
      return parseInt(numberMatch[0]);
    }
    return null;
  };

  // Find properties by price range
  const findPropertiesByBudget = (budget, tolerance = 0.3) => {
    const min = budget * (1 - tolerance);
    const max = budget * (1 + tolerance);
    return MOCK_PROPERTIES.filter(p => p.priceValue >= min && p.priceValue <= max)
      .sort((a, b) => Math.abs(a.priceValue - budget) - Math.abs(b.priceValue - budget));
  };

  const findCheapProperties = () => {
    return [...MOCK_PROPERTIES].sort((a, b) => a.priceValue - b.priceValue).slice(0, 2);
  };

  const findExpensiveProperties = () => {
    return [...MOCK_PROPERTIES].sort((a, b) => b.priceValue - a.priceValue).slice(0, 2);
  };

  const findFamilyProperties = () => {
    return MOCK_PROPERTIES.filter(p => p.bedrooms >= 2 || p.sqft >= 100);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    const newMsgs = [...chatMessages, { sender: 'user', text: userMessage }];
    setChatMessages(newMsgs);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let reply = '';
      let recommendations = [];

      // 1) Check for explicit budget number
      const budget = extractBudget(lowerInput);
      
      if (budget !== null) {
        const matches = findPropertiesByBudget(budget);
        if (matches.length > 0) {
          reply = `🎯 ¡Encontré ${matches.length} opción${matches.length > 1 ? 'es' : ''} cerca de BOB ${budget}! Haz clic en cualquiera para ver todos los detalles:`;
          recommendations = matches;
        } else {
          // No exact match, show closest options
          const closest = [...MOCK_PROPERTIES].sort((a, b) => Math.abs(a.priceValue - budget) - Math.abs(b.priceValue - budget)).slice(0, 2);
          reply = `No encontré opciones exactas para BOB ${budget}, pero estas son las más cercanas a tu presupuesto:`;
          recommendations = closest;
        }
      }
      // 2) Check for "cheap"/"economic" keywords
      else if (lowerInput.includes('barato') || lowerInput.includes('económico') || lowerInput.includes('economico') || lowerInput.includes('bajo') || lowerInput.includes('menor precio') || lowerInput.includes('menos de')) {
        const lessThanMatch = lowerInput.match(/menos de\s*(\d+)/);
        if (lessThanMatch) {
          const limit = parseInt(lessThanMatch[1]);
          const under = MOCK_PROPERTIES.filter(p => p.priceValue < limit).sort((a, b) => a.priceValue - b.priceValue);
          if (under.length > 0) {
            reply = `💰 Estas opciones están por debajo de BOB ${limit}. ¡Toca cualquiera para explorarla!`;
            recommendations = under;
          } else {
            reply = `No hay opciones por debajo de BOB ${limit}, pero estas son las más económicas que tenemos:`;
            recommendations = findCheapProperties();
          }
        } else {
          recommendations = findCheapProperties();
          reply = '💰 Aquí tienes las opciones más económicas. ¡Haz clic para ver más detalles!';
        }
      }
      // 3) Check for "expensive"/"luxury" keywords
      else if (lowerInput.includes('caro') || lowerInput.includes('lujo') || lowerInput.includes('premium') || lowerInput.includes('exclusivo') || lowerInput.includes('mejor')) {
        recommendations = findExpensiveProperties();
        reply = '✨ Estas son nuestras opciones premium con las mejores comodidades:';
      }
      // 4) Check for family/space keywords
      else if (lowerInput.includes('familia') || lowerInput.includes('casa') || lowerInput.includes('amplio') || lowerInput.includes('grande') || lowerInput.includes('habitaciones') || lowerInput.includes('niños')) {
        recommendations = findFamilyProperties();
        reply = '👨‍👩‍👧‍👦 Estas propiedades son ideales para familias, con más espacio y habitaciones:';
      }
      // 5) Check for location keywords
      else if (lowerInput.includes('la paz') || lowerInput.includes('santa cruz') || lowerInput.includes('cochabamba')) {
        const city = lowerInput.includes('la paz') ? 'La Paz' : lowerInput.includes('santa cruz') ? 'Santa Cruz' : 'Cochabamba';
        const cityMatches = MOCK_PROPERTIES.filter(p => p.location.includes(city));
        if (cityMatches.length > 0) {
          reply = `📍 Encontré ${cityMatches.length} opción${cityMatches.length > 1 ? 'es' : ''} en ${city}:`;
          recommendations = cityMatches;
        } else {
          reply = `No tengo opciones en ${city} en este momento, pero te muestro las más populares:`;
          recommendations = MOCK_PROPERTIES.slice(0, 2);
        }
      }
      // 6) Check for "price" related keywords
      else if (lowerInput.includes('precio') || lowerInput.includes('cuesta') || lowerInput.includes('cuanto') || lowerInput.includes('cuánto') || lowerInput.includes('rango') || lowerInput.includes('presupuesto')) {
        const sorted = [...MOCK_PROPERTIES].sort((a, b) => a.priceValue - b.priceValue);
        reply = `📊 Nuestras propiedades van desde BOB ${sorted[0].priceValue} hasta BOB ${sorted[sorted.length-1].priceValue}. Aquí tienes todas ordenadas por precio:`;
        recommendations = sorted;
      }
      // 7) General/fallback — show all sorted by score
      else {
        const topRated = [...MOCK_PROPERTIES].sort((a, b) => b.score - a.score).slice(0, 3);
        reply = '🏠 Basándome en tu consulta, te recomiendo estas propiedades mejor calificadas. ¡Haz clic en cualquiera para ver los detalles!';
        recommendations = topRated;
      }

      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply, recommendations }]);
    }, 1200);
  };

  return (
    <div className="dashboard-content map-view-active animate-fade-in" style={{ position: 'relative', height: '100%', padding: 0 }}>
      
      {/* Floating Header & Search Panel */}
      <div className="map-floating-panel animate-fade-in" onClick={e => e.stopPropagation()}>
        <div className="map-welcome">
          <h1 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text-main)' }}>Encuentra tu lugar ideal</h1>
          <p className="text-sm text-muted">Explora las mejores propiedades recomendadas para ti.</p>
        </div>
        
        <div className="map-search-wrapper mt-4">
          <div className="search-input-wrapper">
            <Search size={18} className="text-muted flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Busca por zona o tipo..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-select-wrapper border-l">
            <select className="filter-select" value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="Todos">Tipo: Todos</option>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
          <div className="filter-select-wrapper border-l hidden-mobile">
            <select className="filter-select" value={filterPrice} onChange={e => setFilterPrice(e.target.value)}>
              <option value="Todos">Precio: Todos</option>
              <option value="Menos de 400">Menos de BOB 400</option>
              <option value="Más de 400">Más de BOB 400</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Map Container */}
      <div className="map-container" onClick={() => setSelectedProperty(null)}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSy_dummy_key_for_development_purposes"}>
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: -17.3795, lng: -66.1568 }}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="DEMO_MAP_ID"
            style={{ width: '100%', height: '100%' }}
          >
            {filteredProperties.map((property) => (
              <AdvancedMarker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={(e) => { e.domEvent.stopPropagation(); openModal(property); }}
                zIndex={selectedProperty?.id === property.id ? 100 : 1}
              >
                <div className={`map-pin-wrapper custom-marker ${selectedProperty?.id === property.id ? 'active' : ''}`}>
                  <div className="map-pin">
                    <MapPin size={24} className="map-pin-icon" />
                  </div>
                  <div className="map-pin-price-label">{property.price}</div>
                </div>
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>

        <div className="map-overlay-subtle"></div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="property-modal-overlay" onClick={closeModal}>
          <div className="property-modal animate-fade-in" onClick={e => e.stopPropagation()}>
            <button className="property-modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} className="property-modal-img" />
            
            <div className="property-modal-content">
              <div className="flex justify-between items-start mb-4" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedProperty.title}</h2>
                  <p className="text-muted flex items-center gap-1">
                    <MapPin size={16} /> {selectedProperty.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{selectedProperty.price}</div>
                  <div className="text-sm text-muted">Precio final por 2 noches</div>
                </div>
              </div>

              <div className="flex gap-4 mb-6 border-b pb-6" style={{ flexWrap: 'wrap' }}>
                <div className="flex items-center gap-2 text-muted">
                  <BedDouble size={20} />
                  <span>{selectedProperty.bedrooms} Habitaciones</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Bath size={20} />
                  <span>{selectedProperty.bathrooms} Baños</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Square size={20} />
                  <span>{selectedProperty.sqft} m²</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Acerca de la propiedad</h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>{selectedProperty.description}</p>
              </div>

              <div>
                <h3 className="font-bold mb-3">Amenidades</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.amenities.map((amenity, i) => (
                    <span key={i} className="amenity-chip">
                      <Heart size={14} className="text-primary" /> {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4" style={{ flexWrap: 'wrap' }}>
                <Button variant="primary" className="flex-1" size="lg">Reservar ahora</Button>
                <Button variant="outline" className="flex-1" size="lg">Contactar al agente</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Floating UI */}
      <div className="chatbot-wrapper">
        {isChatOpen && (
          <div className="chatbot-window animate-fade-in">
            <div className="chatbot-header">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Copiloto IA</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="chatbot-close"><X size={18} /></button>
            </div>
            <div className="chatbot-messages" ref={chatMessagesRef}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`chat-bubble-container ${msg.sender}`}>
                  <div className={`chat-bubble ${msg.sender}`}>
                    {msg.text}
                    {/* Render recommendation cards inside bot messages */}
                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="chat-recommendations">
                        {msg.recommendations.map((prop) => (
                          <div
                            key={prop.id}
                            className="chat-rec-card"
                            onClick={() => handlePropertyClickFromChat(prop)}
                          >
                            <img src={prop.image} alt={prop.title} className="chat-rec-img" />
                            <div className="chat-rec-info">
                              <div className="chat-rec-title">{prop.title}</div>
                              <div className="chat-rec-location">
                                <MapPin size={10} />
                                {prop.location.split('•')[0].trim()}
                              </div>
                              <div className="chat-rec-bottom">
                                <span className="chat-rec-price">{prop.price}</span>
                                <span className="chat-rec-score">{prop.score} ★</span>
                              </div>
                            </div>
                            <div className="chat-rec-arrow">
                              <ExternalLink size={14} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble-container bot">
                  <div className="chat-bubble bot typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSendChat} className="chatbot-input-area">
              <input 
                type="text" 
                placeholder="Escribe tu consulta..." 
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-send"><Send size={18}/></button>
            </form>
          </div>
        )}
        <button className="chatbot-toggle shadow-xl hover-lift" onClick={() => setIsChatOpen(!isChatOpen)}>
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

    </div>
  );
}

export default function ClientDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar role="client" />
      <main className="dashboard-main bg-secondary" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="container-map-view" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<ClientOverview />} />
            <Route path="sell" element={<SellProperty />} />
            <Route path="agents" element={<div style={{padding: 'var(--space-5)'}}><AgentDirectory /></div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
