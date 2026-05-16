import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu } from 'lucide-react';
import Button from '../ui/Button';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Building2 size={28} className="text-primary" />
          <span className="font-bold">Copiloto Inmobiliario</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
        </div>
        
        <div className="navbar-actions">
          <Link to="/login"><Button variant="ghost">Iniciar Sesión</Button></Link>
          <Link to="/register?role=agent"><Button variant="primary">Probar como Agente</Button></Link>
        </div>
        
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
