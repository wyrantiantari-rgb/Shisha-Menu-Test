import React from 'react';

export const DiamondDivider: React.FC = () => (
  <div className="flex items-center justify-center mt-8 space-x-4">
    <div className="h-[1px] w-32 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
    <div className="flex items-center rotate-45 border border-[#D4AF37] p-[2px]">
        <div className="w-2 h-2 bg-[#D4AF37]"></div>
    </div>
    <div className="h-[1px] w-32 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
  </div>
);