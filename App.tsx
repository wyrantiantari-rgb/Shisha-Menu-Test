import React from 'react';
import { MENU_DATA } from './data';
import { GoldDivider, CornerDecor } from './components/Decorations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050805] flex items-center justify-center p-0 sm:p-4 md:p-10">
      <div className="max-w-6xl w-full tropical-texture border-[1px] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.9)] relative overflow-hidden sm:rounded-lg">
        
        {/* Decorative Elements */}
        <CornerDecor className="top-0 left-0" />
        <CornerDecor className="top-0 right-0 rotate-90" />
        
        {/* Tropical Hero Header */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552728089-57bdde30eba3?auto=format&fit=crop&q=80&w=1200" 
            alt="Tropical Parrot"
            className="w-full h-full object-cover opacity-60 grayscale-[0.2] sepia-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050805] via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
            <h1 className="text-6xl md:text-9xl font-serif font-bold gold-gradient tracking-tighter uppercase mb-[-10px] md:mb-[-20px] drop-shadow-2xl">
              Signature
            </h1>
            <div className="flex items-center gap-4">
               <span className="h-px w-8 bg-[#F3274D] opacity-80"></span>
               <span className="font-cursive text-4xl gold-text">Shisha Menu</span>
               <span className="h-px w-8 bg-[#F3274D] opacity-80"></span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-16 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.6em] text-[#56C129] uppercase font-bold mb-2">
              The Umalas Experience
            </p>
            <p className="font-serif italic text-gray-400 text-lg">Bali's Premium Selection</p>
          </div>

          <GoldDivider />

          {/* Menu Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mt-16">
            {MENU_DATA.map((section, sIdx) => (
              <div key={sIdx} className="space-y-8 animate-fade-in" style={{ animationDelay: `${sIdx * 0.1}s` }}>
                <div className="text-center">
                  <h2 className="text-2xl font-serif font-bold gold-text tracking-widest uppercase mb-6 inline-block border-b-2 border-[#56C129] pb-2 px-6">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Single Flavors */}
                  <div>
                    <h3 className="text-[9px] tracking-[0.4em] font-black text-gray-500 uppercase mb-5 text-center flex items-center justify-center gap-3">
                      <span className="h-[1px] w-4 bg-gray-800"></span>
                      Single Origins
                      <span className="h-[1px] w-4 bg-gray-800"></span>
                    </h3>
                    <div className="space-y-4">
                      {section.singleFlavors.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center group cursor-default">
                          <span className="font-semibold text-gray-200 group-hover:text-[#56C129] transition-colors">
                            {item.name}
                          </span>
                          <div className="leader-dots border-white/5"></div>
                          <span className="gold-text font-bold text-sm tracking-tighter">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signature Mixes */}
                  <div>
                    <h3 className="text-[9px] tracking-[0.4em] font-black text-gray-500 uppercase mb-5 text-center flex items-center justify-center gap-3">
                       <span className="h-[1px] w-4 bg-[#F3274D]/30"></span>
                       Exotic Mixes
                       <span className="h-[1px] w-4 bg-[#F3274D]/30"></span>
                    </h3>
                    <div className="space-y-6">
                      {section.signatureMixes.map((item, iIdx) => (
                        <div key={iIdx} className="group cursor-default">
                          <div className="flex items-center">
                            <span className="font-bold text-white italic text-lg group-hover:gold-text transition-all duration-300">
                              {item.name}
                            </span>
                            <div className="leader-dots border-gold opacity-20"></div>
                            <span className="gold-text font-bold text-sm tracking-tighter">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-[11px] text-[#56C129] italic mt-1 font-medium leading-tight opacity-80">
                              {item.description}
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
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] tracking-widest text-gray-400 font-bold uppercase">
              <span className="hover:text-[#56C129] transition-colors">Tropical Ingredients</span>
              <span className="text-gold opacity-50">•</span>
              <span className="hover:text-[#F3274D] transition-colors">Natural Coals</span>
              <span className="text-gold opacity-50">•</span>
              <span className="hover:text-[#56C129] transition-colors">Bali Spirit</span>
            </div>
            <div className="mt-10 mb-6">
               <p className="text-[10px] text-gray-600 leading-relaxed max-w-sm mx-auto uppercase tracking-tighter opacity-60">
                 Jalan Bumbak No. 156, Kerobokan Kuta Utara, Bali<br/>
                 Prices exclusive of 10% service & 11% gov tax
               </p>
            </div>
            <div className="inline-block px-4 py-1 border border-gold/20 rounded-full">
               <span className="text-[8px] gold-text tracking-[0.3em] font-bold">UMALAS SIGNATURE EST. 2024</span>
            </div>
          </footer>
        </div>

        {/* Ambience Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#050805]/80 via-transparent to-[#050805]/40"></div>
      </div>
    </div>
  );
};

export default App;