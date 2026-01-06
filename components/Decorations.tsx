import React from 'react';

export const GoldDivider: React.FC = () => (
  <div className="flex items-center justify-center gap-4 my-8 opacity-80">
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-grow"></div>
    <svg width="40" height="40" viewBox="0 0 100 100" className="fill-[#D4AF37]">
      <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
    </svg>
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-grow"></div>
  </div>
);

export const CornerDecor: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`w-24 h-24 absolute opacity-40 pointer-events-none ${className}`}>
    <path d="M0 0 L100 0 L100 4 L4 4 L4 100 L0 100 Z" fill="#D4AF37" />
    <circle cx="10" cy="10" r="4" fill="#D4AF37" />
  </svg>
);