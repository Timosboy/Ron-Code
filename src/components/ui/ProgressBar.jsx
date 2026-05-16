import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ progress, label, color = 'var(--color-primary-light)' }) {
  return (
    <div className="progress-container">
      {label && (
        <div className="progress-header">
          <span className="progress-label">{label}</span>
          <span className="progress-value">{progress}%</span>
        </div>
      )}
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
