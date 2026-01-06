
import React from 'react';
import { MENU_DATA } from './data';
import MenuSectionView from './components/MenuSectionView';
import { Ornament, HookahIcon } from './components/Decorations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen chalkboard-bg text-gray-200 p-4 md:p-8 lg:p-12 selection:bg-yellow-900 selection:text-white">
      {/* Container with a "book" or "board" feel */}
      <div className="max-w-6xl mx-auto border-4 border-gray-900 p-4 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm">
        
        {/* Decorative corner patterns */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 gold-border opacity-30 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 gold-border opacity-30 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 gold-border opacity-30 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 gold-border opacity-30 rounded-br-lg"></div>

        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="h-px bg-gray-800 flex-grow max-w-[100px]"></div>
            <p className="text-sm tracking-[0.3em] font-semibold text-gray-400 uppercase italic">
              The Umalas Signature
            </p>
            <div className="h-px bg-gray-800 flex-grow max-w-[100px]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2 mb-4">
            <span className="font-cursive text-4xl gold-text opacity-80">Menu</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold gold-gradient uppercase tracking-tighter leading-none py-2">
              Sisha
            </h1>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#D4AF37]"></span>
              <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase italic gold-text">Lounge & Bar</span>
              <span className="h-px w-12 bg-[#D4AF37]"></span>
            </div>
          </div>
          
          <div className="flex justify-center my-8">
            <Ornament />
          </div>

          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 opacity-10 hidden xl:block">
            <HookahIcon className="w-32 h-auto" />
          </div>
          <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 opacity-10 hidden xl:block scale-x-[-1]">
            <HookahIcon className="w-32 h-auto" />
          </div>
        </header>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 relative">
          {/* Vertical divider for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 opacity-50 -translate-x-1/2"></div>
          
          {MENU_DATA.map((section, idx) => (
            <MenuSectionView key={idx} section={section} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-gray-800 pt-8">
          <div className="flex justify-center mb-6">
            <Ornament className="rotate-180" />
          </div>
          <p className="text-xs text-gray-500 tracking-widest leading-loose">
            Jalan Bumbak No. 156, Kerobokan Kuta Utara,<br />
            Badung, Bali-80361
          </p>
          <div className="mt-8 flex justify-center gap-8 opacity-40 grayscale">
             {/* Fruit Illustrations (Placeholders) */}
             <img src="https://picsum.photos/id/493/100/100" alt="Fruit" className="w-12 h-12 rounded-full border border-gray-700 p-1" />
             <img src="https://picsum.photos/id/1080/100/100" alt="Fruit" className="w-12 h-12 rounded-full border border-gray-700 p-1" />
             <img src="https://picsum.photos/id/102/100/100" alt="Fruit" className="w-12 h-12 rounded-full border border-gray-700 p-1" />
          </div>
        </footer>
      </div>
      
      {/* Responsive Overlay for atmosphere */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
};

export default App;
