
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-[#fcf9f7]">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e8dcd0] overflow-hidden">
        <header className="relative bg-[#c5a689] p-10 text-white text-center overflow-hidden">
          {/* Subtle overlay effect */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/linen.png')]"></div>
          
          <div className="relative z-10">
            <h1 className="text-sm uppercase tracking-[0.3em] font-medium opacity-90 mb-2">O Guia Prático Para Ser</h1>
            <h2 className="text-4xl md:text-5xl font-serif-elegant italic leading-tight">
              Ouvida, Valorizada <br/> <span className="text-white">& Promovida</span>
            </h2>
          </div>
        </header>
        <main className="p-8 md:p-12">
          {children}
        </main>
      </div>
      <footer className="mt-8 text-center space-y-2">
        <p className="text-[#8b735b] text-sm font-medium">@kellyalveseu</p>
        <p className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Career Assessment • Powered by AI
        </p>
      </footer>
    </div>
  );
};

export default Layout;
