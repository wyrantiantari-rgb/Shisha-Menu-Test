import React from 'react';

export const GoldDivider: React.FC = () => (
  <div className="flex items-center justify-center gap-6 my-4 opacity-90">
    <div className="h-px bg-gradient-to-r from-transparent via-[#56C129] to-transparent flex-grow"></div>
    <div className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#D4AF37]">
        <path d="M12 2L14.5 9H21L15.5 13L18 20L12 15L6 20L8.5 13L3 9H9.5L12 2Z" />
      </svg>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-[#56C129] to-transparent flex-grow"></div>
  </div>
);

export const CornerDecor: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`w-32 h-32 absolute opacity-20 pointer-events-none ${className}`}>
    <path d="M0 0 C 30 0, 50 10, 50 50 C 10 50, 0 30, 0 0" fill="#56C129" />
    <path d="M5 5 C 25 5, 40 15, 40 40 C 15 40, 5 25, 5 5" fill="#D4AF37" />
  </svg>
);