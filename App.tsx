import React from 'react';
import { MENU_DATA } from './data';
import { GoldDivider, CornerDecor } from './components/Decorations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full chalk-texture border-[12px] border-[#151515] shadow-[0_0_100px_rgba(0,0,0,0.9)] relative overflow-hidden rounded-sm">
        
        {/* Decorative Corners */}
        <CornerDecor className="top-0 left-0" />
        <CornerDecor className="top-0 right-0 rotate-90" />
        <CornerDecor className="bottom-0 left-0 -rotate-90" />
        <CornerDecor className="bottom-0 right-0 rotate-180" />

        <div className="p-8 md:p-16 relative z-10">
          {/* Header */}
          <header className="text-center mb-16">
            <p className="text-sm tracking-[0.5em] text-gray-500 uppercase font-medium mb-4">
              Premium Sisha Experience
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold gold-gradient tracking-tighter uppercase mb-2">
              Signature
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-[#D4AF37] opacity-50"></span>
              <span className="font-cursive text-4xl gold-text">Menu</span>
              <span className="h-px w-12 bg-[#D4AF37] opacity-50"></span>
            </div>
            <p className="font-serif italic text-gray-400 text-lg">The Umalas Signature</p>
          </header>

          <GoldDivider />

          {/* Menu Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {MENU_DATA.map((section, sIdx) => (
              <div key={sIdx} className="space-y-8 animate-fade-in">
                <div className="text-center">
                  <h2 className="text-2xl font-serif font-bold gold-text tracking-widest uppercase mb-6 inline-block border-b border-gold pb-1 px-4">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Single Flavors */}
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase mb-4 text-center">
                      — Single Flavors —
                    </h3>
                    <div className="space-y-3">
                      {section.singleFlavors.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center group">
                          <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                          <div className="leader-dots"></div>
                          <span className="gold-text font-bold text-sm tracking-tighter">
                            IDR {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signature Mixes */}
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase mb-4 text-center">
                      — Signature Mixes —
                    </h3>
                    <div className="space-y-5">
                      {section.signatureMixes.map((item, iIdx) => (
                        <div key={iIdx} className="group">
                          <div className="flex items-center">
                            <span className="font-bold text-white italic group-hover:gold-text transition-colors">
                              {item.name}
                            </span>
                            <div className="leader-dots border-gold opacity-30"></div>
                            <span className="gold-text font-bold text-sm tracking-tighter">
                              IDR {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-[10px] text-gray-500 italic mt-1 font-medium leading-tight">
                              ({item.description})
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Information */}
          <footer className="mt-24 text-center border-t border-white/5 pt-12">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] tracking-widest text-gray-500 font-semibold uppercase">
              <span>Handcrafted Flavors</span>
              <span className="text-gold opacity-50">•</span>
              <span>Premium Coal</span>
              <span className="text-gold opacity-50">•</span>
              <span>Signature Experience</span>
            </div>
            <div className="mt-8">
               <p className="text-[9px] text-gray-700 max-w-xs mx-auto">
                 JALAN BUMBAK NO. 156, KEROBOKAN KUTA UTARA, BALI - ALL PRICES ARE SUBJECT TO 10% SERVICE CHARGE & 11% GOVERNMENT TAX
               </p>
            </div>
          </footer>
        </div>

        {/* Atmosphere Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/40 via-transparent to-black/40"></div>
      </div>
    </div>
  );
};

export default App;