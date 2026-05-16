import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, ShieldCheck, Star } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero section">
          <div className="container hero-container">
            <div className="hero-content animate-fade-in">
              <div className="hero-badge">✨ Nueva era inmobiliaria</div>
              <h1 className="hero-title">
                La forma más inteligente de <span className="text-primary">vender y alquilar</span>
              </h1>
              <p className="hero-subtitle text-muted">
                Copiloto Inmobiliario usa Inteligencia Artificial para hacer match entre propiedades y clientes ideales, analizar contratos en segundos y valuar con precisión de mercado.
              </p>
              <div className="hero-cta flex gap-3">
                <Link to="/register?role=client">
                  <Button variant="primary" size="lg">Encontrar mi propiedad ideal</Button>
                </Link>
                <Link to="/register?role=agent">
                  <Button variant="secondary" size="lg">Probar como agente</Button>
                </Link>
              </div>
            </div>
            <div className="hero-visual animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" 
                  alt="Casa moderna inteligente" 
                />
                <div className="hero-floating-badge">
                  <div className="flex gap-2 items-center">
                    <ShieldCheck size={20} className="text-success" />
                    <div>
                      <div className="text-sm font-bold">Match Perfecto</div>
                      <div className="text-xs text-muted">IA Valuación: Precio Justo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Preview Section */}
        <section className="properties-section container animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="mb-1">Propiedades Exclusivas</h2>
              <p className="text-muted">Encuentra espacios increíbles seleccionados por nuestra IA.</p>
            </div>
            <Button variant="ghost" className="hidden md-flex">Explorar catálogo →</Button>
          </div>
          <div className="properties-grid">
            <div className="property-image-card hover-lift">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Casa Moderna" />
              <div className="property-image-overlay">
                <div className="font-bold text-lg">Casa Moderna en Zona Norte</div>
                <div className="text-sm" style={{ opacity: 0.9 }}>98% Match con tu perfil</div>
              </div>
            </div>
            <div className="property-image-card hover-lift">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Villa Minimalista" />
              <div className="property-image-overlay">
                <div className="font-bold text-lg">Villa Minimalista</div>
                <div className="text-sm" style={{ opacity: 0.9 }}>Ideal para inversión</div>
              </div>
            </div>
            <div className="property-image-card hover-lift">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Departamento Céntrico" />
              <div className="property-image-overlay">
                <div className="font-bold text-lg">Penthouse con vista al río</div>
                <div className="text-sm" style={{ opacity: 0.9 }}>Alta rentabilidad</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features section bg-secondary">
          <div className="container">
            <div className="text-center" style={{marginBottom: 'var(--space-6)'}}>
              <h2>Tecnología que impulsa tus resultados</h2>
              <p className="text-muted">Diseñado para la velocidad, precisión y confianza.</p>
            </div>
            
            <div className="features-grid">
              <Card hoverable className="feature-card">
                <div className="feature-icon bg-blue">
                  <Brain size={24} className="text-primary" />
                </div>
                <h3>Matchmaking Inteligente</h3>
                <p className="text-muted">
                  Nuestro algoritmo de IA conecta el perfil exacto del cliente con la propiedad perfecta, reduciendo el tiempo de búsqueda en un 70%.
                </p>
              </Card>
              
              <Card hoverable className="feature-card">
                <div className="feature-icon bg-green">
                  <TrendingUp size={24} className="text-success" />
                </div>
                <h3>Valuación Dinámica</h3>
                <p className="text-muted">
                  Conoce al instante si una propiedad es una oportunidad, está en su precio justo o sobrevaluada basado en miles de datos del mercado en tiempo real.
                </p>
              </Card>
              
              <Card hoverable className="feature-card">
                <div className="feature-icon bg-orange">
                  <ShieldCheck size={24} className="text-warning" />
                </div>
                <h3>Análisis de Contratos</h3>
                <p className="text-muted">
                  Sube cualquier contrato en PDF y nuestra IA identificará cláusulas abusivas, riesgos ocultos y generará un resumen ejecutivo simple.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials section">
          <div className="container text-center">
            <h2>Lo que dicen nuestros usuarios</h2>
            <div className="testimonials-grid mt-5">
              <Card className="testimonial-card text-left">
                <div className="flex gap-1 mb-2 text-warning">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="mb-3">"El análisis de contratos con IA me salvó de firmar un acuerdo con cláusulas muy desfavorables. La interfaz es hermosa y fácil de usar."</p>
                <div className="font-semibold">- María G., Cliente</div>
              </Card>
              <Card className="testimonial-card text-left">
                <div className="flex gap-1 mb-2 text-warning">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="mb-3">"Como agente inmobiliario, mi productividad se multiplicó. El dashboard es como el de Stripe pero para inmuebles. Increíble."</p>
                <div className="font-semibold">- Carlos R., Agente Inmobiliario</div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section section text-center" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <h2 style={{ color: 'white' }}>¿Listo para el futuro del Real Estate?</h2>
            <p style={{ opacity: 0.8, marginBottom: 'var(--space-4)', maxWidth: '600px', margin: '0 auto var(--space-4)' }}>
              Únete a miles de agentes y clientes que ya están experimentando la nueva forma de transaccionar propiedades.
            </p>
            <Link to="/register?role=client">
              <Button variant="secondary" size="lg">Comenzar Gratis</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
