import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Users, 
  Home, 
  FileText, 
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Tag
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ role = 'agent' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const agentLinks = [
    { to: '/agent', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/agent/clients', icon: Users, label: 'Clientes' },
    { to: '/agent/properties', icon: Home, label: 'Propiedades' },
    { to: '/agent/contracts', icon: FileText, label: 'Contratos' },
  ];
  
  const clientLinks = [
    { to: '/client', icon: LayoutDashboard, label: 'Mi Panel' },
    { to: '/client/sell', icon: Tag, label: 'Vender Propiedad', special: true },
    { to: '/client/agents', icon: Users, label: 'Mis Agentes' },
    { to: '/client/contracts', icon: FileText, label: 'Contratos' },
  ];
  
  const links = role === 'agent' ? agentLinks : clientLinks;

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <Building2 size={28} className="text-primary flex-shrink-0" />
          {!isCollapsed && <span className="font-bold">Copiloto</span>}
        </Link>
        <button 
          className="sidebar-toggle" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expandir panel" : "Colapsar panel"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
      
      <div className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          return (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`sidebar-link ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed-link' : ''} ${link.special ? 'special-link' : ''}`}
              title={isCollapsed ? link.label : ""}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </div>
      
      <div className="sidebar-footer">
        <Link to="#" className={`sidebar-link ${isCollapsed ? 'collapsed-link' : ''}`} title={isCollapsed ? "Notificaciones" : ""}>
          <Bell size={20} className="flex-shrink-0" />
          {!isCollapsed && <span>Notificaciones</span>}
        </Link>
        <Link to="#" className={`sidebar-link ${isCollapsed ? 'collapsed-link' : ''}`} title={isCollapsed ? "Ajustes" : ""}>
          <Settings size={20} className="flex-shrink-0" />
          {!isCollapsed && <span>Ajustes</span>}
        </Link>
      </div>
    </aside>
  );
}
