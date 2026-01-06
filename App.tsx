import React from 'react';
import { MENU_DATA } from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center">
      <div className="w-full max-w-4xl px-8 py-16 animate-fade-in">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-[#D4AF37] font-serif text-sm tracking-[0.3em] uppercase mb-1">
            The Umalas Signature
          </h2>
          <h1 className="text-[#D4AF37] font-serif text-6xl md:text-7xl font-bold tracking-tight uppercase">
            SISHA MENU
          </h1>
          
          {/* Diamond Ornament Divider */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="h-[1px] w-32 bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
            <div className="flex items-center rotate-45 border border-[#D4AF37] p-[2px]">
               <div className="w-2 h-2 bg-[#D4AF37]"></div>
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          </div>
        </header>

        {/* Main Content Grid (Quadrants) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 px-4">
          
          {/* Vertical Divider Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] opacity-40 bg-repeat-y" 
               style={{ backgroundImage: 'linear-gradient(to bottom, #D4AF37 50%, transparent 50%)', backgroundSize: '1px 8px' }}></div>
          
          {/* Horizontal Divider Line (Desktop only) */}
          <div className="hidden md:block absolute top-[47%] left-0 right-0 h-[1px] opacity-40 bg-repeat-x"
               style={{ backgroundImage: 'linear-gradient(to right, #D4AF37 50%, transparent 50%)', backgroundSize: '8px 1px' }}></div>

          {MENU_DATA.map((section, sIdx) => (
            <div key={sIdx} className="space-y-8">
              <h3 className="text-[#D4AF37] font-serif text-3xl font-bold tracking-wider uppercase mb-6">
                {section.title}
              </h3>

              {/* Single Flavor Section */}
              <div className="space-y-4">
                <p className="text-sm font-bold tracking-widest text-white uppercase mb-4">
                  SINGLE FLAVOR:
                </p>
                {section.singleFlavors.map((flavor, fIdx) => (
                  <div key={fIdx} className="flex justify-between items-baseline group">
                    <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                      {flavor.name}
                    </span>
                    <span className="text-[#D4AF37] font-bold text-sm ml-4 whitespace-nowrap">
                      IDR {flavor.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Signature Mixes Section */}
              <div className="space-y-6 pt-2">
                <p className="text-sm font-bold tracking-widest text-white uppercase mb-4">
                  SIGNATURE MIXES:
                </p>
                {section.signatureMixes.map((mix, mIdx) => (
                  <div key={mIdx} className="flex justify-between items-start group">
                    <div className="flex flex-col pr-4">
                      <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                        {mix.name}
                      </span>
                      {mix.description && (
                        <span className="text-[#D4AF37] italic text-xs mt-1 leading-tight">
                          ({mix.description})
                        </span>
                      )}
                    </div>
                    <span className="text-[#D4AF37] font-bold text-sm whitespace-nowrap mt-1">
                      IDR {mix.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <footer className="mt-24 pt-12 text-center">
          <p className="text-xs text-gray-400 tracking-wider max-w-sm mx-auto leading-relaxed">
            Jalan Bumbak No. 156, Kerobokan Kuta Utara,<br />
            Badung, Bali-80361
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;