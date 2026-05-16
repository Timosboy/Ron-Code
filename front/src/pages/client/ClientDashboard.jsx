import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Heart, X, MapPin, BedDouble, Bath, Square, Search, Filter, MessageSquare, Bot, Send, Star, Award } from 'lucide-react';
import './ClientDashboard.css';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "1825 Stay",
    type: "Casa",
    location: "La Paz, Bolivia • 0.3 km del centro",
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
    sqft: 85
  },
  {
    id: 2,
    title: "Skyline Apart",
    type: "Departamento",
    location: "Santa Cruz, Bolivia • Equipetrol",
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
    sqft: 60
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
    sqft: 210
  },
  {
    id: 4,
    title: "Luxstone Suites",
    type: "Suite",
    location: "La Paz, Bolivia • Calacoto",
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
    sqft: 45
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
    { sender: 'bot', text: '¡Hola María! Soy tu Copiloto IA. ¿Qué presupuesto manejas o qué características buscas hoy?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const openModal = (property) => {
    setSelectedProperty(property);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProperty(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === 'Todos' || p.type === filterType;
    let matchPrice = true;
    if (filterPrice === 'Menos de 400') matchPrice = p.priceValue < 400;
    if (filterPrice === 'Más de 400') matchPrice = p.priceValue >= 400;
    
    return matchSearch && matchType && matchPrice;
  });

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: chatInput }];
    setChatMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      let reply = "Interesante. Basado en tu comentario, te sugiero mirar el 'Skyline Apart' que tiene excelentes comodidades, o ajustar tus filtros arriba para ver más opciones.";
      const lowerInput = newMsgs[newMsgs.length-1].text.toLowerCase();
      if (lowerInput.includes('barato') || lowerInput.includes('economico') || lowerInput.includes('300')) {
        reply = "Si buscas algo económico, '1825 Stay' en La Paz está a un excelente precio de BOB 374 por dos noches y es un Match IA para ti.";
      } else if (lowerInput.includes('familia') || lowerInput.includes('casa') || lowerInput.includes('amplio')) {
        reply = "Para una estancia más amplia, la 'Villa Minimalista' en Cochabamba cuenta con jardín, parrillero y 3 habitaciones. ¡Ideal para lo que buscas!";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <div className="dashboard-content animate-fade-in" style={{ position: 'relative' }}>
      <header className="dashboard-header mb-4">
        <div>
          <h1 className="font-bold text-primary mb-1">Hola, María 👋</h1>
          <p className="text-muted">Aquí tienes tus propiedades recomendadas basadas en Inteligencia Artificial.</p>
        </div>
      </header>

      {/* Search and Filters Bar */}
      <div className="search-filters-bar mb-6 animate-fade-in">
        <div className="search-input-wrapper">
          <Search size={20} className="text-muted flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Busca por ciudad o zona..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-select-wrapper border-l">
          <Filter size={18} className="text-muted flex-shrink-0" />
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

      <div className="booking-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="b-card hover-lift" onClick={() => openModal(property)}>
              <div className="b-card-img-container">
                <img src={property.image} alt={property.title} className="b-card-img" />
                <button className="b-card-heart" onClick={(e) => { e.stopPropagation(); /* toggle favorite */ }}>
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="b-card-content">
                {property.badge && <span className="b-card-badge">{property.badge}</span>}
                <h3 className="b-card-title">{property.title}</h3>
                <p className="b-card-location">{property.location}</p>
                
                <div className="b-card-rating">
                  <span className="b-rating-score">{property.score}</span>
                  <span className="b-rating-text">{property.ratingText}</span>
                  <span className="b-rating-reviews">{property.reviews} reviews</span>
                </div>
                
                <div className="b-card-footer mt-auto">
                  <span className="b-card-duration">2 nights</span>
                  <div>
                    {property.oldPrice && <span className="b-card-price-old">{property.oldPrice}</span>}
                    <span className="b-card-price-new">{property.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-8 text-center text-muted">
            No se encontraron propiedades que coincidan con tus filtros.
          </div>
        )}
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
            <div className="chatbot-messages">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`chat-bubble-container ${msg.sender}`}>
                  <div className={`chat-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
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
      <main className="dashboard-main bg-secondary" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px', padding: 'var(--space-5)', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<ClientOverview />} />
            <Route path="agents" element={<AgentDirectory />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
