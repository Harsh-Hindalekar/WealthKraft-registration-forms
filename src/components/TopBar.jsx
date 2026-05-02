import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-center py-5 md:py-6 bg-slate-900 rounded-t-[2rem] lg:rounded-2xl shadow-lg mb-2">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="WealthKraft Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            WealthKraft
          </h1>
          <span className="text-lg md:text-xl text-primary-gold font-semibold">by Ketan Mali</span>
        </div>
      </div>
    </div>
  );
}
