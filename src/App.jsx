import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ClientDashboard from './pages/client/ClientDashboard';
import AgentDashboard from './pages/agent/AgentDashboard';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/*" element={<ClientDashboard />} />
        <Route path="/agent/*" element={<AgentDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
