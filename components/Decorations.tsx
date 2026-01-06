
import React from 'react';

export const Ornament: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 20" className={`w-32 h-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10C20 10 30 0 50 0C70 0 80 10 100 10M0 10C20 10 30 20 50 20C70 20 80 10 100 10" stroke="#D4AF37" strokeWidth="1"/>
    <circle cx="50" cy="10" r="3" fill="#D4AF37" />
  </svg>
);

export const HookahIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 150" className={className} fill="none" stroke="#D4AF37" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 140 C30 140 20 120 20 100 C20 80 35 70 50 70 C65 70 80 80 80 100 C80 120 70 140 50 140 Z" fill="rgba(212, 175, 55, 0.1)" />
    <rect x="47" y="20" width="6" height="50" />
    <circle cx="50" cy="15" r="5" />
    <path d="M53 40 C70 40 85 55 85 80" />
    <path d="M85 80 L90 90" strokeWidth="4" />
  </svg>
);
