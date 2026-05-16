import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Bell, Search, BarChart3, Users, Home } from 'lucide-react';
import './AgentDashboard.css';

function AgentOverview() {
  return (
    <div className="dashboard-content animate-fade-in">
      <header className="dashboard-header">
        <div>
          <h1 className="font-bold text-primary">Panel de Control</h1>
          <p className="text-muted">Resumen de tu actividad y métricas clave.</p>
        </div>
        <div className="flex gap-3">
          <div className="search-bar">
            <Search size={20} className="text-muted" />
            <input type="text" placeholder="Buscar clientes, propiedades..." />
          </div>
          <Button variant="primary">Nueva Propiedad</Button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="kpi-grid mb-4">
        <Card>
          <div className="flex justify-between items-center mb-2">
            <div className="text-muted font-medium">Matches Activos</div>
            <div className="icon-wrapper bg-blue"><Users size={20} className="text-primary" /></div>
          </div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-success text-sm font-medium mt-1">↑ 12% vs mes anterior</div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-2">
            <div className="text-muted font-medium">Propiedades</div>
            <div className="icon-wrapper bg-green"><Home size={20} className="text-success" /></div>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-success text-sm font-medium mt-1">↑ 2 nuevas esta semana</div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-2">
            <div className="text-muted font-medium">Cierre Estimado</div>
            <div className="icon-wrapper bg-orange"><BarChart3 size={20} className="text-warning" /></div>
          </div>
          <div className="text-2xl font-bold">$450k</div>
          <div className="text-muted text-sm font-medium mt-1">Basado en pipeline actual</div>
        </Card>
      </div>

      <div className="dashboard-grid">
        {/* CRM Pipeline */}
        <Card className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="mb-0">Pipeline de Negociación</h3>
            <Button variant="ghost" size="sm">Ver embudo</Button>
          </div>
          
          <div className="pipeline-board">
            <div className="pipeline-column">
              <div className="column-header">
                <Badge variant="info">Contacto (3)</Badge>
              </div>
              <div className="pipeline-card">
                <div className="font-semibold text-sm">Carlos M.</div>
                <div className="text-xs text-muted mb-2">Busca 3 Amb en Belgrano</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">85% Match</span>
                  <div className="avatar">C</div>
                </div>
              </div>
            </div>
            
            <div className="pipeline-column">
              <div className="column-header">
                <Badge variant="warning">Visita (2)</Badge>
              </div>
              <div className="pipeline-card">
                <div className="font-semibold text-sm">Familia Torres</div>
                <div className="text-xs text-muted mb-2">Casa en Martínez</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">92% Match</span>
                  <div className="avatar">F</div>
                </div>
              </div>
            </div>

            <div className="pipeline-column">
              <div className="column-header">
                <Badge variant="success">Oferta (1)</Badge>
              </div>
              <div className="pipeline-card border-success">
                <div className="font-semibold text-sm">Julia S.</div>
                <div className="text-xs text-muted mb-2">Depto Palermo Hollywood</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-success">Oferta: $120k</span>
                  <div className="avatar">J</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Alerts */}
        <Card className="col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="mb-0 flex items-center gap-2">
              <Bell size={20} className="text-warning" />
              Alertas IA
            </h3>
          </div>
          <div className="alerts-list flex-col gap-3">
            <div className="alert-item bg-warning-light p-3 rounded">
              <div className="text-sm font-semibold mb-1">Riesgo en Contrato</div>
              <div className="text-xs text-muted">La propiedad "Casa Martínez" tiene una cláusula inusual en el contrato de reserva.</div>
              <Button variant="outline" size="sm" className="mt-2 w-full">Revisar PDF</Button>
            </div>
            <div className="alert-item bg-success-light p-3 rounded">
              <div className="text-sm font-semibold mb-1">Nuevo Match Perfecto</div>
              <div className="text-xs text-muted">El cliente "Carlos M." tiene un 98% de compatibilidad con tu nueva propiedad.</div>
              <Button variant="primary" size="sm" className="mt-2 w-full">Notificar Cliente</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function AgentDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar role="agent" />
      <main className="dashboard-main bg-secondary">
        <div className="container" style={{ maxWidth: '1200px', padding: 'var(--space-4)' }}>
          <Routes>
            <Route path="/" element={<AgentOverview />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
