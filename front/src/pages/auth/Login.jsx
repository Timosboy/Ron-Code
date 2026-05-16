import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, ArrowRight, Loader2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import './Register.css'; // Reusing the auth layout styles

export default function Login() {
  const navigate = useNavigate();
  
  const [role, setRole] = useState('client');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate(role === 'agent' ? '/agent' : '/client');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-page">
      <div className="register-left hidden md-flex flex-col justify-between p-8">
        <Link to="/" className="flex items-center gap-2" style={{ position: 'relative', zIndex: 10, color: 'white' }}>
          <Building2 size={36} />
          <span className="font-bold text-2xl">Copiloto Inmobiliario</span>
        </Link>
        <div style={{ position: 'relative', zIndex: 10, color: 'white', marginTop: 'auto', marginBottom: 'auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 4px 12px rgba(0,0,0,0.15)', color: 'white' }}>
            Bienvenido de nuevo.
          </h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '400px', lineHeight: 1.6, color: 'white' }}>
            Accede a tu cuenta para continuar donde lo dejaste y seguir cerrando tratos.
          </p>
        </div>
        <div style={{ position: 'relative', zIndex: 10, color: 'white', opacity: 0.8, fontSize: '0.875rem' }}>
          © 2026 Copiloto Inmobiliario
        </div>
      </div>

      <div className="register-right flex items-center justify-center p-4">
        <Card className="register-card animate-fade-in w-full" style={{ maxWidth: '450px' }}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Iniciar sesión</h1>
            <p className="text-muted">Ingresa tus credenciales para acceder</p>
          </div>

          <div className="role-selector mb-6">
            <button 
              className={`role-btn ${role === 'client' ? 'active' : ''}`}
              onClick={() => setRole('client')}
              type="button"
            >
              Soy Cliente
            </button>
            <button 
              className={`role-btn ${role === 'agent' ? 'active' : ''}`}
              onClick={() => setRole('agent')}
              type="button"
            >
              Soy Agente
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input 
              label="Correo electrónico" 
              type="email" 
              name="email" 
              placeholder="maria@ejemplo.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <Input 
              label="Contraseña" 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
            
            <div className="text-right" style={{ marginTop: '-4px' }}>
              <Link to="#" className="text-sm text-primary font-medium">¿Olvidaste tu contraseña?</Link>
            </div>
            
            <Button 
              variant="primary" 
              fullWidth 
              size="lg" 
              className="mt-2"
              disabled={loading}
              type="submit"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : (
                <>Entrar <ArrowRight size={20} /></>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            ¿No tienes una cuenta? <Link to="/register" className="text-primary font-bold">Regístrate</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
