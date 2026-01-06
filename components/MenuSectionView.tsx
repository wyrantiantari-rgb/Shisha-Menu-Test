
import React from 'react';
import { MenuSection } from '../types';

interface MenuSectionViewProps {
  section: MenuSection;
}

const MenuSectionView: React.FC<MenuSectionViewProps> = ({ section }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif font-bold gold-text mb-6 tracking-widest text-center uppercase">
        {section.title}
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-800 pb-1">
            Single Flavor
          </h3>
          <div className="space-y-3">
            {section.singleFlavors.map((item, idx) => (
              <div key={idx} className="flex justify-between items-baseline group">
                <span className="text-white font-medium group-hover:gold-text transition-colors duration-300">{item.name}</span>
                <div className="flex-grow mx-3 border-b border-dotted border-gray-700"></div>
                <span className="gold-text font-bold whitespace-nowrap">IDR {item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-800 pb-1">
            Signature Mixes
          </h3>
          <div className="space-y-4">
            {section.signatureMixes.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-baseline">
                  <span className="text-white font-semibold group-hover:gold-text transition-colors duration-300 italic">{item.name}</span>
                  <div className="flex-grow mx-3 border-b border-dotted border-gray-700"></div>
                  <span className="gold-text font-bold whitespace-nowrap">IDR {item.price}</span>
                </div>
                {item.description && (
                  <p className="text-xs text-gray-500 italic mt-1 leading-relaxed">
                    ({item.description})
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSectionView;
