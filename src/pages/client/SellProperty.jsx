import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Building2, MapPin, DollarSign, Camera, CheckCircle2, ChevronRight, Star, ArrowLeft, X } from 'lucide-react';
import './SellProperty.css';

const MOCK_AGENTS = [
  {
    id: 1,
    name: 'Roberto Gómez',
    specialty: 'Especialista Residencial',
    rating: 4.9,
    sales: 142,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    bio: 'Con más de 10 años de experiencia en el mercado de Cochabamba, Roberto es conocido por su enfoque agresivo en marketing digital. Su especialidad es vender propiedades residenciales en tiempo récord, logrando en promedio un 5% por encima del precio de mercado.',
    experience: '10 años',
    languages: ['Español', 'Inglés']
  },
  {
    id: 2,
    name: 'Carla Ruiz',
    specialty: 'Propiedades de Lujo',
    rating: 4.8,
    sales: 98,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Carla tiene una cartera exclusiva de clientes e inversores internacionales. Si tu propiedad tiene acabados premium o está en una zona de alta plusvalía, ella es la indicada para conectarte con el comprador ideal discreto y rápido.',
    experience: '7 años',
    languages: ['Español', 'Inglés', 'Portugués']
  },
  {
    id: 3,
    name: 'Diego Blanco',
    specialty: 'Ventas Rápidas',
    rating: 4.7,
    sales: 215,
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    bio: 'Diego es el líder en volumen de ventas. Su red de contactos locales y tasadores le permite cerrar tratos en un promedio de 15 días. Perfecto para clientes que necesitan liquidez inmediata sin tantas complicaciones.',
    experience: '12 años',
    languages: ['Español']
  }
];

export default function SellProperty() {
  const [step, setStep] = useState(1);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [viewingAgent, setViewingAgent] = useState(null);
  const navigate = useNavigate();

  const handleNextStep = () => {
    setStep(2);
  };

  const handleSelectAgent = (agent) => {
    setSelectedAgent(agent);
    // Simulate sending request
    localStorage.setItem('newSaleRequest', 'true');
    setStep(3);
  };

  const handleFinish = () => {
    navigate('/client');
  };

  return (
    <div className="sell-property-container animate-fade-in">
      <div className="sell-header mb-6">
        <button className="back-button text-muted" onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}>
          <ArrowLeft size={20} />
          {step > 1 ? 'Atrás' : 'Volver al panel'}
        </button>
        <h1 className="font-bold text-primary mt-4">Vender mi Propiedad</h1>
        <p className="text-muted">Completa los detalles para encontrar al mejor agente para ti.</p>
      </div>

      {/* Stepper Progress */}
      <div className="stepper mb-8">
        <div className={`stepper-step ${step >= 1 ? 'active' : ''}`}>
          <div className="stepper-circle">1</div>
          <span>Detalles</span>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${step >= 2 ? 'active' : ''}`}>
          <div className="stepper-circle">2</div>
          <span>Agente</span>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${step >= 3 ? 'active' : ''}`}>
          <div className="stepper-circle">3</div>
          <span>Confirmación</span>
        </div>
      </div>

      {step === 1 && (
        <Card className="sell-card animate-slide-up">
          <h2 className="text-xl font-bold mb-4">Detalles Generales</h2>
          <div className="sell-form-grid">
            <div className="form-group">
              <label>Tipo de Propiedad</label>
              <div className="input-with-icon">
                <Building2 size={18} className="text-muted" />
                <select>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Terreno</option>
                  <option>Oficina</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Ubicación</label>
              <div className="input-with-icon">
                <MapPin size={18} className="text-muted" />
                <input type="text" placeholder="Ej. Zona Norte, Cochabamba" />
              </div>
            </div>
            <div className="form-group">
              <label>Precio Esperado (USD)</label>
              <div className="input-with-icon">
                <DollarSign size={18} className="text-muted" />
                <input type="number" placeholder="Ej. 120000" />
              </div>
            </div>
            <div className="form-group">
              <label>Habitaciones</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-4">
            <label>Descripción corta</label>
            <textarea rows="3" placeholder="Describe los puntos fuertes de tu propiedad..."></textarea>
          </div>

          <div className="form-group mt-4 photo-upload-box">
            <Camera size={24} className="text-muted mb-2" />
            <span className="text-sm font-bold text-main">Sube algunas fotos iniciales</span>
            <span className="text-xs text-muted">Formatos JPG, PNG. Max 5MB.</span>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="primary" onClick={handleNextStep}>
              Siguiente <ChevronRight size={18} />
            </Button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <div className="animate-slide-up">
          <h2 className="text-xl font-bold mb-4">Elige tu Agente Ideal</h2>
          <p className="text-muted mb-6">Hemos filtrado los mejores perfiles basados en el tipo y ubicación de tu propiedad.</p>
          
          <div className="agents-grid">
            {MOCK_AGENTS.map(agent => (
              <Card key={agent.id} className="agent-select-card hover-lift" onClick={() => setViewingAgent(agent)} style={{ cursor: 'pointer' }}>
                <div className="agent-profile">
                  <img src={agent.avatar} alt={agent.name} className="agent-avatar" />
                  <div>
                    <h3 className="font-bold text-lg hover-text-primary" style={{ transition: 'color 0.2s' }}>{agent.name}</h3>
                    <p className="text-sm text-primary">{agent.specialty}</p>
                  </div>
                </div>
                
                <div className="agent-stats">
                  <div className="stat-pill">
                    <Star size={14} className="text-warning" />
                    <span>{agent.rating}</span>
                  </div>
                  <div className="stat-pill">
                    <span className="font-bold text-main">{agent.sales}</span>
                    <span className="text-muted">ventas</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 agent-select-btn" onClick={(e) => { e.stopPropagation(); handleSelectAgent(agent); }}>
                  Seleccionar Agente
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Agent Details Modal */}
      {viewingAgent && createPortal(
        <div className="agent-modal-overlay" onClick={() => setViewingAgent(null)}>
          <div className="agent-modal-content animate-slide-up" onClick={e => e.stopPropagation()}>
            <button className="agent-modal-close" onClick={() => setViewingAgent(null)}>
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <img src={viewingAgent.avatar} alt={viewingAgent.name} className="w-20 h-20 rounded-full object-cover border-4 border-primary-light" />
              <div>
                <h2 className="text-2xl font-bold">{viewingAgent.name}</h2>
                <p className="text-primary font-medium">{viewingAgent.specialty}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-secondary p-3 rounded text-center">
                <div className="font-bold text-xl flex items-center justify-center gap-1"><Star size={18} className="text-warning"/> {viewingAgent.rating}</div>
                <div className="text-xs text-muted">Calificación</div>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <div className="font-bold text-xl">{viewingAgent.sales}</div>
                <div className="text-xs text-muted">Ventas Cerradas</div>
              </div>
              <div className="bg-secondary p-3 rounded text-center">
                <div className="font-bold text-xl">{viewingAgent.experience}</div>
                <div className="text-xs text-muted">Experiencia</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Acerca de {viewingAgent.name}</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>{viewingAgent.bio}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-2">Idiomas</h3>
              <div className="flex gap-2">
                {viewingAgent.languages.map(lang => (
                  <span key={lang} className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>{lang}</span>
                ))}
              </div>
            </div>

            <Button variant="primary" className="w-full py-3" onClick={() => { setViewingAgent(null); handleSelectAgent(viewingAgent); }}>
              Confiar mi propiedad a este Agente
            </Button>
          </div>
        </div>,
        document.body
      )}

      {step === 3 && (
        <Card className="text-center py-10 animate-slide-up success-card">
          <div className="success-icon-wrapper mx-auto mb-6">
            <CheckCircle2 size={48} className="text-success" />
          </div>
          <h2 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Has seleccionado a <strong>{selectedAgent?.name}</strong>. El agente ha recibido tu solicitud en su panel y se pondrá en contacto contigo muy pronto para agendar una visita.
          </p>
          <Button variant="primary" onClick={handleFinish}>
            Volver a mi Panel
          </Button>
        </Card>
      )}
    </div>
  );
}
