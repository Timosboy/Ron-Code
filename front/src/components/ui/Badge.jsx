import React from 'react';
import './Badge.css';

export default function Badge({ children, variant = 'info', className = '' }) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
}
