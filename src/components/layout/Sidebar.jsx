import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Users, 
  Home, 
  FileText, 
  Settings,
  Bell
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ role = 'agent' }) {
  const location = useLocation();
  
  const agentLinks = [
    { to: '/agent', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/agent/clients', icon: Users, label: 'Clientes' },
    { to: '/agent/properties', icon: Home, label: 'Propiedades' },
    { to: '/agent/contracts', icon: FileText, label: 'Contratos' },
  ];
  
  const clientLinks = [
    { to: '/client', icon: LayoutDashboard, label: 'Mi Panel' },
    { to: '/client/matches', icon: Home, label: 'Mis Matches' },
    { to: '/client/agents', icon: Users, label: 'Mis Agentes' },
    { to: '/client/contracts', icon: FileText, label: 'Contratos' },
  ];
  
  const links = role === 'agent' ? agentLinks : clientLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <Building2 size={28} className="text-primary" />
          <span className="font-bold">Copiloto</span>
        </Link>
      </div>
      
      <div className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          return (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
      
      <div className="sidebar-footer">
        <Link to="#" className="sidebar-link">
          <Bell size={20} />
          <span>Notificaciones</span>
        </Link>
        <Link to="#" className="sidebar-link">
          <Settings size={20} />
          <span>Ajustes</span>
        </Link>
      </div>
    </aside>
  );
}
