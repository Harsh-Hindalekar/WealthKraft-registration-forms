import React from 'react';
import { UserCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="WealthKraft Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
        <div>
          <h1 className="text-xl font-bold text-slate-800 leading-tight">
            Wealth<span className="text-primary-gold">Kraft</span>
          </h1>
          <p className="text-xs text-muted-text font-medium mt-0.5">by Ketan Mali</p>
        </div>
      </div>
      <button className="rounded-full overflow-hidden border-2 border-transparent hover:border-primary-gold transition-colors duration-300 drop-shadow-sm">
        <img src="/profile.jpg" alt="Profile" className="w-10 h-10 object-cover" />
      </button>
    </div>
  );
}
